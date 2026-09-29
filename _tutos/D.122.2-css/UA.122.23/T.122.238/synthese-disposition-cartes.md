---
title: "Projet de synthèse — Disposition des cartes"
layout: tuto
slug: "synthese-disposition-cartes"
permalink: /tutos/synthese-disposition-cartes/
tuto_id: "T.122.238"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 8

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Derniers articles</title>
  </head>
  <body>

      <main class="page-articles">

          <h1>Derniers articles</h1>

          <section class="liste-cartes">

              <article class="carte-article">
                  <h2>HTML</h2>
                  <p>Créer la structure d'une page web.</p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>CSS</h2>
                  <p>Mettre en forme une page web.</p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>JavaScript</h2>
                  <p>Ajouter des comportements à une page.</p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>PHP</h2>
                  <p>Créer des applications web dynamiques.</p>
                  <a href="#">Lire l'article</a>
              </article>

          </section>

      </main>

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

Réaliser la disposition d'une liste de cartes avec Flexbox.

Vous allez organiser les cartes sur une ligne, les aligner, les espacer et permettre leur retour à la ligne.

## 2. Prérequis

Vous savez déjà :

- créer un conteneur Flexbox ;
- utiliser `display: flex` ;
- choisir une direction avec `flex-direction` ;
- utiliser `justify-content` ;
- utiliser `align-items` ;
- utiliser `flex-wrap` ;
- utiliser `gap` ;
- utiliser `flex` et `flex-grow`.

Vous avez déjà réalisé des cartes d'articles dans l'UA.122.22.

## Données de départ

### HTML

```html
<main class="page-articles">

    <h1>Derniers articles</h1>

    <section class="liste-cartes">

        <article class="carte-article">
            <h2>HTML</h2>
            <p>Créer la structure d'une page web.</p>
            <a href="#">Lire l'article</a>
        </article>

        <article class="carte-article">
            <h2>CSS</h2>
            <p>Mettre en forme une page web.</p>
            <a href="#">Lire l'article</a>
        </article>

        <article class="carte-article">
            <h2>JavaScript</h2>
            <p>Ajouter des comportements à une page.</p>
            <a href="#">Lire l'article</a>
        </article>

        <article class="carte-article">
            <h2>PHP</h2>
            <p>Créer des applications web dynamiques.</p>
            <a href="#">Lire l'article</a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Préparer le conteneur

Le conteneur des cartes est :

```html
<section class="liste-cartes">
```

C'est lui qui reçoit les propriétés Flexbox.

Pour commencer :

```css
.liste-cartes {
    display: flex;
}
```

Les éléments contenus dans cette section deviennent des éléments flex.

### 1.2. Choisir la direction

Pour une liste d'articles, on peut organiser les cartes horizontalement :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
}
```

### 1.3. Répartir les cartes

`justify-content` permet de contrôler leur répartition sur l'axe principal.

```css
.liste-cartes {
    justify-content: space-between;
}
```

Les cartes sont réparties dans l'espace disponible.

### 1.4. Aligner les cartes

`align-items` contrôle leur alignement sur l'axe secondaire.

```css
.liste-cartes {
    align-items: stretch;
}
```

Avec `stretch`, les éléments peuvent occuper la hauteur disponible du conteneur lorsque cette hauteur permet l'étirement.

On peut aussi utiliser :

```css
align-items: center;
```

pour centrer les éléments sur l'axe secondaire.

### 1.5. Autoriser plusieurs lignes

Pour une liste plus grande, `flex-wrap` permet de passer à la ligne :

```css
.liste-cartes {
    flex-wrap: wrap;
}
```

### 1.6. Créer un espace régulier

`gap` crée un espace entre les cartes :

```css
.liste-cartes {
    gap: 24px;
}
```

Il évite de gérer séparément les marges entre les éléments Flexbox.

### 1.7. Partager l'espace disponible

Une carte peut utiliser l'espace disponible avec :

```css
.carte-article {
    flex: 1;
}
```

Plusieurs cartes avec `flex: 1` peuvent alors partager l'espace disponible.

### 1.8. À retenir

Pour organiser une liste de cartes, on peut combiner :

```css
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 24px;
```

Les cartes peuvent aussi utiliser :

```css
flex: 1;
```

Chaque propriété répond à un besoin différent.

## Partie 2 — Pratique

### 2.1. Préparer la page

#### Étape 1 — Centrer la zone principale

Ajoutez :

```css
.page-articles {
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 20px;
}
```

La zone principale est centrée dans la page.

#### Étape 2 — Organiser le titre

Ajoutez :

```css
.page-articles h1 {
    margin: 0 0 32px;
}
```

Un espace est créé sous le titre.

### 2.2. Préparer les cartes

#### Étape 1 — Créer un composant commun

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    min-width: 220px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les quatre cartes utilisent maintenant la même présentation.

#### Étape 2 — Organiser le contenu des cartes

Ajoutez :

