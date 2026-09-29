---
title: "Projet de synthèse — Harmonisation du Blog"
layout: tuto
slug: "synthese-harmonisation-blog"
permalink: /tutos/synthese-harmonisation-blog/
tuto_id: "T.122.24.8"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 8

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog - Accueil</title>

      <link rel="stylesheet" href="css/global.css">
      <link rel="stylesheet" href="css/layout.css">
      <link rel="stylesheet" href="css/components.css">
  </head>
  <body>

      <header class="en-tete-site">

          <nav class="barre-navigation">

              <a href="public-index.html" class="logo">
                  <span class="logo-sombre">Mon</span>
                  <span class="logo-couleur">Blog.</span>
              </a>

              <ul class="liens-navigation">
                  <li><a href="public-index.html">Accueil</a></li>
                  <li><a href="public-article.html">Article</a></li>
                  <li><a href="public-categorie.html">Catégories</a></li>
              </ul>

              <a href="#" class="bouton-principal">
                  Espace Admin
              </a>

          </nav>

      </header>

      <main class="conteneur-page">

          <header class="entete-page">
              <h1>Derniers articles</h1>
              <p>
                  Découvrez les derniers articles du blog.
              </p>
          </header>

          <section class="liste-cartes">

              <article class="carte-article">
                  <h2 class="titre-carte">
                      Le métier de développeur
                  </h2>

                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>

                  <a href="public-article.html" class="lien-article">
                      Lire l'article
                  </a>
              </article>

              <article class="carte-article">
                  <h2 class="titre-carte">
                      Créer une interface web
                  </h2>

                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les actions disponibles.
                  </p>

                  <a href="public-article.html" class="lien-article">
                      Lire l'article
                  </a>
              </article>

          </section>

      </main>

      <footer class="pied-de-page">
          <p>© 2026 Mon Blog Personnel.</p>
      </footer>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Organiser le CSS du Blog dans trois fichiers communs :

```text
global.css
layout.css
components.css
```

Utiliser ces fichiers sur les pages :

```text
Accueil
Article
Catégories
```

L'objectif est de garder une présentation commune sur tout le Blog.

## 2. Prérequis

Vous savez déjà :

- réutiliser une classe CSS ;
- regrouper des sélecteurs ;
- comprendre la cascade CSS ;
- comprendre l'héritage ;
- utiliser `:hover` et `:focus` ;
- créer des variables CSS ;
- utiliser `:root` et `var()` ;
- utiliser Flexbox ;
- organiser des cartes avec `gap` ;
- utiliser plusieurs propriétés CSS dans un même composant.

## Données de départ

### HTML de la page Accueil

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog - Accueil</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>

    <header class="en-tete-site">

        <nav class="barre-navigation">

            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span>
                <span class="logo-couleur">Blog.</span>
            </a>

            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-article.html">Article</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
            </ul>

            <a href="#" class="bouton-principal">
                Espace Admin
            </a>

        </nav>

    </header>

    <main class="conteneur-page">

        <header class="entete-page">
            <h1>Derniers articles</h1>
            <p>
                Découvrez les derniers articles du blog.
            </p>
        </header>

        <section class="liste-cartes">

            <article class="carte-article">
                <h2 class="titre-carte">
                    Le métier de développeur
                </h2>

                <p>
                    Le développeur crée des applications
                    et construit des solutions web.
                </p>

                <a href="public-article.html" class="lien-article">
                    Lire l'article
                </a>
            </article>

            <article class="carte-article">
                <h2 class="titre-carte">
                    Créer une interface web
                </h2>

                <p>
                    Une interface claire aide l'utilisateur
                    à comprendre les actions disponibles.
                </p>

                <a href="public-article.html" class="lien-article">
                    Lire l'article
                </a>
            </article>

        </section>

    </main>

    <footer class="pied-de-page">
        <p>© 2026 Mon Blog Personnel.</p>
    </footer>

