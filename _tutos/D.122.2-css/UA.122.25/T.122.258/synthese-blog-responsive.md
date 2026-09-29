---
title: "Projet de synthèse — Blog responsive"
layout: tuto
slug: "synthese-blog-responsive"
permalink: /tutos/synthese-blog-responsive/
tuto_id: "T.122.258"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 8
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog Personnel</title>

      <link rel="stylesheet" href="css/global.css">
      <link rel="stylesheet" href="css/layout.css">
      <link rel="stylesheet" href="css/components.css">
      <link rel="stylesheet" href="css/pages.css">
  </head>
  <body>

      <header class="en-tete-site">

          <nav class="barre-navigation">

              <a href="public-index.html" class="logo">
                  <span class="logo-sombre">Mon</span>
                  <span class="logo-couleur">Blog.</span>
              </a>

              <ul class="liens-navigation">
                  <li>
                      <a href="public-index.html">Accueil</a>
                  </li>
                  <li>
                      <a href="public-categorie.html">Catégories</a>
                  </li>
                  <li>
                      <a href="public-apropos.html">À propos</a>
                  </li>
              </ul>

              <a href="admin-login.html" class="bouton-principal">
                  Espace Admin
              </a>

          </nav>

      </header>

      <main>

          <section class="banniere-accueil">

              <h1>
                  Mon Blog Personnel :
                  <span>Développer &amp; Partager</span>
              </h1>

              <p>
                  Découvrez mes articles sur le développement web
                  et les bonnes pratiques de programmation.
              </p>

              <div class="actions-banniere">

                  <a href="#articles" class="bouton-principal">
                      Lire les articles
                  </a>

                  <a href="public-apropos.html" class="bouton-secondaire">
                      À propos de moi
                  </a>

              </div>

          </section>

          <section class="section-articles" id="articles">

              <div class="conteneur-articles">

                  <div class="entete-liste-articles">

                      <div>
                          <h2>Dernières publications</h2>
                          <p>
                              Découvrez les derniers articles du blog.
                          </p>
                      </div>

                      <a href="public-categorie.html" class="lien-voir-tout">
                          Explorer tout
                      </a>

                  </div>

                  <div class="grille-articles">

                      <article class="carte-article">

                          <div class="carte-image">
                              <img
                                  src="images/article-example.png"
                                  alt="Code informatique affiché sur un écran">
                          </div>

                          <span class="etiquette-categorie bleu">
                              Développement
                          </span>

                          <div class="carte-contenu">

                              <h3>
                                  Comment bien débuter en développement web ?
                              </h3>

                              <p>
                                  Découvrez les bases utiles pour commencer
                                  un projet web.
                              </p>

                              <div class="carte-meta">
                                  <span>14 Fév 2026</span>
                                  <span>5 min</span>
                              </div>

                          </div>

                      </article>

                      <article class="carte-article">

                          <div class="carte-image">
                              <img
                                  src="images/article-example.png"
                                  alt="Interface web moderne">
                          </div>

                          <span class="etiquette-categorie rose">
                              UI / UX
                          </span>

                          <div class="carte-contenu">

                              <h3>
                                  Créer une interface simple et claire
                              </h3>

                              <p>
                                  Quelques règles simples pour améliorer
                                  la lecture d'une page web.
                              </p>

                              <div class="carte-meta">
                                  <span>10 Fév 2026</span>
                                  <span>3 min</span>
                              </div>

                          </div>

                      </article>

                      <article class="carte-article">

                          <div class="carte-image">
                              <img
                                  src="images/article-example.png"
                                  alt="Équipe de développeurs">
                          </div>

                          <span class="etiquette-categorie vert">
                              Management
                          </span>

                          <div class="carte-contenu">

                              <h3>
                                  Organiser le travail d'une équipe web
                              </h3>

                              <p>
                                  Découvrez quelques pratiques simples
                                  pour organiser un projet.
                              </p>

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

      <footer class="pied-de-page">

          <div class="conteneur-pied-de-page">

              <div class="colonne-pied-de-page">
                  <h2>Mon Blog</h2>
                  <p>
                      Partager des connaissances et des découvertes
                      sur le développement web.
                  </p>
              </div>

              <div class="colonne-pied-de-page">
                  <h2>Navigation</h2>

                  <ul>
                      <li>
                          <a href="public-index.html">Accueil</a>
                      </li>
                      <li>
                          <a href="public-categorie.html">Catégories</a>
                      </li>
                      <li>
                          <a href="public-apropos.html">À propos</a>
                      </li>
                  </ul>
              </div>

              <div class="colonne-pied-de-page">
                  <h2>Contact</h2>
                  <p>
                      Retrouvez les nouveaux articles du blog.
                  </p>
              </div>

          </div>

          <div class="bas-pied-de-page">
              <p>&copy; 2026 Mon Blog Personnel.</p>
          </div>

      </footer>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Adapter la page d'accueil du Blog aux petits et aux grands écrans.

