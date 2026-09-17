---
title: "Construire une pyramide d'étoiles"
layout: tuto
slug: "construire-pyramide-etoiles"
permalink: /tutos/:slug/compact
tuto_id: "T.121.126"
type: "algorithme"
version: "compact"
ua: "UA.121.12"
nav_order: 6
data_js: ""
---

## 1. Objectif

Construire un **algorithme élémentaire** (boucles + conditions) pour afficher une pyramide d'étoiles :
```text
    *
   ***
  *****
 *******
*********
```

## 2. Prérequis

Savoir utiliser variables, `console.log()`, `if`, `for`, compteurs, et imbriquer des boucles.

## Données de départ

### JavaScript

Créez `pyramide.js` :
```javascript
let hauteur = 5;
console.log("Hauteur :", hauteur);
```

## Partie 1 — Théorie

### 1.1. Observer la pyramide

Chaque ligne se construit une par une.

### 1.2. Une ligne contient des espaces et des étoiles

Ligne 1 : 4 espaces, 1 étoile.
Ligne 2 : 3 espaces, 3 étoiles.
...etc.

### 1.3. Trouver la règle des espaces

Règle : `espaces = hauteur - ligne`. (Ex: ligne 3 de hauteur 5 → 2 espaces).

### 1.4. Trouver la règle des étoiles

Règle : `étoiles = 2 × ligne - 1`. (Ex: ligne 3 → 5 étoiles).

### 1.5. Construire une ligne

Ajouter espaces → Ajouter étoiles → Afficher.

### 1.6. Répéter pour toutes les lignes

Boucle principale sur les lignes (`for (let ligne = 1; ligne <= hauteur; ligne++)`).

### 1.7. Répéter les espaces

Boucle imbriquée pour les espaces (répéter `hauteur - ligne` fois).

### 1.8. Répéter les étoiles

Boucle imbriquée pour les étoiles (répéter `2 × ligne - 1` fois).

### 1.9. Ajouter une condition

Vérifier que la hauteur est valide avant de démarrer (`if (hauteur > 0)`).

### 1.10. L'algorithme complet

* Si hauteur valide :
    * Boucle sur les lignes :
        * Boucle espaces.
        * Boucle étoiles.
        * Afficher.
* Sinon erreur.

### 1.11. À retenir

L'imbrication permet de répéter des sous-traitements (espaces, étoiles) au sein d'un traitement global (lignes).

## Partie 2 — Pratique

### 2.1. Étape 1 — Afficher une étoile

Affichez `"*"`.

### 2.2. Étape 2 — Afficher plusieurs étoiles

Ajoutez `*` à une variable `ligne` successivement, et affichez.

### 2.3. Étape 3 — Utiliser une boucle pour les étoiles

Remplacez par une boucle `for` de 1 à 5 qui ajoute `*` à la variable.

### 2.4. Étape 4 — Construire un triangle

Faites une boucle globale. Pour chaque ligne, bouclez `ligne` fois pour afficher `*`. (Triangle rectangle).

### 2.5. Étape 5 — Construire le nombre d'espaces

Ajoutez une boucle d'espaces avant celle des étoiles, avec la limite `hauteur - ligne`.

### 2.6. Étape 6 — Ajouter les étoiles

Modifiez la limite de la boucle d'étoiles pour atteindre `2 * ligne - 1`.

### 2.7. Étape 7 — Construire une ligne complète

Initialisez la variable `let ligneTexte = ""` au début de chaque ligne, remplissez-la, puis affichez.

### 2.8. Étape 8 — Construire la pyramide complète

Entourez de la condition `if (hauteur > 0)`.

### 2.9. Étape 9 — Tester différentes hauteurs

Testez avec 1, 3, 5. Puis avec 0 (message d'erreur attendu).

### 2.10. Étape 10 — Comprendre le traitement

Répondez mentalement : pourquoi des boucles pour les espaces/étoiles ? Comment sont calculés leurs nombres ? Pourquoi tester `hauteur > 0` ?

### 2.11. Travail à faire

Construisez le programme complet. Testez avec `let hauteur = 7`. (Doit afficher une belle pyramide centrée, et gérer les hauteurs <= 0).

### Livrable

Document avec :
* Le problème et les règles.
* Code JavaScript.
* Résultats pour 3, 5, 7.

### Critère de réussite

Pyramide bien formée, centrage correct, fonctionnement vérifié sans boucle infinie.

### Résultat attendu

Pour `hauteur = 5` :
```text
    *
   ***
  *****
 *******
*********
```

Pour `hauteur = 3` :
```text
  *
 ***
*****
```

## Bilan

**Vous avez appris :**
* Analyser un problème.
* Imbriquer des boucles.
* Organiser un algorithme complet.

**Vous savez maintenant :**
* Construire une solution algorithmique en partant de règles simples.

## Glossaire

* **Algorithme** : suite organisée d'étapes de résolution.
* **Boucle imbriquée** : boucle dans une autre.
* **Pyramide** : figure visuelle construite itérativement.
