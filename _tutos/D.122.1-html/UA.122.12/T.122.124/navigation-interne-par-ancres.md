---
title: "Navigation interne par ancres"
layout: tuto
slug: "navigation-interne-par-ancres"
permalink: /tutos/:slug/
tuto_id: "T.122.124"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 4
simplified: true
data_html: ""
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

- Créer des ancres avec l'attribut `id`.
- Rendre des liens internes fonctionnels pour scroller directement vers ces ancres.

## 2. Prérequis

- Avoir terminé de sémantiser les contenus (`article`) au tutoriel précédent.

## Données de départ

Voici la page avec sa sémantique parfaite ! 
Dans la bannière, le bouton "Lire les articles" contient déjà un lien vers la balise de destination sous cette forme : `<a href="#articles">`. Cependant, il ne fonctionne pas car aucune section n'a encore l'identifiant correspondant.

Copiez et collez le code suivant dans votre éditeur pour commencer :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog Personnel - Accueil</title>
</head>
<body>
    <!-- EN-TÊTE DU SITE -->
    <header class="en-tete-site">
        <nav class="barre-navigation">
            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
                <li><a href="public-apropos.html">À propos</a></li>
            </ul>
            <a href="admin-login.html" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <main>
        <section class="banniere-accueil">
            <h1>
                Mon Blog Personnel :<br>
                <span>Développer &amp; Partager</span>
            </h1>
            <p>
                Découvrez mes derniers articles sur le développement web,
                l'architecture logicielle et les bonnes pratiques
                d'intégration UI/UX.
            </p>
            <div class="actions-banniere">
                <a href="#articles" class="bouton-principal">Lire les articles</a>
                <a href="public-apropos.html" class="bouton-secondaire">À propos de moi</a>
            </div>
        </section>

        <section class="section-articles">
            <div class="conteneur-articles">

                <section class="filtre-categories">
                    <h2>Explorer par thème</h2>
                    <div class="liste-filtres">
                        <a href="public-index.html" class="pilule-filtre actif">Tous les articles</a>
                        <a href="public-categorie.html" class="pilule-filtre">Développement</a>
                        <a href="public-categorie.html" class="pilule-filtre">Design UI/UX</a>
                        <a href="public-categorie.html" class="pilule-filtre">Productivité</a>
                        <a href="public-categorie.html" class="pilule-filtre">Management</a>
                    </div>
                </section>

                <div class="entete-liste-articles">
                    <div>
                        <h2>Dernières publications</h2>
                        <p>Les articles les plus récents de la communauté.</p>
                    </div>
                    <a href="public-categorie.html" class="lien-voir-tout">Explorer tout</a>
                </div>

                <div class="grille-articles">
                    <article class="carte-article">
                        <a href="public-article.html" class="carte-image">
                            <img src="images/article-example.png" alt="Code source affiché sur un écran">
                        </a>
                        <span class="etiquette-categorie bleu">Développement</span>
                        <div class="carte-contenu">
                            <h3><a href="public-article.html">Comment bien débuter avec Tailwind CSS en 2026 ?</a></h3>
                            <p>Découvrez les concepts fondamentaux de Tailwind CSS et pourquoi cette approche utilitaire est devenue le standard de l'industrie.</p>
                            <div class="carte-meta">
                                <span>14 Fév 2026</span>
                                <span>5 min</span>
                            </div>
                        </div>
                    </article>
                    <article class="carte-article">
                        <a href="public-article.html" class="carte-image">
                            <img src="images/article-example.png" alt="Interface utilisateur moderne">
                        </a>
                        <span class="etiquette-categorie rose">UI / UX</span>
                        <div class="carte-contenu">
                            <h3><a href="public-article.html">L'importance des micro-interactions</a></h3>
                            <p>Une interface belle n'est pas suffisante. Comprendre comment animer de petites actions peut transformer l'expérience utilisateur.</p>
                            <div class="carte-meta">
                                <span>10 Fév 2026</span>
                                <span>3 min</span>
                            </div>
                        </div>
                    </article>
                    <article class="carte-article">
                        <a href="public-article.html" class="carte-image">
                            <img src="images/article-example.png" alt="Équipe de développeurs en réunion">
                        </a>
                        <span class="etiquette-categorie vert">Management</span>
                        <div class="carte-contenu">
                            <h3><a href="public-article.html">Gérer une équipe de développeurs en Full Remote</a></h3>
                            <p>Les méthodes agiles et les rituels essentiels pour maintenir la cohésion de groupe et la productivité lorsque tous les membres sont distribués.</p>
                            <div class="carte-meta">
                                <span>05 Fév 2026</span>
                                <span>8 min</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <!-- PIED DE PAGE -->
    <footer class="pied-de-page">
        <div class="conteneur-pied-de-page">
            <div class="colonne-pied-de-page">
                <h2>Mon Blog</h2>
                <p>Partager des connaissances, des tutoriels et des découvertes sur le développement web.</p>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="public-index.html">Accueil</a></li>
                    <li><a href="public-categorie.html">Catégories</a></li>
                    <li><a href="public-apropos.html">À propos</a></li>
                </ul>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Contact</h2>
                <p>Retrouvez les nouveaux articles chaque semaine.</p>
            </div>
        </div>
        <div class="bas-pied-de-page">
            <p>&copy; 2026 Mon Blog Personnel.</p>
        </div>
    </footer>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'attribut `id`

Un **`id`** est un identifiant unique que l'on peut attribuer à n'importe quelle balise HTML. 
*Règle d'or : On ne peut pas avoir deux fois le même `id` dans une même page !*

### 1.2. Le lien interne (l'ancre)

Pour faire scroller la page vers l'élément qui possède un `id` spécifique, il suffit de créer un lien classique `<a>` et de faire commencer son attribut `href` par un **`#`** suivi du nom de l'id.

**Exemple complet :**

```html
<!-- Le lien de navigation -->
<a href="#contact">Aller au formulaire</a>

<!-- Beaucoup de contenu ... -->

<!-- La cible de l'ancre -->
<section id="contact">
    <h2>Formulaire de contact</h2>
</section>
```

## Partie 2 — Pratique

### 2.1. Ajouter l'identifiant à la cible

Dans votre code HTML, la zone des articles est actuellement définie ainsi :
```html
<section class="section-articles">
```

Ajoutez-lui l'identifiant `articles` comme ceci :

```html
<section id="articles" class="section-articles">
```

### 2.2. Tester le résultat

Le lien (`href="#articles"`) et la cible (`id="articles"`) sont désormais connectés !

Allez tester votre page ! Si vous cliquez sur le bouton "Lire les articles", vous verrez la page défiler doucement jusqu'à la liste de vos publications.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat attendu complet</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/html/T.122.124.html' | relative_url }}"
    height="320"
    title="Résultat attendu">
</iframe>

## Bilan

Félicitations ! Vous avez terminé l'intégration de toute l'architecture de la page d'accueil de votre blog, en alliant sémantique parfaite et navigation interne !
