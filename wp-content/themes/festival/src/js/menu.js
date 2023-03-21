console.log('menu.js chargé');

const menu = {
  init: function() {
    //1. on selectionne le bouton
    const menuButton = document.querySelector('.top-bar__burger-button > i');
    const menuCloseButton = document.querySelector('.close-button');

    // on vérifie que les éléments du DOM nécessaires sont bien présents. Si ce n'est pas le cas :
    if (menuButton === null || menuCloseButton === null) {
      // on utilise return pour interrompre la fonction
      return;
  }

    //2. on ajoute un écouteur
    menuButton.addEventListener('click', menu.toggleNav)
    menuCloseButton.addEventListener('click', menu.toggleNav)
  },
  
  toggleNav: function(event) {
    const navMenu = document.querySelector('.main-menu')
    if (navMenu.style.display != "block") {
      // si le texte est masqué on affiche le texte du bloc
      navMenu.style.display = "block";
      
  } else {

    navMenu.style.display = "none";
    
  }
  }

};
