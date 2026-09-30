---
title: "Structurer une page avec accès aux données"
layout: ua
code: "UA.125.14"
competence: "C.125"
domaine: "D.125.1"
ordre: 4
duree: 1
objectif: >
  Créer un fichier de connexion à la base de données pour ne pas mélanger l'accès PDO et la logique de la page.
description: >
  L'apprenant va extraire le code de connexion PDO vers un fichier `db.php` qui sera inclus dans la page d'accueil pour récupérer de vrais articles.
notions:
  - "Connexion MySQL (PDO)"
  - "Fichier de configuration/connexion dédié"
  - "Séparation Connexion / Traitement / Affichage"
livrable: >
  Projet contenant db.php, index.php et index-template.php.
travail_a_faire: >
  Isoler la connexion à la base de données dans un fichier séparé et l'inclure là où c'est nécessaire.
---
