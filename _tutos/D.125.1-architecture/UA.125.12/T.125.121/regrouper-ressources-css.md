---
title: "Regrouper les ressources communes et structurer le CSS"
layout: tuto
slug: "regrouper-ressources-css"
permalink: /tutos/regrouper-ressources-css/
tuto_id: "T.125.121"
type: "classique"
version: "normal"
ua: "UA.125.12"
nav_order: 1
data_html: |
  index.html
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Accueil</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <h1>Mon blog</h1>
          <nav>
              <a href="index.html">Accueil</a>
              <a href="article.html">Article</a>
          </nav>
      </header>

      <main>
          <h2>Bienvenue</h2>
          <p>Découvrez les articles du blog.</p>
      </main>
  </body>
  </html>

  article.html
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Article</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <h1>Mon blog</h1>
          <nav>
              <a href="index.html">Accueil</a>
              <a href="article.html">Article</a>
          </nav>
      </header>

      <main>
          <h2>Mon premier article</h2>
          <p>Voici le contenu de mon article.</p>
      </main>
  </body>
  </html>

data_css: |
  body {
      font-family: Arial, sans-serif;
      margin: 0;
  }

  header {
      padding: 20px;
      background: #eeeeee;
  }

  nav a {
      margin-right: 15px;
  }

  main {
      padding: 20px;
  }

data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à organiser les ressources d'un petit site Web.

Vous allez :

- créer deux pages HTML ;
- partager les mêmes fichiers CSS ;
- créer un dossier `css/` ;
- créer un dossier `images/` ;
- séparer le CSS en plusieurs fichiers.

À la fin, les deux pages utiliseront les mêmes ressources.

## 2. Prérequis

Vous devez savoir :

- créer une page HTML ;
- créer un fichier CSS ;
- relier un fichier CSS avec `link` ;
- créer un dossier dans un projet ;
- utiliser un chemin relatif simple.

Vous devez aussi avoir réalisé la séparation HTML, CSS et JavaScript dans le tutoriel précédent.

## Données de départ

### HTML

Le projet contient deux pages.

### `index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Mon blog</h1>

        <nav>
            <a href="index.html">Accueil</a>
            <a href="article.html">Article</a>
        </nav>
    </header>

    <main>
        <h2>Bienvenue</h2>
        <p>Découvrez les articles du blog.</p>
    </main>
</body>
</html>
```

### `article.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Article</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Mon blog</h1>

        <nav>
            <a href="index.html">Accueil</a>
            <a href="article.html">Article</a>
        </nav>
    </header>

    <main>
        <h2>Mon premier article</h2>
        <p>Voici le contenu de mon article.</p>
    </main>
</body>
</html>
```

### CSS

Le projet contient actuellement un seul fichier `style.css`.

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

header {
    padding: 20px;
    background: #eeeeee;
}

nav a {
    margin-right: 15px;
}

main {
    padding: 20px;
}
```

### JavaScript

Aucun fichier JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. Une ressource commune

Une ressource commune est un fichier utilisé par plusieurs pages.

Par exemple, les deux pages du blog utilisent le même CSS.

```html
<link rel="stylesheet" href="style.css">
```

Un seul fichier peut donc être partagé par plusieurs pages.

### 1.2. Le dossier `css/`

Lorsque le projet contient plusieurs fichiers CSS, il est utile de les regrouper dans un dossier.

Exemple :

```text
css/
    global.css
    layout.css
    components.css
    pages.css
```

Le dossier permet de retrouver plus facilement les fichiers CSS.

### 1.3. Le dossier `images/`

Les images du site peuvent aussi être regroupées dans un dossier.

Exemple :

```text
images/
    logo.png
    article.png
```

Les pages peuvent utiliser les mêmes images.

### 1.4. Séparer le CSS par rôle

Lorsque le CSS devient plus grand, on peut le répartir en plusieurs fichiers.

Dans ce tutoriel :

- `global.css` contient les règles générales ;
- `layout.css` contient la structure de la page ;
- `components.css` contient les éléments réutilisables ;
- `pages.css` contient les règles liées aux pages.

Cette organisation permet de retrouver plus facilement une règle CSS.

### 1.5. Utiliser plusieurs fichiers CSS

Une page HTML peut charger plusieurs fichiers CSS.

```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
```

Les fichiers sont chargés par la page HTML.

### 1.6. À retenir

- Les ressources communes peuvent être partagées.
- Les fichiers CSS peuvent être regroupés dans `css/`.
- Les images peuvent être regroupées dans `images/`.
- Un CSS volumineux peut être séparé en plusieurs fichiers.
- Plusieurs pages peuvent utiliser les mêmes ressources.

## Partie 2 — Pratique

### 2.1. Créer les dossiers

