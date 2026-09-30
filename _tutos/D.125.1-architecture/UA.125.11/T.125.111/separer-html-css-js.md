---
title: "Séparer le HTML, CSS et JavaScript"
layout: tuto
slug: "separer-html-css-js"
permalink: /tutos/separer-html-css-js/
tuto_id: "T.125.111"
type: "classique"
version: "normal"
ua: "UA.125.11"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon article</title>

      <style>
          body {
              font-family: Arial, sans-serif;
          }

          h1 {
              color: #333;
          }
      </style>
  </head>

  <body>
      <h1>Mon article</h1>

      <p>Bienvenue sur ma page.</p>
      <p>Voici le contenu de mon article.</p>

      <script>
          console.log("JavaScript chargé.");
      </script>
  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à séparer le code d'une page Web.

Vous allez créer :

- un fichier HTML pour le contenu ;
- un fichier CSS pour le style ;
- un fichier JavaScript pour le comportement.

À la fin, les trois fichiers seront liés et la page fonctionnera comme avant.

## 2. Prérequis

Vous devez savoir :

- créer un fichier ;
- écrire une structure HTML simple ;
- ajouter un titre avec `h1` ;
- ajouter un paragraphe avec `p` ;
- ouvrir une page HTML dans un navigateur.

## Données de départ

### HTML

Le code de départ est contenu dans un seul fichier `article.html`.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>

    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h1 {
            color: #333;
        }
    </style>
</head>

<body>
    <h1>Mon article</h1>

    <p>Bienvenue sur ma page.</p>
    <p>Voici le contenu de mon article.</p>

    <script>
        console.log("JavaScript chargé.");
    </script>
</body>
</html>
```

### CSS

Le CSS est encore écrit dans `article.html`.

### JavaScript

Le JavaScript est encore écrit dans `article.html`.

## Partie 1 — Théorie

### 1.1. Le rôle du fichier HTML

Le fichier HTML contient la structure et le contenu de la page.

Par exemple :

```html
<h1>Mon article</h1>
<p>Bienvenue sur ma page.</p>
```

Le fichier HTML indique ce qui doit apparaître dans la page.

### 1.2. Le rôle du fichier CSS

Le fichier CSS contient les règles qui définissent l'apparence de la page.

Par exemple :

```css
h1 {
    color: #333;
}
```

Le CSS permet de modifier le style sans modifier le contenu HTML.

### 1.3. Le rôle du fichier JavaScript

Le fichier JavaScript contient le code qui ajoute un comportement à la page.

Dans notre exemple :

```javascript
console.log("JavaScript chargé.");
```

Ce code permet de vérifier que le fichier JavaScript est chargé.

### 1.4. Relier les fichiers

Le HTML peut utiliser un fichier CSS avec `link` :

```html
<link rel="stylesheet" href="style.css">
```

Le HTML peut utiliser un fichier JavaScript avec `script` :

```html
<script src="script.js" defer></script>
```

Le fichier HTML reste le point de départ de la page.

### 1.5. À retenir

- HTML = contenu et structure.
- CSS = apparence.
- JavaScript = comportement.
- Les fichiers peuvent être séparés.
- Le HTML doit être relié aux fichiers CSS et JavaScript.

## Partie 2 — Pratique

### 2.1. Créer les fichiers

#### Étape 1 — Ouvrir le projet

Ouvrez le dossier de votre projet dans Visual Studio Code.

#### Étape 2 — Créer le fichier CSS

Créez un fichier nommé :

```text
style.css
```

#### Étape 3 — Déplacer le CSS

Dans `article.html`, supprimez la balise `style`.

Placez son contenu dans `style.css` :

```css
body {
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}
```

#### Étape 4 — Relier le fichier CSS

Dans `article.html`, ajoutez la ligne suivante dans `head` :

```html
<link rel="stylesheet" href="style.css">
```

La partie `head` devient :

```html
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>

    <link rel="stylesheet" href="style.css">
</head>
```

#### Étape 5 — Créer le fichier JavaScript

Créez un fichier nommé :

```text
script.js
```

#### Étape 6 — Déplacer le JavaScript

Dans `article.html`, supprimez la balise `script` qui contient le code JavaScript.

Placez son contenu dans `script.js` :

```javascript
console.log("JavaScript chargé.");
```

#### Étape 7 — Relier le fichier JavaScript

Ajoutez cette ligne avant la fermeture de `body` :

```html
<script src="script.js" defer></script>
```

Votre fichier `article.html` devient :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Mon article</h1>

    <p>Bienvenue sur ma page.</p>
    <p>Voici le contenu de mon article.</p>

    <script src="script.js" defer></script>
</body>
</html>
```

### 2.2. Vérifier la séparation

#### Étape 1 — Vérifier le HTML

Dans `article.html`, vérifiez qu'il n'y a plus de bloc `style`.

Vérifiez aussi qu'il n'y a plus de code JavaScript écrit directement dans le HTML.

#### Étape 2 — Vérifier le CSS

Ouvrez `style.css`.

Vérifiez que les règles CSS sont présentes.

#### Étape 3 — Vérifier le JavaScript

Ouvrez `script.js`.

Vérifiez que le code JavaScript est présent.

#### Étape 4 — Tester la page

Ouvrez `article.html` dans le navigateur.

Vérifiez que :

- le titre apparaît ;
- les paragraphes apparaissent ;
- le style fonctionne.

### 2.3. Exercice individuel

**Travail à faire :**

À partir de la page fournie :

1. Séparez le HTML dans `article.html`.
2. Séparez le CSS dans `style.css`.
3. Séparez le JavaScript dans `script.js`.
4. Reliez les trois fichiers.
5. Ouvrez la page dans le navigateur.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- les noms des trois fichiers ;
- une courte phrase indiquant le rôle de chaque fichier ;
- une capture ou une description du résultat obtenu.

**Résultat attendu :**

La page conserve le même contenu et le même style.

Les trois fichiers sont séparés et correctement liés.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/architecture/tuto-1-architecture.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page fonctionne sans CSS ou JavaScript écrit directement dans `article.html`.

## Bilan

**Vous avez réalisé :**

Une page Web composée de trois fichiers :

```text
article.html
style.css
script.js
```

**Vous savez maintenant :**

- séparer le contenu HTML ;
- séparer le style CSS ;
- séparer le code JavaScript ;
- relier les trois fichiers ;
- vérifier que la page fonctionne après la séparation.

## Glossaire

- **HTML** : langage utilisé pour créer la structure d'une page Web.
- **CSS** : langage utilisé pour définir l'apparence d'une page Web.
- **JavaScript** : langage utilisé pour ajouter du comportement à une page Web.
- **Ressource** : fichier utilisé par une page Web.
- **`link`** : balise HTML utilisée ici pour relier un fichier CSS.
- **`script`** : balise HTML utilisée pour charger du JavaScript.