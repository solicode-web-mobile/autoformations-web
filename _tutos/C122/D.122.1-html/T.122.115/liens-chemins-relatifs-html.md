---
title: "Liens et chemins relatifs HTML"
layout: tuto
slug: "liens-chemins-relatifs-html"
permalink: /tutos/:slug/
tuto_id: "T.122.115"
type: "classique"
version: "normal"
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

Créer des liens HTML et comprendre comment utiliser les chemins relatifs pour naviguer entre les différentes pages d'un site web.

## 2. Prérequis

* Savoir utiliser une structure HTML de base.
* Savoir utiliser un attribut et sa valeur.

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

### 1.1. Le lien `<a>` et l'attribut `href`

Pour créer un lien (un texte cliquable), on utilise la balise `<a>` (pour *anchor*).
Cette balise nécessite un attribut obligatoire : `href` (Hypertext Reference), qui indique la destination du lien.

```html
<a href="index.html">Accueil</a>
```
Ici, le texte cliquable est "Accueil", et un clic amènera l'utilisateur vers le fichier `index.html`.

### 1.2. Le chemin relatif

Un **chemin relatif** indique l’emplacement du fichier cible *par rapport* au fichier actuel. C'est comme donner des indications routières ("tourne à gauche, puis va tout droit") plutôt qu'une adresse absolue.

Prenons cette architecture de dossiers :
```text
mon-site/
├── tuto-5-html.html (Fichier courant)
├── index.html
└── pages/
    └── articles.html
```

- Pour pointer vers `index.html` (qui est dans le même dossier), le chemin est direct : `href="index.html"`
- Pour pointer vers `articles.html` (qui est dans le sous-dossier "pages"), on indique d'abord le dossier : `href="pages/articles.html"`

### 1.3. Remonter dans un dossier parent

Si votre fichier actuel est dans le dossier `pages/` et que vous voulez retourner à `index.html` (qui est un dossier plus haut), on utilise `..` pour remonter.

```html
<a href="../index.html">Retour à l'accueil</a>
```

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Dans VS Code, créez un fichier `tuto-5-html.html` et collez-y les données de départ.

### 2.2. Ajouter le texte principal

Dans la balise `<body>`, ajoutez un titre et un paragraphe pour introduire le sujet :

```html
<body>
    <h1>Liens et chemins relatifs HTML</h1>
    <p>Un lien permet d'accéder à une autre page du site.</p>
</body>
```

### 2.3. Créer des liens relatifs

Ajoutez un premier lien qui pointe vers un fichier au même niveau, suivi d'un saut de ligne (`<br>`), et d'un lien qui pointe vers un fichier situé dans un sous-dossier :

```html
    <a href="index.html">Accueil</a>
    
    <br>

    <a href="pages/articles.html">Voir les articles</a>
```

### 2.4. Tester la page

Enregistrez `tuto-5-html.html` et ouvrez-le dans le navigateur.

**Résultat attendu :**

La page affiche un titre, un texte et deux liens soulignés en bleu. Si vous cliquez dessus, le navigateur cherchera à ouvrir les fichiers cibles (même s'ils n'existent pas réellement sur votre ordinateur pour cet exercice, l'URL dans la barre d'adresse du navigateur changera en respectant vos chemins).

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-5/tuto-5-html.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 5">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page permettant la navigation au sein d'une arborescence de fichiers.

**Vous savez maintenant :** utiliser la balise `<a>` avec l'attribut `href`, et écrire un chemin relatif pour cibler des fichiers dans le même dossier ou dans un sous-dossier.

## 4. Glossaire

* **Lien hypertexte** : élément qui permet d’ouvrir une autre ressource au clic.
* **Chemin relatif** : chemin ciblant un fichier à partir de l’emplacement du fichier actuel.
* **Dossier parent** : dossier situé un niveau au-dessus (`..`).
