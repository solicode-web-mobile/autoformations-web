---
name: domaine-conception
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine Conception (conception).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à la modélisation des données, au MCD, ou au MLD.
---

# Règles de rédaction - Domaine Conception (Conception)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de la conception de bases de données (comme les tutoriels liés au domaine D.112.1).

## 1. Baser sur des Données Réelles (Cas d'étude)
La conception de données ne se fait pas dans le vide.
*   **Chaque tutoriel doit s'appuyer sur un "Cas d'étude"** comportant soit une maquette visuelle (ex: un blog, une page produit), soit un cahier des charges textuel, soit un formulaire métier (ex: une facture).
*   L'objectif est d'extraire les données ("Nom", "Prénom", "Date") directement de ce support concret.

## 2. Utilisation des Diagrammes ER Mermaid et Tableaux
La modélisation passe par la représentation visuelle des entités et relations.
*   Privilégiez les **tableaux Markdown** pour élaborer les **Dictionnaires de données** (colonnes suggérées : Donnée | Type | Description | Entité).
*   Utilisez la syntaxe **Mermaid ER-Diagram (`erDiagram`)** pour illustrer les relations entre les entités (le MCD - Modèle Conceptuel de Données).
*   Assurez-vous que la syntaxe Mermaid soit valide et utilise les bonnes cardinalités (ex: `||--o{` pour un (1,1) à (0,N)).

## 3. Démarche Pédagogique de Conception
*   Ne demandez **pas de code SQL** dans les tutoriels de conception (le SQL appartient au domaine des bases de données/backend).
*   La progression logique d'un parcours de conception est souvent :
    1. Identifier les données brutes.
    2. Nettoyer et typer les données (Dictionnaire).
    3. Regrouper les données en Entités et définir les Identifiants (Clés primaires).
    4. Définir les relations et les cardinalités (MCD).
*   Les exercices (Livrables) doivent demander à l'apprenant de produire une structure : un tableau de données, une liste d'entités avec leurs propriétés, ou un schéma conceptuel.

## Procédure de vérification du rédacteur
Avant de finaliser un tutoriel de conception, vérifiez que :
> "Les données modélisées proviennent-elles bien du cas d'étude ? Le schéma ER Mermaid est-il syntaxiquement correct pour être rendu sur le site web ?"
