---
title: "Identifier et décrire les données d'une maquette"
layout: tuto
slug: "identifier-decrire-donnees-maquette"
permalink: /tutos/:slug/
tuto_id: "T.112.121"
type: "classique"
version: "normal"
ua: "UA.112.12"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Observer la maquette **Page Détail d'un article** et décrire chaque donnée identifiée.

Préciser son **nom**, sa **description**, un **exemple de valeur**, son **type** et son **caractère obligatoire**.

## 2. Prérequis

- Savoir identifier une donnée et sa valeur (T.112.111).
- Savoir distinguer les rôles d'une donnée : saisie, affichée, stockée (T.112.112).

## Données de départ

Ce tutoriel utilise la maquette du **Blog**.

Maquette utilisée : **Page Détail d'un article**.

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Ouvrez la maquette dans votre navigateur avant de commencer.

## Partie 1 — Théorie

### 1.1. Nom d'une donnée

Le **nom** d'une donnée est un identifiant court, précis et sans espaces.

Il permet de désigner la donnée de manière unique dans l'application.

**Convention :**

- Minuscules uniquement.
- Les mots sont séparés par `_`.
- Pas d'accents ni de caractères spéciaux.

**Exemples :**

| ❌ À éviter         | ✓ À utiliser       |
| ------------------- | ------------------ |
| Titre de l'article  | `titre_article`    |
| Date Publi          | `date_publication` |
| NomAuteur           | `nom_auteur`       |

### 1.2. Description d'une donnée

La **description** explique en quelques mots ce que représente la donnée.

Elle doit être courte et précise.

**Exemples :**

| Donnée              | Description                     |
| ------------------- | ------------------------------- |
| `titre_article`     | Titre de l'article              |
| `date_publication`  | Date à laquelle l'article est publié |
| `nom_auteur`        | Nom de famille de l'auteur      |

### 1.3. Exemple de valeur

Un **exemple de valeur** est une valeur concrète et réaliste pour cette donnée.

Il aide à comprendre ce que la donnée contient réellement.

**Exemples :**

| Donnée              | Exemple de valeur                                         |
| ------------------- | --------------------------------------------------------- |
| `titre_article`     | Comment structurer ses composants UI avec Atomic Design ? |
| `date_publication`  | 14 Février 2026                                           |
| `nom_auteur`        | Madani                                                    |

### 1.4. Types conceptuels

Le **type** d'une donnée indique la nature de son contenu.

Les types conceptuels utilisés dans ce domaine sont :

| Type             | Description                            | Exemple de valeur     |
| ---------------- | -------------------------------------- | --------------------- |
| **Texte**        | Suite de caractères                    | Développement web     |
| **Entier**       | Nombre entier, sans décimale           | 5                     |
| **Nombre décimal** | Nombre avec virgule                  | 4.5                   |
| **Date**         | Date calendaire                        | 14 Février 2026       |
| **Booléen**      | Vrai ou Faux uniquement                | Vrai / Faux           |

> Ces types sont **conceptuels** : ils décrivent la nature des données, pas leur format technique de stockage.

### 1.5. Donnée obligatoire et donnée facultative

- Une **donnée obligatoire** doit toujours avoir une valeur. Elle ne peut pas être vide.
- Une **donnée facultative** peut ne pas avoir de valeur dans certains cas.

**Exemples :**

| Donnée              | Obligatoire ? | Justification                              |
| ------------------- | :-----------: | ------------------------------------------ |
| `titre_article`     | Oui           | Un article doit toujours avoir un titre    |
| `image_article`     | Non           | Un article peut ne pas avoir d'image       |
| `date_publication`  | Oui           | Un article publié a toujours une date      |

### 1.6. À retenir

- Chaque donnée a un **nom**, une **description**, un **exemple**, un **type** et un **caractère obligatoire**.
- Le nom suit la convention : minuscules, séparateur `_`, pas d'accents.
- Le type décrit la **nature** du contenu, pas son format technique.
- Une donnée obligatoire ne peut jamais être vide.

