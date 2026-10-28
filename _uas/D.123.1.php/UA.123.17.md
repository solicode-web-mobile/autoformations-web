---
title: "Recevoir des données d’une requête Web"
layout: ua
code: "UA.123.17"
competence: "C.123"
domaine: "D.123.1"
ordre: 7
duree: 1
objectif: >
  Recevoir et exploiter des données simples transmises par une requête Web.
description: >
  Récupérer les paramètres passés dans l'URL via la méthode HTTP GET et la superglobale PHP $_GET. 
  Vérifier la présence d'un paramètre (ex. identifiant de catégorie ou d'article) et l'utiliser pour conditionner les traitements serveur.
notions:
  - "Paramètres d'URL (query string : ?cle=valeur)"
  - "Superglobale $_GET"
  - "Vérification d'existence (isset(), empty())"
  - "Validation de type simple"
  - "Transmission de paramètre entre pages (liens hypertextes dynamiques)"
livrable: >
  Script PHP capable d'intercepter un paramètre d'URL (ex. categorie_id) et de l'utiliser pour orienter l'affichage ou le filtrage.
travail_a_faire: >
  Créer des liens avec paramètres d'URL, récupérer le paramètre transmis dans la page de destination à l'aide de $_GET, et vérifier sa validité avant traitement.
---