</body>
</html>
```

### Organisation attendue

Créez ce dossier :

```text
css/
├── global.css
├── layout.css
└── components.css
```

Chaque fichier doit avoir un rôle précis.

```text
global.css
    ↓
valeurs communes et styles globaux

layout.css
    ↓
structure générale des pages

components.css
    ↓
composants réutilisables
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Séparer le CSS

Une seule feuille CSS peut devenir difficile à lire lorsque le projet grandit.

On peut séparer les règles par rôle.

Dans ce projet :

```text
global.css
layout.css
components.css
```

Chaque fichier possède une responsabilité claire.

### 1.2. `global.css`

`global.css` contient les valeurs et les règles générales.

Par exemple :

- variables du thème ;
- style général du `body` ;
- comportement général des images ;
- comportement général des liens.

### 1.3. `layout.css`

`layout.css` contient la structure commune des pages.

Par exemple :

- en-tête ;
- navigation ;
- conteneur principal ;
- pied de page.

### 1.4. `components.css`

`components.css` contient les composants réutilisables.

Par exemple :

- bouton ;
- carte ;
- titre de carte ;
- lien d'action ;
- liste de catégories.

### 1.5. Relier plusieurs fichiers CSS

Une page peut charger plusieurs feuilles avec plusieurs balises `<link>`.

```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
```

Les trois fichiers sont donc disponibles sur la page.

### 1.6. Respecter l'ordre

L'ordre utilisé dans ce projet est :

```text
global.css
↓
layout.css
↓
components.css
```

Les règles générales sont chargées avant les règles de structure.

Les composants sont chargés ensuite.

### 1.7. Centraliser les couleurs

Toutes les couleurs du thème sont définies dans `:root`.

Exemple :

```css
:root {
    --couleur-texte: #1f2937;
    --couleur-titre: #111827;
    --couleur-fond: #f9fafb;
    --couleur-surface: #ffffff;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-bordure: #e5e7eb;
}
```

Les autres fichiers utilisent :

```css
var(--couleur-primaire)
```

et non une nouvelle valeur de couleur écrite directement.

### 1.8. Centraliser les espacements

On peut également définir les espaces dans `:root`.

```css
:root {
    --espace-petit: 8px;
    --espace-moyen: 16px;
    --espace-grand: 24px;
}
```

Les composants utilisent ensuite :

```css
padding: var(--espace-grand);
```

### 1.9. Réutiliser les composants

Le même bouton peut être utilisé sur plusieurs pages :

```html
<a href="#" class="bouton-principal">
    Espace Admin
</a>
```

Le même composant peut donc être stylisé une seule fois dans `components.css`.

### 1.10. À retenir

- Un projet peut utiliser plusieurs feuilles CSS.
- Chaque fichier doit avoir un rôle clair.
- `global.css` contient les règles globales.
- `layout.css` contient la structure commune.
- `components.css` contient les composants réutilisables.
- `:root` centralise les valeurs du thème.
- Les pages utilisent les mêmes fichiers CSS.

## Partie 2 — Pratique

### 2.1. Créer `global.css`

#### Étape 1 — Créer le fichier

Créez :

```text
css/global.css
```

#### Étape 2 — Ajouter les variables

Ajoutez :

```css
:root {
    --couleur-texte: #1f2937;
    --couleur-titre: #111827;
    --couleur-fond: #f9fafb;
    --couleur-surface: #ffffff;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-bordure: #e5e7eb;

    --espace-petit: 8px;
    --espace-moyen: 16px;
    --espace-grand: 24px;
}
```

Les valeurs visuelles communes sont maintenant regroupées.

#### Étape 3 — Ajouter les règles globales

Ajoutez :

```css
body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}
```

`global.css` contient maintenant les règles générales.

### 2.2. Créer `layout.css`

#### Étape 1 — Créer le fichier

Créez :

```text
css/layout.css
```

#### Étape 2 — Créer l'en-tête commun

