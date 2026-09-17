---
title: "Observer les occurrences et repérer les répétitions"
layout: tuto
slug: "observer-occurrences-reperer-repetitions"
permalink: /tutos/:slug/normal
tuto_id: "T.112.131"
type: "classique"
version: "normal"
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
* reconnaître une occurrence et la comparer avec d'autres occurrences ;
* repérer une valeur qui se répète pour une donnée précise ;
* expliquer pourquoi une répétition constitue un "signal" qui mérite d'être étudié.

À la fin de ce tutoriel, vous saurez analyser le comportement des données avant de commencer à concevoir vos entités.

## 2. Prérequis

Avant de commencer ce tutoriel, vous devez :
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

Attention : pour le moment, nous ne cherchons pas à construire de modèle conceptuel. Notre objectif est uniquement d'**observer ces données**.

---

## Partie 1 — Théorie

### 1.1. Occurrence, donnée et valeur

Il faut bien distinguer ces trois concepts :

* **Donnée :** L'information que l'application doit gérer (ex: `nom_ville`).
* **Valeur :** Le contenu concret de cette donnée pour une situation précise (ex: `Tanger`).
* **Occurrence :** Un exemple complet d'un ensemble de données liées. Dans un tableau, **chaque ligne correspond à une occurrence**.

Dans notre exemple d'auteurs, nous avons 4 occurrences. Pour une même donnée, chaque occurrence (chaque ligne) peut avoir une valeur différente.

### 1.2. Observer plusieurs occurrences

L'étude d'une seule occurrence (ex: savoir que Madani habite à Tanger) ne permet pas de comprendre le comportement global d'une donnée. En observant **plusieurs occurrences simultanément** (plusieurs lignes), nous pouvons comparer les valeurs entre elles. C'est essentiel pour détecter des **répétitions**.

### 1.3. Qu'est-ce qu'une répétition ?

Une répétition apparaît lorsqu'une **même valeur** est présente plusieurs fois pour une **même donnée**.

Prenons l'exemple de la donnée `nom_ville` dans notre tableau :
* Ligne 1 : `Tanger`
* Ligne 2 : `Tanger`
* Ligne 3 : `Rabat`
* Ligne 4 : `Tanger`

Nous constatons que la valeur `Tanger` est **répétée** (elle apparaît 3 fois). En revanche, la valeur `Rabat` n'est pas répétée.

### 1.4. Pourquoi les répétitions sont-elles importantes ?

Une répétition n'est pas forcément une erreur de saisie (il est normal que plusieurs personnes habitent à Tanger). Cependant, c'est un **signal d'alerte** pour votre base de données.

Si une information répétée (comme "Tanger") doit être corrigée (suite à une faute d'orthographe, par exemple), il faudra modifier manuellement **plusieurs occurrences**. Si le tableau est grand, cela crée un fort risque d'oublier de corriger une ligne, entraînant des données incohérentes.

> **Règle d'or :** Une répétition indique qu'une information mérite peut-être d'être gérée de manière séparée pour éviter les problèmes de mise à jour. Repérer cette répétition est la première étape vers la découverte d'une nouvelle entité.

---

## Partie 2 — Pratique

### Exercice

À partir du tableau suivant, qui recense des informations sur plusieurs auteurs et leurs catégories d'écriture :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
| Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    | Développement |
| Nadia      | Alaoui        | [nadia@mail.com](mailto:nadia@mail.com)     | Rabat     | Actualité     |

**Travail à faire :**
1. Pour chaque donnée (`nom_auteur`, `prenom_auteur`, `email_auteur`, `nom_ville`, `nom_categorie`), dressez l'inventaire des valeurs observées.
2. Indiquez quelles sont les valeurs qui sont répétées pour une même donnée.
3. Choisissez l'une de ces répétitions et expliquez, en rédigeant une phrase, quel problème cela poserait si on devait modifier cette information à l'avenir.

*(Rappel : Ne cherchez pas encore à créer de nouveaux identifiants (comme un id_ville) ou de nouvelles tables, limitez-vous à l'observation !)*

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant vos réponses aux 3 questions ci-dessus.
Nom conseillé : `observation-occurrences-repetitions.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.131/observation-occurrences-repetitions.html' | relative_url }}"
    height="320"
    title="Résultat attendu — Observation des occurrences">
</iframe>

## Critères de réussite


* Les occurrences et les valeurs répétées sont correctement identifiées.
* La différence entre "donnée" (contenant) et "valeur" (contenu) est bien comprise et respectée dans les réponses.
* L'impact d'une répétition sur la mise à jour des données (problème de modification) est clairement expliqué.
* Aucune entité ou aucun identifiant n'a été inventé prématurément.

---

## Bilan

### Ce que vous avez appris :
* Vous savez faire la différence entre une donnée, une valeur, et une occurrence.
* Vous avez appris qu'il faut comparer plusieurs occurrences d'un jeu de données pour comprendre son comportement.
* Vous savez repérer les répétitions et comprendre en quoi elles constituent un **signal** (le risque d'anomalie lors d'une future modification).

La prochaine étape consistera à chercher **ce que représentent réellement ces valeurs répétées** pour découvrir progressivement vos premières **entités** (rendez-vous dans le tutoriel T.112.132).
