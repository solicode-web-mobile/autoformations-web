---
title: "Identifier les données et les règles"
layout: tuto
slug: "identifier-donnees-regles"
permalink: /tutos/:slug/
tuto_id: "T.121.152"
type: "classique"
version: "normal"
ua: "UA.121.15"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **décrire précisément un problème avant d'écrire le programme**.

Vous allez apprendre à identifier :

* les données disponibles ;
* les entrées ;
* les résultats attendus ;
* les règles ;
* les traitements nécessaires ;
* les résultats intermédiaires lorsque cela est utile.

À la fin du tutoriel, vous saurez transformer un problème écrit en français en une description simple :

```text
Données
+
Règles
+
Résultats attendus
+
Traitements
```

## 2. Prérequis

Vous devez savoir :

* lire un problème simple ;
* identifier des données ;
* identifier une entrée ;
* identifier une sortie ;
* utiliser la représentation :

```text
Entrée → Traitement → Sortie
```

Vous devez également connaître les notions de base étudiées dans les UA précédentes :

* variables ;
* conditions ;
* boucles ;
* tableaux ;
* fonctions simples.

Dans ce tutoriel, vous ne construisez pas encore la solution complète.

## Données de départ

### Problème de référence

Un groupe possède les notes suivantes :

```text
12, 15, 8, 17, 10
```

Le programme doit :

* calculer la moyenne ;
* indiquer si la moyenne est validée ;
* afficher le résultat.

La règle de validation est :

```text
moyenne >= 10
```

### Exemple de résultat

Pour les données :

```text
12, 15, 8, 17, 10
```

le programme doit produire :

```text
Moyenne : 12.4
Statut : Validé
```

Le travail du tutoriel consiste à **analyser ce problème avant d'écrire le code**.

## Partie 1 — Théorie

### 1.1. Identifier toutes les données

La première étape consiste à repérer les informations présentes dans le problème.

Dans notre exemple :

```text
12
15
8
17
10
```

Ces valeurs représentent :

```text
une liste de notes
```

On peut donc écrire :

```text
Donnée :
liste de notes
```

Une donnée peut être :

* un nombre ;
* un texte ;
* une valeur vraie ou fausse ;
* une liste de valeurs.

La question à poser est :

> Quelles informations sont disponibles ?

### 1.2. Distinguer donnée et entrée

Une donnée représente une information.

Une entrée représente une donnée utilisée par le programme pour réaliser le traitement.

Dans notre problème :

```text
Donnée :
liste de notes

Entrée :
liste de notes
```

Dans certains problèmes, toutes les données décrites ne sont pas forcément des entrées.

Exemple :

```text
Seuil de validation : 10
```

Le seuil est une donnée utilisée par le traitement.

L'entrée principale reste :

```text
liste de notes
```

Il faut donc identifier le rôle de chaque donnée.

### 1.3. Identifier les résultats attendus

Le problème demande plusieurs résultats :

```text
Moyenne
Statut de validation
```

On peut donc écrire :

```text
Résultat 1 :
moyenne

Résultat 2 :
validé / non validé
```

La question à poser est :

> Quelles informations le programme doit-il produire ?

### 1.4. Identifier les règles

Une règle indique comment passer des données au résultat.

Dans notre problème, il existe deux règles.

#### Règle 1 — Calcul de la moyenne

```text
moyenne = somme des notes / nombre de notes
```

#### Règle 2 — Validation

```text
si la moyenne >= 10
alors la moyenne est validée
```

Les règles peuvent donc être :

* un calcul ;
* une comparaison ;
* une condition ;
* une règle métier simple.

Il faut les écrire avant de coder.

### 1.5. Identifier les traitements

Un traitement est l'action réalisée sur une donnée.

Dans notre exemple :

```text
1. calculer la somme des notes ;
2. compter les notes ;
3. calculer la moyenne ;
4. comparer la moyenne avec 10 ;
5. produire le statut.
```

On peut représenter le traitement ainsi :

```text
Notes
↓
Calculer la somme
↓
Compter les notes
↓
Calculer la moyenne
↓
Comparer avec 10
↓
Produire le statut
```

