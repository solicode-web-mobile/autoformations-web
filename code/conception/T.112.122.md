---
layout: conception
title: "Résultat — Identifier et décrire les données d'une maquette"
tuto_id: "T.112.122"
permalink: /code/conception/T.112.122/
nav_exclude: true
---

## Correction : Dictionnaire de données — Page Détail d'un article

| Donnée | Description | Exemple de valeur | Type | Obligatoire | Calculée |
| :--- | :--- | :--- | :--- | :---: | :---: |
| `titre_article` | Titre de l'article | Mon premier article | Texte | Oui | Non |
| `contenu_article` | Contenu complet de l'article | Le développement web est… | Texte | Oui | Non |
| `nom_auteur` | Nom de famille de l'auteur | Madani | Texte | Oui | Non |
| `prenom_auteur` | Prénom de l'auteur | Ali | Texte | Oui | Non |
| `date_publication` | Date de publication de l'article | 14/02/2026 | Date | Oui | Non |
| `nom_categorie` | Catégorie de l'article | Développement | Texte | Oui | Non |
| `image_article` | Image de couverture | (fichier image) | Texte | Non | Non |
| `duree_lecture` | Durée de lecture estimée (déduite du contenu) | 5 | Entier | Non | **Oui** |
