---
title: "Adopter une approche mobile-first"
layout: tuto
slug: "approche-mobile-first"
permalink: /tutos/approche-mobile-first/
tuto_id: "T.122.257"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 7
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blog mobile-first</title>
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
                      les fonctionnalités.
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

Construire une interface **mobile-first**.

Commencer par la version pour petit écran.

Puis ajouter les styles nécessaires pour les écrans plus larges avec `min-width`.

## 2. Prérequis

Vous savez déjà :

- utiliser `display: flex` ;
- utiliser `flex-direction` ;
- utiliser `flex-wrap` ;
- utiliser `gap` ;
- utiliser `flex` ;
- utiliser `width` et `max-width` ;
- utiliser `%`, `rem` et `vw` ;
- créer une Media Query ;
- utiliser `max-width` dans une Media Query ;
- adapter un conteneur ;
- adapter les cartes aux petits écrans ;
- construire une disposition mobile et bureau.

## Données de départ

### HTML

```html id="l0q1ch"
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
                les fonctionnalités.
            </p>
            <a href="#">Lire l'article</a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css id="g2a3zh"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Comprendre le mobile-first

L'approche **mobile-first** consiste à commencer par les styles destinés aux petits écrans.

On ajoute ensuite les styles nécessaires pour les écrans plus larges.

Le principe est :

```text id="wv9u3s"
petit écran
    ↓
style de base
    ↓
écran plus large
    ↓
ajout avec min-width
```

### 1.2. Les styles de base

Dans une approche mobile-first, les règles écrites en dehors des Media Queries correspondent d'abord à la version mobile.

Exemple :

```css id="3e3g5v"
.liste-cartes {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
```

La liste est donc verticale dans la version de base.

### 1.3. Utiliser `min-width`

Pour adapter la page aux écrans plus larges, on utilise une Media Query avec `min-width`.

Exemple :

```css id="tsdkht"
@media (min-width: 800px) {
    .liste-cartes {
        flex-direction: row;
    }
}
```

À partir de `800px`, la liste devient horizontale.

### 1.4. Différence avec l'approche précédente

Dans T.122.256, nous avons utilisé :

```css id="57r1p1"
@media (max-width: 700px)
```

La règle modifiait la présentation pour les petits écrans.

Dans une approche mobile-first, la version mobile est directement la base.

On ajoute ensuite :

```css id="9a6swa"
@media (min-width: 800px)
```

pour les grands écrans.

### 1.5. La logique mobile-first

Le code peut être lu dans cet ordre :

```text id="b80i1v"
styles de base
→ mobile

@media (min-width: ...)
→ écran plus large
```

La version mobile n'a donc pas besoin d'une Media Query.

### 1.6. Adapter les cartes

En mobile-first, les cartes peuvent commencer par :

```css id="lwpd0w"
.carte-article {
    width: 100%;
}
```

Puis devenir flexibles sur un écran plus large :

```css id="4dfjcw"
@media (min-width: 800px) {
    .carte-article {
        flex: 1;
    }
}
```

### 1.7. Choisir un breakpoint

Un **breakpoint** est une largeur à partir de laquelle une nouvelle organisation est appliquée.

Exemple :

```css id="c7ijvr"
@media (min-width: 800px)
```

Ici, `800px` est le breakpoint utilisé pour passer à une organisation plus large.

Dans ce tutoriel, un seul breakpoint simple est utilisé.

### 1.8. Pourquoi commencer par le mobile ?

Le petit écran dispose de moins d'espace.

Il est donc utile de commencer avec une structure simple.

On ajoute ensuite les éléments nécessaires lorsque l'espace devient plus grand.

Cette méthode permet de construire progressivement la présentation.

### 1.9. À retenir

- Mobile-first commence par la version mobile.
- Les styles de base servent d'abord au petit écran.
- `min-width` permet d'ajouter des styles pour les écrans plus larges.
- Un breakpoint indique à partir de quelle largeur un changement s'applique.
- Le même HTML peut servir à toutes les tailles d'écran.

## Partie 2 — Pratique

### 2.1. Créer les variables communes

#### Étape 1 — Préparer `:root`

Ajoutez :

```css id="8xmxyo"
:root {
    --couleur-texte: #1f2937;
    --couleur-titre: #111827;
    --couleur-fond: #f9fafb;
    --couleur-surface: #ffffff;
    --couleur-bordure: #e5e7eb;
    --couleur-primaire: #2673e8;

    --espace-petit: 0.5rem;
    --espace-moyen: 1rem;
    --espace-grand: 1.5rem;
}
```

Les valeurs communes restent centralisées.

### 2.2. Construire d'abord la version mobile

#### Étape 1 — Préparer la page

Ajoutez :

```css id="8le2mj"
body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
}

