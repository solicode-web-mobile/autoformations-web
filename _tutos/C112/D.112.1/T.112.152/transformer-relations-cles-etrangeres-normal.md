---
title: "Transformer les relations en clés étrangères"
layout: tuto
slug: "transformer-relations-cles-etrangeres"
permalink: /tutos/:slug/normal
tuto_id: "T.112.152"
type: "classique"
version: "normal"
ua: "UA.112.15"
nav_order: 11
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

L'objectif de ce tutoriel est de transformer les relations **1–N** (Un-à-Plusieurs) de votre MCD en **clés étrangères** (FK) dans vos tables.

Vous allez apprendre à :
* repérer le côté "1" et le côté "N" d'une relation ;
* appliquer la règle de migration des identifiants ;
* placer la clé étrangère dans la bonne table ;
* annoter proprement la clé étrangère (`FK`).

## 2. Prérequis

* Avoir transformé les entités en tables simples avec leur `PK` (T.112.151).
* Avoir déterminé et validé les cardinalités (T.112.141).

## Données de départ

Vos tables simples actuelles : `VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`.

Vos relations (qui sont toutes des relations 1-N) :
* `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
* `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
* `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. La règle du "1 vers N"

Comment relier deux tables physiquement ? En copiant la Clé Primaire (`PK`) de l'une pour l'insérer dans l'autre. Mais dans quel sens ?
* **La règle d'or** : La table située du côté `(0,N)` (ou `1,N`) donne sa clé primaire à la table située du côté `(0,1)` (ou `1,1`).
* Autrement dit, de manière plus visuelle : **Le côté "1" reçoit toujours la clé du côté "N".**

### 1.2. La Clé Étrangère (FK)

Cette clé qui vient d'être copiée et collée dans la nouvelle table porte un nom précis : c'est une **Clé Étrangère** (en anglais *Foreign Key* - **FK**).
* Elle permet à la base de données de faire le lien entre la ligne actuelle et une ligne correspondante dans une autre table.
* **Notation standard** : On ajoute l'annotation `(FK)` juste à côté de la colonne (exemple : `id_ville (FK)` dans la table Auteur).

### 1.3. Exemple d'application

Prenons la relation `habite` :
`VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
* `AUTEUR` est du côté (1,1) : c'est le côté "1". Donc la table Auteur reçoit la clé.
* `VILLE` est du côté (0,N) : c'est le côté "N". Donc la table Ville donne sa clé.
* **Résultat** : La table `AUTEUR` s'enrichit d'une nouvelle colonne nommée `id_ville (FK)`.

---

## Partie 2 — Pratique

### 2.1. Appliquer la règle

Reprenez les 4 tables simples que vous avez créées au tutoriel précédent.
Pour chaque relation listée dans les données de départ, déterminez qui donne sa PK et qui la reçoit comme FK, puis ajoutez la colonne.

**Table AUTEUR après l'ajout de sa FK :**
```text
Table : AUTEUR
--------------
id_auteur (PK)
nom_auteur
prenom_auteur
email_auteur
id_ville (FK)
```

### 2.2. Travail à faire

Appliquez cette même logique mathématique pour les 3 relations de votre Blog. 
Ajoutez les clés étrangères nécessaires dans vos tables `AUTEUR` et `ARTICLE`.

## Livrable

Mettez à jour votre fichier texte contenant vos 4 tables, en incluant cette fois-ci toutes les `FK` aux bons endroits.
Nom conseillé : `tables-fk.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.152/tables-fk.html' | relative_url }}"
    height="650"
    title="Résultat attendu — Tables avec clés étrangères">
</iframe>

## Critères de réussite

* L'entité `AUTEUR` a bien reçu la colonne `id_ville (FK)`.
* L'entité `ARTICLE` a bien reçu les colonnes `id_auteur (FK)` et `id_categorie (FK)`.
* Les entités `VILLE` et `CATEGORIE` n'ont reçu aucune clé étrangère.

---

## Bilan

### Vous avez appris :
* La règle incontournable de migration des identifiants pour toutes les relations de type 1-N.
* À matérialiser informatiquement un lien entre deux tables via l'utilisation d'une Clé Étrangère (`FK`).

Dans le prochain et tout dernier tutoriel de conception, vous apprendrez à traiter le seul cas qui nous échappe encore : les relations N-N.

## Glossaire

* **FK (Foreign Key / Clé Étrangère)** : Copie de la clé primaire d'une autre table, placée ici dans le but exclusif de créer un lien relationnel entre les deux tables.
* **Relation 1-N** : Relation classique où l'un des côtés a pour cardinalité maximale "1", et l'autre côté a pour cardinalité maximale "N".
