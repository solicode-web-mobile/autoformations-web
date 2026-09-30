---
title: "Organiser l'espace dans une carte"
layout: tuto
slug: "organiser-espace-carte"
permalink: /tutos/organiser-espace-carte/
tuto_id: "T.122.223"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 3
simplified: true
data_html: |
  <div class="boite">
      Voici le contenu de ma boîte.
  </div>

data_css: |
  body {
      padding: 10px;
      font-family: sans-serif;
  }
  .boite {
      border: 4px solid #3b82f6;
      background: #f8fafc;
      /* Modifiez ces valeurs pour voir l'effet : */
      padding: 20px;
      margin: 40px;
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

Apprendre à organiser l’espace à l’intérieur et à l'extérieur des éléments avec `padding` et `margin`.

## 2. Prérequis

- Avoir compris le Box Model (`box-sizing`).

## Partie 1 — Théorie

### 1.1. Padding (intérieur) vs Margin (extérieur)

Pour éviter que tous les éléments visuels d'un site web ne soient collés les uns aux autres, on utilise deux propriétés fondamentales :

- **`padding`** (marges internes) : Crée de l'espace **à l'intérieur** de la bordure d'un élément. C'est l'espace entre le contenu (le texte) et le bord de la boîte.
- **`margin`** (marges externes) : Crée de l'espace **à l'extérieur** de la bordure d'un élément. C'est l'espace qui repousse les autres éléments autour.

On peut utiliser des raccourcis CSS pour définir l'espace sur les 4 côtés (`margin: 20px;`), sur l'axe vertical/horizontal (`margin: 20px 10px;`), ou viser un côté spécifique (`margin-bottom: 24px;`).

### 1.2. Exemple d'application

Voici comment utiliser ces propriétés en CSS (le code HTML correspondant est disponible dans l'onglet HTML de l'éditeur ci-contre) :

```css
.boite {
    border: 4px solid #3b82f6;
    
    /* Repousse le texte à 20px du bord bleu (vers l'intérieur) */
    padding: 20px; 
    
    /* Repousse les autres boîtes à 40px du bord bleu (vers l'extérieur) */
    margin: 40px; 
}
```
*(Testez cet exemple dans l'éditeur de code intégré et passez le `padding` à `0` pour voir le texte se coller à la bordure).*

## Partie 2 — Pratique (Projet Fil Rouge)

Continuons notre blog. Actuellement, le texte de notre article touche les bords de la carte, et si on ajoute une deuxième carte, elles seront collées.

### 2.1. Faire respirer la carte d'article

1. Ouvrez votre fichier `css/components.css`.
2. Repérez la classe `.carte-contenu` (qui entoure le titre et le texte de l'article) et ajoutez un `padding` pour que le texte ne touche plus les bords extérieurs :

```css
/* css/components.css */
.carte-contenu {
    padding: 20px;
}
```

3. Ajoutez une marge extérieure sous `.carte-article` pour que, lorsqu'il y aura plusieurs cartes, elles soient espacées de 24 pixels :

```css
/* css/components.css */
.carte-article {
    /* ... (règles précédentes de fond et bordure) ... */
    margin-bottom: 24px;
}
```

### 2.2. Gérer les espaces de texte

Par défaut, le navigateur ajoute ses propres marges aux titres et paragraphes. Nous allons les contrôler.
Dans `css/components.css`, ajoutez :

```css
/* css/components.css */
.carte-contenu h3 {
    margin: 0; /* Enlève la marge par défaut du titre */
}

.carte-contenu p {
    margin: 12px 0; /* 12px en haut et en bas, 0 à gauche et à droite */
}
```

### 2.3. Ajouter de l'espace global (Section)

1. Ouvrez votre fichier `css/pages.css`.
2. Repérez (ou créez) la classe `.section-articles` (qui contient la page entière) et donnez-lui un gros padding pour que la section respire par rapport au haut et au bas de l'écran :

```css
/* css/pages.css */
.section-articles {
    padding: 80px 24px;
}
```

### 2.4. Vérifier l'intégration

Affichez votre `index.html` dans le navigateur. Le texte de votre carte est maintenant joliment espacé de ses bordures, et le titre de la carte s'aligne bien avec son texte explicatif. De plus, la page globale n'est plus collée en haut de l'écran.

**Livrable :**
Vos fichiers `components.css` et `pages.css` mis à jour avec les espaces.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-223-css.html' | relative_url}}"
    height="350"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les espaces intérieurs (`padding`) et extérieurs (`margin`) sont correctement appliqués, rendant le design plus aéré et lisible.

## Bilan

**Vous avez appris :**
- La différence fondamentale entre l'espace intérieur (`padding`) et l'espace extérieur (`margin`).
- À réinitialiser et imposer vos propres espacements pour écraser les marges par défaut des navigateurs.

## Glossaire
- **padding** : Marge interne, entre le contenu et la bordure.
- **margin** : Marge externe, à l'extérieur de la bordure.