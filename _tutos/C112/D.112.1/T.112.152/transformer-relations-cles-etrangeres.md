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

Transformer les relations **1–N** du MCD en **clés étrangères** dans le MLD.

Vous allez apprendre à :

* identifier le côté 1 et le côté N ;
* placer une clé étrangère dans la bonne table ;
* relier une FK à une PK ;
* nommer une clé étrangère ;
* représenter la référence entre deux tables.

## 2. Prérequis

* Savoir transformer les entités en tables et identifier les clés primaires (T.112.151).
* Savoir déterminer les relations et les cardinalités (T.112.141).
* Savoir lire le MCD complet du Blog (T.112.142).

## Données de départ

Le MCD du Blog contient les relations suivantes :

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR

AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE

CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

Les tables produites dans T.112.151 sont :

```text
VILLE
-----

id_ville PK
nom_ville
```

```text
AUTEUR
------

id_auteur PK
nom_auteur
prenom_auteur
email_auteur
```

```text
ARTICLE
-------

id_article PK
titre_article
contenu_article
date_publication
statut_article
image_article
```

```text
CATEGORIE
---------

id_categorie PK
nom_categorie
```

Dans ce tutoriel, on transforme uniquement les **relations 1–N**.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une clé étrangère ?

Une **clé étrangère**, ou **FK** (*Foreign Key*), est une colonne qui référence la clé primaire d'une autre table.

Exemple :

```text
auteur.ville_id → ville.id_ville
```

La colonne `ville_id` de `AUTEUR` référence `id_ville` de `VILLE`.

### 1.2. Relation 1–N : règle de transformation

Pour une relation 1–N :

```text
TABLE_1 (1) ─── relation ─── (N) TABLE_2
```

La règle est :

```text
côté N → reçoit la FK
côté 1 → contient la PK référencée
```

Donc :

```text
TABLE_N.fk → TABLE_1.pk
```

### 1.3. Exemple : VILLE — AUTEUR

Le MCD indique :

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

La ville est du **côté 1**.

L'auteur est du **côté N**.

La FK doit donc être ajoutée dans :

```text
AUTEUR
```

Elle référence :

```text
VILLE.id_ville
```

### 1.4. Nommer une clé étrangère

Dans ce parcours, on utilise la convention :

```text
nom_entite_id
```

Pour référencer `VILLE` :

```text
ville_id
```

Pour référencer `AUTEUR` :

```text
auteur_id
```

Pour référencer `CATEGORIE` :

```text
categorie_id
```

### 1.5. Noter une référence

On peut écrire :

```text
table.fk → table.pk
```

Exemple :

```text
auteur.ville_id → ville.id_ville
```

Cela signifie :

> `ville_id` dans `AUTEUR` référence `id_ville` dans `VILLE`.

### 1.6. Le minimum et la FK

Le minimum de la cardinalité indique si le lien est obligatoire ou facultatif.

Exemple :

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

Le côté `AUTEUR` est `1,1`.

Cela signifie qu'un auteur est lié à exactement une ville dans cette règle.

La FK :

```text
ville_id
```

est donc obligatoire dans le modèle correspondant à cette règle.

Cependant, le choix technique de `NULL` ou `NOT NULL` sera traité plus tard.

### 1.7. À retenir

* Une FK référence une PK d'une autre table.
* Dans une relation 1–N, la FK va dans la table du **côté N**.
* La FK référence la PK de la table du **côté 1**.
* Le nom utilisé est généralement `nom_entite_id`.
* La cardinalité minimale permet de comprendre si le lien est obligatoire ou facultatif.

---

## Partie 2 — Pratique

### 2.1. Transformer la relation VILLE — AUTEUR

Le MCD est :

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

### Étape 1 — Identifier les deux côtés

```text
VILLE → côté 1
AUTEUR → côté N
```

### Étape 2 — Ajouter la FK dans la table côté N

La table `AUTEUR` reçoit :

```text
ville_id
```

Elle devient :

```text
AUTEUR
------

id_auteur PK
nom_auteur
prenom_auteur
email_auteur
ville_id FK
```

### Étape 3 — Écrire la référence

