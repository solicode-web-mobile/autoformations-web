---
title: "Liens et chemins relatifs HTML"
layout: tuto
slug: "liens-chemins-relatifs-html"
permalink: /tutos/:slug/compact
tuto_id: "T.122.115"
type: "classique"
version: "compact"
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

Créer des liens permettant de naviguer d'une page à l'autre grâce aux chemins relatifs.

## 2. Prérequis

* Connaître la balise `<a>` et l'attribut `href`.

## Partie 1 — Théorie

Pour créer un lien, on utilise `<a href="...">`.
L'attribut `href` contient le **chemin** vers le fichier cible :
* **Même dossier** : `href="page2.html"`
* **Sous-dossier** : `href="dossier/page2.html"`
* **Dossier parent** (remonter) : `href="../page2.html"`

## Partie 2 — Pratique

### 2.1. Créer le fichier

Créez `tuto-5-html.html` et collez les données de départ.

### 2.2. Ajouter les liens

Dans la balise `<body>`, ajoutez un titre et deux liens avec des chemins relatifs :

```html
<body>
    <h1>Liens et chemins relatifs HTML</h1>
    <p>Un lien permet d'accéder à une autre page du site.</p>
    
    <!-- Lien vers un fichier au même niveau -->
    <a href="index.html">Accueil</a>
    
    <br>

    <!-- Lien vers un sous-dossier -->
    <a href="pages/articles.html">Voir les articles</a>
</body>
```

### 2.3. Tester la page

Enregistrez et ouvrez `tuto-5-html.html` dans le navigateur.

**Résultat attendu :**
Les mots "Accueil" et "Voir les articles" sont devenus cliquables.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-5/tuto-5-html.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 5">
</iframe>

## 3. Bilan

**Vous savez maintenant :** créer un lien (`<a>`) et l'orienter vers le bon fichier grâce aux chemins relatifs (`/` pour descendre, `..` pour remonter).
