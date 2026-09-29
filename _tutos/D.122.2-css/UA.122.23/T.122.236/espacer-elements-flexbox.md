---
title: "Espacer les éléments Flexbox"
layout: tuto
slug: "espacer-elements-flexbox"
permalink: /tutos/espacer-elements-flexbox/
tuto_id: "T.122.236"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 6
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Espacement des cartes</title>
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

Apprendre à créer un espace régulier entre les éléments d’un conteneur Flexbox avec `gap`.

## 2. Prérequis

Vous savez déjà :

- créer un conteneur Flexbox avec `display: flex` ;
- utiliser `flex-direction` ;
- utiliser `justify-content` ;
- utiliser `align-items` ;
- utiliser `flex-wrap` ;
- faire passer les éléments sur plusieurs lignes ;
- identifier l’axe principal et l’axe secondaire.

## Données de départ

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

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Créer un espace avec `gap`

`gap` crée un espace entre les éléments d’un conteneur Flexbox.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    gap: 20px;
}
```

Un espace de `20px` est créé entre les cartes.

### 1.2. Pourquoi utiliser `gap` ?

Avant `gap`, on peut créer un espace entre les cartes avec `margin`.

Avec Flexbox, `gap` permet de gérer directement l’espace entre les éléments du conteneur.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    gap: 20px;
}
```

L’espace est géré par le conteneur.

Il n’est pas nécessaire d’ajouter une marge à chaque carte pour créer cet espace.

### 1.3. Utiliser `gap` avec plusieurs lignes

`gap` fonctionne aussi lorsque les éléments passent à la ligne.

Exemple :

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

Un espace est créé :

- entre les éléments d’une même ligne ;
- entre les lignes.

### 1.4. Contrôler l’espace vertical avec `row-gap`

`row-gap` définit l’espace entre les lignes.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
}
```

L’espace entre deux lignes est de `30px`.

### 1.5. Contrôler l’espace horizontal avec `column-gap`

`column-gap` définit l’espace entre les colonnes.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
}
```

L’espace entre deux éléments sur une même ligne est de `20px`.

### 1.6. Combiner `row-gap` et `column-gap`

On peut définir les deux espaces séparément.

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 20px;
}
```

Dans cet exemple :

- l’espace horizontal est de `20px` ;
- l’espace vertical est de `30px`.

### 1.7. À retenir

- `gap` crée un espace entre les éléments Flexbox.
- `gap` agit horizontalement et verticalement lorsque plusieurs lignes existent.
- `row-gap` contrôle l’espace entre les lignes.
- `column-gap` contrôle l’espace entre les éléments sur une ligne.
- `gap` s’utilise sur le conteneur Flexbox.

## Partie 2 — Pratique

### 2.1. Préparer les cartes

#### Étape 1 — Donner une taille aux cartes

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    width: 180px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les quatre cartes possèdent maintenant une taille visible.

#### Étape 2 — Préparer le conteneur

Ajoutez :

```css
.liste-cartes {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 700px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les cartes peuvent passer sur plusieurs lignes.

### 2.2. Ajouter un espace entre les cartes

#### Étape 1 — Utiliser `gap`

Ajoutez :

```css
.liste-cartes {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    width: 700px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Un espace de `20px` apparaît entre les cartes.

### 2.3. Observer la différence

#### Étape 1 — Retirer `gap`

Supprimez temporairement :

```css
gap: 20px;
```

Observez les cartes.

#### Étape 2 — Ajouter `gap`

Ajoutez de nouveau :

```css
gap: 20px;
```

Observez la différence.

L’espace est maintenant géré directement par le conteneur.

### 2.4. Créer un espace différent entre les lignes

#### Étape 1 — Utiliser `row-gap`

Remplacez :

```css
gap: 20px;
```

par :

```css
row-gap: 30px;
column-gap: 20px;
```

Les cartes gardent un espace horizontal de `20px`.

Les lignes sont séparées par `30px`.

### 2.5. Utiliser le raccourci `gap`

#### Étape 1 — Revenir à une valeur commune

Remplacez :

```css
row-gap: 30px;
column-gap: 20px;
```

par :

```css
gap: 20px;
```

Les deux directions utilisent maintenant le même espace.

### 2.6. Tester plusieurs valeurs

Testez :

```css
gap: 10px;
```

Puis :

```css
gap: 20px;
```

Puis :

```css
gap: 30px;
```

Observez l'évolution de l’espace entre les cartes.

### 2.7. Préparer la liste d’articles

Pour une liste de cartes d’articles, vous pouvez maintenant utiliser :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
}
```

Les cartes peuvent passer sur plusieurs lignes.

L’espace entre les cartes reste régulier.

**Travail à faire :**

À partir du HTML fourni :

- créez quatre cartes ;
- utilisez `.liste-cartes` comme conteneur Flexbox ;
- autorisez le retour à la ligne ;
- utilisez `gap` pour créer un espace régulier ;
- testez plusieurs valeurs de `gap` ;
- testez `row-gap` et `column-gap` ;
- choisissez une valeur finale adaptée à votre liste de cartes.

Pour le résultat final, utilisez :

```css
gap: 24px;
```

N’utilisez pas encore :

- `flex` ;
- `flex-grow` ;
- `flex-basis`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-236-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur `.liste-cartes` utilise `display: flex` et `flex-wrap: wrap`.

Les cartes sont séparées par un espace régulier de `24px`.

L’apprenant sait également utiliser `row-gap` et `column-gap` pour contrôler séparément les deux directions.

## Bilan

**Vous avez appris :**

- le rôle de `gap` ;
- l’utilisation de `row-gap` ;
- l’utilisation de `column-gap` ;
- la différence entre un espace commun et des espaces séparés.

**Vous avez réalisé :**

Une liste de cartes Flexbox avec un espacement régulier entre les éléments et entre les lignes.

## Glossaire

- **`gap`** : espace entre les éléments d’un conteneur.
- **`row-gap`** : espace entre les lignes.
- **`column-gap`** : espace entre les colonnes ou les éléments d’une même ligne.
- **Espacement** : distance entre deux éléments.
- **Conteneur Flexbox** : élément qui utilise `display: flex`.