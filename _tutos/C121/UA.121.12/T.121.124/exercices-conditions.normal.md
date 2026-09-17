---
title: "Exercices sur les conditions"
layout: tuto
slug: "exercices-conditions"
permalink: /tutos/:slug/
tuto_id: "T.121.124"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 4
data_js: ""
---

## 1. Objectif

S'entraîner à résoudre de petits problèmes concrets en utilisant la logique des **conditions**.

Vous allez consolider vos acquis sur :
* Les expressions booléennes et les opérateurs de comparaison.
* L'utilisation de `if`, `else`, et `else if`.
* La combinaison de règles avec `&&`, `||`, et `!`.

## 2. Prérequis

Avant de débuter ces exercices, vous devez être capable de :
* Créer des variables et utiliser `console.log()`.
* Écrire des comparaisons simples (`>`, `<`, `===`).
* Construire un bloc conditionnel.
* Note : aucune boucle n'est utilisée dans ce tutoriel.

## Données de départ

### JavaScript

Créez le fichier `exercices-conditions.js` et préparez ces variables de départ :

```javascript
let age = 20;
let note = 14;
let inscrit = true;
```

## Partie 1 — Théorie

### 1.1. Une condition répond à une règle

Pour chaque exercice, commencez par identifier la règle. Par exemple, si la réussite exige une note minimale de 10, la règle est `note >= 10`. Placez ensuite cette règle dans un `if`.

### 1.2. Un problème peut avoir deux résultats

Si le problème se limite à deux choix possibles (ex: vrai ou faux, majeur ou mineur), utilisez la structure `if` et `else` (deux chemins).

### 1.3. Un problème peut avoir plusieurs résultats

Si le problème présente plusieurs cas (ex: plusieurs tranches de notes), utilisez une cascade de conditions : `if`, suivi de `else if`, puis éventuellement `else`.

### 1.4. Un problème peut avoir plusieurs règles

Si plusieurs critères doivent être validés en même temps (ex: majeur ET inscrit), rassemblez-les avec l'opérateur `&&`.

### 1.5. Une règle peut avoir plusieurs possibilités

S'il suffit qu'un seul critère parmi d'autres soit validé (ex: membre OU invité), rassemblez-les avec l'opérateur `||`.

### 1.6. Méthode pour résoudre un exercice

Pour réussir vos exercices, suivez cette méthode pas-à-pas :
1. Lisez le problème.
2. Identifiez les données (les variables).
3. Repérez les règles.
4. Traduisez ces règles en expressions booléennes.
5. Construisez la structure (`if`, `else if`, `else`).
6. Testez avec différentes valeurs.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Majeur ou mineur

**Donnée** : `let age = 20;`
**Règle** : La majorité est fixée à 18 ans.
**Travail** : Affichez "Majeur" si c'est le cas, sinon affichez "Mineur".
**Test** : Modifiez la variable pour tester les âges 15, 18, et 25.

### 2.2. Exercice 2 — Nombre positif ou négatif

**Donnée** : `let nombre = 7;`
**Travail** : Affichez "Positif" si le nombre est supérieur à 0. Dans tous les autres cas, affichez "Négatif ou nul".
**Test** : Testez avec 7, -3, et 0.

### 2.3. Exercice 3 — Pair ou impair

**Donnée** : `let nombre = 8;`
**Règle** : Un nombre est pair si `nombre % 2 === 0`.
**Travail** : Utilisez cette règle pour afficher "Pair" ou "Impair".
**Test** : Testez avec 8, 11, 20, et 7.

### 2.4. Exercice 4 — Résultat d'un apprenant

**Donnée** : `let note = 12;`
**Règles** : 
* `>= 16` → "Très bien"
* `>= 10` → "Validé"
* `< 10` → "Non validé"
**Travail** : Créez l'enchaînement de conditions approprié.
**Test** : Testez avec 8, 10, 14, 16, et 20.
**Question** : Pourquoi faut-il vérifier `note >= 16` avant `note >= 10` ?

### 2.5. Exercice 5 — Maximum de deux valeurs

**Données** : `let a = 12; let b = 8;`
**Travail** : Comparez ces valeurs et affichez la plus grande.
**Test** : Testez avec (12, 8), (5, 13), et (10, 10).
**Question** : Que fait votre code lorsque les deux valeurs sont égales ?

### 2.6. Exercice 6 — Accès à un service

**Données** : `let age = 22; let compteActif = true;`
**Règles** : L'accès est autorisé si l'âge est `>= 18` **ET** que `compteActif === true`.
**Travail** : Affichez "Accès autorisé" ou "Accès refusé".
**Test** : Modifiez les variables pour tester toutes les combinaisons possibles.

### 2.7. Exercice 7 — Autorisation avec deux possibilités

**Données** : `let membre = false; let invitation = true;`
**Règles** : L'accès est autorisé si la personne est membre **OU** si elle possède une invitation.
**Travail** : Construisez le programme en utilisant `||`.
**Test** : Testez toutes les combinaisons.

### 2.8. Exercice 8 — Classification d'une température

**Donnée** : `let temperature = 28;`
**Règles** : 
* `< 10` → "Froid"
* `< 25` → "Doux"
* `>= 25` → "Chaud"
**Travail** : Construisez ce programme en prêtant attention à l'ordre des conditions.
**Test** : Testez avec 5, 15, 24, 25, et 30.

### 2.9. Exercice 9 — Formule de décision

**Données** : `let note = 14; let presence = 90;`
**Règles** : Pour valider, il faut une note `>= 10` **ET** une présence `>= 80`.
**Travail** : Affichez "Validé" ou "Non validé".
**Test** : Testez avec (14, 90), (14, 70), (8, 90), et (8, 70).

### 2.10. Exercice 10 — Petit problème de synthèse

**Donnée** : `let montant = 120;`
**Règles** :
* `>= 200` : Réduction de 10 % + livraison gratuite.
* `100` à `199` : Livraison gratuite.
* `< 100` : Livraison payante.
**Travail** : Construisez le programme en choisissant le bon ordre pour vos conditions.
**Test** : Testez avec les montants 80, 120, 200, et 250.

### 2.11. Travail à faire

Choisissez **deux exercices** parmi les exercices 5 à 10.
Pour chacun, détaillez : les variables, les règles, le code final, et les résultats de vos tests.

### Livrable

Un document (Markdown ou Google Doc) avec vos données, règles, code, tests effectués, et les résultats affichés.

### Critère de réussite

Les conditions sont logiques, l'ordre de priorité est respecté, et aucune boucle n'est utilisée.

### Résultat attendu

Vous devez être capable de transformer l'énoncé d'un problème en un traitement conditionnel valide en JavaScript en utilisant `if/else`, `&&` et `||`.

## Bilan

**Vous avez appris :**
* À modéliser un problème avec des conditions informatiques.
* À associer plusieurs règles dans une même décision.

**Vous savez maintenant :**
* Traduire une logique verbale en une structure conditionnelle capable de s'adapter aux différentes données qu'elle reçoit.

## Glossaire

* **Condition / Cas** : Règle métier servant d'aiguillage dans le programme.
* **Test** : Exécution du programme avec une valeur spécifique pour vérifier son comportement de bout en bout.
