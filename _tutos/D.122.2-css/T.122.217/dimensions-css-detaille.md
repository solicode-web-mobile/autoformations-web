---
title: "Dimensions"
layout: tuto
slug: "dimensions-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.217"
type: "classique"
version: "detaille"
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

Comprendre la gestion spatiale en CSS : bloquer l'étirement des conteneurs avec `max-width` pour le confort de lecture, et maîtriser le redimensionnement proportionnel des images (`object-fit`) pour créer des bannières (Hero Header).

## 2. Prérequis

* Différencier l'affichage `block` de l'affichage `inline` (voir T.122.215).

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Dimensions et Images</title>
    <link rel="stylesheet" href="tuto-7-css.css">
</head>
<body>
    <!-- La div conteneur va structurer notre page -->
    <div class="conteneur">
        <!-- L'image de base est volontairement gigantesque (1200x600px) -->
        <img src="https://via.placeholder.com/1200x600" alt="Exemple d'image" class="image-couverture">
    </div>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. Responsive Design : `width` vs `max-width`

Sur le web moderne, les tailles d'écrans varient énormément. 
- Si vous utilisez `width: 800px;`, la boîte fera *strictement* 800px. Sur un smartphone de 400px de large, la moitié de la boîte sera hors de l'écran (apparition d'un scroll horizontal désagréable).
- Si vous utilisez `max-width: 800px;`, la boîte fera 800px sur un grand écran de PC, mais sur un smartphone, elle comprendra qu'elle ne peut pas atteindre son maximum et se réduira automatiquement à 100% de l'écran. C'est la base du Responsive Design.

### 1.2. Le cauchemar des images déformées

Un élément `<img>` possède des dimensions intrinsèques (les vraies dimensions du fichier image).
Si vous forcez le CSS en disant `width: 800px;` ET `height: 200px;`, le navigateur va obéir aveuglément. Résultat : l'image sera affreusement étirée ou écrasée.

La propriété `object-fit: cover;` résout ce problème. Elle dit au navigateur : *"Remplit la boîte de 800x200, garde les proportions originales de la photo, et s'il y a du surplus, coupe-le proprement."*

## Partie 2 — Pratique

### 2.1. Mise en place

Créez `tuto-7-css.html` (collez le HTML de départ) et `tuto-7-css.css` (vide) dans le même dossier.

### 2.2. Borner le conteneur principal

Notre `.conteneur` agit comme la "colonne" de notre site web. Nous voulons limiter sa taille maximale pour que le site ne s'étire pas à l'infini sur un écran de 27 pouces.

Dans `tuto-7-css.css` :
```css
.conteneur {
    max-width: 800px;
}
```

### 2.3. Maîtriser l'image de couverture

L'image est dans le conteneur. Faisons-en une belle bannière :
1. `display: block;` : Retire une petite marge fantôme que les navigateurs mettent sous les images.
2. `width: 100%;` : Force l'image à prendre toute la largeur de son parent (`.conteneur`).
3. `height: 300px;` : Force la hauteur pour faire une bannière.
4. `object-fit: cover;` : Empêche la déformation.

```css
.image-couverture {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
}
```

### 2.4. Le test ultime de redimensionnement

Sauvegardez et ouvrez le HTML dans le navigateur.

**Résultat attendu :**
L'image est devenue un rectangle parfait de 800px par 300px.
*Exercice bonus :* Rétrécissez manuellement la fenêtre de votre navigateur. Vous verrez que l'image diminue de largeur (grâce au `max-width` du parent et à son `100%`) tout en gardant exactement 300px de haut, et que le recadrage intérieur s'adapte en temps réel !

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-7/tuto-7-css.html' | relative_url}}"
    height="400"
    title="Résultat du tutoriel 7">
</iframe>

## 4. Bilan

**Vous avez réalisé :** l'intégration d'une image fluide au sein d'un conteneur contraint.

**Vous savez maintenant :** 
- Pourquoi `max-width` est vital pour le Responsive Design.
- Paramétrer une hauteur (`height`).
- Mettre en place un Hero Header avec `object-fit: cover;` pour gérer le recadrage intelligent des images.
