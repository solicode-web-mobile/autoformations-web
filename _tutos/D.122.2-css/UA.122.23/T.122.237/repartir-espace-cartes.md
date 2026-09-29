---
title: "Répartir l’espace entre les cartes"

layout: tuto

slug: "repartir-espace-cartes"

permalink: /tutos/:slug/

tuto_id: "T.122.237"

type: "classique"

version: "normal"

ua: "UA.122.23"

nav_order: 7

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes flexibles</title>
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

Apprendre à permettre aux cartes de partager l’espace disponible avec `flex-grow`.

## 2. Prérequis

Vous savez déjà :

- créer un conteneur Flexbox avec `display: flex` ;
- utiliser `flex-direction` ;
- utiliser `justify-content` ;
- utiliser `align-items` ;
- utiliser `flex-wrap` ;
- utiliser `gap` ;
- comprendre le rôle du conteneur et des éléments flex.

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

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Partager l’espace disponible

Flexbox peut distribuer l’espace disponible entre plusieurs éléments.

La propriété `flex-grow` indique à un élément s’il peut prendre une partie de l’espace restant.

**Exemple :**

```css
.carte-article {
    flex-grow: 1;
}
```

La carte peut alors prendre une partie de l’espace disponible.

### 1.2. Utiliser la même valeur pour plusieurs cartes

Si plusieurs cartes ont :

```css
.carte-article {
    flex-grow: 1;
}
```

elles peuvent partager l’espace restant de manière égale.

Avec trois cartes, chacune peut recevoir une part égale de cet espace.

### 1.3. Comprendre la valeur `0`

La valeur par défaut de `flex-grow` est `0`.

Cela signifie que l’élément ne demande pas de part supplémentaire dans l’espace restant.

Exemple :

```css
.carte-article {
    flex-grow: 0;
}
```

La carte ne grandit pas pour prendre l’espace restant.

### 1.4. Donner une part plus grande à un élément

La valeur de `flex-grow` représente un rapport entre les éléments.

Exemple :

```css
.carte-article {
    flex-grow: 1;
}

.carte-article-principale {
    flex-grow: 2;
}
```

La carte principale reçoit deux parts.

La première carte reçoit une part.

Ce mécanisme permet de créer des proportions simples.

### 1.5. Utiliser la propriété raccourcie `flex`

La propriété `flex` permet d'écrire plus simplement certains réglages Flexbox.

Pour commencer, on peut utiliser :

```css
.carte-article {
    flex: 1;
}
```

Dans ce cas, la carte peut prendre une part de l’espace disponible.

Avec plusieurs cartes utilisant `flex: 1`, l’espace disponible est partagé entre elles.

### 1.6. `flex-grow` et `flex`

`flex-grow` permet de contrôler la croissance d’un élément.

```css
.carte-article {
    flex-grow: 1;
}
```

`flex: 1` est une écriture raccourcie utilisée ici pour obtenir un comportement flexible simple.

```css
.carte-article {
    flex: 1;
}
```

Pour le niveau N1, on utilise principalement `flex: 1` pour rendre plusieurs cartes flexibles.

### 1.7. À retenir

- `flex-grow` permet à un élément de prendre de l’espace supplémentaire.
- Plusieurs éléments avec `flex-grow: 1` peuvent partager cet espace.
- Une valeur plus grande représente une part plus importante.
- `flex: 1` permet d’obtenir simplement un comportement flexible.
- Ces propriétés s’appliquent aux éléments flex, pas au conteneur.

## Partie 2 — Pratique

### 2.1. Préparer le conteneur

#### Étape 1 — Créer le conteneur Flexbox

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 900px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les cartes sont placées sur une ligne.

Un espace de `24px` les sépare.

### 2.2. Donner une largeur aux cartes

#### Étape 1 — Préparer les cartes

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    width: 220px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Chaque carte possède maintenant une largeur de `220px`.

### 2.3. Observer l’espace disponible

#### Étape 1 — Comparer la largeur

Observez le conteneur.

La largeur du conteneur est supérieure à la largeur nécessaire aux trois cartes.

Il reste donc un espace libre.

Les cartes n'utilisent pas encore cet espace pour grandir.

### 2.4. Utiliser `flex-grow`

#### Étape 1 — Autoriser les cartes à grandir

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    width: 220px;
    flex-grow: 1;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les trois cartes peuvent maintenant utiliser une partie de l’espace restant.

### 2.5. Utiliser `flex: 1`

#### Étape 1 — Remplacer `flex-grow`

Remplacez :

```css
flex-grow: 1;
```

par :

```css
flex: 1;
```

Les trois cartes partagent maintenant l’espace disponible.

### 2.6. Observer l’effet du partage

#### Étape 1 — Supprimer temporairement `flex`

Supprimez :

```css
flex: 1;
```

Observez la taille des cartes.

#### Étape 2 — Ajouter de nouveau `flex`

Ajoutez :

```css
flex: 1;
```

Observez le changement.

Les cartes utilisent maintenant l’espace disponible du conteneur.

### 2.7. Donner une part différente à une carte

#### Étape 1 — Ajouter une classe

Modifiez la troisième carte :

```html
<article class="carte-article carte-principale">
    <h2>JavaScript</h2>
    <p>Ajouter des comportements à une page.</p>
</article>
```

#### Étape 2 — Donner une part supplémentaire

Ajoutez :

```css
.carte-principale {
    flex-grow: 2;
}
```

La troisième carte reçoit une part plus grande de l’espace disponible.

### 2.8. Revenir à des cartes identiques

Pour le résultat final, retirez :

```css
.carte-principale {
    flex-grow: 2;
}
```

Conservez :

```css
.carte-article {
    flex: 1;
}
```

Les trois cartes partagent alors l’espace disponible de manière uniforme.

**Travail à faire :**

À partir du HTML fourni :

- créez trois cartes ;
- créez un conteneur Flexbox ;
- utilisez `gap` pour séparer les cartes ;
- donnez une largeur de départ aux cartes ;
- testez `flex-grow: 1` ;
- remplacez-le par `flex: 1` ;
- observez le partage de l’espace ;
- testez une valeur différente avec `flex-grow: 2` sur une carte ;
- revenez ensuite à trois cartes utilisant `flex: 1`.

N'utilisez pas encore :

- `flex-basis` ;
- `order` ;
- des calculs complexes ;
- des réglages avancés de Flexbox.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-237-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les trois cartes utilisent `flex: 1`.

Elles partagent l’espace disponible du conteneur.

L’apprenant sait également expliquer le rôle de `flex-grow`.

## Bilan

**Vous avez appris :**

- le rôle de `flex-grow` ;
- le partage de l’espace disponible ;
- la différence entre `flex-grow: 1` et `flex-grow: 2` ;
- l’utilisation simple de `flex: 1`.

**Vous avez réalisé :**

Une liste de cartes flexibles qui partagent l’espace disponible.

## Glossaire

- **`flex-grow`** : propriété qui permet à un élément flex de prendre une partie de l’espace disponible.
- **`flex`** : propriété raccourcie qui permet de définir le comportement flexible d’un élément.
- **Espace disponible** : espace restant dans le conteneur après le placement des éléments.
- **Part** : quantité relative d’espace reçue par un élément.
- **Élément flex** : élément directement contenu dans un conteneur Flexbox.