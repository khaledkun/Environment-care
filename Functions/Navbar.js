window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');

    sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var height = section.clientHeight;

        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
});