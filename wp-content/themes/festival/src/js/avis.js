console.log('avis.js chargé');

const avis = {
    init: function(){
        avis.addAvisEvent();
        avis.addAvisSubmit();
    }
};

document.addEventListener('DOMContentLoaded', avis.init);



