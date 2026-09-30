---
title: "Démarrer un environnement PHP (Apache)"
layout: tuto
slug: "demarrer-environnement-php"
permalink: /tutos/demarrer-environnement-php/
tuto_id: "T.141.12.1"
type: "classique"
version: "normal"
ua: "UA.141.12"
nav_order: 1
data_html: |
  <?php

  $articles = [
      [
          'titre' => 'Mon premier article',
          'contenu' => 'Bienvenue sur mon blog.'
      ],
      [
          'titre' => 'Découvrir le Web',
          'contenu' => 'Le Web utilise des pages et des serveurs.'
      ]
  ];

  require 'index-template.php';

data_css: ""

data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à exécuter une application PHP avec un serveur Web local.

Vous allez :

- démarrer Apache ;
- placer votre projet dans le dossier prévu par le serveur ;
- accéder au projet avec `localhost` ;
- vérifier que PHP est bien exécuté.

À la fin, votre application sera accessible avec une adresse de ce type :

```text
http://localhost/blog
```

## 2. Prérequis

Vous devez savoir :

- créer un fichier PHP ;
- utiliser une variable PHP ;
- utiliser un tableau PHP ;
- utiliser `require` ;
- séparer le traitement et l'affichage ;
- utiliser un navigateur Web.

Vous devez aussi avoir réalisé le tutoriel **T.125.13.1 — Séparer traitement et affichage en PHP**.

## Données de départ

### HTML

Le projet contient une page dynamique composée de deux fichiers.

### `index.php`

```php
<?php

$articles = [
    [
        'titre' => 'Mon premier article',
        'contenu' => 'Bienvenue sur mon blog.'
    ],
    [
        'titre' => 'Découvrir le Web',
        'contenu' => 'Le Web utilise des pages et des serveurs.'
    ]
];

require 'index-template.php';
```

### `index-template.php`

```php
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

Aucun fichier CSS n'est nécessaire dans ce tutoriel.

### JavaScript

Aucun fichier JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. Une page PHP

Une page PHP peut contenir du code qui doit être exécuté par PHP.

Par exemple :

```php
<?php

$message = "Bonjour";
echo $message;
```

Le serveur exécute le code PHP avant d'envoyer le résultat au navigateur.

### 1.2. Le rôle du serveur Web

Le navigateur ne doit pas recevoir le code PHP brut.

Le serveur Web reçoit la demande du navigateur.

Il transmet ensuite le fichier PHP à PHP pour son exécution.

Le navigateur reçoit finalement le résultat produit.

Le fonctionnement est donc :

```text
Navigateur
    ↓
Apache
    ↓
PHP
    ↓
Résultat HTML
    ↓
Navigateur
```

### 1.3. Apache

Apache est un serveur Web.

Dans un environnement local, il permet de servir les pages de votre application.

Lorsque vous utilisez Apache avec PHP, une page `.php` peut être exécutée avant d'être envoyée au navigateur.

### 1.4. Le dossier du serveur

Le serveur attend les fichiers du projet dans un dossier prévu pour les sites Web.

Selon l'environnement utilisé, ce dossier peut être par exemple :

```text
www/
```

ou :

```text
htdocs/
```

Le nom exact dépend de l'environnement local utilisé.

### 1.5. `localhost`

`localhost` désigne votre ordinateur.

Une URL comme :

```text
http://localhost/blog
```

demande donc au serveur Web installé sur votre ordinateur de fournir le projet `blog`.

### 1.6. Pourquoi ne pas utiliser `file:///`

Une page PHP ne doit pas être ouverte directement comme un fichier.

Cette adresse :

```text
file:///C:/mon-projet/index.php
```

ne permet pas au serveur d'exécuter correctement le code PHP.

Il faut passer par le serveur Web :

```text
http://localhost/blog
```

### 1.7. À retenir

- Apache est un serveur Web.
- PHP exécute le code PHP côté serveur.
- Le projet doit être placé dans le dossier utilisé par le serveur.
- `localhost` permet d'accéder au serveur local.
- Une page PHP doit être demandée avec `http://`, et non avec `file:///`.

## Partie 2 — Pratique

### 2.1. Préparer l'environnement

#### Étape 1 — Ouvrir votre environnement local

Lancez votre environnement de développement local, par exemple Laragon ou XAMPP.

#### Étape 2 — Vérifier Apache

Repérez le service **Apache**.

Vous allez utiliser Apache pour servir votre application PHP.

### 2.2. Démarrer Apache

#### Étape 1 — Lancer Apache

Démarrez le service Apache.

#### Étape 2 — Vérifier son état

Vérifiez que le service est démarré dans votre environnement local.

