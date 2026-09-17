---
title: "Construire des algorithmes élémentaires sur un tableau"
layout: tuto
slug: "construire-algorithmes-elementaires-tableau"
permalink: /tutos/:slug/
tuto_id: "T.121.135"
type: "algorithme"
version: "normal"
ua: "UA.121.13"
nav_order: 5
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez construire vos premiers **algorithmes classiques sur un tableau**.

Vous allez apprendre à :

* rechercher une valeur ;
* savoir si une valeur existe ;
* trouver la position d'une valeur ;
* rechercher la plus grande valeur ;
* rechercher la plus petite valeur.

Vous allez réutiliser :

* les tableaux ;
* les index ;
* `length` ;
* les boucles ;
* les conditions ;
* les compteurs.

La progression est :

```text
Tableau
   ↓
Parcours
   ↓
Comparaison
   ↓
Résultat
```

Puis :

```text
Recherche
   ↓
Position
   ↓
Maximum
   ↓
Minimum
```

## 2. Prérequis

Vous devez savoir :

* créer un tableau ;
* accéder à un élément avec son index ;
* utiliser `length` ;
* parcourir un tableau avec `for` ;
* utiliser `if` ;
* utiliser un compteur ;
* utiliser une variable pour conserver un résultat.

Exemple :

```javascript
let nombres = [12, 8, 15, 4, 19];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

## Données de départ

### JavaScript

Créez un fichier :

```text
algorithmes-tableaux.js
```

Commencez avec :

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;

console.log(nombres);
console.log(recherche);
```

Exécutez :

```bash
node algorithmes-tableaux.js
```

Résultat :

```text
[ 12, 8, 15, 4, 19 ]
15
```

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un algorithme élémentaire ?

Un algorithme élémentaire est un traitement que l'on peut réutiliser pour résoudre un problème courant.

Exemples :

```text
Rechercher une valeur
Trouver le maximum
Trouver le minimum
Trouver une position
```

Ces traitements sont construits avec des notions déjà connues :

```text
boucle
+
condition
+
variable résultat
```

### 1.2. Rechercher une valeur

Considérons :

```javascript
let nombres = [12, 8, 15, 4, 19];
```

Nous voulons savoir si `15` existe dans le tableau.

Le traitement consiste à :

```text
Parcourir le tableau
      ↓
Comparer chaque élément à 15
      ↓
Valeur trouvée ?
   ├── oui → valeur trouvée
   └── non → continuer
```

On peut écrire l'algorithme :

```text
Pour chaque élément du tableau :
    si élément = valeur recherchée :
        valeur trouvée
```

### 1.3. Première version de la recherche

Une première solution consiste à utiliser une variable booléenne.

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;

let trouve = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        trouve = true;
    }
}

console.log(trouve);
```

Résultat :

```text
true
```

La variable :

```text
trouve
```

conserve le résultat de la recherche.

### 1.4. Rechercher une valeur absente

Avec :

```javascript
let recherche = 7;
```

aucun élément n'est égal à `7`.

La variable reste :

```text
false
```

On obtient donc :

```javascript
false
```

La recherche produit alors deux résultats possibles :

```text
true
```

ou :

```text
false
```

### 1.5. Améliorer la recherche

Lorsque la valeur est trouvée, il n'est plus nécessaire de continuer à chercher.

On peut donc utiliser une variable de contrôle :

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;

let trouve = false;

for (let i = 0; i < nombres.length && trouve === false; i++) {
    if (nombres[i] === recherche) {
        trouve = true;
    }
}

console.log(trouve);
```

L'idée importante est :

```text
chercher
   ↓
trouver
   ↓
arrêter la recherche
```

À ce niveau, l'objectif est surtout de comprendre l'algorithme.

### 1.6. Rechercher la position d'une valeur

Nous pouvons aller plus loin.

Nous ne voulons plus seulement savoir si `15` existe.

Nous voulons connaître sa position.

Pour :

```text
[12, 8, 15, 4, 19]
```

la valeur `15` se trouve à :

```text
index 2
```

On peut utiliser une variable :

```javascript
let position = -1;
```

La valeur `-1` signifie :

