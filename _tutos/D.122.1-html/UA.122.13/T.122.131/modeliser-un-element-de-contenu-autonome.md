---
title: "Modéliser un élément de contenu autonome"
layout: tuto
slug: "modeliser-un-element-de-contenu-autonome"
permalink: /tutos/:slug/
tuto_id: "T.122.131"
type: "classique"
version: "normal"
ua: "UA.122.13"
nav_order: 1
data_html: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- utiliser la balise `article` ;
- identifier un contenu autonome ;
- transformer un conteneur en élément sémantique ;
- construire une carte d'article réutilisable.

À la fin du tutoriel, vous aurez une carte d'article complète qui pourra servir de modèle pour les autres cartes.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser `header` ;
- utiliser `nav` ;
- utiliser `main` ;
- utiliser `footer` ;
- utiliser `section` ;
- utiliser `class` ;
- créer un lien avec `a` ;
- afficher une image avec `img`.

Vous devez avoir réalisé les tutoriels précédents de la série :

- **T.122.121 — L'en-tête et la navigation** ;
- **T.122.122 — La zone principale et le pied de page** ;
- **T.122.123 — Regrouper en sections** ;
- **T.122.124 — Navigation interne par ancres**.

## Données de départ

La page d'accueil contient déjà une zone dédiée aux articles.

Une première carte est déjà présente.

Elle utilise actuellement un `div`.

### HTML

La carte de départ est :

```html
<div class="article-card">

    <a
        href="public-article.html"
        class="article-image"
    >

        <img
            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
            alt="Code source affiché sur un écran"
        >

    </a>

    <span class="article-category blue">
        Développement
    </span>

    <div class="article-content">

        <h3>

            <a href="public-article.html">
                Comment bien débuter avec Tailwind CSS en 2026 ?
            </a>

        </h3>

        <p>
            Découvrez les concepts fondamentaux de Tailwind CSS
            et pourquoi cette approche utilitaire est devenue
            le standard de l'industrie pour les développeurs
            frontend modernes.
        </p>

        <div class="article-meta">

            <span>
                14 Fév 2026
            </span>

            <span>
                5 min
            </span>

        </div>

    </div>

</div>
```

Cette carte contient toutes les informations d'un article.

### CSS

La classe `article-card` existe déjà.

Elle assure la présentation de la carte.

Le CSS est conservé.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. La balise `article`

La balise `article` représente un contenu autonome.

Elle permet d'indiquer qu'un bloc correspond à un contenu distinct.

Exemple :

```html
<article>

    <h2>
        Mon premier article
    </h2>

    <p>
        Voici le contenu de l'article.
    </p>

</article>
```

Ici, le contenu forme un élément distinct.

### 1.2. Une carte d'article est un contenu autonome

Une carte présente un article.

Elle possède :

- un titre ;
- un texte ;
- une image ;
- une catégorie ;
- des informations complémentaires.

Elle peut donc être représentée avec `article`.

Exemple :

```html
<article class="article-card">

    <h3>
        Apprendre HTML
    </h3>

    <p>
        Découvrez les bases du HTML.
    </p>

</article>
```

### 1.3. `div` et `article`

`div` est un conteneur générique.

Il ne précise pas le rôle du contenu.

`article` indique qu'il s'agit d'un contenu autonome.

On peut donc passer de :

```html
<div class="article-card">
    ...
</div>
```

à :

```html
<article class="article-card">
    ...
</article>
```

La classe `article-card` peut rester identique.

### 1.4. Le modèle de contenu

Une carte complète peut servir de modèle.

Un modèle est une structure que l'on pourra reprendre plus tard.

Dans ce tutoriel, une seule carte est construite.

Dans le tutoriel suivant, ce modèle sera réutilisé pour plusieurs articles.

### 1.5. À retenir

- `article` représente un contenu autonome ;
- une carte d'article peut être un `article` ;
- `div` est un conteneur générique ;
- la classe CSS peut être conservée ;
- une carte complète peut servir de modèle.

## Partie 2 — Pratique

### 2.1. Repérer la carte

Dans `.articles-grid`, recherchez :

```html
<div class="article-card">
```

Cette zone représente une carte d'article.

Elle contient toutes les informations nécessaires pour présenter une publication.

### 2.2. Remplacer la balise ouvrante

Remplacez :

```html
<div class="article-card">
```

par :

```html
<article class="article-card">
```

La classe `article-card` reste inchangée.

Elle permet de conserver la présentation existante.

### 2.3. Remplacer la balise fermante

La carte se termine actuellement par :

```html
</div>
```

Remplacez la balise qui ferme la carte par :

```html
</article>
```

Ne modifiez pas les autres balises `div`.

Elles font toujours partie de la structure interne de la carte.

### 2.4. Vérifier la carte

La carte doit maintenant commencer et se terminer ainsi :

```html
<article class="article-card">

    ...

</article>
```

Le contenu intérieur reste inchangé.

