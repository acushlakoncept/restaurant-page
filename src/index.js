import renderHome from './home'
import renderMenu from './menu'

renderHome();

let tabLinks = document.querySelectorAll('.nav-link')
let content = document.getElementById('content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // renderTab(e)
        console.log(e.target.textContent)
        if (e.target.textContent === 'Home') {
            content.innerHTML = '';
            renderHome();
        }

        if (e.target.textContent === 'Menu') {
            content.innerHTML = '';
            renderMenu();
        }
    })
});


$('.carousel').carousel()