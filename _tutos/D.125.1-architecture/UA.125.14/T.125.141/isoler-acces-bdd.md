---
title: "Isoler l'accès à la base de données"
layout: tuto
slug: "isoler-acces-bdd"
permalink: /tutos/isoler-acces-bdd/
tuto_id: "T.125.141"
type: "classique"
version: "normal"
ua: "UA.125.14"
nav_order: 1
data_js: ""
data_html: ""
data_css: ""
simplified: true
---

## 1. Objectif

Lorsqu'un site PHP est dynamique, il a besoin de se connecter à une base de données (avec `PDO`).
Cependant, si votre site contient 10 pages, vous ne devez pas écrire le code de connexion 10 fois ! 

Dans ce tutoriel, vous allez apprendre à **centraliser la connexion à la base de données** dans un fichier unique, pour la réutiliser partout.

## Partie 1 — Le problème : La répétition

Voici à quoi ressemble le traitement d'une page PHP typique qui affiche des articles :

```php
<?php
// 1. On se connecte à la BDD (Mot de passe en clair !)
$pdo = new PDO("mysql:host=localhost;dbname=blog", "root", "admin");

// 2. On fait notre traitement
$stmt = $pdo->query("SELECT * FROM articles");
$articles = $stmt->fetchAll();

// 3. On appelle la vue
require 'index-template.php';
```

Le problème : Si la page `contact.php` a aussi besoin de la base de données, vous allez devoir copier/coller les identifiants de connexion. Le jour où votre mot de passe changera, vous devrez modifier 10 fichiers différents !

## Partie 2 — La solution : Le fichier `db.php`

La solution architecturale consiste à isoler la connexion dans un fichier dédié `db.php`.

{% include arch-svg.html
   title="Architecture avec db.php"
   tree="
   mon-projet/|folder|0,
   db.php|file-php|1,
   index.php|file-php|1,
   index-template.php|file-php|1
   "
%}

### 1. Le fichier `db.php`
Ce fichier ne fait qu'une seule chose : instancier la connexion PDO.

```php
<?php
// db.php
$pdo = new PDO("mysql:host=localhost;dbname=blog", "root", "admin");
```

### 2. L'appel avec `require_once`
Maintenant, toutes les autres pages du site peuvent simplement "importer" cette connexion avec `require_once` sans jamais connaître le mot de passe.

```php
<?php
// index.php
require_once 'db.php'; // Importer la connexion

// La variable $pdo est maintenant magiquement disponible !
$stmt = $pdo->query("SELECT * FROM articles");
$articles = $stmt->fetchAll();

require 'index-template.php';
```

*(Note : On utilise `require_once` plutôt que `require` pour éviter que PHP ne tente de se connecter deux fois à la base si le fichier est inclus par erreur plusieurs fois).*

## Partie 3 — Pratique (Livrable)

**Travail à faire :**
1. Reprenez les fichiers du tutoriel précédent (`index.php` et `index-template.php`).
2. Créez un nouveau fichier `db.php`.
3. Écrivez-y le code d'instanciation de PDO avec les identifiants de votre base de données locale.
4. Dans `index.php`, supprimez l'ancien tableau statique (créé manuellement au tutoriel précédent).
5. En haut de `index.php`, ajoutez `require_once 'db.php';` pour charger la connexion.
6. Écrivez la requête SQL pour récupérer de vrais articles depuis la BDD.
7. Testez votre page pour vous assurer que les données de la base s'affichent correctement.

**Livrable exigé :**
Dans votre dépôt GitHub de livrables, créez un dossier nommé `T.125.141`.
Placez-y vos 3 fichiers (`db.php`, `index.php`, `index-template.php`).
Fournissez **le lien vers ce dossier précis sur GitHub**.

## Bilan

**Vous savez maintenant :**
- Isoler une configuration technique (comme une connexion BDD) dans un fichier dédié.
- Partager une ressource PHP commune à plusieurs pages via `require_once`.

C'est une étape majeure vers des applications sécurisées et maintenables !