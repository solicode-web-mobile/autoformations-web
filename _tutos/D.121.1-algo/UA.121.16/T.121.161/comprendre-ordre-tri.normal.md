---
title: "Comprendre l'ordre et le tri"
layout: tuto
slug: "comprendre-ordre-tri"
permalink: /tutos/:slug/
tuto_id: "T.121.161"
type: "classique"
version: "normal"
ua: "UA.121.16"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **ordonner les éléments d'une collection**.

Vous allez apprendre à :

* comprendre la notion d'ordre ;
* distinguer l'ordre croissant et l'ordre décroissant ;
* comparer deux valeurs ;
* repérer la position d'une valeur ;
* reconnaître une collection triée ;
* reconnaître une collection non triée ;
* observer comment l'ordre des éléments peut être modifié.

À la fin du tutoriel, vous devez comprendre :

```text
Trier une collection
=
ordonner ses éléments selon une règle
```

Vous ne construirez pas encore le programme complet de tri.

## 2. Prérequis

Vous devez savoir :

* utiliser un tableau ;
* lire les éléments d'un tableau ;
* utiliser un index ;
* connaître `length` ;
* parcourir un tableau avec une boucle ;
* comparer deux valeurs ;
* trouver un maximum ;
* trouver un minimum.

Vous devez également comprendre qu'un tableau conserve un ordre entre ses éléments.

## Données de départ

Nous allons utiliser plusieurs petites collections de nombres.

### Collection 1

```text
[7, 3, 9, 2, 5]
```

### Collection 2

```text
[2, 4, 6, 8, 10]
```

### Collection 3

```text
[10, 8, 6, 4, 2]
```

Ces collections serviront à observer les différents ordres.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un ordre ?

Un ordre permet de placer des valeurs selon une règle.

Avec des nombres, on peut par exemple placer :

```text
2 avant 5
5 avant 8
8 avant 12
```

On obtient :

```text
[2, 5, 8, 12]
```

Les valeurs sont placées de la plus petite à la plus grande.

Un autre ordre possible est :

```text
[12, 8, 5, 2]
```

Les valeurs sont placées de la plus grande à la plus petite.

### 1.2. Ordre croissant

Un ordre **croissant** place les valeurs de la plus petite à la plus grande.

Exemple :

```text
[2, 3, 5, 7, 9]
```

On peut observer :

```text
2 < 3
3 < 5
5 < 7
7 < 9
```

Chaque valeur est donc suivie d'une valeur plus grande ou égale.

Pour notre exemple :

```text
[7, 3, 9, 2, 5]
```

l'ordre croissant est :

```text
[2, 3, 5, 7, 9]
```

### 1.3. Ordre décroissant

Un ordre **décroissant** place les valeurs de la plus grande à la plus petite.

Exemple :

```text
[9, 7, 5, 3, 2]
```

On peut observer :

```text
9 > 7
7 > 5
5 > 3
3 > 2
```

Pour notre exemple :

```text
[7, 3, 9, 2, 5]
```

l'ordre décroissant est :

```text
[9, 7, 5, 3, 2]
```

### 1.4. Comparer deux valeurs

Pour construire un ordre, il faut pouvoir comparer les valeurs.

Par exemple :

```text
3 et 7
```

On peut dire :

```text
3 < 7
```

Donc :

```text
3
```

doit être placé avant :

```text
7
```

Pour :

```text
9 et 4
```

on a :

```text
9 > 4
```

Donc :

```text
9
```

doit être placé après :

```text
4
```

La comparaison permet donc de déterminer la position relative de deux valeurs.

### 1.5. Valeur avant et valeur après

Dans une collection ordonnée, les valeurs ont une relation avec les valeurs voisines.

Exemple :

```text
[2, 3, 5, 7, 9]
```

Pour la valeur `5` :

```text
valeur avant : 3
valeur : 5
valeur après : 7
```

On constate :

```text
3 < 5 < 7
```

Dans un ordre décroissant :

```text
[9, 7, 5, 3, 2]
```

pour `5` :

```text
valeur avant : 7
valeur : 5
valeur après : 3
```

