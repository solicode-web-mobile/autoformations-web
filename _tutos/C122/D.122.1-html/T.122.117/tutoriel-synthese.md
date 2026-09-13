---
title: "Tutoriel de Synthèse"
layout: tuto
slug: "tutoriel-synthese"
permalink: /tutos/:slug/
tuto_id: "T.122.117"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 7
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Métier de développeur - Les principales missions</title>
      <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

  </body>
  </html>
---


## 1. Objectif

Réaliser la page complète d'un article de blog en utilisant l'ensemble des balises et concepts HTML étudiés.

À la fin de ce tutoriel, vous aurez structuré une page Web contenant des titres, des paragraphes, des conteneurs sémantiques, des listes et des images.

## 2. Prérequis

* Avoir suivi les tutoriels T.122.111 à T.122.116.
* Savoir structurer un document HTML.
* Savoir utiliser les balises textuelles, sémantiques et multimédias.

## Données de départ

### HTML

La structure de base inclut un lien vers un fichier CSS fourni pour la mise en forme.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>
        Métier de développeur - Les principales missions
    </title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

</body>
</html>
```

## Partie 1 — Pratique Guidée

### 1.1. Préparer le fichier

#### Étape 1 — Créer le fichier

Créez le fichier `page-detail-v1.html` et ajoutez-y les données de départ.

### 1.2. Structurer l'article et son en-tête

#### Étape 2 — Ajouter l'article et le header

Dans `<body>`, ajoutez l'article principal et son en-tête. 

```html
    <article>
        <header class="article-header">
            <span class="article-category">Développement</span>
            <h1>Le métier de développeur et ses principales missions</h1>
            
            <div class="article-meta">
                <div class="article-author">
                    <img src="images/author.jpg" alt="Portrait d'un développeur">
                    <div>
                        <strong>Madani Ali</strong>
                        <span>Auteur du blog</span>
                    </div>
                </div>
                <time datetime="2026-02-14">14 Février 2026</time>
                <span>5 min de lecture</span>
            </div>
        </header>
```

#### Étape 3 — Ajouter l'image de couverture

Sous le `<header>`, ajoutez la figure de couverture :

```html
        <figure class="article-cover">
            <img src="images/article-cover.png" alt="Écran montrant du code informatique">
        </figure>
```

### 1.3. Ajouter le contenu principal

#### Étape 4 — Créer la zone principale

Ajoutez `<main>` et `<section>` pour le corps de l'article :

```html
        <main class="article-main">
            <section class="article-body">
                <h2>Le rôle du développeur</h2>
                <p>
                    Le développeur crée des applications.
                    Il transforme un besoin en solution informatique.
                    Son travail se fait en plusieurs étapes.
                    Il doit bien comprendre le projet.
                </p>
                <p>
                    La première mission est d'analyser le besoin.
                    Le développeur cherche les fonctionnalités nécessaires.
                    Il étudie les informations à utiliser.
                    Il peut aussi analyser une base de données.
                </p>
```

#### Étape 5 — Ajouter une sous-section avec une figure et une citation

```html
                <h3>Réaliser l'application</h3>
                
                <figure class="article-figure">
                    <img src="images/article-example.png" alt="Développeur écrivant du code">
                    <figcaption>Le développeur écrit le code de l'application.</figcaption>
                </figure>
                
                <blockquote class="article-blockquote">
                    <p>
                        Le développeur réalise l'application à partir du besoin.
                        Il utilise des technologies comme HTML, CSS et JavaScript.
                        Il organise son code et crée les fonctionnalités demandées.
                    </p>
                    <cite>— Métier de développeur</cite>
                </blockquote>
                
                <p>
                    Après la réalisation, le développeur doit vérifier l'application.
                    Il réalise des tests pour trouver les erreurs.
                    Il fait aussi du débogage pour corriger le code.
                </p>
```

#### Étape 6 — Ajouter la liste des missions

Ajoutez une liste à puces structurant les missions :

```html
                <ul class="article-list">
                    <li>
                        <strong>Analyser le besoin</strong> :
                        comprendre le projet et identifier les fonctionnalités.
                    </li>
                    <li>
                        <strong>Réaliser l'application</strong> :
                        écrire le code et développer les fonctionnalités.
                    </li>
                    <li>
                        <strong>Vérifier l'application</strong> :
                        tester l'application et corriger les erreurs.
                    </li>
                    <li>
                        <strong>Déployer l'application</strong> :
                        mettre l'application sur un serveur pour la rendre disponible.
                    </li>
                </ul>
```

#### Étape 7 — Terminer l'article

Ajoutez la dernière partie de l'article et fermez toutes les balises principales :

```html
                <h3>Travailler en équipe</h3>
                <p>
                    Le développeur travaille aussi avec une équipe.
                    Il échange avec les autres membres du projet.
                    Il partage son code et ses informations.
                    Il participe aux différentes étapes du projet.
                    La collaboration est importante pour réussir le projet.
                </p>
            </section>
        </main>
    </article>
```

### 1.4. Tester la page

#### Étape 8 — Ouvrir la page

Enregistrez `page-detail-v1.html` et ouvrez-le dans votre navigateur.

**Résultat attendu :**

La page affiche l'article de blog complet, structuré sémantiquement, avec ses titres, textes, images et listes.

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail-v1/page-detail-v1.html' | relative_url}}"
    height="700"
    title="Résultat final de la page détaille d’un article">
</iframe>


## 3. Bilan

**Vous avez réalisé :** la structure complète d'une page d'article de blog.

**Vous savez maintenant :** utiliser et combiner l'ensemble des balises HTML étudiées pour construire un document complet, riche et sémantique.