### 2.5. Vérifier le contenu

La carte doit conserver :

- l'image ;
- le lien vers l'article ;
- la catégorie ;
- le titre ;
- le texte ;
- la date ;
- la durée de lecture.

La structure complète est :

```text
article
├── image et lien
├── catégorie
└── contenu
    ├── titre
    ├── texte
    └── informations
```

### 2.6. Vérifier le modèle

La carte obtenue peut maintenant servir de modèle.

Elle contient une structure complète :

```html
<article class="article-card">

    <a
        href="public-article.html"
        class="article-image"
    >

        <img
            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
            alt="Code source affiché sur un écran"
        >

    </a>

    <span class="article-category blue">
        Développement
    </span>

    <div class="article-content">

        <h3>

            <a href="public-article.html">
                Comment bien débuter avec Tailwind CSS en 2026 ?
            </a>

        </h3>

        <p>
            Découvrez les concepts fondamentaux de Tailwind CSS
            et pourquoi cette approche utilitaire est devenue
            le standard de l'industrie pour les développeurs
            frontend modernes.
        </p>

        <div class="article-meta">

            <span>
                14 Fév 2026
            </span>

            <span>
                5 min
            </span>

        </div>

    </div>

</article>
```

Cette structure servira de base dans le tutoriel suivant.

### 2.7. Tester la page

Ouvrez la page dans le navigateur.

Vérifiez que :

- la carte est visible ;
- l'image est visible ;
- le titre est visible ;
- le texte est visible ;
- la catégorie est visible ;
- la date est visible ;
- la durée est visible ;
- le lien vers l'article fonctionne ;
- la présentation reste correcte.

Le changement de `div` vers `article` ne doit pas supprimer le contenu.

## Résultat attendu

La zone des articles doit contenir une carte complète :

```html
<div class="articles-grid">

    <article class="article-card">

        <a
            href="public-article.html"
            class="article-image"
        >

            <img
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
                alt="Code source affiché sur un écran"
            >

        </a>

        <span class="article-category blue">
            Développement
        </span>

        <div class="article-content">

            <h3>

                <a href="public-article.html">
                    Comment bien débuter avec Tailwind CSS en 2026 ?
                </a>

            </h3>

            <p>
                Découvrez les concepts fondamentaux de Tailwind CSS
                et pourquoi cette approche utilitaire est devenue
                le standard de l'industrie pour les développeurs
                frontend modernes.
            </p>

            <div class="article-meta">

                <span>
                    14 Fév 2026
                </span>

                <span>
                    5 min
                </span>

            </div>

        </div>

    </article>

</div>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-131-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le navigateur doit afficher une carte d'article complète.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 1er tutoriel de la série UA.122.13

**Incrément :** Transformation d'une carte d'article en contenu autonome avec `article`.

**Intégration demandée :**

Utilisez les notions étudiées pour transformer la carte existante.

Remplacez uniquement le conteneur principal de la carte :

```html
<div class="article-card">
    ...
</div>
```

par :

```html
<article class="article-card">
    ...
</article>
```

Conservez :

- le contenu ;
- les liens ;
- l'image ;
- les classes CSS ;
- la présentation.

Cette carte devient le modèle qui sera réutilisé dans le tutoriel suivant.

**Livrable :**

Une carte d'article complète utilisant la balise `article`.

**Critère de réussite :**

La carte :

- utilise `article` comme élément principal ;
- conserve la classe `article-card` ;
- conserve tout son contenu ;
- reste correctement affichée dans le navigateur.

**Résultat attendu :**

```html
<article class="article-card">

    <a
        href="public-article.html"
        class="article-image"
    >

        <img
            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
            alt="Code source affiché sur un écran"
        >

    </a>

    <span class="article-category blue">
        Développement
    </span>

    <div class="article-content">

        <h3>

            <a href="public-article.html">
                Comment bien débuter avec Tailwind CSS en 2026 ?
            </a>

        </h3>

        <p>
            Découvrez les concepts fondamentaux de Tailwind CSS
            et pourquoi cette approche utilitaire est devenue
            le standard de l'industrie pour les développeurs
            frontend modernes.
        </p>

        <div class="article-meta">

            <span>
                14 Fév 2026
            </span>

            <span>
                5 min
            </span>

        </div>

    </div>

</article>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-131-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

## Bilan

**Vous avez réalisé :**

Une carte d'article complète avec une structure sémantique.

**Vous savez maintenant :**

- utiliser `article` ;
- identifier un contenu autonome ;
- transformer un `div` en `article` ;
- conserver une classe CSS ;
- construire un modèle de carte réutilisable.

## Glossaire

- **`article`** : élément HTML qui représente un contenu autonome.
- **Contenu autonome** : contenu qui forme un élément distinct.
- **Modèle** : structure utilisée comme base pour créer d'autres éléments.
- **Carte d'article** : bloc qui présente les informations d'un article.
- **`article-card`** : classe utilisée pour la présentation de la carte.