.page {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: var(--espace-grand) var(--espace-moyen);
}
```

La page commence avec une présentation adaptée à un petit écran.

#### Étape 2 — Préparer l'en-tête

Ajoutez :

```css id="8h0j24"
.entete-page {
    margin-bottom: var(--espace-grand);
    text-align: center;
}

.entete-page h1 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-size: 2rem;
}

.entete-page p {
    margin: 0;
}
```

### 2.3. Construire la liste mobile

#### Étape 1 — Placer les cartes dans une colonne

Ajoutez :

```css id="f9kt8w"
.liste-cartes {
    display: flex;
    flex-direction: column;
    gap: var(--espace-grand);
}
```

La version de base est verticale.

### 2.4. Construire les cartes mobiles

#### Étape 1 — Utiliser toute la largeur

Ajoutez :

```css id="sln8jp"
.carte-article {
    box-sizing: border-box;
    width: 100%;
    padding: var(--espace-grand);
    background: var(--couleur-surface);
    border: 1px solid var(--couleur-bordure);
    border-radius: 12px;
}
```

Chaque carte utilise toute la largeur disponible.

#### Étape 2 — Organiser le contenu

Ajoutez :

```css id="s0qzde"
.carte-article h2 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-size: 1.4rem;
}

.carte-article p {
    margin: 0 0 var(--espace-moyen);
}

.carte-article a {
    color: var(--couleur-primaire);
    text-decoration: none;
}
```

La version mobile est maintenant terminée.

### 2.5. Tester la version mobile

#### Étape 1 — Ouvrir la page

Ouvrez la page dans le navigateur.

Réduisez la largeur de la fenêtre.

Vérifiez que :

- les cartes sont verticales ;
- chaque carte utilise toute la largeur disponible ;
- les espaces sont réguliers ;
- le contenu reste lisible.

### 2.6. Ajouter la version pour écran plus large

#### Étape 1 — Créer le breakpoint

Ajoutez :

```css id="xsoqfl"
@media (min-width: 800px) {
    .page {
        width: 90%;
        max-width: 1000px;
        margin: 2rem auto;
    }
}
```

À partir de `800px`, la page possède une largeur maximale.

### 2.7. Modifier la disposition des cartes

#### Étape 1 — Passer à une ligne

Ajoutez dans la même Media Query :

```css id="ycrze5"
@media (min-width: 800px) {
    .page {
        width: 90%;
        max-width: 1000px;
        margin: 2rem auto;
    }

    .liste-cartes {
        flex-direction: row;
    }
}
```

À partir de `800px`, les cartes peuvent être organisées horizontalement.

### 2.8. Adapter la largeur des cartes

#### Étape 1 — Permettre le partage de l'espace

Ajoutez :

```css id="4p0t7z"
@media (min-width: 800px) {
    .page {
        width: 90%;
        max-width: 1000px;
        margin: 2rem auto;
    }

    .liste-cartes {
        flex-direction: row;
    }

    .carte-article {
        flex: 1;
        min-width: 0;
    }
}
```

Les cartes partagent maintenant l'espace disponible sur grand écran.

### 2.9. Adapter l'en-tête

#### Étape 1 — Agrandir le titre

Ajoutez :

```css id="fbwfy9"
@media (min-width: 800px) {
    .entete-page h1 {
        font-size: 2.5rem;
    }
}
```

Le titre devient plus grand lorsque l'espace est suffisant.

### 2.10. Observer la logique mobile-first

Le CSS complet commence par :

```text id="xr7rbe"
styles de base
    ↓
mobile
```

Puis :

```text id="qtcryn"
@media (min-width: 800px)
    ↓
adaptation grand écran
```

Il n'existe pas de Media Query nécessaire pour créer la version mobile.

### 2.11. Tester le breakpoint

#### Étape 1 — Tester sous `800px`

Réduisez la fenêtre sous `800px`.

La liste reste verticale.

#### Étape 2 — Tester à `800px` ou plus

Agrandissez la fenêtre à `800px` ou plus.

La liste devient horizontale.

### 2.12. Observer le changement avec le même HTML

Le HTML reste :

```html id="r5hrle"
<section class="liste-cartes">

    <article class="carte-article">
        ...
    </article>

    <article class="carte-article">
        ...
    </article>

    <article class="carte-article">
        ...
    </article>

</section>
```

Le HTML ne change pas.

Seul le CSS adapte la disposition.

### 2.13. Tester un autre breakpoint

#### Étape 1 — Modifier temporairement la valeur

Changez :

```css id="8s9x3q"
@media (min-width: 800px)
```

en :

```css id="2k0z72"
@media (min-width: 900px)
```

Observez le moment où la disposition change.

#### Étape 2 — Revenir à la valeur du tutoriel

Remettez :

```css id="v11e4j"
@media (min-width: 800px)
```

Un seul breakpoint reste utilisé.

### 2.14. Comparer avec l'approche `max-width`

Dans une approche classique :

```css id="cgyug8"
@media (max-width: 700px) {
    .liste-cartes {
        flex-direction: column;
    }
}
```

Dans l'approche mobile-first :

```css id="bubx3j"
.liste-cartes {
    flex-direction: column;
}

