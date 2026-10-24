---
name: domaine-php
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine PHP et Traitements Serveur (php).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à PHP, aux variables serveur, formulaires POST/GET ou sessions.
---

# Règles de rédaction - Domaine PHP

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de la programmation serveur en PHP (domaine D.123.1).

## 1. Syntaxe et Exécution Côté Serveur (Règles Fondamentales)

* **Balises PHP complètes** : Tout code PHP doit s'ouvrir avec `<?php`. Ne jamais employer de balises courtes comme `<?`. La balise fermante `?>` est obligatoire si du code HTML suit, mais omise dans les fichiers purement PHP selon les standards PSR.
* **Conscience client vs serveur** : Expliquer clairement que PHP s'exécute sur le serveur avant que le navigateur ne reçoive le HTML final. Ne jamais mélanger l'exécution JavaScript (dans le navigateur) et l'exécution PHP.
* **Affichage explicite** : Utiliser `echo` ou la syntaxe courte de templating `<?= $variable ?>` dans les fichiers de vue pour afficher du contenu.
* **Code propre et lisible** : Terminer chaque instruction par un point-virgule `;` et indenter rigoureusement le code.

## 2. Séparation Traitement et Affichage

Dans les tutoriels PHP, il convient d'encourager dès le niveau N1 de bonnes habitudes d'architecture :
* **Haut de fichier** : Initialisation des variables, traitement des paramètres d'URL (`$_GET`) ou de formulaire (`$_POST`).
* **Bas de fichier (ou vue)** : Rendu HTML intégrant les variables PHP préparées au préalable.
* **Éviter le code spaghetti** : Ne pas noyer de gros calculs ou des boucles complexes au beau milieu de balises HTML profondes.

## 3. Gestion des Entrées Utilisateur et Sécurité de Base

* **Vérification d'existence** : Ne jamais accéder à une variable `$_GET['id']` ou `$_POST['titre']` sans tester son existence au préalable (utiliser `isset()` ou l'opérateur null coalescing `??`).
* **Échappement à l'affichage** : Toujours utiliser `htmlspecialchars($valeur, ENT_QUOTES, 'UTF-8')` lors de l'affichage de données fournies par l'utilisateur pour prévenir les failles XSS.
* **Validation de formulaire** : Illustrer des validations simples (champ non vide, longueur minimale, format email avec `filter_var`).

## 4. Livrables et Environnement d'Exécution

* **Environnement local** : Les exemples PHP s'exécutent au sein d'un serveur local (Laragon, XAMPP, ou serveur intégré `php -S localhost:8000`).
* **Livrables attendus** :
  - Pour les exercices unitaires : fichier de script `.php` exécutable.
  - Pour les tutoriels de synthèse : pages dynamiques (ex: `index.php`, `article.php`, `contact.php`) intégrées dans le projet fil rouge.
* **Résultats attendus** : Chaque tutoriel pratique doit illustrer le rendu HTML final obtenu dans le navigateur ou le flux d'exécution serveur (ex: redirection avec `header('Location: ...')`).

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel PHP, vérifiez systématiquement :
> "Le script commence-t-il bien par `<?php` ?"
> "Les variables issues de `$_GET` ou `$_POST` sont-elles vérifiées avec `isset()` ou `??` ?"
> "L'affichage des entrées utilisateur est-il protégé avec `htmlspecialchars()` ?"
> "L'apprenant sait-il où placer son fichier dans son serveur local pour le tester ?"
