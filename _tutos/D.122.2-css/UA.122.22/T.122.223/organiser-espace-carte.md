---
title: "Organiser l'espace dans une carte"
layout: tuto
slug: "organiser-espace-carte"
permalink: /tutos/organiser-espace-carte/
tuto_id: "T.122.223"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 3
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

              <a href="#">Lire l'article</a>
          </div>

      </article>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à organiser l’espace à l’intérieur d’une carte avec `padding` et `margin`.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser une classe CSS ;
- utiliser `width` et `max-width` ;
- utiliser `min-height` ;
- utiliser `padding` ;
- utiliser `margin` ;
- utiliser une bordure.

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

        <a href="#">Lire l'article</a>
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

### 1.1. Ajouter de l’espace dans une carte avec `padding`

`padding` ajoute un espace entre le contenu et le bord de l’élément.

**Exemple :**

```css
.carte-contenu {
    padding: 20px;
}
```

Le texte ne touche plus les bords de la carte.

### 1.2. Créer un espace autour d’un élément avec `margin`

`margin` crée un espace à l’extérieur d’un élément.

**Exemple :**

```css
.carte-contenu h2 {
    margin-bottom: 12px;
}
```

Un espace est créé sous le titre.

### 1.3. Utiliser un raccourci de `margin`

Une seule valeur applique le même espace aux quatre côtés.

```css
.carte-contenu {
    margin: 20px;
}
```

Deux valeurs permettent de définir :

```css
.carte-contenu {
    margin: 20px 10px;
}
```

`20px` correspond au haut et au bas.

`10px` correspond à gauche et à droite.

### 1.4. Organiser les espaces d'une carte

Dans une carte, on peut utiliser :

- `padding` pour créer un espace dans le bloc ;
- `margin-bottom` pour séparer les éléments ;
- `margin-top` pour créer un espace avant un élément.

Exemple :

```css
.carte-contenu {
    padding: 20px;
}

.carte-contenu h2 {
    margin: 0 0 12px;
}

.carte-contenu p {
    margin: 0 0 16px;
}
```

### 1.5. À retenir

- `padding` crée un espace à l’intérieur.
- `margin` crée un espace à l’extérieur.
- `margin-bottom` crée un espace sous un élément.
- Les raccourcis permettent d’écrire moins de code.
- L’objectif est de créer des espaces réguliers et lisibles.

## Partie 2 — Pratique

### 2.1. Préparer la carte

#### Étape 1 — Créer le style de la carte

Ajoutez :

```css
.carte-article {
    max-width: 400px;
    min-height: 300px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

La carte possède déjà des dimensions cohérentes.

#### Étape 2 — Ajouter un espace dans le contenu

Ajoutez :

```css
.carte-contenu {
    padding: 20px;
}
```

Le contenu doit maintenant être éloigné des bords de la carte.

### 2.2. Organiser le titre

#### Étape 1 — Supprimer la marge par défaut

Ajoutez :

```css
.carte-contenu h2 {
    margin: 0;
}
```

Le titre n’a plus de marge extérieure par défaut.

#### Étape 2 — Ajouter un espace sous le titre

Modifiez la règle :

```css
.carte-contenu h2 {
    margin: 0 0 12px;
}
```

Un espace de `12px` est maintenant créé entre le titre et le paragraphe.

### 2.3. Organiser le paragraphe

#### Étape 1 — Ajouter un espace sous le paragraphe

Ajoutez :

```css
.carte-contenu p {
    margin: 0 0 16px;
}
```

Un espace de `16px` sépare le paragraphe du lien.

### 2.4. Organiser le lien

#### Étape 1 — Ajouter un style simple au lien

Ajoutez :

```css
.carte-contenu a {
    color: #2673e8;
}
```

Le lien devient visible comme une action.

#### Étape 2 — Vérifier les espacements

Observez la carte.

Vérifiez que :

- le contenu ne touche pas le bord ;
- le titre est séparé du paragraphe ;
- le paragraphe est séparé du lien ;
- les espaces sont réguliers.

### 2.5. Réaliser une deuxième carte

Ajoutez une deuxième carte :

```html
<article class="carte-article">

    <img
        src="images/article-example.png"
        alt="Interface utilisateur">

    <div class="carte-contenu">
        <h2>Créer une interface web</h2>

        <p>
            Une interface claire aide l’utilisateur
            à comprendre les actions disponibles.
        </p>

        <a href="#">Lire l'article</a>
    </div>

</article>
```

La même feuille CSS doit organiser les deux cartes.

**Travail à faire :**

Créez deux cartes d’articles.

Organisez l’espace :

- entre le bord et le contenu ;
- entre le titre et le texte ;
- entre le texte et le lien.

Utilisez `padding` et `margin`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-223-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les deux cartes présentent des espaces réguliers entre les bords, le titre, le texte et le lien.

## Bilan

**Vous avez appris :**

- à utiliser `padding` pour créer un espace intérieur ;
- à utiliser `margin` pour séparer les éléments ;
- à utiliser les raccourcis de `margin` ;
- à organiser les espaces d’une carte.

**Vous avez réalisé :**

Deux cartes d’articles avec un contenu correctement espacé.

## Glossaire

- **`padding`** : espace entre le contenu et le bord d’un élément.
- **`margin`** : espace autour d’un élément.
- **`margin-bottom`** : espace sous un élément.
- **Raccourci CSS** : écriture qui permet de définir plusieurs valeurs avec une seule propriété.