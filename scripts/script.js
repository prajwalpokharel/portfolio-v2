(() => {
    new scrollToTop(".gototop");
    new AnimatedNavBar(".burger-menu", ".top-main nav ul", () => {
        const topmain = document.querySelector(".top-main main"),
              pcontainer = document.querySelector(".pointer-container");

        document.body.classList.toggle("noscroll");
        topmain.classList.toggle("blur");
        pcontainer.classList.toggle("blur");
    });
})();