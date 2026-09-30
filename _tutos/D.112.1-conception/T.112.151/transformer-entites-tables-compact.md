---
title: "Transformer les entités en tables"
layout: tuto
slug: "transformer-entites-tables"
permalink: /tutos/:slug/compact
tuto_id: "T.112.151"
type: "classique"
version: "compact"
ua: "UA.112.15"
nav_order: 10
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Transformer les entités du MCD en **tables relationnelles** dans le MLD.

Vous allez apprendre à :
* convertir une entité en table ;
* convertir des attributs en colonnes ;
* transformer l'identifiant en Clé Primaire (`PK`).

## 2. Prérequis

* Le MCD complet du Blog (T.112.142).

## Données de départ

Vos 4 entités issues du MCD :
* `VILLE` (id_ville, nom_ville)
* `AUTEUR` (id_auteur, nom_auteur, prenom_auteur, email_auteur)
* `ARTICLE` (id_article, titre_article, contenu_article, date_publication, statut_article, image_article)
* `CATEGORIE` (id_categorie, nom_categorie)

---

## Partie 1 — Théorie

### 1.1. Du MCD au MLD

Le **MLD** (Modèle Logique de Données) est la traduction du MCD en tables proches de la base de données.
* **Entité** → **Table**
* **Attribut** → **Colonne**
* **Identifiant** → **Clé Primaire (Primary Key - PK)**

### 1.2. La Clé Primaire (PK)

La `PK` garantit qu'une ligne est unique dans la table.
* **Règle** : Toute table *doit* avoir une clé primaire.
* **Notation** : On ajoute `(PK)` à côté de la colonne (ex: `id_ville (PK)`).

### 1.3. Ignorer les relations pour l'instant

* Ne vous occupez **que** des entités simples dans cette étape. 
* Les relations et cardinalités seront traitées à l'étape suivante (clés étrangères).

---

## Partie 2 — Pratique

### 2.1. Transformer les 4 entités

Prenez chaque entité du MCD et transformez-la en table.

**Exemple avec VILLE :**
```text
Table : VILLE
-------------
id_ville (PK)
nom_ville
```

### 2.2. Travail à faire

Appliquez cette règle très simple aux 4 entités de votre blog (`VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`).

## Livrable

Un fichier texte contenant la définition des 4 tables simples.
Nom conseillé : `tables-simples.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.151/tables-simples.html' | relative_url }}"
    height="450"
    title="Résultat attendu — Tables simples">
</iframe>

## Critères de réussite

* Les 4 entités sont devenues 4 tables.
* Chaque table possède ses propres colonnes (attributs).
* Chaque ancien identifiant est clairement annoté `(PK)`.
* Aucune clé étrangère n'est encore présente.

---

## Bilan

### Vous avez appris :
* La règle fondamentale de passage du MCD au MLD : Entité = Table.
* L'importance de la contrainte Primary Key (`PK`).

Dans le tutoriel suivant, vous traiterez la question des relations entre ces tables (Les clés étrangères - `FK`).

## Glossaire

* **MLD** : Modèle Logique de Données (tables).
* **Table** : Structure de stockage en colonnes et en lignes.
* **Colonne** : Un champ de la table.
* **PK (Primary Key)** : Clé primaire garantissant l'unicité d'une ligne.
