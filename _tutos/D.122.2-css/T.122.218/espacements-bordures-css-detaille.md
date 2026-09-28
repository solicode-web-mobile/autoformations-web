---
title: "Espacements & Bordures"
layout: tuto
slug: "espacements-bordures"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.218"
type: "classique"
version: "detaille"
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

Créer une interface de type "Card" (très populaire dans le web design actuel) en explorant les techniques avancées de marges (centrage, valeurs négatives) et la personnalisation granulaire des bordures.

## 2. Prérequis

* Différencier l'espace extérieur (`margin`) de l'espace intérieur (`padding`).
* Comprendre le fonctionnement de `max-width`.

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
    /* Ajoute de l'espace en haut de la page pour notre exercice */
    padding-top: 100px; 
    background-color: #eef2f5; /* Un gris-bleu très léger */
}

.carte {
    max-width: 600px;
}
```

## Partie 1 — Théorie

### 1.1. L'astuce magique : `margin: auto`

Pour centrer parfaitement un bloc HTML au milieu de l'écran, vous avez besoin de deux conditions strictes :
1. L'élément doit être de type `block` (c'est le cas d'une `div`).
2. L'élément doit avoir une largeur définie (`width` ou `max-width`).
Si ces conditions sont remplies, la commande `margin: auto;` demandera au navigateur de calculer l'espace restant et de le diviser en deux parts égales à gauche et à droite.

### 1.2. La syntaxe raccourcie (Shorthand)

Au lieu d'écrire les 4 côtés un par un, on utilise des raccourcis :
- `margin: 10px;` (4 côtés identiques)
- `margin: 20px 0;` (2 valeurs : Haut/Bas = 20px, Gauche/Droite = 0)
- `margin: 10px 5px 15px 0;` (4 valeurs : dans le sens horaire : Haut, Droite, Bas, Gauche).

### 1.3. La Marge Négative (Z-axis offset)

En CSS, on peut donner une `margin` négative. Cela agit comme une force de traction.
Si une image possède `margin-top: -50px;`, elle va remonter de 50px, chevauchant potentiellement le texte situé au-dessus d'elle. C'est une technique redoutable pour casser le flux linéaire traditionnel d'une page web et créer de la profondeur.

### 1.4. Bordures et Arrondis asymétriques

La propriété `border` prend 3 arguments : épaisseur, style, couleur (`1px solid black`). On peut cibler un axe (`border-left`).
Le rayon de courbure (`border-radius`) permet d'adoucir les angles. Comme pour les marges, on peut fournir 4 valeurs (Haut-gauche, Haut-droit, Bas-droit, Bas-gauche) pour créer des formes asymétriques (ex: une bulle de tchat).

## Partie 2 — Pratique

### 2.1. Mise en place

Créez `tuto-8-css.html` (collez le HTML de départ) et `tuto-8-css.css` (collez le CSS de départ).

### 2.2. La Carte (Card)

Nous allons centrer la carte, lui donner un fond blanc pour qu'elle ressorte sur le fond gris de la page, et utiliser une marge négative pour la faire remonter visuellement dans le vide laissé par le `body`.

Dans le CSS, complétez `.carte` :
```css
.carte {
    max-width: 600px;
    
    /* Centrage horizontal */
    margin: auto; 
    
    /* Effet de superposition vers le haut */
    margin-top: -50px; 
    
    /* Esthétique de la carte */
    padding: 30px;
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 16px; /* Coins arrondis */
}
```

### 2.3. L'encart de citation

Nous voulons que la citation se démarque. On va l'espacer du reste du texte, lui mettre un fond gris, et dessiner une grosse ligne bleue sur son flanc gauche. 
Pour que la ligne reste bien droite, les coins de gauche de l'arrière-plan doivent rester carrés (0), tandis que la droite sera arrondie (10px).

```css
.citation {
    /* 20px en haut/bas, 0 sur les côtés */
    margin: 20px 0;
    
    /* Aération du texte */
    padding: 15px 20px;
    background: #f8f9fa;
    
    /* Barre verticale gauche */
    border-left: 5px solid #2673e8;
    
    /* Arrondi : Haut-G(0) Haut-D(10) Bas-D(10) Bas-G(0) */
    border-radius: 0 10px 10px 0; 
}
```

### 2.4. Le rendu final

Enregistrez et ouvrez le HTML.

**Résultat attendu :**
La carte blanche flotte parfaitement au milieu de l'écran, remontant légèrement. La citation est très élégante avec sa barre colorée asymétrique. Vous maîtrisez désormais la création de composants complexes !

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-8/tuto-8-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 8">
</iframe>

## 4. Bilan

**Vous avez réalisé :** l'intégration de composants (Card et Blockquote) en utilisant des règles spatiales avancées.

**Vous savez maintenant :** 
- Utiliser l'équation magique du centrage web (`width` + `margin: auto`).
- Créer des effets de chevauchement avec des marges négatives.
- Écrire des raccourcis CSS de valeurs (2 ou 4 arguments).
- Modeler des arrière-plans asymétriques avec un `border-radius` précis.
