
import { Links } from "../store"

function linksBuilder(links) {
    return links.map(link => `<li class=navLi><a href="./${link}">${link}</a></li>`).join()
}

console.log(linksBuilder(Links))

export default () => `
<nav>
<span class="fas burger fa-bars is-hidden--tablet"></span>

    <ul id="navigation" class="is-shown--tablet">
        ${linksBuilder(Links)}
    </ul>
</nav>
`




    // < a href = "" >
    //     <li class=navLi>Home</li>
    //     </a >
    // <a href="/about/index.html">
    //     <li class=navLi>About</li>
    // </a>
    // <a href="/blog/index.html">
    //     <li class=navLi>Blog</li>
    // </a>
    // <a href="/projects/index.html">
    //     <li class=navLi>Projects</li>
    // </a>
    // <a href="/contact/index.html">
    //     <li class=navLi>Contact</li>
    // </a>