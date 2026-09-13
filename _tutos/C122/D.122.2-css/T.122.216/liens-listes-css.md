---
title: "Liens & Listes"
layout: tuto
slug: "liens-listes-css"
permalink: /tutos/:slug/
tuto_id: "T.122.216"
type: "classique"
version: "normal"
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

Mettre en forme les liens et les listes avec CSS en utilisant les espaces extérieurs (`margin`) et intérieurs (`padding`).

À la fin du tutoriel, vous saurez modifier l'apparence des listes et espacer les éléments de liste et les liens.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser les sélecteurs descendants (`.parent enfant`).
* Savoir définir une couleur (`color`).

## 3. Données de départ

### HTML

Le fichier de départ `tuto-6-css.html` contient une liste de liens avec la classe `liste-liens` :

```html
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
```

Ces données constituent la base de travail du tutoriel.

## Partie 1 — Théorie

### 1.1. Les sélecteurs pour les liens et les listes

Dans une page Web, on rencontre souvent plusieurs listes ou plusieurs liens avec des rôles différents. C'est pourquoi on utilise les sélecteurs descendants pour cibler très précisément une liste particulière.

Exemples :

```css
.liste-liens { ... }    /* Cible la liste entière <ul> */
.liste-liens li { ... } /* Cible les éléments <li> dans cette liste */
.liste-liens a { ... }  /* Cible les liens <a> dans cette liste */
```

### 1.2. La propriété `margin` (et `margin-bottom`)

`margin` permet de créer un espace vide **à l'extérieur** d'un élément (pour repousser les éléments voisins). On peut cibler un côté spécifique, par exemple le bas avec `margin-bottom`.

Exemple :

```css
.liste-liens li {
    margin-bottom: 10px;
}
```

Cela crée un espace de 10 pixels sous chaque élément de la liste.

### 1.3. La propriété `padding-left`

`padding-left` permet de créer un espace **à l'intérieur** d'un élément, sur son côté gauche. Dans le cas d'une liste `<ul>`, cela permet d'éloigner les puces ou le texte de la bordure gauche.

Exemple :

```css
.liste-liens {
    padding-left: 20px;
}
```

### 1.4. À retenir

* Les sélecteurs descendants permettent de cibler précisément des `li` ou `a` situés dans une classe parent.
* `margin-bottom` crée un espace extérieur vers le bas.
* `padding-left` crée un espace intérieur à gauche de l’élément.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez le fichier HTML et ajoutez le code HTML de départ. Créez également le fichier `tuto-6-css.css`.

### 2.2. Modifier l’espace intérieur de la liste

Dans votre fichier CSS, ciblez la classe de la liste et réduisez son retrait gauche par défaut en utilisant `padding-left` :

```css
.liste-liens {
    padding-left: 20px;
}
```

**Résultat attendu :** La liste est légèrement moins décalée vers la droite par rapport au comportement par défaut du navigateur.

### 2.3. Espacer les éléments de la liste

Pour aérer le menu, ciblez les balises `<li>` se trouvant à l'intérieur de `.liste-liens` pour leur ajouter une marge inférieure :

```css
.liste-liens li {
    margin-bottom: 10px;
}
```

**Résultat attendu :** Un espacement vertical de 10 pixels apparaît entre chaque puce de la liste.

### 2.4. Mettre en forme les liens

Enfin, ciblez les balises `<a>` situées dans `.liste-liens` pour modifier leur couleur :

```css
.liste-liens a {
    color: #2673e8;
}
```

**Résultat attendu :** Les liens prennent une couleur bleue spécifique.

### 2.5. Tester le résultat

Ouvrez :

```text
tuto-6-css.html
```

Rechargez la page.

**Résultat attendu :**

La page contient une liste avec un retrait ajusté, dont chaque ligne est espacée, et contenant des liens de couleur bleue.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-6/tuto-6-css.html' | relative_url}}"
    height="300"
    title="Résultat final du Tuto 6">
</iframe>

## 3. Bilan

**Vous avez réalisé :** la mise en forme d'un menu de liens sous forme de liste.

**Vous savez maintenant :** utiliser des sélecteurs descendants pour cibler précisément des éléments imbriqués (`ul`, `li`, `a`), et manipuler les espaces extérieurs et intérieurs partiels (`margin-bottom`, `padding-left`).

## 4. Glossaire

* **Lien (`<a>`)** : élément HTML qui permet d’accéder à une autre ressource.
* **Liste non ordonnée (`<ul>`)** : liste HTML à puces contenant des éléments `<li>`.
* **`margin`** : espace extérieur autour d’un élément.
* **`padding`** : espace intérieur d'un élément, entre son contenu et son bord.
