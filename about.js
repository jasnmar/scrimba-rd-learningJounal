
import { posts } from "./posts.js"
import { renderFooter } from "./index.js"
import { renderNav } from "./index.js"
import { renderMain } from "./index.js"

const pageInfo = document.getElementById("body").dataset.page

if(pageInfo==="about") {
    setupAbout()
}

function setupAbout() {
    renderNav()
    renderMain()
    renderFooter()
}