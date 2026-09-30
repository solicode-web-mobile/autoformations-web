---
title: "Maîtriser le contenu dans une carte"
layout: tuto
slug: "maitriser-contenu-carte"
permalink: /tutos/maitriser-contenu-carte/
tuto_id: "T.122.224"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 4
simplified: true
data_html: |
  <div class="carte-test">
      <img src="https://picsum.photos/400/300" alt="Image d'exemple">
  </div>

data_css: |
  body {
      padding: 20px;
  }
  .carte-test {
      width: 250px;
      height: 150px;
      border: 4px solid #ef4444;
      border-radius: 30px;
      
      /* 1. Testez de remplacer 'visible' par 'hidden' */
      overflow: visible;
  }
  .carte-test img {
      width: 100%;
      height: 100%;
      
      /* 2. Testez de remplacer 'fill' par 'cover' */
      object-fit: fill;
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

Apprendre à dompter le contenu rebelle (comme les images) pour qu'il respecte les limites et les formes de notre carte, en utilisant `overflow` et `object-fit`.

## 2. Prérequis

- Avoir structuré les espacements (`padding`, `margin`).

## Partie 1 — Théorie

### 1.1. Les deux problèmes des images

Quand on intègre une image dans une carte, deux problèmes visuels surviennent fréquemment :

1. **Les coins qui dépassent** : Si vous donnez des bords arrondis (`border-radius`) à votre carte, l'image (qui est rectangulaire) va "déborder" par-dessus les jolis coins arrondis.
   **Solution : `overflow: hidden;`** appliqué sur la carte agit comme des ciseaux et coupe tout ce qui sort de ses limites.
   
2. **L'image écrasée** : Si vous forcez une image à prendre une largeur (`width`) et une hauteur (`height`) précises, elle risque d'être déformée (étirée ou écrasée) pour rentrer dans le moule.
   **Solution : `object-fit: cover;`** appliqué sur l'image permet de la rogner proprement en préservant ses proportions (comme un fond d'écran de téléphone).

<svg viewBox="0 0 600 220" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Sans overflow hidden -->
  <g transform="translate(50, 20)">
    <rect x="0" y="0" width="180" height="150" fill="#f1f5f9" rx="24" stroke="#94a3b8" stroke-width="2"/>
    <text x="90" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">Coins qui débordent !</text>
    
    <!-- Image carrée qui dépasse des coins ronds -->
    <rect x="0" y="0" width="180" height="80" fill="#3b82f6" />
    <text x="90" y="45" font-family="sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">Image rectangulaire</text>
    
    <!-- Highlights the overlapping corners -->
    <path d="M0,24 L0,0 L24,0 A24,24 0 0,0 0,24" fill="#ef4444" />
    <path d="M156,0 L180,0 L180,24 A24,24 0 0,0 156,0" fill="#ef4444" />
  </g>
  
  <!-- Avec overflow hidden -->
  <g transform="translate(350, 20)">
    <rect x="0" y="0" width="180" height="150" fill="#f1f5f9" rx="24" stroke="#94a3b8" stroke-width="2"/>
    <!-- Clip path to simulate overflow hidden -->
    <clipPath id="card-clip">
      <rect x="0" y="0" width="180" height="150" rx="24" />
    </clipPath>
    <rect x="0" y="0" width="180" height="80" fill="#22c55e" clip-path="url(#card-clip)" />
    
    <text x="90" y="45" font-family="sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">Coupée proprement</text>
    <text x="90" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#22c55e" text-anchor="middle">overflow: hidden;</text>
  </g>
</svg>

### 1.2. Exemple d'application

Voici comment combiner ces deux règles magiques (le code HTML correspondant est dans l'onglet HTML de l'éditeur ci-contre) :

```css
.carte-test {
    border-radius: 30px;
    /* Coupe les coins carrés de l'image qui dépassent */
    overflow: hidden; 
}

.carte-test img {
    width: 100%;
    height: 100%;
    /* Empêche l'image d'être écrasée */
    object-fit: cover; 
}
```
*(Dans l'éditeur intégré, passez `overflow` à `hidden` pour voir les coins de l'image se faire couper, puis passez `object-fit` à `cover` pour voir l'image retrouver de belles proportions sans être écrasée).*

## Partie 2 — Pratique (Projet Fil Rouge)

Un article de blog sans image, c'est un peu triste. Ajoutons la miniature de notre article.

### 2.1. Ajouter l'image au HTML

1. Ouvrez `index.html`.
2. Juste **au-dessus** de la `<div class="carte-contenu">`, ajoutez le bloc de l'image (enveloppée dans un lien pour qu'elle soit cliquable plus tard) :

```html
<div class="carte-article">
    
    <!-- Nouveau bloc image -->
    <a href="#" class="carte-image">
        <img src="images/article-example.png" alt="Code source">
    </a>
    
    <!-- Bloc de contenu déjà existant -->
    <div class="carte-contenu">
        <h3>Comment bien débuter avec Tailwind CSS ?</h3>
        <p>Découvrez les concepts fondamentaux de Tailwind CSS.</p>
    </div>
    
</div>
```
*(Note : si vous n'avez pas d'image locale, vous pouvez utiliser l'URL `https://picsum.photos/400/300` pour le test).*

### 2.2. Arrondir la carte et couper les dépassements

1. Ouvrez `css/components.css`.
2. Repérez la règle `.carte-article` existante.
3. Ajoutez-y un `border-radius` pour la rendre plus moderne, et SURTOUT `overflow: hidden;` pour que l'image ne vienne pas casser ces arrondis en haut de la carte :

```css
/* css/components.css */
.carte-article {
    width: 300px;
    background: #f9fafb;
    border: 2px solid #e5e7eb;
    margin-bottom: 24px;
    
    /* Nouvelles règles : */
    border-radius: 16px;
    overflow: hidden;
}
```

### 2.3. Cadrer l'image parfaitement

1. Toujours dans `components.css`, ajoutez les styles pour l'image.
2. On lui donne une hauteur fixe de `220px` et on utilise `object-fit: cover` pour garantir qu'elle remplisse cet espace sans jamais être déformée :

```css
/* css/components.css */
.carte-image {
    display: block; /* Retire le petit espace parasite sous les liens */
}

.carte-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}
```

**Livrable :**
Vos fichiers `index.html` et `components.css` contenant l'image cadrée et la carte arrondie.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-224-css.html' | relative_url}}"
    height="450"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
La carte possède de beaux bords arrondis, et l'image au sommet épouse parfaitement cette forme sans être déformée ni écrasée.

## Bilan

**Vous avez appris :**
- À cacher tout ce qui dépasse d'une boîte avec `overflow: hidden`.
- À forcer une image à remplir une zone sans se déformer grâce à `object-fit: cover`.

## Glossaire
- **overflow** : Contrôle ce qui se passe quand le contenu est trop grand pour sa boîte.
- **object-fit** : Indique comment le contenu d'une balise (comme `<img>`) doit s'adapter à la largeur/hauteur définie.