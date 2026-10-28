---
title: "Récupérer les résultats SQL dans PHP"
layout: ua
code: "UA.124.21"
competence: "C.124"
domaine: "D.124.2"
ordre: 1
duree: 1
objectif: >
  Récupérer dans PHP les résultats produits par une requête SQL afin de pouvoir les exploiter dans l’application.
description: >
  Établir une connexion à MySQL en utilisant l'extension PDO de PHP. Exécuter une requête SQL SELECT 
  et récupérer le jeu d'enregistrements sous forme de tableau PHP exploitable.
notions:
  - "Configuration et activation de pdo_mysql dans php.ini"
  - "Extension PDO (PHP Data Objects)"
  - "Initialisation de connexion ($pdo = new PDO(...))"
  - "Méthode query()"
  - "Extraction des données (fetch(), fetchAll())"
  - "Mode de récupération PDO::FETCH_ASSOC"
livrable: >
  Script PHP connectant l'application à MySQL, exécutant la requête et stockant les données retournées dans une variable tableau.
travail_a_faire: >
  Écrire un script PHP initialisant PDO, exécuter la requête SELECT sur la table des articles et stocker le résultat extrait dans une variable PHP.
---
