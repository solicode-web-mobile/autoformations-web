---
title: "Exercices sur les conditions"
layout: tuto
slug: "exercices-conditions"
permalink: /tutos/:slug/compact
tuto_id: "T.121.124"
type: "classique"
version: "compact"
ua: "UA.121.12"
nav_order: 4
data_js: ""
---

## 1. Objectif

S'entraîner à résoudre de petits problèmes avec les **conditions**.

Réutilisation de :
* expressions booléennes.
* `if`, `else`, `else if`.
* `&&`, `||`, `!`.

## 2. Prérequis

Savoir utiliser variables, `console.log()`, comparaisons et blocs conditionnels.
(Aucune boucle n'est nécessaire ici).

## Données de départ

### JavaScript

Créez `exercices-conditions.js` :
```javascript
let age = 20;
let note = 14;
let inscrit = true;
```

## Partie 1 — Théorie

### 1.1. Une condition répond à une règle

Identifier la règle (ex: "note >= 10") puis l'appliquer dans un `if`.

### 1.2. Un problème peut avoir deux résultats

Deux chemins (`if` / `else`).

### 1.3. Un problème peut avoir plusieurs résultats

Plusieurs cas (`if` / `else if` / `else`).

### 1.4. Un problème peut avoir plusieurs règles

Exemple : Accès si majeur **ET** actif → Utiliser `&&`.

### 1.5. Une règle peut avoir plusieurs possibilités

Exemple : Entrée si membre **OU** invité → Utiliser `||`.

### 1.6. Méthode pour résoudre un exercice

1. Lire le problème.
2. Identifier les données.
3. Identifier la règle.
4. Écrire l'expression booléenne.
5. Choisir la structure conditionnelle.
6. Tester.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Majeur ou mineur

**Donnée** : `let age = 20;`
**Règle** : Majeur à partir de 18 ans.
**Travail** : Afficher "Majeur" ou "Mineur".
**Test** : 15, 18, 25.

### 2.2. Exercice 2 — Nombre positif ou négatif

**Donnée** : `let nombre = 7;`
**Travail** : Indiquer "Positif" si `> 0`, sinon "Négatif ou nul".
**Test** : 7, -3, 0.

### 2.3. Exercice 3 — Pair ou impair

**Donnée** : `let nombre = 8;`
**Règle** : Pair si `nombre % 2 === 0`.
**Travail** : Afficher "Pair" ou "Impair".
**Test** : 8, 11, 20, 7.

### 2.4. Exercice 4 — Résultat d'un apprenant

**Donnée** : `let note = 12;`
**Règles** : `>= 16` (Très bien), `>= 10` (Validé), `< 10` (Non validé).
**Travail** : Afficher le résultat avec `if/else if/else`.
**Test** : 8, 10, 14, 16, 20.
**Question** : Pourquoi tester `>= 16` avant `>= 10` ?

### 2.5. Exercice 5 — Maximum de deux valeurs

**Données** : `let a = 12; let b = 8;`
**Travail** : Afficher la plus grande valeur.
**Test** : (12, 8), (5, 13), (10, 10).
**Question** : Que faire en cas d'égalité ?

### 2.6. Exercice 6 — Accès à un service

**Données** : `let age = 22; let compteActif = true;`
**Règles** : Accès si `age >= 18` **ET** `compteActif === true`.
**Travail** : Afficher "Accès autorisé" ou "Accès refusé".
**Test** : Toutes les combinaisons de ces deux variables.

### 2.7. Exercice 7 — Autorisation avec deux possibilités

**Données** : `let membre = false; let invitation = true;`
**Règles** : Entrer si membre **OU** invité.
**Travail** : Construire avec `||`.
**Test** : Toutes les combinaisons.

### 2.8. Exercice 8 — Classification d'une température

**Donnée** : `let temperature = 28;`
**Règles** : `< 10` (Froid), `< 25` (Doux), `>= 25` (Chaud).
**Travail** : Construire le programme.
**Test** : 5, 15, 24, 25, 30.

### 2.9. Exercice 9 — Formule de décision

**Données** : `let note = 14; let presence = 90;`
**Règles** : Validé si `note >= 10` **ET** `presence >= 80`.
**Travail** : Afficher "Validé" ou "Non validé".
**Test** : 14/90, 14/70, 8/90, 8/70.

### 2.10. Exercice 10 — Petit problème de synthèse

**Donnée** : `let montant = 120;`
**Règles** :
* `>= 200` : Réduction de 10 % + livraison gratuite.
* `100` à `199` : Livraison gratuite.
* `< 100` : Livraison payante.
**Travail** : Choisir le bon ordre des conditions.
**Test** : 80, 120, 200, 250.

### 2.11. Travail à faire

Choisissez **deux exercices** parmi les exercices 5 à 10.
Pour chacun : donnez les variables, identifiez les règles, codez, testez.

### Livrable

Document avec : données, règles, code, tests, résultats.

### Critère de réussite

Conditions correctes, ordre respecté, absence de boucles.

### Résultat attendu

Savoir transformer un problème en un traitement conditionnel avec `if/else`, `&&` et `||`.

## Bilan

**Vous avez appris :**
* À modéliser un problème avec des conditions.
* À utiliser et combiner plusieurs règles.

**Vous savez maintenant :**
* Traduire une logique verbale en expressions booléennes et structures conditionnelles.

## Glossaire

* **Condition** / **Cas** : Règle qui permet d'orienter le programme.
* **Test** : Validation du programme avec une valeur spécifique.
