---
title: "Réutiliser l'architecture dynamique"
layout: tuto
slug: "reutiliser-architecture-dynamique"
permalink: /tutos/reutiliser-architecture-dynamique/
tuto_id: "T.125.151"
type: "classique"
version: "normal"
ua: "UA.125.15"
nav_order: 1
data_js: ""
data_html: ""
data_css: ""
simplified: true
---

## 1. Objectif

Vous avez mis en place une architecture MVC solide avec un fichier `db.php` partagé et un couple "Traitement / Affichage" pour votre page d'accueil (`index.php` + `index-template.php`).
L'avantage d'une bonne architecture est qu'elle est reproductible à l'infini !

Dans ce tutoriel, vous allez appliquer ce même modèle pour créer une nouvelle page affichant des catégories.

## Partie 1 — L'architecture reproductible

Voici l'arborescence cible que nous souhaitons obtenir :

{% include arch-svg.html
   title="Architecture multi-pages"
   tree="
   mon-projet/|folder|0,
   db.php|file-php|1,
   index.php|file-php|1,
   index-template.php|file-php|1,
   categories.php|file-php|1,
   categories-template.php|file-php|1
   "
%}

### Le duo dynamique : `categories.php`

1. Il charge la connexion commune (`require_once 'db.php'`).
2. Il récupère les catégories dans la base de données.
3. Il délègue l'affichage à sa vue (`require 'categories-template.php'`).

### Le duo dynamique : `categories-template.php`

1. C'est du HTML pur.
2. Il utilise une boucle `foreach` pour afficher chaque catégorie récupérée par le traitement.

```php
<ul>
    <?php foreach ($categories as $category): ?>
        <li><?= $category['libelle'] ?></li>
    <?php endforeach; ?>
</ul>
```

## Partie 2 — Pratique (Livrable)

**Travail à faire :**
1. Reprenez les fichiers du tutoriel précédent.
2. Créez un nouveau fichier `categories.php`.
3. Ajoutez l'instruction pour charger `db.php`.
4. Rédigez la requête SQL (`SELECT * FROM categories`) et stockez le résultat dans `$categories`.
5. Chargez le fichier `categories-template.php` (à créer).
6. Dans `categories-template.php`, écrivez la structure HTML de base et utilisez une boucle `foreach` pour afficher la liste des catégories sous forme de `<li>`.
7. Ouvrez `categories.php` dans votre navigateur pour tester l'affichage.

**Livrable exigé :**
Dans votre dépôt GitHub de livrables, créez un dossier nommé `T.125.151`.
Placez-y l'intégralité de vos fichiers (les 5 fichiers PHP montrés dans l'arborescence).
Fournissez **le lien vers ce dossier précis sur GitHub**.

## Bilan

**Vous savez maintenant :**
- Appliquer un même *design pattern* (MVC) à plusieurs entités de votre site.
- Comprendre que `db.php` sert de "point de connexion central" pour tout le projet.