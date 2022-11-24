var toolOpener = document.querySelectorAll('.js-tooltip-opener');
var toolCloser = document.querySelectorAll('.js-tooltip-closer');

toolOpener.forEach(item => {
    item.addEventListener('click', (e) => {
        toolOpener.forEach(el => {
            el.classList.remove('is-active');
        });
        item.classList.add('is-active')
    });

    toolCloser.forEach(closer => {
        closer.addEventListener('click', (e) => {
            item.classList.remove('is-active');
        });
    });
});
