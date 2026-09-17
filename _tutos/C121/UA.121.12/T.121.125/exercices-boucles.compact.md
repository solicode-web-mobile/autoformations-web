---
title: "Exercices sur les boucles"
layout: tuto
slug: "exercices-boucles"
permalink: /tutos/:slug/compact
tuto_id: "T.121.125"
type: "classique"
version: "compact"
ua: "UA.121.12"
nav_order: 5
data_js: ""
---

## 1. Objectif

S'entraîner à utiliser les **boucles** pour résoudre des problèmes.

Réutilisation de :
* `for` et `while`.
* Compteur et accumulateur.
* Condition d'arrêt.
* Conditions dans une boucle (`if`).

## 2. Prérequis

Savoir utiliser variables, `console.log()`, `if`, et construire une boucle `for` ou `while`.

## Données de départ

### JavaScript

Créez `exercices-boucles.js` avec :
```javascript
let debut = 1;
let fin = 10;
console.log(debut);
console.log(fin);
```

## Partie 1 — Théorie

### 1.1. Une boucle répète une action

Exécuter plusieurs fois un traitement sans le réécrire.

### 1.2. Le compteur contrôle la répétition

Il évolue (`1`, `2`, `3`...) et peut servir à afficher, compter, calculer ou tester une condition.

### 1.3. L'accumulateur

Variable conservant progressivement un résultat.
Exemple : `somme = somme + nombre;`

### 1.4. Une boucle peut sélectionner certaines valeurs

Parcourir des valeurs et n'agir que sur certaines via un `if` (ex: `if (nombre % 2 === 0)`).

### 1.5. Méthode pour résoudre un exercice

1. Lire le problème.
2. Identifier la répétition.
3. Identifier compteur et condition d'arrêt.
4. Définir le traitement (et l'accumulateur si besoin).
5. Tester.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Afficher les nombres de 1 à 10

**Travail** : Boucle `for` affichant 1 à 10.
**Test** : Modifier pour afficher jusqu'à 20.

### 2.2. Exercice 2 — Afficher les nombres de 10 à 1

**Travail** : Compte à rebours de 10 à 1.
**Question** : Quelle instruction diminue le compteur ?

### 2.3. Exercice 3 — Afficher un message plusieurs fois

**Travail** : Afficher 5 fois "Bonjour Madani Ali". Modifier pour 10 fois.

### 2.4. Exercice 4 — Utiliser `while`

**Travail** : Afficher 1 à 5 avec `while`.

### 2.5. Exercice 5 — Afficher les nombres pairs

**Travail** : Parcourir 1 à 20 et afficher uniquement les pairs (avec `if`).

### 2.6. Exercice 6 — Afficher les nombres impairs

**Travail** : Idem, mais pour les nombres impairs.

### 2.7. Exercice 7 — Calculer une somme

**Travail** : Calculer `1 + 2 + 3 + 4 + 5` avec un accumulateur. Résultat: 15.

### 2.8. Exercice 8 — Calculer la somme de 1 à 10

**Travail** : Somme de 1 à 10 (résultat: 55).
**Question** : Pourquoi l'accumulateur commence-t-il à `0` ?

### 2.9. Exercice 9 — Calculer la somme des nombres pairs

**Travail** : Somme des nombres pairs de 1 à 20 (résultat: 110).

### 2.10. Exercice 10 — Compter les nombres pairs

**Travail** : Compter (pas sommer) les pairs entre 1 et 20 (résultat: 10).

### 2.11. Exercice 11 — Compter les nombres supérieurs à une valeur

**Travail** : Compter combien de nombres de 1 à 20 sont `> 12` (résultat: 8).

### 2.12. Exercice 12 — Calculer un produit

**Travail** : Calculer `1 × 2 × 3 × 4 × 5` avec un accumulateur.
**Attention** : la valeur initiale de l'accumulateur pour un produit n'est pas `0`. (Résultat: 120).

### 2.13. Exercice 13 — Afficher une table de multiplication

**Donnée** : `let nombre = 5;`
**Travail** : Afficher `5 x 1 = 5` jusqu'à `5 x 10 = 50`.

### 2.14. Exercice 14 — Analyser une série de valeurs

**Donnée** : `let maximum = 20;`
**Travail** : De 1 à 20, compter les pairs et calculer leur somme.
**Résultat** : Nombre: 10, Somme: 110.

### 2.15. Travail à faire

Choisissez **trois exercices** parmi 7 à 14.
Définissez : compteur, condition d'arrêt, accumulateur.
Construisez le programme et testez. (Utilisez `while` au moins une fois).

### Livrable

Document avec pour chaque exercice : problème, code, test, résultat.

### Critère de réussite

Boucles fonctionnelles avec conditions d'arrêt correctes, accumulateurs bien utilisés.

### Résultat attendu

Savoir manipuler compteurs, accumulateurs, et sélections (`if`) au sein d'une boucle.

## Bilan

**Vous avez appris :**
* Répéter un traitement (`for`, `while`).
* Utiliser compteurs et accumulateurs.
* Compter, sommer, multiplier, et filtrer des valeurs.

**Vous savez maintenant :**
* Reconnaître et résoudre un problème répétitif simple.

## Glossaire

* **Accumulateur** : variable conservant progressivement un résultat.
* **Sélection** : choix de valeurs via une condition.
