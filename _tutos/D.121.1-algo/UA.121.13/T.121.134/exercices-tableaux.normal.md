---
title: "Exercices sur les tableaux"
layout: tuto
slug: "exercices-tableaux"
permalink: /tutos/:slug/
tuto_id: "T.121.134"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 4
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner à manipuler des **tableaux** avec JavaScript. Vous allez combiner toutes les notions vues précédemment (boucles, index, conditions, compteurs, accumulateurs) pour résoudre des problèmes concrets.

*(Note : Ce tutoriel est 100% pratique. Aucun fichier de départ n'est fourni, vous devez créer vos propres scripts pour chaque exercice).*

## Partie 1 — Méthodologie

Avant de vous lancer dans le code, prenez l'habitude de décortiquer le problème en 4 questions :

1. **La boucle** : Faut-il parcourir tout le tableau ? *(Généralement oui : `for (let i = 0; i < tableau.length; i++)`)*.
2. **La condition** : Faut-il traiter tous les éléments ou seulement certains ? *(Ex: `if (nombres[i] % 2 === 0)`)*.
3. **Le stockage** : Que cherche-t-on à obtenir ? 
   - Un **compteur** (`let nb = 0; nb++;`) ?
   - Un **accumulateur** (`let somme = 0; somme = somme + valeur;`) ?
4. **Le résultat final** : Le calcul final (ex: moyenne) doit se faire **après** la boucle.

{% include array-svg.html
   name="nombres"
   title="Exemple de tableau à analyser"
   values="4,7,2,9,5"
%}

## Partie 2 — Exercices Pratiques

### 2.1. Analyse Globale (Pairs et Impairs)

Créez un script `analyse-nombres.js`. 
Déclarez le tableau suivant :
```javascript
let nombres = [4, 7, 2, 9, 5, 8];
```

Dans une seule boucle `for`, réalisez les opérations suivantes et affichez les résultats :
1. Affichez la phrase : `"Index : X | Valeur : Y"`.
2. Comptez le nombre total de valeurs **paires**.
3. Calculez la **somme** des valeurs **impaires**.

*Résultat attendu en console :*
```text
Index : 0 | Valeur : 4
Index : 1 | Valeur : 7
Index : 2 | Valeur : 2
Index : 3 | Valeur : 9
Index : 4 | Valeur : 5
Index : 5 | Valeur : 8
Total des nombres pairs : 3
Somme des nombres impairs : 21
```

### 2.2. Statistiques Scolaires (Les Notes)

Créez un script `statistiques-notes.js`.
Déclarez le tableau suivant :
```javascript
let notes = [12, 8, 15, 9, 17, 6, 10];
```

Calculez et affichez :
1. La moyenne générale de la classe.
2. Le nombre de notes "validées" (supérieures ou égales à `10`).
3. La moyenne des notes validées uniquement.

*Résultat attendu en console :*
```text
Moyenne générale : 11
Nombre de notes validées : 4
Moyenne des notes validées : 13.5
```

### 2.3. Analyse de Collection (Prix)

Créez un script `analyse-prix.js`.
Déclarez le tableau suivant :
```javascript
let prix = [50, 120, 80, 200, 75, 150];
```

Construisez un programme qui :
1. Compte le nombre d'articles dits "premium" (prix supérieur ou égal à `100`).
2. Calcule le coût total de tous les articles.
3. Calcule le coût total des articles "premium" uniquement.

*Résultat attendu en console :*
```text
Articles premium : 3
Coût total : 675
Coût des articles premium : 470
```

## 3. Travail à faire (Livrable)

Vous devez concevoir un programme d'analyse démographique.

```javascript
let ages = [16, 21, 17, 25, 19, 14, 30];
```

**Règles métier :**
- Une personne est considérée comme "adulte" si son âge est supérieur ou égal à `18`.

**Votre programme doit calculer et afficher :**
1. Le nombre total d'adultes.
2. Le nombre total de mineurs.
3. La somme des âges des adultes.
4. L'âge moyen des adultes.

**Livrable :**
Créez un fichier `analyse-demographique.js` contenant :
1. Le code JavaScript complet et exécutable de votre programme.
2. Un court commentaire `/* */` en haut du fichier qui résume les 4 étapes de la méthodologie appliquées à cet exercice.

## Bilan

**Vous avez appris :**
* à décomposer un problème complexe en petites étapes logiques ;
* à combiner une boucle `for` avec plusieurs conditions `if / else` ;
* à gérer simultanément plusieurs variables de stockage (compteurs et accumulateurs) ;
* à effectuer des calculs de synthèse (moyennes conditionnelles).

Vous disposez maintenant des bases nécessaires pour construire des **algorithmes de traitement de données** !
