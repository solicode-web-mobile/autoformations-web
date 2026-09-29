---
title: "Liens & Listes"
layout: tuto
slug: "liens-listes-css"
permalink: /tutos/:slug/compact
tuto_id: "T.122.216"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 6
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Liens et Listes</title>
        <link rel="stylesheet" href="tuto-6-css.css">
    </head>
    <body>
        <ul class="liste-liens">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </body>
    </html>
data_css: ""
data_js: ""
data_php: ""
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

Construire la base d'un menu de navigation en ajustant les listes et les espacements extérieurs (`margin`).

## 2. Prérequis

* Ciblage descendant et propriété `padding`.

## Partie 1 — Théorie

- **Le ciblage descendant** : Pour modifier uniquement les liens d'un menu spécifique, on utilise un espace : `.ma-classe a { ... }`.
- **La propriété `margin`** : Contrairement au `padding` (espace intérieur), la `margin` repousse les éléments **vers l'extérieur**. On l'utilise pour séparer des blocs entre eux (ex: `margin-bottom` pour repousser ce qui est en dessous).

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-6-css.html` (collez le HTML de départ) et `tuto-6-css.css` (vide).

### 2.2. Le code CSS complet

Copiez ce code dans votre fichier `.css` pour ajuster la liste, espacer les lignes et colorer les liens :

```css
/* 1. On réduit le grand espace vide mis par défaut par le navigateur à gauche des listes */
.liste-liens {
    padding-left: 20px;
}

/* 2. On écarte chaque puce vers le bas */
.liste-liens li {
    margin-bottom: 10px;
}

/* 3. On colore uniquement les liens situés DANS cette liste */
.liste-liens a {
    color: #2673e8;
}
```

### 2.3. Tester la page

Enregistrez et ouvrez le HTML.

**Résultat attendu :**
La liste est aérée et les liens ont une couleur personnalisée, jetant les bases d'un futur menu de navigation.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-6/tuto-6-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 6">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser `margin-bottom` pour espacer des éléments verticalement, et utiliser le ciblage descendant pour ne pas impacter tous les liens du site.
