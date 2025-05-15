document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    const headerCarouselContainer = document.querySelector('.header-carousel-container');
    const headerSlides = document.querySelectorAll('.header-carousel-slide');
    const headerPrevButton = document.querySelector('.header-carousel-prev');
    const headerNextButton = document.querySelector('.header-carousel-next');
    let headerCurrentIndex = 0;
    const slideWidth = headerSlides[0].offsetWidth; 
    let intervalId;
    const animationSpeed = 3000; 

    function moveCarousel() {
        headerCurrentIndex++;
        headerCarouselContainer.style.transform = `translateX(-${headerCurrentIndex * slideWidth}px)`;
    }

    function nextHeaderSlide() {
        clearInterval(intervalId); 
        headerCurrentIndex++;
        if (headerCurrentIndex >= headerSlides.length) {
            headerCurrentIndex = 0;
        }
        headerCarouselContainer.style.transform = `translateX(-${headerCurrentIndex * slideWidth}px)`;
        startCarousel(); 
    }

    function prevHeaderSlide() {
        clearInterval(intervalId); 
        headerCurrentIndex--;
        if (headerCurrentIndex < 0) {
            headerCurrentIndex = headerSlides.length - 1;
        }
        headerCarouselContainer.style.transform = `translateX(-${headerCurrentIndex * slideWidth}px)`;
        startCarousel(); 
    }

    function startCarousel() {
        intervalId = setInterval(moveCarousel, animationSpeed);
    }

    if (headerPrevButton && headerNextButton && headerCarouselContainer && headerSlides.length > 0) {
        headerSlides.forEach((slide, index) => {
            let imageUrl;
            switch (index) {
                case 0: imageUrl = 'eu e caua.jpg'; break;
                case 1: imageUrl = 'fotos.jpg'; break;
                case 2: imageUrl = 'amor.jpg'; break;
                case 3: imageUrl = 'foto3.jpg'; break;
                case 4: imageUrl= 'tofu e mary.jpg
                
            }
            slide.style.backgroundImage = `url('${imageUrl}')`;
        });

        headerPrevButton.addEventListener('click', prevHeaderSlide);
        headerNextButton.addEventListener('click', nextHeaderSlide);

        
        startCarousel();

        
        headerCarouselContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
        headerCarouselContainer.addEventListener('mouseleave', startCarousel);
    }
});