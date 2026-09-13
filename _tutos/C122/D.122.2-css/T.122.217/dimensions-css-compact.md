---
title: "Dimensions"
layout: tuto
slug: "dimensions-css"
permalink: /tutos/:slug/compact
tuto_id: "T.122.217"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 7
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Dimensions et Images</title>
        <link rel="stylesheet" href="tuto-7-css.css">
    </head>
    <body>
        <div class="conteneur">
            <img src="https://via.placeholder.com/1200x600" alt="Exemple d'image" class="image-couverture">
        </div>
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

Forcer la taille d'une image sans la déformer en gérant la hauteur, la largeur et le recadrage automatique.

## 2. Prérequis

* Comprendre le fonctionnement des propriétés CSS.

## Partie 1 — Théorie

- **`max-width`** : Limite la largeur (ex: `800px`). L'élément peut être plus petit, jamais plus grand.
- **`width` / `height`** : Définissent une largeur ou hauteur stricte (ex: `100%`, `300px`).
- **`object-fit: cover;`** : LA propriété indispensable pour les images. Si on force une image à rentrer dans un espace de hauteur et largeur différentes de son format d'origine, elle s'écrase. `cover` demande au navigateur de recadrer l'image pour qu'elle remplisse l'espace sans se déformer.

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-7-css.html` et collez le code HTML. Créez ensuite le fichier `tuto-7-css.css`.

### 2.2. Le code CSS complet

Copiez ce code dans votre fichier `.css` pour limiter le conteneur et créer une belle bannière d'image :

```css
/* On empêche le conteneur de dépasser 800px */
.conteneur {
    max-width: 800px;
}

/* L'image s'adapte au conteneur, prend 300px de haut, et se recadre */
.image-couverture {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
}
```

### 2.3. Tester la page

Enregistrez et ouvrez le HTML.

**Résultat attendu :**
Même si l'image fait 1200x600 pixels au départ, elle est maintenant coupée proprement pour rentrer dans une boîte de 800px (maximum) sur 300px de hauteur, sans aucun effet de "tassement".

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-7/tuto-7-css.html' | relative_url}}"
    height="400"
    title="Résultat du tutoriel 7">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser `width`, `height` et `max-width` pour contrôler l'espace, et `object-fit: cover` pour éviter la déformation des images.
