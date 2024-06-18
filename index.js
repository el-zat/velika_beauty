
const swiper = new Swiper('.gallery__swiper', options);

options = {
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 500,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    }