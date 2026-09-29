---
title: "Comprendre l'héritage"
layout: tuto
slug: "comprendre-heritage-css"
permalink: /tutos/comprendre-heritage-css/
tuto_id: "T.122.244"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 4
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Héritage CSS</title>
  </head>
  <body>

      <main class="page">

          <section class="zone-article">
              <h1>Mon blog</h1>

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
                      à comprendre les actions disponibles.
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

Comprendre comment certaines propriétés CSS passent d’un élément parent à ses éléments enfants.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser des classes ;
- réutiliser une classe ;
- regrouper des sélecteurs ;
- comprendre l’ordre des règles ;
- comprendre la spécificité simple.

## Données de départ

### HTML

```html
<main class="page">

    <section class="zone-article">
        <h1>Mon blog</h1>

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
                à comprendre les actions disponibles.
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

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Parent et enfant

En HTML, un élément peut contenir d’autres éléments.

Dans cet exemple :

```html
<section class="zone-article">
    <h1>Mon blog</h1>
    <article>...</article>
</section>
```

`section` est le parent.

`h1` et `article` sont ses enfants.

Le CSS peut transmettre certaines propriétés du parent aux enfants.

### 1.2. Comprendre l’héritage

L’**héritage** permet à certaines propriétés CSS d’un élément parent d’être utilisées par ses éléments enfants.

Exemple :

```css
.zone-article {
    color: #1f2937;
}
```

Le texte des éléments enfants peut utiliser cette couleur.

Il n’est donc pas nécessaire d’écrire :

```css
h1 {
    color: #1f2937;
}

h2 {
    color: #1f2937;
}

p {
    color: #1f2937;
}
```

La couleur peut être définie sur le parent.

### 1.3. Les propriétés héritées

Certaines propriétés sont généralement héritées.

Par exemple :

```css
.zone-article {
    color: #1f2937;
    font-family: Arial, sans-serif;
}
```

Les éléments enfants peuvent recevoir :

- `color` ;
- `font-family`.

Cela permet de définir un style commun sur une zone.

### 1.4. Les propriétés non héritées

Toutes les propriétés ne sont pas héritées.

Par exemple :

```css
.zone-article {
    margin: 20px;
    padding: 20px;
    border: 1px solid #e5e7eb;
}
```

Les enfants ne reçoivent pas automatiquement ces mêmes valeurs.

Le `margin` du parent ne devient pas le `margin` de ses enfants.

Le `padding` du parent ne devient pas le `padding` de ses enfants.

La `border` du parent ne devient pas la bordure des enfants.

### 1.5. Pourquoi utiliser l’héritage ?

L’héritage permet d’éviter de répéter certaines règles.

Au lieu de définir la même couleur sur plusieurs éléments :

```css
h1 {
    color: #1f2937;
}

h2 {
    color: #1f2937;
}

p {
    color: #1f2937;
}
```

on peut parfois définir la couleur sur le parent :

```css
.zone-article {
    color: #1f2937;
}
```

Le code est alors plus simple.

### 1.6. Une règle locale peut modifier le résultat

Un enfant peut avoir sa propre règle.

Exemple :

```css
.zone-article {
    color: #1f2937;
}

