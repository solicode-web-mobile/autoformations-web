---
title: "Construire des boucles"
layout: tuto
slug: "construire-boucles"
permalink: /tutos/:slug/
tuto_id: "T.121.123"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 3
data_js: ""
---

## 1. Objectif

Apprendre à **répéter une action** en programmation. 

Les boucles vous permettent d'exécuter un code plusieurs fois de manière automatique. Vous allez développer les compétences suivantes :
* Comprendre le fonctionnement d'une boucle.
* Créer et utiliser un **compteur**.
* Définir une **condition de répétition** et une **condition d'arrêt**.
* Maîtriser les deux types de boucles : `for` et `while`.

À la fin de ce tutoriel, vous serez capable d'automatiser des tâches répétitives dans vos programmes.

## 2. Prérequis

Avant de démarrer, vous devez maîtriser :
* La création et l'exécution d'un fichier avec Node.js.
* L'utilisation de variables et de `console.log()`.
* Le fonctionnement de la condition `if` vue dans le tutoriel précédent.

## Données de départ

### JavaScript

Créez un fichier `boucles.js` contenant uniquement ce code :

```javascript
console.log("Début du programme");
```

Testez-le avec `node boucles.js` pour valider votre espace de travail.

## Partie 1 — Théorie

### 1.1. Le principe d'une répétition

Une boucle permet à l'ordinateur de répéter une action sans avoir à dupliquer le code.
Le principe est simple : on démarre la boucle, l'ordinateur exécute l'action, puis il vérifie s'il doit continuer. Si oui, il recommence ; sinon, il arrête la boucle et passe à la suite.

### 1.2. Pourquoi utiliser une boucle ?

Si vous devez afficher 100 fois "Bonjour", écrire 100 fois `console.log()` est fastidieux. Une boucle permet de le faire en seulement 3 lignes de code. C'est l'outil indispensable pour éviter la duplication.

### 1.3. Le compteur

Pour éviter que la boucle ne tourne indéfiniment, on utilise généralement un **compteur**. C'est une variable qui évolue (1, 2, 3...) à chaque nouveau "tour" de boucle pour savoir où on en est.

### 1.4. La condition d'arrêt

C'est la règle qui limite le compteur (par exemple : "continuer tant que le compteur est inférieur ou égal à 5"). Sans condition d'arrêt, votre programme tournerait à l'infini.

### 1.5. La boucle `for`

La boucle `for` est très compacte. Elle regroupe la création du compteur, la condition d'arrêt, et l'évolution du compteur sur une seule ligne : `(initialisation; condition; évolution)`.

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

### 1.6. Comprendre `compteur++`

L'instruction `compteur++` signifie simplement "ajoute 1 au compteur". 
À chaque tour, le compteur augmente : 1, puis 2, puis 3... jusqu'à atteindre la limite fixée par la condition d'arrêt.

### 1.7. La boucle `while`

La boucle `while` ("Tant que") répète une action tant que sa condition est vraie. Elle est très utile quand on ne connaît pas à l'avance le nombre exact de répétitions.

```javascript
let compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```
Attention : n'oubliez pas d'augmenter le compteur à l'intérieur du bloc, sinon la boucle ne s'arrêtera jamais.

### 1.8. `for` et `while`

Ces deux boucles peuvent produire le même résultat. La boucle `for` est privilégiée pour les comptages précis, tandis que `while` offre plus de liberté pour des conditions complexes.

### 1.9. Une boucle peut contenir une condition

Vous pouvez tout à fait placer un `if` à l'intérieur d'une boucle pour filtrer les résultats à chaque itération.

```javascript
for (let nombre = 1; nombre <= 5; nombre++) {
    if (nombre % 2 === 0) {
        console.log(nombre); // N'affiche que 2 et 4
    }
}
```

### 1.10. Attention à la boucle infinie

Assurez-vous toujours que votre condition d'arrêt puisse être atteinte. Si votre compteur n'évolue pas vers la limite, le programme plantera.

### 1.11. À retenir

