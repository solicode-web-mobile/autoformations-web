---
title: "Construire des algorithmes élémentaires sur un tableau"
layout: tuto
slug: "construire-algorithmes-elementaires-tableau"
permalink: /tutos/:slug/
tuto_id: "T.121.135"
type: "algorithme"
version: "normal"
ua: "UA.121.13"
nav_order: 5
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel, vous allez construire vos premiers **algorithmes classiques sur un tableau**. 
Ce sont des mécanismes fondamentaux que vous retrouverez partout en programmation.

Vous allez apprendre à :
* savoir si une valeur existe dans un tableau ;
* trouver la position (l'index) d'une valeur spécifique ;
* rechercher la valeur la plus grande (Maximum) ;
* rechercher la valeur la plus petite (Minimum).

## 2. Prérequis

Vous devez maîtriser :
* la déclaration d'un tableau et l'accès à un élément via son index ;
* la boucle `for` couplée à `length` pour parcourir un tableau ;
* l'utilisation d'une condition `if` dans une boucle.

*(Note : Aucun fichier de départ n'est fourni, vous écrirez le code vous-même.)*

## Partie 1 — Théorie

### 1.1. Rechercher une valeur et sa position

Pour savoir si un élément existe et où il se trouve, on parcourt le tableau en comparant chaque élément à la valeur recherchée. On utilise souvent une variable initialisée à `-1` pour stocker la position (car l'index `-1` n'existe pas dans un tableau, cela signifie donc "non trouvé").

{% include array-svg.html
   name="nombres"
   title="Tableau de recherche"
   values="12,8,15,4,19"
%}

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;
let position = -1; // -1 signifie "non trouvé"

// Parcours de tout le tableau
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = i; // On sauvegarde la position !
        break; // (Optionnel) On peut arrêter la boucle dès qu'on a trouvé
    }
}

if (position !== -1) {
    console.log("Valeur trouvée à l'index :", position); // Affiche 2
} else {
    console.log("Valeur introuvable.");
}
```

### 1.2. Rechercher le Maximum

Pour trouver le plus grand nombre, la stratégie est simple : on considère que le **premier élément** est le maximum provisoire. Ensuite, on parcourt le reste du tableau et on remplace ce maximum provisoire à chaque fois qu'on croise un nombre plus grand.

```javascript
let nombres = [12, 8, 15, 4, 19];
let maximum = nombres[0]; // On suppose que 12 est le plus grand
let positionMax = 0;

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i]; // Nouveau maximum !
        positionMax = i; // On retient aussi où il se trouve
    }
}

console.log("Le plus grand est :", maximum); // Affiche 19
console.log("Il est à l'index :", positionMax); // Affiche 4
```

### 1.3. Rechercher le Minimum

L'algorithme du minimum est exactement le même, on inverse simplement le signe de comparaison (`<`).

```javascript
let nombres = [12, 8, 15, 4, 19];
let minimum = nombres[0]; 

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] < minimum) {
        minimum = nombres[i]; // Nouveau minimum !
    }
}

console.log("Le plus petit est :", minimum); // Affiche 4
```

## Partie 2 — Pratique

### 2.1. Recherche de valeur

1. Déclarez le tableau `let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];`.
2. Créez un algorithme qui cherche la position du prénom `"Nadia"`.
3. Le programme doit afficher : `"Nadia se trouve à l'index 3"`. S'il ne trouve pas le prénom, il doit afficher `"Prénom introuvable"`.

### 2.2. Les Extrêmes (Max et Min)

1. Déclarez `let notes = [12, 17, 9, 14, 18, 11];`.
2. Dans une **seule et même boucle**, trouvez la meilleure note (maximum) ET la pire note (minimum).
3. Affichez les résultats dans la console.

### 2.3. Travail à faire (Livrable)

Vous allez réaliser un script complet de synthèse qui exécute trois algorithmes majeurs.

```javascript
let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
```

**Votre programme doit :**
1. Trouver et afficher le nombre **Maximum** ainsi que sa **position**. (Attention, le `42` apparaît deux fois, vous devez conserver la position du *premier* `42`).
2. Trouver et afficher le nombre **Minimum** ainsi que sa **position**.
3. Déclarer une valeur cible (ex: `let recherche = 31;`) et indiquer si cette valeur est présente dans le tableau ou non.

**Livrable :**
Créez un fichier `algorithmes.js` contenant :
1. Le code JavaScript complet et exécutable de votre programme.
2. Un commentaire expliquant pourquoi l'initialisation de la position de recherche se fait généralement avec la valeur `-1`.

**Résultat attendu dans la console :**
```text
Maximum : 42 (Index : 2)
Minimum : 5 (Index : 7)
La valeur 31 est présente dans le tableau.
```

## Bilan

**Vous avez appris à maîtriser les algorithmes élémentaires :**
* La recherche (est-ce que ça existe, et où ?) avec la convention du `-1`.
* Le parcours avec mémorisation de l'état maximum ou minimum.
* L'importance d'utiliser le premier élément (`tableau[0]`) comme valeur de départ lors de la recherche d'un extrême.

Ces mécanismes ("Patterns") sont universels. Vous les réutiliserez dans presque tous les langages de programmation !

## Glossaire

* **Algorithme élémentaire** : traitement simple et réutilisable (pattern) pour résoudre un problème courant.
* **Maximum / Minimum** : la plus grande / plus petite valeur trouvée dans le tableau.
* **Occurrence** : la présence d'une valeur dans un tableau.
