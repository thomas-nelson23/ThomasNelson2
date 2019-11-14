import { header, nav, main, footer } from './components';
import { about, contact, blog, home } from './components/views';

import * as state from "./store";


function render(state) {
    document.querySelector('#root').innerHTML = `
    ${header(state)}
    ${nav()}
    ${main(st)}
    ${footer()}
`;
}

function handleNavigation(event) {
    const component = event.target.textContent;
    event.preventDefault();
    console.log(event.target.textContent)
    render(state[component]);
}


render(state);


document.querySelector('#navigation a')
    .addEventListener('click', handleNavigation);

document.querySelector('#navigation a:nth-child(2)')
    .addEventListener('click', handleNavigation);

document.querySelector('#navigation a:nth-child(3)')
    .addEventListener('click', handleNavigation);







//parallax effect (no additional code)
var parallax = document.querySelector(".hero");
window.addEventListener("scroll", function () {
    var scrolledHeight = window.pageYOffset,
        limit = parallax.offsetTop + parallax.offsetHeight;
    if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
    } else {
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 5 + "px";
    }
});