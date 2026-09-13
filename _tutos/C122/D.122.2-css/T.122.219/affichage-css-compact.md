---
title: "Affichage CSS"
layout: tuto
slug: "affichage-css"
permalink: /tutos/:slug/compact
tuto_id: "T.122.219"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 9
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Affichage CSS avancé</title>
        <link rel="stylesheet" href="tuto-9-css.css">
    </head>
    <body>
        <p>Ce texte contient un élément <span class="cache">caché</span> qui ne s'affiche pas.</p>
        
        <cite class="citation-bloc">
            Cette balise inline est forcée à s'afficher comme un bloc pour sauter à la ligne.
        </cite>
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

Forcer le comportement d'affichage des éléments ou les masquer avec la propriété `display`.

## 2. Prérequis

* Différence entre un bloc (`block`) et un élément en ligne (`inline`).

## Partie 1 — Théorie

La propriété `display` permet de transformer n'importe quelle balise :
- **`display: none;`** : Supprime l'élément de l'écran. Il devient invisible et ne prend plus aucune place (l'espace se referme).
- **`display: block;`** : Force un élément (même s'il est initialement en ligne) à devenir un bloc. Il sautera à la ligne et acceptera les dimensions/marges.

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-9-css.html` (collez le HTML de départ) et `tuto-9-css.css` (vide).

### 2.2. Le code CSS complet

Copiez ce code dans votre fichier `.css` pour masquer le premier élément et transformer le second :

```css
/* Disparition totale de l'élément */
.cache {
    display: none;
}

/* Forcer la balise en ligne <cite> à devenir un bloc */
.citation-bloc {
    display: block;
    margin-top: 20px;
    color: gray;
}
```

### 2.3. Tester la page

Enregistrez et ouvrez le HTML.

**Résultat attendu :**
Le mot "caché" a disparu de la première phrase, et la citation (qui est une balise `inline` par défaut) est passée à la ligne et s'est espacée comme un véritable bloc.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-9/tuto-9-css.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel 9">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser `display: none` pour masquer du contenu et `display: block` pour imposer un comportement de bloc à des éléments en ligne (comme des balises de texte).
