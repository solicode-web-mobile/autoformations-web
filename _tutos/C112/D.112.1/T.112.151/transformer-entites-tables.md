---
title: "Transformer les entités en tables"
layout: tuto
slug: "transformer-entites-tables"
permalink: /tutos/:slug/
tuto_id: "T.112.151"
type: "classique"
version: "normal"
ua: "UA.112.15"
nav_order: 10
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Apprendre à transformer chaque entité du MCD en **table relationnelle** dans le MLD.

Identifier la **clé primaire** de chaque table.

## 2. Prérequis

- Avoir construit le MCD complet du Blog (T.112.142).
- Comprendre les notions d'entité, attribut et identifiant.

## Données de départ

Les entités du MCD du Blog :

```text
VILLE        AUTEUR        ARTICLE        CATEGORIE
```

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MLD ?

Un **MLD** (Modèle Logique de Données) est la traduction du MCD en tables relationnelles.

Il décrit concrètement comment les données seront organisées dans la base de données.

### 1.2. Table, colonne, ligne

| Concept MCD  | Concept MLD         |
| ------------ | ------------------- |
| Entité       | Table               |
| Attribut     | Colonne             |
| Occurrence   | Ligne / enregistrement |
| Identifiant  | Clé primaire (PK)   |

### 1.3. Clé primaire (PK)

Une **clé primaire** (Primary Key) est la colonne qui identifie de manière unique chaque ligne d'une table.

Elle correspond à l'identifiant de l'entité dans le MCD.

**Notation dans le MLD :**

```text
TABLE
-----
id_table   PK
colonne_1
colonne_2
```

### 1.4. Règle de transformation : Entité → Table

La règle est simple et directe :

```text
Entité  →  Table
Attribut  →  Colonne
Identifiant  →  Clé primaire (PK)
```

**Exemple :**

Entité dans le MCD :

```text
VILLE
-----
id_ville
nom_ville
```

Table dans le MLD :

```text
VILLE
-----
id_ville   PK
nom_ville
```

### 1.5. À retenir

- Chaque entité devient une table.
- Chaque attribut devient une colonne.
- L'identifiant devient la clé primaire (PK).
- La transformation est directe et mécanique.

## Partie 2 — Pratique

### 2.1. Transformer les entités

#### Entité VILLE → Table VILLE

MCD :

```text
VILLE
-----
id_ville
nom_ville
```

MLD :

```text
VILLE
-----
id_ville   PK
nom_ville
```

#### Entité AUTEUR → Table AUTEUR

MCD :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
```

MLD :

```text
AUTEUR
------
id_auteur    PK
nom_auteur
prenom_auteur
email_auteur
```

#### Entité ARTICLE → Table ARTICLE

MCD :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
```

MLD :

```text
ARTICLE
-------
id_article       PK
titre_article
contenu_article
date_publication
statut_article
image_article
```

#### Entité CATEGORIE → Table CATEGORIE

MCD :

```text
CATEGORIE
---------
id_categorie
nom_categorie
```

MLD :

```text
CATEGORIE
---------
id_categorie   PK
nom_categorie
```

---

### 2.2. Travail à faire

**Consigne :**

À partir du MCD du Blog, transformez chaque entité en table relationnelle.

Indiquez la clé primaire de chaque table.

**Livrable :**

Un document listant les 4 tables avec leurs colonnes et clés primaires.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.151/' | relative_url }}"
    height="500"
    title="Résultat attendu — Tables et clés primaires">
</iframe>

**Critère de réussite :**

Les 4 tables sont créées avec toutes les colonnes et chaque clé primaire est correctement identifiée.

## Bilan

**Vous avez réalisé :** La transformation des 4 entités du MCD en tables relationnelles dans le MLD.

**Vous savez maintenant :**

- Transformer une entité en table.
- Transformer un attribut en colonne.
- Identifier la clé primaire (PK) d'une table.

## Glossaire

- **MLD** : Modèle Logique de Données — traduction du MCD en tables relationnelles.
- **Table** : Structure qui stocke les données d'une entité. Correspond à une entité du MCD.
- **Colonne** : Champ d'une table correspondant à un attribut d'entité.
- **Ligne / enregistrement** : Une occurrence concrète dans une table.
- **Clé primaire (PK)** : Colonne qui identifie de manière unique chaque ligne d'une table.
