---
title: "Comprendre un problème algorithmique"
layout: tuto
slug: "comprendre-probleme-algorithmique"
permalink: /tutos/:slug/
tuto_id: "T.121.151"
type: "classique"
version: "normal"
ua: "UA.121.15"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
----

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **lire un problème avant de coder**.

Vous allez apprendre à identifier :

* les données ;
* les entrées ;
* le résultat attendu ;
* les règles ;
* le traitement à réaliser.

À la fin du tutoriel, vous saurez transformer un problème écrit en français en une description simple :

```text
Entrées → Traitement → Sorties
```

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des valeurs numériques ;
* utiliser des tableaux simples ;
* utiliser des opérations simples ;
* lire un énoncé court ;
* utiliser Node.js pour exécuter un programme simple.

Vous n'avez pas besoin de construire le programme complet dans ce tutoriel.

## Données de départ

### Problème

On dispose de plusieurs notes d'un apprenant.

On veut calculer sa moyenne.

Les notes sont :

```text
12
15
8
17
```

Le programme doit produire :

```text
Moyenne : 13
```

### Deuxième problème

Un programme reçoit deux nombres.

Il doit afficher le plus grand nombre.

Exemple :

```text
Premier nombre : 12
Deuxième nombre : 18

Résultat : 18
```

Ces deux problèmes seront utilisés pour apprendre à analyser un problème algorithmique.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un problème algorithmique ?

Un problème algorithmique décrit **un résultat que le programme doit produire**.

Le problème donne généralement :

* des données ;
* une règle ;
* un résultat attendu.

Avant d'écrire du code, il faut donc comprendre le problème.

Exemple :

> À partir de plusieurs notes, calculer la moyenne.

Le programme doit comprendre :

```text
Données → notes
Résultat → moyenne
```

Le code vient après.

### 1.2. Identifier les données

Les **données** sont les informations utilisées par le traitement.

Dans le problème des notes :

```text
12
15
8
17
```

Ce sont les données disponibles.

On peut aussi les présenter sous la forme :

```text
notes = [12, 15, 8, 17]
```

La question à poser est :

> Quelles informations possède le programme ?

### 1.3. Identifier les entrées

Une **entrée** est une donnée utilisée par le programme pour commencer le traitement.

Dans le problème des notes :

```text
Entrée :
liste des notes
```

Dans le problème des deux nombres :

```text
Entrées :
premier nombre
deuxième nombre
```

La question à poser est :

> Quelles informations le programme reçoit-il ?

### 1.4. Identifier le résultat attendu

Le **résultat attendu** est ce que le programme doit produire.

Dans le problème des notes :

```text
Résultat :
la moyenne
```

Dans le problème des deux nombres :

```text
Résultat :
le plus grand nombre
```

La question à poser est :

> Qu'est-ce que le programme doit produire ?

### 1.5. Identifier la règle

Une **règle** indique ce que le programme doit faire avec les données.

Exemple avec les notes :

```text
Règle :
additionner les notes
puis calculer la moyenne
```

Exemple avec deux nombres :

```text
Règle :
comparer les deux nombres
puis conserver le plus grand
```

La règle explique le traitement à réaliser.

### 1.6. Identifier le traitement

Le **traitement** est l'action réalisée par le programme sur les données.

Pour les notes :

```text
Notes
↓
Additionner
↓
Calculer la moyenne
↓
Afficher la moyenne
```

Pour deux nombres :

```text
Nombre 1
Nombre 2
↓
Comparer
↓
Choisir le plus grand
↓
Afficher le résultat
```

Le traitement transforme les entrées en résultat.

### 1.7. Entrées → Traitement → Sorties

Un problème simple peut être résumé ainsi :

```text
Entrées
   ↓
Traitement
   ↓
Sorties
```

Exemple :

```text
Entrées :
12, 15, 8, 17

Traitement :
calculer la moyenne

Sortie :
13
```

Cette représentation aide à comprendre le problème avant de commencer le code.

### 1.8. À retenir

* Un problème décrit un résultat à obtenir.
* Les données sont les informations disponibles.
* Les entrées sont les données utilisées par le programme.
* Le résultat attendu indique ce que le programme doit produire.
* La règle indique ce que le programme doit faire.
* Le traitement transforme les entrées en résultats.

Retenez surtout :

```text
Avant de coder :

1. Quelles sont les données ?
2. Quel est le résultat attendu ?
3. Quelle règle faut-il appliquer ?
4. Quel traitement faut-il réaliser ?
```

