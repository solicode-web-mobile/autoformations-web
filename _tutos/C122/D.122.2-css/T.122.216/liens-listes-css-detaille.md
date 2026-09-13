---
title: "Liens & Listes"
layout: tuto
slug: "liens-listes-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.216"
type: "classique"
version: "detaille"
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

Décortiquer le modèle de boîte (Box Model) pour comprendre la différence fondamentale entre `margin` et `padding`, et l'appliquer à la construction d'un menu de navigation vertical robuste.

## 2. Prérequis

* Maîtriser le ciblage descendant (`.parent enfant`).
* Comprendre la structure HTML d'une liste (`ul` > `li`).

## 3. Données de départ

**Code HTML de départ :**
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

## Partie 1 — Théorie

### 1.1. Le Modèle de Boîte (Box Model)

En CSS, chaque élément HTML est une boîte rectangulaire. L'espace autour du contenu de cette boîte est régi par deux propriétés majeures :
- **`padding` (Marge interne)** : C'est l'espace entre le contenu et la bordure de la boîte. Si la boîte a une couleur de fond, le padding sera coloré.
- **`margin` (Marge externe)** : C'est l'espace *à l'extérieur* de la bordure. Il est toujours transparent et sert à repousser les autres boîtes.

### 1.2. Décomposer les marges

Au lieu de faire `margin: 10px;` (qui s'applique aux 4 côtés), on peut être chirurgical :
- `margin-top` : en haut.
- `margin-bottom` : en bas.
- `margin-left` : à gauche.
- `margin-right` : à droite.
*(Même logique pour le padding : `padding-left`, etc.)*

### 1.3. L'anatomie d'une liste `<ul>`

Les navigateurs (Chrome, Firefox...) appliquent d'office un CSS par défaut (le *User Agent Stylesheet*).
Pour une balise `<ul>`, le navigateur ajoute automatiquement un gros `padding-left` (souvent 40px) pour laisser de la place aux puces (les petits ronds noirs). Dans un design sur-mesure, on doit souvent écraser cette valeur.

## Partie 2 — Pratique

### 2.1. Mise en place

Créez `tuto-6-css.html` (collez le HTML de départ) et `tuto-6-css.css` (vide) dans le même dossier.

### 2.2. Réduire le padding par défaut

Dans le fichier CSS, nous allons cibler la liste et réduire l'espace intérieur gauche imposé par le navigateur, en le passant à 20px :

```css
.liste-liens {
    padding-left: 20px;
}
```

### 2.3. Espacer avec la margin

Par défaut, les balises `<li>` sont collées les unes aux autres verticalement. Pour aérer notre menu, nous allons repousser chaque élément vers le bas en lui donnant une `margin-bottom` :

```css
.liste-liens li {
    margin-bottom: 10px;
}
```

### 2.4. Styliser spécifiquement les liens

Nous voulons changer la couleur des liens de ce menu, **sans altérer** les éventuels autres liens du site (comme un lien dans le footer). C'est ici que le sélecteur descendant prend tout son sens :

```css
.liste-liens a {
    color: #2673e8; /* Bleu vif */
}
```

### 2.5. Vérifier le rendu

Enregistrez et ouvrez le HTML.

**Résultat attendu :**
L'indentation globale de la liste a diminué. Les lignes "Accueil", "Articles" et "Contact" sont clairement séparées de 10px (marge externe). Les liens ont pris la couleur bleue demandée. Vous venez de poser les bases structurelles d'un menu latéral (sidebar).

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-6/tuto-6-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 6">
</iframe>

## 4. Bilan

**Vous avez réalisé :** la manipulation du Box Model pour restructurer l'espacement d'un composant natif.

**Vous savez maintenant :** 
- Différencier l'espace interne (`padding`) de l'espace de repousse externe (`margin`).
- Appliquer des marges sur un axe unique (`margin-bottom`, `padding-left`).
- Écraser les styles imposés par le navigateur (le *User Agent*).
