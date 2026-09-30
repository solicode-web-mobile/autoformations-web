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
---

## console.log(notes);

## 1. Objectif

Dans ce tutoriel, vous allez découvrir les **tableaux JavaScript**.

Vous allez apprendre à :

* comprendre pourquoi on utilise un tableau ;
* créer un tableau ;
* reconnaître ses éléments ;
* comprendre les index ;
* accéder à un élément ;
* identifier le premier et le dernier élément ;
* connaître le nombre d'éléments avec `length`.

À la fin du tutoriel, vous devez comprendre cette structure :

```text
Tableau
├── élément 1
├── élément 2
├── élément 3
└── élément 4
```

Le parcours du tableau avec une boucle sera étudié dans un tutoriel suivant.

## 2. Prérequis

Vous devez savoir :

* déclarer une variable ;
* utiliser une valeur `number` ou `string` ;
* utiliser `console.log()` ;
* exécuter un fichier JavaScript avec Node.js.

Exemple :

```javascript
let note = 15;

console.log(note);
```

Résultat :

```text
15
```

Vous devez également connaître les variables étudiées dans les UA précédentes.

## Données de départ

### JavaScript

Créez un fichier :

```text
tableaux.js
```

Ajoutez :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes);
```

Exécutez :

```bash
node tableaux.js
```

Résultat :

```text
[ 12, 15, 8, 17 ]
```

Le programme possède maintenant plusieurs valeurs dans une même variable.

## Partie 1 — Théorie

### 1.1. Le problème de plusieurs variables

Supposons que nous avons quatre notes.

Sans tableau, nous pouvons écrire :

```javascript
let note1 = 12;
let note2 = 15;
let note3 = 8;
let note4 = 17;
```

Chaque valeur possède une variable différente.

Cela devient difficile à gérer lorsque le nombre de valeurs augmente.

Avec un tableau, nous pouvons regrouper les valeurs :

```javascript
let notes = [12, 15, 8, 17];
```

Une seule variable contient plusieurs valeurs.

### 1.2. Qu'est-ce qu'un tableau ?

Un **tableau** est une structure qui permet de regrouper plusieurs valeurs dans une même variable.

Exemple :

```javascript
let notes = [12, 15, 8, 17];
```

On peut représenter le tableau ainsi :

```text
notes
├── 12
├── 15
├── 8
└── 17
```

Les valeurs contenues dans le tableau sont appelées des **éléments**.

### 1.3. Les éléments d'un tableau

Dans :

```javascript
let notes = [12, 15, 8, 17];
```

le tableau contient quatre éléments :

```text
12
15
8
17
```

On peut aussi avoir un tableau de textes :

```javascript
let prenoms = ["Ali", "Sara", "Yassine"];
```

Ou un tableau de valeurs booléennes :

```javascript
let validations = [true, false, true];
```

Dans ce tutoriel, nous utiliserons surtout des nombres.

### 1.4. Créer un tableau

Un tableau est créé avec des crochets :

```javascript
let nombres = [4, 7, 2, 9];
```

Les valeurs sont séparées par des virgules.

Structure :

```text
[ valeur1, valeur2, valeur3, valeur4 ]
```

Exemple :

```javascript
let notes = [12, 15, 8, 17];
```

### 1.5. L'index

Chaque élément possède une position appelée **index**.

Attention :

> Le premier index est `0`.

Pour :

```javascript
let notes = [12, 15, 8, 17];
```

on a :

```text
index 0 → 12
index 1 → 15
index 2 → 8
index 3 → 17
```

On peut représenter le tableau ainsi :

```text
          index
           0    1    2    3
           ↓    ↓    ↓    ↓
notes = [ 12,  15,   8,  17 ]
```

### 1.6. Pourquoi l'index commence à 0 ?

L'index sert à identifier la position d'un élément dans le tableau.

La première position est donc :

```text
0
```

La deuxième :

```text
1
```

La troisième :

```text
2
```

Et ainsi de suite.

Pour quatre éléments, les index sont :

```text
0, 1, 2, 3
```

Le dernier index n'est donc pas égal au nombre d'éléments.

### 1.7. Accéder à un élément

Pour lire un élément, on utilise son index.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[0]);
```

Résultat :

```text
12
```

Le programme demande l'élément situé à l'index `0`.

