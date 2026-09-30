---
title: "Choisir la direction des éléments"
layout: tuto
slug: "direction-elements-flexbox"
permalink: /tutos/direction-elements-flexbox/
tuto_id: "T.122.232"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 2
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Direction des cartes</title>
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

data_css: |
  .liste-cartes {
      display: flex;
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

Apprendre à choisir la direction des éléments dans un conteneur Flexbox avec `flex-direction`.

## 2. Prérequis

Vous savez déjà créer un conteneur Flexbox avec `display: flex`.



## Partie 1 — Théorie

### 1.1. L'axe principal avec `flex-direction`

Par défaut, Flexbox aligne les éléments horizontalement. La propriété `flex-direction` (à appliquer sur le conteneur) permet de changer ce comportement.

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- row -->
  <g transform="translate(10, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-direction: row</text>
    <rect x="0" y="30" width="300" height="70" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <text x="50" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1</text>
    <rect x="100" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <text x="140" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2</text>
    <rect x="190" y="40" width="80" height="50" rx="4" fill="#3b82f6"/>
    <text x="230" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3</text>
  </g>
  
  <!-- column -->
  <g transform="translate(350, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">flex-direction: column</text>
    <rect x="0" y="30" width="120" height="200" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="100" height="40" rx="4" fill="#3b82f6"/>
    <text x="60" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1</text>
    <rect x="10" y="90" width="100" height="40" rx="4" fill="#3b82f6"/>
    <text x="60" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2</text>
    <rect x="10" y="140" width="100" height="40" rx="4" fill="#3b82f6"/>
    <text x="60" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3</text>
  </g>
</svg>

- `flex-direction: row;` (par défaut) : Organise les éléments sur une **ligne** (horizontalement, de gauche à droite).
- `flex-direction: column;` : Organise les éléments dans une **colonne** (verticalement, de haut en bas).

**Exemples d'utilisation dans le code CSS :**
```css
.liste-cartes-colonne {
    display: flex;
    flex-direction: column; /* Empile les éléments de haut en bas */
}

.liste-cartes-ligne {
    display: flex;
    flex-direction: row; /* Aligne les éléments de gauche à droite */
}
```

## Partie 2 — Pratique (Projet Fil Rouge)

### 2.1. Ajout du Pied de page

1. **Le HTML :** Ouvrez votre fichier `index.html` et ajoutez le code suivant tout en bas, juste avant la balise fermante `</body>`.

```html
    <footer class="pied-de-page">
        <div class="conteneur-pied-de-page">
            <div class="colonne-pied-de-page">
                <h2>Mon Blog</h2>
                <p>Partager des connaissances, des tutoriels et des découvertes sur le développement web.</p>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Catégories</a></li>
                    <li><a href="#">À propos</a></li>
                </ul>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Contact</h2>
                <p>Retrouvez les nouveaux articles chaque semaine.</p>
            </div>
        </div>
        <div class="bas-pied-de-page">
            <p>&copy; 2026 Mon Blog Personnel.</p>
        </div>
    </footer>
```

2. **Le CSS :** Ouvrez votre fichier `css/layout.css` et ajoutez-y les styles suivants pour mettre en forme le pied de page (sans Flexbox pour le moment).

```css
.pied-de-page { margin-top: 80px; padding: 64px 24px 24px; background: white; border-top: 1px solid #e5e7eb; }
.colonne-pied-de-page h2 { margin: 0 0 20px; color: #111827; font-size: 16px; text-transform: uppercase; }
.colonne-pied-de-page p, .colonne-pied-de-page a { color: #6b7280; font-size: 14px; }
.colonne-pied-de-page li { margin-bottom: 12px; }
.bas-pied-de-page { max-width: 1200px; margin: 64px auto 0; padding-top: 24px; text-align: center; border-top: 1px solid #e5e7eb; }
.bas-pied-de-page p { margin: 0; color: #9ca3af; font-size: 12px; }
```

### 2.2. Manipuler la direction

1. **Testez sans Flexbox :** Actualisez votre page. Les 3 colonnes du pied de page s'empilent verticalement (comportement par défaut des blocs HTML).
2. **Activez Flexbox :** Dans `css/layout.css`, ciblez `.conteneur-pied-de-page` et ajoutez `display: flex;`. Actualisez : les colonnes se placent désormais en ligne (direction `row` par défaut).
3. **Changez la direction :** Ajoutez `flex-direction: column;` à ce même conteneur. Observez que les colonnes se ré-empilent, mais cette fois elles sont contrôlées par Flexbox (utile pour la future version mobile du blog !).
4. **Conclusion :** Pour notre maquette sur ordinateur, nous voulons qu'elles soient en ligne. Remplacez `flex-direction: column;` par `flex-direction: row;` (ou supprimez simplement la propriété car c'est le comportement par défaut).

**Livrable :**

Votre fichier `css/layout.css` mis à jour, avec le conteneur du pied de page utilisant Flexbox en direction horizontale.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-232-css.html' | relative_url}}"
    height="350"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Le pied de page s'affiche avec ses 3 colonnes alignées horizontalement.

## Bilan

**Vous avez appris :**
- À utiliser `flex-direction` pour définir l'axe d'alignement principal (`row` ou `column`).

## Glossaire

- **`flex-direction`** : Propriété du conteneur définissant l'axe principal (direction des éléments).
- **`row`** : Direction en ligne (horizontal).
- **`column`** : Direction en colonne (vertical).