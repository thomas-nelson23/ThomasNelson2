import { Header, Nav, Main, Footer } from './components';
import * as state from "./store";

import Navigo from "Navigo";
const router = new Navigo(location.origin);


function render(st = state.Home) {
    // console.log(st);
    document.querySelector('#root').innerHTML = `
    ${Header(st)}
    ${Nav()}
    ${Main(st)}
    ${Footer()}
`;
    router.updatePageLinks();
}


router
    .on(":page", params => render(
        state[
        `${params.page.slice(0, 1).toUpperCase()}${params.page
            .slice(1)
            .toLowerCase()}`
        ]
    ))
    .on("/", render())
    .resolve();






//parallax effect (no additional code)
// var parallax = document.querySelector(".hero");
// window.addEventListener("scroll", function () {
//     var scrolledHeight = window.pageYOffset,
//         limit = parallax.offsetTop + parallax.offsetHeight;
//     if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
//         parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
//     } else {
//         parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 5 + "px";
//     }
// });