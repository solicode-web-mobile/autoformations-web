---
title: "Transformer les relations en clés étrangères"
layout: tuto
slug: "transformer-relations-cles-etrangeres"
permalink: /tutos/:slug/compact
tuto_id: "T.112.152"
type: "classique"
version: "compact"
ua: "UA.112.15"
nav_order: 11
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Transformer les relations **1–N** du MCD en **clés étrangères** (FK) dans le MLD.

Vous allez apprendre à :
* repérer le côté "1" et le côté "N" d'une relation ;
* placer la clé étrangère dans la bonne table ;
* annoter la clé étrangère (`FK`).

## 2. Prérequis

* Les 4 tables simples (T.112.151).
* Les cardinalités validées (T.112.141).

## Données de départ

Vos tables simples : `VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`.

Vos relations (1-N) :
* `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
* `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
* `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. La règle du "1 vers N"

Comment relier deux tables ? En copiant la Clé Primaire (`PK`) d'une table dans l'autre.
* **La règle d'or** : La table du côté `(0,N)` ou `(1,N)` donne sa clé à la table du côté `(0,1)` ou `(1,1)`.
* Autrement dit : **Le "1" reçoit la clé du "N".**

### 1.2. La Clé Étrangère (FK)

Cette clé copiée devient une **Clé Étrangère** (*Foreign Key* - **FK**).
* Elle permet de faire le lien entre la ligne actuelle et une ligne d'une autre table.
* **Notation** : On ajoute `(FK)` à côté de la colonne (ex: `id_ville (FK)`).

### 1.3. Exemple

`VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
* `AUTEUR` est du côté (1,1). Il reçoit.
* `VILLE` est du côté (0,N). Il donne.
* Résultat : La table `AUTEUR` reçoit la colonne `id_ville (FK)`.

---

## Partie 2 — Pratique

### 2.1. Appliquer la règle

Reprenez vos 4 tables simples.
Pour chaque relation, déterminez qui donne sa PK et qui la reçoit comme FK.

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

Appliquez cette logique pour les 3 relations. Ajoutez les clés étrangères nécessaires dans vos tables `AUTEUR` et `ARTICLE`.

## Livrable

Un fichier texte contenant vos 4 tables, incluant cette fois-ci les `FK`.
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

* L'entité `AUTEUR` contient `id_ville (FK)`.
* L'entité `ARTICLE` contient `id_auteur (FK)` et `id_categorie (FK)`.
* Les entités `VILLE` et `CATEGORIE` ne contiennent aucune FK.

---

## Bilan

### Vous avez appris :
* La règle de migration des identifiants pour les relations 1-N.
* À matérialiser un lien entre deux tables via une Clé Étrangère (`FK`).

Dans le prochain (et dernier) tutoriel, vous apprendrez à traiter le cas particulier des relations N-N.

## Glossaire

* **FK (Foreign Key)** : Clé étrangère, c'est-à-dire une copie de la clé primaire d'une autre table, servant à créer un lien relationnel.
* **Relation 1-N** : Relation où l'un des côtés a pour maximum "1", et l'autre côté a pour maximum "N".
