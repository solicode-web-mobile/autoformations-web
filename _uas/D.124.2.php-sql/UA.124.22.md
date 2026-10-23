---
title: "Afficher des données SQL dans une interface"
layout: ua
code: "UA.124.22"
competence: "C.124"
domaine: "D.124.2"
ordre: 2
duree: 1
objectif: >
  Utiliser les résultats d’une requête SQL pour produire dynamiquement les contenus affichés dans une interface Web.
description: >
  Injecter les enregistrements extraits de la base de données via PHP dans le gabarit HTML de la page d'accueil 
  afin de générer dynamiquement l'affichage des articles réels.
notions:
  - "Liaison entre données extraites et affichage HTML"
  - "Parcours des enregistrements BDD avec foreach"
  - "Affichage sécurisé (htmlspecialchars)"
  - "Remplacement des données statiques / simulées par des données de BDD"
livrable: >
  Page d'accueil du Blog affichant dynamiquement la liste des articles provenant directement de la base de données MySQL.
travail_a_faire: >
  Modifier le template de la page d'accueil pour boucler sur le tableau de résultats PDO et afficher chaque article issu de la base de données.
---
