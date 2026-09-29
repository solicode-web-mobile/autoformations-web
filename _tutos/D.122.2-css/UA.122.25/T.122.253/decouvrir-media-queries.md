---
title: "Découvrir les Media Queries"
layout: tuto
slug: "decouvrir-media-queries"
permalink: /tutos/decouvrir-media-queries/
tuto_id: "T.122.253"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 3
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Media Queries</title>
  </head>
  <body>

      <main class="page">

          <h1>Mon Blog</h1>

          <section class="zone-articles">

              <h2>Derniers articles</h2>

              <article class="carte-article">
                  <h3>Le métier de développeur</h3>
                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>
              </article>

              <article class="carte-article">
                  <h3>Créer une interface web</h3>
                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les informations.
                  </p>
              </article>

          </section>

      </main>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à appliquer des règles CSS différentes selon la largeur de l’écran avec les Media Queries.

## 2. Prérequis

Vous savez déjà :

- utiliser `width` et `max-width` ;
- utiliser `%` ;
- utiliser `rem` ;
- utiliser `vw` ;
- comprendre le viewport ;
- utiliser Flexbox ;
- utiliser `flex-direction` ;
- utiliser `gap` ;
- utiliser `flex-wrap`.

## Données de départ

### HTML

```html
<main class="page">

    <h1>Mon Blog</h1>

    <section class="zone-articles">

        <h2>Derniers articles</h2>

        <article class="carte-article">
            <h3>Le métier de développeur</h3>
            <p>
                Le développeur crée des applications
                et construit des solutions web.
            </p>
        </article>

        <article class="carte-article">
            <h3>Créer une interface web</h3>
            <p>
                Une interface claire aide l'utilisateur
                à comprendre les informations.
            </p>
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

### 1.1. Pourquoi utiliser une Media Query ?

Une même interface peut être affichée sur plusieurs tailles d'écran.

La largeur disponible peut donc changer.

Une **Media Query** permet d'appliquer une règle CSS seulement lorsque certaines conditions sont respectées.

Par exemple :

```css
@media (max-width: 700px) {
    .page {
        padding: 1rem;
    }
}
```

La règle s'applique lorsque la largeur du viewport est inférieure ou égale à `700px`.

### 1.2. Comprendre `@media`

`@media` indique que les règles CSS qui suivent dépendent d'une condition.

Exemple :

```css
@media (max-width: 700px) {
    .page h1 {
        font-size: 1.8rem;
    }
}
```

Le navigateur vérifie la largeur du viewport.

Si elle respecte la condition, la règle est appliquée.

### 1.3. Utiliser `max-width`

`max-width` dans une Media Query signifie :

> appliquer la règle jusqu'à cette largeur.

Exemple :

```css
@media (max-width: 700px) {
    .page {
        padding: 1rem;
    }
}
```

La règle concerne les écrans dont la largeur est au plus `700px`.

### 1.4. Utiliser `min-width`

`min-width` dans une Media Query signifie :

> appliquer la règle à partir de cette largeur.

Exemple :

```css
@media (min-width: 900px) {
    .page h1 {
        font-size: 2.5rem;
    }
}
```

La règle s'applique lorsque le viewport fait au moins `900px` de large.

### 1.5. Différence entre `min-width` et `max-width`

On peut retenir :

```text
max-width
→ jusqu'à une largeur

min-width
→ à partir d'une largeur
```

Exemple :

```css
@media (max-width: 700px) {
    /* écran étroit */
}

@media (min-width: 900px) {
    /* écran large */
}
```

### 1.6. Une Media Query ne modifie pas le HTML

Le HTML reste identique.

```html
<h1>Mon Blog</h1>
```

La Media Query modifie seulement les règles CSS.

### 1.7. Les règles normales et les Media Queries

On peut avoir une règle générale :

```css
.page h1 {
    font-size: 2.5rem;
}
```

Puis une règle pour les petits écrans :

```css
@media (max-width: 700px) {
    .page h1 {
        font-size: 1.8rem;
    }
}
```

La première règle définit l'apparence générale.

La seconde change la taille lorsque la condition est respectée.

### 1.8. À retenir

- `@media` permet d'appliquer des règles selon une condition.
- `max-width` cible une largeur jusqu'à une valeur.
- `min-width` cible une largeur à partir d'une valeur.
- La condition peut dépendre de la largeur du viewport.
- Une Media Query agit sur le CSS, pas sur le HTML.
- Les Media Queries permettent de préparer une interface responsive.

## Partie 2 — Pratique

### 2.1. Préparer la page

#### Étape 1 — Créer la zone principale

Ajoutez :

```css
.page {
    width: 90%;
    max-width: 900px;
    margin: 40px auto;
    padding: 2rem;
}

