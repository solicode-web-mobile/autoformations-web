---
title: "Espacements & Bordures"
layout: tuto
slug: "espacements-bordures"
permalink: /tutos/:slug/compact
tuto_id: "T.122.218"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 8
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Espacements et Bordures</title>
        <link rel="stylesheet" href="tuto-8-css.css">
    </head>
    <body>
        <div class="carte">
            <p>Ce bloc est centré grâce à des marges automatiques, et superposé grâce à une marge négative.</p>
            
            <blockquote class="citation">
                <p>Le CSS permet de créer des designs complexes simplement.</p>
            </blockquote>
        </div>
    </body>
    </html>
data_css: |
    body {
        padding-top: 100px; 
    }
    
    .carte {
        max-width: 600px;
    }
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

Créer une carte centrée et encadrée en manipulant les marges (positives et négatives) et les bordures.

## 2. Prérequis

* Différence entre `margin` et `padding`.

## Partie 1 — Théorie

- **Centrage** : Un bloc avec une largeur (`max-width`) se centre automatiquement si on lui donne `margin: auto;`.
- **Valeurs multiples** : `margin: 20px 0;` applique 20px en haut/bas, et 0 sur les côtés.
- **Marge négative** : Permet de déplacer un élément en sens inverse (ex: `margin-top: -50px;` tire vers le haut).
- **Bordures** : 
  - `border: 1px solid #ccc;` (Trace un cadre gris).
  - `border-radius: 20px;` (Arrondit les angles).

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-8-css.html` et `tuto-8-css.css` avec les données de départ.

### 2.2. Le code CSS complet

Copiez ce code dans votre fichier `.css` (à la suite du code existant) pour créer la carte et la citation :

```css
/* On centre la carte, on la tire vers le haut et on l'encadre */
.carte {
    max-width: 600px;
    margin: auto;
    margin-top: -50px;
    padding: 30px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 20px;
}

/* On stylise la citation avec une barre à gauche */
.citation {
    margin: 20px 0;
    padding: 15px 20px;
    background: #f8f9fa;
    border-left: 5px solid blue;
    border-radius: 0 10px 10px 0;
}
```

### 2.3. Tester la page

Enregistrez et ouvrez le HTML.

**Résultat attendu :**
La carte de 600px est centrée et remonte virtuellement dans le `padding-top` du body. La citation est bien séparée avec une barre bleue à gauche et des coins arrondis spécifiques.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-8/tuto-8-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 8">
</iframe>

## 3. Bilan

**Vous savez maintenant :** centrer un conteneur avec `margin: auto`, utiliser les marges négatives pour les superpositions, et dessiner/arrondir des bordures.
