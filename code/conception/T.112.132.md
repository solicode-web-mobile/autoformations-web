---
layout: conception
title: "Entités et dépendances — Blog"
tuto_id: "T.112.132"
permalink: /code/conception/T.112.132/
---

## Entités découvertes

### ARTICLE

```
ARTICLE
-------
id_article       ← identifiant
titre_article
contenu_article
date_publication
```

### AUTEUR

```
AUTEUR
------
id_auteur        ← identifiant
nom_auteur
email_auteur
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
id_article   → titre_article, contenu_article, date_publication
id_auteur    → nom_auteur, email_auteur
id_categorie → nom_categorie
```
