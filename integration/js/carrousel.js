console.log('carrousel.js chargé');

const carrousel = {

    carrouselImagesElements: [],

    carrouselImagesNumber: 0,

    currentPosition: 0,

    init: function(){
        carrousel.generateCarrouselImages();
        carrousel.carrouselImagesElements = document.querySelectorAll('.carrousel__img');    
        carrousel.carrouselImagesNumber = carrousel.carrouselImagesElements.length;
        carrousel.addEvents();
    },

    addEvents: function(){
        const allButtons = document.querySelectorAll('.carrousel__btn');
        const previousButton = allButtons[0];
        const nextButton = allButtons[1];
        previousButton.addEventListener('click', carrousel.handlePreviousCarrousel);
        nextButton.addEventListener('click', carrousel.handleNextCarrousel);
    },

    handlePreviousCarrousel: function(event){
        console.log('previous Carrousel');
        let newPosition = carrousel.currentPosition - 1;
        if(newPosition<0){
            newPosition = carrousel.carrouselImagesNumber -1;
        }
        carrousel.goToCarrousel(newPosition);
    },

    handleNextCarrousel: function(event){
        console.log('next Carrousel');
        let newPosition = carrousel.currentPosition + 1;
        if(newPosition > carrousel.carrouselImagesNumber-1){
            newPosition = 0;
        }
        carrousel.goToCarrousel(newPosition);
    },

    goToCarrousel: function(newPosition){
        if(newPosition >= 0 && newPosition < carrousel.carrouselImagesNumber){
            const currentCarrouselImage = document.querySelector('.carrousel__img--current');
            currentCarrouselImage.classList.remove('carrousel__img--current');
            const newCarrouselImage = carrousel.carrouselImagesElements[newPosition];
            newCarrouselImage.classList.add('carrousel__img--current');
            carrousel.currentPosition = newPosition;
        }
    },

    generateCarrouselImages: function(){
        const carrouselImages = [
            'New_affiche_Nougaro.png',
            'Affiche_Ragdalam.png',
            'AFFICHE_MECHANTE.jpg'
        ];
        const carrousel = document.querySelector('.carrousel');
        for (const image of carrouselImages) {
            let img = document.createElement('img');
            img.src = "../assets/" + image;
            img.alt = "image carrousel";
            img.classList.add('carrousel__img');
            carrousel.prepend(img);
        }

        const imageToDisplay = document.querySelector('.carrousel__img');
        imageToDisplay.classList.add('carrousel__img--current');   
    }

};
