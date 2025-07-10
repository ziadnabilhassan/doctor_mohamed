document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slideGroups = document.querySelectorAll(".slide-group");
    const totalSlides = slideGroups.length;
    let currentSlide = 0;

    const dotsContainer = document.querySelector(".slider-dots");
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.className = `dot ${i === 0 ? "active" : ""}`;
        dotsContainer.appendChild(dot);
        dot.addEventListener("click", function () {
            goToSlide(i);
        });
    }

    document.querySelector(".next-btn").addEventListener("click", () => navigate(1));
    document.querySelector(".prev-btn").addEventListener("click", () => navigate(-1));

    function navigate(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        currentSlide = index;
    }

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mousemove", function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 15;
            const rotateY = ((centerX - x) / centerX) * 15;

            this.style.setProperty("--card-rotate-x", `${rotateX}deg`);
            this.style.setProperty("--card-rotate-y", `${rotateY}deg`);
        });

        card.addEventListener("mouseleave", function () {
            this.style.setProperty("--card-rotate-x", "0deg");
            this.style.setProperty("--card-rotate-y", "0deg");
        });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", function (e) {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", function (e) {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            navigate(diff > 0 ? 1 : -1);
        }
    });

    const bokehBackground = document.getElementById("bokeh-background");
    const numBokeh = 25;
    const colors = [
        { start: "rgba(255, 69, 0, .6)", end: "rgba(255, 69, 0, 0.25)" },
        { start: "rgba(255, 0, 0, .6)", end: "rgba(255, 0, 0, 0.25)" },
        { start: "rgba(255, 165, 0, .6)", end: "rgba(255, 165, 0, 0.25)" },
        { start: "rgba(255, 20, 147, .6)", end: "rgba(255, 20, 147, 0.25)" },
        { start: "rgba(238, 130, 238, .6)", end: "rgba(238, 130, 238, 0.25)" },
        { start: "rgba(148, 0, 211, .6)", end: "rgba(148, 0, 211, 0.25)" }
    ];

    for (let i = 0; i < numBokeh; i++) {
        const bokeh = document.createElement("div");
        bokeh.className = "bokeh";
        const size = Math.random() * 120 + 50;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const background = `radial-gradient(circle, ${color.start} 0%, ${color.end} 100%)`;
        const animationDelay = `${Math.random() * 2}s`;
        const animationDuration = `${Math.random() * 10 + 10}s`;

        Object.assign(bokeh.style, {
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            background: background,
            animationDelay: animationDelay,
            animationDuration: animationDuration
        });

    }
});


// const pageScroll = () => {
    
//     const header = document.querySelector('#mainHeader')
//     document.addEventListener('scroll', (e) => {
//         var scroll = window.pageYOffset
//         var mediaSize = window.innerWidth
//         console.log(mediaSize)
//         if (scroll > 300 && mediaSize >= 768) {
//             header.classList.add('sticky-header')
//         } else {
//             header.classList.remove('sticky-header')
//         }
        
//     })

// }

// pageScroll()

// Activating Lateral Menu

const showMenu = (toggleId, navId) => {
    const toggle =  document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        })
    }
}

showMenu('header-toggle', 'nav-menu');

// Changing Active Link

const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));