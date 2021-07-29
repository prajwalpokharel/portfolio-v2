/*
    Copyright (c) 2021 soulr344 @ github
*/

/**
 * Adds a click listener to a pre-existing element `selector` that
 * scrolls the page to the top when clicked.
 * @param {string} selector The selector to add the clickable feature.
 * @return {void}
*/
class scrollToTop {
    constructor(selector){
        const element = document.querySelector(selector)
        if (!element){
            console.log("Failed to initialize scrollToTop module! No elements with selector", selector, "found!");
            return null;
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 20){
                element.style = "display: grid;";
            } else {
                element.removeAttribute("style");
            }
            if (window.pageYOffset >= 50) {
                element.style = "display: grid; opacity: 1;";
            }
        });
        element.addEventListener("click", () => {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });
        });
    }
}

/**
 * Toggles a class of a burger div and a navigation panel to create an animated navbar.
 * @param {string} burgerSelector The selector of burger div.
 * @param {string} panelSelector The selector of navigation panel.
 * @param {Function} extraStuff Callback function that runs on every click to the burger.
 * @return {void}
*/
class AnimatedNavBar {
    constructor(burgerSelector, panelSelector, extraStuff = null){
        var burger = document.querySelector(burgerSelector),
            panel = document.querySelector(panelSelector);

        if (burger==undefined || panel==undefined){
            console.log("Error: No element found with given selectors!")
            return;
        }
        burger.addEventListener("click", ()=>{
            burger.classList.toggle("clicked");
            panel.classList.toggle("show");
            if (extraStuff != null) extraStuff();
        });
    }
}