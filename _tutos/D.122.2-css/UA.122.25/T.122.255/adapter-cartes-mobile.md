---
title: "Adapter les cartes aux petits écrans"
layout: tuto
slug: "adapter-cartes-mobile"
permalink: /tutos/adapter-cartes-mobile/
tuto_id: "T.122.255"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 5
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes responsive</title>
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

## 1. Objectif

Adapter la largeur des cartes pour qu'elles restent lisibles sur un petit écran.

## 2. Prérequis

Vous savez déjà :

- utiliser `width` ;
- utiliser `max-width` ;
- utiliser `min-width` ;
- utiliser `flex` ;
- utiliser `flex-wrap` ;
- utiliser `gap` ;
- créer une Media Query ;
- utiliser `max-width` dans une Media Query ;
- adapter un conteneur à l'espace disponible.

## Données de départ

### HTML

```html id="fz9tp6"
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

```css id="6z5k7d"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Une carte doit tenir dans l'espace disponible

Sur un grand écran, plusieurs cartes peuvent être placées sur une même ligne.

Sur un petit écran, l'espace horizontal est plus faible.

Une carte trop large peut alors réduire la place disponible pour les autres cartes.

### 1.2. Utiliser `flex-wrap`

Nous avons déjà appris :

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
}
```

`flex-wrap` permet aux cartes de passer sur une nouvelle ligne.

Cela évite de garder toutes les cartes sur une seule ligne.

### 1.3. Donner une largeur aux cartes

Une carte peut avoir une largeur de départ :

```css
.carte-article {
    width: 280px;
}
```

Avec plusieurs cartes, cette largeur détermine l'espace nécessaire.

### 1.4. Utiliser `flex: 1`

Nous avons également appris :

```css
.carte-article {
    flex: 1;
}
```

Les cartes peuvent alors partager l'espace disponible.

Cette propriété permet de construire des cartes plus flexibles.

### 1.5. Adapter la carte dans une Media Query

Une Media Query peut modifier la largeur de la carte lorsque l'écran devient étroit.

Exemple :

```css
@media (max-width: 700px) {
    .carte-article {
        width: 100%;
    }
}
```

La carte utilise alors toute la largeur disponible de la ligne.

### 1.6. Pourquoi conserver `flex-wrap` ?

La Media Query modifie la largeur des cartes.

`flex-wrap` permet ensuite aux cartes de se placer sur plusieurs lignes.

On obtient :

```text
écran large
Carte 1    Carte 2    Carte 3

