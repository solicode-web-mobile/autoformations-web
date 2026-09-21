---
layout: conception
title: "Résultat — Identifier les données à conserver"
tuto_id: "T.112.121"
permalink: /code/conception/T.112.121/
nav_exclude: true
---

## Correction : Classification des données

| Donnée | Situation dans l'application | État de la donnée |
| :--- | :--- | :---: |
| `titre_article` | L'article est publié et enregistré en base | 🟢 **stockée** |
| `mot_cle` | L'utilisateur tape "Tutoriel" dans la barre de recherche | 🔴 **temporaire** |
| `duree_lecture` | L'application compte les mots et déduit « 5 min » | 🟡 **calculée** |
| `date_publication` | L'application mémorise le jour où l'article a été posté | 🟢 **stockée** |
| `message_erreur` | Un texte rouge "Mot de passe incorrect" apparaît à l'écran | 🔴 **temporaire** |
