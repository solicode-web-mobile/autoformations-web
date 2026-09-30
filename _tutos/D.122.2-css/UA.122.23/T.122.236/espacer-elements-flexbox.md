---
title: "Espacer les éléments Flexbox"
layout: tuto
slug: "espacer-elements-flexbox"
permalink: /tutos/espacer-elements-flexbox/
tuto_id: "T.122.236"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 6
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Espacement des cartes</title>
      <style>
          body { font-family: sans-serif; }
          .carte-article {
              box-sizing: border-box;
              width: 200px;
              padding: 20px;
              background: white;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
          }
          .liste-cartes {
              box-sizing: border-box;
              width: 500px;
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

          <article class="carte-article">
              <h2>PHP</h2>
              <p>Créer des applications web dynamiques.</p>
          </article>

      </section>

  </body>
  </html>

data_css: |
  .liste-cartes {
      display: flex;
      flex-wrap: wrap;
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

Apprendre à créer un espace régulier et automatique entre les éléments d’un conteneur Flexbox grâce à la propriété `gap`.

## 2. Prérequis

Vous savez déjà :
- utiliser `display: flex` et `flex-wrap: wrap`.



## Partie 1 — Théorie

### 1.1. L'espacement simplifié avec `gap`

Avant Flexbox, il fallait utiliser `margin` sur chaque élément pour les espacer, ce qui créait souvent des décalages indésirables sur les bords du conteneur.

La propriété `gap` (à appliquer sur le conteneur) résout ce problème en gérant l'espacement **uniquement entre les éléments**. 

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
    </marker>
  </defs>

  <rect x="10" y="10" width="580" height="230" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">Propriété gap (row-gap et column-gap)</text>
  
  <rect x="30" y="50" width="150" height="70" rx="4" fill="#3b82f6"/>
  
  <!-- column-gap -->
  <path d="M 185 85 L 225 85" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="205" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">column-gap</text>
  
  <rect x="230" y="50" width="150" height="70" rx="4" fill="#3b82f6"/>
  
  <!-- column-gap -->
  <path d="M 385 85 L 425 85" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="405" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">gap</text>
  
  <rect x="430" y="50" width="140" height="70" rx="4" fill="#3b82f6"/>
  
  <!-- row-gap -->
  <path d="M 105 125 L 105 155" stroke="#22c55e" stroke-width="3" marker-end="url(#arrow-green)" marker-start="url(#arrow-green)"/>
  <text x="115" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#22c55e">row-gap</text>
  
  <rect x="30" y="160" width="150" height="70" rx="4" fill="#3b82f6"/>
  <rect x="230" y="160" width="150" height="70" rx="4" fill="#3b82f6"/>
</svg>

- **`gap`** : Définit l'espace entre toutes les colonnes et toutes les lignes.
- **`column-gap`** : Définit l'espace uniquement entre les colonnes (horizontal).
- **`row-gap`** : Définit l'espace uniquement entre les lignes (vertical).

**Exemple d'utilisation dans le code CSS :**
```css
.liste-cartes {
    display: flex;
    /* Ajoute 24px d'espace entre chaque ligne et chaque colonne */
    gap: 24px; 
}
```

## Partie 2 — Pratique (Projet Fil Rouge)

### 2.1. Faire respirer le design avec gap

Dans notre projet, certains éléments restent collés. Par exemple, les liens du menu (`.liens-navigation`) et les trois colonnes de notre pied de page (`.conteneur-pied-de-page`). Nous pourrions utiliser des marges (`margin`), mais `gap` est bien plus propre avec Flexbox !

1. **Testez l'espacement sur le menu :**
   - Ouvrez votre fichier `css/layout.css` et repérez la règle `.liens-navigation` (qui est la liste `<ul>` de nos liens).
   - Ajoutez-y `display: flex;` pour que la liste devienne elle-même un conteneur Flexbox. Les liens se mettent en ligne mais sont serrés.
   - Ajoutez `gap: 24px;`. Observez le résultat : les liens sont parfaitement espacés, sans aucun décalage sur les bords !

2. **Testez sur le pied de page :**
   - Toujours dans `layout.css`, ciblez la règle `.conteneur-pied-de-page` (qui possède déjà `display: flex;`).
   - Ajoutez `column-gap: 48px;`. L'espacement entre les colonnes du pied de page s'agrandit.
   - Remplacez par le raccourci global `gap: 48px;` (c'est une bonne pratique de l'utiliser même quand il n'y a qu'une ligne, au cas où le footer passe sur plusieurs lignes sur mobile plus tard).

**Livrable :**

Votre fichier `css/layout.css` mis à jour, contenant `display: flex; gap: 24px;` sur `.liens-navigation` et `gap: 48px;` sur `.conteneur-pied-de-page`.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-236-css.html' | relative_url}}"
    height="500"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les liens du menu sont espacés de 24px et les colonnes du pied de page de 48px, donnant à la maquette l'espace dont elle a besoin pour "respirer".

## Bilan

**Vous avez appris :**
- À espacer facilement les éléments flex avec `gap`.
- À dissocier l'espace vertical (`row-gap`) de l'espace horizontal (`column-gap`).

## Glossaire

- **`gap`** : Propriété du conteneur définissant l'espace entre ses enfants.
- **`row-gap`** / **`column-gap`** : Contrôles spécifiques pour l'espacement des lignes et des colonnes.