---
title: "Transformer les relations en clés étrangères"
layout: tuto
slug: "transformer-relations-cles-etrangeres"
permalink: /tutos/:slug/
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

Apprendre à transformer une **relation 1–N** du MCD en **clé étrangère** dans le MLD.

Créer le lien entre deux tables pour refléter la relation.

## 2. Prérequis

- Avoir transformé les entités en tables et identifié les clés primaires (T.112.151).
- Connaître les relations et les cardinalités (T.112.141).

## Données de départ

Nous reprenons la relation entre les auteurs et les villes :

```text
VILLE (1,N) ─── habite ─── (1,1) AUTEUR
```

Et les deux tables correspondantes créées en T.112.151 :

```text
VILLE
-----
id_ville         PK
nom_ville

AUTEUR
------
id_auteur        PK
nom_auteur
prenom_auteur
email_auteur
```

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une clé étrangère (FK) ?

Une **clé étrangère** (Foreign Key - FK) est une colonne dans une table qui fait **référence** à la clé primaire (PK) d'une autre table.

C'est elle qui crée physiquement le lien entre les deux tables dans la base de données.

### 1.2. Relation 1–N : La règle d'or

Quand on a une relation 1–N entre deux entités, la règle de transformation en MLD est stricte :

> **La table côté (1,1) reçoit la clé étrangère.**
> **Cette clé étrangère pointe vers la clé primaire de la table côté (1,N).**

**Exemple :**

Dans la relation `VILLE (1,N) ─── habite ─── (1,1) AUTEUR` :

- Le côté (1,1) est `AUTEUR`. C'est donc la table `AUTEUR` qui recevra la clé étrangère.
- Le côté (1,N) est `VILLE`. La clé étrangère pointera vers la clé primaire de `VILLE` (`id_ville`).

### 1.3. Nommer une clé étrangère

Pour que la clé étrangère soit claire, on la nomme généralement avec le nom de l'entité référencée suivi de `_id`.

**Exemple :**

Pour faire référence à `VILLE`, la colonne clé étrangère dans `AUTEUR` s'appellera `ville_id`.

### 1.4. Notation de la référence

On note le lien entre la clé étrangère et la clé primaire qu'elle référence de cette manière :

```text
table_contenant_fk.colonne_fk → table_referencee.colonne_pk
```

**Exemple :**

```text
auteur.ville_id → ville.id_ville
```

### 1.5. À retenir

- Une clé étrangère (FK) fait référence à la clé primaire (PK) d'une autre table.
- Dans une relation 1–N, la clé étrangère va dans la table du côté de la cardinalité (1,1).
- La FK porte le nom de la table référencée suivi de `_id`.
- On note la référence pour indiquer clairement le lien.

## Partie 2 — Pratique

### 2.1. Transformer la relation AUTEUR - VILLE

#### Étape 1 — Identifier le côté (1,1)

MCD : `VILLE (1,N) ─── habite ─── (1,1) AUTEUR`

La table `AUTEUR` est du côté (1,1). C'est elle qui va recevoir la clé étrangère.

#### Étape 2 — Ajouter la clé étrangère

On ajoute une colonne `ville_id` dans la table `AUTEUR`.

```text
AUTEUR
------
id_auteur        PK
nom_auteur
prenom_auteur
email_auteur
ville_id         FK
```

#### Étape 3 — Écrire la référence

On note que `ville_id` pointe vers `id_ville` de la table `VILLE`.

```text
auteur.ville_id → ville.id_ville
```

La relation est maintenant transformée dans le MLD !

---

### 2.2. Travail à faire

**Consigne :**

Transformez les deux autres relations 1–N du Blog en clés étrangères dans le MLD.

Rappel des relations :

1. `AUTEUR (1,N) ─── rédige ─── (1,1) ARTICLE`
2. `CATEGORIE (1,N) ─── regroupe ─── (1,1) ARTICLE`

Pour chaque relation :
1. Ajoutez la clé étrangère dans la bonne table.
2. Écrivez la référence `table.fk → table.pk`.

**Livrable :**

Un document listant les tables avec leurs clés primaires et étrangères, ainsi que les références.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.152/' | relative_url }}"
    height="550"
    title="Résultat attendu — Clés étrangères">
</iframe>

**Critère de réussite :**

Les clés étrangères sont placées dans les bonnes tables (côté 1,1) et les références sont correctement formulées.

## Bilan

**Vous avez réalisé :** La transformation des relations 1–N du MCD en clés étrangères dans le MLD.

**Vous savez maintenant :**

- Placer une clé étrangère dans la bonne table selon les cardinalités (côté 1,1).
- Nommer correctement une clé étrangère (`nom_table_id`).
- Écrire la référence entre une FK et une PK.

## Glossaire

- **Clé étrangère (FK)** : Colonne faisant référence à la clé primaire d'une autre table.
- **Référence** : Le lien entre une clé étrangère et la clé primaire qu'elle pointe.
- **Table référencée** : La table qui contient la clé primaire pointée (côté 1,N).
- **Table contenant la FK** : La table qui reçoit la clé étrangère (côté 1,1).
