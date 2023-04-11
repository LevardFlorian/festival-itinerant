console.log('slider.js chargé');

const slider = {

    sliderImagesElements: [],

    sliderImagesNumber: 0,

    currentPosition: 0,

    init: function(){
          // on protège notre module : on fait en sorte de ne continuer que si on a bien un élément .carousel sur la page
      if (document.querySelector('.slider') === null) {
        // return ne revoie rien, mais nous permet de stopper l'exécution de la fonction
        return;
    }
        slider.generateSliderImages();
        slider.sliderImagesElements = document.querySelectorAll('.slider__img');    
        slider.sliderImagesNumber = slider.sliderImagesElements.length;
        slider.addEvents();
    },

    addEvents: function(){
        const allButtons = document.querySelectorAll('.slider__btn');
        const previousButton = allButtons[0];
        const nextButton = allButtons[1];
        previousButton.addEventListener('click', slider.handlePreviousSlide);
        nextButton.addEventListener('click', slider.handleNextSlide);
    },

    handlePreviousSlide: function(event){
        console.log('previous slide');
        let newPosition = slider.currentPosition - 1;
        if(newPosition<0){
            newPosition = slider.sliderImagesNumber -1;
        }
        slider.goToSlide(newPosition);
    },

    handleNextSlide: function(event){
        console.log('next slide');
        let newPosition = slider.currentPosition + 1;
        if(newPosition > slider.sliderImagesNumber-1){
            newPosition = 0;
        }
        slider.goToSlide(newPosition);
    },

    goToSlide: function(newPosition){
        if(newPosition >= 0 && newPosition < slider.sliderImagesNumber){
            const currentSliderImage = document.querySelector('.slider__img--current');
            currentSliderImage.classList.remove('slider__img--current');
            const newSliderImage = slider.sliderImagesElements[newPosition];
            newSliderImage.classList.add('slider__img--current');
            slider.currentPosition = newPosition;
        }
    },

    generateSliderImages: function(){
        const sliderImages = [
            'image5.webp',
            'image8.webp',
            'image11.webp',
            'image16.webp',
            'image19.webp',
            'image23.webp',
        ];
        const slider = document.querySelector('.slider');
        for (const image of sliderImages) {
            let img = document.createElement('img');
            img.src = "http://localhost/Projet-Perso/festival-itinerant/wp-content/themes/festival/assets/" + image;
            img.alt = "image slider";
            img.classList.add('slider__img');
            slider.prepend(img);
        }

        const imageToDisplay = document.querySelector('.slider__img');
        imageToDisplay.classList.add('slider__img--current');   
    }

};