```text
valeur non trouvée
```

Puis :

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;

let position = -1;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = i;
    }
}

console.log(position);
```

Résultat :

```text
2
```

### 1.7. Pourquoi utiliser `-1` ?

Les index valides du tableau sont :

```text
0
1
2
3
4
```

`-1` n'est donc pas un index valide.

On peut l'utiliser pour représenter :

```text
aucune position trouvée
```

Le résultat peut alors être :

```text
2
```

ou :

```text
-1
```

### 1.8. Attention à la première occurrence

Considérons :

```javascript
let nombres = [12, 8, 15, 8, 19];
```

La valeur `8` apparaît deux fois.

Si nous cherchons sa position, nous devons choisir la règle.

Pour une première recherche simple :

> on conserve la première position trouvée.

Le traitement devient :

```text
chercher
   ↓
première occurrence
   ↓
conserver sa position
```

Cette règle sera importante pour les exercices.

### 1.9. Rechercher le maximum

Considérons :

```text
[12, 8, 15, 4, 19]
```

Nous voulons trouver :

```text
19
```

L'algorithme consiste à conserver la plus grande valeur rencontrée.

On commence par prendre le premier élément comme maximum provisoire.

```javascript
let maximum = nombres[0];
```

Puis on parcourt le reste du tableau.

Pour chaque valeur :

```text
valeur > maximum ?
```

Si oui :

```text
maximum = valeur
```

On peut représenter :

```text
12 → maximum
   ↓
8  → plus petit → conserver 12
   ↓
15 → plus grand → maximum = 15
   ↓
4  → plus petit → conserver 15
   ↓
19 → plus grand → maximum = 19
```

### 1.10. Algorithme du maximum

```javascript
let nombres = [12, 8, 15, 4, 19];

let maximum = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i];
    }
}

console.log(maximum);
```

Résultat :

```text
19
```

### 1.11. Pourquoi commencer à l'index 1 ?

Le premier élément est déjà utilisé pour initialiser :

```text
maximum = nombres[0]
```

Il n'est donc pas nécessaire de le comparer avec lui-même.

On commence le parcours à :

```text
i = 1
```

Le principe devient :

```text
Premier élément
      ↓
maximum provisoire
      ↓
comparer les suivants
      ↓
remplacer si nécessaire
```

### 1.12. Rechercher le minimum

Le principe est identique.

Nous voulons conserver la plus petite valeur.

On commence avec :

```javascript
let minimum = nombres[0];
```

Puis :

```javascript
if (nombres[i] < minimum) {
    minimum = nombres[i];
}
```

Exemple :

```javascript
let nombres = [12, 8, 15, 4, 19];

let minimum = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] < minimum) {
        minimum = nombres[i];
    }
}

console.log(minimum);
```

Résultat :

```text
4
```

### 1.13. Maximum et minimum

Les deux algorithmes suivent la même structure :

```text
Premier élément
      ↓
Résultat provisoire
      ↓
Parcourir les autres éléments
      ↓
Comparer
      ↓
Mettre à jour le résultat si nécessaire
```

Maximum :

```text
si valeur > résultat
    résultat = valeur
```

Minimum :

```text
si valeur < résultat
    résultat = valeur
```

### 1.14. Rechercher la position du maximum

Nous pouvons aussi conserver la position.

Exemple :

```text
[12, 8, 15, 4, 19]
```

Le maximum est :

```text
19
```

Sa position est :

```text
4
```

On conserve donc deux informations :

```text
maximum
positionMaximum
```

Initialisation :

```javascript
let maximum = nombres[0];
let positionMaximum = 0;
```

Puis :

```javascript
for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i];
        positionMaximum = i;
    }
}
```

Résultat :

```text
maximum = 19
positionMaximum = 4
```

Cette idée prépare les traitements plus complets de l'UA.

### 1.15. La règle générale

Les algorithmes de recherche suivent souvent cette structure :

```text
1. Initialiser un résultat.
        ↓
2. Parcourir le tableau.
        ↓
3. Comparer l'élément courant.
        ↓
4. Mettre à jour le résultat si nécessaire.
        ↓
