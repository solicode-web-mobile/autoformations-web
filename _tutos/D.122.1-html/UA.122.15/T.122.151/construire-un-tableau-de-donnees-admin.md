---
title: "Construire un tableau de données (Admin)"
layout: tuto
slug: "construire-un-tableau-de-donnees-admin"
permalink: /tutos/construire-un-tableau-de-donnees-admin/
tuto_id: "T.122.151"
type: "classique"
version: "normal"
ua: "UA.122.14"
nav_order: 1
data_html: ""
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Catégories - Admin Mon Blog</title>
      <link rel="stylesheet" href="admin-style.css">
  </head>
  <body>

      <aside class="barre-laterale">
          <div class="en-tete-logo">
              <div class="logo-icone">B.</div>
              <div>
                  <strong>Admin</strong>
                  <div class="texte-aide">Mon Blog</div>
              </div>
          </div>

          <nav class="menu-navigation">
              <a href="admin-dashboard.html" class="lien-menu">Tableau de bord</a>
              <a href="admin-articles.html" class="lien-menu">Articles</a>
              <a href="admin-categories.html" class="lien-menu actif">Catégories</a>
          </nav>
      </aside>

      <div class="zone-principale">

          <header class="en-tete-haut">
              <div class="barre-recherche">
                  <input type="text" placeholder="Rechercher...">
              </div>

              <div class="profil-admin">
                  <a href="public-index.html" class="bouton-retour">Voir le site</a>
                  <img src="images/author.jpg" alt="Profil" class="image-profil">
                  <span>Jean D.</span>
              </div>
          </header>

          <main class="contenu-page">

              <div class="entete-formulaire">
                  <div>
                      <h1 class="titre-page">Gestion des Catégories</h1>
                      <p class="texte-aide">Organisez le contenu de votre blog.</p>
                  </div>

                  <a href="admin-categorie-form.html" class="bouton-enregistrer">
                      Nouvelle Catégorie
                  </a>
              </div>

              <div>
                  <input
                      type="text"
                      class="champ-texte"
                      placeholder="Rechercher une catégorie..."
                  >
              </div>

              <!-- Le tableau sera ajouté pendant le tutoriel. -->

          </main>
      </div>

  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Construire un tableau HTML pour afficher les catégories dans une page d’administration.

Vous allez apprendre à :

- créer un tableau avec `table` ;
- créer son en-tête avec `thead` ;
- créer les lignes avec `tr` ;
- créer les cellules d'en-tête avec `th` ;
- créer les cellules de données avec `td` ;
- placer les données dans `tbody`.

## 2. Prérequis

Vous devez savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser des liens et des images ;
- utiliser les classes HTML.

## Données de départ

La page d’administration existe déjà.

Elle contient une zone **Gestion des Catégories**.

Le tableau des catégories n'est pas encore présent.

### HTML

Le code de départ est fourni dans `data_html`.

Vous allez ajouter le tableau dans la zone principale de la page.

### CSS

La page utilise déjà le fichier :

```html
<link rel="stylesheet" href="admin-style.css">
```

Aucune règle CSS n'est à créer dans ce tutoriel.

### JavaScript

Aucun JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. La balise `table`

La balise `table` représente un tableau de données.

Exemple :

```html
<table>
    ...
</table>
```

Le contenu du tableau est placé entre `<table>` et `</table>`.

### 1.2. Les lignes avec `tr`

La balise `tr` représente une ligne du tableau.

Exemple :

```html
<tr>
    ...
</tr>
```

Un tableau contient plusieurs lignes.

### 1.3. Les cellules d'en-tête avec `th`

La balise `th` représente une cellule d'en-tête.

Elle contient le nom d'une colonne.

Exemple :

```html
<th>Nom</th>
```

Dans un tableau de catégories, les en-têtes peuvent être :

```text
Nom de la catégorie
Couleur
Nombre d'articles
Actions
```

### 1.4. Les cellules de données avec `td`

La balise `td` représente une cellule contenant une donnée.

Exemple :

```html
<td>Développement</td>
```

Une ligne peut contenir plusieurs cellules :

```html
<tr>
    <td>Développement</td>
    <td>Bleu</td>
    <td>24 articles</td>
    <td>Éditer</td>
</tr>
```

### 1.5. L'en-tête avec `thead`

La balise `thead` regroupe les lignes qui présentent les colonnes du tableau.

Exemple :

