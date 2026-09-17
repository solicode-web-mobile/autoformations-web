---
layout: conception
title: "Répétitions identifiées — Données du Blog"
tuto_id: "T.112.131"
permalink: /code/conception/T.112.131/
nav_exclude: true
---

## Tableau observé

| `titre_article`                     | `nom_auteur` | `nom_categorie` |
| ----------------------------------- | ------------ | --------------- |
| Débuter avec Tailwind CSS           | Madani       | Développement   |
| L'importance des micro-interactions | Sara         | Design UI/UX    |
| Optimiser ses requêtes SQL          | Madani       | Développement   |
| Gérer son temps avec Notion         | Youssef      | Productivité    |
| CSS Grid en 10 minutes              | Sara         | Développement   |

## Répétitions détectées

| Colonne          | Répétition ? | Valeurs répétées                      | Interprétation                                 |
| ---------------- | :----------: | ------------------------------------- | ---------------------------------------------- |
| `titre_article`  | Non          | —                                     | Chaque article a un titre unique               |
| `nom_auteur`     | **Oui**      | Madani (×2), Sara (×2)               | Un auteur peut écrire plusieurs articles       |
| `nom_categorie`  | **Oui**      | Développement (×3)                   | Une catégorie regroupe plusieurs articles      |

## Signal des répétitions

- `nom_auteur` est répété → un **auteur** existe indépendamment de ses articles.
- `nom_categorie` est répété → une **catégorie** existe indépendamment des articles qu'elle regroupe.
