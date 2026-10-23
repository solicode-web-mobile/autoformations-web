---
title: "Limiter les résultats SQL"
layout: ua
code: "UA.124.15"
competence: "C.124"
domaine: "D.124.1"
ordre: 5
duree: 1
objectif: >
  Construire une requête permettant de limiter la quantité de données retournées.
description: >
  Utiliser la clause LIMIT (et optionnellement OFFSET) dans une requête SQL SELECT pour restreindre le nombre de lignes 
  retournées par le serveur MySQL (par exemple pour afficher uniquement les 5 derniers articles ou préparer une pagination).
notions:
  - "Clause LIMIT"
  - "Pagination et clause OFFSET"
  - "Optimisation de l'affichage des listes volumineuses"
  - "Combinaison avec ORDER BY"
livrable: >
  Requête SQL SELECT limitant le nombre d'articles extraits pour optimiser le rendu et préparer l'affichage paginé.
travail_a_faire: >
  Écrire et exécuter une requête SQL utilisant LIMIT combiné avec ORDER BY pour extraire uniquement les derniers articles publiés.
---
