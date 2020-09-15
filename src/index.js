import renderHome from './home'
import renderMenu from './menu'

renderHome();

let tabLinks = document.querySelectorAll('.nav-link')
let content = document.getElementById('content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        
        console.log(e.target.textContent)
        if (e.target.textContent === 'Home') {
            renderPage(content, renderHome)
        }

        if (e.target.textContent === 'Menu') {
            renderPage(content, renderMenu)
        }

    })
});

const renderPage = (location, page) => {
    location.innerHTML = '';
    page();
}


$('.carousel').carousel()