écran étroit
Carte 1
Carte 2
Carte 3
```

Le HTML ne change pas.

### 1.7. À retenir

- Les cartes doivent utiliser l'espace disponible.
- `flex-wrap` permet le passage à la ligne.
- `width` permet de contrôler la largeur d'une carte.
- `flex: 1` permet aux cartes de partager l'espace.
- Une Media Query peut modifier la largeur des cartes sur un petit écran.
- Le HTML reste identique.

## Partie 2 — Pratique

### 2.1. Préparer le conteneur

#### Étape 1 — Créer la zone principale

Ajoutez :

```css id="r4cywv"
.page {
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

La zone principale utilise une largeur relative.

### 2.2. Créer la liste de cartes

#### Étape 1 — Activer Flexbox

Ajoutez :

```css id="4ydzpj"
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
```

Les cartes peuvent passer sur plusieurs lignes.

### 2.3. Préparer les cartes

#### Étape 1 — Donner une largeur de départ

Ajoutez :

```css id="g0j5g1"
.carte-article {
    box-sizing: border-box;
    width: 280px;
    min-width: 240px;
    flex: 1;
    padding: 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les cartes peuvent partager l'espace disponible.

#### Étape 2 — Organiser le contenu

Ajoutez :

```css id="odq0qi"
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

Le contenu reste lisible.

### 2.4. Observer l'écran large

#### Étape 1 — Ouvrir la page

Ouvrez la page dans le navigateur.

Sur une fenêtre suffisamment large, observez les trois cartes.

Elles utilisent l'espace disponible du conteneur.

### 2.5. Réduire la largeur de la fenêtre

#### Étape 1 — Tester un écran plus petit

Réduisez progressivement la largeur de la fenêtre.

Observez le comportement des cartes.

Grâce à `flex-wrap`, les cartes peuvent passer sur plusieurs lignes.

### 2.6. Adapter la largeur sur petit écran

#### Étape 1 — Créer la Media Query

Ajoutez :

```css id="hktk4q"
@media (max-width: 700px) {
    .carte-article {
        width: 100%;
        min-width: 0;
    }
}
```

Sur un écran de `700px` ou moins, chaque carte peut utiliser toute la largeur disponible de sa ligne.

### 2.7. Observer le nouveau résultat

#### Étape 1 — Réduire la fenêtre

Réduisez la fenêtre sous `700px`.

Les cartes doivent maintenant utiliser toute la largeur disponible.

Avec `flex-wrap`, elles se placent sur plusieurs lignes.

Le résultat devient plus adapté à un petit écran.

### 2.8. Comprendre le rôle de chaque règle

Observez :

```css id="jivg2a"
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
```

Cette règle organise la liste.

Observez :

```css id="b3k2t0"
.carte-article {
    width: 280px;
    min-width: 240px;
    flex: 1;
}
```

Ces propriétés contrôlent le comportement général des cartes.

Observez ensuite :

```css id="by0xtn"
@media (max-width: 700px) {
    .carte-article {
        width: 100%;
        min-width: 0;
    }
}
```

Cette règle adapte les cartes aux écrans étroits.

### 2.9. Tester une autre largeur

#### Étape 1 — Modifier temporairement la condition

Changez :

```css id="8m95iv"
@media (max-width: 700px)
```

en :

```css id="ob4e85"
@media (max-width: 600px)
```

Observez le moment où l'adaptation apparaît.

#### Étape 2 — Revenir à la valeur prévue

Remettez :

```css id="3wj8g4"
@media (max-width: 700px)
```

Le tutoriel utilise maintenant un seul seuil simple pour les petits écrans.

### 2.10. Tester le contenu

#### Étape 1 — Ajouter plus de texte

Dans une carte, ajoutez une phrase supplémentaire :

```html id="40ms9z"
<p>
    Le développeur crée des applications
    et construit des solutions web.
    Il teste aussi les fonctionnalités.
</p>
```

Réduisez la largeur de la fenêtre.

Vérifiez que le texte reste dans la carte.

### 2.11. Tester une quatrième carte

#### Étape 1 — Ajouter une nouvelle carte

Ajoutez :

```html id="s6ugjk"
<article class="carte-article">
    <h2>MySQL</h2>
    <p>
        MySQL permet de stocker les données
        d'une application.
    </p>
    <a href="#">Lire l'article</a>
</article>
```

La même règle CSS s'applique automatiquement.

#### Étape 2 — Tester sur petit écran

Réduisez la fenêtre à moins de `700px`.

Les cartes doivent rester dans la largeur disponible.

### 2.12. Vérifier la hiérarchie des responsabilités

Dans cette étape :

```text
flex-wrap
    ↓
permet plusieurs lignes

width
    ↓
contrôle la largeur de la carte

Media Query
    ↓
adapte la largeur sur petit écran
```

La disposition change sans modifier le HTML.

### 2.13. Préparer le CSS final

Pour le résultat final, utilisez :

```css id="cx2ggr"
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
    flex-wrap: wrap;
    gap: 24px;
}

.carte-article {
    box-sizing: border-box;
    width: 280px;
    min-width: 240px;
    flex: 1;
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
    .carte-article {
        width: 100%;
        min-width: 0;
    }
}
```

### 2.14. Vérifier les deux situations

#### Écran large

Les cartes utilisent l'espace disponible avec :

```css id="h1r6p9"
flex: 1;
```

Elles peuvent être placées sur plusieurs colonnes.

#### Petit écran

La Media Query applique :

```css id="lg52jn"
width: 100%;
min-width: 0;
```

Les cartes utilisent alors toute la largeur disponible de leur ligne.

### 2.15. Vérifier le résultat

Vérifiez :

- les cartes utilisent Flexbox ;
- `flex-wrap` est actif ;
- `gap` sépare les cartes ;
- les cartes utilisent `flex: 1` ;
- la largeur est adaptée sur petit écran ;
- les cartes ne dépassent pas la zone disponible ;
- le HTML reste identique ;
- aucune nouvelle organisation avec `flex-direction` n'est utilisée.

**Travail à faire :**

À partir du HTML fourni :

- créez au moins quatre cartes ;
- utilisez `display: flex` ;
- utilisez `flex-wrap: wrap` ;
- utilisez `gap` ;
- utilisez `flex: 1` pour les cartes ;
- donnez une largeur de départ aux cartes ;
- créez une Media Query avec `max-width: 700px` ;
- utilisez `width: 100%` sur les cartes dans cette Media Query ;
- vérifiez le résultat sur un grand écran ;
- vérifiez le résultat sur un petit écran.

Le résultat doit permettre aux cartes de conserver une largeur utilisable sur un petit écran.

N'utilisez pas encore :

- `flex-direction` dans une Media Query ;
- une organisation mobile et bureau complète ;
- plusieurs breakpoints ;
- `flex-basis` ;
- CSS Grid ;
- `clamp()` ;
- l'approche mobile-first.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-255-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Sur grand écran, les cartes utilisent l'espace disponible du conteneur.

Sur petit écran, chaque carte peut utiliser toute la largeur disponible de sa ligne.

Les cartes ne dépassent pas la zone principale.

Le changement est obtenu avec une Media Query et sans modifier le HTML.

## Bilan

**Vous avez appris :**

- à adapter la largeur des cartes avec une Media Query ;
- à réutiliser `flex-wrap` pour organiser les cartes ;
- à utiliser `width: 100%` sur petit écran ;
- à combiner largeur et Flexbox pour construire des cartes plus adaptées aux petits écrans.

**Vous avez réalisé :**

Une liste de cartes qui s'adapte à un écran étroit sans modifier le HTML.

## Glossaire

- **Carte responsive** : carte qui adapte sa taille à l'espace disponible.
- **`width`** : propriété qui définit la largeur d'un élément.
- **`width: 100%`** : largeur qui utilise toute la largeur disponible de la ligne.
- **`flex-wrap`** : propriété qui permet aux éléments de passer sur plusieurs lignes.
- **Media Query** : règle CSS qui applique des styles selon une condition.
- **Écran étroit** : écran dont la largeur disponible est réduite.
- **Adaptation** : modification du style pour utiliser correctement l'espace disponible.