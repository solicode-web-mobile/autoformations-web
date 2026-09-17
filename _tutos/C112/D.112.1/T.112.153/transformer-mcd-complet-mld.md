---
title: "Transformer le MCD complet en MLD"
layout: tuto
slug: "transformer-mcd-complet-mld"
permalink: /tutos/:slug/
tuto_id: "T.112.153"
type: "classique"
version: "normal"
ua: "UA.112.15"
nav_order: 12
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Réaliser seul la **transformation complète** du MCD du Blog en MLD.

Vous allez aussi apprendre à transformer une **relation N–N** en créant une **table de liaison**.

Vous allez apprendre à :

* transformer les entités en tables ;
* transformer les relations 1–N en clés étrangères ;
* identifier une relation N–N ;
* créer une table de liaison ;
* placer les deux clés étrangères dans cette table ;
* vérifier le MLD complet.

## 2. Prérequis

* Savoir transformer une entité en table (T.112.151).
* Savoir transformer une relation 1–N en clé étrangère (T.112.152).
* Savoir lire le MCD complet du Blog (T.112.142).

## Données de départ

Le MCD validé du Blog contient les quatre entités :

```text id="5vyh0n"
VILLE
AUTEUR
ARTICLE
CATEGORIE
```

Les relations 1–N sont :

```text id="72ux6s"
VILLE (0,N) ─── habite ─── (1,1) AUTEUR

AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE

CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

Les tables obtenues dans les tutoriels précédents sont donc :

```text id="eu5w6h"
VILLE
-----

id_ville PK
nom_ville
```

```text id="vzq4e3"
AUTEUR
------

id_auteur PK
nom_auteur
prenom_auteur
email_auteur
ville_id FK
```

```text id="z29n5n"
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

```text id="x9u2vu"
CATEGORIE
---------

id_categorie PK
nom_categorie
```

### Extension pédagogique — relation N–N

Pour apprendre à transformer une relation N–N, on ajoute pour cet exercice une nouvelle réalité :

```text id="pmr1co"
TAG
---

id_tag
nom_tag
```

Cette extension est indépendante du MCD Blog validé dans T.112.142.

La relation fournie pour l'exercice est :

```text id="b5smjq"
ARTICLE (0,N) ─── possède ─── (0,N) TAG
```

---

## Partie 1 — Théorie

### 1.1. Rappel : transformer un MCD en MLD

La transformation suit plusieurs règles.

```text id="1be8ir"
Entité → Table
Attribut → Colonne
Identifiant → Clé primaire
Relation 1–N → Clé étrangère
Relation N–N → Table de liaison
```

### 1.2. Transformer une relation 1–N

Pour une relation 1–N :

```text id="z0itj5"
TABLE_1 (1) ─── relation ─── (N) TABLE_2
```

la règle est :

> La table du **côté N** reçoit la clé étrangère.

La FK référence la PK de la table du côté 1.

Exemple :

```text id="kifx7j"
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

La relation devient :

```text id="86nj6y"
auteur.ville_id → ville.id_ville
```

### 1.3. Pourquoi une relation N–N pose un problème ?

Considérons :

```text id="f1v8za"
ARTICLE (0,N) ─── possède ─── (0,N) TAG
```

Un article peut avoir plusieurs tags.

Un tag peut être associé à plusieurs articles.

Une seule colonne ne suffit pas.

Par exemple, cette solution est incorrecte :

```text id="4pqtsj"
ARTICLE

id_article
tag_id
```

Un article pourrait avoir plusieurs tags. Une seule colonne `tag_id` ne permettrait pas de représenter toutes les associations.

Cette autre solution est également incorrecte :

```text id="thfwzj"
TAG