Le traitement décrit **ce que le programme doit faire**.

### 1.6. Identifier les résultats intermédiaires

Un problème peut demander plusieurs opérations avant d'obtenir le résultat final.

Dans notre exemple :

```text
Notes
↓
Somme
↓
Moyenne
↓
Statut
```

La somme est un **résultat intermédiaire**.

Elle n'est pas directement demandée par l'utilisateur, mais elle est nécessaire pour calculer la moyenne.

On peut donc distinguer :

```text
Résultat intermédiaire :
somme

Résultat final :
moyenne
statut
```

Cette distinction devient importante lorsque le problème contient plusieurs traitements.

### 1.7. Relier les données, les règles et les résultats

On peut maintenant représenter le problème complètement :

```text
Données
↓
Notes

Règle
↓
Calculer la moyenne

Résultat intermédiaire
↓
Moyenne

Règle
↓
Comparer la moyenne avec 10

Résultat final
↓
Validé / non validé
```

Cette représentation permet de voir les différentes informations nécessaires avant de coder.

### 1.8. Une fiche simple d'analyse

Pour un problème algorithmique, utilisez cette structure :

| Élément                  | Question                                                   |
| ------------------------ | ---------------------------------------------------------- |
| Données                  | Quelles informations possède-t-on ?                        |
| Entrées                  | Quelles données sont utilisées par le programme ?          |
| Résultats                | Que doit produire le programme ?                           |
| Règles                   | Quelles règles faut-il appliquer ?                         |
| Traitements              | Quelles actions faut-il réaliser ?                         |
| Résultats intermédiaires | Quels résultats sont nécessaires avant le résultat final ? |

Cette fiche permet de préparer la solution.

### 1.9. À retenir

Avant d'écrire le code :

```text
1. Identifier les données.
2. Identifier les entrées.
3. Identifier les résultats.
4. Identifier les règles.
5. Identifier les traitements.
6. Identifier les résultats intermédiaires si nécessaire.
```

La question principale est :

> **Que doit faire le programme avec les données pour produire les résultats demandés ?**

## Partie 2 — Pratique

### 2.1. Analyser le problème de référence

Reprenons le problème :

> Un groupe possède les notes 12, 15, 8, 17 et 10. Le programme doit calculer la moyenne et indiquer si elle est validée. Une moyenne supérieure ou égale à 10 est validée.

Commencez par identifier les données.

#### Étape 1 — Identifier les données

Les données sont :

```text
12, 15, 8, 17, 10
10
```

Elles représentent :

```text
liste de notes
seuil de validation
```

#### Étape 2 — Identifier les entrées

Les entrées sont :

```text
liste de notes
```

Le seuil de validation est une donnée utilisée dans la règle.

#### Étape 3 — Identifier les résultats

Le programme doit produire :

```text
moyenne
statut
```

#### Étape 4 — Identifier les règles

Règle de calcul :

```text
moyenne = somme des notes / nombre de notes
```

Règle de validation :

```text
moyenne >= 10
```

#### Étape 5 — Identifier les traitements

Les traitements sont :

```text
Calculer la somme
↓
Compter les notes
↓
Calculer la moyenne
↓
Comparer la moyenne avec 10
↓
Produire le statut
```

#### Étape 6 — Identifier les résultats intermédiaires

Le traitement produit d'abord :

```text
somme
```

puis :

```text
moyenne
```

Le statut est produit à partir de la moyenne.

On obtient donc :

```text
notes
↓
somme
↓
moyenne
↓
statut
```

### 2.2. Construire la fiche complète

La fiche du problème devient :

| Élément                  | Description                           |
| ------------------------ | ------------------------------------- |
| Données                  | Liste de notes, seuil de validation   |
| Entrée                   | Liste de notes                        |
| Résultats                | Moyenne, statut                       |
| Règle 1                  | Calculer la moyenne                   |
| Règle 2                  | Une moyenne >= 10 est validée         |
| Traitements              | Somme, comptage, moyenne, comparaison |
| Résultats intermédiaires | Somme, moyenne                        |

