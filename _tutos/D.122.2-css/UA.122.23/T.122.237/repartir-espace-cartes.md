---
title: "Répartir l’espace entre les cartes"
layout: tuto
slug: "repartir-espace-cartes"
permalink: /tutos/repartir-espace-cartes/
tuto_id: "T.122.237"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 7
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes flexibles</title>
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
              display: flex;
              flex-direction: row;
              gap: 24px;
              width: 900px;
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

          <article class="carte-article carte-principale">
              <h2>JavaScript</h2>
              <p>Ajouter des comportements à une page.</p>
          </article>

      </section>

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

Apprendre à permettre aux éléments flex de partager intelligemment l’espace disponible dans le conteneur en utilisant la propriété `flex` (raccourci pour `flex-grow`).

## 2. Prérequis

Vous savez déjà :
- utiliser `display: flex` et `gap`.
- comprendre le rôle du conteneur et des éléments flex.



## Partie 1 — Théorie

### 1.1. Grandir pour remplir l'espace

Par défaut, les enfants flex n'occupent que la largeur nécessaire à leur contenu (ou la largeur qu'on leur a fixée), laissant parfois un grand espace vide à la fin du conteneur.

La propriété `flex-grow` (appliquée sur les **enfants**) leur donne l'autorisation de "grandir" pour manger cet espace restant. Plus simplement, on utilise souvent le raccourci `flex`.

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- flex: 1 partout -->
  <g transform="translate(10, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">Toutes les cartes avec flex: 1</text>
    <rect x="0" y="30" width="580" height="60" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="180" height="40" rx="4" fill="#3b82f6"/>
    <text x="100" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1 (1 part)</text>
    <rect x="200" y="40" width="180" height="40" rx="4" fill="#3b82f6"/>
    <text x="290" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2 (1 part)</text>
    <rect x="390" y="40" width="180" height="40" rx="4" fill="#3b82f6"/>
    <text x="480" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3 (1 part)</text>
  </g>
  
  <!-- flex: 2 au milieu -->
  <g transform="translate(10, 120)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">La carte 2 avec flex: 2</text>
    <rect x="0" y="30" width="580" height="60" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="10" y="40" width="135" height="40" rx="4" fill="#3b82f6"/>
    <text x="77" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 1 (1 part)</text>
    <rect x="155" y="40" width="270" height="40" rx="4" fill="#3b82f6"/>
    <text x="290" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 2 (2 parts)</text>
    <rect x="435" y="40" width="135" height="40" rx="4" fill="#3b82f6"/>
    <text x="502" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Carte 3 (1 part)</text>
  </g>
</svg>

- **`flex: 0;`** (défaut) : L'élément garde sa taille de base, il ne s'étire pas.
- **`flex: 1;`** : L'élément s'étire pour prendre 1 part de l'espace disponible.
- **`flex: 2;`** : L'élément s'étire pour prendre 2 parts de l'espace disponible.

**Exemple d'utilisation dans le code CSS :**
```css
.carte-article {
    /* La carte va grandir pour occuper l'espace vide restant */
    flex: 1; 
}

.carte-principale {
    /* Cette carte prendra 2 fois plus de place que les autres */
    flex: 2;
}
```

## Partie 2 — Pratique (Projet Fil Rouge)

### 2.1. Ajouter la section des articles

1. **Le HTML :** Ouvrez votre fichier `index.html` et ajoutez ce bloc *juste avant* le pied de page (`<footer>`) :