id_tag
article_id
```

Un même tag peut être associé à plusieurs articles.

### 1.4. La solution : la table de liaison

Pour une relation N–N, on crée une nouvelle table.

```text id="p5v20p"
ARTICLE_TAG
-----------
article_id
tag_id
```

Cette table représente chaque association entre un article et un tag.

Exemple :

```text id="qz9mdq"
article_id | tag_id
-----------|-------
1          | 5
1          | 8
2          | 5
```

Cela signifie :

```text id="2l7rpn"
Article 1 → Tag 5
Article 1 → Tag 8
Article 2 → Tag 5
```

### 1.5. Les deux clés étrangères

La table de liaison contient deux clés étrangères :

```text id="nnst6u"
article_id → article.id_article

tag_id → tag.id_tag
```

Elle relie ainsi les deux tables.

### 1.6. Clé primaire composée

Dans une table de liaison simple, on peut utiliser la combinaison des deux clés étrangères comme clé primaire.

```text id="9oofkq"
ARTICLE_TAG
-----------

article_id PK, FK
tag_id     PK, FK
```

La combinaison :

```text id="mqwz1j"
(article_id, tag_id)
```

permet d'éviter de créer deux fois la même association.

### 1.7. Vue complète de la transformation

Pour construire le MLD complet :

**Étape 1**

Transformer les entités en tables.

**Étape 2**

Transformer les relations 1–N en clés étrangères.

**Étape 3**

Transformer les relations N–N en tables de liaison.

**Étape 4**

Ajouter les clés étrangères des tables de liaison.

**Étape 5**

Vérifier toutes les références.

### 1.8. À retenir

* Une entité devient une table.
* Une relation 1–N devient une FK dans la table du côté N.
* Une relation N–N devient une nouvelle table de liaison.
* La table de liaison contient une FK vers chacune des deux tables.
* Les deux FK peuvent former une clé primaire composée.
* Le MLD final doit représenter toutes les données et tous les liens du modèle.

---

## Partie 2 — Pratique

### 2.1. Reprendre les tables du Blog

Commencez par les tables obtenues dans T.112.151 et T.112.152.

### VILLE

```text id="jvqoy9"
VILLE
-----

id_ville PK
nom_ville
```

### AUTEUR

```text id="2t3k3u"
AUTEUR
------

id_auteur PK
nom_auteur
prenom_auteur
email_auteur
ville_id FK
```

Référence :

```text id="4f5fiu"
auteur.ville_id → ville.id_ville
```

### ARTICLE

```text id="d2p3oc"
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

Références :

```text id="s1wdrm"
article.auteur_id → auteur.id_auteur

article.categorie_id → categorie.id_categorie
```

### CATEGORIE

```text id="3p34uy"
CATEGORIE
---------

id_categorie PK
nom_categorie
```

### 2.2. Ajouter l'entité TAG

Pour l'exercice N–N, utilisez l'entité fournie :

```text id="p7mww4"
TAG
---

id_tag
nom_tag
```

Elle devient :

```text id="1t4ryq"
TAG
---

id_tag PK
nom_tag
```

### 2.3. Transformer la relation ARTICLE — TAG

La relation est :

```text id="v2fu58"
ARTICLE (0,N) ─── possède ─── (0,N) TAG
```

Les deux côtés ont un maximum `N`.

Il s'agit donc d'une relation **N–N**.

### Étape 1 — Créer la table de liaison

Créez :

```text id="ci1y6h"
ARTICLE_TAG
-----------
article_id
tag_id
```

### Étape 2 — Ajouter les deux clés étrangères

```text id="o4spcq"
ARTICLE_TAG
-----------

article_id FK
tag_id FK
```

### Étape 3 — Définir la clé primaire composée

Utilisez :

```text id="02lyln"
article_id PK, FK
tag_id     PK, FK
```

### Étape 4 — Écrire les références

```text id="g6ffqi"
article_tag.article_id → article.id_article

article_tag.tag_id → tag.id_tag
```

### 2.4. MLD complet

Le MLD obtenu est :

```text id="x0p7l1"
VILLE
-----

id_ville PK
nom_ville
```

```text id="g3sx5b"
AUTEUR
------

id_auteur PK
nom_auteur
prenom_auteur
email_auteur
ville_id FK
```

