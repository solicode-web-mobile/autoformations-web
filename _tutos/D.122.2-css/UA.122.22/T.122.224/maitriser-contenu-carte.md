---
title: "Maîtriser le contenu dans une carte"
layout: tuto
slug: "maitriser-contenu-carte"
permalink: /tutos/maitriser-contenu-carte/
tuto_id: "T.122.224"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 4
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Carte d'article</title>
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

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à contrôler le contenu qui dépasse les limites d’une carte avec `overflow`.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser une classe CSS ;
- utiliser `width` et `height` ;
- utiliser `min-height` et `max-width` ;
- utiliser `padding` et `margin` ;
- utiliser `border` ;
- utiliser `border-radius` ;
- utiliser `object-fit`.

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
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Le dépassement du contenu

Un élément possède une largeur et une hauteur.

Son contenu peut parfois dépasser ces limites.

Ce contenu est appelé **débordement**.

Par exemple, une image peut dépasser les limites d’une carte.

### 1.2. Contrôler le débordement avec `overflow`

`overflow` contrôle ce qui dépasse les limites d’un élément.

**Exemple :**

```css
.carte-article {
    overflow: hidden;
}
```

La valeur `hidden` masque la partie qui dépasse.

### 1.3. Utiliser `overflow: hidden` avec `border-radius`

Une carte peut avoir des coins arrondis avec `border-radius`.

Une image placée dans la carte peut dépasser les coins arrondis.

`overflow: hidden` permet de couper cette partie.

**Exemple :**

```css
.carte-article {
    border-radius: 12px;
    overflow: hidden;
}
```

L’image reste alors à l’intérieur de la forme de la carte.

### 1.4. À retenir

- `overflow` contrôle le contenu qui dépasse.
- `hidden` masque la partie qui dépasse.
- `overflow: hidden` est utile avec une carte qui possède des coins arrondis.
- La règle agit sur le contenu situé à l’intérieur de l’élément.

## Partie 2 — Pratique

### 2.1. Créer la carte

#### Étape 1 — Définir les dimensions de la carte

Ajoutez :

```css
.carte-article {
    width: 400px;
    max-width: 100%;
    min-height: 300px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
}
```

La carte possède maintenant une largeur maximale de `400px`.

Elle possède aussi des coins arrondis.

### 2.2. Préparer l’image

#### Étape 1 — Donner une taille à l’image

Ajoutez :

```css
.carte-image img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
}
```

L’image prend toute la largeur de la carte.

Elle possède une hauteur de `220px`.

### 2.3. Observer le débordement

#### Étape 1 — Afficher le contenu de la carte

Ajoutez :

```css
.carte-contenu {
    padding: 20px;
}
```

Ajoutez ensuite :

```css
.carte-contenu h2 {
    margin: 0 0 12px;
}

.carte-contenu p {
    margin: 0 0 16px;
}

.carte-contenu a {
    color: #2673e8;
}
```

La carte possède maintenant un contenu visible.

#### Étape 2 — Ajouter `overflow: hidden`

Modifiez la carte :

```css
.carte-article {
    width: 400px;
    max-width: 100%;
    min-height: 300px;
    overflow: hidden;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
}
```

L’image reste maintenant à l’intérieur des coins arrondis de la carte.

### 2.4. Vérifier le résultat

Supprimez temporairement :

```css
overflow: hidden;
```

Observez la carte.

Ajoutez ensuite :

```css
overflow: hidden;
```

Comparez les deux résultats.

Vérifiez que `overflow: hidden` permet de conserver le contenu à l’intérieur de la forme de la carte.

### 2.5. Réaliser une deuxième carte

Ajoutez une deuxième carte dans le HTML :

```html
<article class="carte-article">

    <div class="carte-image">
        <img
            src="images/article-example.png"
            alt="Interface utilisateur">
    </div>

    <div class="carte-contenu">
        <h2>Créer une interface web</h2>

        <p>
            Une interface claire aide l’utilisateur
            à comprendre les actions disponibles.
        </p>

        <a href="#">Lire l'article</a>
    </div>

</article>
```

La même règle CSS doit s’appliquer aux deux cartes.

**Travail à faire :**

Créez deux cartes d’articles.

Donnez aux cartes :

- une largeur maximale ;
- une hauteur minimale ;
- des coins arrondis ;
- une image ;
- un contenu intérieur.

Utilisez `overflow: hidden` pour garder le contenu dans les limites de chaque carte.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-224-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les deux cartes conservent leur contenu à l’intérieur de leurs limites et l’image respecte les coins arrondis de la carte.

## Bilan

**Vous avez appris :**

- le rôle de `overflow` ;
- l’utilisation de `overflow: hidden` ;
- le contrôle du contenu qui dépasse une carte.

**Vous avez réalisé :**

Deux cartes d’articles dont le contenu reste correctement contenu dans leurs limites.

## Glossaire

- **Débordement** : contenu qui dépasse les limites d’un élément.
- **`overflow`** : propriété CSS qui contrôle le contenu qui dépasse.
- **`hidden`** : valeur qui masque le contenu qui dépasse.
- **`border-radius`** : propriété CSS qui arrondit les coins d’un élément.