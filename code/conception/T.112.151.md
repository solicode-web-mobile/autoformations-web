---
layout: conception
title: "Tables relationnelles — Blog"
tuto_id: "T.112.151"
permalink: /code/conception/T.112.151/
---

## Tables et clés primaires

### Table VILLE

```
VILLE
-----
id_ville         PK
nom_ville
```

### Table AUTEUR

```
AUTEUR
------
id_auteur        PK
nom_auteur
prenom_auteur
email_auteur
```

### Table ARTICLE

```
ARTICLE
-------
id_article       PK
titre_article
contenu_article
date_publication
statut_article
image_article
```

### Table CATEGORIE

```
CATEGORIE
---------
id_categorie     PK
nom_categorie
```
