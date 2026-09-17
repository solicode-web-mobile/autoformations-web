---
title: "Transformer les algorithmes élémentaires en fonctions"
layout: tuto
slug: "transformer-algorithmes-fonctions"
permalink: /tutos/:slug/
tuto_id: "T.121.145"
type: "algorithme"
version: "normal"
ua: "UA.121.14"
nav_order: 5
data_js: ""
---

Dans les tutoriels précédents, vous avez construit plusieurs algorithmes sur les tableaux :

* calculer une somme ;
* calculer une moyenne ;
* rechercher une valeur ;
* trouver un maximum ;
* trouver un minimum ;
* compter des valeurs.

Dans ce tutoriel, vous allez transformer ces traitements en **fonctions réutilisables**.

La progression est :

```text
Algorithme connu
      ↓
Identifier les données
      ↓
Choisir les paramètres
      ↓
Placer le traitement dans une fonction
      ↓
Retourner le résultat
      ↓
Appeler la fonction
      ↓
Réutiliser le traitement
```

À la fin du tutoriel, vous devez être capable de construire un petit répertoire de fonctions de traitement.

## 2. Prérequis

Vous devez savoir :

* créer et parcourir un tableau ;
* utiliser `for` ;
* utiliser `if` ;
* utiliser un compteur ;
* utiliser un accumulateur ;
* rechercher une valeur ;
* trouver un maximum ;
* trouver un minimum ;
* déclarer une fonction ;
* utiliser des paramètres ;
* utiliser `return`.

Exemple :

```javascript
function additionner(a, b) {
  return a + b;
}

let resultat = additionner(10, 5);

console.log(resultat);
```

Résultat :

```text
15
```

## Données de départ

### JavaScript

Créez un fichier :

```text
algorithmes-fonctions.js
```

Commencez avec :

```javascript
let nombres = [12, 8, 15, 4, 19];

console.log(nombres);
```

Exécutez :

```bash
node algorithmes-fonctions.js
```

Résultat :

```text
[ 12, 8, 15, 4, 19 ]
```

Ce tableau sera utilisé pour transformer plusieurs algorithmes en fonctions.

## Partie 1 — Théorie

### 1.1. Un algorithme peut devenir une fonction

Dans l'UA.121.13, nous avons construit un algorithme de somme :

```javascript
let somme = 0;

for (let i = 0; i < nombres.length; i++) {
  somme = somme + nombres[i];
}

console.log(somme);
```

Le traitement fonctionne.

Mais il est directement lié à la variable :

```text
nombres
```

Nous voulons pouvoir utiliser le même traitement avec :

```text
[12, 8, 15, 4, 19]
```

ou :

```text
[5, 10, 20]
```

ou :

```text
[7, 3, 9, 12]
```

Il faut donc transformer le tableau en **paramètre**.

### 1.2. Identifier la donnée variable

Dans notre algorithme :

```javascript
let somme = 0;

for (let i = 0; i < nombres.length; i++) {
  somme = somme + nombres[i];
}
```

la partie qui change d'un appel à l'autre est :

```text
nombres
```

Nous pouvons donc créer :

```javascript
function calculerSomme(nombres) {
  ...
}
```

Ici :

```text
nombres
```

devient un paramètre.

### 1.3. Transformer l'algorithme en fonction

L'algorithme devient :

```javascript
function calculerSomme(nombres) {
  let somme = 0;

  for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i];
  }

  return somme;
}
```

La fonction reçoit un tableau.

Elle calcule la somme.

Elle retourne le résultat.

On obtient :

```text
tableau
   ↓
calculerSomme()
   ↓
somme
```

### 1.4. Appeler la fonction

Nous pouvons maintenant écrire :

```javascript
let nombres = [12, 8, 15, 4, 19];

let somme = calculerSomme(nombres);

console.log(somme);
```

Résultat :

```text
58
```

Le même algorithme peut maintenant être réutilisé.

### 1.5. Utiliser la fonction avec un autre tableau

Nous pouvons écrire :

```javascript
let nombres1 = [12, 8, 15, 4, 19];
let nombres2 = [5, 10, 20];

console.log(calculerSomme(nombres1));
console.log(calculerSomme(nombres2));
```

Résultat :

```text
58
35
```

Une seule fonction permet donc de traiter plusieurs tableaux.

### 1.6. Transformer l'algorithme de moyenne

Nous avons déjà appris à calculer une moyenne.

L'algorithme est :

```text
somme = 0

parcourir le tableau
    ajouter chaque valeur à la somme

moyenne = somme / nombre d'éléments
```

Nous pouvons le transformer en :

```javascript
function calculerMoyenne(nombres) {
  let somme = 0;

  for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i];
  }

  return somme / nombres.length;
}
```

Appel :

```javascript
let moyenne = calculerMoyenne([12, 15, 9]);

console.log(moyenne);
```

