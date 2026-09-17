---
layout: conception
title: "Résultat attendu — Rôle d'une donnée"
tuto_id: "T.112.112"
permalink: /code/conception/T.112.112/
nav_exclude: true
---

## Tableau complété

Voici la correction de l'exercice :

| Donnée          | Situation dans l'application                 | Rôle(s) de la donnée |
| :--- | :--- | :--- |
| `nom_auteur`    | L'utilisateur tape son nom dans le champ     | **Saisie** |
| `nom_auteur`    | Le nom apparaît en haut de l'article publié  | **Affichée** |
| `titre_article` | L'article est enregistré dans la base        | **Stockée** (et persistante) |
| `titre_article` | L'application retrouve le titre 2 mois plus tard | **Persistante** |
| `duree_lecture` | L'application compte les mots et déduit « 5 min » | **Calculée** |
| `texte_brouillon`| L'utilisateur ferme la page sans sauvegarder | **Temporaire** (et saisie) |
