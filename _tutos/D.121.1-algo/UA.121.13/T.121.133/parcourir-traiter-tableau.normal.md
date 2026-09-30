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
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **parcourir un tableau avec une boucle**.

Vous allez apprendre à :

* utiliser une boucle `for` avec un tableau ;
* utiliser l'index pour accéder aux éléments ;
* utiliser `length` pour parcourir tout le tableau ;
* afficher tous les éléments ;
* compter des éléments ;
* calculer une somme ;
* utiliser une condition pendant un parcours.

À la fin du tutoriel, vous devez comprendre ce traitement :

```text
Tableau
   ↓
Parcourir les éléments
   ↓
Lire chaque valeur
   ↓
Traiter la valeur
   ↓
Obtenir un résultat
```

## 2. Prérequis

Vous devez savoir :

* créer un tableau ;
* comprendre les éléments d'un tableau ;
* comprendre les index ;
* utiliser `length` ;
* accéder à un élément avec `tableau[index]` ;
* modifier un élément ;
* utiliser une boucle `for` ;
* utiliser une condition `if` ;
* utiliser un compteur ;
* utiliser un accumulateur.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[0]);
```

Résultat :

```text
12
```

## Données de départ

### JavaScript

Créez un fichier :

```text
parcourir-tableau.js
```

Ajoutez :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes);
```

Exécutez :

```bash
node parcourir-tableau.js
```

Résultat :

```text
[ 12, 15, 8, 17 ]
```

## Partie 1 — Théorie

### 1.1. Pourquoi parcourir un tableau ?

Avec un petit tableau, on peut accéder aux éléments un par un.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[0]);
console.log(notes[1]);
console.log(notes[2]);
console.log(notes[3]);
```

Mais cette méthode devient difficile lorsque le tableau contient beaucoup d'éléments.

Nous voulons plutôt dire :

```text
Pour chaque élément du tableau :
    traiter l'élément
```

C'est le rôle du **parcours**.

### 1.2. Le principe du parcours

Parcourir un tableau signifie visiter ses éléments un par un.

Pour :

```javascript
let notes = [12, 15, 8, 17];
```

le parcours suit cette logique :

```text
index 0 → 12
index 1 → 15
index 2 → 8
index 3 → 17
```

On peut représenter le traitement ainsi :

```text
Début
  ↓
index = 0
  ↓
lire tableau[index]
  ↓
index suivant
  ↓
continuer jusqu'à la fin
```

### 1.3. Utiliser `for` pour parcourir un tableau

La structure classique est :

```javascript
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}
```

Avec :

```javascript
let notes = [12, 15, 8, 17];
```

on écrit :

```javascript
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

Résultat :

```text
12
15
8
17
```

### 1.4. Comprendre le compteur `i`

Dans :

```javascript
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

`i` représente l'index courant.

Le parcours est :

```text
i = 0 → notes[0]
i = 1 → notes[1]
i = 2 → notes[2]
i = 3 → notes[3]
```

On peut le visualiser :

```text
i = 0
  ↓
notes[0]
  ↓
12

i = 1
  ↓
notes[1]
  ↓
15

i = 2
  ↓
notes[2]
  ↓
8

i = 3
  ↓
notes[3]
  ↓
