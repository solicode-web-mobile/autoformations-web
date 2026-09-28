---
title: "Conteneurs et listes HTML"
layout: tuto
slug: "conteneurs-listes-html"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.114"
type: "classique"
version: "detaille"
ua: "UA.122.11"
nav_order: 4
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Conteneurs et listes HTML</title>
    </head>
    <body>
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

Architecturer et modéliser logiquement une page web à l'aide de conteneurs sémantiques (HTML5), comprendre l'utilité des éléments "en ligne" vs "blocs", et construire des listes de données hiérarchisées.

## 2. Prérequis

* Connaître la structure de base du document HTML.
* Savoir utiliser les titres (`<h1>` à `<h6>`) et les paragraphes (`<p>`).
* Savoir utiliser des attributs.

## 3. Données de départ

Nous partons d'un document HTML vide standardisé :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Conteneurs et listes HTML</title>
</head>
<body>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. La notion de conteneur

Jusqu'à présent, nous avons affiché les paragraphes et les titres les uns sous les autres. Dans une vraie page web (qui sera mise en forme avec CSS), les éléments doivent être regroupés dans des **"boîtes"** pour pouvoir les déplacer ensemble.

Historiquement, on utilisait la balise générique `<div>` (division) pour créer ces grandes boîtes, et `<span>` pour isoler un mot au milieu d'une phrase.
- `<div>` est un élément de type **Bloc** : il prend toute la largeur disponible et force un retour à la ligne.
- `<span>` est un élément de type **En ligne** (Inline) : il s'intègre dans la ligne courante sans la casser.

### 1.2. Le HTML5 et la Sémantique Structurale

Depuis HTML5, il est recommandé de remplacer les `<div>` par des balises porteuses de sens, qui expliquent aux moteurs de recherche *à quoi sert cette boîte*.

- **`<main>`** : La boîte principale de la page (unique par page).
- **`<article>`** : Une boîte indépendante qui a du sens par elle-même (article de blog, fiche produit, commentaire).
- **`<section>`** : Un chapitre ou un regroupement thématique à l'intérieur d'un article ou du main.
- **`<header>`** : L'en-tête (souvent utilisé pour regrouper le logo et la navigation, ou le titre d'un article).

### 1.3. L'attribut `class` (Le nom de famille)

Pour différencier deux `<section>` (par exemple, la section "Contact" et la section "Tarifs"), on utilise l'attribut `class`. La classe servira d'accroche pour la décoration visuelle (CSS) ou l'interactivité (JavaScript).

```html
<section class="section-tarifs">...</section>
```

### 1.4. Les listes non ordonnées

Une liste regroupe des éléments de même nature.
- **`<ul>`** (Unordered List) : Le conteneur parent de la liste (qui génère les puces).
- **`<li>`** (List Item) : Les enfants, c'est-à-dire chaque ligne de la liste. 

Une balise `<li>` doit toujours être l'enfant direct d'un `<ul>` (ou `<ol>` pour les listes numérotées).

## Partie 2 — Pratique

### 2.1. L'architecture de la page

Créez le fichier `tuto-4-html.html` et ajoutez cette structure imbriquée étape par étape :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Conteneurs et listes HTML</title>
</head>
<body>
    
    <!-- L'article englobe tout notre sujet -->
    <article>
        
        <!-- L'en-tête de l'article -->
        <header class="article-header">
            <!-- Un span pour isoler la catégorie -->
            <span class="article-category">Développement</span>
            <h2>Le rôle du développeur</h2>
        </header>

        <!-- Le corps principal de l'article -->
        <main>
            <!-- Une section spécifique pour le texte -->
            <section class="article-body">
                <p>Le développeur crée des applications.</p>
                
                <!-- La liste des tâches (puces) -->
                <ul class="article-list">
                    <li>Analyser le besoin</li>
                    <li>Réaliser l'application</li>
                    <li>Vérifier l'application</li>
                    <li>Déployer l'application</li>
                </ul>
            </section>
        </main>
        
    </article>

</body>
</html>
```

### 2.2. Observer l'indentation

Remarquez les tabulations (espaces à gauche) : chaque élément "enfant" est décalé par rapport à son "parent". C'est l'**indentation**. Elle est vitale pour relire un code basé sur des boîtes imbriquées.

### 2.3. Tester la page

Enregistrez et ouvrez `tuto-4-html.html` dans le navigateur.

**Résultat attendu :**
L'aspect visuel est assez proche d'une page classique (les conteneurs sont invisibles), mais si on applique du CSS plus tard, ce code est prêt à être transformé en une véritable carte d'article (`<article>`) avec un en-tête coloré (`<header>`).

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-4/tuto-4-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 4">
</iframe>

## 3. Bilan

**Vous avez réalisé :** l'architecture robuste d'un composant de page.

**Vous savez maintenant :** utiliser les balises structurelles HTML5, différencier les éléments blocs/en ligne, identifier des zones grâce aux classes, et maintenir une arborescence (indentation) propre.