## Partie 2 — Pratique

### 2.1. Analyser un premier problème

Lisez le problème :

> Une classe possède les notes suivantes : 12, 15, 8 et 17. Le programme doit afficher la moyenne.

Ne commencez pas par écrire du code.

Commencez par identifier les éléments du problème.

#### Étape 1 — Identifier les données

Demandez-vous :

> Quelles informations possède le programme ?

Les données sont :

```text
12
15
8
17
```

Elles représentent :

```text
une liste de notes
```

#### Étape 2 — Identifier l'entrée

Demandez-vous :

> Qu'est-ce que le programme utilise pour commencer le traitement ?

L'entrée est :

```text
liste de notes
```

#### Étape 3 — Identifier le résultat

Demandez-vous :

> Qu'est-ce que le programme doit produire ?

Le résultat attendu est :

```text
la moyenne
```

#### Étape 4 — Identifier la règle

Demandez-vous :

> Que faut-il faire avec les notes ?

La règle est :

```text
additionner les notes
puis calculer la moyenne
```

#### Étape 5 — Décrire le traitement

On peut maintenant représenter le problème simplement :

```text
Liste de notes
↓
Calcul de la moyenne
↓
Moyenne obtenue
```

### 2.2. Construire la fiche du problème

Pour un problème simple, vous pouvez utiliser cette fiche :

| Élément          | Réponse                                        |
| ---------------- | ---------------------------------------------- |
| Données          | Liste de notes                                 |
| Entrée           | Liste de notes                                 |
| Résultat attendu | Moyenne                                        |
| Règle            | Calculer la moyenne                            |
| Traitement       | Additionner les notes puis calculer la moyenne |

Cette fiche permet de comprendre le problème avant de construire le programme.

### 2.3. Analyser un deuxième problème

Lisez le problème :

> Un programme reçoit deux nombres. Il doit afficher le plus grand nombre.

Ne cherchez pas encore à écrire le code.

Complétez d'abord l'analyse.

| Élément          | Réponse      |
| ---------------- | ------------ |
| Données          | Deux nombres |
| Entrées          | ?            |
| Résultat attendu | ?            |
| Règle            | ?            |
| Traitement       | ?            |

Prenez le temps d'identifier chaque élément.

### 2.4. Décrire le problème avant le code

Une fois l'analyse terminée, représentez le problème :

```text
Entrées
↓
Traitement
↓
Sortie
```

Pour le problème des deux nombres, vous devez obtenir une description de cette forme :

```text
Deux nombres
↓
Comparer les deux nombres
↓
Plus grand nombre
```

### 2.5. Exercice individuel

Lisez le problème suivant :

> Un programme reçoit une note. Il doit afficher si la note est validée lorsque la note est supérieure ou égale à 10.

Ne codez pas encore le programme.

Complétez :

| Élément          | Votre réponse |
| ---------------- | ------------- |
| Données          |               |
| Entrée           |               |
| Résultat attendu |               |
| Règle            |               |
| Traitement       |               |

Ensuite, écrivez le problème sous la forme :

```text
Entrée
↓
Traitement
↓
Sortie
```

**Travail à faire :**

Analyser le problème et compléter les deux représentations.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses.

**Résultat attendu :**

Votre document doit contenir :

```text
Données
Entrée
Résultat attendu
Règle
Traitement
```

puis :

```text
Entrée
↓
Traitement
↓
Sortie
```

**Critère de réussite :**

Chaque élément doit correspondre au problème donné et être formulé simplement.

## Bilan

**Vous avez appris :**

* à lire un problème avant de coder ;
* à identifier les données ;
* à identifier les entrées ;
* à identifier le résultat attendu ;
* à identifier les règles ;
* à décrire le traitement.

**Vous savez maintenant :**

transformer un problème simple en :

```text
Entrées
↓
Traitement
↓
Sorties
```

La prochaine étape consiste à utiliser cette analyse pour **construire une première solution**.

## Glossaire

* **Problème** : situation pour laquelle le programme doit produire un résultat.
* **Donnée** : information utilisée par le programme.
* **Entrée** : donnée fournie au traitement.
* **Sortie** : résultat produit par le programme.
* **Règle** : action ou condition à respecter pour produire le résultat.
* **Traitement** : opération réalisée sur les données.
* **Résultat attendu** : résultat que le programme doit produire.
