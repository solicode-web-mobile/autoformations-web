---
title: "Accéder et modifier les éléments d'un tableau"
layout: tuto
slug: "acceder-modifier-elements-tableau"
permalink: /tutos/:slug/
tuto_id: "T.121.132"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 2
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **lire et modifier les éléments d'un tableau**.

Vous allez apprendre à :
* lire la valeur d'un élément grâce à son **index** ;
* modifier (remplacer) la valeur d'un élément ;
* utiliser `length` pour modifier dynamiquement le dernier élément.

## 2. Prérequis

Vous devez savoir :
* déclarer et afficher des variables avec `console.log()` ;
* créer un tableau basique ;
* comprendre que le premier index d'un tableau est toujours `0`.

*(Note : Ce tutoriel ne nécessite aucune donnée de départ pré-codée, vous écrirez tout vous-même !)*

## Partie 1 — Théorie

### 1.1. Lire et utiliser un élément

Pour accéder à la valeur d'un élément, on utilise son index entre crochets `[]`.

{% include array-svg.html
   name="notes"
   title="Tableau de notes"
   values="12,15,8,17"
   highlight="1"
%}

```javascript
let notes = [12, 15, 8, 17];

// Lecture simple
console.log("La deuxième note est :", notes[1]); // Affiche 15

// Utilisation dans un calcul
let somme = notes[0] + notes[1];
console.log("Somme des deux premières notes :", somme); // Affiche 27
```

*Attention : Si vous essayez de lire un index qui n'existe pas (ex: `notes[4]`), le résultat affiché sera `undefined`.*

### 1.2. Modifier (remplacer) un élément

On utilise la même syntaxe `tableau[index]` mais on la place **à gauche** du signe égal `=` pour lui affecter une nouvelle valeur.

```javascript
let notes = [12, 15, 8, 17];

// Modification du 3ème élément (index 2)
notes[2] = 10; 

// Modification du 1er élément (index 0)
notes[0] = 14; 

console.log(notes); // Affiche [ 14, 15, 10, 17 ]
```

Comme vous pouvez le voir, seules les valeurs ciblées ont été remplacées, les autres restent intactes.

### 1.3. Modifier le dernier élément dynamiquement (`length`)

Souvent, on ne connaît pas la taille exacte d'un tableau à l'avance. Pour cibler le tout dernier élément, on utilise la formule `length - 1`.

```javascript
let notes = [12, 15, 8, 17];

// Trouver le dernier index (ici 4 - 1 = 3)
let dernierIndex = notes.length - 1;

// Remplacer la dernière note par 20
notes[dernierIndex] = 20;

console.log(notes); // Affiche [ 12, 15, 8, 20 ]
```

Cette méthode fonctionnera toujours, peu importe si le tableau contient 4, 10 ou 1000 éléments !

## Partie 2 — Pratique

### 2.1. Lecture et utilisation

1. Déclarez un tableau `nombres = [10, 20, 30, 40]`.
2. Affichez la somme du premier élément et du dernier élément.
3. Le résultat attendu dans la console est `50`.

### 2.2. Modification classique et dynamique

1. Déclarez le tableau `temperatures = [18, 20, 23, 19]`.
2. Affichez "Avant :", suivi du tableau complet.
3. Remplacez la deuxième température (`20`) par `21`.
4. Remplacez la toute dernière température par `25` en utilisant la formule `length - 1`.
5. Affichez "Après :", suivi du tableau complet. Le résultat final doit être `[ 18, 21, 23, 25 ]`.

### 2.3. Travail à faire (Livrable)

Créez le programme autonome suivant :

```javascript
let notes = [12, 8, 15, 9, 17];
```

Votre programme doit réaliser les actions suivantes, sans utiliser de boucle :
1. Remplacer la deuxième note par `10`.
2. Remplacer la quatrième note par `11`.
3. Afficher la première note.
4. Afficher la dernière note (utilisez `length`).
5. Afficher le tableau final.
6. Afficher le nombre total de notes.

**Livrable :**
Créez un fichier `tableaux-modifier.js` contenant :
1. Le code JavaScript complet et exécutable de votre programme.
2. Un commentaire `//` expliquant la différence entre lire `notes[2]` et modifier `notes[2] = 10`.

**Résultat attendu dans la console :**
```text
Première note : 12
Dernière note : 17
Tableau final : [ 12, 10, 15, 11, 17 ]
Nombre de notes : 5
```

## Bilan

**Vous avez appris :**
* à lire et utiliser la valeur d'un élément existant ;
* à remplacer un ou plusieurs éléments en ciblant leurs index avec `tableau[index] = nouvelleValeur` ;
* à modifier dynamiquement la fin d'un tableau en utilisant `length - 1`.

## Glossaire

* **Lecture** : opération qui permet de récupérer un élément (`let a = tableau[0]`).
* **Modification** : remplacement d'une valeur existante par une autre (`tableau[0] = 5`).
* **Index** : position d'un élément dans un tableau.
* **Affectation** : opération qui donne une nouvelle valeur à une variable ou à un élément.
* **`length`** : propriété qui indique le nombre d'éléments du tableau.
* **Premier élément** : élément situé à l'index `0`.
* **Dernier élément** : élément situé à l'index `length - 1`.
* **`undefined`** : valeur obtenue lorsqu'on lit une position qui ne contient pas d'élément.