On constate :

```text
7 > 5 > 3
```

### 1.6. Position d'une valeur

Dans un tableau, chaque valeur possède une position appelée **index**.

Exemple :

```text
[7, 3, 9, 2, 5]
```

Les positions sont :

```text
index 0 → 7
index 1 → 3
index 2 → 9
index 3 → 2
index 4 → 5
```

La valeur `2` est donc à la position :

```text
3
```

La valeur `9` est à la position :

```text
2
```

La position est importante lorsqu'on veut modifier l'ordre des éléments.

### 1.7. Collection non triée

Une collection est dite **non triée** lorsqu'elle ne respecte pas l'ordre demandé.

Exemple :

```text
[7, 3, 9, 2, 5]
```

Cette collection n'est pas dans l'ordre croissant.

Pourquoi ?

Parce que :

```text
7 > 3
```

alors que dans un ordre croissant, une valeur placée avant une autre doit être plus petite ou égale.

Elle n'est pas non plus dans l'ordre décroissant.

En effet :

```text
3 < 9
```

alors que dans un ordre décroissant, la valeur précédente devrait être plus grande ou égale.

### 1.8. Collection triée

Une collection est **triée** lorsqu'elle respecte une règle d'ordre.

Exemple croissant :

```text
[2, 3, 5, 7, 9]
```

Exemple décroissant :

```text
[9, 7, 5, 3, 2]
```

Le tri dépend donc toujours d'une règle.

On ne peut pas simplement dire :

> La collection est triée.

Il faut préciser :

```text
ordre croissant
```

ou :

```text
ordre décroissant
```

### 1.9. Trier une collection

**Trier** une collection signifie modifier l'ordre de ses éléments pour respecter une règle.

Exemple :

```text
Collection de départ :

[7, 3, 9, 2, 5]
```

Tri croissant :

```text
[2, 3, 5, 7, 9]
```

Tri décroissant :

```text
[9, 7, 5, 3, 2]
```

Les mêmes valeurs sont présentes.

C'est leur ordre qui change.

### 1.10. Trier ne signifie pas supprimer les valeurs

Avant :

```text
[7, 3, 9, 2, 5]
```

Après un tri croissant :

```text
[2, 3, 5, 7, 9]
```

Le nombre de valeurs reste :

```text
5
```

Les valeurs restent les mêmes :

```text
2, 3, 5, 7, 9
```

Seule leur position change.

### 1.11. Le principe général

Pour ordonner une collection, il faut progressivement :

```text
Observer les valeurs
↓
Comparer
↓
Déterminer leur ordre
↓
Modifier certaines positions
↓
Obtenir une collection ordonnée
```

Cette idée sera ensuite transformée en algorithme.

Pour le moment, l'objectif est seulement de comprendre **ce qu'il faut faire**.

### 1.12. À retenir

Retenez ces idées :

* un ordre définit la position relative des valeurs ;
* l'ordre croissant va du plus petit au plus grand ;
* l'ordre décroissant va du plus grand au plus petit ;
* une comparaison permet de savoir quelle valeur vient avant l'autre ;
* chaque élément d'un tableau possède une position ;
* trier consiste à modifier l'ordre des éléments ;
* le tri ne supprime pas les valeurs.

La règle principale est :

```text
Trier une collection
↓
placer ses éléments dans l'ordre demandé
```

## Partie 2 — Pratique

### 2.1. Identifier l'ordre d'une collection

Observez :

```text
[2, 4, 6, 8, 10]
```

Répondez :

```text
Cette collection est-elle triée ?
```

Puis :

```text
Dans quel ordre ?
```

### 2.2. Identifier une collection décroissante

Observez :

```text
[20, 17, 12, 8, 3]
```

Répondez :

```text
Cette collection est-elle triée ?
```

Puis :

```text
Dans quel ordre ?
```

### 2.3. Observer une collection non triée

Observez :

```text
[8, 3, 10, 2, 6]
```

La collection est-elle :

```text
croissante ?
```

```text
décroissante ?
```

Expliquez votre réponse avec une comparaison entre deux valeurs.