```html
<thead>
    <tr>
        <th>Nom</th>
        <th>Couleur</th>
    </tr>
</thead>
```

### 1.6. Les données avec `tbody`

La balise `tbody` regroupe les lignes contenant les données.

Exemple :

```html
<tbody>
    <tr>
        <td>Développement</td>
        <td>Bleu</td>
    </tr>
</tbody>
```

### 1.7. À retenir

Un tableau de données simple utilise cette structure :

```text
table
├── thead
│   └── tr
│       ├── th
│       ├── th
│       └── ...
└── tbody
    ├── tr
    │   ├── td
    │   ├── td
    │   └── ...
    └── tr
        ├── td
        ├── td
        └── ...
```

## Partie 2 — Pratique

### 2.1. Créer le tableau

#### Étape 1 — Ajouter la balise `table`

Dans la zone principale de la page, à l'endroit indiqué dans le code de départ, ajoutez :

```html
<table>
</table>
```

La balise `table` contient maintenant votre tableau.

#### Étape 2 — Ajouter l'en-tête

Dans le tableau, ajoutez une balise `thead`.

Ajoutez une ligne avec `tr`.

Ajoutez quatre cellules `th`.

Utilisez les titres suivants :

```text
Nom de la catégorie
Couleur
Nombre d'articles
Actions
```

La structure obtenue est de cette forme :

```html
<table>
    <thead>
        <tr>
            <th>Nom de la catégorie</th>
            <th>Couleur</th>
            <th>Nombre d'articles</th>
            <th>Actions</th>
        </tr>
    </thead>
</table>
```

#### Étape 3 — Ajouter les données

Sous `thead`, ajoutez `tbody`.

Dans `tbody`, créez une ligne pour chaque catégorie.

Ajoutez les trois catégories suivantes :

```text
Développement
Design UI/UX
Productivité
```

Utilisez les données disponibles dans le contexte de la page :

```text
Développement — Bleu — 24 articles
Design UI/UX — Rose — 12 articles
Productivité — Vert — 6 articles
```

Chaque valeur doit être placée dans une cellule `td`.

#### Étape 4 — Ajouter les actions

Dans la colonne **Actions**, ajoutez un lien **Éditer** et un bouton **Supprimer** pour chaque catégorie.

La structure d'une cellule d'action peut être :

```html
<td>
    <div class="actions-table">
        <a href="admin-categorie-form.html" class="bouton-action">Éditer</a>
        <button class="bouton-action">Supprimer</button>
    </div>
</td>
```

Reproduisez cette structure pour les trois lignes.

#### Étape 5 — Vérifier la structure

Votre tableau doit maintenant respecter cette organisation :

```html
<table>
    <thead>
        <tr>
            ...
        </tr>
    </thead>

    <tbody>
        <tr>
            ...
        </tr>

        <tr>
            ...
        </tr>

        <tr>
            ...
        </tr>
    </tbody>
</table>
```

### 2.2. Exercice individuel

À partir de la même page, ajoutez une quatrième catégorie :

```text
Nom : Développement Web
Couleur : Orange
Nombre d'articles : 18 articles
```

Ajoutez également les deux actions :

```text
Éditer
Supprimer
```

Respectez la structure du tableau déjà construite.

**Travail à faire :**

Ajouter la nouvelle catégorie dans une nouvelle ligne du `tbody`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant votre réponse et une capture du tableau obtenu.

**Résultat attendu :**

Le tableau affiche les catégories dans des lignes distinctes et possède quatre colonnes.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/html/tuto-151-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le tableau contient correctement `table`, `thead`, `tbody`, `tr`, `th` et `td`.

## Bilan

**Vous avez réalisé :**

Un tableau HTML pour afficher les catégories d'une page d'administration.

**Vous savez maintenant :**

- créer un tableau avec `table` ;
- séparer l'en-tête avec `thead` ;
- regrouper les données avec `tbody` ;
- créer des lignes avec `tr` ;
- créer des en-têtes avec `th` ;
- afficher des données avec `td`.

## Glossaire

- **Tableau** : structure HTML utilisée pour présenter des données en lignes et en colonnes.
- **`table`** : balise qui contient le tableau.
- **`thead`** : partie du tableau qui contient l'en-tête.
- **`tbody`** : partie du tableau qui contient les données.
- **`tr`** : ligne du tableau.
- **`th`** : cellule d'en-tête.
- **`td`** : cellule contenant une donnée.