Vous allez construire :

- une version mobile ;
- une version bureau ;
- des cartes adaptées à l'espace disponible ;
- un conteneur qui change de largeur ;
- des espaces adaptés à la largeur de l'écran.

## 2. Prérequis

Vous savez déjà :

- comprendre le viewport ;
- utiliser des dimensions relatives ;
- utiliser `%`, `rem` et `vw` ;
- utiliser `max-width` ;
- utiliser Flexbox ;
- utiliser `flex-direction` ;
- utiliser `flex-wrap` ;
- utiliser `gap` ;
- utiliser `flex` ;
- créer une Media Query ;
- utiliser `min-width` et `max-width` ;
- adapter un conteneur ;
- adapter les cartes ;
- utiliser une approche mobile-first ;
- utiliser des variables CSS ;
- utiliser plusieurs fichiers CSS.

## Données de départ

### HTML

Le HTML de départ est celui fourni dans `data_html`.

La page contient :

```text
En-tête
    ↓
Bannière
    ↓
Liste des articles
    ↓
Trois cartes
    ↓
Pied de page
```

Le HTML est identique pour les petits et les grands écrans.

### Organisation CSS

Utilisez :

```text
css/
├── global.css
├── layout.css
├── components.css
└── pages.css
```

Les fichiers déjà utilisés dans le Blog sont conservés.

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Une interface doit s'adapter

Un ordinateur et un smartphone ne disposent pas du même espace.

Sur un grand écran, plusieurs cartes peuvent être affichées sur une ligne.

Sur un petit écran, les cartes doivent disposer de plus de largeur.

La page doit donc adapter sa présentation.

### 1.2. Commencer par le mobile

Le projet utilise une approche mobile-first.

La version mobile est définie dans les règles CSS normales.

La version bureau est ajoutée ensuite avec `min-width`.

Le principe est :

```text
styles de base
    ↓
mobile

@media (min-width: 800px)
    ↓
bureau
```

### 1.3. Adapter le conteneur

Le conteneur principal utilise une largeur relative.

Exemple :

```css
.conteneur-articles {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
```

Sur un grand écran, `max-width` limite la largeur.

Sur un petit écran, le conteneur utilise l'espace disponible.

### 1.4. Adapter les cartes

Les cartes utilisent Flexbox.

Exemple :

```css
.grille-articles {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
```

La version mobile commence donc par une colonne.

Sur un écran plus large :

```css
@media (min-width: 800px) {
    .grille-articles {
        flex-direction: row;
    }
}
```

Les cartes sont alors placées horizontalement.

### 1.5. Adapter la bannière

Sur un petit écran, le titre doit utiliser une taille raisonnable.

Sur un écran plus large, le titre peut devenir plus grand.

La Media Query permet cette évolution.

### 1.6. Adapter les espacements

Les grands espacements ne sont pas toujours nécessaires sur un petit écran.

On peut utiliser :

```css
padding: 1rem;
```

sur mobile.

Puis :

```css
padding: 2rem;
```

sur un écran plus large.

### 1.7. Utiliser `min-width`

Dans une approche mobile-first :

```css
@media (min-width: 800px) {
    ...
}
```

signifie :

