const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
    slidesPerView: 1,
    
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        767: {
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 20,
                slideShadows: true,
                stretch: 20,
                depth: 100,
                modifier: 1,
            },
        }
    } 
    
})