.page h1 {
    margin: 0 0 2rem;
    font-size: 2.5rem;
}
```

La page possède maintenant une largeur relative.

Le titre possède une taille définie en `rem`.

#### Étape 2 — Préparer la zone des articles

Ajoutez :

```css
.zone-articles {
    padding: 2rem;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.zone-articles h2 {
    margin: 0 0 1.5rem;
}
```

### 2.2. Préparer les cartes

#### Étape 1 — Ajouter le style

Ajoutez :

```css
.carte-article {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}

.carte-article h3 {
    margin: 0 0 1rem;
}

.carte-article p {
    margin: 0;
}
```

Les cartes sont maintenant visibles.

### 2.3. Créer une première Media Query

#### Étape 1 — Cibler les écrans étroits

Ajoutez :

```css
@media (max-width: 700px) {
    .page h1 {
        font-size: 1.8rem;
    }
}
```

Réduisez la largeur de la fenêtre.

Lorsque la largeur atteint `700px` ou moins, le titre devient plus petit.

### 2.4. Observer la condition

#### Étape 1 — Tester une grande largeur

Agrandissez la fenêtre au-dessus de `700px`.

Le titre revient à :

```css
font-size: 2.5rem;
```

#### Étape 2 — Tester une petite largeur

Réduisez la fenêtre à `700px` ou moins.

Le titre utilise :

```css
font-size: 1.8rem;
```

La Media Query est donc active.

### 2.5. Utiliser `max-width` sur les espacements

#### Étape 1 — Ajouter une autre règle

Ajoutez dans la même Media Query :

```css
@media (max-width: 700px) {
    .page {
        padding: 1rem;
    }

    .page h1 {
        font-size: 1.8rem;
    }

    .zone-articles {
        padding: 1rem;
    }
}
```

Les espaces diminuent sur les écrans étroits.

### 2.6. Créer une Media Query avec `min-width`

#### Étape 1 — Ajouter une règle pour les grands écrans

Ajoutez :

```css
@media (min-width: 900px) {
    .page h1 {
        font-size: 3rem;
    }
}
```

Lorsque la largeur atteint `900px` ou plus, le titre devient plus grand.

### 2.7. Comparer les deux conditions

Le CSS contient maintenant :

```css
@media (max-width: 700px) {
    /* écran étroit */
}
```

et :

```css
@media (min-width: 900px) {
    /* écran large */
}
```

Entre `701px` et `899px`, aucune de ces deux conditions n'est satisfaite.

La règle générale est alors utilisée.

### 2.8. Observer les trois situations

Testez plusieurs largeurs :

```text
moins de 700px
↓
Media Query max-width active
```

```text
de 701px à 899px
↓
règles générales
```

```text
900px ou plus
↓
Media Query min-width active
```

Observez le titre et les espacements.

### 2.9. Modifier une seule propriété

#### Étape 1 — Ajouter une couleur temporaire

Dans la Media Query mobile, ajoutez :

```css
@media (max-width: 700px) {
    .page h1 {
        font-size: 1.8rem;
        color: #2673e8;
    }
}
```

Réduisez la fenêtre.

Le titre change de couleur lorsque la condition est vraie.

#### Étape 2 — Supprimer le test

Supprimez :

```css
color: #2673e8;
```

Le résultat final doit utiliser uniquement les changements nécessaires au responsive.

### 2.10. Comprendre le rôle de la condition

La Media Query répond à une question simple :

> « La largeur actuelle respecte-t-elle la condition ? »

Pour :

```css
@media (max-width: 700px)
```

la réponse est oui lorsque la largeur est `700px` ou moins.

Pour :

```css
@media (min-width: 900px)
```

la réponse est oui lorsque la largeur est `900px` ou plus.

### 2.11. Préparer les futurs tutoriels

Dans ce tutoriel, nous avons seulement changé :

- la taille du titre ;
- les espacements de la page.

Dans les tutoriels suivants, les Media Queries seront utilisées pour adapter progressivement le conteneur et les cartes.

**Travail à faire :**

À partir du HTML fourni :

- créez une règle générale pour la page ;
- créez une Media Query avec `max-width` ;
- modifiez la taille du titre sur un écran étroit ;
- réduisez les espacements sur un écran étroit ;
- créez une Media Query avec `min-width` ;
- modifiez la taille du titre sur un écran large ;
- testez plusieurs largeurs de fenêtre ;
- observez quelle règle est appliquée.

Vous devez être capable d'expliquer la différence entre :

```text
max-width
```

et :

```text
min-width
```

N'utilisez pas encore :

- l'adaptation spécifique des cartes ;
- les breakpoints multiples complexes ;
- l'approche mobile-first ;
- `clamp()` ;
- les container queries.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-253-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

L'apprenant sait créer une Media Query avec `@media`.

Il sait utiliser :

```text
max-width
```

pour cibler un écran étroit.

Il sait utiliser :

```text
min-width
```

pour cibler un écran large.

Il sait observer le changement de règle lorsque la largeur du viewport change.

## Bilan

**Vous avez appris :**

- le rôle des Media Queries ;
- la syntaxe de `@media` ;
- l'utilisation de `max-width` ;
- l'utilisation de `min-width` ;
- le lien entre la Media Query et la largeur du viewport.

**Vous avez réalisé :**

Une page dont certains styles changent selon la largeur de l'écran.

## Glossaire

- **Media Query** : règle CSS qui permet d'appliquer des styles selon une condition.
- **`@media`** : syntaxe utilisée pour créer une Media Query.
- **`max-width`** : condition vraie jusqu'à une largeur donnée.
- **`min-width`** : condition vraie à partir d'une largeur donnée.
- **Condition** : règle qui détermine quand un style doit être appliqué.
- **Responsive** : capacité d'une interface à s'adapter aux différentes tailles d'écran.
- **Viewport** : zone visible de la page dans la fenêtre du navigateur.