---
title: "Séparer l'espace Public et Admin"
layout: tuto
slug: "separer-public-admin"
permalink: /tutos/separer-public-admin/
tuto_id: "T.125.161"
type: "classique"
version: "normal"
ua: "UA.125.16"
nav_order: 1
data_js: ""
data_html: ""
data_css: ""
simplified: true
---

## 1. Objectif

Un site dynamique comporte généralement une partie "Front-Office" (ce que voient les visiteurs) et un "Back-Office" (l'espace d'administration sécurisé pour le propriétaire).
Pour ne pas mélanger les fichiers de consultation et les fichiers de gestion (CRUD), il est indispensable de les séparer physiquement.

Dans ce tutoriel, vous allez regrouper les pages d'administration dans un dossier `admin/`.

## Partie 1 — Le problème : Les chemins relatifs

Voici l'architecture que nous allons mettre en place pour gérer les catégories :

{% include arch-svg.html
   title="Arborescence avec Back-Office"
   tree="
   mon-projet/|folder|0,
   db.php|file-php|1,
   index.php|file-php|1,
   index-template.php|file-php|1,
   admin/|folder|1,
   -- categories/|folder|2,
   --- liste.php|file-php|3,
   --- liste-template.php|file-php|3
   "
%}

### Le défi du `require`

Dans votre ancien fichier, pour charger la connexion BDD, vous faisiez simplement `require_once 'db.php';` car les fichiers étaient dans le même dossier.

Maintenant, le fichier `liste.php` est "enfoui" très profondément : `admin/categories/liste.php`.
Pour qu'il puisse trouver le fichier `db.php` situé à la racine du projet, il doit remonter de **deux dossiers** en utilisant la syntaxe `../` (dossier parent) :

```php
<?php
// Depuis admin/categories/liste.php, on remonte de 2 niveaux pour trouver db.php
require_once '../../db.php';

$stmt = $pdo->query("SELECT * FROM categories");
$categories = $stmt->fetchAll();

// On inclut le template (qui est dans le même dossier que liste.php)
require 'liste-template.php';
```

*(Note : L'organisation en dossiers ne remplace pas une vraie sécurité avec sessions et mots de passe, que vous verrez plus tard).*

## Partie 2 — Pratique (Livrable)

**Travail à faire :**
1. À partir du projet précédent, créez le dossier `admin/` à la racine, puis un sous-dossier `categories/` à l'intérieur.
2. Au lieu de `categories.php` et `categories-template.php`, créez plutôt `liste.php` et `liste-template.php` à l'intérieur de `admin/categories/`.
3. Écrivez le code de traitement dans `liste.php` en n'oubliant pas d'adapter le chemin vers `db.php` (`../../db.php`).
4. Écrivez le code d'affichage dans `liste-template.php`.
5. Ouvrez le chemin `admin/categories/liste.php` dans votre navigateur pour tester.

**Livrable exigé :**
Dans votre dépôt GitHub de livrables, créez un dossier nommé `T.125.161`.
Placez-y l'arborescence complète (fichiers publics à la racine, et dossiers `admin/categories/...`).
Fournissez **le lien vers ce dossier précis sur GitHub**.

## Bilan

**Vous savez maintenant :**
- Séparer le "Front-Office" et le "Back-Office" dans l'architecture des fichiers.
- Utiliser les chemins relatifs (`../../`) pour lier des fichiers placés dans des dossiers différents.

Félicitations, vous maîtrisez maintenant les bases de l'architecture d'un projet Web PHP robuste !