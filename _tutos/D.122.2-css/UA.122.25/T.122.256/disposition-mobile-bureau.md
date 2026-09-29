---
title: "Construire une disposition mobile et bureau"
layout: tuto
slug: "disposition-mobile-bureau"
permalink: /tutos/disposition-mobile-bureau/
tuto_id: "T.122.256"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 6
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Disposition mobile et bureau</title>
  </head>
  <body>

      <main class="page">

          <header class="entete-page">
              <h1>Derniers articles</h1>
              <p>
                  Découvrez les derniers articles du blog.
              </p>
          </header>

          <section class="liste-cartes">

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

              <article class="carte-article">
                  <h2>Tester une application</h2>
                  <p>
                      Les tests permettent de vérifier
                      que les fonctionnalités fonctionnent.
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

Construire deux dispositions pour la même liste de cartes :

- une disposition verticale sur un petit écran ;
- une disposition horizontale sur un écran plus large.

## 2. Prérequis

Vous savez déjà :

- utiliser `display: flex` ;
- utiliser `flex-direction` ;
- utiliser `justify-content` ;
- utiliser `align-items` ;
- utiliser `flex-wrap` ;
- utiliser `gap` ;
- utiliser `flex` ;
- créer une Media Query ;
- utiliser `max-width` dans une Media Query ;
- adapter la largeur d'un conteneur et de ses cartes.

## Données de départ

### HTML

```html id="n4x6xk"
<main class="page">

    <header class="entete-page">
        <h1>Derniers articles</h1>
        <p>
            Découvrez les derniers articles du blog.
        </p>
    </header>

    <section class="liste-cartes">

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

        <article class="carte-article">
            <h2>Tester une application</h2>
            <p>
                Les tests permettent de vérifier
                que les fonctionnalités fonctionnent.
            </p>
            <a href="#">Lire l'article</a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css id="0b05be"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Une même liste peut avoir plusieurs dispositions

Une liste de cartes peut être présentée différemment selon la largeur de l'écran.

Sur un grand écran :

```text
Carte 1    Carte 2    Carte 3
```

Sur un petit écran :

```text
Carte 1

Carte 2

Carte 3
```

Le HTML peut rester identique.

Seule la disposition CSS change.

### 1.2. Utiliser `flex-direction`

Nous savons déjà utiliser :

```css
.liste-cartes {
    display: flex;
}
```

Avec :

```css id="o7ih1w"
flex-direction: row;
```

les cartes sont organisées horizontalement.

Avec :

```css id="7u9y0b"
flex-direction: column;
```

les cartes sont organisées verticalement.

### 1.3. Changer la direction avec une Media Query

Une Media Query peut modifier `flex-direction`.

Exemple :

```css id="7x2tgs"
.liste-cartes {
    display: flex;
    flex-direction: row;
}

@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }
}
```

Sur un grand écran, les cartes sont sur une ligne.

Sur un écran de `700px` ou moins, elles sont placées dans une colonne.

### 1.4. Garder `flex-wrap`

On peut conserver :

```css id="q6gwwn"
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
}
```

Sur les grands écrans, `flex-wrap` permet aux cartes de passer sur une nouvelle ligne si l'espace devient insuffisant.

Sur le petit écran, `flex-direction: column` place directement les cartes dans une colonne.

### 1.5. Garder `gap`

Le même espace peut rester utilisé dans les deux dispositions :

```css id="7w6q9g"
.liste-cartes {
    display: flex;
    gap: 24px;
}
```

`gap` fonctionne donc avec la ligne comme avec la colonne.

### 1.6. Adapter aussi la largeur des cartes

Les cartes peuvent utiliser :

```css id="8t8vyg"
.carte-article {
    flex: 1;
}
```

Sur grand écran, elles peuvent partager l'espace disponible.

Sur petit écran, on peut utiliser :

```css id="4jghqe"
@media (max-width: 700px) {
    .carte-article {
        width: 100%;
    }
}
```

La largeur et la direction sont ainsi adaptées ensemble.

### 1.7. Une disposition, deux conditions

On peut retenir :

```text
écran large
    ↓
flex-direction: row

écran étroit
    ↓
