---
layout: conception
title: "Les 4 entités du Blog"
tuto_id: "T.112.133"
permalink: /code/conception/T.112.133/
nav_exclude: true
---

## Entités construites

### ARTICLE

```
ARTICLE
-------
id_article       ← identifiant
titre_article
contenu_article
date_publication
statut_article
image_article
```

### AUTEUR

```
AUTEUR
------
id_auteur        ← identifiant
nom_auteur
prenom_auteur
email_auteur
```

### VILLE

```
VILLE
-----
id_ville         ← identifiant
nom_ville
```

### CATEGORIE

```
CATEGORIE
---------
id_categorie     ← identifiant
nom_categorie
```

## Dépendances fonctionnelles

```
id_article   → titre_article, contenu_article, date_publication, statut_article, image_article
id_auteur    → nom_auteur, prenom_auteur, email_auteur
id_ville     → nom_ville
id_categorie → nom_categorie
```