```text id="yj5b88"
CATEGORIE
---------

id_categorie PK
nom_categorie
```

```text id="3p3b0c"
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

```text id="0d1q1t"
TAG
---

id_tag PK
nom_tag
```

```text id="t6zvr6"
ARTICLE_TAG
-----------

article_id PK, FK
tag_id PK, FK
```

### 2.5. Références complètes

```text id="n4u8q6"
auteur.ville_id → ville.id_ville

article.auteur_id → auteur.id_auteur

article.categorie_id → categorie.id_categorie

article_tag.article_id → article.id_article

article_tag.tag_id → tag.id_tag
```

### 2.6. Vérifier le MLD

| Vérification                                 | Résultat attendu |
| -------------------------------------------- | ---------------- |
| `VILLE` possède une PK                       | Oui              |
| `AUTEUR` possède une PK                      | Oui              |
| `ARTICLE` possède une PK                     | Oui              |
| `CATEGORIE` possède une PK                   | Oui              |
| `TAG` possède une PK                         | Oui              |
| `AUTEUR` contient `ville_id`                 | Oui              |
| `ARTICLE` contient `auteur_id`               | Oui              |
| `ARTICLE` contient `categorie_id`            | Oui              |
| `ARTICLE_TAG` contient `article_id`          | Oui              |
| `ARTICLE_TAG` contient `tag_id`              | Oui              |
| Les cinq références sont correctes           | Oui              |
| La relation N–N possède une table de liaison | Oui              |

### 2.7. Travail à faire

À partir du MCD du Blog et de l'extension N–N fournie :

1. transformez toutes les entités en tables ;
2. transformez toutes les relations 1–N en clés étrangères ;
3. ajoutez l'entité `TAG` fournie ;
4. transformez la relation N–N `ARTICLE — TAG` ;
5. créez la table `ARTICLE_TAG` ;
6. ajoutez ses deux clés étrangères ;
7. définissez sa clé primaire composée ;
8. listez toutes les références PK → FK.

**Livrable :**

```text id="xpyf8s"
mld-blog.md
```

Le document doit contenir :

* toutes les tables ;
* leurs colonnes ;
* les PK ;
* les FK ;
* la table de liaison ;
* les références entre les tables.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.153/' | relative_url }}"
    height="750"
    title="Résultat attendu — MLD complet du Blog">
</iframe>

**Critère de réussite :**

Le MLD :

* contient les quatre tables issues du MCD du Blog ;
* contient la table `TAG` de l'extension pédagogique ;
* contient la table de liaison `ARTICLE_TAG` ;
* place correctement les FK des relations 1–N ;
* représente correctement la relation N–N ;
* utilise correctement les PK ;
* contient toutes les références PK → FK ;
* ne crée pas de colonne permettant de stocker plusieurs valeurs dans une seule colonne.

## Bilan

**Vous avez réalisé :**

La transformation complète du MCD en MLD, avec les relations 1–N et une relation N–N.

**Vous savez maintenant :**

* transformer un MCD complet en MLD ;
* transformer une relation 1–N en clé étrangère ;
* reconnaître une relation N–N ;
* créer une table de liaison ;
* placer les deux clés étrangères dans une table de liaison ;
* utiliser une clé primaire composée dans une table de liaison simple.

## Glossaire

* **MLD** : Modèle Logique de Données représentant les données sous forme de tables.
* **Relation N–N** : relation dans laquelle les deux côtés peuvent être liés à plusieurs occurrences.
* **Table de liaison** : table créée pour représenter une relation N–N.
* **Clé étrangère (FK)** : colonne qui référence une clé primaire d'une autre table.
* **Clé primaire (PK)** : colonne ou groupe de colonnes qui identifie une ligne de manière unique.
* **Clé primaire composée** : clé primaire formée de plusieurs colonnes.
* **Référence** : lien entre une FK et la PK qu'elle référence.
