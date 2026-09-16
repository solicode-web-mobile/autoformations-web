---
layout: conception
title: "MLD complet — Blog"
tuto_id: "T.112.153"
permalink: /code/conception/T.112.153/
---

## Modèle Logique de Données (MLD)

### Tables principales

```
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
ville_id         FK

CATEGORIE
---------
id_categorie     PK
nom_categorie

TAG
---
id_tag           PK
nom_tag

ARTICLE
-------
id_article       PK
titre_article
contenu_article
date_publication
statut_article
image_article
auteur_id        FK
categorie_id     FK
```

### Table de liaison (Relation N-N)

```
ARTICLE_TAG
-----------
article_id       FK
tag_id           FK
```

## Références entre les tables

```
auteur.ville_id      → ville.id_ville
article.auteur_id    → auteur.id_auteur
article.categorie_id → categorie.id_categorie
article_tag.article_id → article.id_article
article_tag.tag_id     → tag.id_tag
```
