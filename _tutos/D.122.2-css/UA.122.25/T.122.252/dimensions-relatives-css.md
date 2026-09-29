---
title: "Utiliser des dimensions relatives"
layout: tuto
slug: "dimensions-relatives-css"
permalink: /tutos/dimensions-relatives-css/
tuto_id: "T.122.252"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 2

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dimensions relatives</title>
  </head>
  <body>

      <main class="page">

          <h1>Derniers articles</h1>

          <section class="liste-articles">

              <article class="carte-article">
                  <h2>Le métier de développeur</h2>
                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>
                  <a href="#">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>Créer une interface web</h2>
                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les informations.
                  </p>
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

Apprendre à utiliser des dimensions relatives avec `%`, `rem` et `vw`.

## 2. Prérequis

Vous savez déjà :

- utiliser `width` ;
- utiliser `max-width` ;
- utiliser `margin` ;
- utiliser `padding` ;
- utiliser `font-size` ;
- utiliser Flexbox ;
- comprendre la largeur disponible ;
- comprendre le viewport.

Vous savez également qu'une interface doit tenir compte de l'espace disponible.

## Données de départ

### HTML

```html
<main class="page">

    <h1>Derniers articles</h1>

    <section class="liste-articles">

        <article class="carte-article">
            <h2>Le métier de développeur</h2>
            <p>
                Le développeur crée des applications
                et construit des solutions web.
            </p>
            <a href="#">Lire l'article</a>
        </article>

        <article class="carte-article">
            <h2>Créer une interface web</h2>
            <p>
                Une interface claire aide l'utilisateur
                à comprendre les informations.
            </p>
            <a href="#">Lire l'article</a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css

```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Pourquoi utiliser des dimensions relatives ?

Une dimension fixe utilise une valeur comme :

```css
width: 400px;
```

Cette valeur ne change pas lorsque l'espace disponible change.

Une dimension relative dépend d'un autre élément ou de la taille du viewport.

Elle peut donc mieux s'adapter à différents espaces.

### 1.2. Utiliser `%`

`%` permet de définir une dimension relative au conteneur de l'élément.

**Exemple :**

```css
.page {
    width: 90%;
}
```

La largeur de `.page` utilise `90%` de la largeur disponible de son conteneur.

Dans une page simple, cela permet à la zone principale de réduire sa largeur lorsque la fenêtre devient plus petite.

### 1.3. Utiliser `rem`

`rem` est une unité relative à la taille de police de l'élément racine de la page.

Par exemple :

```css
html {
    font-size: 16px;
}
```

Avec :

```css
h1 {
    font-size: 2rem;
}
```

`2rem` correspond à deux fois la taille de police racine.

Avec une base de `16px`, cela donne `32px`.

### 1.4. Utiliser `vw`

`vw` signifie **viewport width**.

`1vw` représente `1%` de la largeur du viewport.

Exemple :

```css
.page {
    width: 90vw;
}
```

La largeur dépend directement de la largeur de la fenêtre.

### 1.5. Comparer `px`, `%`, `rem` et `vw`

On peut retenir :

| Unité | Dépend principalement de |
|---|---|
| `px` | une valeur fixe |
| `%` | l'espace du conteneur |
| `rem` | la taille de police racine |
| `vw` | la largeur du viewport |

Chaque unité répond donc à un besoin différent.

### 1.6. Utiliser `%` pour une zone

Pour une zone principale, on peut utiliser :

```css
.page {
    width: 90%;
    max-width: 900px;
}
```

La largeur peut varier.

`max-width` limite cependant la largeur maximale à `900px`.

Cette combinaison permet d'utiliser une dimension relative tout en gardant une largeur raisonnable sur les grands écrans.

### 1.7. Utiliser `rem` pour les textes et les espaces

`rem` est particulièrement utile pour les tailles de texte et certains espacements.

Exemple :

```css
h1 {
    font-size: 2rem;
}

.carte-article {
    padding: 1.5rem;
}
```

Les valeurs suivent la taille de référence du document.

### 1.8. Utiliser `vw` avec prudence

`vw` dépend directement de la largeur du viewport.

Par exemple :

```css
.page {
    width: 90vw;
}
```

La largeur change avec la fenêtre.

Pour une interface N1, on l'utilise simplement pour comprendre la relation entre l'élément et le viewport.

### 1.9. À retenir

- `%` dépend du conteneur.
- `rem` dépend de la taille de police racine.
- `vw` dépend de la largeur du viewport.
- Les unités relatives permettent de créer des dimensions qui évoluent.
- `max-width` peut être combiné avec une largeur relative.
- Une unité relative ne remplace pas toutes les dimensions fixes.

## Partie 2 — Pratique

### 2.1. Préparer la zone principale

#### Étape 1 — Utiliser un pourcentage

Ajoutez :

```css
.page {
    width: 90%;
    max-width: 900px;
    margin: 40px auto;
}
```

La zone utilise maintenant `90%` de la largeur disponible.

Elle ne dépasse pas `900px`.

#### Étape 2 — Observer le résultat

Ouvrez la page.

Réduisez progressivement la largeur de la fenêtre.

Observez la largeur de `.page`.

Elle s'adapte à l'espace disponible.

### 2.2. Utiliser `rem` pour le titre

#### Étape 1 — Définir la taille de référence

Ajoutez :

```css
html {
    font-size: 16px;
}
```

