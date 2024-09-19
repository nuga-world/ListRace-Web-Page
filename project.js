let lastScrollTop = 0;
const navbar = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // scrolling down
        navbar.style.top = '-40px'; //Adjust this value to the height of your navbar
    } else {
        //Scrolling up
        navbar.style.top = '0';
    }
    // lastScrollTop = scrollTop
    scrollTop= lastScrollTop
})