#### Étape 1 — Créer le dossier `css`

Dans le projet, créez :

```text
css
```

#### Étape 2 — Créer le dossier `images`

Dans le projet, créez :

```text
images
```

Votre projet commence à avoir cette forme :

```text
index.html
article.html
style.css
css/
images/
```

### 2.2. Séparer le fichier CSS

#### Étape 1 — Créer `global.css`

Dans le dossier `css`, créez :

```text
global.css
```

Placez-y les règles générales :

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
}
```

#### Étape 2 — Créer `layout.css`

Créez :

```text
layout.css
```

Placez-y les règles liées à la structure :

```css
header {
    padding: 20px;
    background: #eeeeee;
}

main {
    padding: 20px;
}
```

#### Étape 3 — Créer `components.css`

Créez :

```text
components.css
```

Placez-y les règles des éléments réutilisables :

```css
nav a {
    margin-right: 15px;
}
```

#### Étape 4 — Créer `pages.css`

Créez :

```text
pages.css
```

Ce fichier peut rester vide pour le moment.

Il servira plus tard aux règles propres aux pages.

### 2.3. Modifier les pages HTML

#### Étape 1 — Supprimer l'ancien lien CSS

Dans `index.html`, supprimez :

```html
<link rel="stylesheet" href="style.css">
```

#### Étape 2 — Ajouter les nouveaux fichiers CSS

Dans `index.html`, ajoutez :

```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
```

#### Étape 3 — Faire la même modification dans `article.html`

Remplacez aussi :

```html
<link rel="stylesheet" href="style.css">
```

par :

```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
```

### 2.4. Supprimer l'ancien fichier CSS

#### Étape 1 — Vérifier les fichiers

Vérifiez que les règles de `style.css` ont bien été réparties.

#### Étape 2 — Supprimer `style.css`

Lorsque les deux pages fonctionnent avec les nouveaux fichiers, supprimez :

```text
style.css
```

L'arborescence devient :

```text
index.html
article.html
css/
    global.css
    layout.css
    components.css
    pages.css
images/
```

### 2.5. Ajouter une ressource partagée

#### Étape 1 — Ajouter une image

Placez une image nommée :

```text
logo.png
```

dans :

```text
images/
```

#### Étape 2 — Ajouter l'image dans les deux pages

Dans chaque page, ajoutez :

```html
<img src="images/logo.png" alt="Mon blog">
```

Les deux pages utilisent maintenant la même image.

### 2.6. Tester le mini-site

#### Étape 1 — Ouvrir `index.html`

Vérifiez que la page affiche :

- le titre ;
- le menu ;
- le contenu ;
- le logo ;
- le style CSS.

#### Étape 2 — Ouvrir `article.html`

Vérifiez que la deuxième page utilise les mêmes ressources.

#### Étape 3 — Tester la navigation

Cliquez sur :

```text
Accueil
```

puis sur :

```text
Article
```

Les deux pages doivent fonctionner.

### 2.7. Vérifier l'organisation

Vérifiez les éléments suivants :

```text
index.html
article.html
css/
    global.css
    layout.css
    components.css
    pages.css
images/
    logo.png
```

Les ressources communes ne doivent pas être copiées dans chaque page.

**Travail à faire :**

Créez un mini-site de deux pages en utilisant :

- un dossier `css/` ;
- un dossier `images/` ;
- quatre fichiers CSS ;
- une image commune ;
- une navigation entre les deux pages.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- l'arborescence finale du projet ;
- le rôle de chaque fichier CSS ;
- le nom de la ressource image commune ;
- une capture du résultat des deux pages.

**Résultat attendu :**

Les deux pages utilisent les mêmes ressources CSS et la même image.

Les fichiers sont organisés dans les dossiers `css/` et `images/`.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/architecture/tuto-2-architecture.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les deux pages fonctionnent correctement avec les ressources placées dans les dossiers `css/` et `images/`.

## Bilan

**Vous avez appris :**

- à regrouper les ressources communes ;
- à organiser les fichiers CSS ;
- à utiliser un dossier `css/` ;
- à utiliser un dossier `images/` ;
- à partager les mêmes ressources entre plusieurs pages.

**Vous avez réalisé :**

Un mini-site de deux pages avec des ressources communes et un CSS organisé.

## Glossaire

- **Ressource commune** : fichier utilisé par plusieurs pages.
- **Dossier** : emplacement qui regroupe plusieurs fichiers.
- **Arborescence** : organisation des fichiers et des dossiers d'un projet.
- **CSS global** : CSS utilisé pour les règles générales du site.
- **Layout** : organisation de la structure visuelle d'une page.
- **Composant** : élément réutilisable dans plusieurs pages.
- **Chemin relatif** : chemin utilisé pour retrouver un fichier depuis un autre fichier.