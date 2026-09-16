---
title: "Identifier les données à conserver"
layout: tuto
slug: "identifier-donnees-a-conserver"
permalink: /tutos/:slug/
tuto_id: "T.112.112"
type: "classique"
version: "normal"
ua: "UA.112.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Observer trois pages du Blog et comprendre le **rôle** de chaque donnée.

Déterminer quelles données doivent être **conservées** par l'application.

## 2. Prérequis

- Savoir identifier une donnée et sa valeur (T.112.111).

## Données de départ

Ce tutoriel utilise les maquettes du **Blog**.

Pages observées :

- **Page de création d'un article** — l'administrateur saisit les données.
- **Page de gestion des articles** — l'administrateur consulte la liste.
- **Page Détail d'un article** — le visiteur consulte l'article complet.

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Ouvrez la maquette dans votre navigateur avant de commencer.

## Partie 1 — Théorie

### 1.1. Le rôle d'une donnée

Une donnée ne joue pas toujours le même rôle dans une application.

Selon la page, une même donnée peut être :

- **saisie** par l'utilisateur,
- **affichée** à l'écran,
- **calculée** automatiquement par l'application,
- **stockée** dans une base de données pour être réutilisée.

### 1.2. Donnée saisie

Une **donnée saisie** est entrée par l'utilisateur dans un formulaire.

**Exemple :**

Dans la page de création d'un article, l'administrateur remplit le champ "Titre de l'article".

`titre_article` est une donnée saisie.

### 1.3. Donnée affichée

Une **donnée affichée** est présentée à l'écran pour l'utilisateur.

Elle provient d'une information déjà enregistrée.

**Exemple :**

Dans la page Détail d'un article, le titre est affiché pour le visiteur.

`titre_article` est aussi une donnée affichée.

> La même donnée peut être saisie dans un écran et affichée dans un autre.

### 1.4. Donnée calculée

Une **donnée calculée** est produite automatiquement par l'application à partir d'autres données.

L'utilisateur ne la saisit pas directement.

**Exemple :**

La durée de lecture (`duree_lecture`) est calculée à partir de la longueur du contenu de l'article.

L'administrateur ne la saisit pas. L'application la calcule.

### 1.5. Donnée stockée

Une **donnée stockée** est enregistrée dans la base de données de l'application.

Elle peut être relue et réaffichée à chaque fois que nécessaire.

**Exemple :**

Quand l'administrateur enregistre un article, `titre_article` et `contenu_article` sont stockés.

Quand un visiteur ouvre la page Détail d'un article, ces données sont relues et affichées.

### 1.6. Donnée persistante et donnée temporaire

- Une **donnée persistante** est stockée durablement. Elle reste disponible même après fermeture de l'application.
- Une **donnée temporaire** est utilisée pendant une session, puis perdue.

**Exemple :**

`titre_article` est une donnée persistante : elle est enregistrée et disponible à tout moment.

Le texte saisi dans un champ de formulaire avant validation est temporaire : si l'utilisateur ferme la page sans enregistrer, il est perdu.

### 1.7. Stockage et base de données

Le **stockage** est le mécanisme qui permet de conserver les données durablement.

Une **base de données** est le système qui organise et conserve les données de l'application.

> L'objectif de ce domaine est de modéliser ces données : identifier ce qui doit être stocké, comment l'organiser.

### 1.8. À retenir

- Une donnée peut être **saisie**, **affichée**, **calculée** ou **stockée**.
- La même donnée peut jouer plusieurs rôles selon les pages.
- Seules les données **persistantes** doivent être stockées dans la base de données.
- Une donnée calculée n'a pas besoin d'être stockée si elle peut être recalculée.

## Partie 2 — Pratique

### 2.1. Observer les trois pages

Ouvrez la maquette du Blog et naviguez entre les trois pages.

#### Étape 1 — Page de création d'un article

Observez les champs du formulaire.

Repérez les données que l'administrateur **saisit** :

| Ce que je vois              | Donnée              | Rôle    |
| --------------------------- | ------------------- | ------- |
| Champ "Titre"               | `titre_article`     | Saisie  |
| Champ "Contenu"             | `contenu_article`   | Saisie  |
| Liste "Catégorie"           | `nom_categorie`     | Saisie  |
| Liste "Statut"              | `statut_article`    | Saisie  |
| Zone "Image de couverture"  | `image_article`     | Saisie  |

#### Étape 2 — Page de gestion des articles

Observez le tableau de la liste.

Repérez les données **affichées** dans chaque ligne :

| Ce que je vois      | Donnée              | Rôle     |
| ------------------- | ------------------- | -------- |
| Titre de l'article  | `titre_article`     | Affichée |
| Date de publication | `date_publication`  | Affichée |
| Catégorie           | `nom_categorie`     | Affichée |
| Nom de l'auteur     | `nom_auteur`        | Affichée |

#### Étape 3 — Page Détail d'un article

Observez ce que le visiteur voit.

Repérez les données affichées et cherchez si certaines sont calculées :

| Ce que je vois          | Donnée              | Rôle      |
| ----------------------- | ------------------- | --------- |
| Titre de l'article      | `titre_article`     | Affichée  |
| Contenu complet         | `contenu_article`   | Affichée  |
| Nom de l'auteur         | `nom_auteur`        | Affichée  |
| Prénom de l'auteur      | `prenom_auteur`     | Affichée  |
| Date de publication     | `date_publication`  | Affichée  |
| Catégorie               | `nom_categorie`     | Affichée  |
| 5 min de lecture        | `duree_lecture`     | Calculée  |

---

### 2.2. Travail à faire

**Consigne :**

À partir de vos observations, complétez le tableau suivant pour chaque donnée.

Pour chaque donnée, indiquez son rôle : **Saisie**, **Affichée**, **Calculée** ou **Stockée**.

Une donnée peut avoir plusieurs rôles.

Indiquez aussi si elle doit être **conservée** dans la base de données : **Oui** ou **Non**.

**Livrable :**

Un tableau complété avec au moins 6 données.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/' | relative_url }}"
    height="600"
    title="Résultat attendu — Rôle des données">
</iframe>

**Critère de réussite :**

Vous avez identifié correctement le rôle de chaque donnée et déterminé lesquelles doivent être conservées.

## Bilan

**Vous avez réalisé :** L'analyse du rôle des données du Blog à partir de trois pages.

**Vous savez maintenant :**

- Distinguer une donnée saisie d'une donnée affichée.
- Reconnaître une donnée calculée.
- Identifier les données qui doivent être stockées dans la base de données.

## Glossaire

- **Donnée saisie** : Donnée entrée par l'utilisateur dans un formulaire.
- **Donnée affichée** : Donnée présentée à l'écran pour l'utilisateur.
- **Donnée calculée** : Donnée produite automatiquement par l'application.
- **Donnée stockée** : Donnée enregistrée dans la base de données.
- **Donnée persistante** : Donnée conservée durablement, même après fermeture de l'application.
- **Donnée temporaire** : Donnée utilisée momentanément, non conservée.
- **Stockage** : Mécanisme de conservation durable des données.
- **Base de données** : Système qui organise et conserve les données de l'application.
