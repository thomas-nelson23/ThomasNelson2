import { header, nav, main, footer } from './components';

import * as state from "./store";

import Navigo from "Navigo";
const router = new Navigo(location.origin);


function render(st = state.home) {
    document.querySelector('#root').innerHTML = `
    ${header(st)}
    ${nav()}
    ${main(st)}
    ${footer()}
`;
    router.updatePageLinks();
}


router.on(":page", params =>
    render(
        state[
        `${params.page.slice(0, 1).toUpperCase()}${params.page
            .slice(1)
            .toLowerCase()}`
        ]
    )

)
    .on("/", render())
    .resolve()



// function handleNavigation(event) {
//     const component = event.target.textContent;
//     event.preventDefault();
//     console.log(event.target.textContent)
//     render(state[component]);
// }


// document.querySelector('#navigation a')
//     .addEventListener('click', handleNavigation);

// document.querySelector('#navigation a:nth-child(2)')
//     .addEventListener('click', handleNavigation);

// document.querySelector('#navigation a:nth-child(3)')
//     .addEventListener('click', handleNavigation);



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