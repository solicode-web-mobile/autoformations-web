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

Dans ce tutoriel, vous allez apprendre à séparer les fichiers du site en deux espaces :

- l'espace public ;
- l'espace d'administration.

Vous allez créer un dossier `admin/` pour regrouper les pages de gestion.

À la fin, les fichiers seront organisés dans des dossiers différents.

## 2. Prérequis

Vous devez savoir :

- créer un dossier ;
- créer un fichier PHP ;
- utiliser `require` ;
- utiliser `require_once` ;
- utiliser une connexion PDO ;
- séparer le traitement et l'affichage ;
- utiliser un chemin relatif avec `../`.

Vous devez aussi avoir réalisé les tutoriels précédents de l'UA `UA.125.15`.

## Données de départ

### HTML

La page publique des catégories utilise une structure simple.

```html
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

### 1.1. L'espace public

L'espace public contient les pages que les visiteurs du site peuvent consulter.

Par exemple :

```text
index.php
categories.php
```

Ces pages servent à consulter les informations du site.

### 1.2. L'espace d'administration

L'espace d'administration contient les pages utilisées pour gérer les données du site.

Nous allons créer un dossier :

```text
admin/
```

Les pages de gestion seront placées dans ce dossier.

Par exemple :

```text
admin/
    categories/
        liste.php
        liste-template.php
```

### 1.3. Organiser les fichiers

Après cette organisation, le projet peut avoir cette forme :

```text
db.php

index.php
index-template.php

categories.php
categories-template.php

admin/
    categories/
        liste.php
        liste-template.php
```

Les fichiers publics restent à la racine.

Les fichiers d'administration sont regroupés dans `admin/`.

### 1.4. Le chemin relatif

Un fichier situé dans un sous-dossier doit utiliser un chemin adapté pour accéder à un fichier situé plus haut.

Depuis :

```text
admin/categories/liste.php
```

pour revenir à la racine du projet, il faut remonter deux dossiers :

```text
../..
```

On peut donc charger `db.php` avec :

```php
require_once '../../db.php';
```

Le chemin dépend de l'emplacement du fichier courant.

### 1.5. Séparer l'organisation et la sécurité

Le dossier `admin/` permet de séparer physiquement les fichiers publics et les fichiers d'administration.

Cette organisation ne protège pas, à elle seule, l'accès aux pages.

La protection des utilisateurs et des droits sera traitée avec d'autres notions.

### 1.6. À retenir

- L'espace public contient les pages destinées aux visiteurs.
- L'espace `admin/` regroupe les pages de gestion.
- Un fichier déplacé dans un sous-dossier peut nécessiter un nouveau chemin relatif.
- `../..` permet ici de remonter de deux niveaux.
- L'organisation des dossiers ne remplace pas un système d'authentification.

## Partie 2 — Pratique

### 2.1. Préparer l'espace d'administration

#### Étape 1 — Créer le dossier `admin`

À la racine du projet, créez :

```text
admin/
```

#### Étape 2 — Créer le dossier `categories`

Dans `admin/`, créez :

```text
categories/
```

Vous obtenez :

```text
admin/
    categories/
```

### 2.2. Créer la page de gestion

#### Étape 1 — Créer `liste.php`

Dans `admin/categories/`, créez :

```text
liste.php
```

#### Étape 2 — Charger la connexion

La page se trouve maintenant deux niveaux sous la racine.

Ajoutez :

```php
<?php

require_once '../../db.php';
```

Le chemin permet de retrouver `db.php`.

#### Étape 3 — Récupérer les catégories

Ajoutez le traitement :

```php
$stmtCategories = $pdo->query(
    "SELECT * FROM categories ORDER BY libelle ASC"
);

$categories = $stmtCategories->fetchAll();
```

#### Étape 4 — Charger le template

Ajoutez :

```php
require 'liste-template.php';
```

Le fichier complet devient :

```php
<?php

require_once '../../db.php';

$stmtCategories = $pdo->query(
    "SELECT * FROM categories ORDER BY libelle ASC"
);

