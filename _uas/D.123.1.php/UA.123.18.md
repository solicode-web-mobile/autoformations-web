---
title: "Contrôler les données reçues"
layout: ua
code: "UA.123.18"
competence: "C.123"
domaine: "D.123.1"
ordre: 8
duree: 1
objectif: >
  Contrôler les données reçues afin de gérer les cas valides et invalides avant leur traitement.
description: >
  Intercepter les données envoyées par formulaire via la méthode HTTP POST et la superglobale $_POST.
  Appliquer des règles de validation rigoureuses (champs obligatoires, format, nettoyage des espaces avec trim) 
  et distinguer le traitement d'une soumission valide de la gestion des erreurs.
notions:
  - "Méthode HTTP POST et superglobale $_POST"
  - "Nettoyage des données (trim(), stripslashes())"
  - "Validation de champs obligatoires (empty(), strlen())"
  - "Gestion des messages d'erreur et retour utilisateur"
  - "Distinction traitement valide vs formulaire rejeté"
livrable: >
  Script PHP de traitement de formulaire validant les données reçues et préparant leur insertion ou le retour d'erreurs.
travail_a_faire: >
  Traiter la soumission du formulaire d'ajout de catégorie en PHP, vérifier que le libellé n'est pas vide et conforme, et afficher un message d'erreur si la saisie est invalide.
---
