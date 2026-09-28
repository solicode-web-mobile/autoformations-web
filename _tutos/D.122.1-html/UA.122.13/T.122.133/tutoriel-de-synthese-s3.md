---
title: "Tutoriel de Synthèse S3"
layout: tuto
slug: "tutoriel-de-synthese-s3"
permalink: /tutos/:slug/
tuto_id: "T.122.133"
type: "classique"
version: "normal"
ua: "UA.122.13"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- consolider la structure d'une page HTML ;
- organiser les grandes zones de la page ;
- identifier une zone avec `id` ;
- créer une navigation interne ;
- représenter des contenus avec `article` ;
- répéter une structure avec une classe commune.

À la fin du tutoriel, vous aurez une page d'accueil complète et structurée.

## 2. Prérequis

Vous devez déjà savoir :

- créer un document HTML ;
- utiliser `header` ;
- utiliser `nav` ;
- utiliser `main` ;
- utiliser `section` ;
- utiliser `footer` ;
- utiliser `article` ;
- utiliser `id` ;
- utiliser `class` ;
- utiliser `href="#id"` ;
- créer des liens ;
- afficher des images.

Vous devez avoir réalisé :

- **T.122.121 — L'en-tête et la navigation** ;
- **T.122.122 — La zone principale et le pied de page** ;
- **T.122.123 — Regrouper en sections** ;
- **T.122.124 — Navigation interne par ancres** ;
- **T.122.131 — Modéliser un élément de contenu autonome** ;
- **T.122.132 — Répéter et identifier les modèles**.

Ce tutoriel utilise les notions déjà étudiées.

Aucune nouvelle notion HTML n'est introduite.

## Données de départ

La page d'accueil contient déjà les principales zones du blog.

Elle contient :

- un en-tête ;
- une navigation ;
- une zone d'accueil ;
- une zone d'articles ;
- une zone de catégories ;
- une carte d'article ;
- un pied de page.

Le travail consiste à compléter cette page avec les notions étudiées pendant S3.

### HTML

Le document est déjà organisé ainsi :

```text
header
└── nav

main
├── section — accueil
└── section — articles
    └── section — catégories

footer
```

Une première carte d'article est également présente :

```html
<article class="article-card">
    ...
</article>
```

### CSS

Le CSS existe déjà.

Conservez les classes CSS existantes.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. Les grandes zones de la page

Une page HTML peut être organisée avec des balises sémantiques.

Dans notre page :

```text
header
main
footer
```

`header` contient la navigation.

`main` contient le contenu principal.

`footer` contient les informations de fin de page.

### 1.2. Les sections

Le contenu de `main` est organisé avec plusieurs `section`.

Exemple :

```html
<main>

    <section>
        ...
    </section>

    <section>
        ...
    </section>

</main>
```

Chaque section représente une partie du contenu.

### 1.3. La navigation interne

Une zone peut être identifiée avec `id`.

Exemple :

```html
<section id="articles">
    ...
</section>
```

Un lien peut ensuite pointer vers cette zone :

```html
<a href="#articles">
    Lire les articles
</a>
```

La valeur de `href` doit correspondre à la valeur de `id`.

### 1.4. Les contenus autonomes

Chaque publication est représentée avec `article`.

Exemple :

```html
<article class="article-card">

    <h3>
        Mon article
    </h3>

    <p>
        Texte de l'article.
    </p>

</article>
```

`article` représente une publication distincte.

### 1.5. Répéter un modèle

Plusieurs publications peuvent utiliser la même structure.

Exemple :

```html
<article class="article-card">
    ...
</article>

<article class="article-card">
    ...
</article>

<article class="article-card">
    ...
</article>
```

La classe `article-card` est commune aux cartes.

Elle permet d'identifier les éléments de même nature.

### 1.6. À retenir

- `header` organise l'en-tête ;
- `nav` organise la navigation ;
- `main` contient le contenu principal ;
- `section` regroupe des contenus liés ;
- `footer` organise le pied de page ;
- `id` identifie une zone précise ;
- `href="#id"` crée une navigation interne ;
- `article` représente un contenu autonome ;
- `class` peut être commune à plusieurs éléments.

## Partie 2 — Pratique

### 2.1. Vérifier l'en-tête

Vérifiez que la partie haute utilise :

```html
<header class="site-header">

    <nav class="navbar">
        ...
    </nav>

</header>
```

Vérifiez que :

- le nom du blog est présent ;
- les liens de navigation sont présents ;
- le lien « Espace Admin » est présent.

Ne modifiez pas le contenu.

### 2.2. Vérifier la zone principale

Vérifiez que le contenu principal utilise :

```html
<main class="page-content">

    ...

</main>
```

Le `main` doit contenir :

- la zone d'accueil ;
- la zone des articles.

### 2.3. Vérifier les sections

La zone d'accueil doit utiliser :

```html
<section class="hero">

    ...

</section>
```

La zone des articles doit utiliser :

```html
<section
    id="articles"
    class="articles-section"
>

    ...

</section>
```

La zone des catégories doit également utiliser :

```html
<section class="category-filter">

    ...

</section>
```

Chaque `section` doit correspondre à une partie identifiable de la page.

### 2.4. Vérifier la navigation interne

Dans la zone d'accueil, vérifiez :

```html
<a
    href="#articles"
    class="hero-button hero-button-primary"
>
    Lire les articles
</a>
```

Puis vérifiez la cible :

```html
<section
    id="articles"
    class="articles-section"
>
```

Les deux utilisent :

```text
articles
```

### 2.5. Vérifier la carte d'article

Dans `.articles-grid`, vérifiez que la carte utilise :

