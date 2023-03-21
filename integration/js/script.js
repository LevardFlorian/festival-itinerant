console.log("Script JS chargé !");

const app = {
    init: function(){
        slider.init();
        carrousel.init();
        newsletter.init();
        menu.init();
    }
};

document.addEventListener('DOMContentLoaded', app.init);



