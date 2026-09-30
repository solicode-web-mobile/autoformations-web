---
title: "Séparer traitement et affichage en PHP"
layout: tuto
slug: "separer-traitement-affichage-php"
permalink: /tutos/separer-traitement-affichage-php/
tuto_id: "T.125.131"
type: "classique"
version: "normal"
ua: "UA.125.13"
nav_order: 1
data_js: ""
data_html: ""
data_css: ""
simplified: true
---

## 1. Objectif

La troisième grande règle d'architecture web concerne les langages côté serveur comme PHP : **Ne jamais mélanger la préparation des données et leur affichage.**
Dans ce tutoriel, vous allez apprendre à découper une page PHP en deux fichiers distincts : un fichier pour le *Traitement* (Logique) et un fichier pour l'*Affichage* (Vue).

## Partie 1 — Le problème : le code "Plat" en PHP

Imaginons une page d'accueil de blog en PHP où tout est mélangé :

```php
<?php
// --- 1. TRAITEMENT ---
$article = [
    'titre' => 'Mon premier article',
    'contenu' => 'Bienvenue sur mon blog.'
];
// --- 2. AFFICHAGE ---
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Accueil</title>
</head>
<body>
    <h1><?= $article['titre'] ?></h1>
    <p><?= $article['contenu'] ?></p>
</body>
</html>
```

Si le traitement devient complexe (requêtes base de données, vérification de mots de passe...), le fichier deviendra illisible.

## Partie 2 — La solution : Le duo Traitement / Affichage

Pour respecter l'architecture, on sépare ce fichier unique en deux :

{% include arch-svg.html
   title="Architecture MVC (Simplifiée)"
   tree="
   mon-projet/|folder|0,
   index.php|file-php|1,
   index-template.php|file-php|1
   "
%}

### 1. Le fichier de traitement (`index.php`)
Il est responsable de préparer les variables. Il ne contient **strictement aucun code HTML**.
Une fois les variables prêtes, il utilise l'instruction `require` pour charger l'affichage.

```php
<?php
// index.php : QUE DU PHP
$article = [
    'titre' => 'Mon premier article',
    'contenu' => 'Bienvenue sur mon blog.'
];

// À la toute fin, on appelle la vue
require 'index-template.php';
```

### 2. Le fichier d'affichage (`index-template.php`)
Ce fichier reçoit les variables préparées et ne fait que les afficher. Il ne contient **aucune logique métier** (pas de connexion base de données, pas de gros calculs).

```php
<!-- index-template.php : PRINCIPALEMENT DU HTML -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Accueil</title>
</head>
<body>
    <h1><?= $article['titre'] ?></h1>
    <p><?= $article['contenu'] ?></p>
</body>
</html>
```

## Partie 3 — Pratique (Livrable)

**Travail à faire :**
1. Créez un nouveau dossier pour cet exercice.
2. Créez le fichier de traitement `index.php` et définissez-y un tableau contenant un titre et un contenu de votre choix.
3. À la fin de `index.php`, ajoutez l'instruction `require 'index-template.php';`.
4. Créez le fichier d'affichage `index-template.php` et rédigez-y la structure HTML de la page.
5. Utilisez `<?= $variable ?>` dans le template pour afficher les données préparées.
6. Lancez votre serveur local et ouvrez `index.php` dans votre navigateur pour tester l'affichage.

**Livrable exigé :**
Dans votre dépôt GitHub de livrables, créez un dossier nommé `T.125.131`.
Placez-y vos deux fichiers (`index.php` et `index-template.php`).
Fournissez **le lien vers ce dossier précis sur GitHub**.

## Bilan

**Vous savez maintenant :**
- que le traitement PHP et l'affichage HTML ne doivent pas cohabiter dans le même fichier.
- utiliser `require` pour lier un contrôleur (`index.php`) à sa vue (`index-template.php`).

C'est la base de ce qu'on appelle l'architecture **MVC (Modèle-Vue-Contrôleur)** !