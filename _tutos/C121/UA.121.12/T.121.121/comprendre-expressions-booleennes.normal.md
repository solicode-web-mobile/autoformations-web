---
title: "Comprendre les expressions booléennes"
layout: tuto
slug: "comprendre-expressions-booleennes"
permalink: /tutos/:slug/
tuto_id: "T.121.121"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 1
data_js: ""
---

## 1. Objectif

Apprendre à manipuler une **expression booléenne**.

Vous allez acquérir les compétences suivantes :
* Reconnaître une valeur booléenne (`true` ou `false`).
* Comparer deux valeurs entre elles.
* Construire une expression booléenne simple.
* Stocker le résultat d'une expression dans une variable.

À la fin de ce tutoriel, vous devez comprendre qu'une expression booléenne donne toujours un résultat strictement vrai ou faux.

## 2. Prérequis

Avant de commencer, vous devez savoir :
* Créer un fichier JavaScript et l'exécuter avec Node.js.
* Déclarer une variable et utiliser `console.log()`.
* Utiliser des nombres et des chaînes de caractères.

Exemple de rappel :

```javascript
let age = 20;
console.log(age);
```

## Partie 1 — Théorie

### 1.1. Une valeur booléenne

Contrairement aux nombres ou au texte, une valeur booléenne ne peut prendre que deux formes strictes :
* `true` (vrai)
* `false` (faux)

Voici comment déclarer des variables contenant ces valeurs :
```javascript
let disponible = true;
let termine = false;
```

### 1.2. Une expression booléenne

Une expression booléenne est une instruction évaluée par l'ordinateur, qui donnera obligatoirement `true` ou `false` comme résultat.

Exemples :
* `10 > 5` donnera le résultat `true`.
* `10 < 5` donnera le résultat `false`.

### 1.3. Comparer deux valeurs

En JavaScript, vous pouvez comparer deux valeurs en utilisant différents opérateurs.

#### Égalité
Pour vérifier si deux valeurs sont identiques, utilisez `===`.
Exemple : `10 === 10` → `true`.

#### Différence
Pour vérifier si deux valeurs sont différentes, utilisez `!==`.
Exemple : `10 !== 5` → `true`.

#### Supérieur
Pour vérifier si la première valeur est plus grande que la deuxième, utilisez `>`.
Exemple : `10 > 5` → `true`.

#### Inférieur
Pour vérifier si la première valeur est plus petite, utilisez `<`.
Exemple : `3 < 8` → `true`.

#### Supérieur ou égal
Pour vérifier si la valeur est plus grande ou égale, utilisez `>=`.
Exemple : `18 >= 18` → `true`.

#### Inférieur ou égal
Pour vérifier si la valeur est plus petite ou égale, utilisez `<=`.
Exemple : `15 <= 20` → `true`.

### 1.4. Les opérateurs de comparaison

Voici le résumé des opérateurs à retenir :

| Opérateur | Signification           |
| --------- | ----------------------- |
| `===`     | est égal à              |
| `!==`     | est différent de        |
| `>`       | est supérieur à         |
| `<`       | est inférieur à         |
| `>=`      | est supérieur ou égal à |
| `<=`      | est inférieur ou égal à |

### 1.5. Une expression peut utiliser une variable

Vous pouvez comparer une variable à une autre valeur. L'ordinateur remplacera la variable par son contenu avant d'évaluer l'expression.

```javascript
let age = 20;
console.log(age >= 18); // Affiche true
```

### 1.6. Une expression booléenne peut être stockée

Il est souvent utile de conserver le résultat d'une comparaison. Vous pouvez le stocker dans une variable.

```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // Affiche true
```
Ici, la variable `estMajeur` contient la valeur booléenne `true`.

### 1.7. Combiner deux expressions booléennes

Vous pouvez combiner plusieurs conditions en utilisant des opérateurs logiques.

#### ET — `&&`
L'opérateur `&&` exige que les deux expressions soient `true` pour que le résultat global soit `true`.

#### OU — `||`
L'opérateur `||` exige qu'au moins l'une des expressions soit `true` pour que le résultat global soit `true`.

#### NON — `!`
L'opérateur `!` inverse le résultat : il transforme un `true` en `false`, et inversement.

