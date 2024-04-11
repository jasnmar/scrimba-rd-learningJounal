import { hero } from "./posts.js"
import { posts } from "./posts.js"
import { renderFooter } from "./index.js"
import { renderNav } from "./index.js"
import { renderMain } from "./index.js"

const pageInfo = document.getElementById("body").dataset.page

if(pageInfo==="more") {
    setupMore()
}

function setupMore() {
    renderNav()
    renderFeature()
    renderMain()
    renderFooter()
}

function renderFeature() {
    const featureDiv = document.getElementById("feature")
    const {date, title, content, summary, image} = hero
    let contentHTML = ""
    content.forEach(message => {
        const {lead, body} = message
        contentHTML += `
            <h2>${lead}</h2>
            <p>${body}</p>
            <br>
        `
        
    });
    const featureHTML = `
        <p class="date">${date}</p>
        <h1>${title}</h1>
        <p>${summary}</p>
        <img src='./images/${image}'>
        ${contentHTML}
    `
    featureDiv.innerHTML = featureHTML

}