> appliquer les règles lorsque l'espace disponible est suffisamment large.

### 1.8. À retenir

- La version mobile est la base.
- Les écrans plus larges utilisent des règles supplémentaires.
- `min-width` permet de définir ces règles.
- Flexbox organise les cartes.
- `gap` garde un espace régulier.
- `max-width` évite une zone trop large.
- Le HTML reste identique.

## Partie 2 — Pratique

### 2.1. Préparer `global.css`

#### Étape 1 — Centraliser le thème

Dans `global.css`, utilisez :

```css id="z1b0t6"
:root {
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-surface: #ffffff;
    --couleur-titre: #111827;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-bordure: #e5e7eb;

    --espace-petit: 0.5rem;
    --espace-moyen: 1rem;
    --espace-grand: 1.5rem;
    --espace-tres-grand: 3rem;
}
```

#### Étape 2 — Ajouter les règles générales

Ajoutez :

```css id="mcg9lm"
* {
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

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

### 2.2. Préparer `layout.css`

#### Étape 1 — Créer l'en-tête

Ajoutez :

```css id="yz4n45"
.en-tete-site {
    padding: var(--espace-moyen);
    background: var(--couleur-surface);
    border-bottom: 1px solid var(--couleur-bordure);
}
```

#### Étape 2 — Préparer la navigation mobile

Ajoutez :

```css id="3l2jvp"
.barre-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espace-moyen);
    max-width: 1200px;
    margin: 0 auto;
}
```

Sur mobile, les éléments de navigation sont placés dans une colonne.

#### Étape 3 — Organiser les liens

Ajoutez :

```css id="b2v0g6"
.liens-navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--espace-moyen);
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

#### Étape 4 — Préparer le conteneur principal

Ajoutez :

```css id="co4h5h"
.conteneur-articles {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--espace-moyen);
}
```

#### Étape 5 — Préparer le pied de page

Ajoutez :

```css id="g1zp65"
.pied-de-page {
    margin-top: var(--espace-tres-grand);
    padding: var(--espace-grand) var(--espace-moyen);
    background: var(--couleur-surface);
    border-top: 1px solid var(--couleur-bordure);
}

.conteneur-pied-de-page {
    display: flex;
    flex-direction: column;
    gap: var(--espace-grand);
    max-width: 1200px;
    margin: 0 auto;
}

.colonne-pied-de-page {
    flex: 1;
}

.colonne-pied-de-page h2 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-size: 1rem;
}

.colonne-pied-de-page p {
    margin: 0;
}

.colonne-pied-de-page ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.colonne-pied-de-page li {
    margin-bottom: var(--espace-petit);
}

.colonne-pied-de-page a:hover {
    color: var(--couleur-primaire);
}

.bas-pied-de-page {
    max-width: 1200px;
    margin: var(--espace-grand) auto 0;
    padding-top: var(--espace-moyen);
    text-align: center;
    border-top: 1px solid var(--couleur-bordure);
}

.bas-pied-de-page p {
    margin: 0;
    font-size: 0.8rem;
}
```

### 2.3. Préparer `components.css`

#### Étape 1 — Créer le logo

Ajoutez :

```css id="t1fq5w"
.logo {
    font-family: Georgia, serif;
    font-size: 1.4rem;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-titre);
}

.logo-couleur {
    color: var(--couleur-primaire);
}
```

#### Étape 2 — Créer les boutons

Ajoutez :

```css id="z3u8y8"
.bouton-principal,
.bouton-secondaire {
    display: inline-block;
    padding: 0.7rem 1rem;
    border-radius: 8px;
}

.bouton-principal {
    color: var(--couleur-surface);
    background: var(--couleur-primaire);
}

.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}

.bouton-principal:focus,
.bouton-secondaire:focus {
    outline: 2px solid var(--couleur-titre);
    outline-offset: 2px;
}

.bouton-secondaire {
    color: var(--couleur-texte);
    background: var(--couleur-surface);
    border: 1px solid var(--couleur-bordure);
}

.bouton-secondaire:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}
```

#### Étape 3 — Créer la carte

