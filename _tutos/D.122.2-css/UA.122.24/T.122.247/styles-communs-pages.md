---
title: "Construire des styles communs aux pages"
layout: tuto
slug: "styles-communs-pages"
permalink: /tutos/styles-communs-pages/
tuto_id: "T.122.247"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 7
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Accueil - Mon Blog</title>
      <link rel="stylesheet" href="css/style.css">
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
                  <li><a href="public-article.html">Articles</a></li>
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

          <section class="liste-articles">

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

          <p>
              © 2026 Mon Blog Personnel.
          </p>

      </footer>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à utiliser une même feuille CSS pour garder un style commun sur plusieurs pages d'un site.

## 2. Prérequis

Vous savez déjà :

- créer et réutiliser une classe CSS ;
- regrouper des sélecteurs ;
- comprendre la cascade CSS ;
- comprendre l’héritage ;
- utiliser `:hover` et `:focus` ;
- créer des variables CSS avec `:root` ;
- utiliser `var()` ;
- utiliser Flexbox.

## Données de départ

### HTML de la page Accueil

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil - Mon Blog</title>
    <link rel="stylesheet" href="css/style.css">
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
                <li><a href="public-article.html">Articles</a></li>
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

        <section class="liste-articles">

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

        <p>
            © 2026 Mon Blog Personnel.
        </p>

    </footer>

</body>
</html>
```

### HTML de la page Article

La page Article utilise la même feuille CSS :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article - Mon Blog</title>
    <link rel="stylesheet" href="css/style.css">
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
                <li><a href="public-article.html">Articles</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
            </ul>

            <a href="#" class="bouton-principal">
                Espace Admin
            </a>

        </nav>

    </header>

    <main class="conteneur-page">

        <article class="article-detail">

            <h1 class="titre-page">
                Le métier de développeur
            </h1>

            <p>
                Le développeur crée des applications
                et transforme un besoin en solution.
            </p>

            <a href="public-index.html" class="lien-article">
                Retour aux articles
            </a>

        </article>

    </main>

    <footer class="pied-de-page">

        <p>
            © 2026 Mon Blog Personnel.
        </p>

    </footer>

</body>
</html>
```

### HTML de la page Catégories

La page Catégories utilise également la même feuille CSS :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catégories - Mon Blog</title>
    <link rel="stylesheet" href="css/style.css">
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
                <li><a href="public-article.html">Articles</a></li>
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
                Parcourez les thèmes du blog.
            </p>
        </header>

        <section class="liste-categories">

            <a href="#" class="bouton-secondaire">
                Développement
            </a>

            <a href="#" class="bouton-secondaire">
                Design UI/UX
            </a>

            <a href="#" class="bouton-secondaire">
                Productivité
            </a>

        </section>

    </main>

    <footer class="pied-de-page">

        <p>
            © 2026 Mon Blog Personnel.
        </p>

    </footer>

</body>
</html>
```

### CSS

Le fichier commun est :

```text
css/style.css
```

Il est vide au départ.

```css

```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Utiliser une même feuille CSS

Plusieurs pages d'un même site peuvent utiliser la même feuille CSS.

Chaque page contient :

```html
<link rel="stylesheet" href="css/style.css">
```

La feuille `style.css` contient les règles communes.

Les pages utilisent donc les mêmes styles.

### 1.2. Partager les composants

Le menu utilise :

```text
en-tete-site
barre-navigation
logo
liens-navigation
bouton-principal
```

Ces classes peuvent être utilisées sur plusieurs pages.

La même règle CSS est alors réutilisée.

### 1.3. Partager les couleurs

Les valeurs du thème restent centralisées dans `:root`.

Exemple :

```css
:root {
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-bordure: #e5e7eb;
}
```

Les différentes pages utilisent les mêmes variables.

### 1.4. Partager les composants

Une carte peut utiliser :

```html
<article class="carte-article">
```

Un bouton peut utiliser :

```html
<a href="#" class="bouton-principal">
```

Le composant garde le même style sur chaque page.

### 1.5. Distinguer style commun et contenu spécifique

Les pages n'ont pas besoin d'avoir le même contenu.

Elles peuvent utiliser les mêmes classes pour les éléments communs.

Par exemple :

```text
Page Accueil
    en-tête
    bouton
    carte

