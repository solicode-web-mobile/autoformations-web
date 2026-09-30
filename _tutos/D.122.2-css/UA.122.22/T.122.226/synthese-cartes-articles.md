---
title: "Projet de synthèse — Modèle de boîte"
layout: tuto
slug: "synthese-cartes-articles"
permalink: /tutos/synthese-cartes-articles/
tuto_id: "T.122.22.6"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 6
simplified: true
data_html: |
  <!-- Pas de code spécifique, c'est une synthèse -->
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

Mettre en pratique toutes les notions du modèle de boîte (espacements, dimensions, centrage) en créant la bannière principale du blog.

## 2. Prérequis

- Avoir complété les tutoriels précédents sur le Box Model (`padding`, `margin`, `max-width`).

## Partie 1 — Synthèse Théorique

Le **Modèle de Boîte (Box Model)** est le cœur de la mise en page en CSS. 
Voici ce qu'il faut retenir de cette unité d'apprentissage :

1. **`box-sizing: border-box;`** : C'est la règle d'or universelle. Elle garantit que la taille que vous donnez à un élément (`width`) inclut ses bordures et son espace intérieur (`padding`), évitant ainsi des calculs compliqués.
2. **`padding` (Marge interne)** : Repousse le texte vers l'intérieur, pour qu'il ne touche pas les bords de son conteneur. Il fait "respirer" la boîte.
3. **`margin` (Marge externe)** : Repousse les autres boîtes vers l'extérieur. Il sépare les éléments entre eux.
4. **Centrage d'un bloc** : La combinaison absolue pour centrer une zone de texte ou un conteneur est de lui donner une largeur maximale (`max-width: 800px;`) et des marges latérales automatiques (`margin: 0 auto;`).
5. **Contenu rebelle** : Si un contenu (comme une image) dépasse d'une carte arrondie ou se déforme, on le dompte avec `overflow: hidden;` (sur le parent) et `object-fit: cover;` (sur l'image).

<svg viewBox="0 0 600 200" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="20" width="500" height="160" fill="#fef08a" rx="8" />
  <text x="300" y="45" font-family="sans-serif" font-size="14" font-weight="bold" fill="#854d0e" text-anchor="middle">Margin (Espace externe)</text>
  
  <rect x="100" y="60" width="400" height="100" fill="#bbf7d0" stroke="#16a34a" stroke-width="4" rx="4" />
  <text x="300" y="85" font-family="sans-serif" font-size="14" font-weight="bold" fill="#166534" text-anchor="middle">Padding (Espace interne)</text>
  <text x="130" y="115" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16a34a">Bordure</text>
  
  <rect x="220" y="100" width="160" height="40" fill="#bfdbfe" rx="2" />
  <text x="300" y="125" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Contenu</text>
</svg>

## Partie 2 — Pratique (Projet Fil Rouge)

Pour clore cette unité, nous allons créer la **Bannière d'accueil (Hero Header)** de notre blog, en utilisant massivement les `padding`, `margin` et `max-width`.

### 2.1. Ajouter le HTML de la bannière

Dans votre fichier `index.html`, **au-dessus** de votre `<section class="section-articles">`, ajoutez le code HTML suivant :

```html
<!-- Nouvelle bannière à insérer -->
<section class="banniere-accueil">
    <h1>Mon Blog Personnel :<br><span>Développer &amp; Partager</span></h1>
    
    <p>Découvrez mes derniers articles sur le développement web, l'architecture logicielle et les bonnes pratiques d'intégration UI/UX.</p>
</section>

<!-- L'ancienne section commence ici -->
<section class="section-articles">
...
```

### 2.2. Faire respirer la bannière

Dans votre fichier `css/pages.css`, nous allons donner un immense espace intérieur à cette bannière pour qu'elle prenne de la place à l'écran, et centrer le texte :

```css
/* css/pages.css */
.banniere-accueil {
    padding: 96px 24px;
    text-align: center;
    background: #ffffff;
    /* Petit effet de fond (grille) pour le style */
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 24px 24px;
}
```

### 2.3. Restreindre et centrer le texte (Le test ultime !)

Actuellement, si vous avez un très grand écran, le titre et le texte de la bannière s'étirent sur toute la largeur de l'écran, ce qui les rend difficiles à lire. 

Nous allons utiliser la technique de limitation `max-width` + `margin: auto` pour resserrer ces textes au milieu de la bannière. Ajoutez :

```css
/* css/pages.css */
.banniere-accueil h1 {
    max-width: 850px;
    margin: 0 auto; /* Centre le titre de 850px au milieu de la page */
    font-size: 56px;
    color: #0a2042;
}

.banniere-accueil p {
    max-width: 680px;
    margin: 24px auto 0; /* 24px en haut, Auto à gauche/droite, 0 en bas */
    font-size: 17px;
    color: #6b7280;
}
```

**Livrable :**
Vos fichiers `index.html` et `pages.css` mis à jour avec la bannière.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-226-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le haut de votre page affiche désormais une grande bannière blanche quadrillée. Le titre et le paragraphe à l'intérieur ne s'étirent pas à l'infini sur grand écran, grâce à la contrainte de `max-width`.

## Bilan Final de l'Unité

Félicitations ! Vous avez structuré la zone de contenu principal et créé le composant de carte de votre blog en maîtrisant le modèle de boîte. 
Dans la prochaine unité, vous découvrirez **Flexbox**, qui vous permettra de mettre toutes ces cartes les unes à côté des autres (en grille) et de créer la barre de navigation.