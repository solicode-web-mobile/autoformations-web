---
title: "Réutiliser l'architecture dynamique"
layout: tuto
slug: "reutiliser-architecture-dynamique"
permalink: /tutos/reutiliser-architecture-dynamique/
tuto_id: "T.125.15.1"
type: "classique"
version: "normal"
ua: "UA.125.15"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Catégories</title>
  </head>

  <body>
      <h1>Mon blog</h1>

      <h2>Catégories</h2>

      <ul>
          <li>Développement Web</li>
          <li>Design</li>
          <li>Actualités</li>
      </ul>
  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à réutiliser une structure PHP déjà créée.

Vous allez créer une nouvelle page dynamique pour afficher les catégories du blog.

Vous allez utiliser :

```text
categories.php
categories-template.php
db.php
```

La nouvelle page suivra la même organisation que la page `index.php`.

## 2. Prérequis

Vous devez savoir :

- créer une page PHP ;
- préparer des données en PHP ;
- utiliser `require` ;
- utiliser `require_once` ;
- utiliser une connexion PDO ;
- exécuter une requête SQL simple ;
- séparer le traitement et l'affichage.

Vous devez aussi avoir réalisé les tutoriels **T.125.13.1** et **T.125.14.1**.

## Données de départ

### HTML

La page de catégories utilise une structure HTML simple.

```html id="4q0qfz"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Catégories</title>
</head>

<body>
    <h1>Mon blog</h1>

    <h2>Catégories</h2>

    <ul>
        <li>Développement Web</li>
        <li>Design</li>
        <li>Actualités</li>
    </ul>
</body>
</html>
```

### CSS

Aucun fichier CSS n'est nécessaire dans ce tutoriel.

### JavaScript

Aucun fichier JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. Réutiliser une structure

Une structure déjà utilisée peut servir de modèle pour une nouvelle page.

Pour la page d'accueil :

```text id="g4eqmy"
index.php
index-template.php
db.php
```

Pour la page des catégories :

```text id="h4j9rm"
categories.php
categories-template.php
db.php
```

La nouvelle page utilise donc le même principe.

### 1.2. Utiliser la connexion commune

Le fichier `db.php` contient déjà la connexion à la base de données.

La nouvelle page peut utiliser cette connexion avec :

```php id="zpj8ut"
require_once 'db.php';
```

Il n'est pas nécessaire de créer une nouvelle connexion.

### 1.3. Préparer les catégories

`categories.php` récupère les catégories depuis la base de données.

Exemple :

```php id="yvqu3u"
$stmtCategories = $pdo->query(
    "SELECT * FROM categories ORDER BY libelle ASC"
);

$categories = $stmtCategories->fetchAll();
```

La variable `$categories` contient les données à afficher.

### 1.4. Afficher les catégories

Le fichier `categories-template.php` utilise les données préparées.

Exemple :

```php id="ywuwtq"
<ul>
    <?php foreach ($categories as $category): ?>
        <li><?= $category['libelle'] ?></li>
    <?php endforeach; ?>
</ul>
```

Le traitement reste dans `categories.php`.

L'affichage reste dans `categories-template.php`.

### 1.5. À retenir

- Une page dynamique peut suivre la même structure qu'une autre page.
- `db.php` peut être partagé entre plusieurs pages.
- `categories.php` prépare les données.
- `categories-template.php` affiche les données.
- La même organisation peut être réutilisée pour d'autres pages.

## Partie 2 — Pratique

### 2.1. Observer la structure existante

#### Étape 1 — Ouvrir `index.php`

Observez l'organisation actuelle :

```php id="3si0zf"
<?php

require_once 'db.php';

$stmtArticles = $pdo->query("SELECT * FROM articles");
$articles = $stmtArticles->fetchAll();

require 'index-template.php';
```

#### Étape 2 — Identifier le modèle

Repérez les trois actions :

```text id="4m3c8g"
1. charger la connexion ;
2. récupérer les données ;
3. charger le fichier d'affichage.
```

Vous allez réutiliser ce modèle.

### 2.2. Créer `categories.php`

#### Étape 1 — Créer le fichier

Créez :

```text id="b8jr5e"
categories.php
```

#### Étape 2 — Charger la connexion

Ajoutez :

```php id="vf1zhe"
<?php

require_once 'db.php';
```

#### Étape 3 — Récupérer les catégories

