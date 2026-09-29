---
title: "Adapter le conteneur et les espacements"
layout: tuto
slug: "adapter-conteneur-espacements"
permalink: /tutos/adapter-conteneur-espacements/
tuto_id: "T.122.254"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 4
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog</title>
  </head>
  <body>

      <main class="page">

          <header class="entete-page">
              <h1>Derniers articles</h1>
              <p>
                  Découvrez les derniers articles du blog.
              </p>
          </header>

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

## 1. Objectif

Apprendre à adapter la largeur et les espacements d’un conteneur selon la largeur de l’écran avec les Media Queries.

## 2. Prérequis

Vous savez déjà :

- utiliser `width` ;
- utiliser `max-width` ;
- utiliser `%` ;
- utiliser `rem` ;
- utiliser `vw` ;
- utiliser `margin` ;
- utiliser `padding` ;
- utiliser `box-sizing` ;
- comprendre le viewport ;
- créer une Media Query ;
- utiliser `min-width` et `max-width` dans une Media Query.

## Données de départ

### HTML

```html
<main class="page">

    <header class="entete-page">
        <h1>Derniers articles</h1>
        <p>
            Découvrez les derniers articles du blog.
        </p>
    </header>

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

### 1.1. Adapter un conteneur

Un conteneur principal doit utiliser l’espace disponible.

Mais il ne doit pas devenir trop large sur un grand écran.

On peut combiner :

```css
width: 90%;
max-width: 1000px;
```

La largeur est alors relative.

La largeur maximale reste limitée.

### 1.2. Organiser l’espace extérieur avec `margin`

On peut utiliser :

```css
margin: 2rem auto;
```

`2rem` crée un espace vertical.

`auto` permet de centrer le conteneur horizontalement lorsque sa largeur est inférieure à celle de son parent.

### 1.3. Organiser l’espace intérieur avec `padding`

On peut ajouter :

```css
padding: 0 2rem;
```

Le contenu possède alors un espace intérieur à gauche et à droite.

Sur un petit écran, cet espace peut devenir trop important.

Il peut donc être réduit avec une Media Query.

### 1.4. Adapter les espacements avec une Media Query

On peut écrire :

```css
@media (max-width: 700px) {
    .page {
        padding: 0 1rem;
    }
}
```

Sur un écran étroit, l’espace intérieur devient plus petit.

### 1.5. Adapter la marge

Les grands espaces peuvent aussi être réduits.

Exemple :

```css
@media (max-width: 700px) {
    .page {
        margin: 1.5rem auto;
    }
}
```

Le conteneur garde un espace autour de lui, mais cet espace est plus petit.

### 1.6. Garder une largeur maximale

Une Media Query n’est pas toujours nécessaire pour chaque largeur.

On peut déjà utiliser :

```css
.page {
    width: 90%;
    max-width: 1000px;
}
```

Cette règle permet à la zone de s’adapter naturellement.

La Media Query sert ensuite à modifier certains espacements lorsque l’écran devient plus étroit.

### 1.7. Utiliser `box-sizing`

Lorsque `width` et `padding` sont utilisés ensemble, `box-sizing` permet de contrôler le calcul de la taille.

On peut utiliser :

```css
.page {
    box-sizing: border-box;
}
```

La largeur définie inclut alors le `padding`.

### 1.8. À retenir

- `width` peut utiliser une unité relative.
- `max-width` limite la largeur maximale.
- `margin` organise l’espace autour du conteneur.
- `padding` organise l’espace à l’intérieur.
- Une Media Query peut réduire les espacements sur un écran étroit.
- `box-sizing: border-box` aide à contrôler la taille réelle.

## Partie 2 — Pratique

### 2.1. Créer le conteneur principal

#### Étape 1 — Définir la largeur

Ajoutez :

```css
.page {
    box-sizing: border-box;
    width: 90%;
    max-width: 1000px;
}
```

La zone principale utilise maintenant une largeur relative.

Elle ne dépasse pas `1000px`.

### 2.2. Centrer le conteneur

#### Étape 1 — Ajouter une marge

Complétez :

```css
.page {
    box-sizing: border-box;
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
}
```

Le conteneur est centré.

Un espace de `2rem` est créé au-dessus et au-dessous.

### 2.3. Ajouter un espace intérieur

#### Étape 1 — Ajouter `padding`

Ajoutez :

```css
.page {
    box-sizing: border-box;
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 2rem;
}
```

Le contenu possède maintenant un espace intérieur à gauche et à droite.

### 2.4. Préparer l'en-tête

#### Étape 1 — Organiser l'espace sous le titre

Ajoutez :

```css
.entete-page {
    margin-bottom: 3rem;
    text-align: center;
}

