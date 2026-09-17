---
title: "Comprendre les expressions booléennes"
layout: tuto
slug: "comprendre-expressions-booleennes"
permalink: /tutos/:slug/compact
tuto_id: "T.121.121"
type: "classique"
version: "compact"
ua: "UA.121.12"
nav_order: 1
data_js: ""
---

## 1. Objectif

Apprendre à manipuler une **expression booléenne**.

Compétences visées :
* Reconnaître une valeur booléenne.
* Utiliser `true` et `false`.
* Comparer deux valeurs.
* Construire une expression booléenne.
* Utiliser une expression booléenne dans une variable.

Résultat attendu : Comprendre qu'une expression booléenne donne uniquement `true` ou `false`.

## 2. Prérequis

Savoir :
* Créer/exécuter un fichier JS avec Node.js.
* Déclarer une variable et faire un `console.log()`.
* Utiliser des nombres et du texte.

Exemple :

```javascript
let age = 20;
console.log(age);
```

## Partie 1 — Théorie

### 1.1. Une valeur booléenne

Deux valeurs possibles :
* `true` (vrai)
* `false` (faux)

Exemple :
```javascript
let disponible = true;
let termine = false;
```

### 1.2. Une expression booléenne

Résultat toujours `true` ou `false`.

Exemple :
* `10 > 5` → `true`
* `10 < 5` → `false`

### 1.3. Comparer deux valeurs

#### Égalité
`10 === 10` → `true`

#### Différence
`10 !== 5` → `true`

#### Supérieur
`10 > 5` → `true`

#### Inférieur
`3 < 8` → `true`

#### Supérieur ou égal
`18 >= 18` → `true`

#### Inférieur ou égal
`15 <= 20` → `true`

### 1.4. Les opérateurs de comparaison

| Opérateur | Signification       |
| --------- | ------------------- |
| `===`     | égal à              |
| `!==`     | différent de        |
| `>`       | supérieur à         |
| `<`       | inférieur à         |
| `>=`      | supérieur ou égal à |
| `<=`      | inférieur ou égal à |

### 1.5. Une expression peut utiliser une variable

Exemple :
```javascript
let age = 20;
console.log(age >= 18); // true
```

### 1.6. Une expression booléenne peut être stockée

Exemple :
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // true
```

### 1.7. Combiner deux expressions booléennes

#### ET — `&&`
Les deux doivent être `true`.

#### OU — `||`
Au moins une doit être `true`.

#### NON — `!`
Inverse la valeur (`!true` = `false`).

### 1.8. Comprendre une expression composée

Exemple :
```javascript
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true; // true
```

### 1.9. À retenir

* Booléen : `true` ou `false`.
* Opérateurs : `===`, `!==`, `>`, `<`, `>=`, `<=`.
* Combiner : `&&` (ET), `||` (OU), `!` (NON).
* Stocker le résultat dans une variable.

## Partie 2 — Pratique

### 2.1. Vérifier une comparaison

Créez `booleen.js`. Testez :
```javascript
console.log(10 > 5); // true
```
Changez par `10 < 5` et vérifiez.

### 2.2. Tester plusieurs comparaisons

Testez ce code et expliquez les résultats :
```javascript
console.log(10 === 10);
console.log(10 !== 5);
console.log(10 > 5);
console.log(3 < 8);
console.log(18 >= 18);
console.log(15 <= 20);
```

### 2.3. Utiliser une variable

Testez avec `age = 20` puis `age = 15` :
```javascript
let age = 20;
console.log(age >= 18);
```
Expliquez la différence.

### 2.4. Stocker le résultat

Créez une variable booléenne :
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur);
```
Testez avec `age = 15`.

### 2.5. Utiliser `&&`

Testez :
```javascript
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true;
console.log(acces);
```
Changez `autorisation` à `false` et testez.

### 2.6. Utiliser `||`

Testez :
```javascript
let membre = false;
let invitation = true;
let entree = membre === true || invitation === true;
console.log(entree);
```
Changez `invitation` à `false` et testez.

### 2.7. Utiliser `!`

Testez avec `disponible = true` puis `false` :
```javascript
let disponible = true;
console.log(!disponible);
```

### 2.8. Exercice — Prévoir le résultat

Indiquez le résultat sans exécuter, puis vérifiez :

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

### 2.9. Exercice — Analyser des variables

Données :
```javascript
let age = 22;
let inscrit = true;
let paiement = false;
```
Écrivez les expressions pour :
1. Âge >= 18 ?
2. Inscrite ?
3. Paiement effectué ?
4. Âge >= 18 **ET** inscrite ?
5. Inscrite **OU** paiement effectué ?

### Résultat attendu

Savoir évaluer et produire des expressions booléennes :
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // true
```

## Bilan

**Vous avez appris :**
* Les valeurs et expressions booléennes.
* Les opérateurs de comparaison et logiques.

**Vous savez maintenant :**
* Construire et vérifier une expression booléenne, utile pour les futures conditions.

## Glossaire

* **Booléen** : `true` ou `false`.
* **Comparaison** : relation entre valeurs (`>`, `<`, `===`, ...).
* **Opérateurs logiques** : `&&` (ET), `||` (OU), `!` (NON).