5. Retourner le résultat.
```

On commence ainsi à construire un **répertoire de traitements élémentaires**.

### 1.16. À retenir

* Une recherche parcourt le tableau pour trouver une valeur.
* Une variable booléenne peut indiquer si la valeur existe.
* `-1` peut représenter une position non trouvée.
* Le maximum peut être construit à partir du premier élément.
* Le minimum peut être construit à partir du premier élément.
* La position peut être conservée en même temps que la valeur.
* Ces algorithmes utilisent principalement une boucle et une condition.

## Partie 2 — Pratique

### 2.1. Étape 1 — Rechercher une valeur

Commencez avec :

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;
```

Construisez un programme qui indique si la valeur existe.

Résultat attendu :

```text
Valeur trouvée
```

Testez ensuite avec :

```javascript
let recherche = 7;
```

Résultat attendu :

```text
Valeur non trouvée
```

### 2.2. Étape 2 — Rechercher une position

Utilisez :

```javascript
let nombres = [12, 8, 15, 4, 19];
let recherche = 15;
```

Construisez un programme qui donne :

```text
Position : 2
```

Testez ensuite avec :

```javascript
let recherche = 7;
```

Le programme doit indiquer que la valeur n'est pas trouvée.

### 2.3. Étape 3 — Trouver le maximum

Avec :

```javascript
let nombres = [12, 8, 15, 4, 19];
```

construisez l'algorithme du maximum.

Résultat attendu :

```text
Maximum : 19
```

### 2.4. Étape 4 — Trouver le minimum

Avec le même tableau, trouvez le minimum.

Résultat :

```text
Minimum : 4
```

### 2.5. Étape 5 — Trouver maximum et position

Construisez un traitement qui donne :

```text
Maximum : 19
Position : 4
```

Utilisez deux variables :

```text
maximum
positionMaximum
```

### 2.6. Étape 6 — Trouver minimum et position

Construisez le même traitement pour le minimum.

Résultat :

```text
Minimum : 4
Position : 3
```

### 2.7. Exercice 1 — Recherche simple

Considérez :

```javascript
let nombres = [7, 14, 5, 19, 8, 12];
```

Recherchez :

```text
19
```

Le programme doit indiquer :

```text
Valeur trouvée
```

Puis recherchez :

```text
20
```

Le programme doit indiquer :

```text
Valeur non trouvée
```

### 2.8. Exercice 2 — Recherche de position

Avec :

```javascript
let nombres = [7, 14, 5, 19, 8, 12];
```

recherchez la position de :

```text
8
```

Résultat attendu :

```text
Position : 4
```

Puis recherchez une valeur absente.

Le résultat doit être :

```text
Position : -1
```

### 2.9. Exercice 3 — Recherche du maximum

Considérez :

```javascript
let temperatures = [18, 25, 21, 30, 19];
```

Trouvez la température maximale.

Résultat attendu :

```text
Maximum : 30
```

### 2.10. Exercice 4 — Recherche du minimum

Avec :

```javascript
let temperatures = [18, 25, 21, 30, 19];
```

trouvez la température minimale.

Résultat attendu :

```text
Minimum : 18
```

### 2.11. Exercice 5 — Maximum et position

Considérez :

```javascript
let notes = [12, 17, 9, 14, 18, 11];
```

Trouvez :

* la meilleure note ;
* sa position.

Résultat attendu :

```text
Maximum : 18
Position : 4
```

### 2.12. Exercice 6 — Minimum et position

Avec :

```javascript
let notes = [12, 17, 9, 14, 18, 11];
```

trouvez :

* la plus petite note ;
* sa position.

Résultat attendu :

```text
Minimum : 9
Position : 2
```

### 2.13. Exercice 7 — Analyser des prix

Considérez :

```javascript
let prix = [50, 120, 80, 200, 75, 150];
```

Construisez un programme qui trouve :

* le prix maximum ;
* sa position ;
* le prix minimum ;
* sa position.

Résultat attendu :

```text
Maximum : 200
Position maximum : 3
Minimum : 50
Position minimum : 0
```

### 2.14. Exercice 8 — Rechercher une note