Résultat :

```text
12
```

### 1.7. Réutiliser une fonction dans une autre fonction

Nous pouvons éviter de réécrire le calcul de la somme.

```javascript
function calculerSomme(nombres) {
  let somme = 0;

  for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i];
  }

  return somme;
}

function calculerMoyenne(nombres) {
  let somme = calculerSomme(nombres);

  return somme / nombres.length;
}
```

La fonction `calculerMoyenne()` utilise alors :

```text
calculerSomme()
      ↓
somme
      ↓
division par length
      ↓
moyenne
```

C'est un premier exemple de **réutilisation d'un traitement**.

### 1.8. Transformer l'algorithme de recherche

L'algorithme connu est :

```text
pour chaque élément :
    comparer avec la valeur recherchée
    si égal :
        valeur trouvée
```

Nous pouvons le transformer en :

```javascript
function rechercher(nombres, valeur) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === valeur) {
      return true;
    }
  }

  return false;
}
```

Appel :

```javascript
console.log(rechercher([12, 8, 15, 4, 19], 15));
```

Résultat :

```text
true
```

### 1.9. Pourquoi `return true` dans la boucle ?

Dès que la valeur est trouvée :

```javascript
if (nombres[i] === valeur) {
  return true;
}
```

la fonction a déjà obtenu le résultat demandé.

Elle peut donc retourner immédiatement :

```text
true
```

Si la boucle se termine sans trouver la valeur :

```javascript
return false;
```

est exécuté.

Le fonctionnement est :

```text
Recherche
   ↓
Valeur trouvée ?
 ┌──────┴──────┐
oui            non
 ↓              ↓
true          continuer
                ↓
             fin du tableau
                ↓
             false
```

### 1.10. Transformer l'algorithme du maximum

L'algorithme connu est :

```text
prendre le premier élément
      ↓
pour chaque élément suivant :
    comparer
    si la valeur est plus grande :
        remplacer le maximum
```

Nous obtenons :

```javascript
function trouverMaximum(nombres) {
  let maximum = nombres[0];

  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
      maximum = nombres[i];
    }
  }

  return maximum;
}
```

Appel :

```javascript
console.log(trouverMaximum([12, 8, 15, 4, 19]));
```

Résultat :

```text
19
```

### 1.11. Transformer l'algorithme du minimum

Le principe est presque identique :

```javascript
function trouverMinimum(nombres) {
  let minimum = nombres[0];

  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] < minimum) {
      minimum = nombres[i];
    }
  }

  return minimum;
}
```

Appel :

```javascript
console.log(trouverMinimum([12, 8, 15, 4, 19]));
```

Résultat :

```text
4
```

### 1.12. Transformer un comptage en fonction

Nous avons aussi appris à compter les valeurs qui respectent une règle.

Exemple :

```text
Compter les nombres pairs.
```

L'algorithme est :

```text
compteur = 0

pour chaque nombre :
    si le nombre est pair :
        compteur++
```

La fonction peut être :

```javascript
function compterPairs(nombres) {
  let compteur = 0;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
      compteur++;
    }
  }

  return compteur;
}
```

Appel :

```javascript
console.log(compterPairs([4, 7, 2, 9, 5, 8]));
```

Résultat :

```text
3
```

### 1.13. Un algorithme possède maintenant une interface

Une fonction peut être vue comme une petite boîte :

```text
         Entrées
            ↓
     ┌─────────────┐
     │   Fonction  │
     │             │
     │ Traitement  │
     └─────────────┘
            ↓
         Résultat
```

Par exemple :

```text
[12, 8, 15, 4, 19]
        ↓
trouverMaximum()
        ↓
       19
```

La fonction cache les détails du traitement.

L'utilisateur de la fonction n'a besoin de connaître que :

```text
ce qu'il fournit
```

et :

```text
ce qu'il récupère
```

### 1.14. Le nom doit représenter le traitement

Les fonctions doivent avoir des noms clairs :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterPairs()
```

Le nom doit permettre de comprendre le rôle du traitement.

### 1.15. Ne pas changer l'algorithme pendant la transformation

Lorsque nous transformons un algorithme connu en fonction, nous ne devons pas modifier inutilement sa logique.

La démarche est :

```text
Algorithme validé
       ↓
Identifier les entrées
       ↓
Les transformer en paramètres
       ↓
Conserver le traitement
       ↓
Retourner le résultat
```

Cette règle est importante.

La fonction doit d'abord **encapsuler** l'algorithme existant.

L'amélioration de l'algorithme pourra être faite plus tard.

### 1.16. Comparer avant et après

Avant :

```javascript
let maximum = nombres[0];

for (let i = 1; i < nombres.length; i++) {
  if (nombres[i] > maximum) {
    maximum = nombres[i];
  }
}

