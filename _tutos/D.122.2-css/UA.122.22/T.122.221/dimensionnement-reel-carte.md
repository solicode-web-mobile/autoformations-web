---
title: "Comprendre le dimensionnement réel d'une carte"
layout: tuto
slug: "dimensionnement-reel-carte"
permalink: /tutos/dimensionnement-reel-carte/
tuto_id: "T.122.221"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Carte</title>
  </head>
  <body>
      <article class="carte">
          <h2>Le métier de développeur</h2>
          <p>
              Un développeur crée des applications et des sites web.
          </p>
      </article>
  </body>
  </html>

data_css: |
  .carte {
      width: 300px;
      padding: 20px;
      border: 2px solid #d1d5db;
  }

  .carte h2 {
      margin: 0 0 12px;
  }

  .carte p {
      margin: 0;
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

Comprendre comment `padding` et `border` influencent la taille réelle d’une carte.

Vous allez découvrir :

- le **Box Model** ;
- `content-box` ;
- `border-box` ;
- la propriété `box-sizing`.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser un sélecteur de classe ;
- utiliser `width` ;
- utiliser `padding` ;
- utiliser `border`.

## Données de départ

### HTML

Le fichier HTML contient une carte simple.

```html
<article class="carte">
    <h2>Le métier de développeur</h2>
    <p>
        Un développeur crée des applications et des sites web.
    </p>
</article>
```

### CSS

Le fichier CSS contient :

```css
.carte {
    width: 300px;
    padding: 20px;
    border: 2px solid #d1d5db;
}
```

La carte a une largeur définie avec `width`.

Elle possède aussi un `padding` et une `border`.

## Partie 1 — Théorie

### 1.1. Le Box Model

En CSS, un élément possède plusieurs zones.

```text
+-----------------------------+
|           Border            |
|  +-----------------------+  |
|  |       Padding         |  |
|  |  +-----------------+  |  |
|  |  |    Contenu      |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

On retrouve :

- **contenu** : le texte ou les autres éléments ;
- **padding** : l’espace autour du contenu ;
- **border** : la bordure autour du padding.

La taille réelle d’un élément dépend donc de ces zones.

### 1.2. `content-box`

Par défaut, un élément utilise :

```css
box-sizing: content-box;
```

Avec `content-box`, la valeur de `width` concerne seulement le **contenu**.

Exemple :

```css
.carte {
    width: 300px;
    padding: 20px;
    border: 2px solid #d1d5db;
}
```

La largeur réelle est :

```text
300px + 20px + 20px + 2px + 2px
= 344px
```

La carte est donc plus large que `300px`.

### 1.3. `border-box`

Avec :

```css
box-sizing: border-box;
```

la valeur de `width` comprend :

- le contenu ;
- le `padding` ;
- la `border`.

Exemple :

```css
.carte {
    width: 300px;
    padding: 20px;
    border: 2px solid #d1d5db;
    box-sizing: border-box;
}
```

Cette fois, la largeur totale de la carte reste :

```text
300px
```

Le navigateur ajuste la place disponible pour le contenu.

### 1.4. Comparer les deux comportements

Avec `content-box` :

```text
width = 300px
padding = 40px
border = 4px

largeur réelle = 344px
```

Avec `border-box` :

```text
width = 300px

largeur réelle = 300px
```

La différence est importante lorsque plusieurs cartes doivent avoir des dimensions cohérentes.

### 1.5. À retenir

- `width` ne représente pas toujours la taille totale d’un élément.
- `content-box` ajoute `padding` et `border` à la largeur.
- `border-box` inclut `padding` et `border` dans la largeur.
- `box-sizing` permet de choisir le comportement.
- Pour une carte dont la largeur doit rester maîtrisée, `border-box` est pratique.

## Partie 2 — Pratique

### 2.1. Observer la taille avec `content-box`

Ouvrez le fichier CSS.

Ajoutez explicitement :

```css
.carte {
    width: 300px;
    padding: 20px;
    border: 2px solid #d1d5db;
    box-sizing: content-box;
}
```

Enregistrez le fichier.

Observez la carte dans le navigateur.

La carte est plus large que `300px`.

### Étape 1 — Calculer la largeur réelle

Utilisez les valeurs du code :

```text
width = 300px
padding gauche = 20px
padding droit = 20px
border gauche = 2px
border droit = 2px
```

Calculez la largeur totale de la carte.

### Étape 2 — Utiliser `border-box`

Remplacez :

```css
box-sizing: content-box;
```

par :

```css
box-sizing: border-box;
```

Enregistrez le fichier.

Observez de nouveau la carte.

La largeur totale doit maintenant être `300px`.

### Étape 3 — Vérifier le contenu

Conservez :

```css
.carte {
    width: 300px;
    padding: 20px;
    border: 2px solid #d1d5db;
    box-sizing: border-box;
}
```

Vérifiez que :

- la bordure est visible ;
- le texte reste à l’intérieur de la carte ;
- la largeur totale de la carte reste `300px`.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-221-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

### Étape 4 — Expérimenter

Modifiez uniquement la valeur de `padding`.

Testez :

```css
padding: 10px;
```

puis :

```css
padding: 30px;
```

Conservez :

```css
box-sizing: border-box;
```

Observez la largeur totale de la carte.

La largeur reste `300px`.

Seule la place disponible pour le contenu change.

**Travail à faire :**

1. Conservez une largeur de `300px`.
2. Utilisez `box-sizing: border-box`.
3. Testez deux valeurs différentes de `padding`.
4. Vérifiez que la largeur totale reste `300px`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et vos observations.

**Critère de réussite :**

La carte conserve une largeur totale de `300px` avec `box-sizing: border-box`, même lorsque la valeur de `padding` change.

## Bilan

**Vous avez réalisé :** une carte dont la largeur totale reste maîtrisée malgré la présence d’un `padding` et d’une `border`.

**Vous savez maintenant :** expliquer la différence entre `content-box` et `border-box` et utiliser `box-sizing` pour contrôler la taille réelle d’une carte.

## Glossaire

- **Box Model** : modèle qui décrit les différentes zones d’un élément CSS.
- **Contenu** : partie de l’élément qui contient le texte ou les éléments internes.
- **Padding** : espace intérieur entre le contenu et la bordure.
- **Border** : bordure autour de l’élément.
- **content-box** : `width` concerne uniquement le contenu.
- **border-box** : `width` inclut le contenu, le `padding` et la bordure.
- **box-sizing** : propriété qui définit comment le navigateur calcule la taille d’un élément.