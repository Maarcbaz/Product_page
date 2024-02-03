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
let popMenu_project = document.querySelector('.popmenu_project')
function displayPopupMsg() {
    popMenu_project.classList.toggle("active_popup_project")
}
let increases = document.querySelectorAll(".increase")
let decreases = document.querySelectorAll(".decrease")
let inPuts = document.querySelectorAll(".number")
inPuts.forEach(input => {
    input
    // inPuts.style.color = "var(--BLACK)"
    increases.forEach(increase => {
       increase.addEventListener("click", () => {
            input.innerHTML++
        })
    })
    decreases.forEach(decrease => {
        decrease.addEventListener("click", () => {
            input.innerHTML--
        })
    
    })
})
// GETTING EACH MAIN ELEMENT 
let popupRewards = document.querySelectorAll(".popupReward")
popupRewards.forEach(popupReward => {
    popupReward.addEventListener("click", () => {
        popupReward.style.border = "1px solid var(--DARK-CYAN)"

        // let rewards = document.querySelectorAll(".pledge_section")
        // console.log(rewards);
        // rewards.forEach(reward => {
        //     reward.style.display = "block"
        // });
        // for (let i = 0; i < rewards.length; i++) {
        //     rewards.style.display = "block"
        // }
    })
});
// let ttxs = document.querySelectorAll(".rewardType")
// let i, j;
// for (i = 0; i < ttxs.length; i++) {
//     ttxs[i]
//     console.log(ttxs[i]);
//     console.log(ttxs[i].textContent)
//     let btnOpts = document.querySelectorAll(".btnCon")
//     btnOpts.forEach(btnOpt => {
//     })
// }

let btns = document.querySelectorAll(".btnS")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Thanks for supporting our project")
    })
});

let btnO = document.querySelector(".btnO").addEventListener("click", () => {
    alert("This produt is no more available")
})