Ajoutez :

```css
.en-tete-site {
    padding: var(--espace-moyen) var(--espace-grand);
    background: var(--couleur-surface);
    border-bottom: 1px solid var(--couleur-bordure);
}
```

#### Étape 3 — Organiser la navigation

Ajoutez :

```css
.barre-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}
```

#### Étape 4 — Organiser les liens de navigation

Ajoutez :

```css
.liens-navigation {
    display: flex;
    gap: var(--espace-grand);
    margin: 0;
    padding: 0;
    list-style: none;
}

.liens-navigation a {
    color: var(--couleur-texte);
}

.liens-navigation a:hover {
    color: var(--couleur-primaire);
}

.liens-navigation a:focus {
    outline: 2px solid var(--couleur-primaire);
    outline-offset: 2px;
}
```

#### Étape 5 — Créer le conteneur principal

Ajoutez :

```css
.conteneur-page {
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 var(--espace-grand);
}
```

#### Étape 6 — Créer l'en-tête de page

Ajoutez :

```css
.entete-page {
    margin-bottom: 40px;
    text-align: center;
}

.entete-page h1 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 40px;
}

.entete-page p {
    margin: 0;
    color: var(--couleur-texte);
}
```

#### Étape 7 — Créer le pied de page

Ajoutez :

```css
.pied-de-page {
    margin-top: 64px;
    padding: var(--espace-grand);
    text-align: center;
    background: var(--couleur-surface);
    border-top: 1px solid var(--couleur-bordure);
}

.pied-de-page p {
    margin: 0;
    color: var(--couleur-texte);
}
```

### 2.3. Créer `components.css`

#### Étape 1 — Créer le fichier

Créez :

```text
css/components.css
```

#### Étape 2 — Créer le logo

Ajoutez :

```css
.logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-titre);
}

.logo-couleur {
    color: var(--couleur-primaire);
}
```

#### Étape 3 — Créer le bouton principal

Ajoutez :

```css
.bouton-principal {
    display: inline-block;
    padding: var(--espace-petit) var(--espace-grand);
    color: var(--couleur-surface);
    background: var(--couleur-primaire);
    border-radius: 8px;
}

.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}

.bouton-principal:focus {
    outline: 2px solid var(--couleur-titre);
    outline-offset: 2px;
}
```

Le même composant pourra être utilisé sur plusieurs pages.

#### Étape 4 — Créer la carte

Ajoutez :

```css
.carte-article {
    flex: 1;
    min-width: 240px;
    padding: var(--espace-grand);
    background: var(--couleur-surface);
    border: 1px solid var(--couleur-bordure);
    border-radius: 16px;
}
```

#### Étape 5 — Créer le titre de carte

Ajoutez :

```css
.titre-carte {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 22px;
}
```

#### Étape 6 — Organiser le texte de la carte

Ajoutez :

```css
.carte-article p {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-texte);
}
```

#### Étape 7 — Créer le lien d'article

Ajoutez :

```css
.lien-article {
    color: var(--couleur-primaire);
    font-weight: 600;
}

.lien-article:hover {
    color: var(--couleur-primaire-hover);
}

.lien-article:focus {
    outline: 2px solid var(--couleur-primaire);
    outline-offset: 2px;
}
```

