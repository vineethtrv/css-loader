import { BUBBLE } from './loaders/bubble.js';
import { CIRCLE } from './loaders/circle.js';
import { RECT } from './loaders/rect.js';
import { LINE } from './loaders/line.js';
import { PROGRESS } from './loaders/progress.js';
import { TEXT } from './loaders/text.js';
import { GRAPH } from './loaders/graph.js';
import { OBJECTS } from './loaders/objects.js';
import { SKELETON } from './loaders/skeleton.js';



const LOADERS = [...CIRCLE, ...BUBBLE, ...RECT, ...LINE, ...PROGRESS, ...TEXT, ...OBJECTS, ...GRAPH , ...SKELETON ];

const STORAGE_KEY = 'css-loader-favourites';

function getFavourites() {
    try {
        return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
    } catch {
        return new Set();
    }
}

function saveFavourites(favs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs]));
}

let favourites = getFavourites();
let showFavsOnly = false;

const main = document.getElementById('main');


// Create Spinners 
LOADERS.forEach((loader, i) => {    
    // Append Loader
    main.appendChild(createLoader(i));
    
})


function createLoader(i){
    let loader = LOADERS[i];
   
    // Create html
    let sectionEl = document.createElement('div');
    sectionEl.setAttribute('class', 'section');
    sectionEl.setAttribute('data-id', loader.id);
    sectionEl.setAttribute('data-index', (i + 1));
    let shadowRoot = sectionEl.attachShadow({ mode: 'open' });
    
    let loaderEl = document.createElement('span');
    loaderEl.setAttribute('class', 'loader');
    loaderEl.innerHTML = loader.content || null;
    shadowRoot.appendChild(loaderEl);

    //Create CSS 
    let loaderStyles = document.createElement('style');
    loaderStyles.type = 'text/css';
    loaderStyles.innerHTML = loader.css;
    shadowRoot.appendChild(loaderStyles);

    // Slot lets light DOM children (fav button) render through the shadow root
    shadowRoot.appendChild(document.createElement('slot'));

    return sectionEl
}


// Add favourite buttons and click handlers to each section
document.querySelectorAll('#main .section').forEach(elm => {
    const id = elm.dataset.id;

    // Favourite button
    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn' + (favourites.has(id) ? ' active' : '');
    favBtn.innerHTML = '&#9829;';
    favBtn.title = 'Add to favourites';
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (favourites.has(id)) {
            favourites.delete(id);
            favBtn.classList.remove('active');
        } else {
            favourites.add(id);
            favBtn.classList.add('active');
        }
        saveFavourites(favourites);
        if (showFavsOnly) applyFilter();
    });
    elm.appendChild(favBtn);

    // Open popup on section click
    elm.addEventListener('click', (e) => {
        let index = parseInt(elm.dataset.index);
        let showCase = document.querySelector('.showcase');

        showCase.replaceChildren(createLoader((index - 1)));

        showCase.dataset.index = index;

        // load code
        document.querySelector('#markup').textContent = LOADERS[index - 1].html;
        document.querySelector('#css').textContent = LOADERS[index - 1].css;
        
        // popup
        document.querySelector('body').classList.add('pop')
        document.querySelector('.overlay').classList.add('in')
    })
})


// Favourites filter toggle button in header
const filterBtn = document.createElement('button');
filterBtn.className = 'fav-filter-btn';
filterBtn.innerHTML = '&#9829; Favourites';
filterBtn.addEventListener('click', () => {
    showFavsOnly = !showFavsOnly;
    filterBtn.classList.toggle('active', showFavsOnly);
    applyFilter();
});
document.querySelector('header nav').prepend(filterBtn);

function applyFilter() {
    main.classList.toggle('favs-active', showFavsOnly);
    const sections = document.querySelectorAll('#main .section');
    let visibleIndex = 0;
    sections.forEach(section => {
        const isHidden = showFavsOnly && !favourites.has(section.dataset.id);
        section.classList.toggle('hidden', isHidden);
        section.classList.remove('alt-bg');
        if (!isHidden) {
            section.classList.toggle('alt-bg', visibleIndex % 2 === 0);
            visibleIndex++;
        }
    });
}


// close popup
document.querySelector('.btn-close').addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('pop')
    document.querySelector('.overlay').classList.remove('in');
});

document.querySelector('.overlay').addEventListener('click', (e) => {
    if (e.target.className === "overlay in") {
        document.querySelector('body').classList.remove('pop')
        document.querySelector('.overlay').classList.remove('in');
    }
});


// Copy to clipboard
document.querySelectorAll('.copy').forEach(copyBtn => {
    copyBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        selectText(id);
        document.execCommand("copy");
        e.target.textContent = 'Copied';

        setTimeout( time => e.target.textContent = 'Copy' , 300);
    })
});


// select Text
function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