Ajoutez :

```css id="4xkfl3"
.carte-article {
    width: 100%;
    padding: var(--espace-grand);
    background: var(--couleur-surface);
    border: 1px solid var(--couleur-bordure);
    border-radius: 16px;
    overflow: hidden;
}
```

#### Étape 4 — Ajouter les éléments de la carte

Ajoutez :

```css id="h5jc5i"
.carte-image {
    margin: calc(var(--espace-grand) * -1);
    margin-bottom: var(--espace-grand);
}

.carte-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.carte-contenu h3 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 1.4rem;
    line-height: 1.3;
}

.carte-contenu p {
    margin: 0 0 var(--espace-moyen);
}

.carte-meta {
    display: flex;
    justify-content: space-between;
    gap: var(--espace-moyen);
    padding-top: var(--espace-moyen);
    color: #6b7280;
    font-size: 0.8rem;
    border-top: 1px solid var(--couleur-bordure);
}

.etiquette-categorie {
    display: inline-block;
    margin-bottom: var(--espace-moyen);
    padding: 0.4rem 0.7rem;
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 700;
}

.etiquette-categorie.bleu {
    color: #1c5bba;
    background: #f0f6ff;
}

.etiquette-categorie.rose {
    color: #db2777;
    background: #fdf2f8;
}

.etiquette-categorie.vert {
    color: #059669;
    background: #ecfdf5;
}
```

### 2.4. Préparer `pages.css`

#### Étape 1 — Préparer la bannière mobile

Ajoutez :

```css id="u0n4r6"
.banniere-accueil {
    padding: 4rem 1rem;
    text-align: center;
    background: var(--couleur-surface);
}

.banniere-accueil h1 {
    max-width: 900px;
    margin: 0 auto;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 2.3rem;
    line-height: 1.15;
}

.banniere-accueil h1 span {
    color: var(--couleur-primaire);
}

.banniere-accueil p {
    max-width: 680px;
    margin: var(--espace-grand) auto 0;
    color: #6b7280;
}

.actions-banniere {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--espace-moyen);
    margin-top: var(--espace-grand);
}
```

#### Étape 2 — Préparer la section des articles

Ajoutez :

```css id="1r49oh"
.section-articles {
    padding: 3rem 0;
}

.entete-liste-articles {
    margin-bottom: 2rem;
}

.entete-liste-articles h2 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 1.8rem;
}

.entete-liste-articles p {
    margin: 0;
    color: #6b7280;
}

.lien-voir-tout {
    display: inline-block;
    margin-top: var(--espace-moyen);
    color: var(--couleur-primaire);
    font-weight: 600;
}

.grille-articles {
    display: flex;
    flex-direction: column;
    gap: var(--espace-grand);
}
```

### 2.5. Construire la version bureau

#### Étape 1 — Adapter l'en-tête

Ajoutez dans `layout.css` :

```css id="zg0m9n"
@media (min-width: 800px) {

    .en-tete-site {
        padding: var(--espace-moyen) var(--espace-grand);
    }

    .barre-navigation {
        flex-direction: row;
    }

    .conteneur-pied-de-page {
        flex-direction: row;
        align-items: flex-start;
    }

}
```

À partir de `800px`, la navigation devient horizontale.

### 2.6. Adapter la bannière

#### Étape 1 — Agrandir les éléments sur grand écran

Dans `pages.css`, ajoutez :

```css id="zvmtx8"
@media (min-width: 800px) {

    .banniere-accueil {
        padding: 6rem 2rem;
    }

    .banniere-accueil h1 {
        font-size: 3.5rem;
    }

    .actions-banniere {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

}
```

Les boutons sont maintenant horizontaux sur grand écran.

### 2.7. Adapter la liste des cartes

#### Étape 1 — Passer les cartes sur une ligne

Ajoutez :

```css id="8c0x9c"
@media (min-width: 800px) {

    .grille-articles {
        flex-direction: row;
        align-items: stretch;
    }

    .carte-article {
        flex: 1;
        min-width: 0;
    }

}
```

Les cartes sont maintenant organisées horizontalement.

