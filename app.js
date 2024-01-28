let nav = document.getElementById('overlay_content')
let iconHamburger = document.getElementsByClassName('icon_hamburger')
let imageNav = document.getElementById('imageNav')
function toggleNav() {
    nav.classList.toggle('activeNav')
    if (nav.className.includes('activeNav')) {
        imageNav.setAttribute('src', './images/icon-close-menu.svg')
    } else {
        imageNav.setAttribute('src', './images/icon-hamburger.svg')
    }
}
let bookMarkImage = document.querySelector(".bookmark_img")
let bookMarkBtn = document.querySelector(".bookmark button")
let bookmark = document.querySelector(".bookmark")
bookmark.addEventListener("click", (click) => {
    if ((click)) {
        bookMarkImage.setAttribute("Src", "./images/icon-bookmark2.svg")
        bookMarkBtn.style.color = "var(--DARK-CYAN)"
        bookMarkBtn.textContent = "Bookmarked"
    }
    else {
        bookMarkBtn.setAttribute("src", "./images/icon-bookmark.svg")
        bookMarkBtn.style.color = "var(--DARK-GRAY)"
        bookMarkBtn.textContent = "Bookmark"

    }
})
let popupDisplay1 = document.querySelector(".popMenu")
function DisplayPopup() {
    popupDisplay1.classList.toggle("active")
}