@media (min-width: 800px) {
    .liste-cartes {
        flex-direction: row;
    }
}
```

La première approche modifie la version mobile.

La deuxième commence directement par la version mobile.

### 2.15. Préparer le CSS final

Pour le résultat final, utilisez :

```css id="6pl4vm"
:root {
    --couleur-texte: #1f2937;
    --couleur-titre: #111827;
    --couleur-fond: #f9fafb;
    --couleur-surface: #ffffff;
    --couleur-bordure: #e5e7eb;
    --couleur-primaire: #2673e8;

    --espace-petit: 0.5rem;
    --espace-moyen: 1rem;
    --espace-grand: 1.5rem;
}

body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
}

.page {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: var(--espace-grand) var(--espace-moyen);
}

.entete-page {
    margin-bottom: var(--espace-grand);
    text-align: center;
}

.entete-page h1 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-size: 2rem;
}

.entete-page p {
    margin: 0;
}

.liste-cartes {
    display: flex;
    flex-direction: column;
    gap: var(--espace-grand);
}

.carte-article {
    box-sizing: border-box;
    width: 100%;
    padding: var(--espace-grand);
    background: var(--couleur-surface);
    border: 1px solid var(--couleur-bordure);
    border-radius: 12px;
}

.carte-article h2 {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-titre);
    font-size: 1.4rem;
}

.carte-article p {
    margin: 0 0 var(--espace-moyen);
}

.carte-article a {
    color: var(--couleur-primaire);
    text-decoration: none;
}

@media (min-width: 800px) {

    .page {
        width: 90%;
        max-width: 1000px;
        margin: 2rem auto;
    }

    .entete-page h1 {
        font-size: 2.5rem;
    }

    .liste-cartes {
        flex-direction: row;
    }

    .carte-article {
        flex: 1;
        min-width: 0;
    }
}
```

### 2.16. Vérifier le résultat

Testez :

```text id="w0t4um"
moins de 800px
↓
version mobile
↓
cartes verticales
↓
cartes sur toute la largeur
```

Puis :

```text id="ct1gj2"
800px ou plus
↓
version large
↓
cartes horizontales
↓
partage de l'espace
```

**Travail à faire :**

À partir du HTML fourni :

- construisez d'abord la version mobile ;
- utilisez `width: 100%` pour les cartes ;
- placez les cartes dans une colonne ;
- utilisez `gap` pour les espaces ;
- utilisez les variables CSS pour les valeurs communes ;
- créez ensuite une Media Query avec `min-width: 800px` ;
- limitez la largeur de la page sur grand écran ;
- passez les cartes en `row` ;
- utilisez `flex: 1` sur grand écran ;
- augmentez la taille du titre sur grand écran ;
- testez la page sous `800px` ;
- testez la page à partir de `800px`.

Vous devez construire la page selon cette logique :

```text
mobile
  ↓
base CSS

bureau
  ↓
@media (min-width: 800px)
```

N'utilisez pas encore :

- plusieurs breakpoints ;
- CSS Grid ;
- `clamp()` ;
- container queries ;
- une logique mobile-first complexe ;
- des propriétés Flexbox avancées.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-257-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

La version de base de la page est adaptée aux petits écrans.

Les cartes sont verticales et utilisent la largeur disponible.

À partir de `800px`, la liste devient horizontale.

Les cartes partagent l'espace disponible.

Le même HTML fonctionne dans les deux situations.

L'apprenant sait expliquer pourquoi les styles de base représentent la version mobile et pourquoi `min-width` est utilisé pour adapter les écrans plus larges.

## Bilan

**Vous avez appris :**

- le principe mobile-first ;
- à construire une version mobile comme base ;
- à utiliser `min-width` pour les écrans plus larges ;
- à utiliser un breakpoint simple ;
- à faire évoluer une même disposition sans modifier le HTML.

**Vous avez réalisé :**

Une liste de cartes construite selon une approche mobile-first, avec une adaptation pour les écrans plus larges.

## Glossaire

- **Mobile-first** : approche qui commence par la version destinée aux petits écrans.
- **Breakpoint** : largeur à partir de laquelle une nouvelle règle est appliquée.
- **`min-width`** : condition qui s'applique à partir d'une largeur donnée.
- **Style de base** : règles CSS appliquées sans Media Query.
- **Adaptation responsive** : modification de la présentation selon l'espace disponible.
- **`flex-direction`** : propriété qui définit la direction des éléments Flexbox.