```css
.carte-article h2 {
    margin: 0 0 12px;
}

.carte-article p {
    margin: 0 0 16px;
}

.carte-article a {
    color: #2673e8;
    text-decoration: none;
}
```

Le contenu de chaque carte est correctement espacé.

### 2.3. Créer le conteneur Flexbox

#### Étape 1 — Activer Flexbox

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
}
```

Les quatre cartes utilisent maintenant Flexbox.

### 2.4. Ajouter l'espacement

#### Étape 1 — Utiliser `gap`

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    gap: 24px;
}
```

Un espace régulier apparaît entre les cartes.

### 2.5. Contrôler la répartition

#### Étape 1 — Utiliser `justify-content`

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
}
```

Les cartes sont réparties sur l'axe principal.

### 2.6. Contrôler l'alignement

#### Étape 1 — Utiliser `align-items`

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}
```

Les cartes sont alignées sur l'axe secondaire.

### 2.7. Autoriser le retour à la ligne

#### Étape 1 — Ajouter `flex-wrap`

Complétez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
}
```

Les cartes peuvent maintenant passer sur plusieurs lignes lorsque l'espace horizontal devient insuffisant.

### 2.8. Permettre aux cartes de partager l'espace

#### Étape 1 — Utiliser `flex`

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    min-width: 220px;
    flex: 1;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les cartes peuvent partager l'espace disponible.

### 2.9. Tester les propriétés

Testez successivement les propriétés étudiées.

Retirez :

```css
flex-wrap: wrap;
```

Observez le résultat.

Ajoutez-la de nouveau.

Retirez :

```css
gap: 24px;
```

Observez le résultat.

Ajoutez-la de nouveau.

Retirez :

```css
flex: 1;
```

Observez le résultat.

Ajoutez-la de nouveau.

Le but est d'identifier le rôle de chaque propriété.

### 2.10. Réaliser la disposition finale

Pour la réalisation finale, utilisez les notions étudiées dans l'UA :

```css
.page-articles {
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 20px;
}

.page-articles h1 {
    margin: 0 0 32px;
}

.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 24px;
}

.carte-article {
    box-sizing: border-box;
    min-width: 220px;
    flex: 1;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.carte-article h2 {
    margin: 0 0 12px;
}

.carte-article p {
    margin: 0 0 16px;
}

.carte-article a {
    color: #2673e8;
    text-decoration: none;
}
```

### 2.11. Vérifier la disposition

Vérifiez que :

- les cartes utilisent Flexbox ;
- leur direction est horizontale ;
- les cartes sont espacées ;
- les cartes peuvent passer à la ligne ;
- les cartes utilisent l'espace disponible ;
- le contenu des cartes reste lisible ;
- les quatre cartes utilisent la même classe ;
- aucune propriété Flexbox avancée n'est nécessaire.

**Travail à faire :**

À partir du HTML fourni, réalisez la disposition finale de la liste des articles.

Votre réalisation doit :

- utiliser Flexbox ;
- placer les cartes horizontalement ;
- créer un espace régulier entre les cartes ;
- permettre le retour à la ligne ;
- répartir les cartes dans l'espace disponible ;
- aligner correctement les cartes ;
- utiliser un composant `.carte-article` commun.

Vous devez réutiliser les notions apprises dans T.122.231 à T.122.237.

N'utilisez pas :

- `order` ;
- `flex-basis` ;
- CSS Grid ;
- des calculs complexes ;
- des propriétés Flexbox avancées.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-238-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La page contient quatre cartes d'articles.

Les cartes utilisent le même composant CSS.

La liste utilise :

```text
display: flex
flex-direction
justify-content
align-items
flex-wrap
gap
```

Les cartes peuvent partager l'espace disponible avec `flex`.

La disposition reste cohérente lorsque l'espace disponible diminue.

## Bilan

**Vous avez réalisé :**

Une liste de cartes d'articles organisée avec Flexbox.

**Vous savez maintenant :**

- créer un conteneur Flexbox ;
- choisir la direction des éléments ;
- répartir les éléments ;
- aligner les éléments ;
- créer plusieurs lignes ;
- espacer les cartes ;
- partager l'espace disponible.

Vous disposez maintenant des principales bases de Flexbox nécessaires pour organiser les cartes de la page d'accueil.

## Glossaire

- **Flexbox** : système CSS qui permet d'organiser des éléments dans un conteneur.
- **Conteneur flex** : élément qui utilise `display: flex`.
- **Élément flex** : élément directement contenu dans un conteneur flex.
- **`flex-direction`** : définit la direction des éléments.
- **`justify-content`** : contrôle la répartition sur l'axe principal.
- **`align-items`** : contrôle l'alignement sur l'axe secondaire.
- **`flex-wrap`** : permet aux éléments de passer sur plusieurs lignes.
- **`gap`** : définit l'espace entre les éléments.
- **`flex`** : permet de rendre un élément flexible dans le conteneur.