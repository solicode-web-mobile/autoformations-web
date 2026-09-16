---
title: "Construire le dictionnaire de données"
layout: tuto
slug: "construire-dictionnaire-donnees"
permalink: /tutos/:slug/
tuto_id: "T.112.122"
type: "classique"
version: "normal"
ua: "UA.112.12"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Regrouper et structurer les données observées dans les maquettes du Blog pour construire un **dictionnaire de données** complet et cohérent.

## 2. Prérequis

- Savoir identifier et décrire une donnée (T.112.121).
- Connaître les types conceptuels : Texte, Entier, Date, Booléen.
- Savoir distinguer donnée obligatoire et facultative.

## Données de départ

Ce tutoriel utilise les maquettes du **Blog**.

Pages observées :

- **Page Détail d'un article**
- **Page de création d'un article**
- **Page de gestion des articles**

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Ouvrez la maquette dans votre navigateur avant de commencer.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un dictionnaire de données ?

Un **dictionnaire de données** est un tableau qui liste et décrit toutes les données d'une application.

Il regroupe en un seul document :

- le nom de chaque donnée,
- sa description,
- son exemple de valeur,
- son type,
- son caractère obligatoire ou facultatif,
- son rôle (stockée ou calculée).

Il sert de **référence commune** entre tous les membres d'un projet.

### 1.2. Structure du dictionnaire

Le dictionnaire suit une structure fixe :

| Donnée | Description | Exemple | Type | Obligatoire | Stockée |
|--------|-------------|---------|------|:-----------:|:-------:|
| `nom_donnee` | Ce que représente la donnée | valeur concrète | Texte / Date / Entier / Booléen | Oui / Non | Oui / Non |

### 1.3. Cohérence des noms

Tous les noms de données doivent respecter la même convention :

- Minuscules uniquement.
- Mots séparés par `_`.
- Pas d'accents ni de caractères spéciaux.
- Nom descriptif et précis.

**Exemples de noms cohérents :**

```text
titre_article
date_publication
nom_categorie
```

**Exemples à éviter :**

```text
Titre   ← majuscule
date pub ← espace
nomCat  ← camelCase
```

### 1.4. Cohérence des types

Tous les enregistrements d'une même donnée doivent avoir le même type.

Si `date_publication` est de type **Date**, toutes ses valeurs doivent être des dates.

On ne peut pas avoir des valeurs de types différents pour une même donnée.

### 1.5. Donnée stockée / calculée

- **Donnée stockée** : enregistrée dans la base de données (elle doit figurer dans le dictionnaire).
- **Donnée calculée** : produite automatiquement — elle peut figurer dans le dictionnaire, mais la colonne "Stockée" indique **Non**.

**Exemple :**

`duree_lecture` est calculée à partir de la longueur de `contenu_article`. Elle n'est pas stockée.

### 1.6. Différence entre dictionnaire de données et entité

Le dictionnaire liste **toutes les données** sans les regrouper par réalité.

L'entité regroupe les données qui décrivent une même réalité (un auteur, un article, une catégorie).

> Le dictionnaire de données est une étape **avant** la construction des entités.

### 1.7. À retenir

- Le dictionnaire regroupe toutes les données en un seul tableau structuré.
- Chaque donnée a un nom cohérent, un type, un exemple et un caractère obligatoire.
- Les données calculées sont signalées dans la colonne "Stockée".
- Le dictionnaire ne regroupe pas encore les données par entité.

## Partie 2 — Pratique

### 2.1. Collecter toutes les données

Ouvrez les trois pages de la maquette du Blog.

Pour chaque page, relevez toutes les données que vous observez (données saisies ou affichées).

#### Page de création d'un article

Données saisies dans le formulaire :

```text
titre_article
contenu_article
nom_categorie
statut_article
image_article
```

#### Page de gestion des articles

Données affichées dans le tableau :

```text
titre_article
date_publication
nom_categorie
nom_auteur
prenom_auteur
```

#### Page Détail d'un article

Données affichées pour le visiteur :

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

### 2.2. Éliminer les doublons

Une donnée qui apparaît dans plusieurs pages ne doit être listée **qu'une seule fois**.

Après regroupement, la liste unifiée est :

```text
titre_article
contenu_article
nom_auteur
prenom_auteur
date_publication
nom_categorie
statut_article
image_article
duree_lecture
```

### 2.3. Compléter le dictionnaire

Pour chaque donnée, renseignez toutes les colonnes.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.122/' | relative_url }}"
    height="600"
    title="Résultat attendu — Dictionnaire de données">
</iframe>

---

### 2.4. Travail à faire

**Consigne :**

Construisez le dictionnaire complet du Blog à partir de vos observations des trois pages.

**Livrable :**

```text
dictionnaire-donnees.md
```

Tableau avec au moins 8 données, complètement décrites.

**Critère de réussite :**

Chaque donnée a un nom correct, un type valide, un exemple réaliste, un caractère obligatoire et une indication Stockée Oui/Non.

## Bilan

**Vous avez réalisé :** Le dictionnaire de données complet du Blog à partir de trois maquettes.

**Vous savez maintenant :**

- Collecter les données de plusieurs maquettes et éliminer les doublons.
- Structurer un dictionnaire de données complet.
- Appliquer la convention de nommage.
- Distinguer donnée stockée et donnée calculée dans le dictionnaire.

## Glossaire

- **Dictionnaire de données** : Tableau qui liste et décrit toutes les données d'une application.
- **Cohérence des noms** : Tous les noms respectent la même convention d'écriture.
- **Cohérence des types** : Toutes les valeurs d'une donnée sont du même type.
- **Donnée stockée** : Donnée enregistrée dans la base de données.
- **Donnée calculée** : Donnée produite automatiquement, non saisie par l'utilisateur.
