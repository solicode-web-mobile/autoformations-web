---
title: "Observer et identifier les données d'une application"
layout: tuto
slug: "observer-identifier-donnees-application"
permalink: /tutos/:slug/
tuto_id: "T.112.111"
type: "classique"
version: "normal"
ua: "UA.112.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Observer la maquette de la **page Détail d'un article** du Blog.

Repérer les informations affichées et identifier les données manipulées par l'application.

Distinguer une **donnée** de sa **valeur** concrète.

## 2. Prérequis

Aucun prérequis. C'est le premier tutoriel du domaine.

## Données de départ

Ce tutoriel utilise la maquette du **Blog**.

Maquette utilisée : **Page Détail d'un article**.

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Ouvrez la maquette dans votre navigateur avant de commencer.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une information ?

Une **information** est un renseignement utile pour un utilisateur.

**Exemple :**

> « Madani a publié un article le 14 Février 2026 dans la catégorie Développement. »

C'est une information. Elle contient plusieurs éléments distincts.

### 1.2. Qu'est-ce qu'une donnée ?

Une **donnée** est un élément précis d'information.

Une application ne manipule pas des phrases entières. Elle manipule des données séparées.

**Exemple :**

L'information précédente contient ces données :

| Donnée              | Rôle                     |
| ------------------- | ------------------------ |
| `nom_auteur`        | Le nom de l'auteur       |
| `prenom_auteur`     | Le prénom de l'auteur    |
| `date_publication`  | La date de publication   |
| `nom_categorie`     | Le nom de la catégorie   |

Chaque donnée a un **nom** précis et un **rôle** précis.

### 1.3. Qu'est-ce qu'une valeur ?

Une **valeur** est le contenu concret d'une donnée pour un cas précis.

**Exemple :**

| Donnée              | Valeur          |
| ------------------- | --------------- |
| `nom_auteur`        | Madani          |
| `prenom_auteur`     | Ali             |
| `date_publication`  | 14 Février 2026 |
| `nom_categorie`     | Développement   |

> **La donnée est le contenant. La valeur est le contenu.**

La donnée `nom_auteur` existe toujours. Elle peut avoir des valeurs différentes selon l'article.

### 1.4. Donnée visible

Dans une maquette d'affichage, les données sont **visibles** : elles sont affichées à l'écran pour l'utilisateur.

**Exemple — Page Détail d'un article :**

- Le titre est affiché → c'est la valeur de `titre_article`.
- Le nom de l'auteur est affiché → c'est la valeur de `nom_auteur`.
- Le prénom de l'auteur est affiché → c'est la valeur de `prenom_auteur`.
- La date est affichée → c'est la valeur de `date_publication`.

### 1.5. À retenir

- Une application manipule des **données**.
- Une donnée a un **nom** (ex : `titre_article`) et un **rôle**.
- Une donnée a une **valeur** concrète (ex : « Atomic Design »).
- La donnée reste la même. La valeur change selon le contenu.
- Une donnée affichée dans une maquette est une **donnée visible**.

## Partie 2 — Pratique

### 2.1. Observer la page Détail d'un article

Ouvrez la maquette **Page Détail d'un article** dans votre navigateur.

Parcourez la page visuellement.

#### Étape 1 — Repérer les éléments affichés

La page affiche le contenu complet d'un article.

Observez et notez ce qui est affiché :

- Un titre d'article en haut de la page.
- Le nom de l'auteur avec sa photo.
- La date de publication.
- La catégorie de l'article.
- L'image de couverture.
- Le texte complet de l'article.
- La durée de lecture estimée.

#### Étape 2 — Donner un nom à chaque élément

Pour chaque élément observé, posez-vous cette question :

> Quel est le nom de cette donnée ?

Voici les données identifiées dans la page :

| Ce que je vois dans la maquette                                        | Nom de la donnée    |
| ---------------------------------------------------------------------- | ------------------- |
| Comment structurer ses composants UI avec Atomic Design ?              | `titre_article`     |
| Madani                                                                 | `nom_auteur`        |
| Ali                                                                    | `prenom_auteur`     |
| 14 Février 2026                                                        | `date_publication`  |
| Développement                                                          | `nom_categorie`     |
| Le développement web est un domaine passionnant…                       | `contenu_article`   |
| (image de couverture)                                                  | `image_article`     |
| 5 min                                                                  | `duree_lecture`     |

#### Étape 3 — Distinguer donnée et valeur

Complétez ce tableau en indiquant la donnée et sa valeur :

| Donnée              | Valeur observée dans la maquette                                  |
| ------------------- | ----------------------------------------------------------------- |
| `titre_article`     | Comment structurer ses composants UI avec Atomic Design ?         |
| `nom_auteur`        | Madani                                                            |
| `prenom_auteur`     | Ali                                                               |
| `date_publication`  | 14 Février 2026                                                   |
| `nom_categorie`     | Développement                                                     |
| `contenu_article`   | Le développement web est un domaine passionnant…                  |
| `image_article`     | (fichier image)                                                   |
| `duree_lecture`     | 5 min                                                             |

> Retenez ceci : si l'article change, les valeurs changent. Mais les noms de données restent les mêmes.

---

### 2.2. Travail à faire

**Consigne :**

À partir de votre observation de la page Détail d'un article, répondez aux questions suivantes :

1. Listez toutes les données que vous avez identifiées.
2. Donnez une valeur concrète pour chaque donnée.
3. La donnée `titre_article` a-t-elle toujours la même valeur ? Expliquez.

**Livrable :**

Notez vos réponses dans un document.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.111/' | relative_url }}"
    height="700"
    title="Résultat attendu — Données identifiées dans la page Détail d'un article">
</iframe>

**Critère de réussite :**

Vous avez identifié au moins 5 données différentes avec leurs valeurs.

## Bilan

**Vous avez réalisé :** L'identification des données affichées dans la page Détail d'un article du Blog.

**Vous savez maintenant :**

- Observer une maquette et repérer les données qu'elle affiche.
- Nommer une donnée (ex : `titre_article`).
- Donner la valeur concrète d'une donnée (ex : « Atomic Design »).
- Distinguer la donnée (qui reste fixe) de la valeur (qui change).

## Glossaire

- **Information** : Renseignement global utile à un utilisateur.
- **Donnée** : Élément précis d'information manipulé par l'application. Elle a un nom.
- **Valeur** : Contenu concret d'une donnée dans un cas précis. Elle peut changer.
- **Donnée visible** : Donnée affichée à l'écran pour l'utilisateur.
- **Maquette** : Représentation visuelle d'un écran de l'application.
