
import { renderFooter } from "./index.js"
import { renderNav } from "./index.js"
import { renderMain } from "./index.js"

//Make sure this is the about page, and if so
//do the stuff for that page.
const pageInfo = document.getElementById("body").dataset.page
if(pageInfo==="about") {
    setupAbout()
}

function setupAbout() {
    renderNav()
    renderMain()
    renderFooter()
}