---
title: "Utiliser display pour ajuster l’affichage"
layout: tuto
slug: "display-ajuster-affichage-css"
permalink: /tutos/:slug/
tuto_id: "T.122.219"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 9

data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-9-css.css">
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

            <h2>Les étapes</h2>

            <ul>
                <li>Préparer le contenu</li>
                <li>Créer la page</li>
                <li>Ajouter les styles</li>
            </ul>

            <p>
                <a href="#">Lire la documentation</a>
            </p>

            <blockquote>
                Apprendre CSS demande de pratiquer régulièrement.
            </blockquote>

            <p class="message">
                Ce texte peut être masqué avec CSS.
            </p>
        </main>
    </body>
    </html>

data_css: |
    .article-header {
        background: #eeeeee;
        text-align: center;
        padding: 20px;
    }

    .category {
        display: inline-block;
        color: #ffffff;
        background: #333333;
        font-size: 14px;
        font-weight: bold;
    }

    .content {
        width: 800px;
        max-width: 100%;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #cccccc;
        border-radius: 8px;
    }

    .cover {
        display: block;
        width: 400px;
        height: 200px;
        max-width: 100%;
        margin: 0 auto;
    }

    a {
        display: inline;
        color: #0066cc;
    }

    ul {
        margin: 20px 0;
        padding-left: 30px;
    }

    li {
        display: list-item;
    }

    .message {
        display: none;
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

Utiliser `display` pour ajuster l’affichage des éléments HTML.

## 2. Prérequis

* Savoir utiliser un sélecteur CSS.
* Savoir utiliser `margin`.
* Savoir utiliser `padding`.
* Savoir utiliser `border`.
* Savoir utiliser `border-radius`.
* Savoir utiliser `width`.
* Savoir utiliser `height`.
* Savoir utiliser `max-width`.
* Savoir utiliser `background`.

## 3. Données de départ

### HTML

Utilisez le code HTML suivant :

```html id="b7q2hd"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-9-css.css">
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

        <h2>Les étapes</h2>

        <ul>
            <li>Préparer le contenu</li>
            <li>Créer la page</li>
            <li>Ajouter les styles</li>
        </ul>

        <p>
            <a href="#">Lire la documentation</a>
        </p>

        <blockquote>
            Apprendre CSS demande de pratiquer régulièrement.
        </blockquote>

        <p class="message">
            Ce texte peut être masqué avec CSS.
        </p>

    </main>

</body>
</html>
```

### CSS

Utilisez le code CSS suivant :

```css id="ms8fh7"
.article-header {
    background: #eeeeee;
    text-align: center;
    padding: 20px;
}

.category {
    display: inline-block;
    color: #ffffff;
    background: #333333;
    font-size: 14px;
    font-weight: bold;
}

.content {
    width: 800px;
    max-width: 100%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}

.cover {
    width: 400px;
    height: 200px;
    max-width: 100%;
    margin: 0 auto;
}

a {
    color: #0066cc;
}

ul {
    margin: 20px 0;
    padding-left: 30px;
}

li {
    color: #333333;
}

.message {
    display: none;
}
```

## Partie 1 — Théorie

### 1.1. `display: block`

`display: block` affiche un élément comme un bloc.

Exemple :

```css
.cover {
    display: block;
}
```

L’élément occupe sa propre ligne.

### 1.2. `display: inline`

`display: inline` affiche un élément sur la même ligne que les autres éléments.

Exemple :

```css
a {
    display: inline;
}
```

### 1.3. `display: inline-block`

`display: inline-block` permet de conserver l’élément sur la ligne tout en lui donnant des caractéristiques de bloc.

Exemple :

```css
.category {
    display: inline-block;
}
```

### 1.4. `display: none`

`display: none` masque complètement l’élément.

Exemple :

```css
.message {
    display: none;
}
```

L’élément n’est plus visible dans la page.

### 1.5. À retenir

* `display: block` affiche un élément comme un bloc.
* `display: inline` affiche un élément sur la ligne.
* `display: inline-block` permet un affichage en ligne avec des caractéristiques de bloc.
* `display: none` masque un élément.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier CSS

Ouvrez :

```text
tuto-9-css.css
```

### 2.2. Afficher l’image comme un bloc

Ajoutez :

```css
.cover {
    display: block;
    width: 400px;
    height: 200px;
    max-width: 100%;
    margin: 0 auto;
}
```

**Résultat attendu :**

L’image est affichée comme un bloc.

### 2.3. Mettre le lien en ligne

Ajoutez :

```css
a {
    display: inline;
    color: #0066cc;
}
```

**Résultat attendu :**

Le lien reste dans la ligne du texte.

### 2.4. Utiliser `inline-block` pour la catégorie

Conservez :

```css
.category {
    display: inline-block;
    color: #ffffff;
    background: #333333;
    font-size: 14px;
    font-weight: bold;
}
```

**Résultat attendu :**

La catégorie reste sur sa ligne tout en utilisant un affichage `inline-block`.

### 2.5. Masquer un élément

Ajoutez :

```css
.message {
    display: none;
}
```

**Résultat attendu :**

Le message n’apparaît plus dans la page.

### 2.6. Tester

Ouvrez :

```text
tuto-9-css.html
```

Rechargez la page.

**Résultat attendu :**

La page utilise différents modes d’affichage selon les éléments.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-9-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 9">
</iframe>

## Partie 3 — Développement progressif

### 3.1. Finaliser l’itération I3

**Série :** Page détail

**Position :** I3 sur I3

**Fin :** Tuto 9

**Incrément :** finitions de l’affichage

L’itération I3 a commencé au Tuto 8.

Conservez le résultat obtenu au Tuto 8.

Utilisez les notions étudiées dans ce tutoriel pour terminer la mise en forme de la page de détail.

Ajoutez les finitions nécessaires avec :

```text
display: block
display: inline
display: inline-block
display: none
```

Ajustez l’affichage des :

* images ;
* liens ;
* catégories ;
* listes ;
* éléments qui doivent être masqués.

### 3.2. Résultat attendu

La page de détail est maintenant terminée.

<iframe
    class="auto-wrapper"
    src="{{'/autoformations-web/code/blog/page-detail/page-detail-html-v1.tuto-9-css.html' | relative_url}}"
    height="700"
    title="Résultat final de l’itération I3">
</iframe>

### 3.3. Livrable

La version finale de la page de détail.

### 3.4. Critère de réussite

La page :

* conserve le résultat de I2 ;
* conserve les améliorations de I3 apportées au Tuto 8 ;
* utilise les modes d’affichage étudiés ;
* présente correctement les images ;
* présente correctement les liens et les listes ;
* masque les éléments prévus ;
* ne demande aucune notion CSS non étudiée.

## Bilan

**Vous avez réalisé :**

La dernière étape de mise en forme de la page de détail.

**Vous savez maintenant :**

* utiliser `display: block` ;
* utiliser `display: inline` ;
* utiliser `display: inline-block` ;
* utiliser `display: none` ;
* ajuster l’affichage des éléments HTML.

**La page de détail est maintenant finalisée.**

## Glossaire

* **`display`** : propriété qui définit le mode d’affichage d’un élément.
* **`block`** : affichage d’un élément comme un bloc.
* **`inline`** : affichage d’un élément sur la même ligne.
* **`inline-block`** : affichage en ligne avec des caractéristiques de bloc.
* **`none`** : masque l’élément.
