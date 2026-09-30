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

Apprendre à faire passer les éléments Flexbox sur plusieurs lignes avec la propriété `flex-wrap: wrap`.

## 2. Prérequis

Vous savez déjà configurer un conteneur Flexbox et définir sa direction (`flex-direction`).

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

    <article class="carte-article">
        <h2>PHP</h2>
        <p>Créer des applications web dynamiques.</p>
    </article>

</section>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

## Partie 1 — Théorie

### 1.1. Autoriser le retour à la ligne avec `flex-wrap`

Par défaut, Flexbox essaie de faire tenir tous les enfants sur une seule et même ligne, quitte à les écraser s'il n'y a plus de place. 

La propriété `flex-wrap` permet d'autoriser le retour à la ligne automatique lorsque l'espace horizontal (ou vertical, selon la direction) du conteneur est insuffisant.

```text
Sans flex-wrap (défaut) :
[ Conteneur étroit ]
[Carte1][Carte2][Ca] <-- Les éléments s'écrasent ou débordent

Avec flex-wrap: wrap;
[ Conteneur étroit ]
[Carte1][Carte2]
[Carte3]             <-- Les éléments passent à la ligne
```

- **`flex-wrap: nowrap;`** (par défaut) : Les éléments restent sur une seule ligne.
- **`flex-wrap: wrap;`** : Les éléments qui n'ont plus de place passent sur la ligne suivante.

## Partie 2 — Pratique

### 2.1. Manipuler le passage à la ligne

1. **Préparation :**
   Dans votre HTML, ajoutez une 5ème carte pour "MySQL".
   Dans votre CSS, ajoutez le code suivant. Notez que le conteneur a une largeur maximale (`720px`), ce qui forcera les cartes à manquer de place.
```css
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
    display: flex;
    flex-direction: row;
    width: 720px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

2. **Le Problème :**
   Si vous regardez le rendu actuel, les 5 cartes sont forcées sur la même ligne, elles s'écrasent ou dépassent du conteneur.

3. **La Solution :**
   Ajoutez `flex-wrap: wrap;` sur le sélecteur `.liste-cartes`. Constatez que les cartes qui manquent de place glissent naturellement vers le bas pour former de nouvelles lignes.

**Livrable :**

Créez un document contenant le code CSS de `.liste-cartes` avec le retour à la ligne activé.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-235-css.html' | relative_url}}"
    height="500"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le conteneur utilise `display: flex` et `flex-wrap: wrap`. Les 5 cartes s'organisent sur plusieurs lignes sans déborder horizontalement.

## Bilan

**Vous avez appris :**
- À gérer le comportement des éléments flex face au manque d'espace en utilisant `flex-wrap: wrap;`.

## Glossaire

- **`flex-wrap`** : Propriété du conteneur qui contrôle l'autorisation du passage à la ligne des enfants.
- **`wrap`** : Valeur forçant le passage à la ligne si l'espace manque.