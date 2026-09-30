---
title: "Parcourir et traiter un tableau"
layout: tuto
slug: "parcourir-traiter-tableau"
permalink: /tutos/:slug/
tuto_id: "T.121.133"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 3
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **parcourir un tableau avec une boucle**.

Vous allez apprendre à :
* utiliser une boucle `for` pour visiter tous les éléments ;
* utiliser `length` pour que la boucle s'adapte à la taille du tableau ;
* calculer une somme ou une moyenne (accumulateur) ;
* appliquer des conditions pendant le parcours (filtrage).

## 2. Prérequis

Vous devez savoir :
* accéder à un élément d'un tableau ;
* utiliser `length` ;
* utiliser une boucle `for` et une condition `if`.

*(Note : Aucun fichier de départ n'est requis, vous écrirez le code vous-même.)*

## Partie 1 — Théorie

### 1.1. Pourquoi et comment parcourir un tableau ?

Pour traiter tous les éléments d'un tableau (les afficher, les additionner, etc.), il serait beaucoup trop long d'écrire `notes[0]`, `notes[1]`, etc. On utilise donc une boucle `for`.

```javascript
let notes = [12, 15, 8, 17];

// La boucle commence à l'index 0 et s'arrête avant notes.length
for (let i = 0; i < notes.length; i++) {
    // i représente l'index (0, 1, 2, 3)
    // notes[i] représente la valeur à cet index
    console.log("Index :", i, "Valeur :", notes[i]);
}
```

En utilisant `i < notes.length`, la boucle s'adapte automatiquement : peu importe le nombre d'éléments ajoutés ou retirés, tout le tableau sera parcouru sans provoquer d'erreur.

{% include array-svg.html
   name="notes"
   title="Parcours par index (i)"
   values="12,15,8,17"
%}

### 1.2. Calculs lors d'un parcours (Somme et Moyenne)

L'un des usages principaux du parcours est de construire un résultat final, comme une somme. Pour cela, on déclare une variable à `0` **avant** la boucle, puis on y ajoute chaque élément **pendant** la boucle.

```javascript
let notes = [12, 15, 8, 17];
let somme = 0; // Accumulateur

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

console.log("Somme totale :", somme); // Affiche 52

let moyenne = somme / notes.length;
console.log("Moyenne :", moyenne); // Affiche 13
```

### 1.3. Parcourir avec une condition (Filtrer)

Vous pouvez inclure une condition `if` dans la boucle pour ne traiter que certains éléments (ex: uniquement les notes au-dessus de la moyenne).

```javascript
let notes = [12, 15, 8, 17, 10];
let nombreValidees = 0; // Compteur

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        console.log("Note validée :", notes[i]);
        nombreValidees++; // On incrémente le compteur
    }
}

console.log("Nombre de notes validées :", nombreValidees); // Affiche 4
```

## Partie 2 — Pratique

### 2.1. Parcours basique et affichage

1. Déclarez `let prenoms = ["Ali", "Sara", "Yassine", "Nadia"];`.
2. Créez une boucle `for` pour parcourir le tableau.
3. À chaque itération, affichez la phrase : `"Prénom trouvé : "` suivi du prénom.

### 2.2. Calculs et Conditions

1. Déclarez `let nombres = [4, 7, 2, 9, 5, 8];`.
2. Affichez uniquement les nombres pairs (utilisez `if (nombres[i] % 2 === 0)`).
3. Calculez et affichez la somme de **tous** les nombres.
4. Comptez et affichez le nombre exact de valeurs paires trouvées.

### 2.3. Travail à faire (Livrable)

Créez le programme autonome suivant pour analyser une liste de notes :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Votre programme doit utiliser **une ou plusieurs boucles** pour calculer et afficher :
1. La liste de toutes les notes (une par ligne).
2. La **somme** totale de toutes les notes.
3. La **moyenne** de la classe.
4. Le **nombre** de notes "validées" (supérieures ou égales à 10).
5. La **somme** de ces notes validées uniquement.

**Livrable :**
Créez un fichier `parcours-notes.js` contenant :
1. Le code JavaScript complet et exécutable.
2. Un commentaire `//` expliquant à quoi sert l'instruction `notes[i]` dans votre boucle.

**Résultat attendu dans la console :**
```text
Notes :
12
8
15
9
17
6
14
10
Somme : 91
Moyenne : 11.375
Notes validées : 5
Somme des notes validées : 68
```

## Bilan

**Vous avez appris :**
* à parcourir un tableau de bout en bout en combinant `for` et `length` ;
* à utiliser `i` comme index courant et `tableau[i]` comme élément courant ;
* à combiner boucle et variables externes pour compter (compteur) ou additionner (accumulateur) ;
* à isoler certains éléments grâce à des conditions (`if`) pendant le parcours.

## Glossaire

* **Parcours** : traitement automatique des éléments d'un tableau un par un.
* **Itération** : un passage (un tour) dans la boucle.
* **Accumulateur** : variable (déclarée avant la boucle) qui construit progressivement un résultat (ex: somme).
* **Compteur** : variable qui augmente pour chaque élément respectant un critère.