#### Étape 8 — Organiser la liste des cartes

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    gap: var(--espace-grand);
}
```

La disposition utilise les acquis de l'UA.122.23.

### 2.4. Vérifier les responsabilités des fichiers

Observez les trois fichiers.

`global.css` contient :

```text
variables
body
img
a
```

`layout.css` contient :

```text
en-tête
navigation
conteneur
en-tête de page
pied de page
```

`components.css` contient :

```text
logo
bouton
carte
titre de carte
lien
liste de cartes
```

Chaque fichier possède maintenant un rôle clair.

### 2.5. Préparer la page Article

#### Étape 1 — Créer `public-article.html`

Utilisez :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article - Mon Blog</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>

    <header class="en-tete-site">

        <nav class="barre-navigation">

            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span>
                <span class="logo-couleur">Blog.</span>
            </a>

            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-article.html">Article</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
            </ul>

            <a href="#" class="bouton-principal">
                Espace Admin
            </a>

        </nav>

    </header>

    <main class="conteneur-page">

        <header class="entete-page">
            <h1>Le métier de développeur</h1>
            <p>
                Comprendre le rôle du développeur web.
            </p>
        </header>

        <article class="carte-article">

            <h2 class="titre-carte">
                Le rôle du développeur
            </h2>

            <p>
                Le développeur transforme un besoin
                en solution informatique.
            </p>

            <p>
                Il écrit le code, teste l'application
                et corrige les erreurs.
            </p>

            <a href="public-index.html" class="lien-article">
                Retour aux articles
            </a>

        </article>

    </main>

    <footer class="pied-de-page">
        <p>© 2026 Mon Blog Personnel.</p>
    </footer>

</body>
</html>
```

La page utilise exactement les mêmes trois fichiers CSS.

### 2.6. Préparer la page Catégories

#### Étape 1 — Créer `public-categorie.html`

Utilisez :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catégories - Mon Blog</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>

    <header class="en-tete-site">

        <nav class="barre-navigation">

            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span>
                <span class="logo-couleur">Blog.</span>
            </a>

            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-article.html">Article</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
            </ul>

            <a href="#" class="bouton-principal">
                Espace Admin
            </a>

        </nav>

    </header>

    <main class="conteneur-page">

        <header class="entete-page">
            <h1>Catégories</h1>
            <p>
                Choisissez un thème pour découvrir les articles.
            </p>
        </header>

        <section class="liste-cartes">

            <article class="carte-article">
                <h2 class="titre-carte">Développement</h2>
                <p>
                    Articles sur la création d'applications web.
                </p>
                <a href="#" class="lien-article">
                    Voir les articles
                </a>
            </article>

            <article class="carte-article">
                <h2 class="titre-carte">Design UI/UX</h2>
                <p>
                    Articles sur les interfaces et l'expérience utilisateur.
                </p>
                <a href="#" class="lien-article">
                    Voir les articles
                </a>
            </article>

            <article class="carte-article">
                <h2 class="titre-carte">Productivité</h2>
                <p>
                    Articles sur l'organisation du travail.
                </p>
                <a href="#" class="lien-article">
                    Voir les articles
                </a>
            </article>

        </section>

    </main>

    <footer class="pied-de-page">
        <p>© 2026 Mon Blog Personnel.</p>
    </footer>

</body>
</html>
```

La page utilise les mêmes classes et les mêmes fichiers.

### 2.7. Vérifier la réutilisation

Ouvrez :

```text
public-index.html
public-article.html
public-categorie.html
```

Vérifiez les éléments communs :

```text
.logo
.en-tete-site
.barre-navigation
.liens-navigation
.bouton-principal
.conteneur-page
.entete-page
.pied-de-page
```

Le style doit rester cohérent sur les trois pages.

### 2.8. Modifier une variable commune

#### Étape 1 — Modifier la couleur primaire

Dans `global.css`, changez uniquement :

```css
--couleur-primaire: #2673e8;
```

par :

```css
--couleur-primaire: #1c5bba;
```

Rechargez les trois pages.

Observez les éléments concernés.

La modification doit apparaître partout où :

```css
var(--couleur-primaire)
```

est utilisé.

### 2.9. Modifier un espacement commun

#### Étape 1 — Modifier la valeur

Dans `global.css`, changez :

```css
--espace-grand: 24px;
```

par :

```css
--espace-grand: 32px;
```

Observez les différentes zones qui utilisent cette variable.

Une seule modification permet de modifier plusieurs composants.

### 2.10. Vérifier la cascade des fichiers

Les pages chargent :

```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
```

Vérifiez que les fichiers sont bien liés.

Vérifiez ensuite les règles dans chaque fichier.

Le CSS doit rester compréhensible.

### 2.11. Vérifier les états

Testez le bouton principal avec la souris.

Testez ensuite avec la touche `Tab`.

Faites la même vérification sur les liens de navigation.

Les états `:hover` et `:focus` doivent rester cohérents sur les différentes pages.

### 2.12. Vérifier les variables

Cherchez les valeurs de couleur dans les fichiers.

Les couleurs du thème doivent être définies dans :

```text
global.css
```

Les autres fichiers doivent utiliser :

```css
var(--nom-de-variable)
```

Le but est d'éviter de recopier les couleurs dans les composants.

### 2.13. Vérifier l'organisation finale

Votre projet doit maintenant avoir :

```text
blog/
├── public-index.html
├── public-article.html
├── public-categorie.html
└── css/
    ├── global.css
    ├── layout.css
    └── components.css
