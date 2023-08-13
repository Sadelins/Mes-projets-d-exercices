// Tableau pour stocker les actions de l'IA
const actions = [];

// Fonction pour ajouter une action à la liste des actions
function addAction(action) {
    actions.push(action);
}

// Fonction pour afficher le menu des actions disponibles
function showMenu() {
    let menu = 'Je peux faire les choses suivantes :\n\n';

    for (let i = 0; i < actions.length; i++) {
        menu += `${i + 1}. ${actions[i]}\n`;
    }

    return menu;
}

// Fonction pour ajouter un message entrant à la section des messages
function addIncomingMessage(message) {
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'incoming');
    messageElement.innerHTML = `
        <p class="sender">IA :</p>
        <p>${message}</p>
    `;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Fonction pour ajouter un message sortant à la section des messages
function addOutgoingMessage(message) {
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'outgoing');
    messageElement.innerHTML = `
        <p class="sender">User :</p>
        <p>${message}</p>
    `;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Fonction pour gérer l'envoi d'un message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        addOutgoingMessage(message);
        messageInput.value = '';

        // Vérifier si le message est une salutation
        if (isGreeting(message)) {
            const response = generateResponse(message);
            addIncomingMessage(response);
        }
        // Vérifier si le message est une demande de calcul
        else if (isCalculation(message)) {
            const response = calculate(message);
            addIncomingMessage(response);
        }
        // Vérifier si le message contient une demande de temps
        else if (isTimeRequest(message)) {
            const response = getCurrentTime();
            addIncomingMessage(response);
        }
        // Vérifier si le message contient une demande de date
        else if (isDateRequest(message)) {
            const response = getCurrentDate();
            addIncomingMessage(response);
        }
        // Vérifier si le message est une demande des actions disponibles
        else if (message.toLowerCase() === 'actions'||message.toLowerCase() === "Qu'est ce que tu sais faire ?") {
            const response = showMenu();
            addIncomingMessage(response);
        }
        // Ajouter d'autres conditions et fonctionnalités ici

        else {
            const response = "Désolé, je ne comprends pas votre demande. Comment puis-je vous aider ?";
            addIncomingMessage(response);
        }
    }
}

// Fonction pour vérifier si le message est une salutation
function isGreeting(message) {
    const greetings = ['bonjour', 'salut', 'hello', 'hey', 'coucou'];

    // Convertir le message en minuscules pour une correspondance insensible à la casse
    const lowercaseMessage = message.toLowerCase();

    // Vérifier si le message contient un mot-clé de salutation
    for (let i = 0; i < greetings.length; i++) {
        if (lowercaseMessage.includes(greetings[i])) {
            return true;
        }
    }

    return false;
}

// Fonction pour vérifier si le message est une demande de calcul
function isCalculation(message) {
    // Utiliser une expression régulière pour détecter les calculs mathématiques simples
    const calculationPattern = /^[\d+\-*/\s()]+$/;
    return calculationPattern.test(message);
}

// Fonction pour vérifier si le message contient une demande de temps
function isTimeRequest(message) {
    const timeKeywords = ['heure', 'temps'];

    // Convertir le message en minuscules pour une correspondance insensible à la casse
    const lowercaseMessage = message.toLowerCase();

    // Vérifier si le message contient un mot-clé de demande de temps
    for (let i = 0; i < timeKeywords.length; i++) {
        if (lowercaseMessage.includes(timeKeywords[i])) {
            return true;
        }
    }

    return false;
}

// Fonction pour vérifier si le message contient une demande de date
function isDateRequest(message) {
    const dateKeywords = ['date', 'jour'];

    // Convertir le message en minuscules pour une correspondance insensible à la casse
    const lowercaseMessage = message.toLowerCase();

    // Vérifier si le message contient un mot-clé de demande de date
    for (let i = 0; i < dateKeywords.length; i++) {
        if (lowercaseMessage.includes(dateKeywords[i])) {
            return true;
        }
    }

    return false;
}

// Fonction pour générer une réponse à une salutation
function generateResponse(greeting) {
    const responses = {
        bonjour: 'Bonjour ! Comment puis-je vous aider ?',
        salut: 'Salut ! Que puis-je faire pour vous ?',
        hello: 'Hello ! En quoi puis-je vous assister ?',
        hey: 'Hey ! Comment puis-je vous aider ?',
        coucou: 'Coucou ! Quelle est votre demande ?'
    };

    return responses[greeting.toLowerCase()] || 'Bonjour ! Comment puis-je vous aider ?';
}

// Fonction pour effectuer un calcul mathématique
function calculate(expression) {
    try {
        const result = eval(expression);
        return `Le résultat de ${expression} est ${result}`;
    } catch (error) {
        return "Désolé, je n'ai pas pu effectuer le calcul.";
    }
}

// Fonction pour obtenir l'heure actuelle
function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return `Il est actuellement ${hours} heures et ${minutes} minutes.`;
}

// Fonction pour obtenir la date actuelle
function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Les mois commencent à partir de zéro
    const day = currentDate.getDate();
    return `Nous sommes le ${day}/${month}/${year}.`;
}

// Événement de clic sur le bouton "Envoyer"
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);

// Événement de pression de la touche "Entrée" dans le champ de saisie
const messageInput = document.getElementById('message-input');
messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

// Ajouter les actions disponibles à la liste des actions
addAction("Saluer l'utilisateur<br>");
addAction("Effectuer des calculs mathématiques<br>");
addAction("Donner l'heure actuelle<br>");
addAction("Donner la date actuelle<br>");
// Ajouter d'autres actions disponibles ici