Apache doit maintenant pouvoir recevoir les demandes du navigateur.

### 2.3. Placer le projet

#### Étape 1 — Repérer le dossier Web

Repérez le dossier utilisé par votre environnement.

Il peut s'appeler :

```text
www
```

ou :

```text
htdocs
```

#### Étape 2 — Copier le projet

Placez votre projet dans ce dossier.

Par exemple :

```text
www/
    blog/
        index.php
        index-template.php
```

ou :

```text
htdocs/
    blog/
        index.php
        index-template.php
```

Le nom `blog` correspond au nom du dossier du projet.

### 2.4. Ouvrir l'application avec `localhost`

#### Étape 1 — Ouvrir le navigateur

Lancez votre navigateur Web.

#### Étape 2 — Saisir l'adresse

Entrez :

```text
http://localhost/blog
```

#### Étape 3 — Vérifier la page

Le navigateur doit afficher la page du blog.

Les deux articles doivent apparaître.

### 2.5. Vérifier que PHP fonctionne

#### Étape 1 — Modifier le contenu

Dans `index.php`, modifiez le premier titre :

```php
'titre' => 'Mon premier article PHP'
```

#### Étape 2 — Enregistrer

Enregistrez le fichier.

#### Étape 3 — Actualiser la page

Rechargez la page dans le navigateur.

Le nouveau titre doit apparaître.

Cela montre que le serveur exécute bien le fichier PHP.

### 2.6. Vérifier le résultat dans le navigateur

Vous devez voir une page similaire à :

```text
Mon blog

Mon premier article PHP
Bienvenue sur mon blog.

Découvrir le Web
Le Web utilise des pages et des serveurs.
```

Le navigateur ne doit pas afficher le code PHP :

```text
<?php
$articles = ...
```

Il doit afficher le résultat de son exécution.

### 2.7. Comparer les deux modes d'ouverture

#### Étape 1 — Ouvrir directement le fichier

Vous pouvez voir une adresse de type :

```text
file:///...
```

Ce n'est pas le mode utilisé pour exécuter votre application PHP.

#### Étape 2 — Utiliser le serveur

Utilisez :

```text
http://localhost/blog
```

C'est le serveur local qui prend en charge le fichier PHP.

### 2.8. Vérifier l'organisation du projet

Votre projet doit conserver une structure simple :

```text
blog/
    index.php
    index-template.php
```

Le projet doit être placé dans le dossier Web de votre environnement :

```text
www/
    blog/
```

ou :

```text
htdocs/
    blog/
```

### 2.9. Exercice individuel

**Travail à faire :**

À partir de votre projet PHP :

1. démarrez Apache ;
2. placez votre projet dans le dossier Web de votre environnement ;
3. ouvrez le projet avec `localhost` ;
4. vérifiez que la page PHP s'affiche ;
5. modifiez une donnée dans `index.php` ;
6. rechargez la page ;
7. vérifiez que la nouvelle donnée apparaît.

Ne modifiez pas la structure de la page.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- le nom de votre projet ;
- le nom de l'environnement local utilisé ;
- le nom du serveur Web utilisé ;
- le dossier dans lequel vous avez placé le projet ;
- l'URL locale utilisée ;
- une capture de l'application ouverte dans le navigateur.

**Résultat attendu :**

L'application PHP est accessible avec une URL de ce type :

```text
http://localhost/blog
```

Le code PHP est exécuté par le serveur.

Le navigateur affiche le résultat HTML.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/deploy/tuto-2-deploy.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

L'application fonctionne avec Apache.

La page est accessible avec `http://localhost/...`.

Le navigateur affiche le résultat produit par PHP et non le code PHP brut.

## Bilan

**Vous avez appris :**

- à démarrer Apache ;
- à placer une application PHP dans le dossier Web ;
- à utiliser `localhost` ;
- à exécuter une page PHP avec un serveur local ;
- à vérifier que PHP est interprété correctement.

**Vous avez réalisé :**

La mise en service locale d'une application PHP sans base de données.

Le projet est maintenant accessible avec une URL locale :

```text
http://localhost/blog
```

## Glossaire

- **Apache** : serveur Web qui reçoit les demandes du navigateur.
- **PHP** : langage exécuté côté serveur.
- **Serveur Web** : programme qui fournit des pages Web au navigateur.
- **Local** : qui fonctionne sur votre propre ordinateur.
- **`localhost`** : nom utilisé pour accéder au serveur de votre ordinateur.
- **`http://`** : protocole utilisé pour demander une page au serveur Web.
- **`htdocs`** : dossier utilisé par certains environnements locaux pour les sites Web.
- **`www`** : dossier utilisé par certains environnements locaux pour les sites Web.