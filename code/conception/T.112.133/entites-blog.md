---
layout: conception
title: "Résultat - Construire les entités"
nav_exclude: true
---

# Résultat attendu : Construire les entités

Voici la liste finale des entités construites à partir du dictionnaire de données complet du Blog.
Remarquez que les répétitions textuelles ont été remplacées par des identifiants (les clés étrangères).

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
id_auteur
id_categorie

AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville

VILLE
-----
id_ville
nom_ville

CATEGORIE
---------
id_categorie
nom_categorie
description_categorie
```

*(Note : Votre dictionnaire personnel comprenait peut-être d'autres données comme `id_commentaire` ou `id_mot_cle`. Le principe de regroupement et de remplacement reste exactement le même pour ces entités supplémentaires).*