### 2.4. Classer manuellement une petite collection

Prenez :

```text
[7, 3, 9, 2, 5]
```

Vous devez produire l'ordre croissant.

Commencez par chercher la plus petite valeur.

```text
Plus petite valeur :
?
```

Placez-la au début.

Vous obtenez :

```text
[2, ?, ?, ?, ?]
```

Cherchez ensuite la plus petite valeur parmi les valeurs restantes.

Continuez jusqu'à obtenir :

```text
[2, 3, 5, 7, 9]
```

Ne cherchez pas encore à écrire le programme.

L'objectif est de comprendre les étapes manuelles.

### 2.5. Classer dans l'ordre décroissant

Prenez :

```text
[7, 3, 9, 2, 5]
```

Cette fois, vous devez obtenir l'ordre décroissant.

Commencez par chercher la plus grande valeur.

```text
Plus grande valeur :
?
```

Placez-la au début.

Continuez jusqu'à obtenir :

```text
[9, 7, 5, 3, 2]
```

### 2.6. Comparer deux valeurs

Pour chaque paire, indiquez quelle valeur doit venir en premier dans l'ordre croissant.

| Valeur A | Valeur B | Valeur placée en premier |
| -------: | -------: | -----------------------: |
|        4 |        9 |                          |
|       12 |        5 |                          |
|        7 |        3 |                          |
|        8 |       10 |                          |
|       15 |       11 |                          |

Puis faites le même exercice pour l'ordre décroissant.

### 2.7. Trouver la position d'une valeur

Observez :

```text
[7, 3, 9, 2, 5]
```

Indiquez l'index de chaque valeur :

| Valeur | Index |
| -----: | ----: |
|      7 |       |
|      3 |       |
|      9 |       |
|      2 |       |
|      5 |       |

Rappelez-vous :

```text
Le premier élément possède l'index 0.
```

### 2.8. Identifier la valeur à déplacer

Observez :

```text
[7, 3, 9, 2, 5]
```

Pour commencer un tri croissant, quelle valeur devez-vous chercher ?

```text
Réponse :
?
```

Quelle est sa position ?

```text
Position :
?
```

Pour commencer un tri décroissant, quelle valeur devez-vous chercher ?

```text
Réponse :
?
```

Quelle est sa position ?

```text
Position :
?
```

Cette activité prépare la prochaine étape : apprendre à **chercher une valeur et mémoriser sa position**.

### 2.9. Observer une première modification

On part de :

```text
[7, 3, 9, 2, 5]
```

La plus petite valeur est :

```text
2
```

Elle se trouve à la position :

```text
3
```

Pour commencer un tri croissant, on veut placer `2` à la première position.

On obtient :

```text
[2, 3, 9, 7, 5]
```

Observez ce qui a changé :

```text
7
```

et :

```text
2
```

ont changé de position.

Les autres valeurs restent présentes.

### 2.10. Observer une deuxième modification

On part maintenant de :

```text
[2, 3, 9, 7, 5]
```

La première position contient déjà :

```text
2
```

Il reste à ordonner :

```text
[3, 9, 7, 5]
```

La plus petite valeur de cette partie est :

```text
3
```

Elle est déjà à la bonne position.

La collection reste :

```text
[2, 3, 9, 7, 5]
```

On peut alors continuer avec la partie restante.

### 2.11. Observer la progression

La collection peut évoluer ainsi :

```text
[7, 3, 9, 2, 5]
```

puis :

```text
[2, 3, 9, 7, 5]
```

puis :

```text
[2, 3, 5, 7, 9]
```

L'idée importante est que **la partie déjà correctement placée est conservée** pendant que l'on traite le reste.

Cette idée sera étudiée plus précisément dans le prochain tutoriel.

### 2.12. Exercice individuel

Analysez les collections suivantes.

#### Collection A

```text
[8, 3, 6, 1, 5]
```

Déterminez :

* si elle est triée ;
* son ordre éventuel ;
* sa plus petite valeur ;
* sa plus grande valeur ;
* la position de la plus petite valeur ;
* le résultat après classement croissant.

#### Collection B

