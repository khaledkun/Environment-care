document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    // Show the button when scrolling down
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    });
});