---
title: "Algorithme de synthèse : analyser une collection"
layout: tuto
slug: "algorithme-synthese-analyser-collection"
permalink: /tutos/:slug/
tuto_id: "T.121.156"
type: "classique"
version: "normal"
ua: "UA.121.15"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez résoudre un problème qui demande **plusieurs résultats à partir d'une même collection**.

Vous allez mobiliser les traitements déjà appris pour :

* compter les éléments ;
* calculer une somme ;
* calculer une moyenne ;
* trouver le maximum ;
* trouver le minimum ;
* compter les valeurs qui respectent une règle ;
* calculer la moyenne des valeurs validées.

Vous devez d'abord analyser le problème.

Ensuite, vous devez choisir les traitements nécessaires et construire le programme.

La démarche est :

```text
Problème
↓
Comprendre
↓
Identifier les données
↓
Identifier les résultats
↓
Identifier les règles
↓
Choisir les traitements
↓
Construire
↓
Tester
↓
Vérifier
```

Ce tutoriel constitue la synthèse de l'UA.121.15.

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* utiliser des fonctions ;
* utiliser `return` ;
* calculer une somme ;
* calculer une moyenne ;
* rechercher une valeur ;
* trouver un maximum ;
* trouver un minimum ;
* compter des valeurs selon une règle ;
* analyser un problème avant de coder ;
* combiner plusieurs traitements connus.

Vous devez avoir terminé les tutoriels précédents de l'UA.121.15.

## Données de départ

On souhaite analyser les notes d'un groupe.

Les notes sont :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Une note est validée lorsqu'elle est supérieure ou égale à `10`.

Le programme doit produire :

```text
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Moyenne des notes validées
```

Le programme doit être construit à partir des traitements déjà appris dans les UA précédentes.

## Partie 1 — Théorie

### 1.1. Comprendre le problème

Le problème demande d'analyser une collection de notes.

L'entrée principale est :

```text
une liste de notes
```

La liste contient plusieurs valeurs.

Le programme doit produire plusieurs résultats.

Le problème n'est donc pas :

```text
calculer une seule valeur
```

Il consiste à :

```text
analyser une collection
```

### 1.2. Identifier les résultats attendus

Avant de choisir les traitements, listez tous les résultats demandés.

```text
1. Nombre de notes
2. Somme
3. Moyenne
4. Maximum
5. Minimum
6. Nombre de notes validées
7. Moyenne des notes validées
```

Cette liste permet de ne pas oublier un résultat.

### 1.3. Identifier les règles

Le problème contient plusieurs règles.

#### Règle 1 — Compter les notes

Il faut déterminer combien de notes sont présentes dans la collection.

```text
Nombre de notes
```

#### Règle 2 — Calculer la somme

Il faut additionner toutes les notes.

```text
Somme = toutes les notes additionnées
```

#### Règle 3 — Calculer la moyenne

La moyenne est :

```text
Moyenne = somme / nombre de notes
```

#### Règle 4 — Trouver le maximum

Il faut trouver la plus grande note.

#### Règle 5 — Trouver le minimum

Il faut trouver la plus petite note.

#### Règle 6 — Identifier les notes validées

Une note est validée lorsque :

```text
note >= 10
```

#### Règle 7 — Calculer la moyenne des notes validées

Il faut :

```text
additionner uniquement les notes validées
```

puis :

```text
diviser par le nombre de notes validées
```

### 1.4. Identifier les dépendances simples

Tous les résultats ne sont pas indépendants.

Par exemple :

```text
somme
+
nombre de notes
↓
moyenne
```

Pour la moyenne des notes validées :

```text
somme des notes validées
+
nombre de notes validées
↓
moyenne des notes validées
```

On peut donc représenter les traitements ainsi :

```text
Notes
│
├── Nombre de notes
│
├── Somme
│
├── Maximum
│
├── Minimum
│
└── Notes validées
     │
     ├── Nombre de notes validées
     │
     └── Somme des notes validées
              │
              └── Moyenne validée
```

Cette représentation reste simple.

Elle montre seulement que certains résultats sont nécessaires pour calculer d'autres résultats.

### 1.5. Choisir les traitements connus

Avant d'écrire le code, cherchez les traitements déjà appris qui correspondent aux résultats.

Vous disposez notamment des traitements suivants :

```text
compter
calculer une somme
calculer une moyenne
trouver un maximum
trouver un minimum
compter selon une condition
```

Vous devez ensuite déterminer comment les utiliser pour répondre au problème.

Le but n'est pas d'inventer un nouvel algorithme.

Le but est de **réutiliser les traitements disponibles**.

### 1.6. Construire une solution par résultats

Pour résoudre le problème, vous pouvez organiser votre réflexion ainsi :

