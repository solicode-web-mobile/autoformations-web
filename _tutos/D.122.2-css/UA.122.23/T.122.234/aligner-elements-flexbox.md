---
title: "Aligner les éléments"
layout: tuto
slug: "aligner-elements-flexbox"
permalink: /tutos/aligner-elements-flexbox/
tuto_id: "T.122.234"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 4
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alignement des cartes</title>
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

Apprendre à aligner les éléments sur l’axe secondaire d’un conteneur Flexbox avec `align-items`.

## 2. Prérequis

Vous savez déjà :

- créer un conteneur Flexbox avec `display: flex` ;
- utiliser `flex-direction` ;
- utiliser `row` et `column` ;
- utiliser `justify-content` ;
- identifier l’axe principal.

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

</section>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Comprendre l’axe secondaire

Flexbox utilise deux axes.

Avec :

```css
flex-direction: row;
```

l’axe principal est horizontal.

L’axe secondaire est vertical.

Avec :

```css
flex-direction: column;
```

l’axe principal devient vertical.

L’axe secondaire devient horizontal.

### 1.2. Aligner avec `align-items`

`align-items` contrôle l’alignement des éléments sur l’axe secondaire.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    align-items: center;
}
```

Les éléments sont alignés au centre sur l’axe secondaire.

### 1.3. Utiliser `flex-start`

`flex-start` place les éléments au début de l’axe secondaire.

```css
.liste-cartes {
    display: flex;
    align-items: flex-start;
}
```

Avec `flex-direction: row`, les éléments sont alignés en haut.

### 1.4. Utiliser `center`

`center` place les éléments au centre de l’axe secondaire.

```css
.liste-cartes {
    display: flex;
    align-items: center;
}
```

Avec `flex-direction: row`, les éléments sont centrés verticalement.

### 1.5. Distinguer `justify-content` et `align-items`

Les deux propriétés n’agissent pas sur le même axe.

Avec :

```css
flex-direction: row;
```

on peut retenir :

| Propriété | Axe |
|---|---|
| `justify-content` | axe principal horizontal |
| `align-items` | axe secondaire vertical |

Exemple :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
```

Les éléments sont centrés sur les deux axes.

### 1.6. À retenir

- `align-items` agit sur l’axe secondaire.
- `justify-content` agit sur l’axe principal.
- Avec `row`, l’axe secondaire est vertical.
- Avec `column`, l’axe secondaire est horizontal.
- `center` permet de centrer les éléments sur l’axe secondaire.

## Partie 2 — Pratique

### 2.1. Préparer les cartes

#### Étape 1 — Donner une taille aux cartes

Ajoutez :

```css
.carte-article {
    width: 180px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les cartes possèdent une taille visible.

#### Étape 2 — Créer une hauteur pour le conteneur

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 260px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Le conteneur possède maintenant une hauteur supérieure à celle des cartes.

Cette différence permet d'observer l'alignement.

### 2.2. Aligner les cartes au début

#### Étape 1 — Utiliser `flex-start`

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 800px;
    height: 260px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les cartes sont alignées en haut du conteneur.

### 2.3. Centrer les cartes

#### Étape 1 — Remplacer la valeur

Remplacez :

```css
align-items: flex-start;
```

par :

```css
align-items: center;
```

Les cartes sont maintenant alignées au centre vertical du conteneur.

### 2.4. Comparer les deux propriétés

Gardez :

```css
flex-direction: row;
```

Testez :

```css
justify-content: center;
```

Puis testez :

```css
align-items: center;
```

Observez la différence.

`justify-content` déplace les cartes sur l’axe horizontal.

`align-items` déplace les cartes sur l’axe vertical.

### 2.5. Tester l’axe secondaire avec `column`

#### Étape 1 — Changer la direction

Remplacez :

```css
flex-direction: row;
```

par :

```css
flex-direction: column;
```

Gardez :

```css
align-items: center;
```

L’axe principal devient vertical.

L’axe secondaire devient horizontal.

Les cartes sont maintenant centrées horizontalement.

#### Étape 2 — Revenir à `row`

Remplacez :

```css
flex-direction: column;
```

par :

```css
flex-direction: row;
```

Le résultat revient à une organisation horizontale.

### 2.6. Combiner les deux propriétés

#### Étape 1 — Centrer sur les deux axes

Utilisez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 260px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les cartes sont maintenant centrées horizontalement et verticalement.

**Travail à faire :**

À partir du HTML fourni :

- créez trois cartes ;
- utilisez `.liste-cartes` comme conteneur flex ;
- utilisez `flex-direction: row` ;
- testez `align-items: flex-start` ;
- testez `align-items: center` ;
- changez ensuite `flex-direction` en `column` ;
- observez le changement d’axe secondaire ;
- utilisez finalement `justify-content: center` et `align-items: center`.

N’utilisez pas encore :

- `flex-wrap` ;
- `gap` ;
- `flex` ;
- `flex-grow`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-234-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur utilise `display: flex`.

L’apprenant sait identifier l’axe principal et l’axe secondaire.

Il sait utiliser `align-items` pour aligner les cartes et comprend la différence entre `justify-content` et `align-items`.

## Bilan

**Vous avez appris :**

- la notion d’axe secondaire ;
- le rôle de `align-items` ;
- `flex-start` ;
- `center` ;
- la différence entre `justify-content` et `align-items`.

**Vous avez réalisé :**

Une liste de cartes dont l’alignement peut être contrôlé sur l’axe secondaire.

## Glossaire

- **Axe principal** : axe utilisé par Flexbox pour organiser les éléments selon `flex-direction`.
- **Axe secondaire** : axe perpendiculaire à l’axe principal.
- **`align-items`** : propriété qui contrôle l’alignement sur l’axe secondaire.
- **`justify-content`** : propriété qui contrôle la répartition sur l’axe principal.
- **`flex-start`** : place les éléments au début de l’axe concerné.
- **`center`** : place les éléments au centre de l’axe concerné.