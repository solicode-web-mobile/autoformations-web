---
title: "Liens et chemins relatifs HTML"
layout: tuto
slug: "liens-chemins-relatifs-html"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.115"
type: "classique"
version: "detaille"
ua: "UA.122.11"
nav_order: 5
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Liens et chemins relatifs HTML</title>
    </head>
    <body>
    </body>
    </html>
data_css: ""
data_js: ""
---

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

Maîtriser le cœur du Web (les hyperliens) en apprenant à manipuler la balise `<a>`, à gérer l'ouverture dans un nouvel onglet, et surtout, à comprendre en profondeur la notion d'arborescence et de chemins relatifs.

## 2. Prérequis

* Savoir utiliser une structure HTML de base.
* Comprendre le fonctionnement d'un attribut.
* Avoir une idée de ce qu'est un dossier (répertoire) et un sous-dossier sur un ordinateur.

## 3. Données de départ

Nous partons d'un document HTML de base structuré :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liens et chemins relatifs HTML</title>
</head>
<body>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'ancre et l'hyperlien (`<a>`)

La base du Web est le lien. En HTML, le lien se crée avec la balise **`<a>`** (pour *Anchor*, ancre en français). 
La balise a obligatoirement besoin de l'attribut **`href`** (*Hypertext REFerence*) qui contient l'adresse (l'URL) de la destination.

```html
<a href="https://google.com">Aller sur Google</a>
```

### 1.2. Ouvrir dans un nouvel onglet

Par défaut, quand on clique sur un lien, la nouvelle page remplace la page actuelle. Si l'on souhaite forcer l'ouverture dans un nouvel onglet (très utile pour des liens externes), on ajoute l'attribut `target="_blank"`.

```html
<a href="https://google.com" target="_blank">Aller sur Google</a>
```

### 1.3. L'importance du chemin relatif

Pour lier des pages *à l'intérieur* de votre propre site, vous ne devez **jamais** utiliser un chemin absolu (ex: `C:\MonDossier\ma-page.html`), car ce chemin ne fonctionnera plus une fois le site mis en ligne sur un serveur.
On utilise toujours des **chemins relatifs** : le point de départ est le fichier dans lequel vous écrivez le code.

Imaginons cette arborescence de fichiers :
```text
mon-projet/
├── tuto-5-html.html  <-- VOUS ÊTES ICI
├── index.html
└── pages/
    └── articles.html
    └── profil.html
```

#### Naviguer dans le même dossier
Pour aller de `tuto-5-html.html` à `index.html`, le chemin est direct :
`href="index.html"`

#### Descendre dans un sous-dossier
Pour aller de `tuto-5-html.html` vers `articles.html`, vous devez d'abord "entrer" dans le dossier `pages`. En informatique, on l'écrit avec une barre oblique `/` :
`href="pages/articles.html"`

#### Remonter d'un dossier
Imaginons que vous soyez en train d'écrire du code *à l'intérieur* de `articles.html` et que vous vouliez revenir à l'accueil (`index.html`). Vous devez ordonner au navigateur de "sortir" du dossier courant. On utilise alors **`..`** :
`href="../index.html"`

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Créez un fichier `tuto-5-html.html` et collez-y les données de départ.

### 2.2. Créer une interface de navigation

Dans la balise `<body>`, ajoutez l'interface suivante qui illustre trois types de liens (même niveau, sous-dossier, et lien externe) :

```html
<body>
    <h1>Liens et chemins relatifs HTML</h1>
    <p>La balise &lt;a&gt; permet d'accéder à une autre ressource.</p>
    
    <!-- 1. Lien vers un fichier dans le même dossier -->
    <a href="index.html">Accueil du site</a>
    
    <br>

    <!-- 2. Lien vers un fichier dans un sous-dossier "pages" -->
    <a href="pages/articles.html">Voir les articles de blog</a>

    <br><br> <!-- Double saut de ligne pour espacer -->

    <!-- 3. Lien absolu externe s'ouvrant dans un nouvel onglet -->
    <a href="https://wikipedia.org" target="_blank">Rechercher sur Wikipedia</a>
</body>
```

### 2.3. Tester la page

Enregistrez le fichier et ouvrez-le. 
Cliquez sur le lien Wikipedia pour vérifier l'ouverture d'un nouvel onglet.
Passez votre souris sur les deux premiers liens et regardez en bas à gauche de votre navigateur : il vous montrera l'adresse locale calculée automatiquement grâce à vos chemins relatifs !

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-5/tuto-5-html.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 5">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page de navigation incluant des liens internes et externes.

**Vous savez maintenant :** utiliser l'attribut `target="_blank"`, et construire des chemins relatifs pour descendre (`/`) ou remonter (`..`) dans l'arborescence de votre site web.
