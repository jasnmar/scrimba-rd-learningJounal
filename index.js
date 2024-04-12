import { posts } from './posts.js'
import { hero } from './posts.js'

//Check to make sure that the page being rendered 
//is index.html. If so do the setup work for that page
const pageInfo = document.getElementById("body").dataset.page
if(pageInfo==="index") {
    setupIndexPage()
}

// Setup the index or home page
function setupIndexPage() {
    renderNav()
    renderHero()
    renderMain()
    renderFooter()
}

//Responsible fore rendering the nav
//Exported because it is used in other pages as well
export function renderNav() {
    const navDiv = document.getElementById("nav")
    const navHTML = `
    <div class="navbar">
        <img class="logo" src="./images/image 17.png">
        <p class="title ">My Learning Journal</p>
    </div>
    <ul class="">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About Me</a></li>
    </ul>
    `
    navDiv.innerHTML = navHTML
}

//Renders the hero section of the home page
function renderHero() {
    const heroDiv = document.getElementById('hero')
    const {date, title, summary} = hero
    const heroHTML = `
        <p class="date light">${date}</p>
        <h1 class="light">${title}</h1>
        <p class="hero-para light">${summary}</p>
    `
    heroDiv.innerHTML = heroHTML
}

//Renders the "blog" portion of the site.
//Exported because this gets rendered on multiple pages.
export function renderMain() {
    const mainDiv = document.getElementById("main-content")
    //Make sure the div doesn't have any content
    mainDiv.innerHTML = ""
    //use a var so we don't have to update the innerHTML multiple times
    let artHTML = ""
    //I stored all of the posts in a variable
    posts.forEach(post => {
        const {date, title, summary, image, alt} = post
        artHTML += `
            <article class='main-article'>
                <img class="blog-img" src="./images/${image}" alt="${alt}">
                <p class="date">${date}</p>
                <p class="blog-title">${title}</p>
                <p class="blog-body">${summary}</p>
            </article>
            `
    });
    mainDiv.innerHTML = artHTML

}

//Renders the page footer
//export because it it's called on other pages as well
export function renderFooter() {
    const footerHTML = `
    <p class="footer-main light">MyLearning Journal</p>
    <p class="footer-copy light">Copyright ©2024</p>
    `
    const footerDiv = document.getElementById("footer")
    footerDiv.innerHTML = footerHTML
}