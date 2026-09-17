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
data_js: |
  let age = 20;
  console.log(age >= 18);
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à comprendre une **expression booléenne**.

Vous allez apprendre à :

* reconnaître une valeur booléenne ;
* utiliser `true` et `false` ;
* comparer deux valeurs ;
* construire une expression booléenne ;
* utiliser une expression booléenne dans une variable.

À la fin du tutoriel, vous devez comprendre qu'une expression booléenne produit seulement deux résultats :

```text
true
```

ou :

```text
false
```

Cette notion sera utilisée dans le prochain tutoriel pour construire des **conditions**.

## 2. Prérequis

Vous devez savoir :

* créer un fichier JavaScript ;
* exécuter un fichier avec Node.js ;
* déclarer une variable ;
* utiliser `console.log()` ;
* utiliser des valeurs numériques et textuelles.

Exemple :

```javascript
let age = 20;

console.log(age);
```

Résultat :

```text
20
```

## Partie 1 — Théorie

### 1.1. Une valeur booléenne

Une valeur booléenne représente deux possibilités :

```text
true
false
```

En français, on peut les comprendre comme :

```text
true  → vrai
false → faux
```

Exemple :

```javascript
let disponible = true;
let termine = false;

console.log(disponible);
console.log(termine);
```

Résultat :

```text
true
false
```

Une valeur booléenne ne contient donc pas un nombre ou un texte.

Elle indique seulement :

```text
vrai
```

ou :

```text
faux
```

### 1.2. Une expression booléenne

Une **expression booléenne** est une expression dont le résultat est `true` ou `false`.

Exemple :

```javascript
10 > 5
```

Le résultat est :

```text
true
```

Car `10` est supérieur à `5`.

Autre exemple :

```javascript
10 < 5
```

Le résultat est :

```text
false
```

Car `10` n'est pas inférieur à `5`.

On peut représenter le fonctionnement ainsi :

```text
Expression
    ↓
Évaluation
    ↓
true ou false
```

### 1.3. Comparer deux valeurs

Pour construire une expression booléenne, on peut comparer des valeurs.

#### Égalité

```javascript
10 === 10
```

Résultat :

```text
true
```

Les deux valeurs sont égales.

#### Différence

```javascript
10 !== 5
```

Résultat :

```text
true
```

Les deux valeurs sont différentes.

#### Supérieur

```javascript
10 > 5
```

Résultat :

```text
true
```

#### Inférieur

```javascript
3 < 8
```

Résultat :

```text
true
```

#### Supérieur ou égal

```javascript
18 >= 18
```

Résultat :

```text
true
```

#### Inférieur ou égal

```javascript
15 <= 20
```

Résultat :

```text
true
```

### 1.4. Les opérateurs de comparaison

Les principaux opérateurs sont :

| Opérateur | Signification       |
| --------- | ------------------- |
| `===`     | égal à              |
| `!==`     | différent de        |
| `>`       | supérieur à         |
| `<`       | inférieur à         |
| `>=`      | supérieur ou égal à |
| `<=`      | inférieur ou égal à |

Exemples :

```javascript
5 === 5
```

```javascript
8 !== 3
```

```javascript
10 > 4
```

```javascript
2 < 9
```

### 1.5. Une expression peut utiliser une variable

Une expression booléenne peut utiliser une variable.

Exemple :

```javascript
let age = 20;

console.log(age >= 18);
```

Résultat :

```text
true
```

Si la valeur change :

```javascript
let age = 15;

console.log(age >= 18);
```

Résultat :

```text
false
```

La même règle est utilisée :

```text
age >= 18
```

Mais le résultat change selon la valeur de `age`.

### 1.6. Une expression booléenne peut être stockée

Le résultat d'une expression booléenne peut être stocké dans une variable.

Exemple :

```javascript
let age = 20;

let estMajeur = age >= 18;

console.log(estMajeur);
```

Résultat :

```text
true
```

La variable `estMajeur` contient maintenant une valeur booléenne.

On peut représenter le traitement ainsi :

```text
age = 20
   ↓
age >= 18
   ↓
true
   ↓
estMajeur
```

### 1.7. Combiner deux expressions booléennes

Plusieurs expressions booléennes peuvent être combinées.

#### ET — `&&`

Avec `&&`, les deux expressions doivent être vraies.

Exemple :

```javascript
let age = 20;
let autorisation = true;

console.log(age >= 18 && autorisation === true);
```

Résultat :

```text
true
```

Les deux conditions sont vraies.

#### OU — `||`

Avec `||`, au moins une des expressions doit être vraie.

Exemple :

```javascript
let age = 16;
let autorisation = true;

console.log(age >= 18 || autorisation === true);
```

Résultat :

```text
true
```

La deuxième expression est vraie.

#### NON — `!`

`!` inverse une valeur booléenne.

Exemple :

```javascript
let disponible = true;

console.log(!disponible);
```

Résultat :

```text
false
```

### 1.8. Comprendre une expression composée

Considérons :

```javascript
let age = 20;
let autorisation = true;

let acces = age >= 18 && autorisation === true;
```

Le programme évalue d'abord :

```text
age >= 18
```

Résultat :

```text
true
```

Puis :

```text
autorisation === true
```

Résultat :

```text
true
```

Les deux sont vraies.

Donc :

```text
true && true
```

donne :

```text
true
```

La variable `acces` contient donc :

```text
true
```

### 1.9. À retenir

* Une valeur booléenne est `true` ou `false`.
* Une expression booléenne produit `true` ou `false`.
* Les opérateurs de comparaison permettent de construire des expressions booléennes.
* Une expression booléenne peut utiliser des variables.
* Le résultat d'une expression booléenne peut être stocké dans une variable.
* `&&` signifie **ET**.
* `||` signifie **OU**.
* `!` signifie **NON**.

