---
title: "Observer les occurrences et repérer les répétitions"
layout: tuto
slug: "observer-occurrences-reperer-repetitions"
permalink: /tutos/:slug/compact
tuto_id: "T.112.131"
type: "classique"
version: "compact"
ua: "UA.112.13"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **observer plusieurs occurrences d'une même donnée** afin d'y repérer les répétitions.

Vous allez apprendre à :
* distinguer une donnée d'une valeur ;
* reconnaître et comparer plusieurs occurrences ;
* repérer une valeur qui se répète pour une donnée ;
* expliquer pourquoi une répétition est un "signal" qui mérite d'être étudié.

À la fin de ce tutoriel, vous saurez analyser le comportement des données avant même de chercher à construire des entités.

## 2. Prérequis

* Comprendre ce qu'est une donnée et une valeur (T.112.111).
* Savoir lire un dictionnaire de données simple (T.112.122).

## Données de départ

Nous utiliserons un ensemble de données représentant plusieurs auteurs :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville |
| ---------- | ------------- | ------------------------------------------- | --------- |
| Ali        | Madani        | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    |

Pour le moment, nous ne cherchons pas à construire le modèle conceptuel, nous allons uniquement **observer ces données**.

---

## Partie 1 — Théorie

### 1.1. Occurrence, donnée et valeur

* **Donnée :** Information que l'application gère (ex: `nom_ville`).
* **Valeur :** Le contenu concret de cette donnée (ex: `Tanger`).
* **Occurrence :** Un exemple complet concret d'un ensemble de données. Dans un tableau, **chaque ligne représente une occurrence**.

Dans notre exemple, nous avons 4 occurrences (4 auteurs différents). 
Pour une même donnée, chaque occurrence peut avoir une valeur différente.

### 1.2. Observer plusieurs occurrences

L'étude d'une seule occurrence (ex: Madani habite à Tanger) ne permet pas de comprendre le comportement global d'une donnée. En observant **plusieurs occurrences**, on peut comparer les valeurs et détecter des motifs, comme les **répétitions**.

### 1.3. Qu'est-ce qu'une répétition ?

Une répétition apparaît lorsqu'une **même valeur** est présente plusieurs fois pour une **même donnée**.

*Exemple pour la donnée `nom_ville` :*
* `Tanger`
* `Tanger`
* `Rabat`
* `Tanger`

La valeur `Tanger` est **répétée** (elle apparaît 3 fois). La valeur `Rabat` n'est pas répétée.

### 1.4. Pourquoi les répétitions sont-elles importantes ?

Une répétition n'est pas forcément une erreur de saisie, mais c'est un **signal d'alerte**. 

Si une information répétée (comme "Tanger") doit être corrigée (par exemple, suite à une faute d'orthographe), il faudra modifier manuellement **plusieurs occurrences**. Cela crée un risque d'oubli et d'incohérence.

> **Règle d'or :** Une répétition indique qu'une information mérite peut-être d'être extraite et gérée séparément pour éviter les problèmes de mise à jour. C'est la première étape vers la découverte d'une nouvelle entité.

---

## Partie 2 — Pratique

### Exercice

À partir du tableau suivant :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
| Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    | Développement |
| Nadia      | Alaoui        | [nadia@mail.com](mailto:nadia@mail.com)     | Rabat     | Actualité     |

**Travail à faire :**
1. Dressez l'inventaire des valeurs pour chaque donnée (`nom_auteur`, `prenom_auteur`, `email_auteur`, `nom_ville`, `nom_categorie`).
2. Indiquez quelles sont les valeurs répétées.
3. Choisissez l'une de ces répétitions et expliquez, en une phrase, quel problème elle poserait si on devait modifier l'information.

*(Rappel : Ne cherchez pas encore à créer de nouveaux identifiants ou de nouvelles tables, limitez-vous à l'observation !)*

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant vos réponses aux 3 questions ci-dessus.
Nom conseillé : `observation-occurrences-repetitions.md`

## Critères de réussite

* Les occurrences et les valeurs répétées sont correctement repérées.
* La différence entre "donnée" et "valeur" est bien comprise et respectée dans les réponses.
* L'impact d'une répétition sur la mise à jour des données est clairement expliqué.
* Aucune entité ou identifiant n'a été inventé prématurément.

---

## Bilan

### Vous avez appris :
* La différence entre une donnée, une valeur, et une occurrence.
* À lire et comparer plusieurs occurrences d'un jeu de données.
* À repérer les répétitions et comprendre en quoi elles constituent un **signal** (le risque d'anomalie lors de la modification).

La prochaine étape consistera à chercher **ce que représentent réellement ces valeurs répétées** pour découvrir progressivement vos premières **entités** (T.112.132).