flex-direction: column
```

Cette logique permet de construire une disposition mobile et bureau avec le même HTML.

### 1.8. À retenir

- `flex-direction: row` organise les cartes horizontalement.
- `flex-direction: column` organise les cartes verticalement.
- Une Media Query peut changer `flex-direction`.
- `gap` reste utilisable dans les deux directions.
- Le même HTML peut produire deux dispositions différentes.
- Une disposition mobile et une disposition bureau peuvent utiliser les mêmes composants.

## Partie 2 — Pratique

### 2.1. Préparer le conteneur

#### Étape 1 — Créer le conteneur principal

Ajoutez :

```css id="j8b2d0"
.page {
    box-sizing: border-box;
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
}

.entete-page {
    margin-bottom: 2rem;
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

### 2.2. Créer la disposition de base

#### Étape 1 — Mettre les cartes sur une ligne

Ajoutez :

```css id="0ip4ip"
.liste-cartes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
}
```

Sur un écran suffisamment large, les cartes sont placées sur une ligne.

### 2.3. Préparer les cartes

#### Étape 1 — Rendre les cartes flexibles

Ajoutez :

```css id="04e4bq"
.carte-article {
    box-sizing: border-box;
    flex: 1;
    min-width: 240px;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les cartes peuvent partager l'espace disponible.

#### Étape 2 — Organiser le contenu

Ajoutez :

```css id="hg1b7k"
.carte-article h2 {
    margin: 0 0 1rem;
    font-size: 1.4rem;
}

.carte-article p {
    margin: 0 0 1rem;
}

.carte-article a {
    color: #2673e8;
    text-decoration: none;
}
```

### 2.4. Observer la disposition bureau

#### Étape 1 — Ouvrir la page

Ouvrez la page dans le navigateur.

Agrandissez la fenêtre.

Observez les trois cartes.

Elles sont organisées horizontalement lorsque l'espace le permet.

### 2.5. Créer la disposition mobile

#### Étape 1 — Ajouter une Media Query

Ajoutez :

```css id="5nzmvq"
@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }
}
```

Réduisez la largeur de la fenêtre sous `700px`.

Les cartes passent maintenant dans une colonne.

### 2.6. Adapter la largeur des cartes

#### Étape 1 — Ajouter une largeur complète

Complétez la Media Query :

```css id="b8s6my"
@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }

    .carte-article {
        width: 100%;
        min-width: 0;
    }
}
```

Chaque carte peut maintenant utiliser toute la largeur disponible.

### 2.7. Observer les deux dispositions

Testez une fenêtre large :

```text id="f1f5h3"
Carte 1    Carte 2    Carte 3
```

Puis une fenêtre étroite :

```text id="ab9y73"
Carte 1

Carte 2

Carte 3
```

Le HTML n'a pas changé.

La Media Query modifie la disposition.

### 2.8. Vérifier `gap`

#### Étape 1 — Observer l'écran large

Les cartes sont séparées par :

```css id="0qybbq"
gap: 24px;
```

#### Étape 2 — Observer l'écran étroit

Les cartes restent séparées.

Le même `gap` fonctionne entre les éléments de la colonne.

### 2.9. Tester la direction sans Media Query

#### Étape 1 — Tester `column`

Temporairement, modifiez :

```css id="1jece7"
flex-direction: row;
```

en :

```css id="9m0q4d"
flex-direction: column;
```

Observez le résultat.

#### Étape 2 — Restaurer `row`

Remettez :

```css id="qik3d2"
flex-direction: row;
```

Le comportement bureau est restauré.

### 2.10. Observer le rôle de la Media Query

La règle générale est :

```css id="xdq5q0"
.liste-cartes {
    flex-direction: row;
}
```

La règle pour l'écran étroit est :

```css id="6unw5g"
@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }
}
```

La première définit la disposition générale.

La deuxième adapte cette disposition aux écrans étroits.

### 2.11. Tester avec quatre cartes

#### Étape 1 — Ajouter une quatrième carte

Ajoutez :

```html id="8e9c4p"
<article class="carte-article">
    <h2>MySQL</h2>
    <p>
        MySQL permet de stocker les données
        d'une application.
    </p>
    <a href="#">Lire l'article</a>
