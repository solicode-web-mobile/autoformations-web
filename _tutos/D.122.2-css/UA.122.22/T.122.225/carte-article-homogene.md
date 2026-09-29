---
title: "Construire une carte d'article homogène"
layout: tuto
slug: "carte-article-homogene"
permalink: /tutos/carte-article-homogene/
tuto_id: "T.122.225"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 5
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes d'articles</title>
  </head>
  <body>

      <article class="carte-article">

          <div class="carte-image">
              <img
                  src="images/article-example.png"
                  alt="Écran montrant du code informatique">
          </div>

          <div class="carte-contenu">
              <h2>Le métier de développeur</h2>

              <p>
                  Le développeur crée des applications
                  et transforme un besoin en solution.
              </p>

              <a href="#">Lire l'article</a>
          </div>

      </article>

      <article class="carte-article">

          <div class="carte-image">
              <img
                  src="images/article-example.png"
                  alt="Interface utilisateur">
          </div>

          <div class="carte-contenu">
              <h2>Créer une interface web</h2>

              <p>
                  Une interface claire aide l'utilisateur
                  à comprendre les actions disponibles.
              </p>

              <a href="#">Lire l'article</a>
          </div>

      </article>

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

Construire une carte d’article homogène en réunissant les règles de dimensionnement, d’espace et de bordure.

## 2. Prérequis

Vous savez déjà :

- utiliser une classe CSS ;
- utiliser `width` et `max-width` ;
- utiliser `min-width` et `min-height` ;
- utiliser `box-sizing` ;
- utiliser `padding` et `margin` ;
- utiliser `border` et `border-radius` ;
- utiliser `overflow: hidden`.

## Données de départ

### HTML

```html
<article class="carte-article">

    <div class="carte-image">
        <img
            src="images/article-example.png"
            alt="Écran montrant du code informatique">
    </div>

    <div class="carte-contenu">
        <h2>Le métier de développeur</h2>

        <p>
            Le développeur crée des applications
            et transforme un besoin en solution.
        </p>

        <a href="#">Lire l'article</a>
    </div>

</article>

<article class="carte-article">

    <div class="carte-image">
        <img
            src="images/article-example.png"
            alt="Interface utilisateur">
    </div>

    <div class="carte-contenu">
        <h2>Créer une interface web</h2>

        <p>
            Une interface claire aide l'utilisateur
            à comprendre les actions disponibles.
        </p>

        <a href="#">Lire l'article</a>
    </div>

</article>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Réunir plusieurs règles dans un composant

Une carte utilise plusieurs propriétés CSS.

On peut réunir ces propriétés dans une seule classe.

```css
.carte-article {
    box-sizing: border-box;
    min-width: 280px;
    max-width: 400px;
    min-height: 300px;
    padding: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
}
```

Cette classe définit les principales contraintes de la carte.

### 1.2. Contrôler le dimensionnement

`box-sizing: border-box` permet d'inclure la bordure et le `padding` dans la largeur et la hauteur définies.

La carte utilise aussi :

```css
min-width: 280px;
max-width: 400px;
min-height: 300px;
```

Ces propriétés permettent de garder des dimensions cohérentes.

### 1.3. Organiser le contenu

Le contenu de la carte possède son propre espace intérieur.

```css
.carte-contenu {
    padding: 20px;
}
```

Le titre, le texte et le lien ne touchent donc pas les bords de la carte.

### 1.4. Organiser les espaces entre les éléments

Les marges permettent de séparer le titre, le texte et le lien.

```css
.carte-contenu h2 {
    margin: 0 0 12px;
}

.carte-contenu p {
    margin: 0 0 16px;
}
```

### 1.5. À retenir

- Une classe peut réunir plusieurs règles CSS.
- `box-sizing: border-box` aide à contrôler la taille réelle du composant.
- `min-width`, `max-width` et `min-height` contrôlent les dimensions.
- `padding` organise l’espace intérieur.
- `margin` sépare les éléments.
- `border-radius` et `overflow: hidden` permettent de garder une forme propre.

## Partie 2 — Pratique

### 2.1. Construire la base de la carte

#### Étape 1 — Définir le dimensionnement

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    min-width: 280px;
    max-width: 400px;
    min-height: 300px;
}
```

La carte possède maintenant des dimensions contrôlées.

#### Étape 2 — Ajouter la présentation de la carte

Complétez la règle :

```css
.carte-article {
    box-sizing: border-box;
    min-width: 280px;
    max-width: 400px;
    min-height: 300px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
}
```

La carte possède maintenant une bordure et des coins arrondis.

### 2.2. Mettre en forme l'image

#### Étape 1 — Dimensionner l'image

Ajoutez :

```css
.carte-image img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
}
```

L'image occupe toute la largeur disponible.

Sa hauteur est fixée à `220px`.

`object-fit: cover` permet de conserver une image remplissant cette zone.

### 2.3. Organiser le contenu

#### Étape 1 — Ajouter l'espace intérieur

Ajoutez :

```css
.carte-contenu {
    padding: 20px;
}
```

Le contenu ne touche plus les bords de la carte.

#### Étape 2 — Organiser le titre

Ajoutez :

```css
.carte-contenu h2 {
    margin: 0 0 12px;
}
```

Un espace de `12px` est créé sous le titre.

#### Étape 3 — Organiser le texte

Ajoutez :

```css
.carte-contenu p {
    margin: 0 0 16px;
}
```

Un espace de `16px` est créé sous le texte.

### 2.4. Mettre en forme le lien

#### Étape 1 — Ajouter une couleur au lien

Ajoutez :

```css
.carte-contenu a {
    color: #2673e8;
}
```

Le lien devient facilement identifiable.

### 2.5. Vérifier les deux cartes

Les deux éléments HTML utilisent la même classe :

```html
class="carte-article"
```

La même règle CSS s'applique donc aux deux cartes.

Vérifiez :

- la même largeur maximale ;
- la même largeur minimale ;
- la même hauteur minimale ;
- le même espace intérieur ;
- la même bordure ;
- les mêmes coins arrondis ;
- la même présentation de l'image.

Les contenus peuvent être différents.

La structure et les règles de présentation restent communes.

**Travail à faire :**

Construisez deux cartes d'articles homogènes.

Les deux cartes doivent utiliser la classe :

```text
carte-article
```

Chaque carte doit avoir :

```text
largeur minimale : 280px
largeur maximale : 400px
hauteur minimale : 300px
bordure
coins arrondis
image
espace intérieur
titre
texte
lien
```

Utilisez une seule série de règles CSS pour les deux cartes.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-225-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les deux cartes utilisent la même classe CSS et présentent une structure visuelle homogène.

Leurs dimensions, leurs espaces, leurs bordures et leurs coins sont cohérents.

## Bilan

**Vous avez appris :**

- à réunir plusieurs règles CSS dans un composant ;
- à contrôler les dimensions d'une carte ;
- à organiser son espace intérieur ;
- à conserver une présentation homogène.

**Vous avez réalisé :**

Deux cartes d'articles utilisant le même composant CSS.

## Glossaire

- **Composant** : élément d'interface réutilisable.
- **Homogène** : qui garde la même présentation.
- **`box-sizing`** : propriété qui contrôle le calcul de la taille d'un élément.
- **`border-box`** : valeur qui inclut la bordure et le `padding` dans la taille définie.
- **`overflow`** : propriété qui contrôle le contenu qui dépasse.