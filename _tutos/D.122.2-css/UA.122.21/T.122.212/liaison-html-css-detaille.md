---
title: "Liaison HTML–CSS"
layout: tuto
slug: "liaison-html-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.212"
type: "classique"
version: "detaille"
ua: "UA.122.21"
nav_order: 2
data_html: | 
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Liaison HTML-CSS</title>
    </head>
    <body>
        <h1>Mon article</h1>
        <p>Bienvenue sur ma page.</p>
        <p>Voici le contenu de mon article.</p>
    </body>
    </html>
data_css: |
    p {
        color: blue;
    }
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

Comprendre les 3 méthodes d'intégration du CSS (Inline, Interne, Externe) et maîtriser la méthode externe grâce à la balise `<link>`, indispensable pour les projets professionnels.

## 2. Prérequis

* Connaître la syntaxe d'une règle CSS.
* Comprendre le principe des chemins relatifs (voir T.122.115).

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liaison HTML-CSS</title>
</head>
<body>
    <h1>Mon article</h1>
    <p>Bienvenue sur ma page.</p>
    <p>Voici le contenu de mon article.</p>
</body>
</html>
```

**Code CSS de départ :**
```css
p {
    color: blue;
}
```

## Partie 1 — Théorie

Il existe 3 façons d'appliquer du CSS à une page HTML. Comprendre leurs différences est fondamental.

### 1.1. Le CSS Inline (En ligne)
On injecte le style directement dans la balise HTML via l'attribut `style`.
```html
<p style="color: blue;">Bienvenue</p>
```
**Inconvénient :** C'est très lourd à lire et impossible à maintenir si vous avez des centaines de paragraphes. À éviter au maximum (sauf cas très spécifiques).

### 1.2. Le CSS Interne
C'est la méthode vue au tutoriel précédent. On utilise la balise `<style>` dans le `<head>`.
```html
<head>
    <style> p { color: blue; } </style>
</head>
```
**Inconvénient :** Si votre site compte 10 pages (Accueil, Contact, Tarifs...), vous devrez copier-coller ce bloc `<style>` dans les 10 fichiers HTML. Si vous voulez changer le bleu en rouge, vous devrez modifier les 10 fichiers un par un.

### 1.3. Le CSS Externe (La bonne pratique)
On écrit le code CSS dans un fichier `.css` totalement indépendant, qui ne contient *aucune* balise HTML. Ensuite, on utilise la balise de liaison `<link>` dans le `<head>` de chaque page HTML.

```html
<link rel="stylesheet" href="style.css">
```
- `<link>` : Indique qu'on va attacher un fichier externe.
- `rel="stylesheet"` : Précise que la *relation* entre la page et le fichier est "une feuille de style".
- `href="style.css"` : Indique le chemin relatif vers le fichier.

**Avantage majeur :** Les 10 pages HTML pointent vers le même fichier `style.css`. Changez la couleur en rouge dans ce fichier unique, et toutes vos pages se mettront à jour instantanément !

## Partie 2 — Pratique

### 2.1. Créer les fichiers séparés

Dans votre espace de travail :
1. Créez un fichier `tuto-2-css.html` et collez-y les données HTML de départ.
2. Créez un fichier `tuto-2-css.css` (assurez-vous qu'il soit dans le même dossier) et collez-y les données CSS de départ.

### 2.2. Créer la liaison

Maintenant que vous avez vos deux fichiers, vous devez les connecter.
Dans `tuto-2-css.html`, ajoutez la balise `<link>` dans la section `<head>` :

```html
<head>
    <meta charset="UTF-8">
    <title>Liaison HTML-CSS</title>
    
    <!-- Connexion au fichier CSS externe -->
    <link rel="stylesheet" href="tuto-2-css.css">
</head>
```

### 2.3. Tester et valider

Enregistrez obligatoirement vos **deux** fichiers. Ouvrez la page HTML dans le navigateur.

**Résultat attendu :**
Au moment où le navigateur lit la ligne `<link>`, il télécharge le fichier `tuto-2-css.css` en arrière-plan, l'analyse, et met les paragraphes en bleu. 

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-2/tuto-2-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 2">
</iframe>

## 4. Bilan

**Vous avez réalisé :** l'externalisation d'une feuille de style, pilier de l'architecture d'un site web.

**Vous savez maintenant :** 
- Pourquoi le CSS externe est préférable au CSS inline ou interne.
- Créer un fichier `.css` valide.
- Connecter les fichiers via `<link rel="stylesheet" href="...">`.