```html
<article class="article-card">

    ...

</article>
```

Elle doit contenir :

- une image ;
- une catégorie ;
- un titre ;
- un texte ;
- des informations complémentaires.

### 2.6. Répéter le modèle

Utilisez la carte existante comme modèle.

Dupliquez-la deux fois.

Vous devez obtenir trois articles.

La structure générale devient :

```html
<div class="articles-grid">

    <article class="article-card">
        ...
    </article>

    <article class="article-card">
        ...
    </article>

    <article class="article-card">
        ...
    </article>

</div>
```

### 2.7. Modifier les contenus

Conservez la structure de chaque carte.

Pour le deuxième article, utilisez :

```text
Catégorie : UI / UX
Titre : L'importance des micro-interactions
Date : 10 Fév 2026
Durée : 3 min
```

Pour le troisième article, utilisez :

```text
Catégorie : Management
Titre : Gérer une équipe de développeurs en Full Remote
Date : 05 Fév 2026
Durée : 8 min
```

Les trois cartes doivent garder la classe :

```html
class="article-card"
```

### 2.8. Vérifier le pied de page

Vérifiez que la fin de la page utilise :

```html
<footer class="site-footer">

    ...

</footer>
```

Conservez :

- le nom du blog ;
- les liens ;
- les informations de contact ;
- le copyright.

### 2.9. Vérifier la structure globale

Vous devez maintenant avoir :

```text
body
├── header
│   └── nav
│
├── main
│   ├── section — accueil
│   │
│   └── section — articles
│       └── section — catégories
│           └── articles
│
└── footer
```

La zone des articles contient trois `article`.

### 2.10. Tester la page

Ouvrez la page dans le navigateur.

Vérifiez que :

- l'en-tête est visible ;
- la navigation fonctionne ;
- la zone d'accueil est visible ;
- le bouton « Lire les articles » mène à la zone des articles ;
- les catégories sont visibles ;
- les trois articles sont affichés ;
- les trois cartes ont une présentation cohérente ;
- les liens fonctionnent ;
- le pied de page est visible.

## Résultat attendu

La page finale doit être organisée ainsi :

```html
<header class="site-header">

    <nav class="navbar">

        ...

    </nav>

</header>

<main class="page-content">

    <section class="hero">

        ...

        <a
            href="#articles"
            class="hero-button hero-button-primary"
        >
            Lire les articles
        </a>

    </section>

    <section
        id="articles"
        class="articles-section"
    >

        <div class="articles-container">

            <section class="category-filter">

                ...

            </section>

            <div class="articles-header">

                ...

            </div>

            <div class="articles-grid">

                <article class="article-card">

                    ...

                </article>

                <article class="article-card">

                    ...

                </article>

                <article class="article-card">

                    ...

                </article>

            </div>

        </div>

    </section>

</main>

<footer class="site-footer">

    ...

</footer>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-133-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le résultat doit montrer une page d'accueil structurée avec plusieurs articles.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 3e tutoriel de la série UA.122.13

**Incrément :** Finalisation de la page d'accueil par consolidation de toutes les structures HTML étudiées dans S3.

**Intégration demandée :**

À partir de la réalisation construite dans les tutoriels précédents, finalisez votre page d'accueil.

Vérifiez et complétez :

```text
header
nav
main
section
id
href="#id"
article
class
```

La page doit contenir plusieurs articles construits à partir du même modèle.

Conservez :

- les contenus ;
- les liens ;
- les images ;
- les classes CSS ;
- la présentation.

N'ajoutez aucune nouvelle notion HTML.

**Livrable :**

La page d'accueil finale du blog avec :

- un en-tête sémantique ;
- une navigation ;
- un contenu principal ;
- plusieurs sections ;
- une navigation interne ;
- plusieurs articles ;
- un pied de page.

**Critère de réussite :**

La page :

- utilise correctement les balises étudiées ;
- possède un lien interne fonctionnel ;
- contient plusieurs `article` ;
- utilise une classe commune pour les cartes ;
- conserve la présentation existante ;
- fonctionne dans le navigateur.

**Résultat attendu :**

```html
<main class="page-content">

    <section class="hero">

        ...

    </section>

    <section
        id="articles"
        class="articles-section"
    >

        ...

        <div class="articles-grid">

            <article class="article-card">
                ...
            </article>

            <article class="article-card">
                ...
            </article>

            <article class="article-card">
                ...
            </article>

        </div>

    </section>

</main>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-133-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Cette version constitue la page d'accueil structurée obtenue à la fin de S3.

## Bilan

**Vous avez réalisé :**

La page d'accueil complète du blog avec une structure HTML sémantique et plusieurs articles.

**Vous savez maintenant :**

- structurer les grandes zones d'une page ;
- créer une navigation avec `nav` ;
- organiser le contenu avec `main` et `section` ;
- créer une navigation interne avec `id` et `href="#id"` ;
- représenter un contenu autonome avec `article` ;
- répéter un modèle ;
- utiliser une classe commune pour des éléments de même nature ;
- organiser une page HTML complète.

## Glossaire

- **`header`** : zone d'en-tête d'une page.
- **`nav`** : zone de navigation.
- **`main`** : contenu principal de la page.
- **`section`** : partie regroupant des contenus liés.
- **`footer`** : pied de page.
- **`id`** : identifiant d'un élément HTML.
- **Ancre** : cible d'une navigation interne.
- **`article`** : contenu autonome.
- **`class`** : nom commun utilisé pour identifier plusieurs éléments.
- **Modèle** : structure utilisée comme base pour créer plusieurs éléments.