window.onload = () => {
    const burger = document.querySelector(".burger-menu"),
          navpane = document.querySelector("nav ul"),
          topmain = document.querySelector(".top-main main"),
          pcontainer = document.querySelector(".pointer-container");

    burger.addEventListener('click', () => {
        burger.classList.toggle("clicked");
        navpane.classList.toggle("show");
        document.body.classList.toggle("noscroll");
        topmain.classList.toggle("blur");
        pcontainer.classList.toggle("blur");
    })

    const learnmore = document.querySelector("#learn-more");
    learnmore.addEventListener("click", () => {
        document.querySelector("body > main").scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

function scrollToTop(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });      
}
