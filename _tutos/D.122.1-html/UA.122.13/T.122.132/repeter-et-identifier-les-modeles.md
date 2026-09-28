---
title: "Répéter et identifier les modèles"
layout: tuto
slug: "repeter-et-identifier-les-modeles"
permalink: /tutos/:slug/
tuto_id: "T.122.132"
type: "classique"
version: "normal"
ua: "UA.122.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- dupliquer une structure HTML ;
- créer plusieurs articles à partir du même modèle ;
- utiliser une même classe pour des éléments de même nature ;
- modifier le contenu sans modifier la structure.

À la fin du tutoriel, la page affichera plusieurs articles construits à partir du même modèle.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser `class` ;
- utiliser `section` ;
- utiliser `article` ;
- créer des liens avec `a` ;
- afficher une image avec `img` ;
- construire une carte d'article.

Vous devez avoir réalisé :

- **T.122.131 — Modéliser un élément de contenu autonome**.

## Données de départ

La page contient une seule carte d'article.

Cette carte est déjà construite avec `article`.

### HTML

La carte existante est :

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

Cette carte sert de modèle.

### CSS

La classe `article-card` existe déjà.

Elle est utilisée pour la présentation de la carte.

La classe sera réutilisée pour les autres articles.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. Répéter une structure

Une structure HTML peut être répétée plusieurs fois.

Exemple :

```html
<article class="article-card">
    ...
</article>

<article class="article-card">
    ...
</article>
```

Chaque `article` représente un article différent.

La structure reste similaire.

### 1.2. Utiliser une classe commune

Une même classe peut être utilisée sur plusieurs éléments.

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

Les trois éléments utilisent la classe :

```text
article-card
```

Cette classe permet d'identifier les éléments qui représentent une carte d'article.

### 1.3. Dupliquer un modèle

Une carte existante peut servir de modèle.

On peut :

1. copier la structure ;
2. conserver les classes ;
3. modifier le contenu.

Exemple :

```text
Carte 1
└── modèle

Carte 2
└── copie du modèle

Carte 3
└── copie du modèle
```

### 1.4. Même structure, contenu différent

Les cartes peuvent avoir la même structure.

Le contenu peut être différent.

Par exemple :

```text
Article 1 → Développement
Article 2 → UI / UX
Article 3 → Management
```

La classe `article-card` reste la même.

### 1.5. À retenir

- une structure HTML peut être dupliquée ;
- plusieurs articles peuvent utiliser le même modèle ;
- une même classe peut identifier les cartes ;
- la structure peut rester identique ;
- le contenu peut changer.

## Partie 2 — Pratique

### 2.1. Repérer le modèle

Dans `.articles-grid`, repérez :

```html
<article class="article-card">
    ...
</article>
```

Cette carte est le modèle.

Elle possède déjà une structure complète.

### 2.2. Dupliquer la carte

Sélectionnez toute la carte :

```html
<article class="article-card">

    ...

</article>
```

Copiez-la.

Placez la copie juste après la première carte.

Vous obtenez deux articles :

```html
<div class="articles-grid">

    <article class="article-card">
        ...
    </article>

    <article class="article-card">
        ...
    </article>

</div>
```

### 2.3. Vérifier la classe

Les deux cartes doivent conserver :

```html
class="article-card"
```

Ne changez pas cette classe.

Les deux cartes représentent le même type d'élément.

### 2.4. Modifier le deuxième article

Dans la deuxième carte, conservez la structure.

Modifiez seulement son contenu.

Utilisez :

```html
<article class="article-card">

    <a
        href="public-article.html"
        class="article-image"
    >

        <img
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=400&fit=crop"
            alt="Interface utilisateur moderne"
        >

    </a>

    <span class="article-category pink">
        UI / UX
    </span>

    <div class="article-content">

        <h3>
            <a href="public-article.html">
                L'importance des micro-interactions
            </a>
        </h3>

        <p>
            Une interface belle n'est pas suffisante.
            Comprendre comment animer de petites actions peut
            transformer l'expérience utilisateur et augmenter
            l'engagement.
        </p>

        <div class="article-meta">

            <span>
                10 Fév 2026
            </span>

            <span>
                3 min
            </span>

        </div>

    </div>

</article>
```

La classe `article-card` reste la même.

### 2.5. Créer le troisième article

Copiez une nouvelle fois le modèle.

Placez la copie après le deuxième article.

Modifiez son contenu avec :

```html
<article class="article-card">

    <a
        href="public-article.html"
        class="article-image"
    >

        <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            alt="Équipe de développeurs en réunion"
        >

    </a>

    <span class="article-category green">
        Management
    </span>

    <div class="article-content">

        <h3>
            <a href="public-article.html">
                Gérer une équipe de développeurs en Full Remote
            </a>
        </h3>

        <p>
            Les méthodes agiles et les rituels essentiels pour
            maintenir la cohésion de groupe et la productivité
            lorsque tous les membres sont distribués.
        </p>

        <div class="article-meta">

            <span>
                05 Fév 2026
            </span>

            <span>
                8 min
            </span>

        </div>

    </div>

</article>
```

La structure reste identique.

### 2.6. Vérifier les trois classes

Chaque article doit utiliser :

```html
class="article-card"
```

Vous devez obtenir :

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

La même classe identifie les trois cartes.

### 2.7. Vérifier la structure

La zone des articles doit maintenant être organisée ainsi :

```text
articles-grid
├── article-card
├── article-card
└── article-card
```

Chaque `article` représente une publication.

Chaque carte utilise le même modèle.

### 2.8. Tester la page

Ouvrez la page dans le navigateur.

Vérifiez que :

- trois articles sont affichés ;
- les trois cartes ont la même présentation ;
- les images sont visibles ;
- les titres sont visibles ;
- les textes sont visibles ;
- les catégories sont visibles ;
- les liens fonctionnent.

Vérifiez aussi que le bouton « Lire les articles » fonctionne toujours.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 2e tutoriel de la série UA.122.13

**Incrément :** Répétition de la carte d'article pour obtenir plusieurs articles utilisant la même classe.

**Intégration demandée :**

À partir de la carte créée dans T.122.131 :

- dupliquez la structure ;
- conservez `article-card` ;
- créez deux nouvelles cartes ;
- modifiez les contenus des nouvelles cartes.

Ne créez pas une nouvelle structure pour chaque article.

Conservez un modèle commun.

**Livrable :**

Plusieurs articles affichés à partir du même modèle HTML.

**Critère de réussite :**

La page contient trois éléments :

```html
<article class="article-card">
    ...
</article>
```

Les trois éléments ont :

- la même classe principale ;
- une structure comparable ;
- des contenus différents.

**Résultat attendu :**

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

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-132-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Les trois articles doivent apparaître avec une présentation cohérente.

## Bilan

**Vous avez réalisé :**

Plusieurs articles à partir d'un même modèle de carte.

**Vous savez maintenant :**

- dupliquer une structure HTML ;
- utiliser une même classe sur plusieurs éléments ;
- identifier des éléments de même nature avec une classe ;
- modifier le contenu sans modifier le modèle ;
- afficher plusieurs articles dans une même zone.

## Glossaire

- **Répétition manuelle** : copie d'une même structure HTML plusieurs fois.
- **Modèle** : structure utilisée comme base pour créer plusieurs éléments.
- **Classe** : nom utilisé pour identifier plusieurs éléments de même nature.
- **`article-card`** : classe commune aux cartes d'articles.
- **Carte d'article** : bloc qui présente les informations d'un article.