```text
auteur.ville_id → ville.id_ville
```

La relation est maintenant représentée dans le MLD.

---

### 2.2. Transformer la relation AUTEUR — ARTICLE

Le MCD est :

```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

### Étape 1 — Identifier les deux côtés

```text
AUTEUR → côté 1
ARTICLE → côté N
```

### Étape 2 — Ajouter la FK dans ARTICLE

La table `ARTICLE` reçoit :

```text
auteur_id
```

Elle devient :

```text
ARTICLE
-------

id_article PK
titre_article
contenu_article
date_publication
statut_article
image_article
auteur_id FK
```

### Étape 3 — Écrire la référence

```text
article.auteur_id → auteur.id_auteur
```

---

### 2.3. Transformer la relation CATEGORIE — ARTICLE

Le MCD est :

```text
CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

### Étape 1 — Identifier les deux côtés

```text
CATEGORIE → côté 1
ARTICLE → côté N
```

### Étape 2 — Ajouter la FK dans ARTICLE

La table `ARTICLE` reçoit :

```text
categorie_id
```

Elle devient :

```text
ARTICLE
-------

id_article PK
titre_article
contenu_article
date_publication
statut_article
image_article
auteur_id FK
categorie_id FK
```

### Étape 3 — Écrire la référence

```text
article.categorie_id → categorie.id_categorie
```

### 2.4. Vérifier les trois transformations

| Relation MCD          | Côté 1    | Côté N  | Table recevant la FK | FK             |
| --------------------- | --------- | ------- | -------------------- | -------------- |
| `VILLE — AUTEUR`      | VILLE     | AUTEUR  | AUTEUR               | `ville_id`     |
| `AUTEUR — ARTICLE`    | AUTEUR    | ARTICLE | ARTICLE              | `auteur_id`    |
| `CATEGORIE — ARTICLE` | CATEGORIE | ARTICLE | ARTICLE              | `categorie_id` |

Les références sont :

```text
auteur.ville_id → ville.id_ville

article.auteur_id → auteur.id_auteur

article.categorie_id → categorie.id_categorie
```

### 2.5. Travail à faire

À partir du MCD complet du Blog :

1. identifiez le côté 1 et le côté N de chaque relation 1–N ;
2. ajoutez la FK dans la table correspondant au côté N ;
3. choisissez le nom de la FK selon la convention `nom_entite_id` ;
4. écrivez la référence entre chaque FK et sa PK.

Les trois relations à transformer sont :

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR

AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE

CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

**Livrable :**

```text
mld-cles-etrangeres.md
```

Le document doit contenir :

* les tables ;
* les clés primaires ;
* les clés étrangères ;
* les références PK → FK.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.152/' | relative_url }}"
    height="600"
    title="Résultat attendu — Clés étrangères">
</iframe>

**Critère de réussite :**

Les trois relations 1–N sont correctement transformées :

* `ville_id` est dans `AUTEUR` ;
* `auteur_id` est dans `ARTICLE` ;
* `categorie_id` est dans `ARTICLE` ;
* chaque FK référence la bonne PK ;
* aucune FK n'est placée du côté 1.

## Bilan

**Vous avez réalisé :**

La transformation des relations 1–N du MCD en clés étrangères dans le MLD.

**Vous savez maintenant :**

* identifier le côté 1 et le côté N ;
* placer une FK dans la table du côté N ;
* nommer une FK ;
* relier une FK à une PK ;
* représenter une relation 1–N dans le MLD.

Dans le prochain tutoriel, vous apprendrez à **transformer le MCD complet en MLD**, y compris les relations N–N et les tables de liaison.

## Glossaire

* **Clé étrangère (FK)** : colonne qui référence la clé primaire d'une autre table.
* **Clé primaire (PK)** : colonne qui identifie chaque ligne d'une table.
* **Table référencée** : table contenant la clé primaire ciblée par une FK.
* **Table côté N** : table qui peut contenir plusieurs occurrences liées à une même occurrence du côté 1.
* **Référence** : lien entre une FK et la PK qu'elle référence.
* **Relation 1–N** : relation dans laquelle une occurrence du côté 1 peut être liée à plusieurs occurrences du côté N.