```

Les trois pages utilisent la même base CSS.

Les valeurs du thème sont centralisées.

Les composants communs sont réutilisés.

**Travail à faire :**

À partir des pages fournies :

- créez `global.css` ;
- créez `layout.css` ;
- créez `components.css` ;
- placez les variables dans `:root` de `global.css` ;
- placez les règles globales dans `global.css` ;
- placez la structure commune dans `layout.css` ;
- placez les composants réutilisables dans `components.css` ;
- reliez les trois fichiers avec trois balises `<link>` ;
- utilisez les trois fichiers sur les pages Accueil, Article et Catégories ;
- réutilisez les mêmes classes pour les éléments communs ;
- utilisez les variables CSS pour les couleurs et les espacements communs ;
- testez `:hover` et `:focus` ;
- modifiez une variable et vérifiez sa propagation sur plusieurs pages.

Ne créez pas de quatrième fichier CSS pour ce projet.

Ne recopiez pas les mêmes règles communes dans plusieurs fichiers.

Ne placez pas les couleurs du thème directement dans les composants.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- l'organisation des fichiers ;
- le rôle de chaque fichier CSS ;
- le code de `global.css` ;
- le code de `layout.css` ;
- le code de `components.css` ;
- les liens vers les trois feuilles CSS ;
- les vérifications réalisées sur les trois pages.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-24-8-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le Blog contient trois pages utilisant les mêmes feuilles CSS.

L'organisation respecte :

```text
global.css
    ↓
layout.css
    ↓
components.css
```

Les variables du thème sont centralisées dans `:root`.

Les composants communs sont réutilisés sur plusieurs pages.

Une modification d'une variable commune se répercute correctement sur les éléments concernés.

Les états `:hover` et `:focus` restent cohérents.

Aucune couleur du thème n'est écrite directement dans les composants.

## Bilan

**Vous avez réalisé :**

Un Blog composé de plusieurs pages utilisant une organisation CSS commune.

Vous avez séparé :

```text
global.css
layout.css
components.css
```

Vous avez aussi centralisé les valeurs visuelles dans `:root`.

**Vous savez maintenant :**

- organiser une feuille CSS en plusieurs fichiers ;
- partager une même base CSS entre plusieurs pages ;
- réutiliser des composants ;
- centraliser les couleurs et les espacements ;
- distinguer les règles globales, la structure et les composants ;
- maintenir une présentation cohérente sur plusieurs pages.

## Glossaire

- **`global.css`** : fichier qui contient les variables et les règles générales.
- **`layout.css`** : fichier qui contient la structure commune des pages.
- **`components.css`** : fichier qui contient les composants réutilisables.
- **Variable CSS** : nom associé à une valeur CSS réutilisable.
- **`:root`** : élément racine utilisé pour centraliser les variables communes.
- **Composant** : élément d'interface réutilisable.
- **Style commun** : règle utilisée par plusieurs éléments ou plusieurs pages.
- **Style spécifique** : règle utilisée pour un besoin particulier.