```text
Résultat demandé
↓
Traitement nécessaire
↓
Résultat obtenu
```

Exemple :

```text
Maximum
↓
recherche du maximum
↓
17
```

Un autre exemple :

```text
Moyenne
↓
somme + nombre d'éléments
↓
11.375
```

Cette méthode permet de construire progressivement la solution.

### 1.7. Vérifier les dépendances avant de coder

Pour chaque résultat, demandez :

> De quelles informations ai-je besoin ?

Pour la moyenne :

```text
somme
+
nombre de notes
```

Pour la moyenne des notes validées :

```text
somme des notes validées
+
nombre de notes validées
```

Cette vérification évite de construire un traitement incomplet.

### 1.8. À retenir

Pour une synthèse algorithmique :

```text
1. Comprendre le problème.
2. Lister tous les résultats.
3. Identifier les règles.
4. Repérer les résultats intermédiaires.
5. Choisir les traitements connus.
6. Construire la solution.
7. Tester chaque résultat.
8. Vérifier le résultat global.
```

Un problème plus grand peut donc être résolu avec **plusieurs traitements déjà connus**.

## Partie 2 — Pratique

### 2.1. Analyser le problème

Reprenons les données :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Commencez par analyser le problème sans écrire de code.

Complétez le tableau :

| Élément    | Réponse |
| ---------- | ------- |
| Entrée     |         |
| Résultat 1 |         |
| Résultat 2 |         |
| Résultat 3 |         |
| Résultat 4 |         |
| Résultat 5 |         |
| Résultat 6 |         |
| Résultat 7 |         |

### 2.2. Identifier les règles

Complétez :

| Résultat        | Règle |
| --------------- | ----- |
| Nombre de notes |       |
| Somme           |       |
| Moyenne         |       |
| Maximum         |       |
| Minimum         |       |
| Notes validées  |       |
| Moyenne validée |       |

Pour la validation, utilisez :

```text
note >= 10
```

### 2.3. Identifier les résultats intermédiaires

Complétez :

```text
Somme
+
Nombre de notes
↓
Moyenne
```

Puis :

```text
Somme des notes validées
+
Nombre de notes validées
↓
Moyenne validée
```

Identifiez vous-même les deux résultats intermédiaires nécessaires :

```text
________________________

________________________
```

### 2.4. Choisir les traitements

Pour chaque résultat, choisissez un traitement déjà appris.

Complétez :

| Résultat                 | Traitement choisi |
| ------------------------ | ----------------- |
| Nombre de notes          |                   |
| Somme                    |                   |
| Moyenne                  |                   |
| Maximum                  |                   |
| Minimum                  |                   |
| Nombre de notes validées |                   |
| Moyenne validée          |                   |

Pour la moyenne validée, plusieurs traitements connus peuvent être nécessaires.

### 2.5. Construire le traitement

Commencez par les traitements qui utilisent directement le tableau.

Organisez votre travail :

```text
notes
│
├── nombre
├── somme
├── maximum
├── minimum
└── notes validées
```

Puis utilisez les résultats obtenus pour construire les moyennes.

```text
somme + nombre
↓
moyenne
```

et :

```text
somme validée + nombre validé
↓
moyenne validée
```

### 2.6. Construire le programme

Écrivez maintenant le programme JavaScript.

Le programme doit :

1. définir le tableau ;
2. réaliser les traitements nécessaires ;
3. stocker les résultats ;
4. calculer les résultats dépendants ;
5. afficher tous les résultats.

Organisez le code de manière simple et lisible.

### 2.7. Vérifier les résultats manuellement

Pour :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

calculez d'abord les résultats sans utiliser le programme.

Vous devez trouver :

```text
Nombre de notes : 8
Somme : 91
Moyenne : 11.375
Maximum : 17
Minimum : 6
Nombre de notes validées : 5
Somme des notes validées : 68
Moyenne des notes validées : 13.6
```

Comparez ensuite ces résultats avec ceux produits par le programme.

### 2.8. Tester un deuxième tableau

Utilisez :

```javascript
let notes = [10, 11, 12, 13, 14];
```

Calculez d'abord les résultats attendus.

Puis exécutez le programme.

Vérifiez que :

```text
toutes les notes sont validées
```

Le résultat doit donc respecter cette règle.

### 2.9. Tester un troisième tableau

Utilisez :

```javascript
let notes = [5, 7, 9, 6];
```

Calculez les résultats attendus.

Observez notamment :

```text
Nombre de notes validées : 0
```

Ce test est important car aucun élément ne respecte la règle :

```text
note >= 10
```

Vous devez vérifier que votre programme gère correctement cette situation.

### 2.10. Corriger un problème de calcul

Une moyenne validée ne doit être calculée qu'à partir des notes validées.

