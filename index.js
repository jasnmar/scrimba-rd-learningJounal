

setupPage()

function setupPage() {
    renderNav()
    renderFooter()
}

function renderNav() {
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


function renderFooter() {
    const footerHTML = `
    <p class="footer-main light">MyLearning Journal</p>
    <p class="footer-copy light">Copyright ©2024</p>
    `
    const footerDiv = document.getElementById("footer")
    footerDiv.innerHTML = footerHTML
}