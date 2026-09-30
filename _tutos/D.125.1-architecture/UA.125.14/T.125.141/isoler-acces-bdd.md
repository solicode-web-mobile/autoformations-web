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
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon blog</title>
  </head>

  <body>
      <h1>Mon blog</h1>

      <article>
          <h2>Mon premier article</h2>
          <p>Bienvenue sur mon blog.</p>
      </article>
  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à séparer la connexion à la base de données du traitement de la page.

Vous allez déplacer le code de connexion PDO dans un fichier dédié :

```text
db.php
```

La page `index.php` utilisera ensuite ce fichier pour accéder à la base de données.

À la fin, la structure sera :

```text
db.php
index.php
index-template.php
```

## 2. Prérequis

Vous devez savoir :

- créer une page PHP ;
- utiliser une variable PHP ;
- utiliser `require` ;
- séparer le traitement et l'affichage ;
- utiliser une connexion PDO ;
- exécuter une requête SQL simple ;
- récupérer des données avec `fetchAll()`.

Vous devez aussi avoir réalisé le tutoriel **T.125.13.1 — Séparer traitement et affichage en PHP**.

## Données de départ

### HTML

Le fichier `index-template.php` affiche les articles préparés par `index.php`.

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon blog</title>
</head>

<body>
    <h1>Mon blog</h1>

    <article>
        <h2><?= $article['titre'] ?></h2>
        <p><?= $article['contenu'] ?></p>
    </article>
</body>
</html>
```

### CSS

Aucun fichier CSS n'est nécessaire dans ce tutoriel.

### JavaScript

Aucun fichier JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. La connexion à la base de données

PHP peut se connecter à une base de données MySQL avec PDO.

Exemple :

```php
$pdo = new PDO(
    "mysql:host=127.0.0.1;dbname=blog_n1;charset=utf8mb4",
    "root",
    "admin"
);
```

Cette connexion permet à PHP de communiquer avec la base de données.

### 1.2. Le problème

Dans une page PHP, on peut avoir plusieurs tâches :

- se connecter à la base de données ;
- récupérer les données ;
- préparer les données ;
- afficher la page.

Mettre toutes ces tâches dans le même fichier rend le code plus difficile à lire.

Dans ce tutoriel, nous allons isoler uniquement la connexion.

### 1.3. Le fichier `db.php`

Nous pouvons placer la connexion dans un fichier séparé :

```text
db.php
```

Ce fichier contient uniquement le code nécessaire pour créer la connexion.

### 1.4. Utiliser `require_once`

`index.php` peut charger `db.php` avec :

```php
require_once 'db.php';
```

Après cette ligne, la variable `$pdo` créée dans `db.php` peut être utilisée dans `index.php`.

### 1.5. Séparer les responsabilités

Après la modification :

```text
db.php
    connexion à la base de données

index.php
    traitement des données

index-template.php
    affichage
```

Chaque fichier a un rôle principal.

### 1.6. À retenir

- `db.php` contient la connexion à la base de données.
- `index.php` utilise la connexion pour récupérer les données.
- `index-template.php` affiche les données.
- `require_once` permet de charger `db.php`.
- La séparation évite de mélanger connexion, traitement et affichage.

## Partie 2 — Pratique

### 2.1. Observer le code de départ

#### Étape 1 — Ouvrir `index.php`

Le fichier contient actuellement la connexion et le traitement.

Exemple :

```php
<?php

$pdo = new PDO(
    "mysql:host=127.0.0.1;dbname=blog_n1;charset=utf8mb4",
    "root",
    "admin"
);

$stmtArticles = $pdo->query("SELECT * FROM articles");
$articles = $stmtArticles->fetchAll();

require 'index-template.php';
```

La connexion et le traitement sont donc dans le même fichier.

### 2.2. Créer `db.php`

#### Étape 1 — Créer le fichier

Créez :

```text
db.php
```

#### Étape 2 — Déplacer la connexion

Dans `db.php`, placez uniquement le code de connexion :

```php
<?php

$pdo = new PDO(
    "mysql:host=127.0.0.1;dbname=blog_n1;charset=utf8mb4",
    "root",
    "admin"
);
```

Le fichier `db.php` est maintenant consacré à la connexion.

### 2.3. Modifier `index.php`

#### Étape 1 — Supprimer la connexion

Dans `index.php`, supprimez :

```php
$pdo = new PDO(
    "mysql:host=127.0.0.1;dbname=blog_n1;charset=utf8mb4",
    "root",
    "admin"
);
```

#### Étape 2 — Charger `db.php`

Ajoutez :

```php
require_once 'db.php';
```

#### Étape 3 — Conserver le traitement

Le fichier `index.php` devient :

```php
<?php

require_once 'db.php';

$stmtArticles = $pdo->query("SELECT * FROM articles");
$articles = $stmtArticles->fetchAll();

require 'index-template.php';
```

La connexion n'est plus écrite directement dans `index.php`.

### 2.4. Vérifier le fonctionnement

#### Étape 1 — Vérifier `db.php`

Vérifiez que `db.php` contient la connexion PDO.

#### Étape 2 — Vérifier `index.php`

Vérifiez que `index.php` :

- charge `db.php` ;
- exécute la requête ;
- prépare les données ;
- charge `index-template.php`.

#### Étape 3 — Vérifier `index-template.php`

Vérifiez que ce fichier contient uniquement l'affichage.

### 2.5. Tester la page

#### Étape 1 — Démarrer le serveur local

Démarrez votre serveur PHP local.

#### Étape 2 — Ouvrir `index.php`

Ouvrez la page dans le navigateur.

#### Étape 3 — Vérifier les données

Les articles présents dans la base de données doivent être affichés.

La page doit fonctionner comme avant.

### 2.6. Vérifier l'organisation

L'arborescence doit être :

```text
db.php
index.php
index-template.php
```

La responsabilité de chaque fichier est :

```text
db.php
    connexion

index.php
    traitement

index-template.php
    affichage
```

### 2.7. Exercice individuel

**Travail à faire :**

À partir de votre page d'accueil :

1. créez `db.php` ;
2. placez-y le code de connexion PDO ;
3. chargez `db.php` depuis `index.php` avec `require_once` ;
4. conservez dans `index.php` la récupération des articles ;
5. conservez dans `index-template.php` leur affichage ;
6. testez la page.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- l'arborescence du projet ;
- le rôle de `db.php` ;
- le rôle de `index.php` ;
- le rôle de `index-template.php` ;
- les principales lignes utilisées pour charger la connexion.

**Résultat attendu :**

La page affiche les articles de la base de données.

La connexion PDO est isolée dans `db.php`.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/architecture/tuto-4-architecture.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page fonctionne avec les trois fichiers.

`db.php` contient la connexion PDO.

`index.php` utilise `$pdo` sans recréer la connexion.

`index-template.php` reste consacré à l'affichage.

## Bilan

**Vous avez appris :**

- à isoler la connexion à la base de données ;
- à utiliser `require_once` ;
- à séparer connexion, traitement et affichage.

**Vous avez réalisé :**

Une structure PHP organisée en trois fichiers :

```text
db.php
index.php
index-template.php
```

## Glossaire

- **Base de données** : endroit où l'application stocke ses données.
- **MySQL** : système utilisé pour gérer une base de données relationnelle.
- **PDO** : outil PHP utilisé pour communiquer avec une base de données.
- **Connexion** : lien entre PHP et la base de données.
- **Requête SQL** : instruction envoyée à la base de données.
- **`require_once`** : instruction PHP qui charge un fichier une seule fois.
- **Traitement** : travail effectué par PHP avant l'affichage.