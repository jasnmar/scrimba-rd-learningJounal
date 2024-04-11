import { posts } from './posts.js'
import { hero } from './posts.js'

const pageInfo = document.getElementById("body").dataset.page
if(pageInfo==="index") {
    setupIndexPage()
}


function setupIndexPage() {
    renderNav()
    renderHero()
    renderMain()
    renderFooter()
    console.log(posts)
}

export function renderNav() {
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
    const navDiv = document.getElementById("nav")
    navDiv.innerHTML = navHTML

}

function renderHero() {
    const heroDiv = document.getElementById('hero')
    const {date, title, content, summary, image} = hero
    const heroHTML = `
        <p class="date light">${date}</p>
        <h1 class="light">${title}</h1>
        <p class="hero-para light">${summary}</p>
    `
    heroDiv.innerHTML = heroHTML

}

export function renderMain() {
    const mainDiv = document.getElementById("main-content")
    mainDiv.innerHTML = ""
    let artHTML = ""
    posts.forEach(post => {
        const {date, title, content, summary, image, alt} = post
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


export function renderFooter() {
    const footerHTML = `
    <p class="footer-main light">MyLearning Journal</p>
    <p class="footer-copy light">Copyright ©2024</p>
    `
    const footerDiv = document.getElementById("footer")
    footerDiv.innerHTML = footerHTML
}