Elles partagent l'espace disponible.

### 2.8. Adapter les espaces de la section

#### Étape 1 — Augmenter les espaces sur grand écran

Ajoutez :

```css id="ql3zti"
@media (min-width: 800px) {

    .section-articles {
        padding: 5rem 0;
    }

    .entete-liste-articles {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: var(--espace-grand);
    }

    .lien-voir-tout {
        margin-top: 0;
    }

}
```

La présentation est maintenant plus adaptée à un écran large.

### 2.9. Vérifier les trois zones principales

Testez :

```text
Navigation
↓
Bannière
↓
Cartes
↓
Pied de page
```

Sur un petit écran :

```text
navigation verticale
bannière compacte
boutons verticaux
cartes verticales
pied de page vertical
```

Sur un grand écran :

```text
navigation horizontale
bannière plus large
boutons horizontaux
cartes horizontales
pied de page en colonnes
```

### 2.10. Vérifier le même HTML

Le HTML reste identique.

Aucune classe supplémentaire n'est ajoutée par JavaScript.

La Media Query change uniquement le CSS.

### 2.11. Tester plusieurs tailles

#### Étape 1 — Tester une petite largeur

Testez une fenêtre de moins de `800px`.

Vérifiez :

- la navigation ;
- la bannière ;
- les boutons ;
- les cartes ;
- le pied de page.

#### Étape 2 — Tester une grande largeur

Testez une fenêtre de `800px` ou plus.

Vérifiez :

- la navigation horizontale ;
- la bannière plus grande ;
- les boutons horizontaux ;
- les cartes sur une ligne ;
- le pied de page en colonnes.

### 2.12. Tester les cartes

#### Étape 1 — Ajouter une quatrième carte

Ajoutez une quatrième carte dans le HTML.

Utilisez toujours :

```html id="4fyk9y"
<article class="carte-article">
```

Testez ensuite les deux largeurs d'écran.

Sur mobile, les cartes restent dans une colonne.

Sur grand écran, elles peuvent partager l'espace disponible.

### 2.13. Tester une largeur intermédiaire

Réduisez progressivement la largeur de la fenêtre.

Observez le passage entre :

```text
mobile
```

et :

```text
bureau
```

Le changement est déclenché par :

```css id="qtl6x9"
@media (min-width: 800px)
```

### 2.14. Vérifier le comportement des images

Les images utilisent :

```css id="bsx0jf"
img {
    max-width: 100%;
}
```

et :

```css id="jwb9cd"
.carte-image img {
    width: 100%;
}
```

Elles peuvent donc utiliser la largeur disponible de leur zone.

### 2.15. Vérifier le comportement des textes

Réduisez fortement la fenêtre.

Vérifiez que :

- le titre reste lisible ;
- les paragraphes restent dans la carte ;
- aucun texte ne dépasse ;
- aucun élément important ne sort de la zone visible.

### 2.16. Vérifier les états interactifs

Testez :

```text
bouton principal
lien de navigation
lien "Explorer tout"
```

avec la souris.

Puis utilisez la touche `Tab`.

Vérifiez les états `:hover` et `:focus`.

### 2.17. Vérifier les variables

Toutes les valeurs communes du thème doivent utiliser :

```css
var(--nom)
```

Exemples :

```css id="cdx1w6"
var(--couleur-primaire)
var(--couleur-titre)
var(--couleur-bordure)
var(--espace-moyen)
var(--espace-grand)
```

Les couleurs du thème ne doivent pas être recopiées inutilement dans les composants.

### 2.18. Vérifier les quatre fichiers

Le projet final doit respecter :

```text
global.css
    ↓
valeurs et règles globales

layout.css
    ↓
structure commune

components.css
    ↓
composants

pages.css
    ↓
présentation de la page d'accueil
```

Les règles responsive peuvent être placées dans le fichier correspondant à l'élément qu'elles adaptent.

### 2.19. Vérifier l'ordre des feuilles CSS

Le HTML doit charger :

```html id="azk4w7"
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
```

L'ordre reste volontaire :