Considérez :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14];
```

Recherchez successivement :

```text
15
6
20
```

Pour chaque recherche, affichez :

```text
Valeur trouvée à la position X
```

ou :

```text
Valeur non trouvée
```

### 2.15. Exercice 9 — Valeur et position du maximum

Considérez :

```javascript
let nombres = [23, 15, 42, 9, 31, 18];
```

Le programme doit produire :

```text
Maximum : 42
Position : 2
```

### 2.16. Exercice 10 — Valeur et position du minimum

Avec :

```javascript
let nombres = [23, 15, 42, 9, 31, 18];
```

le programme doit produire :

```text
Minimum : 9
Position : 3
```

### 2.17. Exercice 11 — Première occurrence

Considérez :

```javascript
let nombres = [12, 8, 15, 8, 19, 8];
```

Recherchez la valeur :

```text
8
```

La règle est :

> conserver la première position trouvée.

Résultat attendu :

```text
Position : 1
```

Ne retournez pas les autres positions.

### 2.18. Exercice 12 — Traitement de synthèse

Considérez :

```javascript
let nombres = [12, 8, 15, 4, 19, 7, 11];
```

Construisez un programme qui trouve :

* la présence de `15` ;
* la position de `15` ;
* le maximum ;
* sa position ;
* le minimum ;
* sa position.

Résultats attendus :

```text
15 trouvé : true
Position de 15 : 2
Maximum : 19
Position maximum : 4
Minimum : 4
Position minimum : 3
```

### 2.19. Travail à faire

Choisissez **trois problèmes** parmi les exercices 7 à 12.

Pour chaque problème :

1. identifiez le tableau ;
2. identifiez le résultat recherché ;
3. écrivez l'initialisation du résultat ;
4. construisez le parcours ;
5. écrivez la comparaison ;
6. testez le programme avec d'autres valeurs.

Vous devez réaliser au minimum :

* une recherche ;
* un maximum ou un minimum ;
* un traitement avec valeur et position.

### Livrable

Créez un document Markdown ou un Google Doc contenant, pour chaque problème :

```text
Problème

1. Données
2. Règle de traitement
3. Algorithme en étapes
4. Code JavaScript
5. Test
6. Résultat
```

### Critère de réussite

Le travail est réussi si :

* le tableau est correctement parcouru ;
* la valeur initiale du résultat est correcte ;
* les comparaisons sont correctes ;
* la valeur trouvée est correcte ;
* la position trouvée est correcte ;
* une valeur absente est correctement gérée ;
* le programme fonctionne avec plusieurs tableaux.

### Résultat attendu

À la fin de ce tutoriel, vous devez connaître les traitements élémentaires suivants :

```text
rechercher une valeur
        ↓
trouver une position
        ↓
trouver le maximum
        ↓
trouver le minimum
        ↓
trouver une valeur et sa position
```

Vous devez être capable de construire ces traitements avec :

```text
Tableau
   +
Boucle
   +
Condition
   +
Variable résultat
```

## Bilan

**Vous avez appris :**

* à rechercher une valeur dans un tableau ;
* à savoir si une valeur existe ;
* à trouver la position d'une valeur ;
* à trouver le maximum ;
* à trouver le minimum ;
* à conserver la position du maximum ou du minimum.

**Vous savez maintenant :**

```text
Tableau
   ↓
Parcours
   ↓
Comparaison
   ↓
Mise à jour
   ↓
Résultat
```

Vous disposez maintenant d'un premier ensemble d'**algorithmes élémentaires réutilisables**.

Dans le prochain tutoriel, **T.121.136**, vous allez combiner plusieurs de ces traitements pour analyser complètement une collection de données.

## Glossaire

* **Algorithme élémentaire** : traitement simple et réutilisable pour résoudre un problème courant.
* **Recherche** : traitement qui cherche une valeur dans un tableau.
* **Position** : index auquel une valeur se trouve.
* **Maximum** : plus grande valeur d'un tableau.
* **Minimum** : plus petite valeur d'un tableau.
* **Résultat provisoire** : valeur conservée pendant le parcours avant d'obtenir le résultat final.
* **Occurrence** : présence d'une valeur dans un tableau.
* **Première occurrence** : première position où une valeur apparaît.
