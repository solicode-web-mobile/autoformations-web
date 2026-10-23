---
title: "Exploiter des données issues de plusieurs tables"
layout: ua
code: "UA.124.24"
competence: "C.124"
domaine: "D.124.2"
ordre: 4
duree: 1
objectif: >
  Exploiter des données provenant de tables liées afin de produire les informations nécessaires à une fonctionnalité.
description: >
  Récupérer et manipuler des données relationnelles croisées (requêtes avec jointures SQL INNER JOIN / LEFT JOIN ou requêtes associées) 
  pour afficher le libellé de la catégorie liée à chaque article dans la liste d'administration et dans les formulaires.
notions:
  - "Jointures SQL (INNER JOIN, LEFT JOIN)"
  - "Liaison entre clé primaire et clé étrangère (ON article.category_id = category.id)"
  - "Alias de tables et de colonnes (AS)"
  - "Exploitation du jeu de résultats enrichi dans PHP"
livrable: >
  Page d'administration affichant les articles avec le nom explicite de leur catégorie respective provenant de la table liée.
travail_a_faire: >
  Construire une requête SQL avec jointure liant les tables des articles et des catégories, exécuter la requête via PDO et afficher le nom de la catégorie dans la table d'administration.
---
