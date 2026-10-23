---
title: "Contrôler les données saisies côté navigateur"
layout: ua
code: "UA.122.34"
competence: "C.122"
domaine: "D.122.3"
ordre: 4
duree: 1
objectif: >
  Contrôler les données saisies dans une interface et produire un comportement adapté en cas de saisie incorrecte.
description: >
  Intercepter l'événement de soumission d'un formulaire avec event.preventDefault(). 
  Valider les champs requis côté client en JavaScript (format email, présence du mot de passe), bloquer l'envoi en cas d'erreur et afficher des retours visuels immédiats et des messages clairs à l'utilisateur.
notions:
  - "Interception de soumission (event.preventDefault())"
  - "Contrôle de saisie côté client (longueur, format email)"
  - "Affichage dynamique de messages d'erreur dans le DOM"
  - "Classes CSS d'état d'erreur (bordure rouge, texte d'alerte)"
  - "Validation de formulaire de connexion (login.html)"
livrable: >
  Formulaire de connexion d'administration sécurisé côté client, avec validation instantanée des champs avant soumission.
travail_a_faire: >
  Intercepter la soumission du formulaire d'authentification en JavaScript, vérifier la validité de l'email et du mot de passe, afficher les erreurs sous les champs invalides ou laisser partir la requête si tout est correct.
---
