---
title: "Construire une carte d'article homogène"
layout: tuto
slug: "carte-article-homogene"
permalink: /tutos/carte-article-homogene/
tuto_id: "T.122.225"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 5
simplified: true
data_html: |
  <div class="carte">Carte 1</div>
  <div class="carte">Carte 2</div>
  <div class="carte">Carte 3</div>

data_css: |
  body {
      padding: 20px;
      background: #f3f4f6;
  }
  .carte {
      background: white;
      border: 1px solid #d1d5db;
      padding: 20px;
      margin-bottom: 15px;
      border-radius: 8px;
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

Créer un véritable "Composant" homogène et réutilisable, en finalisant son design et en l'appliquant à plusieurs éléments simultanément.

## 2. Prérequis

- Avoir structuré la carte (dimensions, overflow, espaces).

## Partie 1 — Théorie

### 1.1. Le concept de composant réutilisable

En CSS moderne, on ne style pas les éléments un par un. On crée des "composants" visuels (comme notre classe `.carte-article`) dont on regroupe toutes les propriétés (bordures, fonds, dimensions).

L'avantage principal d'une classe CSS (contrairement à un identifiant `id`), c'est qu'elle peut être appliquée à une infinité d'éléments dans le HTML. Tous ces éléments partageront exactement la même base visuelle, garantissant ainsi l'**homogénéité** du design de votre site.

<svg viewBox="0 0 600 200" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Blueprint/Class -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="140" height="120" fill="none" stroke="#3b82f6" stroke-width="3" stroke-dasharray="6,6" rx="8" />
    <text x="70" y="55" font-family="sans-serif" font-size="16" font-weight="bold" fill="#3b82f6" text-anchor="middle">Classe CSS</text>
    <text x="70" y="80" font-family="sans-serif" font-size="14" font-family="monospace" fill="#3b82f6" text-anchor="middle">.carte-article</text>
  </g>
  
  <!-- Arrows -->
  <path d="M180,80 L230,40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M180,80 L230,80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M180,80 L230,120" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  
  <!-- Instances -->
  <g transform="translate(250, 10)">
    <rect x="0" y="0" width="100" height="80" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2" rx="6" />
    <rect x="10" y="10" width="80" height="30" fill="#94a3b8" rx="2" />
    <rect x="10" y="50" width="60" height="8" fill="#cbd5e1" />
  </g>
  
  <g transform="translate(370, 50)">
    <rect x="0" y="0" width="100" height="80" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2" rx="6" />
    <rect x="10" y="10" width="80" height="30" fill="#94a3b8" rx="2" />
    <rect x="10" y="50" width="60" height="8" fill="#cbd5e1" />
  </g>
  
  <g transform="translate(490, 90)">
    <rect x="0" y="0" width="100" height="80" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2" rx="6" />
    <rect x="10" y="10" width="80" height="30" fill="#94a3b8" rx="2" />
    <rect x="10" y="50" width="60" height="8" fill="#cbd5e1" />
  </g>
  
  <text x="420" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">3 cartes HTML, 1 seule classe CSS !</text>
  
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
    </marker>
  </defs>
</svg>

### 1.2. Contraste et Fond

Pour qu'un composant ressorte bien à l'écran, on joue généralement avec les couleurs de fond. Si le site a un fond légèrement gris (`#f9fafb`), donner un fond blanc pur (`white`) à la carte la fera ressortir naturellement.

```css
body {
    background: #f9fafb; /* Gris très clair */
}

.composant {
    background: white; /* Blanc pur */
    border: 1px solid #e5e7eb;
}
```
*(Le code de l'éditeur intégré illustre parfaitement ce principe avec 3 cartes identiques qui se détachent du fond).*

## Partie 2 — Pratique (Projet Fil Rouge)

Il est temps de donner la touche finale à notre carte d'article et d'en créer plusieurs !

### 2.1. Les finitions visuelles de la carte

1. Ouvrez `css/global.css`. Assurez-vous que le fond du site (`body`) n'est pas blanc, mais gris très clair :

```css
/* css/global.css */
body {
    margin: 0;
    background: #f9fafb;
    font-family: Arial, sans-serif;
    color: #1f2937;
}
```

2. Dans `css/components.css`, assurez-vous que la `.carte-article` possède bien un fond blanc et sa fine bordure :

```css
/* css/components.css */
.carte-article {
    width: 300px;
    background: white; /* Contraste avec le body */
    border: 1px solid #e5e7eb;
    margin-bottom: 24px;
    border-radius: 16px;
    overflow: hidden;
}
```

### 2.2. Ajouter les métadonnées (HTML)

1. Dans `index.html`, nous allons ajouter deux petits détails à notre carte : une **étiquette de catégorie** (sous l'image) et des **métadonnées** (date/temps de lecture) à la fin. Modifiez votre carte existante :

```html
<div class="carte-article">
    <a href="#" class="carte-image">
        <img src="images/article-example.png" alt="Code source">
    </a>
    
    <!-- Nouvelle étiquette (entre l'image et le contenu) -->
    <span class="etiquette-categorie bleu">Développement</span>
    
    <div class="carte-contenu">
        <h3>Comment bien débuter avec Tailwind CSS en 2026 ?</h3>
        <p>Découvrez les concepts fondamentaux de Tailwind CSS.</p>
        
        <!-- Nouvelles métadonnées (fin du contenu) -->
        <div class="carte-meta">
            <span>14 Fév 2026</span>
            <span>- 5 min de lecture</span>
        </div>
    </div>
</div>
```

### 2.3. Styler les métadonnées

Dans `css/components.css`, ajoutez les styles pour ces deux nouveaux petits éléments :

```css
/* css/components.css */
.etiquette-categorie {
    display: inline-block;
    margin: 16px 16px 0;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 700;
    border-radius: 99px;
    background: #f0f6ff;
    color: #1c5bba;
}

.carte-meta {
    margin-top: 20px;
    padding-top: 16px;
    font-size: 12px;
    color: #9ca3af;
    border-top: 1px solid #f3f4f6;
}
```

### 2.4. Le pouvoir du composant : la duplication !

Maintenant que votre composant `.carte-article` est absolument parfait, copiez-collez l'intégralité du bloc `<div class="carte-article"> ... </div>` **deux fois** dans votre HTML (dans le `.conteneur-articles`) pour avoir 3 articles au total.

Modifiez les images, les titres et les catégories des nouvelles cartes si vous le souhaitez.

**Livrable :**
Vos fichiers HTML et CSS. Votre `index.html` doit maintenant contenir 3 cartes d'articles identiques dans leur structure.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-225-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les 3 cartes s'affichent les unes sous les autres. Elles ressortent parfaitement du fond gris et possèdent toutes une étiquette et une date.

## Bilan

**Vous avez appris :**
- À finaliser un composant visuel complet avec des bordures et des contrastes de fond.
- À réutiliser une classe CSS sur plusieurs éléments pour garantir l'homogénéité du design.

## Glossaire
- **Composant** : Bloc visuel autonome et réutilisable d'une interface (ex: bouton, carte).
- **Homogénéité** : Fait de conserver une apparence strictement identique d'un élément à l'autre.