Par exemple :

```text
12, 15, 17, 14, 10
```

sont validées.

Le calcul est donc :

```text
(12 + 15 + 17 + 14 + 10) / 5
```

et non :

```text
somme de toutes les notes / nombre total de notes
```

Lorsque vous obtenez un résultat incorrect, recherchez d'abord **quelle règle du problème n'est pas respectée**.

### 2.11. Exercice de synthèse individuel

Construisez seul le programme complet pour :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Le programme doit produire :

```text
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Moyenne des notes validées
```

Vous devez suivre cette méthode :

```text
1. Comprendre le problème.
2. Identifier les données.
3. Identifier les résultats.
4. Identifier les règles.
5. Identifier les résultats intermédiaires.
6. Choisir les traitements.
7. Construire le programme.
8. Tester.
9. Vérifier.
```

Ne cherchez pas une nouvelle notion.

Réutilisez les traitements déjà appris.

### 2.12. Vérification finale

Votre programme doit fonctionner avec :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

puis :

```javascript
let notes = [10, 11, 12, 13, 14];
```

puis :

```javascript
let notes = [5, 7, 9, 6];
```

Vous devez vérifier :

* le nombre d'éléments ;
* la somme ;
* la moyenne ;
* le maximum ;
* le minimum ;
* le nombre de valeurs validées ;
* la moyenne des valeurs validées.

**Travail à faire :**

Construire seul le traitement complet d'analyse d'une collection de notes.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'analyse du problème ;
* les données ;
* les résultats demandés ;
* les règles ;
* les résultats intermédiaires ;
* les traitements choisis ;
* le code JavaScript ;
* les tests ;
* la vérification finale.

**Résultat attendu :**

Pour :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

le programme doit produire :

```text
Nombre de notes : 8
Somme : 91
Moyenne : 11.375
Maximum : 17
Minimum : 6
Notes validées : 5
Moyenne validée : 13.6
```

Pour :

```javascript
let notes = [10, 11, 12, 13, 14];
```

le programme doit produire :

```text
Nombre de notes : 5
Somme : 60
Moyenne : 12
Maximum : 14
Minimum : 10
Notes validées : 5
Moyenne validée : 12
```

Pour :

```javascript
let notes = [5, 7, 9, 6];
```

le programme doit produire :

```text
Nombre de notes : 4
Somme : 27
Moyenne : 6.75
Maximum : 9
Minimum : 5
Notes validées : 0
```

Dans ce dernier cas, la moyenne des notes validées ne peut pas être calculée avec une division par zéro. Le programme doit donc prévoir une condition avant ce calcul et indiquer, par exemple :

```text
Moyenne validée : aucune note validée
```

**Critère de réussite :**

La solution est réussie lorsque :

* le problème est correctement analysé ;
* tous les résultats demandés sont identifiés ;
* les règles sont correctement définies ;
* les traitements déjà appris sont réutilisés ;
* les dépendances simples sont correctement gérées ;
* les trois jeux de données sont testés ;
* le cas sans note validée est correctement traité ;
* les résultats correspondent aux règles du problème ;
* aucune notion future de l'UA.121.17 n'est introduite.

## Bilan

**Vous avez réalisé :**

un traitement complet d'analyse d'une collection.

Vous avez combiné plusieurs traitements déjà appris pour produire plusieurs résultats.

Vous savez maintenant :

```text
Comprendre un problème
↓
Identifier les résultats
↓
Choisir les traitements
↓
Combiner les traitements
↓
Construire
↓
Tester
↓
Vérifier
```

Vous avez également appris à repérer des dépendances simples :

```text
Somme + nombre
↓
Moyenne
```

et :

```text
Somme validée + nombre validé
↓
Moyenne validée
```

### Ce que vous devez retenir

Un problème plus complet ne signifie pas nécessairement qu'il faut apprendre de nouvelles commandes.

Vous pouvez souvent partir d'un **répertoire de traitements déjà maîtrisés** et les réutiliser pour construire une nouvelle solution.

L'étape suivante du parcours sera différente.

Dans `UA.121.17`, vous apprendrez à **décomposer explicitement un problème global en sous-traitements**, à définir leurs entrées et leurs sorties et à organiser leurs dépendances.

## Glossaire

* **Collection** : ensemble de plusieurs valeurs, par exemple un tableau.
* **Traitement** : action réalisée sur les données.
* **Résultat intermédiaire** : résultat nécessaire pour calculer un autre résultat.
* **Dépendance** : relation dans laquelle un traitement utilise le résultat d'un autre traitement.
* **Validation** : règle permettant de déterminer si une valeur respecte une condition.
* **Synthèse** : exercice qui combine plusieurs notions et traitements déjà appris.
