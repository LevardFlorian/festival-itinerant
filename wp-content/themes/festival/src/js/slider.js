console.log('slider.js chargé');

// ici on va gérer nos interactions avec le slider
const slider = {
    currentSlideNumber: 0,
    autoScrollDuration: 5000,
    init: function() {
        
        // on protège notre module : on fait en sorte de ne continuer que si on a bien un élément .slider sur la page
        if (document.querySelector('.slider') === null) {
            // return ne revoie rien, mais nous permet de stopper l'exécution de la fonction
            return;
        }
  
        // dès le chargement, on génère les boutons de navigation
        // attention, à faire AVANT d'utiliser ces boutons (par ex. pour les addEventListener en dessous)
        slider.generateNavButtons();
  
        // écouter le clic sur les boutons
        const navButtonList = document.querySelectorAll('.slider__nav__button');
        // on pose un écouteur pour le click sur chaque bouton
        for (const button of navButtonList) {
            button.addEventListener('click', slider.onNavButtonClick);
        }
  
        // dès le chargement, on démarre l'autoscroll
        slider.autoScroll();
  
    },
    generateNavButtons: function() {
  
        // on compte les slides
        const slideCount = document.querySelectorAll('.slider__item').length;
        // on génère autant d'éléments .sslider__nav__button que de slides
        for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
            // on utilise createElement pour générer un bouton (il n'est pas encore attaché au DOM)
            const newButton = document.createElement('div');
            newButton.innerText = slideIndex+1;
            newButton.classList.add('slider__nav__button');
            newButton.classList.add('slider__nav__bar');
  
            // si on est en train de générer le premier bouton (si slideIndex = 0), on lui donne la classe active
            if (slideIndex === 0) {
                newButton.classList.add('active');
            }
  
            newButton.setAttribute("data-target-slide", slideIndex);
            const navContainer = document.querySelector('.slider__nav');
            // on rajoute l'élément créé au DOM
            navContainer.appendChild(newButton);
        }
  
    },
    onNavButtonClick: function(event) {
        // récupérer le bouton cliqué
        const targetButton = event.currentTarget;
        // on récupère la data "target-slide" pour savoir quelle est la slide qui correspond à ce bouton (dans le dataset, les attributs sont traduits en camelCase)
        const targetSlide = targetButton.dataset.targetSlide;
        // on déclenche le scroll vers cette slide
        slider.scrollToSlide(targetSlide);
        // on n'oublie pas de préciser le numéro de la slide courante pour ne pas perdre l'autoscroll
        slider.currentSlideNumber = targetSlide;
    },
    autoScroll: function() {
        // setInterval nous permet d'exécuter une fonction toutes les x millisecondes
        setInterval(function() {
            // on compte le nombre de slides
            // on fait -1 pour correspondre à la numérotation des slides qui commence à 0
            const slideCount = document.querySelectorAll('.slider__item').length - 1;
            // si la slide sur laquelle on se trouve est la dernière (ou plus !)
            // alors la slide cible est la slide 0
            if (slider.currentSlideNumber >= slideCount) {
                slider.currentSlideNumber = 0;
            } else {
                // sinon on passe à la slide suivante
                slider.currentSlideNumber++;
            }
            slider.scrollToSlide(slider.currentSlideNumber);
        }, slider.autoScrollDuration);
    },
    scrollToSlide: function(targetSlideNumber) {
        // on récupère le container du slider
        const sliderContainer = document.querySelector('.slider');
  
        const containerWidth = sliderContainer.offsetWidth;
  
        // on scrolle dans le container pour atteindre la slide désirée
        // on laisse le paramètre y à 0 => on ne scrolle pas verticalement  
        sliderContainer.scrollTo(containerWidth * targetSlideNumber, 0);
  
        // on gère l'affectation de la classe .active aux boutons de nav
        // on retire la classe .active à tous les bouton
        const navButtonList = document.querySelectorAll('.slider__nav__button');
        for (const button of navButtonList) {
            button.classList.remove('active');
        } 
        // on ajoute la classe .active sur ce bouton
        // le bouton à cibler est celui qui a un data-target-slide qui correspond à la slide courante (targetSlideNumber fourni en paramètre ici)
        // pour sélectionner un élément via un attribut, on utilise le sélecteur css [attribut=valeur]
        const currentSlideButton = document.querySelector('.slider__nav__button[data-target-slide="' + targetSlideNumber + '"]');
        currentSlideButton.classList.add('active');
    }
  };
  
  document.addEventListener('DOMContentLoaded', slider.init);