Page Article
    en-tête
    bouton
    article

Page Catégories
    en-tête
    bouton
    catégories
```

La structure du contenu change.

Les styles communs restent réutilisables.

### 1.6. Ajouter une règle spécifique

Une page peut avoir un besoin particulier.

On peut créer une classe spécifique :

```css
.article-detail {
    padding: 40px;
}
```

Cette règle peut être utilisée uniquement par la page Article.

Les règles communes restent disponibles.

### 1.7. À retenir

- Plusieurs pages peuvent utiliser une même feuille CSS.
- Les classes communes permettent de partager un même style.
- Les variables CSS permettent de partager les valeurs visuelles.
- Le contenu peut être différent d'une page à l'autre.
- Une page peut aussi avoir des styles spécifiques.
- La feuille commune permet d'éviter de recopier les mêmes règles dans plusieurs fichiers.

## Partie 2 — Pratique

### 2.1. Créer les variables communes

#### Étape 1 — Ajouter `:root`

Dans `css/style.css`, ajoutez :

```css
:root {
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-bordure: #e5e7eb;
    --espace-petit: 8px;
    --espace-moyen: 16px;
    --espace-grand: 24px;
}
```

Ces valeurs sont disponibles pour toutes les pages.

### 2.2. Créer l'en-tête commun

#### Étape 1 — Styliser l'en-tête

Ajoutez :

```css
.en-tete-site {
    padding: var(--espace-moyen) var(--espace-grand);
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}
```

#### Étape 2 — Organiser la navigation

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

Le même style fonctionne sur les trois pages.

### 2.3. Créer le logo commun

#### Étape 1 — Ajouter les styles

Ajoutez :

```css
.logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-texte);
}

.logo-couleur {
    color: var(--couleur-primaire);
}
```

Le logo garde maintenant le même style.

### 2.4. Créer la navigation commune

#### Étape 1 — Ajouter le style des liens

Ajoutez :

```css
.liens-navigation {
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.liens-navigation a {
    color: var(--couleur-texte);
    text-decoration: none;
}

.liens-navigation a:hover {
    color: var(--couleur-primaire);
}
```

Cette navigation peut être utilisée sur les trois pages.

### 2.5. Créer le bouton commun

#### Étape 1 — Ajouter la règle

Ajoutez :

```css
.bouton-principal {
    display: inline-block;
    padding: var(--espace-petit) var(--espace-grand);
    color: white;
    background: var(--couleur-primaire);
    border-radius: 8px;
    text-decoration: none;
}
```

#### Étape 2 — Ajouter l'état `:hover`

Ajoutez :

```css
.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}
```

Le même bouton possède maintenant le même comportement sur les pages.

### 2.6. Créer une zone de page commune

#### Étape 1 — Ajouter le conteneur

Ajoutez :

```css
.conteneur-page {
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 var(--espace-grand);
}
```

Les trois pages utilisent maintenant une même largeur principale.

### 2.7. Créer un style commun pour les titres

#### Étape 1 — Ajouter les règles

Ajoutez :

```css
.titre-page,
.entete-page h1 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-texte);
}
```

Le même style est appliqué à deux types de titres.

### 2.8. Réutiliser les cartes

#### Étape 1 — Créer le style de la carte

Ajoutez :

```css
.carte-article {
    padding: var(--espace-grand);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 12px;
}
```

#### Étape 2 — Organiser le contenu

Ajoutez :

```css
.titre-carte {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-texte);
}

.carte-article p {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-texte);
}
```

La carte peut maintenant être réutilisée sur différentes pages.

### 2.9. Créer le lien commun

#### Étape 1 — Ajouter le style

Ajoutez :

```css
.lien-article {
    color: var(--couleur-primaire);
    text-decoration: none;
}

