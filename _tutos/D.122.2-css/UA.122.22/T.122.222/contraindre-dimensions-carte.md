---
title: "Contraindre les dimensions d'une carte"
layout: tuto
slug: "contraindre-dimensions-carte"
permalink: /tutos/contraindre-dimensions-carte/
tuto_id: "T.122.222"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 2
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Carte d'article</title>
  </head>
  <body>

      <article class="carte-article">

          <img
              src="images/article-example.png"
              alt="Écran montrant du code informatique">

          <div class="carte-contenu">
              <h2>Le métier de développeur</h2>
              <p>
                  Le développeur crée des applications
                  et transforme un besoin en solution.
              </p>
          </div>

      </article>

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

Apprendre à limiter la largeur et la hauteur d’une carte avec `min-width`, `max-width` et `min-height`.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser un sélecteur de classe ;
- utiliser `width` et `height` ;
- utiliser `margin` et `padding` ;
- utiliser `border` et `border-radius`.

## Données de départ

### HTML

```html
<article class="carte-article">

    <img
        src="images/article-example.png"
        alt="Écran montrant du code informatique">

    <div class="carte-contenu">
        <h2>Le métier de développeur</h2>
        <p>
            Le développeur crée des applications
            et transforme un besoin en solution.
        </p>
    </div>

</article>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Limiter une largeur avec `max-width`

`max-width` définit la largeur maximale d’un élément.

L’élément peut être plus petit.

Il ne peut pas dépasser la valeur donnée.

**Exemple :**

```css
.carte-article {
    max-width: 400px;
}
```

La carte peut avoir une largeur inférieure à `400px`.

Elle ne dépassera pas `400px`.

### 1.2. Imposer une largeur minimale avec `min-width`

`min-width` définit la largeur minimale d’un élément.

L’élément ne peut pas devenir plus petit que cette valeur.

**Exemple :**

```css
.carte-article {
    min-width: 280px;
}
```

La carte aura au moins `280px` de largeur.

### 1.3. Imposer une hauteur minimale avec `min-height`

`min-height` définit la hauteur minimale d’un élément.

Le contenu peut rendre la carte plus haute.

Mais la carte ne sera pas plus petite que la valeur donnée.

**Exemple :**

```css
.carte-article {
    min-height: 300px;
}
```

La carte aura au moins `300px` de hauteur.

### 1.4. À retenir

- `min-width` définit une largeur minimale.
- `max-width` définit une largeur maximale.
- `min-height` définit une hauteur minimale.
- Ces propriétés permettent de garder des cartes cohérentes.
- `width` et `height` ont déjà été étudiés en S2.

## Partie 2 — Pratique

### 2.1. Donner une largeur maximale à la carte

#### Étape 1 — Ouvrir la feuille CSS

Créez un fichier :

```text
style.css
```

Ajoutez la règle suivante :

```css
.carte-article {
    max-width: 400px;
}
```

Cette règle empêche la carte de dépasser `400px` de largeur.

#### Étape 2 — Ajouter un fond et une bordure

Ajoutez :

```css
.carte-article {
    max-width: 400px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

La carte possède maintenant une limite de largeur et une bordure visible.

### 2.2. Définir une largeur minimale

#### Étape 1 — Ajouter `min-width`

Modifiez la règle :

```css
.carte-article {
    min-width: 280px;
    max-width: 400px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

La carte doit maintenant rester entre `280px` et `400px` de largeur.

### 2.3. Définir une hauteur minimale

#### Étape 1 — Ajouter `min-height`

Ajoutez la propriété :

```css
.carte-article {
    min-width: 280px;
    max-width: 400px;
    min-height: 300px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

La carte doit maintenant avoir une hauteur minimale de `300px`.

### 2.4. Vérifier le comportement

Testez les valeurs suivantes :

```css
min-width: 280px;
max-width: 400px;
min-height: 300px;
```

Vérifiez :

- la carte ne dépasse pas `400px` de largeur ;
- la carte ne devient pas plus petite que `280px` ;
- la carte garde au moins `300px` de hauteur.

### 2.5. Appliquer les contraintes à une deuxième carte

Ajoutez une deuxième carte dans le HTML.

Utilisez la même classe :

```html
<article class="carte-article">

    <img
        src="images/article-example.png"
        alt="Interface utilisateur">

    <div class="carte-contenu">
        <h2>Créer une interface web</h2>
        <p>
            Une bonne interface doit être claire,
            simple et agréable à utiliser.
        </p>
    </div>

</article>
```

La même règle CSS doit s'appliquer aux deux cartes.

Vérifiez que les deux cartes respectent les mêmes contraintes.

**Travail à faire :**

Créez deux cartes d’articles.

Appliquez les contraintes suivantes :

```text
Largeur minimale : 280px
Largeur maximale : 400px
Hauteur minimale : 300px
```

Utilisez une seule classe CSS pour les deux cartes.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-222-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les deux cartes utilisent la même classe CSS et respectent les trois contraintes de dimensionnement.

## Bilan

**Vous avez appris :**

- `min-width` ;
- `max-width` ;
- `min-height`.

**Vous avez réalisé :**

Deux cartes d’articles avec des dimensions contrôlées.

## Glossaire

- **Contrainte de dimension** : règle qui limite la taille d’un élément.
- **`min-width`** : largeur minimale d’un élément.
- **`max-width`** : largeur maximale d’un élément.
- **`min-height`** : hauteur minimale d’un élément.
- **Composant** : élément réutilisable d’une interface.