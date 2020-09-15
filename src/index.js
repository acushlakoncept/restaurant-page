import renderHome from './home'
import renderMenu from './menu'
import renderContact from './contact'

renderHome();

let tabLinks = document.querySelectorAll('.nav-link')
let content = document.getElementById('content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {

        if (e.target.textContent === 'Home') {
            renderPage(content, renderHome)
        }

        if (e.target.textContent === 'Menu') {
            renderPage(content, renderMenu)
        }

        if (e.target.textContent === 'Contact') {
            renderPage(content, renderContact)
        }

    })
});

const renderPage = (location, page) => {
    location.innerHTML = '';
    page();
}


$('.carousel').carousel()