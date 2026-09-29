---
title: "Découvrir Flexbox"
layout: tuto
slug: "decouvrir-flexbox"
permalink: /tutos/decouvrir-flexbox/
tuto_id: "T.122.231"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liste de cartes</title>
  </head>
  <body>

      <section class="liste-cartes">

          <article class="carte-article">
              <h2>HTML</h2>
              <p>Créer la structure d'une page web.</p>
          </article>

          <article class="carte-article">
              <h2>CSS</h2>
              <p>Mettre en forme une page web.</p>
          </article>

          <article class="carte-article">
              <h2>JavaScript</h2>
              <p>Ajouter des comportements à une page.</p>
          </article>

      </section>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à transformer un élément en conteneur Flexbox avec `display: flex`.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser une classe CSS ;
- utiliser `width` et `max-width` ;
- utiliser `padding` ;
- utiliser `margin` ;
- utiliser `border` ;
- utiliser `border-radius` ;
- construire plusieurs cartes d'articles.

Vous avez déjà réalisé plusieurs cartes dans l'UA.122.22.

## Données de départ

### HTML

```html
<section class="liste-cartes">

    <article class="carte-article">
        <h2>HTML</h2>
        <p>Créer la structure d'une page web.</p>
    </article>

    <article class="carte-article">
        <h2>CSS</h2>
        <p>Mettre en forme une page web.</p>
    </article>

    <article class="carte-article">
        <h2>JavaScript</h2>
        <p>Ajouter des comportements à une page.</p>
    </article>

</section>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Le conteneur Flexbox

Flexbox permet d'organiser plusieurs éléments à l'intérieur d'un conteneur.

Le conteneur est l'élément qui possède la règle Flexbox.

**Exemple :**

```css
.liste-cartes {
    display: flex;
}
```

Ici, `.liste-cartes` devient un **conteneur flex**.

Les cartes placées à l'intérieur deviennent des **éléments flex**.

### 1.2. Utiliser `display: flex`

La propriété `display` permet de définir le mode d'affichage d'un élément.

Avec :

```css
display: flex;
```

l'élément devient un conteneur Flexbox.

**Exemple :**

```css
.liste-cartes {
    display: flex;
}
```

La règle est appliquée au conteneur, et non directement aux cartes.

### 1.3. Conteneur et éléments

Dans cet exemple :

```html
<section class="liste-cartes">
    <article class="carte-article">...</article>
    <article class="carte-article">...</article>
    <article class="carte-article">...</article>
</section>
```

`.liste-cartes` est le **conteneur flex**.

Les trois `.carte-article` sont les **éléments flex**.

### 1.4. Observer le changement

Avant Flexbox, les éléments suivent le comportement normal du document.

Après :

```css
.liste-cartes {
    display: flex;
}
```

les éléments enfants sont organisés selon le modèle Flexbox.

Pour le moment, nous ne contrôlons pas encore leur direction, leur alignement ou leur espacement.

Ces propriétés seront étudiées dans les tutoriels suivants.

### 1.5. À retenir

- Flexbox sert à organiser des éléments dans un conteneur.
- `display: flex` transforme un élément en conteneur flex.
- Les éléments directement contenus dans ce conteneur deviennent des éléments flex.
- `display: flex` est la première étape avant les autres propriétés Flexbox.

## Partie 2 — Pratique

### 2.1. Préparer les cartes

#### Étape 1 — Ajouter le style des cartes

Ajoutez :

```css
.carte-article {
    width: 220px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les trois cartes possèdent maintenant une présentation simple.

#### Étape 2 — Ajouter le style de la zone

Ajoutez :

```css
.liste-cartes {
    width: 760px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

La zone contenant les cartes est maintenant visible.

### 2.2. Découvrir Flexbox

#### Étape 1 — Transformer la zone en conteneur flex

Ajoutez :

```css
.liste-cartes {
    display: flex;
    width: 760px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Observez le résultat.

Les trois cartes sont maintenant des éléments flex.

### 2.3. Identifier le conteneur et les éléments

#### Étape 1 — Observer le HTML

Repérez :

```html
<section class="liste-cartes">
```

C'est le conteneur.

Repérez ensuite :

```html
<article class="carte-article">
```

Ce sont les éléments contenus dans le conteneur.

#### Étape 2 — Modifier uniquement le conteneur

Supprimez temporairement :

```css
display: flex;
```

Observez le résultat.

Ajoutez de nouveau :

```css
display: flex;
```

Observez le changement.

### 2.4. Tester avec une quatrième carte

#### Étape 1 — Ajouter une carte

Ajoutez une quatrième carte :

```html
<article class="carte-article">
    <h2>PHP</h2>
    <p>Créer des applications web dynamiques.</p>
</article>
```

Les quatre cartes utilisent maintenant le même composant.

#### Étape 2 — Vérifier le conteneur

La règle suivante doit rester sur `.liste-cartes` :

```css
.liste-cartes {
    display: flex;
}
```

Ne placez pas `display: flex` sur `.carte-article`.

### 2.5. Vérifier la différence

Comparez les deux situations :

Sans :

```css
display: flex;
```

Puis avec :

```css
display: flex;
```

Vérifiez que la deuxième situation utilise le modèle Flexbox pour les cartes.

**Travail à faire :**

À partir du HTML fourni :

- créez quatre cartes ;
- utilisez la même classe `.carte-article` pour les quatre cartes ;
- créez un conteneur `.liste-cartes` ;
- appliquez `display: flex` au conteneur ;
- identifiez le conteneur flex ;
- identifiez les éléments flex.

N'utilisez pas encore :

- `flex-direction` ;
- `justify-content` ;
- `align-items` ;
- `flex-wrap` ;
- `gap` ;
- `flex` ;
- `flex-grow`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-231-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur `.liste-cartes` utilise `display: flex`.

Les quatre `.carte-article` sont des éléments flex du même conteneur.

Aucune propriété Flexbox étudiée dans les tutoriels suivants n'est utilisée.

## Bilan

**Vous avez appris :**

- le principe de Flexbox ;
- le rôle du conteneur flex ;
- le rôle des éléments flex ;
- l'utilisation de `display: flex`.

**Vous avez réalisé :**

Une zone contenant plusieurs cartes et utilisant Flexbox.

## Glossaire

- **Flexbox** : système CSS qui permet d'organiser des éléments dans un conteneur.
- **Conteneur flex** : élément qui utilise `display: flex`.
- **Élément flex** : élément directement contenu dans un conteneur flex.
- **`display`** : propriété CSS qui définit le mode d'affichage d'un élément.