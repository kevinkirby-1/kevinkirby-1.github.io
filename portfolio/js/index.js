window.addEventListener('load', () => {
    const home_label = document.querySelector('#home_label');
    const home_icon = document.querySelector('#home_icon');

    const about_label = document.querySelector('#about_label');
    const about_icon = document.querySelector('#about_icon');

    const work_label = document.querySelector('#work_label');
    const work_icon = document.querySelector('#work_icon');

    const contact_label = document.querySelector('#contact_label');
    const contact_icon = document.querySelector('#contact_icon');
})
function showHome() {
        home_label.setAttribute('style', 'width: 175px; color: var(--blue)');
        home_icon.style.color = 'var(--blue)';
}

function hideHome() {
    home_label.setAttribute('style', 'width: 0px; color: var(--dark)');
    home_icon.style.color = 'var(--dark)';
}

function showAbout() {
        about_label.setAttribute('style', 'width: 270px; color: var(--blue)');
        about_icon.style.color = 'var(--blue)';
}

function hideAbout() {
    about_label.setAttribute('style', 'width: 0px; color: var(--dark)');
    about_icon.style.color = 'var(--dark)';
}


function showWork() {
    work_label.setAttribute('style', 'width: 240px; color: var(--blue)');
    work_icon.style.color = 'var(--blue)';
}

function hideWork() {
    work_label.setAttribute('style', 'width: 0px; color: var(--dark)');
    work_icon.style.color = 'var(--dark)';
}


function showContact() {
    contact_label.setAttribute('style', 'width: 310px; color: var(--blue)');
    contact_icon.style.color = 'var(--blue)';
}

function hideContact() {
    contact_label.setAttribute('style', 'width: 0px; color: var(--dark)');
    contact_icon.style.color = 'var(--dark)';
}