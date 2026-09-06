// On importe l'outil une seule fois au début
const prompt = require('prompt-sync')();

// L'entrée devient ultra simple à comprendre :
let prenom = prompt("Quel est votre prénom ? ");
let age = parseInt(prompt("Quel est votre âge ? "));

console.log("Bonjour " + prenom + ", dans un an vous aurez " + (age + 1) + " ans.");