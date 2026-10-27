---
title: "Construire une page Web dynamique avec PHP"
layout: ua
code: "UA.123.12"
competence: "C.123"
domaine: "D.123.1"
ordre: 2
duree: 2
objectif: >
  Manipuler des collections de données en mémoire et générer dynamiquement l'affichage d'une page Web avec des conditions et des boucles foreach.
description: >
  Transformer la page d'accueil statique du Blog en page dynamique avec PHP procédural pur. 
  Déclarer des collections sous forme de tableaux associatifs en mémoire, conditionner 
  le rendu visuel avec if / else et générer automatiquement les cartes et liens dynamiques 
  avec foreach sécurisé par htmlspecialchars().
notions:
  - "Variables scalaires et tableaux associatifs (clé => valeur)"
  - "Collections multidimensionnelles en mémoire"
  - "Boucle de parcours foreach ($articles as $article)"
  - "Sécurisation contre les failles XSS avec htmlspecialchars()"
  - "Affichage conditionnel avec if / else"
  - "Génération de liens dynamiques avec paramètres"
livrable: >
  Contrôleur index.php déclarant la collection d'articles en mémoire et vue index-template.php générant les cartes et filtres dynamiques avec foreach et if/else.
travail_a_faire: >
  Déclarer le tableau associatif des articles dans index.php, remplacer les cartes statiques dupliquées par une boucle foreach dans index-template.php, conditionner les badges avec if/else et dynamiser les liens de catégories.
---
