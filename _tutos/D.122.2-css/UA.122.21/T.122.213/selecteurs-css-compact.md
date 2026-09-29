---
title: "Sélecteurs"
layout: tuto
slug: "selecteurs"
permalink: /tutos/:slug/compact
tuto_id: "T.122.213"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 3
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Sélecteurs Multiples et Descendants</title>
        <link rel="stylesheet" href="tuto-3-css.css">
    </head>
    <body>
        <h1 class="title">Les Sélecteurs</h1>
        
        <div class="article-body">
            <h2>Titre de section</h2>
            <p>Un paragraphe dans le corps de l'article.</p>
            <h3>Sous-titre</h3>
            <p>Un autre paragraphe.</p>
        </div>
        
        <h2>Titre hors article</h2>
        <p>Ce paragraphe n'est pas dans l'article.</p>
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

Appliquer des règles CSS ciblées en combinant plusieurs méthodes de sélection (classe, groupe, parent/enfant).

## 2. Prérequis

* Connaître la syntaxe CSS de base et le fonctionnement du fichier externe (`.css`).

## Partie 1 — Théorie

Il existe plusieurs façons de cibler un élément dans un fichier CSS :
- **Classe** : `.ma-classe { ... }` (Cible tous les `<balise class="ma-classe">`).
- **Groupé** : `h1, h2 { ... }` (Cible les `h1` ET les `h2` avec la même règle, la virgule sépare).
- **Descendant** : `.parent enfant { ... }` (Cible un `enfant` mais **seulement** s'il est à l'intérieur d'un `.parent`. L'espace crée la descendance).

## Partie 2 — Pratique

### 2.1. Créer les fichiers

1. Créez `tuto-3-css.html` et collez-y les données de départ.
2. Créez un fichier vide `tuto-3-css.css` dans le même dossier.

### 2.2. Ajouter le CSS ciblé

Dans votre fichier `tuto-3-css.css`, copiez ces trois règles qui illustrent les trois théories :

```css
/* 1. Sélecteur de classe */
.title {
    color: red;
}

/* 2. Sélecteurs groupés (la virgule) */
h2, h3 {
    color: blue;
}

/* 3. Sélecteur descendant (l'espace) */
.article-body p {
    color: green;
}
```

### 2.3. Tester la page

Enregistrez les deux fichiers et ouvrez le HTML.

**Résultat attendu :**
Le titre `<h1>` est rouge, les sous-titres sont bleus, les paragraphes *dans* la div sont verts, mais le dernier paragraphe reste noir.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-3/tuto-3-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 3">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser le point (`.`) pour les classes, la virgule (`,`) pour mutualiser le code CSS, et l'espace (` `) pour cibler un élément enfant précis.
