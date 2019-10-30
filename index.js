import { header, nav, main, footer } from "./components";

const state = {
    Home: {
        heading: "test",
        mainContent: `
                <div class="hero">
                    <a href="#" class="btn">CTA</a>
                </div>

                <div class="text">
                <section class="content">
                    <h2>Hello</h2>
                    <p>>I am a front-end web developer, audio engineer, and musician.</p>
                    <a href="#" class="btn btn--read">Read More!</a>
                </section>

                <section class="content">
                    <h2>Something Else</h2>
                    <p>more stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore
                    stufyy blah blah</p>
                    <a href="#" class="btn btn--read">Read More!</a>
                </section>

                <section class="content">
                    <h2>And another one</h2>
                    <p>more stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blah</p>
                    <a href="#" class="btn btn--read">DON'T CLICK</a>
                </section>
                </div>
        `
    }
};




document.querySelector('#root').innerHTML = `
${ header(state.Home)}
${ nav()}
${ main(state.Home)}
${ footer()}
`;