#### Étape 2 — Utiliser `rem`

Ajoutez :

```css
.page h1 {
    margin: 0 0 1.5rem;
    font-size: 2rem;
}
```

Le titre utilise maintenant `rem`.

L'espace sous le titre utilise également `rem`.

### 2.3. Utiliser `rem` dans la carte

#### Étape 1 — Ajouter l'espace intérieur

Ajoutez :

```css
.carte-article {
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Le `padding` est maintenant relatif à la taille de police racine.

### 2.4. Organiser le contenu

#### Étape 1 — Styliser le titre de la carte

Ajoutez :

```css
.carte-article h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
}
```

La taille du titre est exprimée en `rem`.

#### Étape 2 — Styliser le paragraphe

Ajoutez :

```css
.carte-article p {
    margin: 0 0 1rem;
}
```

L'espace sous le paragraphe utilise aussi `rem`.

### 2.5. Observer `rem`

#### Étape 1 — Modifier la taille racine

Changez :

```css
html {
    font-size: 16px;
}
```

en :

```css
html {
    font-size: 20px;
}
```

Observez le titre, le texte et les espacements.

Les valeurs en `rem` changent avec la taille racine.

#### Étape 2 — Revenir à la valeur initiale

Remettez :

```css
html {
    font-size: 16px;
}
```

### 2.6. Tester `vw`

#### Étape 1 — Utiliser `vw` pour la zone principale

Remplacez temporairement :

```css
width: 90%;
```

par :

```css
width: 90vw;
```

Réduisez la largeur de la fenêtre.

Observez la zone principale.

Sa largeur suit directement la largeur du viewport.

#### Étape 2 — Restaurer `%`

Pour le résultat final, utilisez :

```css
width: 90%;
```

Dans ce tutoriel, `%` permet de relier la largeur de la zone à son conteneur.

### 2.7. Comparer les dimensions relatives

Testez séparément :

```css
.page {
    width: 90%;
}
```

Puis :

```css
.page {
    width: 90vw;
}
```

Observez les résultats.

La première valeur dépend du conteneur.

La seconde dépend directement du viewport.

### 2.8. Organiser les cartes

#### Étape 1 — Créer la liste

Ajoutez :

```css
.liste-articles {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
```

Les cartes peuvent être placées sur plusieurs lignes.

#### Étape 2 — Donner une largeur relative aux cartes

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Chaque carte utilise toute la largeur disponible de la ligne.

Dans les tutoriels suivants, les Media Queries permettront de modifier cette organisation selon la largeur de l'écran.

### 2.9. Tester plusieurs dimensions

Testez :

```css
.page {
    width: 70%;
}
```

puis :

```css
.page {
    width: 80%;
}
```

puis :

```css
.page {
    width: 90%;
}
```

Observez l'espace occupé par la zone principale.

### 2.10. Préparer le CSS final

Pour cette activité, utilisez :

```css
html {
    font-size: 16px;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f9fafb;
}

.page {
    width: 90%;
    max-width: 900px;
    margin: 40px auto;
}

.page h1 {
    margin: 0 0 1.5rem;
    font-size: 2rem;
}

.liste-articles {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.carte-article {
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.carte-article h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
}

.carte-article p {
    margin: 0 0 1rem;
}
```

### 2.11. Vérifier les unités

Repérez dans votre CSS :

```text
%
rem
vw
```

Vérifiez le rôle de chaque unité.

Vous devez pouvoir expliquer :

> `%` dépend du conteneur.

> `rem` dépend de la taille de police racine.

> `vw` dépend de la largeur du viewport.

**Travail à faire :**

À partir du HTML fourni :

- utilisez `%` pour la largeur de la zone principale ;
- utilisez `max-width` pour limiter cette zone ;
- utilisez `rem` pour le titre ;
- utilisez `rem` pour les espacements ;
- testez `vw` sur la zone principale ;
- comparez `%` et `vw` ;
- observez le comportement lorsque la fenêtre change de largeur ;
- utilisez finalement `%` et `rem` dans votre résultat.

N'utilisez pas encore :

- `@media` ;
- `min-width` dans une Media Query ;
- `max-width` dans une Media Query ;
- les breakpoints ;
- le mobile-first ;
- `clamp()`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-252-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

L'apprenant sait utiliser `%`, `rem` et `vw`.

Il sait expliquer la référence de chaque unité.

La zone principale utilise une largeur relative avec `max-width`.

Les tailles de texte et les espacements utilisent `rem`.

L'apprenant sait observer la différence entre une dimension relative au conteneur et une dimension relative au viewport.

## Bilan

**Vous avez appris :**

- à utiliser `%` pour une dimension relative au conteneur ;
- à utiliser `rem` pour les tailles et les espacements ;
- à utiliser `vw` pour une dimension liée au viewport ;
- à combiner une largeur relative avec `max-width`.

**Vous avez réalisé :**

Une page qui utilise des dimensions relatives pour mieux utiliser l'espace disponible.

## Glossaire

- **Dimension relative** : dimension qui dépend d'une autre référence.
- **`%`** : unité relative au conteneur utilisé pour calculer la dimension.
- **`rem`** : unité relative à la taille de police de l'élément racine.
- **`vw`** : unité relative à la largeur du viewport.
- **Viewport** : zone visible de la page dans la fenêtre du navigateur.
- **`max-width`** : propriété qui limite la largeur maximale d'un élément.