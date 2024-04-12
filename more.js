import { hero } from "./posts.js"
import { renderFooter } from "./index.js"
import { renderNav } from "./index.js"
import { renderMain } from "./index.js"

//Make sure this is the more page and do the right stuff for
//that page
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

//Renders the feature post
function renderFeature() {
    const featureDiv = document.getElementById("feature")
    //Get the data from the "hero" post, which is a specific post
    const {date, title, content, summary, image} = hero
    //make sure the div is empty
    let contentHTML = ""
    //The way I organized the data is that content is an array
    //with multiple lead statments and then some details
    //So we need to iterate through that array getting the lead
    // and body of the post
    content.forEach(message => {
        const {lead, body} = message
        contentHTML += `
            <h2>${lead}</h2>
            <p>${body}</p>
            <br>
        `
        
    });
    //Build the overall post, including the content
    //from above.
    const featureHTML = `
        <p class="date">${date}</p>
        <h1>${title}</h1>
        <p>${summary}</p>
        <img src='./images/${image}'>
        ${contentHTML}
    `
    featureDiv.innerHTML = featureHTML

}