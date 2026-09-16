---
layout: conception
title: "Clés étrangères — Blog"
tuto_id: "T.112.152"
permalink: /code/conception/T.112.152/
---

## Tables avec clés étrangères (FK)

### Table ARTICLE

La table `ARTICLE` est du côté (1,1) pour les relations avec `AUTEUR` et `CATEGORIE`. Elle reçoit donc deux clés étrangères.

```
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

## Références

```
article.auteur_id    → auteur.id_auteur
article.categorie_id → categorie.id_categorie
```
