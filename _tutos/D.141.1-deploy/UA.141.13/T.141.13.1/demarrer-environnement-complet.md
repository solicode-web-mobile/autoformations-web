---
title: "Démarrer un environnement complet avec MySQL"
layout: tuto
slug: "demarrer-environnement-complet"
permalink: /tutos/demarrer-environnement-complet/
tuto_id: "T.141.13.1"
type: "classique"
version: "normal"
ua: "UA.141.13"
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
          <h2><?= $article['titre'] ?></h2>
          <p><?= $article['contenu'] ?></p>
      </article>
  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à mettre en service une application PHP avec une base de données MySQL.

Vous allez :

- démarrer Apache ;
- démarrer MySQL ;
- créer la base de données ;
- importer un fichier `.sql` ;
- vérifier la connexion PHP/MySQL ;
- tester les données de l'application.

À la fin, votre application utilisera des données enregistrées dans MySQL.

## 2. Prérequis

Vous devez savoir :

- exécuter une application PHP avec Apache ;
- utiliser `localhost` ;
- utiliser `require_once` ;
- utiliser PDO ;
- exécuter une requête SQL simple ;
- utiliser `fetchAll()`.

Vous devez aussi avoir réalisé :

- **T.141.12.1 — Démarrer un environnement PHP (Apache)** ;
- **T.125.14.1 — Isoler l'accès à la base de données**.

Vous devez disposer du fichier SQL de votre application.

Exemple :

```text id="qgwhng"
blog.sql
```

## Données de départ

### HTML

L'application affiche les données récupérées depuis la base de données.

Le fichier `index-template.php` peut contenir :

```php id="q8f01d"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon blog</title>
</head>

<body>
    <h1>Mon blog</h1>

    <?php foreach ($articles as $article): ?>
        <article>
            <h2><?= $article['titre'] ?></h2>
            <p><?= $article['contenu'] ?></p>
        </article>
    <?php endforeach; ?>

</body>
</html>
```

### CSS

Aucun fichier CSS n'est nécessaire pour ce tutoriel.

### JavaScript

Aucun fichier JavaScript n'est nécessaire pour ce tutoriel.

## Partie 1 — Théorie

### 1.1. Une application avec une base de données

Une application PHP peut utiliser une base de données pour conserver ses données.

Dans notre application :

```text id="3k4ukg"
Navigateur
    ↓
Apache
    ↓
PHP
    ↓
MySQL
    ↓
Données
```

PHP demande les données à MySQL.

PHP utilise ensuite ces données pour construire la page.

### 1.2. Apache et MySQL

Deux services sont nécessaires pour cette application :

- **Apache** : sert l'application PHP ;
- **MySQL** : stocke les données.

Les deux services doivent être démarrés.

### 1.3. La base de données

Une base de données regroupe les données de l'application.

Dans notre projet, la base peut par exemple s'appeler :

```text id="e7cqna"
blog_n1
```

Le nom utilisé doit être le même que celui configuré dans votre application.

### 1.4. Le fichier SQL

Un fichier `.sql` peut contenir les instructions nécessaires pour créer les tables et leurs données.

Exemple :

```text id="6w9uvs"
blog.sql
```

L'importation de ce fichier permet de recréer la base utilisée par l'application.

### 1.5. phpMyAdmin

phpMyAdmin est une interface Web qui permet de gérer une base de données MySQL.

Il permet notamment de :

- créer une base ;
- importer un fichier SQL ;
- consulter les tables ;
- consulter les données.

### 1.6. La connexion PHP/MySQL

PHP doit connaître les informations nécessaires pour accéder à MySQL.

Le fichier `db.php` peut contenir une connexion PDO :

```php id="w2u4mf"
<?php

$pdo = new PDO(
    "mysql:host=127.0.0.1;dbname=blog_n1;charset=utf8mb4",
    "root",
    "mot_de_passe"
);
```

Les identifiants dépendent de votre environnement local.

Ne copiez pas automatiquement cet exemple : utilisez les identifiants configurés sur votre machine.

### 1.7. À retenir

- Apache exécute et sert l'application PHP.
- MySQL stocke les données.
- Le fichier `.sql` permet de préparer la base.
- `db.php` contient les informations de connexion.
- Le nom de la base doit correspondre à la configuration de l'application.
- Apache et MySQL doivent être démarrés.

## Partie 2 — Pratique

### 2.1. Démarrer l'environnement

#### Étape 1 — Ouvrir l'environnement local

Lancez votre environnement local, par exemple Laragon ou XAMPP.

#### Étape 2 — Démarrer Apache

Démarrez le service **Apache**.

#### Étape 3 — Démarrer MySQL

Démarrez le service **MySQL**.

Vérifiez que les deux services sont actifs.

### 2.2. Préparer la base de données

#### Étape 1 — Ouvrir phpMyAdmin

Ouvrez phpMyAdmin depuis votre environnement local.

L'interface peut être accessible avec une adresse de ce type :

```text id="q8l4oh"
http://localhost/phpmyadmin
```

#### Étape 2 — Créer la base

Créez la base de données utilisée par votre projet.

Dans notre exemple :

```text id="n8s3vq"
blog_n1
```

Utilisez le même nom que celui indiqué dans `db.php`.

### 2.3. Importer le fichier SQL

#### Étape 1 — Choisir la base

Dans phpMyAdmin, ouvrez la base `blog_n1`.

#### Étape 2 — Ouvrir l'outil d'importation

Ouvrez l'onglet **Importer**.

#### Étape 3 — Sélectionner le fichier SQL

Sélectionnez le fichier fourni avec votre projet.

Exemple :

```text id="qz6tl9"
blog.sql
```

#### Étape 4 — Lancer l'importation

Lancez l'importation.