17
```

### 1.5. Pourquoi utiliser `length` ?

Le nombre d'éléments peut changer.

Exemple :

```javascript
let notes = [12, 15, 8, 17];
```

contient quatre éléments.

Mais :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

en contient six.

Écrire directement :

```javascript
for (let i = 0; i < 4; i++) {
```

n'est donc pas une bonne solution générale.

On utilise :

```javascript
for (let i = 0; i < notes.length; i++) {
```

Ainsi, la boucle s'adapte à la taille du tableau.

### 1.6. Comprendre la condition `i < notes.length`

Considérons :

```javascript
let notes = [12, 15, 8, 17];
```

Alors :

```text
notes.length = 4
```

Les index valides sont :

```text
0
1
2
3
```

La condition :

```text
i < 4
```

permet donc d'utiliser :

```text
0
1
2
3
```

Lorsque :

```text
i = 4
```

la condition :

```text
4 < 4
```

est fausse.

La boucle s'arrête.

### 1.7. Lire l'élément courant

Dans une boucle, l'expression :

```javascript
notes[i]
```

représente l'élément situé à l'index courant.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

À chaque répétition :

```text
i = 0 → notes[0]
i = 1 → notes[1]
i = 2 → notes[2]
i = 3 → notes[3]
```

### 1.8. Afficher l'index et la valeur

On peut afficher les deux informations :

```javascript
let notes = [12, 15, 8, 17];

for (let i = 0; i < notes.length; i++) {
    console.log("Index :", i, "Valeur :", notes[i]);
}
```

Résultat :

```text
Index : 0 Valeur : 12
Index : 1 Valeur : 15
Index : 2 Valeur : 8
Index : 3 Valeur : 17
```

Cette forme est utile pour comprendre le parcours.

### 1.9. Parcourir et compter

On peut utiliser un deuxième compteur pour compter certains éléments.

Exemple :

```javascript
let notes = [12, 15, 8, 17, 10];

let nombreNotes = 0;

for (let i = 0; i < notes.length; i++) {
    nombreNotes++;
}

console.log(nombreNotes);
```

Résultat :

```text
5
```

Le compteur :

```text
nombreNotes
```

représente le nombre d'éléments rencontrés.

### 1.10. Parcourir et additionner

On peut utiliser un accumulateur.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

console.log(somme);
```

Résultat :

```text
52
```

Le principe est :

```text
somme = 0
   ↓
ajouter 12
   ↓
ajouter 15
   ↓
ajouter 8
   ↓
ajouter 17
   ↓
somme = 52
```

### 1.11. Parcourir avec une condition

On peut utiliser une condition pour sélectionner certains éléments.

Exemple :

```javascript
let notes = [12, 15, 8, 17, 10];

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        console.log(notes[i]);
    }
}
```

Résultat :

```text
12
15
17
10
```

Le parcours visite toutes les notes.

La condition sélectionne les notes supérieures ou égales à `10`.

### 1.12. Compter les éléments qui respectent une règle

On peut combiner une boucle, une condition et un compteur.

Exemple :

```javascript
let notes = [12, 15, 8, 17, 10];

let nombreValidees = 0;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nombreValidees++;
    }
}

console.log(nombreValidees);
```

Résultat :

```text
4
```

Le traitement devient :

```text
Tableau
   ↓
Parcourir
   ↓
Tester chaque valeur
   ↓
Si la règle est vraie
   ↓
Augmenter le compteur
```

### 1.13. Calculer une moyenne

Pour calculer une moyenne, on peut :

1. calculer la somme ;
2. connaître le nombre d'éléments ;
3. diviser la somme par le nombre d'éléments.

Exemple :

```javascript
let notes = [12, 15, 8, 17];

let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

let moyenne = somme / notes.length;

console.log(moyenne);
```

Résultat :

```text
13
```

Le parcours sert ici à construire la somme.

### 1.14. La méthode générale

Pour traiter un tableau :

```text
1. Avoir un tableau.
        ↓
2. Commencer à l'index 0.
        ↓
3. Lire l'élément courant.
        ↓
4. Traiter l'élément.
        ↓
5. Passer à l'index suivant.
        ↓
6. Continuer jusqu'à la fin.
```

En JavaScript :

```javascript
for (let i = 0; i < tableau.length; i++) {
    // traiter tableau[i]
}
```

### 1.15. À retenir

* Parcourir un tableau signifie traiter ses éléments un par un.
* `for` permet de parcourir les index.
* `i` représente l'index courant.
* `tableau[i]` représente l'élément courant.
* `tableau.length` permet de connaître la taille du tableau.
* Un parcours peut servir à afficher, compter ou calculer.
* Une condition peut être utilisée pendant le parcours.
* Un compteur permet de compter certains éléments.
* Un accumulateur permet de construire progressivement un résultat.

## Partie 2 — Pratique

### 2.1. Parcourir un tableau

Créez :

```javascript
let nombres = [10, 20, 30, 40];
```

Construisez une boucle qui affiche tous les éléments.

Résultat attendu :

```text
10
20
30
40
```

### 2.2. Afficher l'index et la valeur

À partir de :

```javascript
let nombres = [10, 20, 30, 40];
```

affichez :

```text
Index : 0 Valeur : 10
Index : 1 Valeur : 20
Index : 2 Valeur : 30
Index : 3 Valeur : 40
```

### 2.3. Parcourir un tableau de prénoms

Créez :

```javascript
let prenoms = ["Ali", "Sara", "Yassine", "Nadia"];
```

Affichez chaque prénom.

Résultat attendu :

```text
Ali
Sara
Yassine
Nadia
```

### 2.4. Calculer une somme

Considérez :

```javascript
let nombres = [4, 7, 2, 9, 5];
```

Parcourez le tableau et calculez la somme.

Résultat attendu :

```text
27
```

Utilisez un accumulateur.

### 2.5. Calculer une moyenne

Considérez :

```javascript
let notes = [12, 15, 8, 17];
```

Calculez la moyenne.

Résultat attendu :

```text
13
```

Vous devez parcourir le tableau pour calculer la somme.

### 2.6. Compter les éléments

Considérez :

```javascript
let nombres = [4, 7, 2, 9, 5, 8];
```

Comptez le nombre d'éléments avec une boucle.

Le résultat attendu est :

```text
6
```

N'utilisez pas directement une solution basée uniquement sur `length` pour cet exercice. L'objectif est de pratiquer le mécanisme de parcours.

### 2.7. Afficher uniquement les valeurs paires

Considérez :

```javascript
let nombres = [4, 7, 2, 9, 5, 8];
```

Affichez uniquement les nombres pairs.

Résultat attendu :

```text
4
2
8
```

Utilisez :

* une boucle ;
* une condition.

### 2.8. Compter les valeurs paires

À partir du même tableau :

```javascript
let nombres = [4, 7, 2, 9, 5, 8];
```

comptez le nombre de valeurs paires.

Résultat attendu :

```text
3
```

Utilisez un compteur distinct du compteur de boucle.

### 2.9. Calculer la somme des valeurs paires

À partir de :

```javascript
let nombres = [4, 7, 2, 9, 5, 8];
```

calculez la somme des valeurs paires.

Le résultat attendu est :

```text
14
```

Votre traitement doit suivre :

```text
Parcourir
   ↓
Tester
   ↓
Si pair
   ↓
Ajouter à la somme
```

### 2.10. Compter les notes validées

Considérez :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 10];
```

Une note est validée si elle est supérieure ou égale à `10`.

Comptez les notes validées.

Résultat attendu :

```text
4
```

### 2.11. Afficher les notes validées

Avec :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 10];
```

affichez uniquement :

```text
12
15
17
10
```

### 2.12. Calculer la moyenne des notes validées

Avec :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 10];
```

calculez la moyenne uniquement des notes supérieures ou égales à `10`.

Le résultat attendu est :

```text
13.5
```

Pour résoudre ce problème, vous devez utiliser :

* une boucle ;
* une condition ;
* un compteur ;
* un accumulateur.

### 2.13. Exercice — Analyser une série de nombres

Considérez :

```javascript
let nombres = [5, 12, 8, 19, 3, 14, 7];
```

Construisez un programme qui :

1. affiche tous les nombres ;
2. compte les nombres pairs ;
3. calcule la somme des nombres ;
4. calcule la somme des nombres pairs.

Organisez le traitement dans une seule boucle lorsque cela est possible.

### 2.14. Travail à faire

Créez un programme avec :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Le programme doit :

1. afficher toutes les notes ;
2. calculer la somme ;
3. calculer la moyenne ;
4. compter les notes validées ;
5. calculer la somme des notes validées.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le tableau de départ ;
* le code JavaScript ;
* les résultats obtenus ;
* une courte explication du parcours du tableau.

### Critère de réussite

Le programme :

* parcourt tous les éléments du tableau ;
* utilise correctement `i` comme index ;
* utilise `notes[i]` pour lire l'élément courant ;
* utilise `length` pour contrôler la boucle ;
* calcule correctement les résultats ;
* utilise les conditions, compteurs et accumulateurs nécessaires.

### Résultat attendu

Pour :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

le programme doit produire :

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

* à parcourir un tableau avec `for` ;
* à utiliser un index pendant le parcours ;
* à utiliser `length` dans une boucle ;
* à lire chaque élément avec `tableau[i]` ;
* à compter des éléments ;
* à calculer une somme ;
* à filtrer des valeurs avec une condition ;
* à combiner boucle, condition, compteur et accumulateur.

**Vous savez maintenant :**

```text
Tableau
   ↓
Boucle
   ↓
Index
   ↓
Élément courant
   ↓
Traitement
   ↓
Résultat
```

Vous pouvez maintenant traiter automatiquement plusieurs valeurs contenues dans un tableau.

Le prochain tutoriel sera consacré aux **exercices sur les tableaux**, avec des problèmes plus variés de somme, moyenne, comptage et recherche.

## Glossaire

* **Parcours** : traitement des éléments d'un tableau un par un.
* **Index courant** : position de l'élément traité pendant le parcours.
* **Compteur** : variable utilisée pour compter des éléments.
* **Accumulateur** : variable qui conserve progressivement un résultat.
* **Élément courant** : élément du tableau correspondant à l'index actuel.
* **Filtrer** : sélectionner seulement les éléments qui respectent une condition.
* **Itération** : une exécution de la boucle.
