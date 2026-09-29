---
title: "Espacements & Bordures"
layout: tuto
slug: "espacements-bordures"
permalink: /tutos/:slug/
tuto_id: "T.122.218"
type: "classique"
version: "normal"
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

Créer une "carte" (Card) design en utilisant les marges automatiques (pour centrer), les bordures et les coins arrondis.

## 2. Prérequis

* Comprendre la différence entre l'espace extérieur (`margin`) et intérieur (`padding`).
* Savoir utiliser `max-width`.

## 3. Données de départ

**Code HTML de départ :**
```html
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
```

**Code CSS de départ :**
```css
body {
    /* Pour bien voir l'effet de la marge négative, on ajoute de l'espace au-dessus */
    padding-top: 100px; 
}

.carte {
    max-width: 600px;
}
```

## Partie 1 — Théorie

### 1.1. Centrer une boîte (`margin: auto`)

Si une boîte a une largeur maximale (ex: `max-width: 600px;`), elle restera collée à gauche de l'écran par défaut.
Pour la centrer parfaitement, on demande au navigateur de calculer automatiquement les marges de chaque côté :
```css
margin: auto;
```

### 1.2. Les valeurs raccourcies

Souvent, on veut espacer un élément en haut et en bas, mais pas sur les côtés. Au lieu d'écrire deux lignes (`margin-top` et `margin-bottom`), on utilise un raccourci :
```css
margin: 20px 0; /* 20px en haut et en bas. 0 à gauche et à droite. */
```
*Astuce mnémotechnique pour 4 valeurs : l'ordre est le sens des aiguilles d'une montre (Haut, Droite, Bas, Gauche).*

### 1.3. La marge négative

Il est interdit de mettre un padding négatif. En revanche, une `margin` peut être négative !
Cela permet de "tirer" un élément vers l'extérieur de sa position normale, souvent pour le superposer à un autre élément.
```css
margin-top: -50px; /* Tire la boîte de 50px vers le haut */
```

### 1.4. Dessiner des bordures (`border`, `border-radius`)

On peut dessiner un trait autour d'une boîte. Cela requiert 3 informations : l'épaisseur, le style (ex: `solid` pour un trait continu) et la couleur.
```css
border: 1px solid #ccc; /* Un trait gris fin tout autour */
border-left: 5px solid blue; /* Un trait bleu épais uniquement à gauche */
```

Pour adoucir les angles, on utilise le rayon de bordure :
```css
border-radius: 20px;
```

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Dans VS Code, créez `tuto-8-css.html` et `tuto-8-css.css`. Collez les données de départ.

### 2.2. Centrer et designer la carte

Dans le fichier CSS, complétons la règle de `.carte`. Nous allons la centrer (`margin: auto`), la tirer un peu vers le haut, lui donner de l'espace intérieur, et une jolie bordure arrondie :

```css
.carte {
    max-width: 600px;
    margin: auto;
    margin-top: -50px;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: white; /* Important si la page avait une couleur de fond */
}
```

### 2.3. Habiller la citation

La balise `<blockquote>` (classe `.citation`) sert à citer du texte. Nous allons la séparer du texte au-dessus (`margin`), l'écarter de son propre texte (`padding`), et lui mettre une grosse barre bleue à gauche, avec des coins droits arrondis :

```css
.citation {
    margin: 20px 0;
    padding: 15px 20px;
    background: #f8f9fa;
    border-left: 5px solid blue;
    border-radius: 0 10px 10px 0; /* Haut-gauche: 0, Haut-droit: 10px, Bas-droit: 10px, Bas-gauche: 0 */
}
```
*Note : Si on mettait un `border-radius: 10px` simple, les coins de gauche seraient arrondis, ce qui casserait l'effet de la barre droite verticale.*

### 2.4. Tester la page

Enregistrez et ouvrez votre page HTML.

**Résultat attendu :**
La carte est bien centrée au milieu de l'écran. La citation ressemble à un encart professionnel avec sa barre de couleur sur le côté gauche.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-8/tuto-8-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 8">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une "Card" UI (Interface Utilisateur) moderne avec une citation stylisée.

**Vous savez maintenant :** 
- Centrer horizontalement un bloc avec `margin: auto`.
- Tirer un bloc vers le haut en utilisant une marge négative.
- Dessiner des bordures complètes ou partielles (ex: `border-left`).
- Arrondir les angles de manière sélective avec `border-radius`.
