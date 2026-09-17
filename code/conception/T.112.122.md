---
layout: conception
title: "Résultat attendu — Dictionnaire de données complet du Blog"
tuto_id: "T.112.122"
permalink: /code/conception/T.112.122/
nav_exclude: true
---

## Dictionnaire de données complet

Voici le regroupement de toutes les données identifiées sur l'ensemble des maquettes (Publiques et Administration) du Blog.

| Donnée                | Description                                       | Exemple de valeur                                         | Type    | Obligatoire | Calculée |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------- | ------- | :---------: | :------: |
| `email_admin`         | Adresse email de l'administrateur / auteur        | admin@blog.com                                            | Texte   | Oui         | Non      |
| `mot_de_passe_admin`  | Mot de passe de l'administrateur                  | (masqué)                                                  | Texte   | Oui         | Non      |
| `nom_auteur`          | Nom de famille de l'auteur                        | Madani                                                    | Texte   | Oui         | Non      |
| `prenom_auteur`       | Prénom de l'auteur                                | Ali                                                       | Texte   | Oui         | Non      |
| `biographie_auteur`   | Courte présentation de l'auteur                   | Passionné par le développement web...                     | Texte   | Non         | Non      |
| `titre_article`       | Titre de l'article                                | Comment structurer ses composants UI avec Atomic Design ? | Texte   | Oui         | Non      |
| `contenu_article`     | Contenu complet de l'article                      | Le développement web est un domaine passionnant...        | Texte   | Oui         | Non      |
| `image_article`       | Image d'illustration de l'article                 | (fichier image)                                           | Texte   | Non         | Non      |
| `date_publication`    | Date à laquelle l'article a été ou sera publié    | 14 Février 2026                                           | Date    | Non         | Non      |
| `statut_article`      | État actuel de l'article (Publié, Brouillon...)   | Publié                                                    | Texte   | Oui         | Non      |
| `duree_lecture`       | Durée estimée de lecture en minutes               | 5                                                         | Entier  | Non         | Oui      |
| `nom_categorie`       | Nom de la catégorie de l'article                  | Développement                                             | Texte   | Oui         | Non      |
| `description_categorie`| Description détaillée de la catégorie            | Tous les articles liés au développement logiciel...       | Texte   | Non         | Non      |
| `nombre_articles`     | Nombre total d'articles dans la catégorie (Stats) | 42                                                        | Entier  | Non         | Oui      |

*(Note : Selon votre niveau d'observation, vous pouvez avoir identifié quelques données supplémentaires. L'important est qu'elles respectent la structure, la convention de nommage, et qu'il n'y ait pas de doublons).*