* **Boucle** : Permet de répéter un bloc de code.
* **Compteur** : Variable qui suit le nombre d'itérations.
* `for` : Boucle condensée `(initialisation; condition; évolution)`.
* `while` : Boucle libre `(condition)`.

## Partie 2 — Pratique

### 2.1. Afficher plusieurs nombres avec `for`

Dans votre fichier `boucles.js`, testez le code suivant :
```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```
Observez l'affichage progressif des nombres 1 à 5.

### 2.2. Modifier le nombre de répétitions

Dans votre code, modifiez `<= 5` en `<= 10` puis exécutez le programme. Changez-le ensuite pour que la boucle s'arrête exactement à `4`.

### 2.3. Compter à partir d'une autre valeur

Changez la valeur de départ de votre compteur :
```javascript
for (let compteur = 5; compteur <= 10; compteur++) {
    console.log(compteur);
}
```
Exécutez pour voir que la boucle peut démarrer d'où vous le souhaitez.

### 2.4. Utiliser `while`

Testez l'alternative avec la boucle `while` :
```javascript
let compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

### 2.5. Modifier la condition d'arrêt

Dans le `while`, changez la condition `<=` 5 par `<= 3`. Testez. Modifiez ensuite la condition pour aller jusqu'à `7`.

### 2.6. Compter dans l'autre sens

Utilisez une boucle pour faire un compte à rebours : partez de 5 et utilisez `--` au lieu de `++` pour diminuer le compteur.
```javascript
for (let compteur = 5; compteur >= 1; compteur--) {
    console.log(compteur);
}
```

### 2.7. Répéter un message

Construisez une boucle (`for` ou `while`) pour afficher exactement 5 fois le texte `"Bonjour Madani Ali"`. La boucle doit servir uniquement à gérer la répétition de l'affichage.

### 2.8. Utiliser une condition dans une boucle

Créez un programme qui fait une boucle de 1 à 10. À l'intérieur de cette boucle, ajoutez une condition `if` pour n'afficher que les nombres pairs.

### 2.9. Comprendre l'arrêt d'une boucle

Reprenez la boucle `while` de l'exercice 2.4. Prenez le temps d'analyser et de décrire étape par étape l'évolution du compteur pour comprendre exactement à quel moment la boucle s'arrête.

### 2.10. Exercice guidé — Afficher une série

Écrivez un programme complet qui affiche tous les nombres de `1` à `20` en utilisant la boucle avec laquelle vous êtes le plus à l'aise.

### 2.11. Exercice guidé — Compter les nombres pairs

Modifiez l'exercice précédent pour que la boucle parcoure toujours les nombres de 1 à 20, mais qu'elle n'affiche que les nombres pairs (résultat : 2, 4, 6... 20).

### 2.12. Travail à faire

1. Écrivez une boucle qui parcourt les nombres de 1 à 10.
2. Ajoutez une condition à l'intérieur pour n'afficher que les nombres pairs.

### Livrable

Préparez un document (Markdown ou Google Doc) contenant :
* Le code source final.
* Le résultat affiché par votre terminal.
* Une explication courte de la condition d'arrêt de votre boucle.

### Critère de réussite

La boucle s'arrête correctement, n'affiche que les nombres pairs demandés, et est correctement formée.

### Résultat attendu

Le programme doit afficher exactement :
```text
2
4
6
8
10
```

## Bilan

**Vous avez appris :**
* À construire et utiliser les boucles `for` et `while`.
* À gérer un compteur et définir une condition d'arrêt.
* À imbriquer une condition `if` à l'intérieur d'une boucle.

**Vous savez maintenant :**
* Répéter des traitements automatiquement et contrôler quand ils doivent s'arrêter. C'est une notion fondamentale de l'algorithmique.

## Glossaire

* **Boucle** : Structure permettant de répéter un bloc d'instructions.
* **Compteur** : Variable utilisée pour suivre le nombre de répétitions.
* **Itération** : Un passage (ou "tour") complet à l'intérieur de la boucle.
