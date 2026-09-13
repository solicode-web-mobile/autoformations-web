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

Maîtriser les marges internes (`padding`), les marges externes (`margin`), et les bordures (`border`, `border-radius`).

À la fin du tutoriel, vous saurez centrer un élément, créer un effet de superposition avec une marge négative, définir des marges multiples et utiliser des bordures arrondies.

## 2. Prérequis

* Connaître la différence entre `padding` (intérieur) et `margin` (extérieur).
* Savoir utiliser `max-width`.

## 3. Données de départ

### HTML

Le fichier `tuto-8-css.html` contient une "carte" qui englobe une citation :

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

### CSS

Le fichier de départ `tuto-8-css.css` contient :

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

### 1.1. Centrer un bloc horizontalement

Pour centrer un élément de type `block` (comme une `div`), il doit avoir une largeur définie (`width` ou `max-width`), et on utilise la valeur automatique pour ses marges gauche et droite.

```css
margin: auto;
```

### 1.2. Les valeurs multiples (Raccourcis)

On peut définir les espaces pour tous les côtés en une seule ligne :

* **4 valeurs** (Haut, Droite, Bas, Gauche) : `padding: 10px 15px 10px 5px;`
* **2 valeurs** (Haut/Bas, Droite/Gauche) : `margin: 20px 0;` (20px en haut et bas, 0 à gauche et droite).
* **1 valeur** (Tous les côtés) : `padding: 30px;`

### 1.3. Les marges négatives

Il est possible d'utiliser des valeurs négatives pour `margin` (mais pas pour `padding`). Cela permet de tirer un élément hors de sa position normale, créant des effets de superposition très utiles.

```css
margin-top: -50px;
```
*(Tire l'élément vers le haut de 50px)*

### 1.4. Les bordures et les arrondis

La propriété `border` ajoute une bordure autour d'un élément. On peut aussi cibler un seul côté avec `border-left`, `border-top`, etc.

```css
border: 1px solid #ccc;
border-left: 5px solid blue;
```

La propriété `border-radius` permet d'arrondir les coins de la bordure (ou de l'arrière-plan). Comme les marges, on peut spécifier chaque coin (Haut-Gauche, Haut-Droit, Bas-Droit, Bas-Gauche).

```css
border-radius: 20px; /* Tous les coins */
border-radius: 0 10px 10px 0; /* Coins droits arrondis, coins gauches carrés */
```

### 1.5. À retenir

* `margin: auto;` centre horizontalement un bloc s'il possède une largeur.
* Les raccourcis comme `margin: 20px 0;` appliquent 20px en haut/bas et 0 à gauche/droite.
* Les marges négatives (`margin-top: -50px`) permettent de superposer des éléments.
* `border` et `border-left` dessinent des traits sur les contours.
* `border-radius` arrondit les angles du contour.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez le fichier HTML et le fichier CSS en y ajoutant les données de départ.

### 2.2. Mettre en forme la carte principale

Dans `tuto-8-css.css`, complétez la règle `.carte` pour centrer le bloc, le décaler vers le haut (marge négative), ajouter de l'espace à l'intérieur, et lui dessiner une bordure grise arrondie :

```css
.carte {
    max-width: 600px;
    margin: auto; /* Centrage horizontal */
    margin-top: -50px; /* Superposition (marge négative) */
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 20px;
}
```

### 2.3. Mettre en forme la citation

Ajoutez une règle pour la classe `.citation` en utilisant des valeurs multiples pour les marges et les espacements intérieurs, et une bordure uniquement à gauche.

```css
.citation {
    margin: 20px 0;
    padding: 15px 20px;
    border-left: 5px solid blue;
    border-radius: 0 10px 10px 0;
}
```

*Ici, `border-radius` arrondit les coins de droite à `10px`, mais laisse les coins de gauche carrés (`0`) pour suivre la bordure bleue bien droite.*

### 2.4. Tester le résultat

Enregistrez vos fichiers et ouvrez `tuto-8-css.html` dans le navigateur.

**Résultat attendu :**

La page contient une carte centrée, remontée vers le haut, avec des bordures arrondies. À l'intérieur, la citation est espacée du reste et possède une ligne bleue épaisse sur la gauche avec ses coins droits arrondis.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-8/tuto-8-css.html' | relative_url}}"
    height="350"
    title="Résultat final du Tuto 8">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une interface avancée avec des bordures personnalisées et des espacements précis.

**Vous savez maintenant :** utiliser `margin: auto` pour centrer un élément, déclarer des marges multiples (`margin: 20px 0`), créer des marges négatives, ajouter des bordures spécifiques (`border-left`), et arrondir les coins selon vos besoins avec `border-radius`.

## 4. Glossaire

* **Marge automatique (`margin: auto`)** : valeur permettant au navigateur de calculer automatiquement les espaces gauche/droite pour centrer un élément de type bloc.
* **Marge négative** : valeur de marge inférieure à zéro permettant de tirer un élément dans la direction opposée (utile pour les chevauchements).
* **`border`** : propriété qui dessine une ligne autour de l'élément (nécessite une épaisseur, un style comme `solid`, et une couleur).
* **`border-radius`** : propriété qui arrondit les coins d'un élément.
