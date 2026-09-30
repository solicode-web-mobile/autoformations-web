---
title: "Projet de synthèse — Disposition des cartes"
layout: tuto
slug: "synthese-disposition-cartes"
permalink: /tutos/synthese-disposition-cartes/
tuto_id: "T.122.238"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 8
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Derniers articles</title>
      <style>
          body { font-family: sans-serif; background-color: #f8fafc; }
          
          .page-articles {
              max-width: 1000px;
              margin: 40px auto;
              padding: 0 20px;
          }
          
          .page-articles h1 { margin: 0 0 32px; color: #1e293b; }
          
          .carte-article {
              box-sizing: border-box;
              min-width: 220px;
              padding: 20px;
              background: white;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          
          .carte-article h2 { margin: 0 0 12px; color: #0f172a; }
          .carte-article p { margin: 0 0 16px; color: #475569; }
          .carte-article a { color: #2673e8; text-decoration: none; font-weight: bold; }
      </style>
  </head>
  <body>

      <main class="page-articles">

          <h1>Derniers articles</h1>

          <section class="liste-cartes">

              <article class="carte-article">
                  <h2>HTML</h2>
                  <p>Créer la structure d'une page web.</p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>CSS</h2>
                  <p>Mettre en forme une page web.</p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>JavaScript</h2>
                  <p>Ajouter des comportements à une page.</p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>PHP</h2>
                  <p>Créer des applications web dynamiques.</p>
                  <a href="#">Lire l'article</a>
              </article>

          </section>

      </main>

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

Mettre en pratique toutes les propriétés Flexbox abordées dans cette unité d'apprentissage pour réaliser la mise en page d'une section complète regroupant les derniers articles d'un blog.

## 2. Prérequis

Avoir suivi les tutoriels T.122.231 à T.122.237 sur Flexbox.



## Partie 1 — Aide-mémoire Flexbox (Théorie)

Voici un récapitulatif des propriétés Flexbox que vous avez apprises et que vous allez devoir combiner :

**Sur le conteneur parent :**
- `display: flex;` : Active le mode Flexbox.
- `flex-direction: row;` (ou `column`) : Définit l'axe principal (horizontal ou vertical).
- `flex-wrap: wrap;` : Permet aux éléments de passer à la ligne si l'espace manque.
- `justify-content: ...;` : Répartit les éléments sur l'axe principal (`flex-start`, `center`, `space-between`...).
- `align-items: stretch;` : Aligne (ou étire) les éléments sur l'axe secondaire.
- `gap: 24px;` : Crée un espace régulier entre les éléments (lignes et colonnes).

**Sur les enfants flex :**
- `flex: 1;` : Autorise l'enfant à grandir pour occuper l'espace vide disponible.

<svg viewBox="0 0 600 300" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="580" height="280" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">Synthèse : Conteneur Flexbox</text>
  
  <rect x="30" y="50" width="250" height="100" rx="4" fill="#3b82f6"/>
  <text x="155" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte (flex: 1)</text>
  
  <rect x="310" y="50" width="250" height="100" rx="4" fill="#3b82f6"/>
  <text x="435" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte (flex: 1)</text>
  
  <rect x="30" y="170" width="250" height="100" rx="4" fill="#3b82f6"/>
  <text x="155" y="225" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte (flex: 1)</text>
  
  <rect x="310" y="170" width="250" height="100" rx="4" fill="#3b82f6"/>
  <text x="435" y="225" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte (flex: 1)</text>

  <!-- gaps -->
  <path d="M 295 100 L 295 220" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="295" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle" transform="rotate(-90, 285, 150)">gap</text>
  
  <path d="M 155 160 L 435 160" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="295" y="155" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">gap</text>
</svg>

## Partie 2 — Pratique (Projet Fil Rouge)

### 2.1. Assemblage final : la bannière d'accueil

Il ne nous manque plus qu'une seule pièce pour finaliser la page d'accueil de notre blog : la bannière principale (le "Hero Header") ! 

1. **Le HTML :** Ouvrez `index.html` et ajoutez ce dernier bloc *entre* le `<header>` et la section des filtres :

```html
    <section class="banniere-accueil">
        <h1>Mon Blog Personnel :<br><span>Développer &amp; Partager</span></h1>
        <p>Découvrez mes derniers articles sur le développement web, l'architecture logicielle et les bonnes pratiques d'intégration UI/UX.</p>
        <div class="actions-banniere">
            <a href="#articles" class="bouton-principal">Lire les articles</a>
            <a href="#" class="bouton-secondaire">À propos de moi</a>
        </div>
    </section>
```

2. **Le CSS :** 
   - Dans `css/pages.css`, ajoutez les styles de la bannière :
```css
.banniere-accueil { padding: 96px 24px; text-align: center; background: #ffffff; background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 24px 24px; }
.banniere-accueil h1 { max-width: 850px; margin: 0 auto; color: #0a2042; font-family: Georgia, serif; font-size: 56px; font-weight: 900; line-height: 1.15; }
.banniere-accueil h1 span { color: #2673e8; }
.banniere-accueil p { max-width: 680px; margin: 24px auto 0; color: #6b7280; font-size: 17px; line-height: 1.7; }
.actions-banniere { margin-top: 28px; }
```
   - Dans `css/components.css`, ajoutez le style du bouton secondaire (le bouton principal y est déjà) :
```css
.bouton-secondaire { display: inline-block; padding: 10px 20px; color: #1f2937; background: white; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 600; text-align: center; }
```

### 2.2. Validation du projet

Ouvrez `index.html` dans votre navigateur. Si vous avez bien suivi tous les tutoriels, votre page devrait maintenant être complète et parfaitement organisée !

**Livrable :**

Votre dossier `projet-blog-flexbox` finalisé contenant `index.html` et les 4 fichiers CSS bien structurés.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-238-css.html' | relative_url}}"
    height="600"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Votre page locale est visuellement identique à la maquette ci-dessus. Toutes les sections s'adaptent correctement grâce aux propriétés Flexbox (`justify-content`, `align-items`, `gap`, `flex-wrap`, `flex`).

## Bilan

**Félicitations !**
Vous avez réalisé une page web moderne complète, structurée intelligemment, et mis en pratique toutes les propriétés essentielles de Flexbox. Vous maîtrisez maintenant l'une des techniques de mise en page les plus importantes du Web.