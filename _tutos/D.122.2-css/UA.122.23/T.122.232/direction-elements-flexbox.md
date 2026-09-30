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
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Direction des cartes</title>
      <style>
          body { font-family: sans-serif; }
          .carte-article {
              box-sizing: border-box;
              width: 220px;
              padding: 20px;
              background: white;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
          }
          .liste-cartes {
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              margin: 40px auto;
              padding: 20px;
              background: #f9fafb;
          }
      </style>
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

data_css: |
  .liste-cartes {
      display: flex;
  }

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

Vous savez déjà créer un conteneur Flexbox avec `display: flex`.



## Partie 1 — Théorie

### 1.1. L'axe principal avec `flex-direction`

Par défaut, Flexbox aligne les éléments horizontalement. La propriété `flex-direction` (à appliquer sur le conteneur) permet de changer ce comportement.

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- row -->
  <g transform="translate(10, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-direction: row</text>
    <rect x="0" y="30" width="300" height="70" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <text x="50" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1</text>
    <rect x="100" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <text x="140" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2</text>
    <rect x="190" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <text x="230" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3</text>
  </g>
  
  <!-- column -->
  <g transform="translate(350, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-direction: column</text>
    <rect x="0" y="30" width="120" height="200" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="100" height="40" rx="4" fill="#3b82f6"/>
    <text x="60" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1</text>
    <rect x="10" y="90" width="100" height="40" rx="4" fill="#3b82f6"/>
    <text x="60" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2</text>
    <rect x="10" y="140" width="100" height="40" rx="4" fill="#3b82f6"/>
    <text x="60" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3</text>
  </g>
</svg>

- `flex-direction: row;` (par défaut) : Organise les éléments sur une **ligne** (horizontalement, de gauche à droite).
- `flex-direction: column;` : Organise les éléments dans une **colonne** (verticalement, de haut en bas).

**Exemples d'utilisation dans le code CSS :**
```css
.liste-cartes-colonne {
    display: flex;
    flex-direction: column; /* Empile les éléments de haut en bas */
}

.liste-cartes-ligne {
    display: flex;
    flex-direction: row; /* Aligne les éléments de gauche à droite */
}
```

## Partie 2 — Pratique

### 2.1. Manipuler la direction des cartes

1. **Préparation :**
   - Ajoutez une 4ème carte en HTML (ex: PHP) dans `<section class="liste-cartes">`.
   - Le conteneur possède déjà `display: flex;`, observez que les cartes sont alignées horizontalement par défaut.

2. **Testez la direction `column` :**
   - Ajoutez `flex-direction: column;` sur le conteneur `.liste-cartes` dans le code CSS. Constatez que les cartes s'empilent verticalement.

3. **Revenez à la direction `row` :**
   - Remplacez par `flex-direction: row;`. Les cartes reprennent leur position horizontale en ligne.

**Livrable :**

Créez un document avec le code CSS complet de `.liste-cartes` en utilisant `flex-direction: column;`.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-232-css.html' | relative_url}}"
    height="350"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le conteneur utilise `display: flex` et `flex-direction: row`. Les éléments s'affichent horizontalement.

## Bilan

**Vous avez appris :**
- À utiliser `flex-direction` pour définir l'axe d'alignement principal (`row` ou `column`).

## Glossaire

- **`flex-direction`** : Propriété du conteneur définissant l'axe principal (direction des éléments).
- **`row`** : Direction en ligne (horizontal).
- **`column`** : Direction en colonne (vertical).