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
simplified: true
---

## 1. Objectif

Apprendre à construire et évaluer des **expressions booléennes** : des expressions que l'ordinateur évalue toujours en `true` ou `false`. C'est la brique fondamentale de toute logique conditionnelle.

## 2. Prérequis

- Savoir déclarer une variable et utiliser `console.log()`.


## Partie 1 — Théorie

### 1.1. La valeur booléenne et les opérateurs de comparaison

Une **valeur booléenne** ne peut prendre que deux formes : `true` (vrai) ou `false` (faux).

Une **expression booléenne** est une instruction que l'ordinateur évalue et dont le résultat est toujours `true` ou `false`. On la construit en **comparant deux valeurs** grâce à un opérateur de comparaison.

| Opérateur | Signification | Exemple exécutable |
| :---: | :--- | :--- |
| `===` | Est égal à | `console.log(10 === 10); // true` |
| `!==` | Est différent de | `console.log(10 !== 5);  // true` |
| `>` | Est supérieur à | `console.log(10 > 5);    // true` |
| `<` | Est inférieur à | `console.log(3 < 8);     // true` |
| `>=` | Est supérieur ou égal à | `console.log(18 >= 18);  // true` |
| `<=` | Est inférieur ou égal à | `console.log(15 <= 20);  // true` |

### 1.2. Stocker le résultat d'une expression

Une expression booléenne peut être directement **stockée dans une variable**. L'ordinateur évalue l'expression et range son résultat (`true` ou `false`) dans la variable.

```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // Affiche : true

let age2 = 15;
let estMajeur2 = age2 >= 18;
console.log(estMajeur2); // Affiche : false
```

### 1.3. Combiner des expressions (`&&`, `||`, `!`)

Pour exprimer des règles plus complexes, on combine plusieurs expressions avec des **opérateurs logiques** :

| Opérateur | Nom | Règle | Exemple |
| :---: | :--- | :--- | :--- |
| `&&` | ET | Vrai seulement si **les deux** sont vrais | `age >= 18 && inscrit === true` |
| `\|\|` | OU | Vrai si **au moins un** est vrai | `membre === true \|\| invitation === true` |
| `!` | NON | **Inverse** le résultat | `!disponible` |

```javascript
let age = 20;
let autorisation = true;
let membre = false;
let invitation = true;

// ET : les deux doivent être vrais
let acces = age >= 18 && autorisation === true;
console.log(acces); // true

// OU : l'un ou l'autre suffit
let entree = membre === true || invitation === true;
console.log(entree); // true

// NON : inversion
let disponible = true;
console.log(!disponible); // false
```

## Partie 2 — Pratique

### 2.1. Construire votre fichier `booleen.js`

Dans votre fichier `booleen.js`, saisissez le code suivant et exécutez-le. Observez chaque résultat dans la console, puis modifiez les valeurs des variables pour vérifier votre compréhension.

```javascript
// --- Opérateurs de comparaison ---
let score = 14;
let seuil = 10;
console.log(score > seuil);   // Changez score à 8 et relancez
console.log(score === seuil);
console.log(score !== seuil);

// --- Stocker un résultat ---
let estValide = score >= seuil;
console.log(estValide); // Changez score à 8 et relancez

// --- Opérateurs logiques ---
let inscrit = true;
let paiement = false;
let acces = score >= seuil && inscrit === true;
console.log(acces); // Changez inscrit à false et relancez

let entree = inscrit === true || paiement === true;
console.log(entree); // Changez les deux à false et relancez
```

### 2.2. Exercice — Prévoir et vérifier

Voici des données de départ :

```javascript
let age = 22;
let inscrit = true;
let paiement = false;
```

**Sans exécuter**, prévoyez le résultat (`true` ou `false`) de chaque expression dans le tableau, puis vérifiez avec `console.log()` :

| Expression | Résultat prévu | Résultat réel |
| :--- | :---: | :---: |
| `age >= 18` | | |
| `inscrit === true` | | |
| `paiement === true` | | |
| `age >= 18 && inscrit === true` | | |
| `inscrit === true \|\| paiement === true` | | |
| `!paiement` | | |

### Livrable

Préparez un document (Markdown ou Google Doc) contenant :
1. Votre fichier `booleen.js` final (exercice 2.1).
2. Votre tableau complété (exercice 2.2).

### Critère de réussite

Toutes les prévisions du tableau correspondent aux résultats affichés dans la console, sans avoir modifié les données de départ.

## Bilan

**Vous savez maintenant :**
- Reconnaître et écrire une expression booléenne (`true` / `false`).
- Utiliser les 6 opérateurs de comparaison (`===`, `!==`, `>`, `<`, `>=`, `<=`).
- Combiner des expressions avec `&&`, `||`, et `!`.
- Stocker un résultat booléen dans une variable pour le réutiliser.

## Glossaire

- **Booléen** : Type de donnée ne pouvant valoir que `true` ou `false`.
- **Opérateur de comparaison** : Symbole évaluant la relation entre deux valeurs (`>`, `<`, `===`…).
- **Opérateur logique** : Symbole combinant plusieurs expressions booléennes (`&&`, `||`, `!`).
