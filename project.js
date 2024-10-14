let lastScrollTop = 0;
const navbar = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // scrolling down
        navbar.style.top = '-55px'; //Adjust this value to the height of your navbar
    } else {
        //Scrolling up
        navbar.style.top = '0';
    }
    // lastScrollTop = scrollTop
    scrollTop= lastScrollTop
})



let slideIndex = 0;

const slides = document.querySelectorAll('.single-testimonial-box')

const totalSlides = slides.length;

const showSlide =  (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('first-slide', i === index);
    });
    document.querySelector('.testimonial-carousel').style.transform = `translateX(-${index * 100}%)`;
};

const nextSlide = () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
};


// document.querySelector('.next').addEventListener('click', nextSlide);

setInterval(() => { //THIS ALSO WORKS TO SET INTERVAL
    nextSlide()
}, 2000);



const prevSlide =() => {
    slideIndex = (slideIndex - 1) % totalSlides;
                    //OR
    // slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex)
};

// document.querySelector('.prev').addEventListener('click', prevSlide);

// setInterval(nextSlide, 2000);

                OR
setInterval(() => { //THIS ALSO WORKS TO SET INTERVAL
    prevSlide()
}, 1000);
