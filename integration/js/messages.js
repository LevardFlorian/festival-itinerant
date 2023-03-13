console.log('message.js chargé');

// Module générique de gestion des messages d'infomrations
const messages = {
    // Méthode permettant d'ajouter UN SEUL message à l'interieur d'un élément
    addMessageToElement: function(messageContent, parentElement){
        // avant d'ajouter notre message
        // nous allons supprimer les éventuels messages existants
        // dans parentElement
        messages.removeOldMessages(parentElement);
        
        // fabrication d'une balise p
        const messageElement = document.createElement('p');
        // je lui donne une classe pour identifier les messages
        messageElement.className = 'message';
        // on ajoute le message dans la balise p
        messageElement.textContent = messageContent;
        // puis on injecte le p dans parentElement
        parentElement.prepend(messageElement);
    },

    removeOldMessages: function(parentElement){
        // pour cibler tous les messages dans "parentElement"
        // je veux cilber tous les élement de classe 'message' dans ce dernier
        const oldMessages = parentElement.querySelectorAll('.message');
        for(const oneOldMessage of oldMessages){
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
            oneOldMessage.remove();
        }
    }

};


// on teste notre module
// je cible un élément
//const footer = document.querySelector('.footer');
//messages.addMessageToElement('AH QUE COUCOU', slider);
//messages.addMessageToElement('CA VA BIEN ?', slider);