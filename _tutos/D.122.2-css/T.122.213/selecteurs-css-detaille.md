---
title: "Sélecteurs"
layout: tuto
slug: "selecteurs"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.213"
type: "classique"
version: "detaille"
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

Maîtriser les différents leviers de sélection du CSS pour cibler des éléments sans perturber le reste de la page. Comprendre la différence de spécificité (poids) entre un sélecteur de balise et un sélecteur de classe.

## 2. Prérequis

* Savoir écrire et lier une feuille de style externe.
* Comprendre la notion d'imbrication (parent/enfant) en HTML.

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Sélecteurs Multiples et Descendants</title>
    <link rel="stylesheet" href="tuto-3-css.css">
</head>
<body>
    <!-- Un élément avec une classe -->
    <h1 class="title">Les Sélecteurs</h1>
    
    <!-- Une boîte contenant d'autres balises -->
    <div class="article-body">
        <h2>Titre de section</h2>
        <p>Un paragraphe dans le corps de l'article.</p>
        <h3>Sous-titre</h3>
        <p>Un autre paragraphe.</p>
    </div>
    
    <!-- Éléments en dehors de la boîte -->
    <h2>Titre hors article</h2>
    <p>Ce paragraphe n'est pas dans l'article.</p>
</body>
</html>
```

## Partie 1 — Théorie

Le CSS (Cascading Style Sheets) fonctionne en "cascade". Si deux règles entrent en conflit, c'est la règle la plus "spécifique" (la plus précise) qui gagne. Il faut donc être capable de cibler avec justesse.

### 1.1. Le sélecteur de balise (Rappel)
`p { ... }` : Cible absolument tous les paragraphes. C'est le sélecteur le moins précis (son poids, ou "spécificité", est très faible).

### 1.2. Le sélecteur de classe
On cible un attribut `class="..."` en utilisant un point `.` devant le nom.
```css
.title { color: red; }
```
Une classe est beaucoup plus précise (lourde) qu'une balise. Si on écrit :
```css
h1 { color: blue; }
.title { color: red; }
```
L'élément `<h1 class="title">` sera **rouge**, car la classe l'emporte toujours sur la balise.

### 1.3. La mutualisation avec la virgule `,`
Le code source doit être "DRY" (Don't Repeat Yourself). Si vous voulez que plusieurs sélecteurs aient le même style, ne copiez pas le code. Groupez-les :
```css
h2, h3, .ma-classe {
    color: darkblue;
}
```

### 1.4. L'entonnoir de l'espace (Descendance)
Pour cibler un élément A uniquement s'il est contenu dans un élément B, on utilise l'espace.
```css
.article-body p {
    color: green;
}
```
L'espace se lit : *"tous les éléments `p` qui se trouvent **à l'intérieur** de n'importe quel élément ayant la classe `article-body`"*.

## Partie 2 — Pratique

### 2.1. Mise en place

Créez `tuto-3-css.html` (collez les données HTML) et `tuto-3-css.css` (vide pour l'instant) dans le même dossier.

### 2.2. Ciblage par classe

Dans le fichier CSS, ciblez la classe "title" :
```css
.title {
    color: red;
}
```

### 2.3. Ciblage groupé

Appliquez le même style aux `<h2>` et aux `<h3>` en une seule règle :
```css
h2, h3 {
    color: blue;
}
```

### 2.4. Ciblage descendant

Ciblez les paragraphes du contenu (`.article-body p`) sans affecter le paragraphe final :
```css
.article-body p {
    color: green;
}
```

### 2.5. Tester l'intelligence des sélecteurs

Enregistrez vos deux fichiers. Ouvrez le fichier HTML.

**Résultat attendu :**
Le navigateur lit la feuille de style. Le dernier paragraphe reste désespérément noir car il n'est à l'intérieur d'aucun élément de classe `.article-body`. Le ciblage est donc parfait !

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-3/tuto-3-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 3">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une mise en forme sélective, illustrant la notion de "Spécificité" en CSS.

**Vous savez maintenant :** 
- Que le point `.` cible une classe.
- Que la virgule `,` permet de grouper des cibles (Union).
- Que l'espace ` ` permet de cibler en entonnoir parent/enfant (Intersection).
