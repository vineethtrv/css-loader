document.querySelectorAll('section').forEach(elm => {
    elm.addEventListener('click', (e) => {
        let index = 0;
        if (e.target.nodeName === "SPAN") {
            index = parseInt(e.target.parentElement.dataset.index);
            document.querySelector('.showcase').innerHTML = e.target.outerHTML;
            document.querySelector('.showcase')
        } else {
            index = parseInt(e.target.dataset.index);
            document.querySelector('.showcase').innerHTML = e.target.innerHTML;
        }
        // console.log(e);
        document.querySelector('.showcase').dataset.index = index;
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