```html
    <section id="articles" class="section-articles">
        <div class="conteneur-articles">
            <div class="entete-liste-articles">
                <div>
                    <h2>Dernières publications</h2>
                    <p>Les articles les plus récents de la communauté.</p>
                </div>
                <a href="#" class="lien-voir-tout">Explorer tout</a>
            </div>

            <div class="grille-articles">
                <div class="carte-article">
                    <span class="etiquette-categorie bleu">Développement</span>
                    <div class="carte-contenu">
                        <h3><a href="#">Comment bien débuter avec Tailwind CSS en 2026 ?</a></h3>
                        <p>Découvrez les concepts fondamentaux de Tailwind CSS et pourquoi cette approche utilitaire est devenue le standard de l'industrie.</p>
                        <div class="carte-meta"><span>14 Fév 2026</span><span>5 min</span></div>
                    </div>
                </div>

                <div class="carte-article">
                    <span class="etiquette-categorie rose">UI / UX</span>
                    <div class="carte-contenu">
                        <h3><a href="#">L'importance des micro-interactions</a></h3>
                        <p>Une interface belle n'est pas suffisante. Comprendre comment animer de petites actions peut transformer l'expérience utilisateur.</p>
                        <div class="carte-meta"><span>10 Fév 2026</span><span>3 min</span></div>
                    </div>
                </div>

                <div class="carte-article">
                    <span class="etiquette-categorie vert">Management</span>
                    <div class="carte-contenu">
                        <h3><a href="#">Gérer une équipe de développeurs en Full Remote</a></h3>
                        <p>Les méthodes agiles et les rituels essentiels pour maintenir la cohésion de groupe et la productivité lorsque tous les membres sont distribués.</p>
                        <div class="carte-meta"><span>05 Fév 2026</span><span>8 min</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

2. **Le CSS :** 
   - Dans `css/pages.css`, ajoutez les styles de conteneur :
```css
.section-articles { padding: 80px 24px; }
.conteneur-articles { max-width: 1200px; margin: 0 auto; }
.entete-liste-articles { margin-bottom: 32px; display: flex; justify-content: space-between; align-items: flex-end; }
.entete-liste-articles h2 { margin: 0; color: #111827; font-family: Georgia, serif; font-size: 32px; }
.entete-liste-articles p { margin: 8px 0 0; color: #6b7280; }
.lien-voir-tout { color: #2673e8; font-size: 14px; font-weight: 600; }
.grille-articles { display: flex; gap: 32px; }
```
   - Dans `css/components.css`, ajoutez les styles cosmétiques de la carte (sans la propriété `flex` pour le moment) :
```css
.carte-article { overflow: hidden; background: white; border: 1px solid #e5e7eb; border-radius: 16px; margin-bottom: 24px; }
.carte-contenu { padding: 20px; }
.carte-contenu h3 { margin: 0; color: #111827; font-family: Georgia, serif; font-size: 20px; line-height: 1.4; }
.carte-contenu p { margin: 12px 0; color: #6b7280; font-size: 14px; line-height: 1.7; }
.carte-meta { margin-top: 20px; padding-top: 16px; color: #9ca3af; font-size: 12px; border-top: 1px solid #f3f4f6; }
.etiquette-categorie { display: inline-block; margin: 16px 16px 0; padding: 6px 10px; font-size: 11px; font-weight: 700; background: #f0f6ff; border-radius: 99px; }
.etiquette-categorie.bleu { color: #1c5bba; }
.etiquette-categorie.rose { color: #db2777; background: #fdf2f8; }
.etiquette-categorie.vert { color: #059669; background: #ecfdf5; }
```

### 2.2. Répartir l'espace entre les cartes

1. **Testez l'affichage :** Regardez le résultat. Grâce à `.grille-articles { display: flex; gap: 32px; }`, vos 3 cartes sont en ligne. Cependant, elles n'occupent que la place de leur texte, laissant un grand vide sur la droite de la page !
2. **Autorisez la croissance :** Ouvrez `css/components.css` et ciblez la règle `.carte-article`.
3. Ajoutez la propriété `flex: 1;`.
4. Constatez le résultat : vos 3 cartes s'étirent automatiquement et équitablement pour se partager parfaitement toute la largeur disponible de la page.

**Livrable :**

Votre fichier `css/components.css` mis à jour avec `flex: 1;` sur la classe `.carte-article`.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-237-css.html' | relative_url}}"
    height="500"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les trois cartes articles partagent parfaitement l'espace disponible en largeur grâce à l'utilisation de `flex: 1`.

## Bilan

**Vous avez appris :**
- À étirer des éléments pour occuper l'espace vide avec `flex` (ou `flex-grow`).
- À distribuer l'espace proportionnellement en attribuant des parts différentes (`flex: 1`, `flex: 2`, etc.).

## Glossaire

- **`flex-grow`** : Autorise un élément à grandir pour occuper l'espace restant.
- **`flex`** : Raccourci CSS très courant pour configurer le comportement flexible (dont la croissance).
- **Part** : Quantité proportionnelle d'espace qu'un élément peut réclamer.