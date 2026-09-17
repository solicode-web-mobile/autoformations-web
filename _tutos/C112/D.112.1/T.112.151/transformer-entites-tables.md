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

Transformer les entités du MCD en **tables relationnelles** dans le MLD.

Vous allez apprendre à :

* transformer une entité en table ;
* transformer un attribut en colonne ;
* transformer un identifiant en clé primaire ;
* vérifier les colonnes de chaque table.

## 2. Prérequis

* Savoir construire le MCD complet du Blog (T.112.142).
* Connaître les notions d'entité, d'attribut et d'identifiant.

## Données de départ

Le point de départ est le **MCD du Blog** construit dans T.112.142.

Les entités sont :

```text id="3k3q5m"
VILLE
AUTEUR
ARTICLE
CATEGORIE
```

Les entités contiennent leurs identifiants et leurs attributs.

Dans ce tutoriel, on transforme uniquement les **entités**.

Les relations et les cardinalités ne sont pas encore transformées en clés étrangères.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MLD ?

Le **MLD** est la traduction logique du MCD sous forme de tables relationnelles.

Il permet de représenter :

* les tables ;
* les colonnes ;
* les clés primaires.

À cette étape, on ne transforme pas encore les relations en clés étrangères.

### 1.2. Correspondance MCD → MLD

La transformation de base est :

```text id="4ibj21"
Entité      → Table
Attribut    → Colonne
Identifiant → Clé primaire
```

Exemple :

```text id="lvs76i"
MCD

VILLE
-----

id_ville
nom_ville
```

devient :

```text id="q6fs0s"
MLD

VILLE
-----

id_ville PK
nom_ville
```

### 1.3. Qu'est-ce qu'une table ?

Une **table** est une structure qui regroupe des données de même nature.

Chaque table correspond ici à une entité du MCD.

Exemple :

```text id="bgrf1j"
AUTEUR
```

devient :

```text id="t8cx7w"
AUTEUR
```

dans le MLD.

### 1.4. Qu'est-ce qu'une colonne ?

Une **colonne** représente une donnée stockée dans une table.

Elle correspond à un attribut de l'entité.

Exemple :

```text id="s3x1eo"
Entité AUTEUR

nom_auteur
prenom_auteur
email_auteur
```

devient :

```text id="g3m08u"
Table AUTEUR

nom_auteur
prenom_auteur
email_auteur
```

### 1.5. Qu'est-ce qu'une clé primaire ?

Une **clé primaire**, ou **PK**, identifie de manière unique chaque ligne d'une table.

Elle correspond à l'identifiant de l'entité.

Exemple :

```text id="5jq4vo"
id_auteur
```

devient :

```text id="q4mr7v"
id_auteur PK
```

### 1.6. Règle de transformation

Pour chaque entité :

**Étape 1**

Créer une table portant le nom de l'entité.

**Étape 2**

Copier les attributs comme colonnes.

**Étape 3**

Identifier la colonne correspondant à l'identifiant.

**Étape 4**

Marquer cette colonne comme **PK**.

Exemple :

```text id="z4i5v6"
ARTICLE
-------

id_article
titre_article
contenu_article
```

devient :

```text id="p5ydnq"
ARTICLE
-------

id_article PK
titre_article
contenu_article
```

### 1.7. Ce qui n'est pas encore fait

Dans ce tutoriel, on ne transforme pas encore :

* les relations ;
* les cardinalités ;
* les clés étrangères ;
* les relations N–N ;
* les tables de liaison.

Ces transformations seront étudiées dans les tutoriels suivants.

### 1.8. À retenir

* Une entité devient une table.
* Un attribut devient une colonne.
* Un identifiant devient une clé primaire.
* La transformation est directe.
* Les relations seront transformées dans l'étape suivante.

---

## Partie 2 — Pratique

### 2.1. Transformer l'entité VILLE

Entité du MCD :

```text id="9u2qkz"
VILLE
-----

id_ville
nom_ville
```

Transformation :

```text id="g7yop5"
VILLE
-----

id_ville PK
nom_ville
```

### 2.2. Transformer l'entité AUTEUR

Entité du MCD :

```text id="bqds9e"
AUTEUR
------

id_auteur
nom_auteur
prenom_auteur
email_auteur
```

Transformation :

```text id="3gk1sz"
AUTEUR
------

id_auteur PK
nom_auteur
prenom_auteur
email_auteur
```

### 2.3. Transformer l'entité ARTICLE

Entité du MCD :

```text id="8a4m8j"
ARTICLE
-------

id_article
titre_article
contenu_article
date_publication
statut_article
image_article
```

Transformation :

```text id="zt4gxk"
ARTICLE
-------

id_article PK
titre_article
contenu_article
date_publication
statut_article
image_article
```

### 2.4. Transformer l'entité CATEGORIE

Entité du MCD :

```text id="x2u4xq"
CATEGORIE
---------

id_categorie
nom_categorie
```

Transformation :

```text id="w01f1i"
CATEGORIE
---------

id_categorie PK
nom_categorie
```

### 2.5. Vérifier les tables

Comparez les entités du MCD avec les tables du MLD.

| Entité MCD  | Table MLD   | Identifiant → PK    |
| ----------- | ----------- | ------------------- |
| `VILLE`     | `VILLE`     | `id_ville` → PK     |
| `AUTEUR`    | `AUTEUR`    | `id_auteur` → PK    |
| `ARTICLE`   | `ARTICLE`   | `id_article` → PK   |
| `CATEGORIE` | `CATEGORIE` | `id_categorie` → PK |

Vérifiez également :

* aucun attribut n'a été oublié ;
* aucun attribut n'a été ajouté ;
* chaque table possède sa clé primaire.

### 2.6. Travail à faire

À partir du MCD complet du Blog :

1. transformez chaque entité en table ;
2. transformez chaque attribut en colonne ;
3. identifiez la clé primaire de chaque table ;
4. vérifiez que toutes les colonnes du MCD sont présentes.

Les quatre tables attendues sont :

```text id="oqg7cp"
VILLE
AUTEUR
ARTICLE
CATEGORIE
```

Ne transformez pas encore les relations en clés étrangères.

**Livrable :**

```text id="mld-entites.md"
```

Le document doit contenir les quatre tables avec leurs colonnes et leurs clés primaires.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.151/' | relative_url }}"
    height="550"
    title="Résultat attendu — Tables et clés primaires">
</iframe>

**Critère de réussite :**

Les quatre tables sont correctement produites :

* chaque entité devient une table ;
* chaque attribut devient une colonne ;
* chaque identifiant devient une PK ;
* aucune colonne du MCD n'est oubliée ;
* aucune relation ou clé étrangère n'est ajoutée à cette étape.

## Bilan

**Vous avez réalisé :**

La transformation des quatre entités du MCD en tables relationnelles.

**Vous savez maintenant :**

* transformer une entité en table ;
* transformer un attribut en colonne ;
* transformer un identifiant en clé primaire ;
* vérifier la correspondance entre le MCD et les tables du MLD.

Dans le prochain tutoriel, vous apprendrez à **transformer les relations 1–N en clés étrangères**.

## Glossaire

* **MLD** : Modèle Logique de Données représentant les données sous forme de tables relationnelles.
* **Table** : structure qui représente une entité dans le modèle relationnel.
* **Colonne** : donnée stockée dans une table ; elle correspond à un attribut.
* **Ligne / enregistrement** : occurrence concrète d'une table.
* **Clé primaire (PK)** : colonne qui identifie de manière unique chaque ligne d'une table.
* **Entité** : représentation d'une réalité dans le MCD.
* **Attribut** : donnée qui décrit une entité.
