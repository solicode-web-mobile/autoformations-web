---
title: "Filtrage et accumulateurs"
layout: tuto
slug: "filtrage-accumulateurs"
permalink: /tutos/:slug/
tuto_id: "T.121.134"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 4
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **extraire des informations** d'un tableau sans modifier le tableau lui-même. 

Vous allez apprendre à :
* utiliser une variable "Compteur" pour compter des éléments ;
* utiliser une variable "Accumulateur" pour calculer une somme totale ;
* utiliser une condition `if` dans une boucle pour filtrer les données.

*(Note : Aucun fichier de départ n'est fourni, vous devez créer vos propres scripts).*

## Partie 1 — Théorie

### 1.1. Les variables de stockage (externes à la boucle)

Pour compter ou additionner des éléments d'un tableau, il faut absolument déclarer la variable qui contiendra le résultat **avant** la boucle. Si vous la déclarez à l'intérieur, elle sera remise à zéro à chaque tour !

```javascript
let notes = [12, 15, 8, 17];
let somme = 0; // Déclaré AVANT la boucle

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i]; // On accumule
}

console.log("Somme totale :", somme); // Affiche 52
```

{% include array-svg.html
   name="notes"
   title="Tableau à accumuler"
   values="12,15,8,17"
%}

### 1.2. Le filtrage (Boucle + Condition)

Souvent, on ne veut pas additionner ou compter tous les éléments, mais seulement ceux qui respectent une règle. On combine alors la boucle `for` avec une condition `if`.

```javascript
let notes = [12, 15, 8, 17, 10];
let nombreValidees = 0; // Compteur

for (let i = 0; i < notes.length; i++) {
    // On filtre avec IF
    if (notes[i] >= 10) {
        nombreValidees++; // On incrémente le compteur
    }
}

console.log("Nombre de notes validées :", nombreValidees); // Affiche 4
```

## Partie 2 — Pratique

### 2.1. L'art du compteur

1. Déclarez un tableau `let mots = ["chat", "ordinateur", "table", "programmation", "js"];`.
2. Créez un compteur appelé `motsLongs` initialisé à 0.
3. Parcourez le tableau. Si la longueur du mot (`mots[i].length`) est strictement supérieure à 5 lettres, incrémentez le compteur.
4. Affichez le résultat final.

### 2.2. L'art de l'accumulateur conditionnel

1. Déclarez `let nombres = [4, 7, 2, 9, 5, 8];`.
2. Créez un accumulateur `sommePairs` initialisé à 0.
3. Parcourez le tableau et ajoutez à `sommePairs` **uniquement** les nombres pairs (astuce : `nombres[i] % 2 === 0`).
4. Affichez le résultat final.

### 2.3. Travail à faire (Livrable)

Vous devez concevoir un programme de caisse enregistreuse simplifiée.

```javascript
let panier = [15, 42, 5, 89, 12, 50, 8];
```

**Votre programme doit calculer et afficher :**
1. La somme totale de tous les articles du panier.
2. Le nombre d'articles considérés comme "chers" (prix supérieur ou égal à 20).
3. La somme totale générée *uniquement* par ces articles chers.

**Livrable :**
Créez un fichier `caisse.js` contenant :
1. Le code JavaScript complet et exécutable de votre programme.
2. Un court commentaire `/* */` expliquant pourquoi la variable `somme` doit obligatoirement être déclarée à l'extérieur de la boucle `for`.

**Résultat attendu dans la console :**
```text
Total du panier : 221
Nombre d'articles chers : 3
Montant des articles chers : 181
```

## Bilan

**Vous avez appris :**
* la différence entre un **compteur** (`+1`) et un **accumulateur** (`+ valeur`) ;
* l'importance vitale de la portée des variables (déclarer le stockage hors de la boucle) ;
* à appliquer des règles métier simples en utilisant des `if` à l'intérieur d'un parcours.

Vous disposez maintenant des briques de base pour extraire des statistiques d'un tableau !

## Glossaire

* **Filtre / Condition** : règle logique (`if`) permettant d'ignorer certains éléments lors d'un traitement.
* **Portée (Scope)** : zone du code où une variable est accessible et mémorisée. Une variable déclarée avant une boucle survit à la boucle.
