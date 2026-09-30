---
title: "Comprendre les tableaux"
layout: tuto
slug: "comprendre-tableaux"
permalink: /tutos/:slug/
tuto_id: "T.121.131"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 1
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel, vous allez découvrir les **tableaux JavaScript**.

Vous allez apprendre à :
* regrouper plusieurs valeurs dans une seule variable (le tableau) ;
* utiliser l'**index** pour lire n'importe quel élément ;
* utiliser `length` pour connaître la taille du tableau et accéder à son dernier élément.

## 2. Prérequis

Vous devez savoir :
* déclarer une variable avec `let` ou `const` ;
* utiliser `console.log()` pour afficher un résultat ;
* utiliser les nombres (`number`) et les textes (`string`).

*(Note : Ce tutoriel ne nécessite aucune donnée de départ pré-codée, vous écrirez tout vous-même !)*

## Partie 1 — Théorie

### 1.1. Créer un tableau (Pourquoi et Comment ?)

Sans tableau, stocker plusieurs notes nécessite plusieurs variables (`let note1 = 12; let note2 = 15; ...`). C'est lourd et difficile à gérer.
Un **tableau** permet de regrouper toutes ces valeurs dans une seule variable en utilisant des crochets `[]` et en séparant les valeurs par des virgules.

```javascript
let notes = [12, 15, 8, 17];
console.log(notes);
```

Un tableau peut contenir des nombres, du texte, ou même être complètement vide (`let vide = [];`). Chaque valeur à l'intérieur s'appelle un **élément**.

### 1.2. L'index : Lire un élément précis

Pour accéder à un élément spécifique, on utilise sa position, appelée **index**. 
**Règle d'or en programmation : le premier index est toujours `0`.**

{% include array-svg.html
   name="notes"
   values="12,15,8,17"
%}

Pour lire un élément, on place son index entre crochets juste après le nom du tableau :

```javascript
let notes = [12, 15, 8, 17];

// Accéder au premier élément (index 0)
console.log("Première note :", notes[0]); 

// Accéder au troisième élément (index 2)
console.log("Troisième note :", notes[2]);
```

### 1.3. Connaître la taille (`length`) et accéder au dernier élément

La propriété `.length` (longueur) donne le **nombre total d'éléments** dans le tableau.

Puisque le premier index est `0`, le dernier index est toujours égal à **`length - 1`**. C'est une astuce universelle pour attraper le dernier élément d'un tableau, même si on ne connaît pas sa taille à l'avance !

```javascript
let prenoms = ["Ali", "Sara", "Yassine"];

console.log("Nombre de prénoms :", prenoms.length); // Affiche 3

// Le dernier index est 3 - 1 = 2
let dernierIndex = prenoms.length - 1;
console.log("Dernier prénom :", prenoms[dernierIndex]); 
```

## Partie 2 — Pratique

### 2.1. Créer et lire des éléments

1. Déclarez un tableau `nombres` contenant les valeurs : `10`, `20`, `30`, `40`.
2. Affichez le tableau entier avec `console.log(nombres);`.
3. Affichez uniquement la première valeur (`10`) en utilisant son index.
4. Affichez la troisième valeur (`30`) en utilisant son index.

### 2.2. Manipuler les index et la taille (`length`)

1. Déclarez un tableau `ages` contenant : `18`, `21`, `19`, `25`, `22`.
2. Affichez la taille totale du tableau en utilisant la propriété `length`.
3. Affichez la toute dernière valeur (`22`) en utilisant la formule `length - 1`, **sans** écrire directement le chiffre `4` dans les crochets.

### 2.3. Travail à faire (Livrable)

Créez un programme complet et autonome à partir du tableau suivant :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Votre programme doit afficher exactement les informations suivantes dans la console (sans utiliser de boucle) :

```text
Nombre de notes : 6
Première note : 12
Deuxième note : 15
Dernière note : 14
Index 4 : 10
```

**Livrable :**
Créez un document Markdown (ou un Google Doc) contenant :
1. Le code JavaScript complet et exécutable de votre programme.
2. Une courte phrase expliquant pourquoi le dernier index n'est pas égal à `length`.

**Critère de réussite :**
Le code est exécutable tel quel, utilise bien `.length` pour trouver la dernière note, et la console affiche exactement le résultat attendu.

## Bilan

**Vous avez appris :**
* à regrouper plusieurs valeurs dans un **tableau** ;
* que l'**index** d'un tableau commence toujours par `0` ;
* à lire un élément grâce à la syntaxe `tableau[index]` ;
* à utiliser `tableau.length` pour obtenir la taille et `tableau[tableau.length - 1]` pour cibler le dernier élément.

## Glossaire

* **Tableau** : structure qui regroupe plusieurs valeurs dans une même variable.
* **Élément** : valeur contenue dans un tableau.
* **Index** : position numérique d'un élément dans un tableau (commence à 0).
* **`length`** : propriété qui retourne le nombre total d'éléments d'un tableau.
