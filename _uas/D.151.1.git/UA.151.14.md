---
title: "Sécuriser son projet et ignorer l'inutile"
layout: ua
code: "UA.151.14"
competence: "C.151"
domaine: "D.151.1"
duree: 1
objectif: >
  Contrôler précisément ce qui est envoyé sur GitHub pour éviter de partager des fichiers personnels, temporaires ou des mots de passe.
description: >
  Mettre en place de bonnes pratiques de sécurité en excluant les éléments indésirables du contrôle de version avant tout commit.
notions:
  - "Fichiers .env, secrets, dépendances"
  - "Configuration d'un fichier .gitignore"
  - "Vérification avec git status et git diff"
livrable: >
  Un dépôt propre incluant un fichier .gitignore correctement configuré et protégeant les données sensibles.
travail_a_faire: >
  Créer et configurer un fichier .gitignore pour exclure du suivi Git les fichiers contenant des variables d'environnement, les dépendances et les fichiers temporaires, puis vérifier la prise en compte avec git status.
---
