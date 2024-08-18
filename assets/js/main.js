/*=============== COPYRIGHT ===============*/
var currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = "© " + currentYear + " MealDeal. All rights reserved.";

/*=============== FORM SUBMISSION ===============*/
function submitForm(event) {
    event.preventDefault();

    // Clear input fields and do nothing
    document.getElementById("form-email").value = "";
    document.getElementById("form-subject").value = "";
    document.getElementById("form-message").value = "";
}

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header")
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".questions-item")

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions-header")

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open")

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions-content")

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style")
        item.classList.remove("accordion-open")
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px"
        item.classList.add("accordion-open")
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]")

    function scrollActive() {
        const scrollY = window.scrollY

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute("id"),
                link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add("active-link");
                } else {
                    link.classList.remove("active-link");
                }
            }
        })
    }

    window.addEventListener("scroll", scrollActive);
});


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-data`)
sr.reveal(`.home-img`, { delay: 500 })
sr.reveal(`.home-social`, { delay: 600 })
sr.reveal(`.about-img, .contact-box`, { origin: "left" })
sr.reveal(`.about-data, .contact-form`, { origin: "right" })
sr.reveal(`.steps-card, .members-card, .questions-group, .footer`, { interval: 100 })