.zone-article h2 {
    color: #2673e8;
}
```

Le texte général utilise la couleur du parent.

Le `h2` utilise sa propre couleur.

L’héritage ne bloque donc pas les règles écrites directement sur un élément.

### 1.7. À retenir

- L’héritage permet à certaines propriétés du parent d’être utilisées par les enfants.
- `color` et `font-family` sont des exemples de propriétés généralement héritées.
- `margin`, `padding` et `border` ne sont pas hérités automatiquement.
- L’héritage réduit certaines répétitions dans le CSS.
- Une règle écrite directement sur un enfant peut modifier son style.

## Partie 2 — Pratique

### 2.1. Définir une couleur sur le parent

#### Étape 1 — Ajouter une règle

Ajoutez :

```css
.zone-article {
    color: #1f2937;
}
```

Observez le texte de la section.

La couleur est disponible pour les éléments descendants concernés.

### 2.2. Ajouter une police commune

#### Étape 1 — Ajouter `font-family`

Complétez :

```css
.zone-article {
    color: #1f2937;
    font-family: Arial, sans-serif;
}
```

Les textes de la zone utilisent cette police.

Une seule règle suffit pour plusieurs éléments.

### 2.3. Observer ce qui n’est pas hérité

#### Étape 1 — Ajouter une marge au parent

Ajoutez :

```css
.zone-article {
    margin: 40px;
}
```

La zone se déplace dans la page.

Les éléments enfants ne reçoivent pas automatiquement une marge de `40px`.

### 2.4. Ajouter une règle sur un enfant

#### Étape 1 — Modifier le titre

Ajoutez :

```css
.zone-article h2 {
    color: #2673e8;
}
```

Le `h2` n'utilise plus la couleur héritée du parent.

Il utilise sa propre couleur.

### 2.5. Comparer le parent et l’enfant

#### Étape 1 — Observer le paragraphe

Le paragraphe n’a pas de règle `color`.

Il utilise donc la couleur disponible par héritage.

#### Étape 2 — Observer le titre

Le `h2` possède :

```css
.zone-article h2 {
    color: #2673e8;
}
```

Il utilise donc cette règle.

### 2.6. Créer un style commun pour toute une zone

#### Étape 1 — Définir les propriétés communes

Utilisez :

```css
.zone-article {
    color: #1f2937;
    font-family: Arial, sans-serif;
}
```

#### Étape 2 — Ajouter une règle spécifique

Utilisez :

```css
.zone-article h2 {
    color: #2673e8;
}
```

Le parent définit les propriétés communes.

Le `h2` possède une règle spécifique pour sa couleur.

### 2.7. Tester plusieurs niveaux

#### Étape 1 — Ajouter une règle au parent `main`

Ajoutez :

```css
.page {
    color: #1f2937;
}
```

#### Étape 2 — Ajouter une règle au `section`

Ajoutez :

```css
.zone-article {
    color: #4b5563;
}
```

Observez la couleur du texte.

La règle du parent le plus proche peut fournir la valeur héritée utilisée par les enfants.

#### Étape 3 — Ajouter une règle directe au `h2`

Ajoutez :

```css
.zone-article h2 {
    color: #2673e8;
}
```

Le `h2` utilise maintenant sa propre règle.

### 2.8. Identifier ce qui doit être hérité

Pour une zone contenant plusieurs textes, demandez-vous :

> « Cette propriété doit-elle être commune à toute la zone ? »

Pour `color` et `font-family`, l’héritage peut éviter de répéter la même déclaration.

Pour `margin`, `padding` ou `border`, il faut définir les règles sur les éléments concernés.

**Travail à faire :**

À partir du HTML fourni :

- définissez une couleur sur `.zone-article` ;
- définissez une police commune sur `.zone-article` ;
- observez les éléments enfants ;
- ajoutez une marge au parent ;
- vérifiez que cette marge n’est pas automatiquement appliquée aux enfants ;
- donnez ensuite une couleur différente aux `h2` ;
- comparez le style hérité et le style défini directement sur un enfant.

Identifiez dans votre code :

- au moins deux propriétés utilisées par héritage ;
- au moins deux propriétés qui ne sont pas héritées automatiquement.

N’introduisez pas encore :

- les variables CSS ;
- `:root` ;
- `var()` ;
- les états `:hover` et `:focus` ;
- une organisation en plusieurs fichiers CSS.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-244-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

L’apprenant sait expliquer le principe parent → enfant.

Il sait identifier des propriétés pouvant être héritées.

Il sait distinguer une propriété héritée d’une propriété qui ne l’est pas automatiquement.

Il sait également créer une règle spécifique sur un enfant lorsque le style doit être différent.

## Bilan

**Vous avez appris :**

- le principe de l’héritage CSS ;
- la relation entre parent et enfant ;
- l’intérêt de l’héritage pour éviter les répétitions ;
- la différence entre propriétés héritées et non héritées ;
- la possibilité de modifier le style d’un enfant avec une règle spécifique.

**Vous avez réalisé :**

Une zone de page avec des styles communs transmis aux éléments enfants et des styles spécifiques pour certains éléments.

## Glossaire

- **Héritage** : mécanisme qui permet à certaines propriétés du parent d’être utilisées par les enfants.
- **Parent** : élément HTML qui contient un autre élément.
- **Enfant** : élément HTML contenu dans un autre élément.
- **Propriété héritée** : propriété dont la valeur peut être transmise aux éléments enfants.
- **Propriété non héritée** : propriété qui n’est pas transmise automatiquement aux enfants.