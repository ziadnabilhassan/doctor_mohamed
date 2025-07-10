// /////////////////////
// window.addEventListener("scroll", function () {
//     let nav = document.querySelector(".navbar");
//     nav.classList.toggle("fix", window.scrollY > 150);
// }) 
//////////////////////////
// ////////////////////////////////////////////
var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 400,
    rtl:false,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items:1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});
// /////////

var owl = $('#slider_2');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:3
        }
    }
});
// /////////

// 
// ////////////////////////////////////////////
var owl = $('#slider_3');
owl.owlCarousel({
    items:2, 
  // items change number for slider display on desktop
  
    loop:true,
    // margin:-100,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:false,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 2,
        },
   
    
    }
});
// /////////

// window.addEventListener("scroll" , function () {
//     let scrollUp = document.querySelector(".scroll_up");
//     scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
//     scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
// })
//     let scrollUp = document.querySelector(".scroll_up");

// scrollUp.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         behavior:"smooth"
//     })
// })

// ظظظظظظظظظ