.entete-page h1 {
    margin: 0 0 1rem;
    font-size: 2.5rem;
}

.entete-page p {
    margin: 0;
}
```

Les espaces sont exprimés en `rem`.

### 2.5. Préparer la liste

#### Étape 1 — Organiser l’espace entre les cartes

Ajoutez :

```css
.liste-articles {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
```

La liste peut déjà passer sur plusieurs lignes grâce aux acquis précédents.

Dans ce tutoriel, nous ne modifions pas encore la largeur des cartes selon l’écran.

### 2.6. Préparer les cartes

#### Étape 1 — Ajouter une présentation simple

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    flex: 1;
    min-width: 240px;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.carte-article h2 {
    margin: 0 0 1rem;
}

.carte-article p {
    margin: 0 0 1rem;
}

.carte-article a {
    color: #2673e8;
    text-decoration: none;
}
```

Les cartes utilisent les acquis de l’UA.122.23.

### 2.7. Observer la page sur un grand écran

#### Étape 1 — Ouvrir la page

Affichez la page dans le navigateur.

Observez :

- la largeur du conteneur ;
- l’espace à gauche et à droite ;
- l’espace au-dessus et au-dessous ;
- l’espace entre le titre et les cartes.

### 2.8. Réduire la largeur de la fenêtre

#### Étape 1 — Observer les espaces

Réduisez progressivement la largeur de la fenêtre.

Lorsque l’espace disponible diminue, le `padding` de `2rem` peut devenir trop important.

Le contenu dispose alors de moins de place.

Nous allons réduire cet espace sur les écrans étroits.

### 2.9. Adapter le `padding`

#### Étape 1 — Créer une Media Query

Ajoutez :

```css
@media (max-width: 700px) {
    .page {
        width: 100%;
        padding: 0 1rem;
    }
}
```

Sur un écran étroit :

- la largeur du conteneur devient `100%` ;
- le `padding` passe de `2rem` à `1rem`.

Le contenu dispose donc de plus d’espace.

### 2.10. Adapter la marge extérieure

#### Étape 1 — Réduire la marge

Complétez la Media Query :

```css
@media (max-width: 700px) {
    .page {
        width: 100%;
        margin: 1.5rem auto;
        padding: 0 1rem;
    }
}
```

L’espace extérieur est maintenant plus petit sur un écran étroit.

### 2.11. Adapter l’espace sous l’en-tête

#### Étape 1 — Réduire `margin-bottom`

Ajoutez :

```css
@media (max-width: 700px) {
    .page {
        width: 100%;
        margin: 1.5rem auto;
        padding: 0 1rem;
    }

    .entete-page {
        margin-bottom: 2rem;
    }
}
```

L’espace entre l’en-tête et les articles diminue.

### 2.12. Adapter la taille du titre

La taille du titre peut également être réduite pour laisser plus d’espace au contenu.

#### Étape 1 — Modifier le titre

Ajoutez :

```css
@media (max-width: 700px) {
    .page {
        width: 100%;
        margin: 1.5rem auto;
        padding: 0 1rem;
    }

    .entete-page {
        margin-bottom: 2rem;
    }

    .entete-page h1 {
        font-size: 2rem;
    }
}
```

Le titre est maintenant plus petit sur un écran étroit.

### 2.13. Observer la différence

Comparez :

#### Écran large

```css
.page {
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 2rem;
}
```

#### Écran étroit

```css
@media (max-width: 700px) {
    .page {
        width: 100%;
        margin: 1.5rem auto;
        padding: 0 1rem;
    }
}
```

La structure du HTML ne change pas.

Seuls les styles changent.

### 2.14. Vérifier plusieurs largeurs

Testez :

```text
grand écran
↓
page centrée avec des espaces importants
```

```text
écran moyen
↓
page plus étroite
```

```text
écran étroit
↓
padding et margin réduits
```

Observez particulièrement les espaces autour du contenu.

### 2.15. Préparer le CSS final

Pour le résultat final, utilisez :

```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #1f2937;
    background: #f9fafb;
}

.page {
    box-sizing: border-box;
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 2rem;
}

.entete-page {
    margin-bottom: 3rem;
    text-align: center;
}

.entete-page h1 {
    margin: 0 0 1rem;
    font-size: 2.5rem;
}

.entete-page p {
    margin: 0;
}

.liste-articles {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.carte-article {
    box-sizing: border-box;
    flex: 1;
    min-width: 240px;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.carte-article h2 {
    margin: 0 0 1rem;
}

.carte-article p {
    margin: 0 0 1rem;
}

.carte-article a {
    color: #2673e8;
    text-decoration: none;
}

@media (max-width: 700px) {
    .page {
        width: 100%;
        margin: 1.5rem auto;
        padding: 0 1rem;
    }

    .entete-page {
        margin-bottom: 2rem;
    }

    .entete-page h1 {
        font-size: 2rem;
    }
}
```

### 2.16. Vérifier le périmètre du tutoriel

Dans ce tutoriel, vous avez adapté :

```text
conteneur
largeur
marge
padding
espace sous le titre
taille du titre
```

Vous n’avez pas encore réalisé l’adaptation spécifique des cartes.

Cette étape sera réalisée dans **T.122.255**.

**Travail à faire :**

À partir du HTML fourni :

- créez un conteneur principal ;
- utilisez `width: 90%` ;
- utilisez `max-width` ;
- centrez le conteneur avec `margin: auto` ;
- utilisez `rem` pour les espaces ;
- ajoutez un `padding` au conteneur ;
- créez une Media Query avec `max-width: 700px` ;
- réduisez le `padding` sur écran étroit ;
- réduisez la `margin` sur écran étroit ;
- réduisez l’espace sous l’en-tête ;
- réduisez la taille du titre ;
- testez plusieurs largeurs de fenêtre.

N'utilisez pas encore :

- une Media Query dédiée à la largeur des cartes ;
- une nouvelle organisation des cartes pour mobile ;
- `flex-direction` dans une Media Query ;
- un breakpoint supplémentaire ;
- `min-width` et `max-width` dans plusieurs Media Queries ;
- l'approche mobile-first.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-254-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur utilise une largeur relative et une largeur maximale.

Il est centré dans la page.

Ses espaces sont exprimés principalement en `rem`.

Une Media Query réduit les espaces lorsque la largeur du viewport est `700px` ou moins.

Le contenu reste correctement utilisable sans modifier le HTML.

L’adaptation spécifique des cartes n’est pas encore réalisée.

## Bilan

**Vous avez appris :**

- à adapter la largeur d'un conteneur ;
- à combiner `width` et `max-width` ;
- à utiliser `margin` et `padding` pour organiser les espaces ;
- à utiliser `rem` pour les espacements ;
- à modifier les espacements avec une Media Query.

**Vous avez réalisé :**

Un conteneur qui adapte sa largeur et ses espacements lorsque la largeur de l’écran diminue.

## Glossaire

- **Conteneur** : élément qui contient d'autres éléments.
- **`width`** : propriété qui définit la largeur d'un élément.
- **`max-width`** : propriété qui limite la largeur maximale.
- **`margin`** : espace autour d'un élément.
- **`padding`** : espace entre le contenu et le bord d'un élément.
- **`rem`** : unité relative à la taille de police de l'élément racine.
- **Media Query** : règle CSS qui permet de modifier les styles selon une condition.
- **Viewport** : zone visible de la page dans la fenêtre du navigateur.