---
name: domaine-deploy
description: >-
  Expert en règles de rédaction pour les tutoriels de déploiement et mise en service locale (deploy).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié au déploiement local, serveurs Web (Apache, Live Server), Laragon, XAMPP ou configuration de ports.
---

# Règles de rédaction - Domaine Déploiement Local (Deploy)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine du déploiement et de la mise en service d'applications web dans un environnement local (domaine D.141.1).

## 1. Distinction Cruciale : Fichier Local vs Serveur Web (Règle d'or)

L'un des blocages majeurs des débutants est la confusion entre un fichier ouvert dans l'explorateur et une ressource servie par un serveur HTTP.
* **Bannir l'ouverture en double-clic** : Expliquer systématiquement pourquoi l'URL `file:///C:/Users/...` n'est pas un environnement web réel (blocage des requêtes AJAX/CORS, absence d'interprétation PHP, chemins absolus brisés).
* **Toujours spécifier le protocole HTTP local** : Chaque tutoriel doit montrer l'accès via une URL serveur valide :
  - Pour les sites statiques (HTML/CSS/JS) : `http://127.0.0.1:5500` (extension Live Server sous VS Code).
  - Pour les sites dynamiques PHP/MySQL : `http://localhost/mon-projet` ou `http://mon-projet.test` (Laragon / Apache).

## 2. Pédagogie de la Mise en Service Locale N1

La progression des tutoriels de déploiement s'articule en 3 paliers progressifs :
1. **Palier 1 — Serveur statique** : Démarrer un serveur local léger (Live Server dans VS Code) pour servir une page HTML/CSS/JS.
2. **Palier 2 — Environnement d'exécution PHP** :
   - Démarrer le serveur HTTP Apache (via Laragon ou XAMPP).
   - Placer le dossier du projet dans le répertoire racine du serveur (`htdocs` ou `www`).
   - Vérifier que le code source PHP est interprété par le serveur et non affiché en texte brut dans le navigateur.
3. **Palier 3 — Environnement complet avec Base de Données (MySQL)** :
   - Démarrer les services Apache ET MySQL.
   - Accéder à phpMyAdmin (`http://localhost/phpmyadmin`).
   - Créer la base de données et importer le fichier `.sql`.
   - Ajuster les variables de configuration de connexion de l'application (hôte, nom de la base, utilisateur `root`, mot de passe vide par défaut).

## 3. Gestion des Chemins Relatifs et Portabilité

* **Interdiction formelle des chemins absolus locaux** : Ne jamais écrire de chemins de type `C:\laragon\www\projet\...` ou `http://localhost:8000/C:/...` dans le code HTML/PHP.
* **Exiger des chemins relatifs ou racines web** : Les liens et inclusions doivent être rédigés en chemins relatifs (`./assets/style.css`, `../includes/header.php`) pour garantir que l'application reste portable quel que soit l'ordinateur où elle est déployée.

## 4. Livrables Attendus

* Capture d'écran ou preuve visuelle de l'application accessible dans le navigateur via son URL locale (`http://localhost/...`).
* Fichier de configuration du projet renseigné avec les identifiants locaux.
* Fichier d'export de la base de données (`dump.sql`) prêt à être importé par un tiers.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel de déploiement local, vérifiez systématiquement :
> "Le tutoriel précise-t-il explicitement l'URL locale à ouvrir dans le navigateur (`http://localhost/...`) ?"
> "L'emplacement physique où déposer le projet (`www/` ou `htdocs/`) est-il clairement indiqué ?"
> "Les étapes pour importer la base de données dans phpMyAdmin sont-elles détaillées pas-à-pas ?"
> "Le critère de réussite permet-il à l'apprenant de savoir si son serveur fonctionne correctement ?"