### 1.8. Comprendre une expression composée

Voici un exemple combinant plusieurs règles :

```javascript
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true; // Résultat : true
```
L'accès est accordé car l'âge est correct **et** l'autorisation est vraie.

### 1.9. À retenir

* **Booléen** : Valeur limitée à `true` ou `false`.
* **Opérateurs de comparaison** : `===`, `!==`, `>`, `<`, `>=`, `<=`.
* **Opérateurs logiques** : `&&` (ET), `||` (OU), `!` (NON).
* Le résultat d'une expression peut être stocké dans une variable.

## Partie 2 — Pratique

### 2.1. Vérifier une comparaison

Créez un fichier `booleen.js`. Testez ce code simple :
```javascript
console.log(10 > 5); // Affiche true
```
Modifiez le code pour écrire `console.log(10 < 5);` et observez le résultat.

### 2.2. Tester plusieurs comparaisons

Testez le code suivant et observez attentivement chaque résultat :
```javascript
console.log(10 === 10);
console.log(10 !== 5);
console.log(10 > 5);
console.log(3 < 8);
console.log(18 >= 18);
console.log(15 <= 20);
```

### 2.3. Utiliser une variable

Testez cette comparaison en utilisant une variable :
```javascript
let age = 20;
console.log(age >= 18);
```
Changez ensuite la valeur de la variable `age` à `15`. Relancez le programme et analysez la différence.

### 2.4. Stocker le résultat

Stockons le résultat de la comparaison dans une nouvelle variable :
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur);
```
Testez ce programme avec `age = 15` et vérifiez que `estMajeur` prend bien la valeur `false`.

### 2.5. Utiliser `&&`

Testez l'opérateur ET :
```javascript
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true;
console.log(acces);
```
Passez la variable `autorisation` à `false` et exécutez à nouveau le programme. Que remarquez-vous ?

### 2.6. Utiliser `||`

Testez l'opérateur OU :
```javascript
let membre = false;
let invitation = true;
let entree = membre === true || invitation === true;
console.log(entree);
```
Changez `invitation` à `false` et relancez le test pour voir le résultat.

### 2.7. Utiliser `!`

Testez l'opérateur d'inversion :
```javascript
let disponible = true;
console.log(!disponible);
```
Passez `disponible` à `false` et constatez l'inversion.

### 2.8. Exercice — Prévoir le résultat

Indiquez mentalement le résultat attendu de chaque ligne, puis vérifiez avec un `console.log()` :

| Expression      | Résultat |
| --------------- | -------- |
| `5 > 2`         |          |
| `5 < 2`         |          |
| `10 === 10`     |          |
| `10 !== 10`     |          |
| `8 >= 8`        |          |
| `3 <= 2`        |          |
| `true && true`  |          |
| `true && false` |          |
| `false          |          | true` |
| `!false`        |          |

### 2.9. Exercice — Analyser des variables

Voici des données de départ :
```javascript
let age = 22;
let inscrit = true;
let paiement = false;
```
Écrivez l'expression booléenne JavaScript correspondant à chaque question :
1. L'âge est-il supérieur ou égal à 18 ?
2. La personne est-elle inscrite ?
3. Le paiement est-il effectué ?
4. L'âge est-il supérieur ou égal à 18 **ET** la personne est-elle inscrite ?
5. La personne est-elle inscrite **OU** le paiement est-il effectué ?

### Résultat attendu

Vous devez savoir évaluer et écrire des expressions booléennes de ce type pour préparer les traitements conditionnels :
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // Affiche true
```

## Bilan

**Vous avez appris :**
* À utiliser les valeurs booléennes.
* À manipuler les opérateurs de comparaison et les opérateurs logiques.

**Vous savez maintenant :**
* Construire et vérifier une expression booléenne, ce qui sera indispensable pour utiliser les conditions (`if`).

## Glossaire

* **Booléen** : Type de donnée qui ne peut valoir que `true` ou `false`.
* **Comparaison** : Relation entre des valeurs (`>`, `<`, `===`, etc.).
* **Opérateurs logiques** : Opérateurs servant à combiner des règles (`&&`, `||`, `!`).
