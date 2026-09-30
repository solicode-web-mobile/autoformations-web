---
title: "Répartir l’espace entre les cartes"
layout: tuto
slug: "repartir-espace-cartes"
permalink: /tutos/repartir-espace-cartes/
tuto_id: "T.122.237"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 7
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes flexibles</title>
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
              display: flex;
              flex-direction: row;
              gap: 24px;
              width: 900px;
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

          <article class="carte-article carte-principale">
              <h2>JavaScript</h2>
              <p>Ajouter des comportements à une page.</p>
          </article>

      </section>

  </body>
  </html>

data_css: ""
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

Apprendre à permettre aux éléments flex de partager intelligemment l’espace disponible dans le conteneur en utilisant la propriété `flex` (raccourci pour `flex-grow`).

## 2. Prérequis

Vous savez déjà :
- utiliser `display: flex` et `gap`.
- comprendre le rôle du conteneur et des éléments flex.



## Partie 1 — Théorie

### 1.1. Grandir pour remplir l'espace

Par défaut, les enfants flex n'occupent que la largeur nécessaire à leur contenu (ou la largeur qu'on leur a fixée), laissant parfois un grand espace vide à la fin du conteneur.

La propriété `flex-grow` (appliquée sur les **enfants**) leur donne l'autorisation de "grandir" pour manger cet espace restant. Plus simplement, on utilise souvent le raccourci `flex`.

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- flex: 1 partout -->
  <g transform="translate(10, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">Toutes les cartes avec flex: 1</text>
    <rect x="0" y="30" width="580" height="60" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="180" height="40" rx="4" fill="#3b82f6"/>
    <text x="100" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1 (1 part)</text>
    <rect x="200" y="40" width="180" height="40" rx="4" fill="#3b82f6"/>
    <text x="290" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2 (1 part)</text>
    <rect x="390" y="40" width="180" height="40" rx="4" fill="#3b82f6"/>
    <text x="480" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3 (1 part)</text>
  </g>
  
  <!-- flex: 2 au milieu -->
  <g transform="translate(10, 120)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">La carte 2 avec flex: 2</text>
    <rect x="0" y="30" width="580" height="60" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="135" height="40" rx="4" fill="#3b82f6"/>
    <text x="77" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1 (1 part)</text>
    <rect x="155" y="40" width="270" height="40" rx="4" fill="#3b82f6"/>
    <text x="290" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2 (2 parts)</text>
    <rect x="435" y="40" width="135" height="40" rx="4" fill="#3b82f6"/>
    <text x="502" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3 (1 part)</text>
  </g>
</svg>

- **`flex: 0;`** (défaut) : L'élément garde sa taille de base, il ne s'étire pas.
- **`flex: 1;`** : L'élément s'étire pour prendre 1 part de l'espace disponible.
- **`flex: 2;`** : L'élément s'étire pour prendre 2 parts de l'espace disponible.

**Exemple d'utilisation dans le code CSS :**
```css
.carte-article {
    /* La carte va grandir pour occuper l'espace vide restant */
    flex: 1; 
}

.carte-principale {
    /* Cette carte prendra 2 fois plus de place que les autres */
    flex: 2;
}
```

## Partie 2 — Pratique

### 2.1. Manipuler la taille relative des cartes

1. **Testez `flex: 1` :**
   Regardez le résultat initial : le conteneur fait `900px` mais les cartes ont une petite taille de `220px`, il reste donc beaucoup de vide à droite.
   - Dans le code CSS, ajoutez `flex: 1;` à la classe `.carte-article`. Constatez que les 3 cartes s'allongent équitablement pour remplir tout le conteneur.

2. **Créez une exception :**
   - La carte "JavaScript" possède déjà la classe `carte-principale` dans le code HTML.
   - Dans le CSS, ajoutez la règle `.carte-principale { flex: 2; }`.
   - Observez le résultat : la carte JavaScript devient nettement plus large car elle prend 2 parts de l'espace.

3. **Résultat final :**
   - Retirez la règle `.carte-principale` du CSS pour que toutes les cartes reprennent une taille parfaitement égale avec `flex: 1;`.

**Livrable :**

Créez un document contenant le code CSS final avec `.carte-article` utilisant `flex: 1;`.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-237-css.html' | relative_url}}"
    height="300"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les trois cartes partagent parfaitement l'espace disponible dans le conteneur grâce à l'utilisation de `flex: 1`.

## Bilan

**Vous avez appris :**
- À étirer des éléments pour occuper l'espace vide avec `flex` (ou `flex-grow`).
- À distribuer l'espace proportionnellement en attribuant des parts différentes (`flex: 1`, `flex: 2`, etc.).

## Glossaire

- **`flex-grow`** : Autorise un élément à grandir pour occuper l'espace restant.
- **`flex`** : Raccourci CSS très courant pour configurer le comportement flexible (dont la croissance).
- **Part** : Quantité proportionnelle d'espace qu'un élément peut réclamer.