$categories = $stmtCategories->fetchAll();

require 'liste-template.php';
```

### 2.3. Créer le fichier d'affichage

#### Étape 1 — Créer `liste-template.php`

Dans le même dossier, créez :

```text
liste-template.php
```

#### Étape 2 — Ajouter l'affichage

Ajoutez :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Gestion des catégories</title>
</head>

<body>
    <h1>Administration</h1>

    <h2>Gestion des catégories</h2>

    <ul>
        <?php foreach ($categories as $category): ?>
            <li><?= $category['libelle'] ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
```

Le traitement est dans `liste.php`.

L'affichage est dans `liste-template.php`.

### 2.4. Vérifier l'arborescence

#### Étape 1 — Observer le projet

L'arborescence doit maintenant ressembler à ceci :

```text
db.php

index.php
index-template.php

categories.php
categories-template.php

admin/
    categories/
        liste.php
        liste-template.php
```

#### Étape 2 — Identifier les espaces

Les pages publiques sont à la racine :

```text
index.php
categories.php
```

Les pages d'administration sont dans :

```text
admin/
```

### 2.5. Tester le chemin vers `db.php`

#### Étape 1 — Ouvrir `liste.php`

Lancez votre serveur local.

Ouvrez la page `liste.php` depuis l'adresse correspondant à votre projet.

#### Étape 2 — Vérifier la connexion

La page doit pouvoir utiliser `$pdo`.

Les catégories doivent être récupérées depuis la base de données.

#### Étape 3 — Vérifier l'affichage

La liste des catégories doit apparaître dans la page.

### 2.6. Comparer les deux structures

La page publique utilise :

```php
require_once 'db.php';
```

La page d'administration utilise :

```php
require_once '../../db.php';
```

Le fichier utilisé est le même :

```text
db.php
```

Seul le chemin change parce que les fichiers ne sont pas dans le même dossier.

### 2.7. Exercice individuel

**Travail à faire :**

À partir de la page publique des catégories :

1. créez le dossier `admin/` ;
2. créez `admin/categories/` ;
3. créez `liste.php` ;
4. créez `liste-template.php` ;
5. utilisez le même fichier `db.php` ;
6. adaptez le chemin relatif ;
7. affichez les catégories dans l'espace d'administration ;
8. testez la page.

Ne créez pas une deuxième connexion à la base de données.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses.

Ajoutez :

- l'arborescence finale du projet ;
- le rôle du dossier `admin/` ;
- le rôle de `liste.php` ;
- le rôle de `liste-template.php` ;
- le chemin utilisé pour charger `db.php`.

**Résultat attendu :**

Les catégories sont accessibles depuis une page publique et depuis une page placée dans l'espace d'administration.

Les fichiers d'administration sont regroupés dans `admin/`.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/architecture/tuto-6-architecture.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page `admin/categories/liste.php` :

- charge correctement `db.php` ;
- récupère les catégories ;
- charge `liste-template.php` ;
- affiche les catégories.

L'arborescence sépare clairement les pages publiques et les pages d'administration.

## Bilan

**Vous avez appris :**

- à séparer l'espace public et l'espace d'administration ;
- à organiser les pages dans des dossiers ;
- à utiliser un chemin relatif depuis un sous-dossier ;
- à réutiliser la même connexion à la base de données.

**Vous avez réalisé :**

Une structure qui sépare les deux espaces :

```text
Pages publiques
    index.php
    categories.php

Administration
    admin/
        categories/
            liste.php
            liste-template.php
```

## Glossaire

- **Espace public** : partie du site destinée aux visiteurs.
- **Espace d'administration** : partie du site destinée à la gestion des données.
- **Sous-dossier** : dossier placé à l'intérieur d'un autre dossier.
- **Chemin relatif** : chemin qui indique où trouver un fichier depuis l'emplacement actuel.
- **`../`** : permet de remonter d'un dossier.
- **`../../`** : permet ici de remonter de deux dossiers.
- **Administration** : ensemble des pages utilisées pour gérer le site.