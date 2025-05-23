

document.addEventListener("DOMContentLoaded", function(e){
    slideSec_slide()
})

const slideSec_slide = () => {
    var swiper = new Swiper(".watermelon .slideSec .slideBox .mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
        loop : true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
              slidesPerView: 1.4,
              spaceBetween: 5,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1520: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        },
    });
}
