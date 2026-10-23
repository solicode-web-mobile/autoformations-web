---
title: "Exploiter les critères de recherche dans PHP"
layout: ua
code: "UA.124.23"
competence: "C.124"
domaine: "D.124.2"
ordre: 3
duree: 1
objectif: >
  Utiliser des critères reçus par l’application pour obtenir puis exploiter les données correspondant à une recherche ou un filtrage.
description: >
  Combiner la réception de paramètres HTTP (GET/POST) avec l'exécution de requêtes préparées PDO afin d'extraire 
  et d'afficher des données filtrées ou recherchées de manière dynamique et sécurisée.
notions:
  - "Requêtes préparées PDO (prepare(), execute())"
  - "Paramètres liés (:param ou ?)"
  - "Sécurisation contre les injections SQL"
  - "Passage de critères de recherche / filtrage dynamiques"
livrable: >
  Script PHP sécurisé interrogeant la base de données avec des paramètres dynamiques et affichant les données correspondantes.
travail_a_faire: >
  Mettre en place une requête préparée PDO pour filtrer les enregistrements selon les critères transmis par l'utilisateur et afficher les données dans l'interface.
---
