---
title: "Contraindre les dimensions d'une carte"
layout: tuto
slug: "contraindre-dimensions-carte"
permalink: /tutos/contraindre-dimensions-carte/
tuto_id: "T.122.222"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 2
simplified: true
data_html: |
  <div class="boite">
      width: 600px (Fixe)
  </div>
  <div class="boite-fluide">
      max-width: 600px (Fluide)
  </div>

data_css: |
  body {
      padding: 10px;
      font-family: sans-serif;
  }
  .boite {
      width: 600px;
      padding: 15px;
      margin-bottom: 20px;
      background: #ef4444;
      color: white;
  }
  .boite-fluide {
      max-width: 600px;
      padding: 15px;
      background: #22c55e;
      color: white;
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

Apprendre à rendre un élément responsive en limitant ses dimensions avec `max-width`, `min-width` ou `min-height`, plutôt que de lui imposer une taille fixe.

## 2. Prérequis

- Avoir assimilé le Box Model (`box-sizing`).
- Connaître `width` et `height`.

## Partie 1 — Théorie

### 1.1. Les contraintes (min- et max-)

Utiliser des propriétés fixes comme `width: 800px;` pose souvent un problème sur les petits écrans (smartphones) : l'élément déborde et force l'apparition d'une barre de défilement horizontale.

Pour rendre un site "responsive" (adaptable à tous les écrans), on utilise des **contraintes** :
- **`max-width`** : La boîte prend toute la largeur disponible, mais ne dépassera jamais cette limite.
- **`min-width`** : La boîte peut s'étirer, mais ne sera jamais plus petite que cette limite.
- **`min-height`** : La hauteur s'adapte au contenu, mais ne descendra jamais en dessous de cette valeur.

<svg viewBox="0 0 600 200" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- width fixe -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="200" height="150" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5" />
    <text x="100" y="140" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Écran mobile (200px)</text>
    
    <rect x="10" y="20" width="280" height="80" fill="#ef4444" rx="4"/>
    <text x="150" y="65" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">width: 280px; (Déborde!)</text>
  </g>
  
  <!-- max-width -->
  <g transform="translate(350, 20)">
    <rect x="0" y="0" width="200" height="150" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5" />
    <text x="100" y="140" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Écran mobile (200px)</text>
    
    <rect x="10" y="20" width="180" height="80" fill="#22c55e" rx="4"/>
    <text x="100" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">max-width: 280px;</text>
    <text x="100" y="85" font-family="sans-serif" font-size="10" fill="#ffffff" text-anchor="middle">(S'adapte à 180px)</text>
  </g>
</svg>

L'utilisation de `max-width` combinée à un centrage (`margin: 0 auto;`) est la technique standard pour centrer le contenu d'un site sur un grand écran tout en le laissant fluide sur mobile.

### 1.2. Exemple d'application

Voici comment la règle s'applique en CSS (le code HTML correspondant est disponible dans l'onglet HTML de l'éditeur ci-contre) :

```css
.boite-fluide {
    /* La boîte prend par défaut 100% de l'écran (si c'est un bloc),
       mais s'arrête de grandir à 600px. */
    max-width: 600px;
    background: #22c55e;
}
```
*(Vous pouvez tester cet exemple dans l'éditeur intégré : réduisez la largeur de votre fenêtre pour voir la boîte rouge déborder, tandis que la boîte verte s'adapte parfaitement à l'écran).*

## Partie 2 — Pratique (Projet Fil Rouge)

Dans le tutoriel précédent, nous avons créé une simple carte. Pour le blog, nous allons structurer la page pour que notre liste d'articles ne s'étire pas à l'infini sur les grands écrans.

### 2.1. Englober la carte

1. Ouvrez votre fichier `index.html`.
2. Entourez votre `<div class="carte-article">` avec un conteneur global qui représentera la zone des articles :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Blog</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
<body>
    
    <!-- Nouveau conteneur principal -->
    <section class="section-articles">
        <div class="conteneur-articles">
            
            <div class="carte-article">
                <div class="carte-contenu">
                    <h3>Comment bien débuter avec Tailwind CSS en 2026 ?</h3>
                    <p>Découvrez les concepts fondamentaux de Tailwind CSS.</p>
                </div>
            </div>

        </div>
    </section>

</body>
</html>
```

### 2.2. Centrer et contraindre la largeur

1. Dans votre dossier `css`, créez un nouveau fichier `pages.css` (et assurez-vous qu'il est bien lié dans le `<head>` de votre HTML comme ci-dessus).
2. Ajoutez la contrainte `max-width` pour que la zone d'articles ne dépasse pas 1200px de large, et centrez-la :

```css
/* css/pages.css */
.conteneur-articles {
    max-width: 1200px;
    /* La marge "auto" à gauche et à droite centre l'élément */
    margin: 0 auto; 
}
```

### 2.3. Optionnel : vérifier le comportement

Si vous ouvrez votre page en plein écran, le texte ne sera pas collé au bord gauche, mais bien limité dans une colonne invisible de 1200px au centre. Sur petit écran, le texte s'adaptera sans déborder.

**Livrable :**
Votre fichier `index.html` mis à jour et le nouveau fichier `pages.css` contenant la contrainte de dimension.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-222-css.html' | relative_url}}"
    height="250"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le conteneur global limite désormais l'espace du blog à 1200 pixels et se centre automatiquement.

## Bilan

**Vous avez appris :**
- La différence entre une largeur stricte (`width`) et fluide (`max-width`).
- À utiliser `max-width` avec `margin: 0 auto` pour créer un conteneur principal centré, la technique la plus courante en mise en page Web.

## Glossaire
- **Responsive** : Capacité d'une page à s'adapter à la taille de l'écran.
- **max-width** : Largeur maximale autorisée.
- **margin: 0 auto** : Technique CSS pour centrer horizontalement un élément de type bloc.