## Partie 2 — Pratique

### 2.1. Vérifier une comparaison

Créez le fichier :

```text
booleen.js
```

Ajoutez :

```javascript
console.log(10 > 5);
```

Exécutez :

```bash
node booleen.js
```

Résultat attendu :

```text
true
```

Changez ensuite le code :

```javascript
console.log(10 < 5);
```

Résultat attendu :

```text
false
```

### 2.2. Tester plusieurs comparaisons

Remplacez le code par :

```javascript
console.log(10 === 10);
console.log(10 !== 5);
console.log(10 > 5);
console.log(3 < 8);
console.log(18 >= 18);
console.log(15 <= 20);
```

Exécutez le programme.

Observez les résultats.

Pour chaque ligne, expliquez avec vos propres mots pourquoi le résultat est `true` ou `false`.

### 2.3. Utiliser une variable

Ajoutez :

```javascript
let age = 20;

console.log(age >= 18);
```

Testez ensuite avec :

```javascript
let age = 15;

console.log(age >= 18);
```

Comparez les deux résultats.

Expliquez pourquoi le résultat change alors que l'expression reste :

```text
age >= 18
```

### 2.4. Stocker le résultat

Créez une variable booléenne :

```javascript
let age = 20;

let estMajeur = age >= 18;

console.log(estMajeur);
```

Exécutez le programme.

Résultat attendu :

```text
true
```

Modifiez ensuite :

```javascript
let age = 15;

let estMajeur = age >= 18;

console.log(estMajeur);
```

Résultat attendu :

```text
false
```

### 2.5. Utiliser `&&`

Ajoutez :

```javascript
let age = 20;
let autorisation = true;

let acces = age >= 18 && autorisation === true;

console.log(acces);
```

Exécutez le programme.

Observez le résultat.

Changez ensuite :

```javascript
let autorisation = false;
```

Exécutez à nouveau.

Comparez les deux résultats.

### 2.6. Utiliser `||`

Testez :

```javascript
let membre = false;
let invitation = true;

let entree = membre === true || invitation === true;

console.log(entree);
```

Observez le résultat.

Changez ensuite :

```javascript
let invitation = false;
```

Exécutez à nouveau.

### 2.7. Utiliser `!`

Testez :

```javascript
let disponible = true;

console.log(!disponible);
```

Puis :

```javascript
let disponible = false;

console.log(!disponible);
```

Comparez les résultats.

### 2.8. Exercice — Prévoir le résultat

Sans exécuter le programme, indiquez le résultat de chaque expression.

| Expression      | Résultat |       |   |
| --------------- | -------- | ----- | - |
| `5 > 2`         |          |       |   |
| `5 < 2`         |          |       |   |
| `10 === 10`     |          |       |   |
| `10 !== 10`     |          |       |   |
| `8 >= 8`        |          |       |   |
| `3 <= 2`        |          |       |   |
| `true && true`  |          |       |   |
| `true && false` |          |       |   |
| `false          |          | true` |   |
| `!false`        |          |       |   |

Après avoir rempli le tableau, vérifiez vos réponses avec Node.js.

### 2.9. Exercice — Analyser des variables

Considérez :

```javascript
let age = 22;
let inscrit = true;
let paiement = false;
```

Écrivez une expression pour obtenir le résultat booléen correspondant à chacune des questions :

1. L'âge est-il supérieur ou égal à 18 ?
2. La personne est-elle inscrite ?
3. Le paiement est-il effectué ?
4. L'âge est-il supérieur ou égal à 18 **et** la personne est-elle inscrite ?
5. La personne est-elle inscrite **ou** le paiement est-il effectué ?

Ne créez pas encore de `if`.

Le but est uniquement de construire les **expressions booléennes**.

### Résultat attendu

À la fin du tutoriel, votre programme doit être capable d'évaluer des expressions comme :

```javascript
let age = 20;

let estMajeur = age >= 18;

console.log(estMajeur);
```

Résultat :

```text
true
```

Vous devez également être capable de produire des expressions comme :

```javascript
age >= 18
```

```javascript
age >= 18 && inscrit === true
```

```javascript
inscrit === true || paiement === true
```

Le résultat de chaque expression doit être :

```text
true
```

ou :

```text
false
```

Vous ne construisez pas encore de `if`, de `else`, de `for` ou de `while`. Ces structures seront étudiées dans les tutoriels suivants.

## Bilan

**Vous avez appris :**

* ce qu'est une valeur booléenne ;
* ce que sont `true` et `false` ;
* ce qu'est une expression booléenne ;
* comment comparer des valeurs ;
* comment utiliser les opérateurs de comparaison ;
* comment utiliser `&&`, `||` et `!` ;
* comment stocker le résultat d'une expression booléenne dans une variable.

**Vous savez maintenant :**

* construire une expression booléenne ;
* prévoir son résultat ;
* vérifier son résultat avec Node.js ;
* utiliser une expression booléenne comme base d'une future condition.

Le prochain tutoriel utilisera ces expressions pour construire des **conditions avec `if`, `else` et `else if`**.

## Glossaire

* **Booléen** : type de valeur qui contient `true` ou `false`.
* **`true`** : valeur qui représente le vrai.
* **`false`** : valeur qui représente le faux.
* **Expression booléenne** : expression dont le résultat est `true` ou `false`.
* **Comparaison** : opération qui permet de vérifier une relation entre deux valeurs.
* **Opérateur** : symbole utilisé pour réaliser une opération.
* **`&&`** : opérateur logique ET.
* **`||`** : opérateur logique OU.
* **`!`** : opérateur logique NON.
