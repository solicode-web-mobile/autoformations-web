---
title: "Choisir la direction des éléments"
layout: tuto
slug: "direction-elements-flexbox"
permalink: /tutos/direction-elements-flexbox/
tuto_id: "T.122.232"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 2
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Direction des cartes</title>
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

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

Apprendre à choisir la direction des éléments dans un conteneur Flexbox avec `flex-direction`.

## 2. Prérequis

Vous savez déjà :

- utiliser une classe CSS ;
- créer un conteneur Flexbox avec `display: flex` ;
- identifier un conteneur flex ;
- identifier les éléments flex.

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

### 1.1. Choisir une direction avec `flex-direction`

`flex-direction` définit la direction des éléments flex.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
}
```

Les éléments sont placés dans une ligne.

### 1.2. Utiliser `row`

`row` organise les éléments sur une ligne.

C'est la direction horizontale utilisée par défaut avec Flexbox.

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
}
```

Les cartes sont placées de gauche à droite.

### 1.3. Utiliser `column`

`column` organise les éléments dans une colonne.

```css
.liste-cartes {
    display: flex;
    flex-direction: column;
}
```

Les cartes sont placées de haut en bas.

### 1.4. Comparer `row` et `column`

Avec :

```css
flex-direction: row;
```

on obtient :

```text
Carte 1  Carte 2  Carte 3
```

Avec :

```css
flex-direction: column;
```

on obtient :

```text
Carte 1
Carte 2
Carte 3
```

### 1.5. À retenir

- `flex-direction` choisit la direction des éléments.
- `row` place les éléments sur une ligne.
- `column` place les éléments dans une colonne.
- La propriété s'applique au conteneur flex.
- Les cartes restent des éléments flex.

## Partie 2 — Pratique

### 2.1. Préparer les cartes

#### Étape 1 — Donner une présentation aux cartes

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

Les cartes possèdent maintenant une présentation simple.

#### Étape 2 — Préparer le conteneur

Ajoutez :

```css
.liste-cartes {
    display: flex;
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Le conteneur utilise Flexbox.

### 2.2. Organiser les cartes sur une ligne

#### Étape 1 — Ajouter `row`

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les trois cartes sont organisées horizontalement.

### 2.3. Organiser les cartes dans une colonne

#### Étape 1 — Remplacer `row`

Remplacez :

```css
flex-direction: row;
```

par :

```css
flex-direction: column;
```

Les cartes sont maintenant placées verticalement.

#### Étape 2 — Comparer les deux directions

Testez successivement :

```css
flex-direction: row;
```

puis :

```css
flex-direction: column;
```

Observez la position des cartes.

### 2.4. Choisir la direction pour une liste d'articles

Pour une liste de cartes d'articles qui doit commencer par une organisation horizontale, utilisez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
}
```

Pour une présentation verticale, utilisez :

```css
.liste-cartes {
    display: flex;
    flex-direction: column;
}
```

La direction dépend du besoin de la réalisation.

### 2.5. Tester une autre organisation

#### Étape 1 — Ajouter une quatrième carte

Ajoutez :

```html
<article class="carte-article">
    <h2>PHP</h2>
    <p>Créer des applications web dynamiques.</p>
</article>
```

#### Étape 2 — Tester `row`

Utilisez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
}
```

#### Étape 3 — Tester `column`

Utilisez ensuite :

```css
.liste-cartes {
    display: flex;
    flex-direction: column;
}
```

Vérifiez que la direction change sans modifier le HTML des cartes.

**Travail à faire :**

À partir du HTML fourni :

- créez quatre cartes ;
- utilisez `.liste-cartes` comme conteneur flex ;
- utilisez `display: flex` ;
- utilisez `flex-direction` ;
- testez `row` ;
- testez `column` ;
- choisissez `row` pour le résultat final.

N'utilisez pas encore :

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
    src="{{'/code/css/tuto-122-232-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur `.liste-cartes` utilise `display: flex` et `flex-direction: row`.

Les quatre cartes sont organisées dans une direction horizontale.

L'apprenant sait modifier cette direction avec `column`.

## Bilan

**Vous avez appris :**

- le rôle de `flex-direction` ;
- l'utilisation de `row` ;
- l'utilisation de `column`.

**Vous avez réalisé :**

Une liste de cartes dont la direction peut être horizontale ou verticale.

## Glossaire

- **`flex-direction`** : propriété qui définit la direction des éléments flex.
- **`row`** : direction horizontale.
- **`column`** : direction verticale.
- **Direction** : sens dans lequel les éléments sont organisés.