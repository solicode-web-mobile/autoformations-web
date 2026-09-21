---
name: domaine-analyse
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine d'Analyse des besoins (analyse).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à l'analyse fonctionnelle, UML ou à la compréhension des besoins.
---

# Règles de rédaction - Domaine Analyse Fonctionnelle (Analyse)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de l'analyse (comme les tutoriels liés au domaine D.111.1). L'analyse se concentre sur l'identification des besoins, des acteurs, et du périmètre d'une application.

## 1. Baser sur des Cas d'Étude Concrets (Règle d'or)
L'analyse ne peut pas s'apprendre dans l'abstrait.
*   **Chaque tutoriel d'analyse doit obligatoirement inclure un "Cas d'étude" narratif ou contextuel** (ex: un système de gestion de bibliothèque, une application de covoiturage, une plateforme e-commerce).
*   Toute la théorie et toute la pratique doivent s'appuyer sur ce cas d'étude pour illustrer les concepts (acteurs, fonctionnalités, périmètre).

## 2. Utilisation Intensive des Visuels (Mermaid / Tableaux)
L'analyse requiert de modéliser l'information.
*   Privilégiez les **tableaux markdown** pour structurer l'information (ex: Acteur | Rôle | Objectif).
*   Utilisez **Mermaid** pour générer des diagrammes (ex: Mindmaps pour les fonctionnalités, diagrammes de Cas d'Utilisation UML).
*   Assurez-vous toujours que la syntaxe Mermaid soit correcte et n'utilise pas de caractères spéciaux non échappés qui pourraient casser le rendu sur le site.

## 3. Démarche Pédagogique d'Analyse
*   Les exercices pratiques ne doivent pas demander du code source.
*   Ils doivent demander à l'apprenant de :
    - Extraire des informations d'un texte.
    - Catégoriser des données (ex: classer une liste en "Fonctionnel" vs "Non Fonctionnel").
    - Compléter un schéma ou un tableau.
*   Fournissez toujours un corrigé clair ou un livrable attendu sous forme de document structuré (Markdown ou texte).

## Procédure de vérification du rédacteur
Avant de finaliser un tutoriel d'analyse, vérifiez que :
> "Le fil conducteur du cas d'étude est-il présent de bout en bout ? Les schémas générés (Mermaid/Tableaux) sont-ils clairs et lisibles pour illustrer le découpage fonctionnel ?"