console.log(maximum);
```

Après :

```javascript
function trouverMaximum(nombres) {
  let maximum = nombres[0];

  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
      maximum = nombres[i];
    }
  }

  return maximum;
}

console.log(trouverMaximum(nombres));
```

Le traitement interne est presque identique.

La différence est que maintenant :

```text
le traitement est nommé
```

et :

```text
le traitement est réutilisable
```

### 1.17. Construire un petit répertoire

À partir des algorithmes déjà étudiés, nous pouvons créer :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterPairs()
```

Ce répertoire constitue une première collection de traitements réutilisables.

### 1.18. À retenir

* Un algorithme connu peut être transformé en fonction.
* Les données qui changent deviennent des paramètres.
* Le résultat de l'algorithme devient la valeur retournée.
* La logique du traitement reste la même.
* Une fonction permet de réutiliser un algorithme.
* Une fonction peut utiliser une autre fonction.
* Le nom de la fonction doit représenter le traitement.

## Partie 2 — Pratique

### 2.1. Étape 1 — Transformer la somme

Partez de cet algorithme :

```javascript
let nombres = [12, 8, 15, 4, 19];

let somme = 0;

for (let i = 0; i < nombres.length; i++) {
  somme = somme + nombres[i];
}

console.log(somme);
```

Transformez-le en :

```javascript
function calculerSomme(nombres) {
  // votre traitement
}
```

La fonction doit retourner le résultat.

Testez avec :

```text
[12, 8, 15, 4, 19]
```

puis :

```text
[5, 10, 20]
```

Résultats attendus :

```text
58
35
```

### 2.2. Étape 2 — Transformer la moyenne

Créez :

```javascript
function calculerMoyenne(nombres) {
  // votre traitement
}
```

Utilisez la fonction `calculerSomme()` pour éviter de refaire inutilement le même traitement.

Testez :

```text
[12, 15, 9]
```

Résultat :

```text
12
```

### 2.3. Étape 3 — Transformer la recherche

Créez :

```javascript
function rechercher(nombres, valeur) {
  // votre traitement
}
```

La fonction doit retourner :

```text
true
```

si la valeur existe.

Sinon :

```text
false
```

Tests :

```text
rechercher([12, 8, 15, 4, 19], 15) → true
rechercher([12, 8, 15, 4, 19], 7) → false
```

### 2.4. Étape 4 — Transformer le maximum

Créez :

```javascript
function trouverMaximum(nombres) {
  // votre traitement
}
```

Test :

```text
trouverMaximum([12, 8, 15, 4, 19])
```

Résultat :

```text
19
```

### 2.5. Étape 5 — Transformer le minimum

Créez :

```javascript
function trouverMinimum(nombres) {
  // votre traitement
}
```

Test :

```text
trouverMinimum([12, 8, 15, 4, 19])
```

Résultat :

```text
4
```

### 2.6. Étape 6 — Transformer le comptage

Créez :

```javascript
function compterPairs(nombres) {
  // votre traitement
}
```

Test :

```text
compterPairs([4, 7, 2, 9, 5, 8])
```

Résultat :

```text
3
```

### 2.7. Étape 7 — Tester plusieurs tableaux

Utilisez :

```javascript
let nombres1 = [12, 8, 15, 4, 19];
let nombres2 = [5, 10, 20, 7];
let nombres3 = [3, 6, 9, 12, 15];
```

Testez les fonctions :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
```

avec les trois tableaux.

L'objectif est de vérifier que les mêmes fonctions fonctionnent avec différentes données.

### 2.8. Étape 8 — Utiliser une fonction dans une autre

Construisez :

```javascript
function calculerSomme(nombres) {
  // ...
}

function calculerMoyenne(nombres) {
  // utiliser calculerSomme()
}
```

Pour :

```text
[10, 14, 16]
```

le résultat doit être :

```text
13.33
```

### 2.9. Étape 9 — Construire le répertoire

Votre fichier doit maintenant contenir :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterPairs()
```

Pour chaque fonction, testez au moins deux tableaux différents.

### 2.10. Exercice 1 — Fonction de somme

Transformez l'algorithme de somme d'un tableau en fonction :

```text
calculerSomme(nombres)
```

Testez avec :

```text
[1, 2, 3, 4, 5]
```

Résultat :

```text
15
```

---

### 2.11. Exercice 2 — Fonction de moyenne

Transformez l'algorithme de moyenne :

```text
calculerMoyenne(nombres)
```

Testez avec :

```text
[10, 12, 14, 16]
```

Résultat :

```text
13
```

---

### 2.12. Exercice 3 — Fonction de recherche

Transformez l'algorithme de recherche :

```text
rechercher(nombres, valeur)
```

Tests :

```text
rechercher([4, 8, 12, 15], 12) → true
rechercher([4, 8, 12, 15], 7) → false
```