Pour le troisième élément :

```javascript
console.log(notes[2]);
```

Résultat :

```text
8
```

### 1.8. Lire plusieurs éléments

On peut lire différents éléments du même tableau :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[0]);
console.log(notes[1]);
console.log(notes[2]);
console.log(notes[3]);
```

Résultat :

```text
12
15
8
17
```

Pour le moment, nous accédons aux éléments un par un.

Le parcours automatique avec une boucle sera appris plus tard.

### 1.9. Le premier élément

Le premier élément est toujours à l'index `0`.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[0]);
```

Résultat :

```text
12
```

À retenir :

```text
premier élément → index 0
```

### 1.10. Le nombre d'éléments avec `length`

La propriété `length` permet de connaître le nombre d'éléments du tableau.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes.length);
```

Résultat :

```text
4
```

Le tableau contient donc quatre éléments.

### 1.11. `length` et dernier index

Pour :

```javascript
let notes = [12, 15, 8, 17];
```

on a :

```text
nombre d'éléments = 4
```

mais :

```text
dernier index = 3
```

Le dernier index correspond donc à :

```text
length - 1
```

Dans notre exemple :

```text
4 - 1 = 3
```

### 1.12. Accéder au dernier élément

On peut utiliser :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[notes.length - 1]);
```

Résultat :

```text
17
```

Le programme utilise :

```text
length - 1
```

pour obtenir le dernier index.

Cette écriture devient particulièrement utile lorsque le nombre d'éléments peut changer.

### 1.13. Tableau vide

Un tableau peut être créé sans élément :

```javascript
let notes = [];
```

Le tableau est alors vide.

On peut vérifier son nombre d'éléments :

```javascript
console.log(notes.length);
```

Résultat :

```text
0
```

On peut représenter un tableau vide ainsi :

```text
notes = [ ]
```

Il ne contient aucun élément.

### 1.14. Différentes tailles de tableaux

Un tableau peut contenir deux éléments :

```javascript
let nombres = [10, 20];
```

ou cinq :

```javascript
let nombres = [10, 20, 30, 40, 50];
```

ou davantage :

```javascript
let nombres = [10, 20, 30, 40, 50, 60, 70];
```

Le principe reste le même :

```text
tableau
   ↓
éléments
   ↓
index
```

### 1.15. À retenir

* Un **tableau** regroupe plusieurs valeurs.
* Chaque valeur est un **élément**.
* Chaque élément possède un **index**.
* Le premier index est `0`.
* `notes[0]` permet d'accéder au premier élément.
* `length` donne le nombre d'éléments.
* Le dernier index est `length - 1`.
* Le dernier élément peut être obtenu avec `tableau[tableau.length - 1]`.
* Un tableau peut être vide.

## Partie 2 — Pratique

### 2.1. Créer un tableau de nombres

Créez :

```javascript
let nombres = [10, 20, 30, 40];
```

Affichez le tableau :

```javascript
console.log(nombres);
```

Résultat attendu :

```text
[ 10, 20, 30, 40 ]
```

### 2.2. Afficher le premier élément

Ajoutez :

```javascript
console.log(nombres[0]);
```

Résultat attendu :

```text
10
```

Expliquez pourquoi l'index `0` donne la valeur `10`.

### 2.3. Afficher le troisième élément

Ajoutez :

```javascript
console.log(nombres[2]);
```

Résultat attendu :

```text
30
```

Complétez ensuite :

```text
index 0 → ?
index 1 → ?
index 2 → ?
index 3 → ?
```

### 2.4. Afficher le nombre d'éléments

Ajoutez :

```javascript
console.log(nombres.length);
```

Résultat attendu :

```text
4
```

Expliquez pourquoi le résultat est `4` alors que le dernier index est `3`.

### 2.5. Afficher le dernier élément

Utilisez :

```javascript
console.log(nombres[nombres.length - 1]);
```

Résultat attendu :

```text
40
```

Identifiez les deux informations utilisées :

```text
nombres.length
```

et :

```text
length - 1
```

### 2.6. Utiliser un tableau de notes

Créez :

```javascript
let notes = [12, 15, 8, 17];
```

Affichez :

* la première note ;
* la deuxième note ;
* la troisième note ;
* la dernière note ;
* le nombre total de notes.

