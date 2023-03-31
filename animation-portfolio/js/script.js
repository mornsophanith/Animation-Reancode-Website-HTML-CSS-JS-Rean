var typed = new Typed(".multiple-text", {
    strings: ["Fronted Developer", "Student at AEU"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

// back to top 
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top end

//=============== toggle icon navbar ======================//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//=============== scroll section active link ======================//
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header n av a');

 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    });

    //=============== sticky navbar ======================//
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    //=============== remove toggle icon and navbar when click navbar link (scroll) ======================//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
; }

    //=============== scroll reveal animation ======================//
    ScrollReveal({ 
        reset: true ,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-image, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
