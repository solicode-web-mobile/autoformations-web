---
layout: conception
title: "Résultat - Relations et cardinalités"
---

# Résultat attendu : Relations et cardinalités

Voici le tableau regroupant l'analyse des trois relations étudiées :

| Relation | Règle de gestion | Cardinalité côté A | Cardinalité côté B |
| -------- | ---------------- | ------------------ | ------------------ |
| **ARTICLE — CATEGORIE** | Un article appartient à 1 seule catégorie (1,1). Une catégorie regroupe 0 ou plusieurs articles (0,N). | **ARTICLE (1,1)** | **CATEGORIE (0,N)** |
| **AUTEUR — ARTICLE** | Un auteur rédige 0 ou plusieurs articles (0,N). Un article est rédigé par 1 seul auteur (1,1). | **AUTEUR (0,N)** | **ARTICLE (1,1)** |
| **ARTICLE — TAG** | Un article utilise 0 ou plusieurs tags (0,N). Un tag est utilisé par 0 ou plusieurs articles (0,N). | **ARTICLE (0,N)** | **TAG (0,N)** |

## Déduction du type de relation :
1. **ARTICLE — CATEGORIE** : Relation **1-N**
2. **AUTEUR — ARTICLE** : Relation **1-N**
3. **ARTICLE — TAG** : Relation **N-N**