</article>
```

#### Étape 2 — Tester sur grand écran

Observez les cartes.

Elles peuvent rester sur une ligne ou passer à une nouvelle ligne selon l'espace disponible.

#### Étape 3 — Tester sur petit écran

Réduisez la fenêtre sous `700px`.

Les cartes doivent être placées dans une colonne.

### 2.12. Tester le seuil

#### Étape 1 — Modifier temporairement la condition

Remplacez :

```css id="pjmr0z"
@media (max-width: 700px)
```

par :

```css id="6s7g01"
@media (max-width: 800px)
```

Observez le moment où la disposition change.

#### Étape 2 — Revenir au seuil prévu

Remettez :

```css id="kqbgq1"
@media (max-width: 700px)
```

### 2.13. Combiner disposition et largeur

Pour le petit écran, utilisez :

```css id="n12y43"
@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }

    .carte-article {
        width: 100%;
        min-width: 0;
    }
}
```

Deux adaptations sont réalisées :

```text id="v9p4fi"
direction
+
largeur
```

La liste devient verticale.

Chaque carte utilise la largeur disponible.

### 2.14. Vérifier la cohérence

Vérifiez que :

- le HTML reste identique ;
- le conteneur utilise Flexbox ;
- le grand écran utilise `row` ;
- le petit écran utilise `column` ;
- `gap` est conservé ;
- les cartes utilisent `flex` sur grand écran ;
- les cartes utilisent `width: 100%` sur petit écran ;
- aucune nouvelle technologie de layout n'est utilisée.

### 2.15. Préparer le CSS final

Pour le résultat final, utilisez :

```css id="gs9v1o"
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
}

.entete-page {
    margin-bottom: 2rem;
    text-align: center;
}

.entete-page h1 {
    margin: 0 0 1rem;
    font-size: 2.5rem;
}

.entete-page p {
    margin: 0;
}

.liste-cartes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
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
    font-size: 1.4rem;
}

.carte-article p {
    margin: 0 0 1rem;
}

.carte-article a {
    color: #2673e8;
    text-decoration: none;
}

@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }

    .carte-article {
        width: 100%;
        min-width: 0;
    }
}
```

### 2.16. Vérifier les deux versions de l'interface

#### Bureau

```text
largeur > 700px
        ↓
flex-direction: row
        ↓
cartes horizontales
```

#### Mobile

```text
largeur ≤ 700px
        ↓
flex-direction: column
        ↓
cartes verticales
```

**Travail à faire :**

À partir du HTML fourni :

- créez au moins quatre cartes ;
- utilisez `.liste-cartes` comme conteneur Flexbox ;
- utilisez `flex-direction: row` pour la disposition générale ;
- utilisez `flex-wrap: wrap` ;
- utilisez `gap` ;
- utilisez `flex: 1` pour les cartes ;
- créez une Media Query avec `max-width: 700px` ;
- utilisez `flex-direction: column` dans cette Media Query ;
- utilisez `width: 100%` pour les cartes sur petit écran ;
- utilisez `min-width: 0` dans la Media Query ;
- testez la disposition sur un grand écran ;
- testez la disposition sur un petit écran.

Vous devez obtenir deux dispositions de la même réalisation :

```text
Bureau → ligne
Mobile → colonne
```

N'utilisez pas encore :

- l'approche mobile-first ;
- plusieurs breakpoints ;
- CSS Grid ;
- `clamp()` ;
- container queries ;
- `flex-basis` ;
- `order`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-256-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Sur un écran de plus de `700px`, les cartes utilisent une disposition horizontale.

Sur un écran de `700px` ou moins, les cartes utilisent une disposition verticale.

Le même HTML est utilisé dans les deux situations.

L'espace entre les cartes reste régulier.

Les cartes utilisent toute la largeur disponible sur petit écran.

## Bilan

**Vous avez appris :**

- à construire une disposition bureau ;
- à construire une disposition mobile ;
- à changer `flex-direction` avec une Media Query ;
- à combiner direction et largeur ;
- à conserver le même HTML pour plusieurs dispositions.

**Vous avez réalisé :**

Une liste de cartes capable de passer d'une organisation horizontale à une organisation verticale selon la largeur de l'écran.

## Glossaire

- **Disposition** : manière dont les éléments sont placés dans une interface.
- **Disposition bureau** : organisation prévue pour une zone d'affichage large.
- **Disposition mobile** : organisation prévue pour une zone d'affichage étroite.
- **`flex-direction`** : propriété qui définit la direction des éléments Flexbox.
- **`row`** : organise les éléments sur une ligne.
- **`column`** : organise les éléments dans une colonne.
- **Media Query** : règle CSS qui permet de modifier le style selon une condition.