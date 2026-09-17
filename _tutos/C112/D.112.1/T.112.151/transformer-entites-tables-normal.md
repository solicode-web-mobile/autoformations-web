---
title: "Transformer les entités en tables"
layout: tuto
slug: "transformer-entites-tables"
permalink: /tutos/:slug/normal
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

Transformer pas-à-pas les entités abstraites du MCD en **tables relationnelles** concrètes dans le Modèle Logique de Données (MLD).

Vous allez apprendre à :
* convertir une entité conceptuelle en véritable table ;
* convertir des attributs en colonnes de table ;
* transformer l'identifiant unique en Clé Primaire (`PK`).

## 2. Prérequis

* Avoir modélisé le MCD complet du Blog (T.112.142).

## Données de départ

Vos 4 entités issues de votre travail de modélisation MCD :
* `VILLE` (id_ville, nom_ville)
* `AUTEUR` (id_auteur, nom_auteur, prenom_auteur, email_auteur)
* `ARTICLE` (id_article, titre_article, contenu_article, date_publication, statut_article, image_article)
* `CATEGORIE` (id_categorie, nom_categorie)

---

## Partie 1 — Théorie

### 1.1. Du MCD au MLD

Le **MLD** (Modèle Logique de Données) est une étape de traduction directe. Il prépare le terrain pour la base de données réelle (ex: MySQL). 
Les règles de transformation de base sont très simples :
* Chaque **Entité** du MCD devient une **Table** dans le MLD.
* Chaque **Attribut** de l'entité devient une **Colonne** de la table.
* L'**Identifiant** de l'entité devient la **Clé Primaire** de la table.

### 1.2. La Clé Primaire (PK)

La Clé Primaire (en anglais *Primary Key* - **PK**) est une contrainte de base de données qui garantit qu'une ligne est unique.
* **Règle absolue** : Toute table relationnelle *doit impérativement* avoir une clé primaire.
* **Notation standard** : On ajoute l'annotation `(PK)` juste à côté du nom de la colonne identifiante (exemple : `id_ville (PK)`).

### 1.3. Ignorer les relations pour l'instant

* Concentrez-vous uniquement sur la structure interne des entités.
* Ne tracez aucun lien entre les tables à ce stade. Les relations et les cardinalités feront l'objet d'un autre ensemble de règles spécifiques (les clés étrangères) lors de la prochaine étape.

---

## Partie 2 — Pratique

### 2.1. Transformer les 4 entités

Prenez chaque entité de votre MCD, et réécrivez-la formellement en tant que table, en n'oubliant pas la mention `PK`.

**Exemple de transformation avec VILLE :**
```text
Table : VILLE
-------------
id_ville (PK)
nom_ville
```

### 2.2. Travail à faire

Appliquez cette règle de traduction directe aux 4 entités de votre blog (`VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`).

## Livrable

Créez un fichier texte structuré listant la définition de vos 4 nouvelles tables.
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

* Vos 4 entités sont clairement présentées comme 4 tables distinctes.
* Chaque table possède exactement les mêmes colonnes que les attributs d'origine.
* Chaque ancien identifiant est clairement marqué du sceau `(PK)`.
* Vous n'avez pas encore introduit de clé étrangère ou de relations entre les tables.

---

## Bilan

### Vous avez appris :
* La toute première règle de traduction du MCD au MLD : Transformer une Entité en Table.
* L'importance et la notation de la contrainte Primary Key (`PK`).

Dans le tutoriel suivant, vous découvrirez comment traduire les relations conceptuelles qui unissent ces tables, grâce au mécanisme des clés étrangères (`FK`).

## Glossaire

* **MLD (Modèle Logique de Données)** : Représentation relationnelle structurée sous forme de tables.
* **Table** : Structure de stockage en base de données, composée de colonnes et destinée à contenir des lignes d'enregistrement.
* **Colonne** : Un champ de donnée précis au sein d'une table.
* **PK (Primary Key / Clé Primaire)** : Contrainte imposant qu'une colonne identifie de manière unique chaque ligne de la table.
