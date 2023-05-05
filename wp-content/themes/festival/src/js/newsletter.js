console.log('newsletter.js chargé');

const newsletter = {

   init: function() {
       newsletter.addNewsLetterEvent();
       newsletter.closeNewsLetter();
       newsletter.newsLetterSubmit();
   },

   addNewsLetterEvent: function() {
        const menuItemElement = document.getElementById('newsletter');
        menuItemElement.addEventListener('click', newsletter.handleClickNewsLetter);
   },

   handleClickNewsLetter: function(event) {
        event.preventDefault();
        const newLetterPanel = document.querySelector('.newsletter');
        newLetterPanel.classList.add('newsletter--on');
   },

   closeNewsLetter: function() {
        const closeElement = document.querySelector('.newsletter__close');
        closeElement.addEventListener('click', newsletter.handleClickNewsletterCross);
   },

   handleClickNewsletterCross: function() {
        const newLetterPanel = document.querySelector('.newsletter');
        newLetterPanel.classList.remove('newsletter--on');
   },

   newsLetterSubmit: function() {
        const formElement = document.querySelector('.newsletter form');
        formElement.addEventListener('submit', newsletter.handleNewsLetterSubmit);
   },

   handleNewsLetterSubmit: function(event){
        event.preventDefault();
        const inputElement = document.querySelector('#subscriber-email');
        const userValue = inputElement.value;
        const result = newsletter.isForbiddenEmail(userValue);
        if(result){
            const allMessage = document.querySelectorAll('.message');
            for(const oneMessage of allMessage){
                oneMessage.remove();
            }
            const newError = document.createElement('p');
            newError.textContent = "Les adresse jetables ne sont pas autorisés";
            newError.classList.add('message');
            const newsletterPanel = document.querySelector('.newsletter');
            newsletterPanel.prepend(newError);
        } else {
            alert('email OK !');
            const LetterPanel = document.querySelector('.newsletter');
            LetterPanel.classList.remove('newsletter--on');
        }
   },
   
   isForbiddenEmail: function(email) {
        const forbiddenDomains = [
            '@yopmail.com',
            '@yopmail.fr',
            '@yopmail.net',
            '@cool.fr.nf',
            '@jetable.fr.nf',
            '@courriel.fr.nf',
            '@moncourrier.fr.nf',
            '@monemail.fr.nf',
            '@monmail.fr.nf',
            '@hide.biz.st',
            '@mymail.infos.st',
        ];
        for(const domain of forbiddenDomains) {
            if(email.includes(domain)) {
                return true;
        }
    }
            return false;
   },
};

document.addEventListener('DOMContentLoaded', newsletter.init);