```text
[15, 12, 10, 7, 3]
```

Déterminez :

* si elle est triée ;
* son ordre éventuel ;
* sa plus petite valeur ;
* sa plus grande valeur ;
* le résultat après classement croissant ;
* le résultat après classement décroissant.

#### Collection C

```text
[4, 9, 2, 7, 5]
```

Déterminez :

* si elle est triée ;
* la plus petite valeur ;
* la position de la plus petite valeur ;
* la plus grande valeur ;
* la position de la plus grande valeur ;
* le résultat après classement croissant.

### 2.13. Exercice de classement manuel

Classez manuellement :

```text
[12, 4, 9, 2, 15, 7]
```

dans l'ordre croissant.

Notez les différentes étapes.

Vous devez conserver une trace de l'évolution :

```text
Étape 1 :
____________________

Étape 2 :
____________________

Étape 3 :
____________________

Étape 4 :
____________________

Résultat final :
____________________
```

Ne cherchez pas encore à automatiser ces étapes avec une boucle.

### 2.14. Exercice de synthèse

À partir de :

```text
[10, 4, 8, 2, 6]
```

répondez aux questions suivantes :

1. Quelle est la plus petite valeur ?
2. Quelle est sa position ?
3. Quelle valeur doit être placée en première position pour un tri croissant ?
4. Après cette première modification, quel tableau obtenez-vous ?
5. Quelle est la partie qui est maintenant correctement placée ?
6. Quelles valeurs restent à traiter ?
7. Quel est le résultat final dans l'ordre croissant ?

**Travail à faire :**

Observer et classer manuellement plusieurs collections afin de comprendre le principe du tri.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* les réponses aux exercices ;
* les comparaisons réalisées ;
* les positions des valeurs ;
* les étapes de classement manuel ;
* les résultats finaux.

**Résultat attendu :**

Votre document doit montrer que vous savez :

```text
identifier l'ordre
↓
comparer les valeurs
↓
chercher une valeur
↓
repérer sa position
↓
modifier l'ordre
↓
obtenir une collection triée
```

Pour :

```text
[7, 3, 9, 2, 5]
```

vous devez notamment être capable d'obtenir :

```text
Ordre croissant :
[2, 3, 5, 7, 9]

Ordre décroissant :
[9, 7, 5, 3, 2]
```

**Critère de réussite :**

Vous avez réussi lorsque vous êtes capable de :

* distinguer une collection triée d'une collection non triée ;
* distinguer l'ordre croissant et l'ordre décroissant ;
* comparer deux valeurs ;
* trouver le minimum et le maximum ;
* trouver la position d'une valeur ;
* classer manuellement une petite collection ;
* expliquer pourquoi l'ordre des valeurs change.

## Bilan

**Vous avez appris :**

* ce qu'est un ordre ;
* ce qu'est un tri ;
* la différence entre ordre croissant et ordre décroissant ;
* comment comparer des valeurs ;
* comment repérer leur position ;
* comment classer manuellement une collection.

Vous avez observé qu'un tri peut être construit progressivement :

```text
Collection
↓
Chercher une valeur
↓
Repérer sa position
↓
Modifier l'ordre
↓
Continuer
↓
Collection triée
```

Pour le moment, vous avez réalisé ces opérations **manuellement**.

Dans le prochain tutoriel, vous allez transformer ces opérations en traitements utilisables par un programme :

```text
Chercher
↓
Mémoriser la position
↓
Échanger
```

## Glossaire

* **Ordre** : règle qui permet de placer les valeurs dans une certaine position.
* **Ordre croissant** : ordre allant de la plus petite valeur à la plus grande.
* **Ordre décroissant** : ordre allant de la plus grande valeur à la plus petite.
* **Tri** : action consistant à ordonner les éléments d'une collection.
* **Collection** : ensemble de plusieurs valeurs, par exemple un tableau.
* **Index** : position d'un élément dans un tableau.
* **Comparaison** : opération permettant de déterminer la relation entre deux valeurs.
* **Minimum** : plus petite valeur d'une collection.
* **Maximum** : plus grande valeur d'une collection.