## Partie 2 — Pratique

### 2.1. Observer la page Détail d'un article

Ouvrez la maquette **Page Détail d'un article** dans votre navigateur.

#### Étape 1 — Relister les données connues

Vous avez déjà identifié ces données dans les tutoriels précédents :

```text
titre_article
contenu_article
nom_auteur
prenom_auteur
date_publication
nom_categorie
image_article
duree_lecture
```

#### Étape 2 — Décrire chaque donnée

Pour chaque donnée, posez-vous ces questions :

1. Que représente cette donnée en une phrase courte ?
2. Quelle valeur concrète peut-elle contenir ?
3. Quel est son type (Texte, Entier, Date, Booléen) ?
4. Est-elle obligatoire ou facultative ?

#### Étape 3 — Compléter la description

Voici la description des données observées dans la maquette :

| Donnée              | Description                              | Exemple de valeur                                         | Type   | Obligatoire |
| ------------------- | ---------------------------------------- | --------------------------------------------------------- | ------ | :---------: |
| `titre_article`     | Titre de l'article                       | Comment structurer ses composants UI avec Atomic Design ? | Texte  | Oui         |
| `contenu_article`   | Contenu complet de l'article             | Le développement web est un domaine passionnant…          | Texte  | Oui         |
| `nom_auteur`        | Nom de famille de l'auteur               | Madani                                                    | Texte  | Oui         |
| `prenom_auteur`     | Prénom de l'auteur                       | Ali                                                       | Texte  | Oui         |
| `date_publication`  | Date de publication de l'article         | 14 Février 2026                                           | Date   | Oui         |
| `nom_categorie`     | Nom de la catégorie de l'article         | Développement                                             | Texte  | Oui         |
| `image_article`     | Image de couverture de l'article         | (fichier image)                                           | Texte  | Non         |
| `duree_lecture`     | Durée estimée de lecture en minutes      | 5                                                         | Entier | Non         |

> `duree_lecture` est de type **Entier** car c'est un nombre de minutes (5, 10, 15…). Elle est facultative car calculée automatiquement.

> `image_article` est facultative : un article peut être publié sans image de couverture.

---

### 2.2. Travail à faire

**Consigne :**

Reproduisez ce tableau de description pour les données de la page Détail d'un article.

Pour chaque donnée, renseignez : nom, description, exemple de valeur, type et caractère obligatoire.

**Livrable :**

Un tableau complété avec au moins 6 données décrites.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.121/' | relative_url }}"
    height="550"
    title="Résultat attendu — Description des données">
</iframe>

**Critère de réussite :**

Chaque donnée a un nom correct, une description courte, un exemple réaliste, un type valide et un caractère obligatoire justifié.

## Bilan

**Vous avez réalisé :** La description des données visibles dans la page Détail d'un article du Blog.

**Vous savez maintenant :**

- Nommer une donnée selon la convention (`minuscules_avec_tiret_bas`).
- Décrire une donnée en une phrase courte.
- Donner un exemple de valeur réaliste.
- Choisir le bon type conceptuel (Texte, Entier, Date, Booléen).
- Distinguer une donnée obligatoire d'une donnée facultative.

## Glossaire

- **Nom de donnée** : Identifiant court et précis d'une donnée (ex : `titre_article`).
- **Description** : Phrase courte qui explique ce que représente la donnée.
- **Exemple de valeur** : Valeur concrète et réaliste pour illustrer la donnée.
- **Type conceptuel** : Nature du contenu d'une donnée (Texte, Entier, Date, Booléen…).
- **Donnée obligatoire** : Donnée qui doit toujours avoir une valeur.
- **Donnée facultative** : Donnée qui peut ne pas avoir de valeur.
- **Texte** : Type pour les suites de caractères.
- **Entier** : Type pour les nombres entiers sans décimale.
- **Date** : Type pour les dates calendaires.
- **Booléen** : Type pour les valeurs Vrai / Faux uniquement.
