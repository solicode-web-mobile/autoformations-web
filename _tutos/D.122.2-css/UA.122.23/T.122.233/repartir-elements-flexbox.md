---
title: "Répartir les éléments"
layout: tuto
slug: "repartir-elements-flexbox"
permalink: /tutos/repartir-elements-flexbox/
tuto_id: "T.122.233"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 3
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Répartition des cartes</title>
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

Apprendre à répartir les éléments sur l’axe principal d’un conteneur Flexbox en utilisant la propriété `justify-content`.

## 2. Prérequis

Vous savez déjà configurer un conteneur Flexbox (`display: flex`) et choisir sa direction principale (`flex-direction`).

## Données de départ

*(Les données de départ sont chargées automatiquement dans l'éditeur de code de l'interface).*

### HTML

```html
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
```


## Partie 1 — Théorie

### 1.1. Répartir avec `justify-content`

La propriété `justify-content` (à appliquer sur le conteneur parent) permet d'aligner ou de répartir les enfants flex le long de **l'axe principal** (défini par `flex-direction`).

Voici les principales valeurs de répartition :

<svg viewBox="0 0 600 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <rect id="card" width="60" height="40" rx="6" fill="#3b82f6" />
    <rect id="container" width="500" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
  </defs>

  <!-- flex-start -->
  <g transform="translate(50, 10)">
    <text x="0" y="15" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-start (défaut)</text>
    <use href="#container" x="0" y="25" />
    <use href="#card" x="10" y="35" />
    <use href="#card" x="80" y="35" />
    <use href="#card" x="150" y="35" />
  </g>

  <!-- center -->
  <g transform="translate(50, 110)">
    <text x="0" y="15" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">center</text>
    <use href="#container" x="0" y="25" />
    <use href="#card" x="145" y="35" />
    <use href="#card" x="215" y="35" />
    <use href="#card" x="285" y="35" />
  </g>

  <!-- space-between -->
  <g transform="translate(50, 210)">
    <text x="0" y="15" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">space-between</text>
    <use href="#container" x="0" y="25" />
    <use href="#card" x="10" y="35" />
    <use href="#card" x="220" y="35" />
    <use href="#card" x="430" y="35" />
  </g>
</svg>

- **`flex-start`** : Aligne tous les éléments au début du conteneur.
- **`center`** : Regroupe tous les éléments au centre du conteneur.
- **`space-between`** : Le premier élément est collé au début, le dernier est collé à la fin, et l'espace restant est réparti de manière égale entre les éléments centraux.

*(Note : Si l'axe principal est `column`, ces règles s'appliqueront verticalement de haut en bas.)*

## Partie 2 — Pratique

### 2.1. Tester les répartitions sur une ligne de cartes

1. **Préparation du terrain :**
   Ajoutez le CSS de base pour styliser vos 3 cartes et configurer votre conteneur avec Flexbox (direction horizontale) :
   
```css
.carte-article {
    width: 180px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.liste-cartes {
    display: flex;
    flex-direction: row;
    width: 800px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

2. **Expérimentez les valeurs :**
   - Ajoutez `justify-content: flex-start;` à `.liste-cartes`. Les cartes se collent à gauche.
   - Remplacez par `justify-content: center;`. Les cartes se centrent.
   - Changez temporairement `flex-direction` en `column` pour voir l'impact de `center` sur l'axe vertical, puis revenez à `row`.

3. **Résultat attendu (`space-between`) :**
   - Modifiez la valeur finale pour obtenir : `justify-content: space-between;`. Vos trois cartes doivent occuper toute la largeur disponible de manière équilibrée.

**Livrable :**

Créez un document avec le code CSS complet de `.liste-cartes` utilisant `justify-content: space-between;`.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-233-css.html' | relative_url}}"
    height="350"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le conteneur utilise `display: flex`, `flex-direction: row`, et `justify-content: space-between`. Les éléments sont répartis horizontalement.

## Bilan

**Vous avez appris :**
- À utiliser `justify-content` pour répartir l'espace disponible entre les éléments flex sur l'axe principal.

## Glossaire

- **`justify-content`** : Propriété qui gère l'alignement et la répartition des éléments sur l'axe principal (axe de lecture).
- **`space-between`** : Valeur poussant le premier élément au début et le dernier à la fin, répartissant le vide au centre.