---

### 2.13. Exercice 4 — Fonction maximum

Créez :

```text
trouverMaximum(nombres)
```

Test :

```text
[18, 12, 25, 9, 16]
```

Résultat :

```text
25
```

---

### 2.14. Exercice 5 — Fonction minimum

Créez :

```text
trouverMinimum(nombres)
```

Test :

```text
[18, 12, 25, 9, 16]
```

Résultat :

```text
9
```

---

### 2.15. Exercice 6 — Fonction de comptage

Créez :

```text
compterPairs(nombres)
```

Test :

```text
[2, 5, 8, 11, 14, 17]
```

Résultat :

```text
3
```

---

### 2.16. Exercice 7 — Transformer un algorithme de comptage

À partir de :

```text
[12, 8, 15, 9, 17, 6, 10]
```

créez :

```text
compterValidees(notes)
```

Une note est validée si :

```text
note >= 10
```

Résultat attendu :

```text
4
```

---

### 2.17. Exercice 8 — Fonction de somme conditionnelle

Créez :

```text
calculerSommePairs(nombres)
```

Exemple :

```text
[4, 7, 2, 9, 5, 8]
```

Résultat :

```text
14
```

---

### 2.18. Exercice 9 — Réutiliser plusieurs fonctions

Créez :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
```

Puis utilisez-les avec :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Le programme doit afficher :

```text
Somme : 76
Moyenne : 12.67
Maximum : 17
Minimum : 8
```

---

### 2.19. Exercice 10 — Construire une analyse avec des fonctions

Avec :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

utilisez les fonctions pour calculer :

* la somme ;
* la moyenne ;
* le maximum ;
* le minimum ;
* le nombre de notes validées.

Le résultat attendu est :

```text
Somme : 91
Moyenne : 11.38
Maximum : 17
Minimum : 6
Notes validées : 5
```

### 2.20. Travail à faire

Construisez votre premier **répertoire de traitements réutilisables**.

Le fichier doit contenir les fonctions :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterValidees()
```

Puis utilisez-les avec :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Le programme doit afficher :

```text
Somme : 91
Moyenne : 11.38
Maximum : 17
Minimum : 6
Notes validées : 5
```

Testez ensuite les mêmes fonctions avec un second tableau.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* la liste des fonctions ;
* le rôle de chaque fonction ;
* les paramètres de chaque fonction ;
* le code JavaScript ;
* un premier tableau de test ;
* un deuxième tableau de test ;
* les résultats obtenus.

### Critère de réussite

Le travail est réussi si :

* chaque algorithme est correctement transformé en fonction ;
* les tableaux sont reçus comme paramètres ;
* les valeurs recherchées sont reçues comme paramètres lorsque nécessaire ;
* chaque fonction retourne son résultat ;
* les fonctions peuvent être utilisées avec plusieurs tableaux ;
* `calculerMoyenne()` réutilise `calculerSomme()` ;
* les résultats sont corrects.

### Résultat attendu

Le programme doit permettre d'appeler simplement :

```javascript
calculerSomme(notes);
calculerMoyenne(notes);
rechercher(notes, 15);
trouverMaximum(notes);
trouverMinimum(notes);
compterValidees(notes);
```

Les traitements internes restent cachés.

L'utilisateur de la fonction connaît simplement :

```text
Entrées
   ↓
Fonction
   ↓
Résultat
```

## Bilan

**Vous avez appris :**

* à reprendre un algorithme existant ;
* à identifier ses données d'entrée ;
* à transformer ces données en paramètres ;
* à placer l'algorithme dans une fonction ;
* à retourner le résultat ;
* à réutiliser la fonction avec plusieurs tableaux ;
* à utiliser une fonction dans une autre fonction ;
* à construire un premier répertoire de traitements réutilisables.

**Vous savez maintenant :**

```text
Algorithme
    ↓
Paramètres
    ↓
Fonction
    ↓
Traitement
    ↓
return
    ↓
Réutilisation
```

Vous passez maintenant d'une logique où les traitements sont écrits directement dans le programme à une logique où les traitements sont **nommés et réutilisables**.

Dans le prochain tutoriel, vous allez combiner plusieurs fonctions pour construire un **traitement complet**.

## Glossaire

* **Algorithme** : suite organisée d'étapes pour résoudre un problème.
* **Fonction réutilisable** : fonction qui peut être appelée plusieurs fois avec des données différentes.
* **Paramètre** : donnée reçue par une fonction.
* **Entrée** : donnée fournie au traitement.
* **Sortie** : résultat produit par le traitement.
* **Encapsulation** : fait de regrouper un traitement dans une fonction.
* **Réutilisation** : fait d'utiliser le même traitement plusieurs fois.
* **Composition** : utilisation d'une fonction dans un autre traitement ou dans une autre fonction.
