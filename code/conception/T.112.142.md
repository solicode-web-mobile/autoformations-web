---
layout: conception
title: "MCD complet — Blog"
tuto_id: "T.112.142"
permalink: /code/conception/T.112.142/
nav_exclude: true
---

## Entités

| Entité      | Identifiant   | Attributs                                                             |
| ----------- | ------------- | --------------------------------------------------------------------- |
| VILLE       | id_ville      | nom_ville                                                             |
| AUTEUR      | id_auteur     | nom_auteur, prenom_auteur, email_auteur                               |
| ARTICLE     | id_article    | titre_article, contenu_article, date_publication, statut_article, image_article |
| CATEGORIE   | id_categorie  | nom_categorie                                                         |

## Relations et cardinalités

| Entité A  | Cardinalité A | Verbe      | Cardinalité B | Entité B  |
| --------- | :-----------: | ---------- | :-----------: | --------- |
| VILLE     | 1,N           | habite     | 1,1           | AUTEUR    |
| AUTEUR    | 1,N           | rédige     | 1,1           | ARTICLE   |
| CATEGORIE | 1,N           | regroupe   | 1,1           | ARTICLE   |

## MCD textuel

```
VILLE (1,N) ─── habite ─── (1,1) AUTEUR (1,N) ─── rédige ─── (1,1) ARTICLE (1,1) ─── appartient ─── (1,N) CATEGORIE
```
