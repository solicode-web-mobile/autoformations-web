---
title: "Parcourir un tableau"
layout: tuto
slug: "parcourir-tableau"
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
L'objectif est d'automatiser le traitement des éléments sans avoir à écrire chaque index manuellement.

Vous allez apprendre à :
* utiliser une boucle `for` pour visiter tous les éléments de gauche à droite ;
* utiliser `length` pour que la boucle s'adapte à la taille du tableau ;
* parcourir un tableau à l'envers (de droite à gauche) ;
* sauter des éléments en modifiant l'incrémentation de l'index.

## 2. Prérequis

Vous devez savoir :
* accéder à un élément d'un tableau (`tableau[0]`) ;
* utiliser `length` ;
* écrire une boucle `for` classique.

*(Note : Aucun fichier de départ n'est requis, vous écrirez le code vous-même.)*

## Partie 1 — Théorie

### 1.1. Pourquoi et comment parcourir un tableau ?

Pour afficher tous les éléments d'un tableau de 100 cases, il serait beaucoup trop long d'écrire `console.log(nombres[0])`, `console.log(nombres[1])`, etc. On utilise donc une boucle `for`.

```javascript
let prenoms = ["Ali", "Sara", "Yassine", "Nadia"];

// La boucle commence à l'index 0 et s'arrête avant prenoms.length
for (let i = 0; i < prenoms.length; i++) {
    // i représente l'index (0, 1, 2, 3)
    // prenoms[i] représente la valeur à cet index
    console.log("Index :", i, "| Prénom :", prenoms[i]);
}
```

En utilisant `i < prenoms.length`, la boucle s'adapte automatiquement : peu importe le nombre d'éléments ajoutés ou retirés, tout le tableau sera parcouru sans provoquer d'erreur.

{% include array-svg.html
   name="prenoms"
   title="Parcours classique par index (i)"
   values="Ali,Sara,Yassine,Nadia"
%}

### 1.2. Parcourir à l'envers

Il est tout à fait possible de lire le tableau en partant de la fin.
Pour cela, il faut :
1. Commencer au dernier index : `i = tableau.length - 1`
2. S'arrêter quand on atteint le début : `i >= 0`
3. Décrémenter l'index à chaque tour : `i--`

```javascript
let lettres = ["A", "B", "C", "D"];

for (let i = lettres.length - 1; i >= 0; i--) {
    console.log(lettres[i]);
}
// Affichera : D, C, B, A
```

### 1.3. Sauter des éléments (Parcours partiel)

Vous pouvez contrôler la vitesse à laquelle l'index avance. Au lieu de faire `i++` (avancer de 1), vous pouvez faire `i = i + 2` pour lire un élément sur deux.

```javascript
let chiffres = [10, 20, 30, 40, 50, 60];

// On avance de 2 en 2
for (let i = 0; i < chiffres.length; i = i + 2) {
    console.log(chiffres[i]); 
}
// Affichera : 10, 30, 50
```

## Partie 2 — Pratique

### 2.1. Parcours basique

1. Déclarez `let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];`.
2. Créez une boucle `for` classique pour parcourir le tableau.
3. À chaque itération, affichez la phrase : `"Jour de la semaine : "` suivi du nom du jour.

### 2.2. Gymnastique d'index

1. Déclarez `let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];`.
2. Affichez la liste des couleurs **à l'envers** en utilisant une boucle.
3. Affichez uniquement les couleurs situées à un **index pair** (0, 2, 4) en modifiant l'incrémentation de votre boucle (`i = i + 2`).

### 2.3. Travail à faire (Livrable)

Vous devez concevoir un script qui simule un décompte de fusée spatiale, mais en utilisant un tableau de bord pré-programmé.

```javascript
let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];
```

**Votre programme doit utiliser une boucle pour parcourir le tableau à l'envers et afficher le texte suivant exactement :**
```text
Préparation
5
4
3
2
1
Ignition
Décollage !
```

*(Notez que le mot "Décollage !" ne fait pas partie du tableau et doit être affiché après la boucle).*

**Livrable :**
Créez un fichier `decompte.js` contenant :
1. Le code JavaScript complet et exécutable.
2. Un commentaire `//` expliquant pourquoi l'index de départ de la boucle doit être `sequence.length - 1` et non pas `sequence.length`.

## Bilan

**Vous avez appris :**
* à parcourir un tableau de bout en bout en combinant `for` et `length` ;
* à utiliser `i` comme index courant et `tableau[i]` comme élément courant ;
* à inverser le sens de lecture en jouant sur l'initialisation et la décrémentation (`i--`) ;
* à sauter des éléments en modifiant l'incrémentation (`i = i + 2`).

Dans le tutoriel suivant, vous apprendrez à exploiter ces parcours pour mémoriser des informations (calculer des sommes ou compter des éléments).

## Glossaire

* **Parcours** : traitement des éléments d'un tableau l'un après l'autre à l'aide d'une boucle.
* **Itération** : un passage (un tour) dans la boucle.
* **Décrémentation** : action de réduire une valeur (souvent de 1 avec `--`), utilisée pour parcourir à l'envers.