Ajoutez :

```php id="y2kh4d"
$stmtCategories = $pdo->query(
    "SELECT * FROM categories ORDER BY libelle ASC"
);

$categories = $stmtCategories->fetchAll();
```

La page dispose maintenant des données nécessaires.

### 2.3. Créer `categories-template.php`

#### Étape 1 — Créer le fichier

Créez :

```text id="mye0xa"
categories-template.php
```

#### Étape 2 — Ajouter la structure HTML

Ajoutez :

```php id="k5m7yp"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Catégories</title>
</head>

<body>
    <h1>Mon blog</h1>

    <h2>Catégories</h2>

    <ul>
        <?php foreach ($categories as $category): ?>
            <li><?= $category['libelle'] ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
```

Le fichier affiche maintenant les catégories.

### 2.4. Relier les deux fichiers

#### Étape 1 — Retourner dans `categories.php`

À la fin du fichier, ajoutez :

```php id="1qgzjh"
require 'categories-template.php';
```

Le fichier complet devient :

```php id="3f7wqy"
<?php

require_once 'db.php';

$stmtCategories = $pdo->query(
    "SELECT * FROM categories ORDER BY libelle ASC"
);

$categories = $stmtCategories->fetchAll();

require 'categories-template.php';
```

### 2.5. Vérifier la réutilisation de `db.php`

#### Étape 1 — Vérifier `db.php`

Le fichier doit contenir la connexion PDO.

#### Étape 2 — Vérifier `categories.php`

Il ne doit pas recréer la connexion.

Il doit utiliser :

```php id="v9pt0d"
require_once 'db.php';
```

#### Étape 3 — Vérifier le traitement

`categories.php` doit récupérer les catégories.

#### Étape 4 — Vérifier l'affichage

`categories-template.php` doit afficher les catégories.

### 2.6. Tester la page

#### Étape 1 — Ouvrir `categories.php`

Lancez votre serveur local.

Ouvrez la page :

```text id="jdcc3a"
categories.php
```

#### Étape 2 — Vérifier les données

Les catégories présentes dans la base de données doivent apparaître dans la liste.

#### Étape 3 — Vérifier la structure

L'organisation doit être :

```text id="jhyz8k"
db.php
index.php
index-template.php
categories.php
categories-template.php
```

Les deux pages utilisent le même fichier `db.php`.

### 2.7. Exercice individuel

**Travail à faire :**

À partir de l'architecture de `index.php` :

1. créez `categories.php` ;
2. utilisez `db.php` ;
3. récupérez les catégories ;
4. créez `categories-template.php` ;
5. affichez les catégories ;
6. testez la nouvelle page.

Ne créez pas une nouvelle connexion à la base de données.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses.

Ajoutez :

- l'arborescence finale ;
- le rôle de `categories.php` ;
- le rôle de `categories-template.php` ;
- la ligne qui permet d'utiliser `db.php`.

**Résultat attendu :**

Une nouvelle page dynamique affiche les catégories de la base de données.

La structure est identique dans son principe à celle utilisée pour la page d'accueil.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/architecture/tuto-5-architecture.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page `categories.php` :

- utilise `db.php` ;
- récupère les catégories ;
- charge `categories-template.php`.

La page `categories-template.php` affiche les catégories.

Aucune nouvelle connexion PDO n'est créée.

## Bilan

**Vous avez appris :**

- à réutiliser une architecture PHP existante ;
- à partager une connexion entre plusieurs pages ;
- à créer une nouvelle page dynamique avec la même organisation ;
- à séparer le traitement et l'affichage sur plusieurs pages.

**Vous avez réalisé :**

Une deuxième page dynamique :

```text id="w3cmh3"
categories.php
categories-template.php
```

qui réutilise :

```text id="e8h0cf"
db.php
```

## Glossaire

- **Réutiliser** : utiliser une organisation déjà créée pour une nouvelle réalisation.
- **Page dynamique** : page dont le contenu est préparé par un programme.
- **Connexion partagée** : connexion utilisée par plusieurs pages.
- **Traitement** : préparation des données avant leur affichage.
- **Affichage** : présentation des données dans la page.
- **`fetchAll()`** : méthode qui récupère plusieurs lignes d'une requête.
- **`foreach`** : instruction PHP utilisée pour parcourir les éléments d'une liste.