Le résultat attendu est :

```text
Première note : 12
Deuxième note : 15
Troisième note : 8
Dernière note : 17
Nombre de notes : 4
```

### 2.7. Exercice — Observer les index

Considérez :

```javascript
let nombres = [4, 7, 2, 9, 5];
```

Complétez le tableau :

| Index | Valeur |
| ----: | -----: |
|     0 |        |
|     1 |        |
|     2 |        |
|     3 |        |
|     4 |        |

Puis répondez :

1. Quel est le premier élément ?
2. Quel est le dernier élément ?
3. Combien le tableau contient-il d'éléments ?
4. Quel est le dernier index ?

### 2.8. Exercice — Accéder aux éléments

Considérez :

```javascript
let notes = [11, 14, 9, 16, 13];
```

Écrivez une instruction pour afficher :

1. `11`
2. `9`
3. `16`
4. `13`
5. `5`

Pour la dernière valeur, utilisez l'index.

Pour l'élément `13`, identifiez d'abord son index.

### 2.9. Exercice — Utiliser `length`

Considérez :

```javascript
let prenoms = ["Ali", "Sara", "Yassine", "Nadia"];
```

Écrivez des instructions pour afficher :

```text
Nombre de prénoms : 4
Premier prénom : Ali
Dernier prénom : Nadia
```

Utilisez `length` pour trouver le dernier élément.

### 2.10. Exercice — Comparer deux tableaux

Considérez :

```javascript
let tableau1 = [10, 20, 30];
let tableau2 = [10, 20, 30, 40, 50];
```

Affichez :

* le nombre d'éléments du premier tableau ;
* le nombre d'éléments du deuxième tableau ;
* le premier élément du deuxième tableau ;
* le dernier élément du deuxième tableau.

### 2.11. Exercice — Tableau de données

Créez le tableau suivant :

```javascript
let ages = [18, 21, 19, 25, 22];
```

Sans utiliser de boucle, affichez :

```text
Premier âge
Deuxième âge
Dernier âge
Nombre d'âges
```

Cet exercice vérifie uniquement votre compréhension des **index** et de `length`.

### 2.12. Travail à faire

Créez un programme avec le tableau :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Le programme doit afficher :

```text
Nombre de notes : 6
Première note : 12
Deuxième note : 15
Dernière note : 14
```

Puis affichez également la note située à l'index `4`.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le tableau utilisé ;
* les index associés aux éléments ;
* le code JavaScript ;
* les résultats obtenus ;
* une courte explication de la différence entre `length` et le dernier index.

### Critère de réussite

Le travail est réussi si :

* le tableau est correctement créé ;
* les index sont correctement identifiés ;
* les éléments demandés sont correctement lus ;
* `length` est correctement utilisé ;
* le dernier élément est correctement identifié ;
* aucune boucle n'est nécessaire.

### Résultat attendu

Pour :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

le programme doit pouvoir produire :

```text
Nombre de notes : 6
Première note : 12
Deuxième note : 15
Dernière note : 14
Index 4 : 10
```

## Bilan

**Vous avez appris :**

* ce qu'est un tableau ;
* ce qu'est un élément ;
* ce qu'est un index ;
* pourquoi le premier index est `0` ;
* comment accéder à un élément ;
* comment connaître le nombre d'éléments avec `length` ;
* comment accéder au dernier élément.

**Vous savez maintenant :**

```text
Plusieurs valeurs
       ↓
     Tableau
       ↓
    Éléments
       ↓
     Index
       ↓
Accès aux valeurs
```

Dans le prochain tutoriel, vous allez apprendre à **lire et modifier les éléments d'un tableau**.

Le parcours automatique de tous les éléments avec une boucle sera étudié ensuite.

## Glossaire

* **Tableau** : structure qui regroupe plusieurs valeurs dans une même variable.
* **Élément** : valeur contenue dans un tableau.
* **Index** : position d'un élément dans un tableau.
* **`length`** : propriété qui donne le nombre d'éléments d'un tableau.
* **Premier élément** : élément situé à l'index `0`.
* **Dernier élément** : élément situé à l'index `length - 1`.
* **Tableau vide** : tableau qui ne contient aucun élément.
* **Position** : emplacement d'un élément dans le tableau.
