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
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liste de cartes</title>
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

Apprendre à transformer un élément en **conteneur Flexbox** avec `display: flex`.

## 2. Prérequis

Vous savez déjà utiliser des classes CSS pour donner un style de base (marges, bordures, espacements) à un élément HTML.



## Partie 1 — Théorie

### 1.1. Le modèle Flexbox : Conteneur et Éléments

Flexbox est un modèle CSS qui permet d'organiser facilement plusieurs éléments enfants à l'intérieur d'un élément parent. 

La règle d'or est simple : **le style Flexbox s'applique au parent (le conteneur), et non aux enfants (les éléments flex)**.

<svg viewBox="0 0 600 200" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="40" width="560" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="5,5"/>
  <text x="30" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#475569">Conteneur parent (.liste-cartes) avec display: flex;</text>
  
  <rect x="40" y="60" width="140" height="80" rx="4" fill="#3b82f6" />
  <text x="110" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Enfant Flex 1</text>
  
  <rect x="230" y="60" width="140" height="80" rx="4" fill="#3b82f6" />
  <text x="300" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Enfant Flex 2</text>
  
  <rect x="420" y="60" width="140" height="80" rx="4" fill="#3b82f6" />
  <text x="490" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Enfant Flex 3</text>
</svg>

Il suffit d'ajouter la propriété `display: flex;` sur le conteneur parent pour que tous ses enfants directs se positionnent automatiquement selon les règles de Flexbox (par défaut, ils se placent en ligne).

**Exemple d'utilisation dans le code CSS :**
```css
.liste-cartes {
    /* Transforme la section en conteneur flex */
    display: flex; 
}
```

## Partie 2 — Pratique

### 2.1. Mise en place du layout Flexbox

À partir du code fourni en données de départ (HTML et CSS) :

1. **Complétez le contenu** : Ajoutez une quatrième carte (`.carte-article`) dans votre `<section class="liste-cartes">` pour un langage de votre choix (ex: PHP ou Python). Observez que les cartes s'empilent de haut en bas (comportement par défaut).
2. **Activez Flexbox** : Dans le code CSS, transformez la zone `.liste-cartes` en conteneur flex en lui ajoutant la propriété `display: flex;`. Vous devriez constater que les cartes s'alignent immédiatement côte à côte.

**Livrable :**

Créez un document Markdown ou copiez votre code CSS dans un document, contenant la règle `.liste-cartes` avec l'activation de Flexbox.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-231-css.html' | relative_url}}"
    height="350"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le conteneur `.liste-cartes` utilise bien `display: flex`. Les quatre cartes se positionnent en ligne.

## Bilan

**Vous avez appris :**
- La différence entre le parent (conteneur flex) et les enfants (éléments flex).
- À activer le modèle Flexbox en utilisant `display: flex`.

## Glossaire

- **Conteneur flex** : Élément parent qui possède la règle `display: flex`.
- **Élément flex** : Enfant direct d'un conteneur flex, positionné par le modèle Flexbox.