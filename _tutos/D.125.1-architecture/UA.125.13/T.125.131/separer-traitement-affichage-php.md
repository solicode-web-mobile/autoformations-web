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
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Accueil</title>
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

Dans ce tutoriel, vous allez apprendre à séparer deux rôles dans une page PHP :

- préparer les données ;
- afficher les données.

Vous allez créer :

```text
index.php
index-template.php
```

Le fichier `index.php` préparera les données.

Le fichier `index-template.php` affichera la page.

## 2. Prérequis

Vous devez savoir :

- créer une page HTML ;
- écrire du PHP simple ;
- créer une variable ;
- utiliser un tableau simple ;
- afficher une variable avec `<?= ... ?>` ;
- utiliser `require`.

Vous devez aussi savoir exécuter une page PHP avec un serveur local.

## Données de départ

### HTML

La page de départ contient directement le contenu de l'accueil.

```html id="b8zq0m"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
</head>

<body>
    <h1>Mon blog</h1>

    <article>
        <h2>Mon premier article</h2>
        <p>Bienvenue sur mon blog.</p>
    </article>
</body>
</html>
```

### CSS

Aucun fichier CSS n'est nécessaire dans ce tutoriel.

### JavaScript

Aucun fichier JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. Préparer les données

Une page PHP peut préparer les données avant de les afficher.

Par exemple :

```php id="h7fw85"
<?php

$article = [
    'titre' => 'Mon premier article',
    'contenu' => 'Bienvenue sur mon blog.'
];
```

Ici, PHP prépare les données de l'article.

Le fichier peut donc contenir le traitement nécessaire avant l'affichage.

### 1.2. Afficher les données

Les données préparées peuvent ensuite être affichées dans du HTML.

```php id="52q1yy"
<h2><?= $article['titre'] ?></h2>
<p><?= $article['contenu'] ?></p>
```

Le HTML utilise les données préparées par PHP.

### 1.3. Séparer les deux rôles

On peut placer la préparation dans :

```text
index.php
```

et l'affichage dans :

```text
index-template.php
```

Le rôle de chaque fichier devient alors plus clair.

### 1.4. Inclure le fichier d'affichage

Le fichier `index.php` peut charger le fichier `index-template.php` avec `require` :

```php id="6gc7c3"
require 'index-template.php';
```

PHP exécute alors le fichier demandé.

Les variables préparées dans `index.php` peuvent être utilisées dans `index-template.php`.

### 1.5. À retenir

- `index.php` prépare les données.
- `index-template.php` affiche les données.
- `require` permet d'inclure un autre fichier PHP.
- La séparation rend le code plus facile à lire.
- Les données préparées peuvent être utilisées par le fichier d'affichage.

## Partie 2 — Pratique

### 2.1. Créer `index.php`

#### Étape 1 — Créer le fichier

Créez :

```text
index.php
```

#### Étape 2 — Préparer les données

Ajoutez le code suivant :

```php id="f9h2k7"
<?php

$article = [
    'titre' => 'Mon premier article',
    'contenu' => 'Bienvenue sur mon blog.'
];
```

La variable `$article` contient maintenant les données à afficher.

### 2.2. Créer `index-template.php`

#### Étape 1 — Créer le fichier

Créez :

```text
index-template.php
```

#### Étape 2 — Déplacer le HTML

Ajoutez la structure HTML dans ce fichier :

```php id="jq7l36"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
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

Le fichier sert maintenant à afficher les données.

### 2.3. Inclure le fichier d'affichage

#### Étape 1 — Ajouter `require`

Retournez dans `index.php`.

Ajoutez :

```php id="xexg69"
require 'index-template.php';
```

Le fichier complet devient :

```php id="99mw8s"
<?php

$article = [
    'titre' => 'Mon premier article',
    'contenu' => 'Bienvenue sur mon blog.'
];

require 'index-template.php';
```

### 2.4. Vérifier la séparation

#### Étape 1 — Vérifier `index.php`

Il contient :

- les données ;
- l'appel à `index-template.php`.

Il ne contient pas le HTML de la page.

#### Étape 2 — Vérifier `index-template.php`

Il contient :

- la structure HTML ;
- l'affichage des données.

Il ne prépare pas les données.

### 2.5. Modifier une donnée

#### Étape 1 — Modifier le titre

Dans `index.php`, remplacez :

```php id="k8jy6v"
'titre' => 'Mon premier article'
```

par :

```php id="0r2c3c"
'titre' => 'Découvrir le métier de développeur'
```

#### Étape 2 — Modifier le contenu

Remplacez aussi :

```php id="4z4wz5"
'contenu' => 'Bienvenue sur mon blog.'
```

par :

```php id="g2h8t7"
'contenu' => 'Le développeur crée et améliore des applications.'
```

#### Étape 3 — Tester

Actualisez la page dans le navigateur.

Le nouveau titre et le nouveau contenu doivent apparaître.

Vous avez modifié les données sans modifier le fichier d'affichage.

### 2.6. Exercice individuel

**Travail à faire :**

Créez une nouvelle donnée d'article dans `index.php`.

Votre article doit contenir :

- un titre ;
- un contenu.

Affichez ces deux données dans `index-template.php`.

Conservez la séparation suivante :

```text
index.php
    préparation des données

index-template.php
    affichage
```

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses.

Ajoutez :

- le rôle de `index.php` ;
- le rôle de `index-template.php` ;
- le code de préparation des données ;
- le code d'affichage.

**Résultat attendu :**

La page affiche votre nouvel article.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/architecture/tuto-3-architecture.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page fonctionne avec deux fichiers.

`index.php` prépare les données.

`index-template.php` affiche les données.

Le fichier `index-template.php` est chargé avec `require`.

## Bilan

**Vous avez appris :**

- à préparer des données en PHP ;
- à séparer les données de leur affichage ;
- à utiliser `require` pour inclure un fichier.

**Vous avez réalisé :**

Une page d'accueil organisée en deux fichiers :

```text
index.php
index-template.php
```

## Glossaire

- **Traitement** : travail effectué par PHP avant l'affichage.
- **Affichage** : présentation des données dans la page.
- **Donnée** : information utilisée par l'application.
- **Template** : fichier utilisé pour construire l'affichage.
- **`require`** : instruction PHP qui inclut un fichier.
- **Variable** : nom qui permet de stocker une donnée.