---
title: "Faire passer les éléments à la ligne"
layout: tuto
slug: "elements-a-la-ligne-flexbox"
permalink: /tutos/elements-a-la-ligne-flexbox/
tuto_id: "T.122.235"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 5
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes sur plusieurs lignes</title>
      <style>
          body { font-family: sans-serif; }
          .carte-article {
              box-sizing: border-box;
              width: 180px;
              margin: 10px;
              padding: 20px;
              background: white;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
          }
          .liste-cartes {
              box-sizing: border-box;
              width: 720px;
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
      flex-direction: row;
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

Apprendre à faire passer les éléments Flexbox sur plusieurs lignes avec la propriété `flex-wrap: wrap`.

## 2. Prérequis

Vous savez déjà configurer un conteneur Flexbox et définir sa direction (`flex-direction`).



## Partie 1 — Théorie

### 1.1. Autoriser le retour à la ligne avec `flex-wrap`

Par défaut, Flexbox essaie de faire tenir tous les enfants sur une seule et même ligne, quitte à les écraser s'il n'y a plus de place. 

La propriété `flex-wrap` permet d'autoriser le retour à la ligne automatique lorsque l'espace horizontal (ou vertical, selon la direction) du conteneur est insuffisant.

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Sans flex-wrap -->
  <g transform="translate(10, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-wrap: nowrap (défaut)</text>
    <rect x="0" y="30" width="250" height="70" rx="4" fill="#f8fafc" stroke="#ef4444" stroke-width="2"/>
    <text x="5" y="115" font-family="sans-serif" font-size="12" fill="#ef4444">Le contenu déborde ou s'écrase</text>
    <rect x="10" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <rect x="95" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <rect x="180" y="40" width="80" height="50" rx="4" fill="#3b82f6" opacity="0.6"/>
    <rect x="265" y="40" width="80" height="50" rx="4" fill="#3b82f6" opacity="0.6"/>
  </g>
  
  <!-- Avec flex-wrap -->
  <g transform="translate(320, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-wrap: wrap</text>
    <rect x="0" y="30" width="250" height="150" rx="4" fill="#f8fafc" stroke="#22c55e" stroke-width="2"/>
    <text x="5" y="200" font-family="sans-serif" font-size="12" fill="#22c55e">Les éléments passent à la ligne</text>
    <rect x="10" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <rect x="95" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <rect x="10" y="100" width="80" height="50" rx="4" fill="#3b82f6"/>
    <rect x="95" y="100" width="80" height="50" rx="4" fill="#3b82f6"/>
  </g>
</svg>

- **`flex-wrap: nowrap;`** (par défaut) : Les éléments restent sur une seule ligne.
- **`flex-wrap: wrap;`** : Les éléments qui n'ont plus de place passent sur la ligne suivante.

**Exemple d'utilisation dans le code CSS :**
```css
.liste-cartes {
    display: flex;
    /* Autorise les éléments à passer à la ligne si la largeur est insuffisante */
    flex-wrap: wrap; 
}
```

## Partie 2 — Pratique (Projet Fil Rouge)

### 2.1. Ajouter les filtres de catégories

Dans notre blog, nous voulons une section permettant de filtrer les articles par catégorie. S'il y a beaucoup de catégories, elles devront passer à la ligne automatiquement sur les petits écrans.

1. **Le HTML :** Ouvrez votre fichier `index.html` et ajoutez cette nouvelle section *entre* le `<header>` et le `<footer>` :

```html
    <section class="filtre-categories">
        <h2>Explorer par thème</h2>
        <div class="liste-filtres">
            <a href="#" class="pilule-filtre actif">Tous les articles</a>
            <a href="#" class="pilule-filtre">Développement</a>
            <a href="#" class="pilule-filtre">Design UI/UX</a>
            <a href="#" class="pilule-filtre">Management</a>
            <a href="#" class="pilule-filtre">Tutoriels</a>
            <a href="#" class="pilule-filtre">Inspirations</a>
            <a href="#" class="pilule-filtre">Outils</a>
            <a href="#" class="pilule-filtre">Tendances 2026</a>
        </div>
    </section>
```

2. **Le CSS :** 
   - Créez un nouveau fichier `css/pages.css` et ajoutez-y :
```css
.filtre-categories { margin: 64px 24px; text-align: center; }
.filtre-categories h2 { margin: 0 0 20px; color: #111827; font-size: 18px; }
```
   - N'oubliez pas d'ajouter `<link rel="stylesheet" href="css/pages.css">` dans le `<head>` de votre fichier HTML !
   - Dans `css/components.css`, ajoutez les styles de nos petites pilules :
```css
.pilule-filtre { display: inline-block; padding: 10px 16px; margin: 4px; color: #4b5563; background: white; border: 1px solid #e5e7eb; border-radius: 8px; }
.pilule-filtre.actif { color: white; background: #111827; }
```

### 2.2. Gérer le passage à la ligne

1. **Le Problème :** Ouvrez `index.html` dans le navigateur. Actuellement, les filtres s'affichent un peu n'importe comment (ou sur plusieurs lignes naturellement car ce sont des éléments `inline-block`).
2. **Activez Flexbox :** Dans `css/pages.css`, ciblez `.liste-filtres` et ajoutez `display: flex;`.
3. Réduisez la largeur de votre fenêtre de navigateur. Vous remarquerez que les pilules refusent de passer à la ligne et finissent par déborder de l'écran ou être compressées.
4. **La Solution :** Ajoutez `flex-wrap: wrap;` sur `.liste-filtres`. Les pilules se répartiront maintenant harmonieusement sur plusieurs lignes si l'espace vient à manquer, tout en conservant leurs dimensions ! Pour que les lignes soient centrées, ajoutez également `justify-content: center;`.

**Livrable :**

Votre fichier `css/pages.css` contenant la classe `.liste-filtres` configurée avec flexbox et autorisant le retour à la ligne.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-235-css.html' | relative_url}}"
    height="500"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les boutons de filtres s'organisent en ligne, et passent automatiquement à la ligne suivante si la fenêtre est trop étroite.

## Bilan

**Vous avez appris :**
- À gérer le comportement des éléments flex face au manque d'espace en utilisant `flex-wrap: wrap;`.

## Glossaire

- **`flex-wrap`** : Propriété du conteneur qui contrôle l'autorisation du passage à la ligne des enfants.
- **`wrap`** : Valeur forçant le passage à la ligne si l'espace manque.