Les tables et les données du projet doivent être créées dans la base.

### 2.4. Vérifier les tables

#### Étape 1 — Observer la base

Dans phpMyAdmin, ouvrez la base.

#### Étape 2 — Vérifier les tables

Vérifiez que les tables prévues par votre application sont présentes.

Par exemple :

```text id="lmg1mp"
articles
categories
```

Les noms doivent correspondre à ceux utilisés dans les requêtes PHP.

### 2.5. Configurer `db.php`

#### Étape 1 — Ouvrir le fichier

Ouvrez :

```text id="s67bf5"
db.php
```

#### Étape 2 — Vérifier le nom de la base

Vérifiez la partie :

```text id="k5wtqx"
dbname=blog_n1
```

Elle doit correspondre à la base créée dans MySQL.

#### Étape 3 — Vérifier les identifiants

Vérifiez :

```php id="f5x2a1"
"root",
"mot_de_passe"
```

Utilisez le nom d'utilisateur et le mot de passe configurés dans votre environnement local.

#### Étape 4 — Vérifier l'hôte

Pour un environnement local, la connexion peut utiliser :

```text id="f2d9m9"
127.0.0.1
```

ou une configuration équivalente prévue par votre environnement.

### 2.6. Vérifier l'application

#### Étape 1 — Vérifier l'emplacement du projet

Le projet doit être placé dans le dossier Web utilisé par Apache.

Exemple :

```text id="p9qv7e"
www/
    blog/
        db.php
        index.php
        index-template.php
```

ou :

```text id="f8c8d0"
htdocs/
    blog/
        db.php
        index.php
        index-template.php
```

#### Étape 2 — Ouvrir l'application

Dans le navigateur, ouvrez :

```text id="nx9frj"
http://localhost/blog
```

#### Étape 3 — Vérifier les données

Les données enregistrées dans MySQL doivent apparaître dans l'application.

### 2.7. Vérifier que les données sont bien persistantes

#### Étape 1 — Modifier une donnée dans MySQL

Dans phpMyAdmin, ouvrez la table `articles`.

Modifiez le titre d'un article.

Par exemple :

```text id="a7mnc2"
Mon premier article
```

devient :

```text id="zjmwv9"
Mon premier article modifié
```

#### Étape 2 — Enregistrer la modification

Enregistrez la modification dans phpMyAdmin.

#### Étape 3 — Actualiser l'application

Retournez dans :

```text id="cn0r36"
http://localhost/blog
```

Actualisez la page.

Le nouveau titre doit apparaître.

La donnée affichée provient donc bien de MySQL.

### 2.8. Vérifier une erreur de connexion

#### Étape 1 — Observer le comportement

Si les identifiants ou le nom de la base sont incorrects, l'application peut afficher une erreur de connexion.

#### Étape 2 — Vérifier `db.php`

Contrôlez :

```text id="j26r9x"
hôte
nom de la base
utilisateur
mot de passe
```

#### Étape 3 — Vérifier MySQL

Vérifiez que le service MySQL est toujours démarré.

### 2.9. Vérifier l'architecture finale

Votre projet doit conserver une organisation simple :

```text id="qpd8vb"
blog/
    db.php
    index.php
    index-template.php
```

L'environnement local fournit :

```text id="y0h1nj"
Apache → application PHP
MySQL  → données
```

L'application utilise :

```text id="cq5fpr"
PHP → PDO → MySQL
```

### 2.10. Exercice individuel

**Travail à faire :**

À partir de votre application PHP :

1. démarrez Apache ;
2. démarrez MySQL ;
3. ouvrez phpMyAdmin ;
4. créez la base utilisée par votre application ;
5. importez le fichier `.sql` fourni ;
6. vérifiez les tables ;
7. vérifiez les paramètres de `db.php` ;
8. ouvrez l'application avec `localhost` ;
9. vérifiez que les données MySQL apparaissent ;
10. modifiez une donnée dans la base ;
11. vérifiez cette modification dans l'application.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- le nom de l'application ;
- le nom de la base de données ;
- le nom du fichier SQL importé ;
- les noms des principales tables ;
- l'URL locale de l'application ;
- une capture de l'application fonctionnelle.

**Résultat attendu :**

L'application PHP fonctionne avec Apache et MySQL.

Les données affichées dans l'application proviennent de la base de données.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/deploy/tuto-3-deploy.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Apache et MySQL sont démarrés.

La base de données est correctement importée.

`db.php` utilise les bons paramètres de connexion.

L'application est accessible avec `http://localhost/...`.

Les données de MySQL sont affichées dans l'application sans erreur de connexion.

## Bilan

**Vous avez appris :**

- à démarrer Apache et MySQL ;
- à créer une base de données ;
- à importer un fichier `.sql` ;
- à configurer la connexion PHP/MySQL ;
- à vérifier les données dans l'application.

**Vous avez réalisé :**

La mise en service locale complète d'une application PHP avec MySQL.

Le fonctionnement est maintenant :

```text id="cg8exk"
Navigateur
    ↓
Apache
    ↓
PHP
    ↓
MySQL
```

## Glossaire

- **MySQL** : système utilisé pour gérer une base de données.
- **Base de données** : ensemble organisé de données utilisées par l'application.
- **Table** : structure qui contient des données dans une base.
- **Fichier SQL** : fichier contenant des instructions SQL.
- **Importation** : action qui permet d'exécuter les instructions d'un fichier SQL dans une base.
- **phpMyAdmin** : interface Web permettant de gérer MySQL.
- **PDO** : outil PHP utilisé pour communiquer avec une base de données.
- **Identifiant** : information utilisée pour se connecter à un service.
- **Donnée persistante** : donnée conservée dans la base et disponible après un nouveau chargement.