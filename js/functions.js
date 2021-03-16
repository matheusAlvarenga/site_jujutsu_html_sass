window.onscroll = function () {
    windowScroll();
};

function windowScroll() {
    if (
        document.getElementById("header").scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.getElementById("header").className = "header header--compact";
    } else {
        document.getElementById("header").className = "header";
    }
}