Cette fiche est suffisamment précise pour préparer la construction du programme.

### 2.3. Analyser un nouveau problème

Lisez le problème :

> Une boutique possède une liste de prix : 20, 35, 15 et 30. Le programme doit calculer le total et indiquer si le total dépasse 90.

Ne codez pas encore.

Identifiez d'abord :

```text
Données :
?

Entrées :
?

Résultats :
?

Règles :
?

Traitements :
?
```

### 2.4. Décrire les traitements

Une fois les éléments identifiés, représentez le traitement :

```text
Liste de prix
↓
?
↓
?
```

Puis complétez la suite :

```text
Résultat intermédiaire
↓
Règle
↓
Résultat final
```

L'objectif est de décrire **ce que le programme doit faire**, sans écrire encore le code JavaScript.

### 2.5. Deuxième problème

Lisez le problème :

> Un programme reçoit trois nombres. Il doit calculer leur somme et indiquer si la somme est paire.

Analysez le problème.

Complétez le tableau :

| Élément                | Votre réponse |
| ---------------------- | ------------- |
| Données                |               |
| Entrées                |               |
| Résultats              |               |
| Règle 1                |               |
| Règle 2                |               |
| Traitements            |               |
| Résultat intermédiaire |               |

### 2.6. Exercice individuel

Analysez le problème suivant :

> Un formateur dispose des notes suivantes : 14, 9, 12, 16 et 7. Le programme doit calculer la moyenne, trouver la meilleure note et indiquer si la moyenne est validée. La validation est obtenue avec une moyenne supérieure ou égale à 10.

Vous devez analyser le problème avant toute écriture de code.

Complétez :

| Élément                  | Votre réponse |
| ------------------------ | ------------- |
| Données                  |               |
| Entrées                  |               |
| Résultat 1               |               |
| Résultat 2               |               |
| Résultat 3               |               |
| Règle 1                  |               |
| Règle 2                  |               |
| Règle 3                  |               |
| Traitements nécessaires  |               |
| Résultats intermédiaires |               |

Puis représentez les traitements :

```text
Données
↓
Traitement 1
↓
Résultat intermédiaire
↓
Traitement 2
↓
Résultat
```

Ajoutez les traitements nécessaires pour représenter tout le problème.

**Travail à faire :**

Analyser complètement le problème sans écrire le programme JavaScript.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant votre analyse.

Le document doit contenir :

* les données ;
* les entrées ;
* les résultats attendus ;
* les règles ;
* les traitements ;
* les résultats intermédiaires ;
* le schéma du traitement.

**Résultat attendu :**

Votre analyse doit montrer clairement :

```text
Données
↓
Traitements
↓
Résultats intermédiaires
↓
Résultats finaux
```

**Critère de réussite :**

L'analyse est correcte lorsque :

* toutes les données utiles sont identifiées ;
* chaque résultat demandé possède une règle ;
* les traitements nécessaires sont identifiés ;
* les résultats intermédiaires utiles sont repérés ;
* aucun code n'est nécessaire pour comprendre la solution.

## Bilan

**Vous avez appris à :**

* identifier les données d'un problème ;
* distinguer les données et les entrées ;
* identifier plusieurs résultats ;
* identifier les règles ;
* identifier les traitements ;
* repérer les résultats intermédiaires.

**Vous savez maintenant passer de :**

```text
Problème en français
```

à :

```text
Données
↓
Entrées
↓
Règles
↓
Traitements
↓
Résultats intermédiaires
↓
Résultats finaux
```

Vous êtes maintenant prêt à passer de l'analyse à la construction d'une première solution.

## Glossaire

* **Donnée** : information utilisée dans un problème.
* **Entrée** : donnée utilisée par le programme pour commencer le traitement.
* **Règle** : condition ou opération à appliquer aux données.
* **Traitement** : action réalisée par le programme.
* **Résultat** : information produite par le programme.
* **Résultat intermédiaire** : résultat utilisé pour produire un autre résultat.
* **Résultat final** : résultat demandé à la fin du traitement.
