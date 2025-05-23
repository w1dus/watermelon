

document.addEventListener("DOMContentLoaded", function(e){
    slideSec_slide()
})

const slideSec_slide = () => {
    var swiper = new Swiper(".watermelon .slideSec .slideBox .mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
    });
}
