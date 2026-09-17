---
title: "Transformer les entités en tables"
layout: tuto
slug: "transformer-entites-tables"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.151"
type: "classique"
version: "detaille"
ua: "UA.112.15"
nav_order: 10
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Cette première étape du passage au modèle physique consiste à transformer pas-à-pas les entités abstraites du MCD en **tables relationnelles** concrètes dans ce que l'on appelle le Modèle Logique de Données (MLD).

Dans ce tutoriel détaillé, vous allez apprendre à :
* convertir une entité purement conceptuelle en une véritable table informatique ;
* convertir des attributs en colonnes typées prêtes pour la base de données ;
* comprendre l'importance et transformer l'identifiant unique en Clé Primaire (`PK`).

## 2. Prérequis

* Avoir modélisé de façon exhaustive et vérifié le MCD complet du Blog (T.112.142).
* Avoir bien assimilé la différence entre la théorie métier (MCD) et la réalité de la base de données relationnelle (MLD).

## Données de départ

Vos 4 entités issues de votre patient travail de modélisation MCD constituent votre matière première :
* `VILLE` (id_ville, nom_ville)
* `AUTEUR` (id_auteur, nom_auteur, prenom_auteur, email_auteur)
* `ARTICLE` (id_article, titre_article, contenu_article, date_publication, statut_article, image_article)
* `CATEGORIE` (id_categorie, nom_categorie)

---

## Partie 1 — Théorie

### 1.1. Du MCD au MLD

Le **MLD** (Modèle Logique de Données) est une traduction directe. C'est le plan d'architecture final, celui que vous transmettrez au SGBD (Système de Gestion de Base de Données, comme MySQL, PostgreSQL ou SQL Server) pour générer votre application. 
Les règles mathématiques de cette traduction sont universelles et implacables :
* Chaque **Entité** du MCD (qui représentait une idée) devient une **Table** concrète dans le MLD.
* Chaque **Attribut** de l'entité (les caractéristiques) devient une **Colonne** de la table.
* L'**Identifiant** de l'entité (le numéro arbitraire unique) devient la **Clé Primaire** de la table.

### 1.2. La Clé Primaire (PK)

La Clé Primaire (du terme SQL *Primary Key* - **PK**) est une contrainte majeure de base de données. C'est le pilier du modèle relationnel : elle garantit qu'il n'y aura jamais deux lignes parfaitement identiques dans une table.
* **Règle absolue** : Toute table relationnelle digne de ce nom *doit impérativement* posséder une clé primaire. Sans elle, le système ne peut pas cibler un enregistrement précis.
* **Notation standard** : Sur les schémas professionnels, on ajoute systématiquement l'annotation `(PK)` (ou une icône de petite clé dorée) juste à côté du nom de la colonne identifiante (exemple : `id_ville (PK)`).

### 1.3. Ignorer les relations pour l'instant

* Concentrez-vous *uniquement* sur l'anatomie interne de chaque entité.
* Ne tracez aucun lien, aucune ligne entre les tables à ce stade. Les relations (verbes) et les cardinalités feront l'objet de règles de transformation spécifiques, souvent complexes, liées au mécanisme des *clés étrangères*, que nous aborderons dès la leçon suivante.

---

## Partie 2 — Pratique

### 2.1. Transformer les 4 entités

Prenez rigoureusement chaque entité de votre MCD, et réécrivez-la formellement en tant que table. Mettez en valeur la clé primaire en n'oubliant pas la mention `(PK)`.

**Exemple détaillé de transformation avec l'entité VILLE :**
```text
Table : VILLE
-------------
id_ville (PK)
nom_ville
```
*L'entité Ville est devenue une Table. Son identifiant "id_ville" est désormais officiellement sa Clé Primaire.*

### 2.2. Travail à faire

Appliquez cette règle de traduction directe et systématique aux 4 entités de votre projet de blog (`VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`). Dessinez des boîtes propres, ou faites des listes textuelles claires.

## Livrable

Créez un fichier texte structuré (ou un nouveau schéma dans votre logiciel de modélisation) listant proprement la définition interne de vos 4 nouvelles tables.
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

* Vos 4 entités conceptuelles sont très distinctement présentées comme 4 tables physiques.
* Chaque table possède très exactement les mêmes colonnes que les attributs d'origine (aucun oubli, aucune invention).
* Chaque ancien identifiant est systématiquement et clairement marqué du sceau `(PK)`.
* Vous n'avez anticipé aucune relation : il n'y a pour le moment strictement aucun identifiant étranger (pas d'id_auteur dans l'article, par exemple).

---

## Bilan

### Vous avez appris :
* La toute première et principale règle de traduction du MCD abstrait au MLD concret : Transformer une Entité en Table.
* L'importance cruciale de définir et d'annoter la contrainte Primary Key (`PK`).

Dans le tutoriel suivant, les choses sérieuses commencent : vous allez découvrir comment traduire informatiquement les relations conceptuelles qui unissent ces tables, grâce au très puissant mécanisme des clés étrangères (`FK`).

## Glossaire

* **MLD (Modèle Logique de Données)** : Représentation relationnelle et technique structurée sous forme de tables, prélude au SQL.
* **Table** : Structure fondamentale de stockage en base de données, organisée en colonnes typées, et destinée à contenir des lignes (enregistrements).
* **Colonne (ou Champ)** : Une donnée précise au sein d'une table, issue d'un attribut.
* **PK (Primary Key / Clé Primaire)** : Contrainte SQL majeure imposant qu'une colonne (ou un groupe de colonnes) identifie de manière univoque chaque ligne insérée dans la table.
