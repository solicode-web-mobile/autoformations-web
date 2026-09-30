---
title: "Transformer les relations en clés étrangères"
layout: tuto
slug: "transformer-relations-cles-etrangeres"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.152"
type: "classique"
version: "detaille"
ua: "UA.112.15"
nav_order: 11
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Cette étape est cruciale : il s'agit de relier physiquement vos tables entre elles. L'objectif de ce tutoriel est de transformer pas-à-pas les relations **1–N** (Un-à-Plusieurs) de votre MCD en véritables **clés étrangères** (FK) dans le Modèle Logique de Données (MLD).

Dans ce tutoriel détaillé, vous allez apprendre à :
* analyser une relation pour y repérer avec certitude le côté "1" et le côté "N" ;
* comprendre et appliquer sans erreur la règle de migration des identifiants ;
* placer la clé étrangère du bon côté (dans la bonne table) ;
* annoter proprement et professionnellement la clé étrangère (`FK`).

## 2. Prérequis

* Avoir parfaitement transformé vos entités abstraites en tables simples avec leur clé primaire `(PK)` (T.112.151).
* Avoir défini avec exactitude les cardinalités de votre modèle (T.112.141), car tout repose sur elles désormais.

## Données de départ

Vos tables simples actuelles, prêtes à être reliées : `VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`.

Vos relations métier (remarquez qu'elles sont toutes de type 1-N, ce qui est le cas le plus fréquent) :
* `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
* `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
* `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. La règle fondamentale du "1 vers N"

Comment relier deux tables physiquement dans une base de données ? Le principe est génialement simple : on copie la Clé Primaire (`PK`) de l'une pour l'insérer comme simple colonne dans l'autre. Mais dans quel sens faire la copie sans créer d'incohérence ?
* **La règle d'or universelle** : La table située du côté de la cardinalité maximale "N" (donc `0,N` ou `1,N`) donne sa clé primaire à la table située du côté de la cardinalité maximale "1" (donc `0,1` ou `1,1`).
* Pour s'en souvenir facilement, on dit souvent : **Le "1" reçoit la clé du "N".**

### 1.2. La Clé Étrangère (FK)

Cette clé qui vient d'être copiée (du côté N) et collée dans la nouvelle table (du côté 1) porte un nom très précis en bases de données : c'est une **Clé Étrangère** (en anglais *Foreign Key* - abrégé **FK**).
* Son rôle unique est de permettre au moteur de la base de données de faire le lien relationnel entre la ligne actuelle et une ligne parente située dans une autre table. Sans elle, vos tables s'ignoreraient totalement.
* **Notation standard** : Sur les modèles professionnels, on ajoute systématiquement l'annotation `(FK)` juste à côté du nom de la colonne migrée (exemple : `id_ville (FK)` dans la table Auteur). Parfois, si elle fait aussi partie de la PK (nous verrons cela plus tard), elle sera notée `(PK, FK)`.

### 1.3. Exemple détaillé d'application

Décortiquons ensemble la relation `habite` :
`VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
1. On regarde la cardinalité côté `AUTEUR` : elle est de `(1,1)`. Le maximum est 1. La table Auteur est donc le côté "1". C'est elle qui **reçoit** la clé.
2. On regarde la cardinalité côté `VILLE` : elle est de `(0,N)`. Le maximum est N. La table Ville est donc le côté "N". C'est elle qui **donne** sa clé.
3. **Résultat** : La clé primaire de VILLE (`id_ville`) est copiée, et vient se loger dans la table `AUTEUR` sous la forme d'une nouvelle colonne nommée `id_ville (FK)`. La relation est désormais physiquement établie !

---

## Partie 2 — Pratique

### 2.1. Appliquer la règle

Reprenez méticuleusement les 4 tables simples que vous avez créées au tutoriel précédent.
Pour chacune des 3 relations listées dans les données de départ, posez-vous la question : qui donne sa PK (le côté N) et qui la reçoit comme FK (le côté 1) ? Puis ajoutez la colonne.

**Voici l'état de la table AUTEUR après l'ajout de sa Clé Étrangère :**
```text
Table : AUTEUR
--------------
id_auteur (PK)
nom_auteur
prenom_auteur
email_auteur
id_ville (FK)  <-- La clé de la ville vient d'arriver ici
```

### 2.2. Travail à faire

Appliquez cette même logique mathématique, sans jamais déroger à la règle, pour les 3 relations de votre Blog. 
Ajoutez les clés étrangères nécessaires dans vos tables `AUTEUR` et `ARTICLE`.

## Livrable

Mettez à jour votre fichier texte ou votre schéma contenant vos 4 tables, en incluant cette fois-ci toutes les `FK` exactement aux bons endroits.
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

Votre formateur vérifiera que vous n'avez pas inversé le sens de la relation :
* L'entité `AUTEUR` a bien reçu une seule clé : la colonne `id_ville (FK)`.
* L'entité `ARTICLE` (qui est du côté "1" pour deux relations différentes) a bien reçu **deux** colonnes étrangères : `id_auteur (FK)` et `id_categorie (FK)`.
* Les entités `VILLE` et `CATEGORIE` n'ont reçu aucune clé étrangère, elles sont parfaitement indépendantes.

---

## Bilan

### Vous avez appris :
* L'implacable règle de migration des identifiants (le "1 reçoit du N") pour toutes les relations de type 1-N.
* À matérialiser physiquement et informatiquement un lien abstrait entre deux tables via l'utilisation d'une Clé Étrangère (`FK`).

Félicitations, vous maîtrisez 90% des cas de transformation en bases de données ! 
Dans le prochain et tout dernier tutoriel de conception, vous apprendrez à traiter le seul cas problématique qui nous échappe encore : les fameuses relations N-N (Plusieurs-à-Plusieurs).

## Glossaire

* **FK (Foreign Key / Clé Étrangère)** : Colonne qui est une copie exacte de la clé primaire d'une autre table, placée ici dans le but exclusif de créer un lien relationnel fort (une "contrainte d'intégrité") entre les deux tables.
* **Relation 1-N (One-to-Many)** : Relation de très loin la plus courante, où l'un des côtés a pour cardinalité maximale "1" (l'enfant qui reçoit la clé), et l'autre côté a pour cardinalité maximale "N" (le parent qui donne sa clé).