.lien-article:hover {
    color: var(--couleur-primaire-hover);
}
```

Les pages utilisent la même apparence pour les liens d'action.

### 2.10. Créer le pied de page commun

#### Étape 1 — Ajouter la règle

Ajoutez :

```css
.pied-de-page {
    margin-top: 64px;
    padding: var(--espace-grand);
    text-align: center;
    color: var(--couleur-texte);
    background: white;
    border-top: 1px solid var(--couleur-bordure);
}
```

Le pied de page possède maintenant un style commun.

### 2.11. Vérifier les trois pages

Ouvrez successivement :

```text
public-index.html
public-article.html
public-categorie.html
```

Vérifiez que les trois pages utilisent :

```html
<link rel="stylesheet" href="css/style.css">
```

Vérifiez aussi que :

- le menu utilise le même style ;
- le logo utilise le même style ;
- le bouton principal utilise le même style ;
- les couleurs utilisent les mêmes variables ;
- le pied de page utilise le même style.

### 2.12. Ajouter un style spécifique

La page Article peut avoir un besoin particulier.

Ajoutez :

```css
.article-detail {
    max-width: 760px;
    margin: 0 auto;
    padding: var(--espace-grand);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 12px;
}
```

Cette classe peut être utilisée uniquement sur la page Article.

Les règles communes restent disponibles.

### 2.13. Modifier une valeur commune

#### Étape 1 — Modifier la couleur principale

Dans `:root`, changez :

```css
--couleur-primaire: #2673e8;
```

par :

```css
--couleur-primaire: #1c5bba;
```

Rechargez les trois pages.

Observez les éléments qui utilisent cette variable.

La modification est appliquée aux trois pages.

### 2.14. Observer le bénéfice

Sans feuille commune, le même style devrait être copié dans plusieurs fichiers.

Avec :

```html
<link rel="stylesheet" href="css/style.css">
```

les trois pages utilisent le même CSS.

Le principe devient :

```text
                css/style.css
                     ↓
        ┌────────────┼────────────┐
        ↓            ↓            ↓
public-index   public-article   public-categorie
```

Une modification commune peut donc être faite à un seul endroit.

**Travail à faire :**

À partir des trois pages fournies :

- utilisez la même feuille `css/style.css` ;
- créez les variables communes dans `:root` ;
- créez les styles communs de l'en-tête ;
- créez le style commun de la navigation ;
- créez le style commun du logo ;
- créez le style commun du bouton ;
- créez le style commun du pied de page ;
- créez au moins un composant réutilisé sur plusieurs pages ;
- ajoutez au moins un style spécifique à une seule page ;
- modifiez une variable dans `:root` ;
- vérifiez que la modification apparaît sur les différentes pages.

Vous devez conserver une distinction claire entre :

```text
styles communs
```

et :

```text
styles spécifiques
```

Ne séparez pas encore `style.css` en plusieurs fichiers.

L'organisation en `global.css`, `layout.css` et `components.css` sera réalisée dans le projet de synthèse suivant.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-247-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les trois pages utilisent la même feuille CSS.

Les composants communs présentent le même style sur les différentes pages.

Les valeurs visuelles communes utilisent les variables CSS.

Une modification d'une variable commune se répercute sur les pages concernées.

Les styles spécifiques restent limités à la page qui en a besoin.

## Bilan

**Vous avez appris :**

- à partager une feuille CSS entre plusieurs pages ;
- à réutiliser les mêmes classes sur plusieurs pages ;
- à distinguer les styles communs et les styles spécifiques ;
- à utiliser les variables CSS dans plusieurs pages ;
- à construire des composants visuels communs.

**Vous avez réalisé :**

Trois pages du Blog utilisant une même feuille CSS et des composants réutilisables.

## Glossaire

- **Feuille CSS commune** : fichier CSS utilisé par plusieurs pages.
- **Style commun** : règle CSS utilisée par plusieurs pages ou plusieurs composants.
- **Style spécifique** : règle utilisée pour un besoin particulier d'une page.
- **Composant réutilisable** : élément d'interface pouvant être utilisé plusieurs fois.
- **Thème** : ensemble des valeurs visuelles communes d'une interface.
- **Variable CSS** : nom associé à une valeur CSS réutilisable.