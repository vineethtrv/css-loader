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

    return sectionEl
}




document.querySelectorAll('#main .section').forEach(elm => {
    elm.addEventListener('click', (e) => {
        let index = parseInt(e.target.dataset.index);
        let showCase = document.querySelector('.showcase');

        showCase.replaceChildren(createLoader((index - 1)));

        
        // console.log(e);
        showCase.dataset.index = index;

        // load code
        document.querySelector('#markup').textContent = LOADERS[index - 1].html;
        document.querySelector('#css').textContent = LOADERS[index - 1].css;
        
        // popup
        document.querySelector('body').classList.add('pop')
        document.querySelector('.overlay').classList.add('in')
    })
})


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
