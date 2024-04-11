

setupPage()

function setupPage() {
    renderNav()
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
