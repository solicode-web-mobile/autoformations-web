---
title: "Exercices sur les boucles"
layout: tuto
slug: "exercices-boucles"
permalink: /tutos/:slug/
tuto_id: "T.121.125"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 5
data_js: ""
---

## 1. Objectif

S'entraîner à utiliser les **boucles** pour résoudre divers problèmes.

Vous allez consolider vos acquis sur les notions suivantes :
* L'utilisation de `for` et `while`.
* Le rôle du **compteur** et de l'**accumulateur**.
* La gestion de la **condition d'arrêt**.
* L'imbrication de **conditions** (`if`) à l'intérieur d'une boucle pour sélectionner des données.

## 2. Prérequis

Pour cet entraînement, vous devez être capable de :
* Déclarer des variables et utiliser `console.log()` et des blocs `if`.
* Écrire la structure de base d'une boucle `for` et d'une boucle `while`.
* Utiliser les opérateurs d'incrémentation (ex: `++`).

## Données de départ

### JavaScript

Créez le fichier `exercices-boucles.js` et insérez le code de base ci-dessous :

```javascript
let debut = 1;
let fin = 10;
console.log(debut);
console.log(fin);
```

## Partie 1 — Théorie

### 1.1. Une boucle répète une action

Une boucle sert à exécuter plusieurs fois un traitement sans avoir à le réécrire. C'est l'ordinateur qui se charge de la répétition.

### 1.2. Le compteur contrôle la répétition

Le compteur évolue (ex: `1`, `2`, `3`...) à chaque tour. Il peut servir à afficher une valeur, à compter, à faire un calcul, ou à tester une condition précise à l'intérieur de la boucle.

### 1.3. L'accumulateur

L'accumulateur est une variable qui conserve et fait grandir progressivement un résultat à chaque itération.
Exemple : `somme = somme + nombre;`
Il doit toujours être initialisé *avant* le début de la boucle.

### 1.4. Une boucle peut sélectionner certaines valeurs

En ajoutant un `if` à l'intérieur de la boucle, vous pouvez parcourir un ensemble de valeurs, mais n'exécuter l'action que sur celles qui valident la condition (ex: `if (nombre % 2 === 0)` pour ne traiter que les nombres pairs).

### 1.5. Méthode pour résoudre un exercice

Suivez ce plan pour vos exercices :
1. Lisez le problème.
2. Identifiez ce qui doit être répété.
3. Définissez le compteur et la condition d'arrêt.
4. Prévoyez un accumulateur si le problème nécessite un calcul global.
5. Codez et testez.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Afficher les nombres de 1 à 10

**Travail** : Écrivez une boucle `for` affichant tous les nombres de 1 à 10.
**Test** : Modifiez la condition d'arrêt pour afficher les nombres jusqu'à 20.

### 2.2. Exercice 2 — Afficher les nombres de 10 à 1

**Travail** : Modifiez votre boucle pour faire un compte à rebours de 10 à 1.
**Question** : Quelle instruction permet de diminuer la valeur du compteur au lieu de l'augmenter ?

### 2.3. Exercice 3 — Afficher un message plusieurs fois

**Travail** : Utilisez une boucle pour afficher exactement 5 fois le message "Bonjour Madani Ali". Modifiez ensuite pour l'afficher 10 fois.

### 2.4. Exercice 4 — Utiliser `while`

**Travail** : Affichez les nombres de 1 à 5, mais en utilisant obligatoirement une boucle `while`. N'oubliez pas d'incrémenter le compteur.

### 2.5. Exercice 5 — Afficher les nombres pairs

**Travail** : Parcourez les nombres de 1 à 20. À l'intérieur de la boucle, utilisez un `if` pour n'afficher que les nombres pairs.

### 2.6. Exercice 6 — Afficher les nombres impairs

**Travail** : Reprenez l'exercice précédent et modifiez la condition pour n'afficher que les nombres impairs.

### 2.7. Exercice 7 — Calculer une somme

**Travail** : Calculez `1 + 2 + 3 + 4 + 5`. Déclarez un accumulateur à `0` avant la boucle, puis ajoutez-y chaque valeur.
**Résultat attendu** : 15.

### 2.8. Exercice 8 — Calculer la somme de 1 à 10

**Travail** : Calculez la somme de 1 à 10 de la même manière.
**Résultat attendu** : 55.
**Question** : Pourquoi l'accumulateur doit-il absolument être initialisé *avant* la boucle ?

### 2.9. Exercice 9 — Calculer la somme des nombres pairs

**Travail** : Parcourez de 1 à 20. Ajoutez à l'accumulateur uniquement les nombres pairs.
**Résultat attendu** : 110.

### 2.10. Exercice 10 — Compter les nombres pairs

**Travail** : Parcourez de 1 à 20. Ne calculez pas la somme, mais comptez (ajoutez +1) à chaque fois que vous rencontrez un nombre pair.
**Résultat attendu** : 10.

### 2.11. Exercice 11 — Compter les nombres supérieurs à une valeur

**Travail** : Parcourez de 1 à 20. Comptez combien de nombres sont strictement supérieurs à `12`.
**Résultat attendu** : 8.

### 2.12. Exercice 12 — Calculer un produit

**Travail** : Calculez `1 × 2 × 3 × 4 × 5` en utilisant un accumulateur.
**Attention** : La valeur de départ pour une multiplication ne peut pas être `0` !
**Résultat attendu** : 120.

### 2.13. Exercice 13 — Afficher une table de multiplication

**Donnée** : `let nombre = 5;`
**Travail** : Utilisez une boucle pour afficher la table de multiplication : `5 x 1 = 5`, jusqu'à `5 x 10 = 50`.

### 2.14. Exercice 14 — Analyser une série de valeurs

**Donnée** : `let maximum = 20;`
**Travail** : Parcourez les nombres de 1 à `maximum`. Comptez le nombre de chiffres pairs ET calculez leur somme.
**Résultat attendu** : Le programme doit afficher "Nombre : 10" et "Somme : 110".

### 2.15. Travail à faire

Choisissez **trois exercices** parmi les numéros 7 à 14.
Pour chaque exercice, définissez clairement le compteur, la condition d'arrêt, et l'accumulateur (si nécessaire).
Construisez le programme et testez. (Utilisez `while` au moins une fois).

### Livrable

Préparez un document incluant, pour chaque exercice : l'énoncé du problème, votre code source, et le résultat du test.

### Critère de réussite

Les boucles s'arrêtent correctement (pas de boucle infinie), et les accumulateurs sont bien utilisés et placés hors de la boucle.

### Résultat attendu

Vous devez être capable de manipuler les compteurs, les accumulateurs et de filtrer les données avec un `if` au sein d'une boucle.

## Bilan

**Vous avez appris :**
* À répéter un traitement avec `for` ou `while`.
* À utiliser les compteurs et les accumulateurs.
* À compter, additionner, multiplier, et filtrer des valeurs itératives.

**Vous savez maintenant :**
* Analyser et résoudre un problème répétitif grâce aux boucles.

## Glossaire

* **Accumulateur** : Variable conservant progressivement un résultat global (ex: une somme).
* **Sélection** : Action de cibler des valeurs spécifiques à l'aide d'une condition au sein d'une boucle.
