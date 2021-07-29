class scrollToTop {
    constructor(query){
        const element = document.querySelector(query)
        if (!element){
            console.log("Failed to initialize scrollToTop module! No elements with selector", query, "found!");
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

class AnimatedNavBar {
    constructor(burgerSelector, panelSelector, extraStuff = function(){}){
        var burger = document.querySelector(burgerSelector),
            panel = document.querySelector(panelSelector);

        if (burger==undefined || panel==undefined){
            console.log("Error: No element found with given selectors!")
            return;
        }
        burger.addEventListener("click", ()=>{
            burger.classList.toggle("clicked");
            panel.classList.toggle("show");
            extraStuff();
        });
    }
}