```text
global
↓
layout
↓
components
↓
pages
```

### 2.20. Vérifier la version mobile

La version mobile doit fonctionner sans Media Query spécifique.

Les règles de base doivent déjà permettre :

```text
conteneur adapté
cartes verticales
boutons verticaux
navigation verticale
espaces réduits
```

### 2.21. Vérifier la version bureau

La version bureau utilise :

```css id="ugofv6"
@media (min-width: 800px)
```

Elle ajoute :

```text
navigation horizontale
boutons horizontaux
cartes horizontales
pied de page en colonnes
espaces plus importants
titre plus grand
```

### 2.22. Vérifier le résultat final

Vérifiez les points suivants :

```text
✓ meta viewport
✓ dimensions relatives
✓ max-width
✓ rem
✓ Flexbox
✓ flex-wrap
✓ gap
✓ flex
✓ Media Query
✓ min-width
✓ adaptation mobile
✓ adaptation bureau
✓ mêmes HTML
✓ variables CSS
✓ états hover/focus
```

**Travail à faire :**

À partir du HTML fourni, réalisez la page d'accueil responsive du Blog.

Votre réalisation doit :

- fonctionner sur un petit écran ;
- fonctionner sur un grand écran ;
- utiliser une approche mobile-first ;
- utiliser les quatre fichiers CSS ;
- utiliser les variables CSS ;
- utiliser Flexbox ;
- organiser les cartes dans une colonne sur mobile ;
- organiser les cartes horizontalement sur bureau ;
- utiliser `gap` ;
- utiliser `flex` sur grand écran ;
- adapter la navigation ;
- adapter les boutons ;
- adapter la bannière ;
- adapter le conteneur ;
- adapter les espaces ;
- adapter le pied de page ;
- conserver exactement le même HTML entre les tailles d'écran.

Utilisez un breakpoint simple :

```css
@media (min-width: 800px)
```

N'utilisez pas :

- CSS Grid ;
- `clamp()` ;
- container queries ;
- plusieurs breakpoints complexes ;
- animations responsive ;
- JavaScript pour changer la disposition.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- l'organisation des fichiers CSS ;
- le rôle de chaque fichier ;
- les règles responsive utilisées ;
- le code CSS final ;
- les vérifications réalisées sur petit et grand écran ;
- une courte explication de votre choix mobile-first.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-258-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page d'accueil fonctionne sur petit et grand écran.

Sur petit écran :

```text
navigation verticale
bannière compacte
actions verticales
cartes verticales
pied de page vertical
```

Sur grand écran :

```text
navigation horizontale
bannière plus large
actions horizontales
cartes horizontales
pied de page en colonnes
```

Le HTML reste identique.

Les espacements et les dimensions s'adaptent.

Les cartes utilisent correctement l'espace disponible.

Les styles communs utilisent les variables CSS.

L'apprenant sait expliquer la différence entre les styles de base et les règles ajoutées avec `min-width`.

## Bilan

**Vous avez réalisé :**

La page d'accueil responsive du Blog.

La même réalisation fonctionne sur plusieurs tailles d'écran.

**Vous savez maintenant :**

- comprendre l'espace disponible ;
- utiliser des dimensions relatives ;
- créer des Media Queries ;
- adapter un conteneur ;
- adapter des cartes ;
- construire une disposition mobile et bureau ;
- utiliser une approche mobile-first ;
- organiser un CSS responsive ;
- conserver le même HTML pour plusieurs tailles d'écran.

## Glossaire

- **Responsive** : capacité d'une interface à s'adapter aux différentes tailles d'écran.
- **Mobile-first** : approche qui commence par la version mobile.
- **Breakpoint** : largeur à partir de laquelle une nouvelle règle CSS est appliquée.
- **Viewport** : zone visible de la page dans la fenêtre du navigateur.
- **Media Query** : règle CSS qui dépend d'une condition.
- **`min-width`** : condition appliquée à partir d'une largeur donnée.
- **Dimension relative** : dimension qui dépend d'une autre référence.
- **Flexbox** : système CSS qui permet d'organiser des éléments dans un conteneur.