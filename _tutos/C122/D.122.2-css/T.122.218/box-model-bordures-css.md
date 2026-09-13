---
title: "Utiliser les espacements et les bordures en CSS"
layout: tuto
slug: "espacements-bordures-css"
permalink: /tutos/:slug/
tuto_id: "T.122.218"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 8

data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-8-css.css">
    </head>
    <body>
        <header class="article-header">
            <span class="category">Développement web</span>

            <h1>Créer une page web</h1>

            <p class="author">Par Madani Ali</p>

            <p class="description">
                Découvrez les bases pour créer une page web.
            </p>
        </header>

        <main class="content">
            <img
                class="cover"
                src="https://picsum.photos/800/400"
                alt="Image de couverture">

            <h2>Présentation</h2>

            <p>
                Voici le contenu de mon article.
            </p>

            <p>
                Cette page présente une réalisation simple avec HTML et CSS.
            </p>

            <blockquote>
                Apprendre CSS demande de pratiquer régulièrement.
            </blockquote>
        </main>
    </body>
    </html>

data_css: |
    .content {
        width: 800px;
        max-width: 100%;
    }

    .cover {
        width: 400px;
        height: 200px;
        max-width: 100%;
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

Utiliser `margin`, `padding`, `border` et `border-radius` pour structurer visuellement des blocs.

## 2. Prérequis

* Savoir utiliser un sélecteur CSS.
* Savoir utiliser `width`.
* Savoir utiliser `height`.
* Savoir utiliser `max-width`.
* Savoir utiliser `background`.
* Savoir utiliser `color`.
* Savoir utiliser `display`.

## 3. Données de départ

### HTML

Utilisez le code HTML suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-8-css.css">
</head>
<body>

    <header class="article-header">
        <span class="category">Développement web</span>

        <h1>Créer une page web</h1>

        <p class="author">Par Madani Ali</p>

        <p class="description">
            Découvrez les bases pour créer une page web.
        </p>
    </header>

    <main class="content">

        <img
            class="cover"
            src="https://picsum.photos/800/400"
            alt="Image de couverture">

        <h2>Présentation</h2>

        <p>
            Voici le contenu de mon article.
        </p>

        <p>
            Cette page présente une réalisation simple avec HTML et CSS.
        </p>

        <blockquote>
            Apprendre CSS demande de pratiquer régulièrement.
        </blockquote>

    </main>

</body>
</html>
```

### CSS

Utilisez le code CSS suivant :

```css
.content {
    width: 800px;
    max-width: 100%;
}

.cover {
    width: 400px;
    height: 200px;
    max-width: 100%;
}
```

## Partie 1 — Théorie

### 1.1. La propriété `margin`

`margin` crée un espace autour d’un élément.

```css
.content {
    margin: 20px;
}
```

### 1.2. La propriété `padding`

`padding` crée un espace entre le contenu et la bordure d’un élément.

```css
.content {
    padding: 20px;
}
```

### 1.3. La propriété `border`

`border` ajoute une bordure autour d’un élément.

```css
.content {
    border: 1px solid #cccccc;
}
```

### 1.4. La propriété `border-radius`

`border-radius` permet d’arrondir les angles d’un élément.

```css
.content {
    border-radius: 8px;
}
```

### 1.5. Combiner les propriétés

Ces propriétés peuvent être utilisées ensemble :

```css
.content {
    margin: 20px;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
```

### 1.6. À retenir

* `margin` crée un espace extérieur.
* `padding` crée un espace intérieur.
* `border` ajoute une bordure.
* `border-radius` arrondit les angles.

## Partie 2 — Pratique

### 2.1. Ajouter une marge

Ouvrez :

```text
tuto-8-css.css
```

Ajoutez :

```css
.content {
    width: 800px;
    max-width: 100%;
    margin: 20px auto;
}
```

**Résultat attendu :**

Le bloc de contenu possède un espace autour de lui et il est centré.

### 2.2. Ajouter un espace intérieur

Ajoutez :

```css
.content {
    width: 800px;
    max-width: 100%;
    margin: 20px auto;
    padding: 20px;
}
```

**Résultat attendu :**

Le contenu ne touche plus directement les bords du bloc.

### 2.3. Ajouter une bordure

Ajoutez :

```css
.content {
    width: 800px;
    max-width: 100%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #cccccc;
}
```

**Résultat attendu :**

Une bordure apparaît autour du contenu.

### 2.4. Arrondir les angles

Ajoutez :

```css
.content {
    width: 800px;
    max-width: 100%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
```

**Résultat attendu :**

Les angles du bloc sont arrondis.

### 2.5. Mettre en forme la citation

Ajoutez :

```css
blockquote {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
```

**Résultat attendu :**

La citation est séparée du contenu et entourée d’une bordure avec des angles arrondis.

### 2.6. Tester

Ouvrez :

```text
tuto-8-css.html
```

Rechargez la page.

**Résultat attendu :**

Le contenu est centré, espacée, bordé et arrondi.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-8-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 8">
</iframe>

## Partie 3 — Développement progressif

### 3.1. Développer l’itération I3

**Série :** Page détail

**Position :** I3 sur I3

**Déclenchement :** Tuto 8

**Incrément :** Finalisation du contenu

L’itération I3 commence à partir du **résultat final de l’itération I2**.

Conservez :

* l’en-tête de I1 ;
* la structure principale de I2 ;
* les images de I2.

Ajoutez maintenant la mise en forme des blocs de contenu avec les notions étudiées :

```text
margin
padding
border
border-radius
```

Mettez en forme les blocs de texte et la citation.

### 3.2. Résultat attendu

L’itération I3 commence avec une page de détail structurée et des blocs de contenu mieux organisés.

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail/page-detail-html-v1.tuto-8-css.html' | relative_url}}"
    height="700"
    title="Résultat final de l'itération I3">
</iframe>

### 3.3. Livrable

Une nouvelle version de la page de détail avec :

* le résultat de I2 conservé ;
* des espaces extérieurs ;
* des espaces intérieurs ;
* des bordures ;
* des angles arrondis ;
* une mise en forme des blocs de contenu.

### 3.4. Critère de réussite

L’itération I3 :

* conserve le résultat de I2 ;
* utilise `margin` ;
* utilise `padding` ;
* utilise `border` ;
* utilise `border-radius` ;
* améliore la séparation visuelle des blocs.

## Bilan

**Vous avez réalisé :**

Une mise en forme des blocs avec `margin`, `padding`, `border` et `border-radius`.

**Vous savez maintenant :**

* créer un espace extérieur ;
* créer un espace intérieur ;
* ajouter une bordure ;
* arrondir les angles d’un élément.

**Vous avez également commencé l’itération I3 du projet.**

## Glossaire

* **`margin`** : espace extérieur autour d’un élément.
* **`padding`** : espace intérieur entre le contenu et la bordure.
* **`border`** : bordure autour d’un élément.
* **`border-radius`** : propriété qui arrondit les angles.
* **Bloc** : élément qui forme une zone dans la page.
