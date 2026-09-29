---
title: "Faire passer les éléments à la ligne"
layout: tuto
slug: "elements-a-la-ligne-flexbox"
permalink: /tutos/elements-a-la-ligne-flexbox/
tuto_id: "T.122.235"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 5
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes sur plusieurs lignes</title>
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

          <article class="carte-article">
              <h2>PHP</h2>
              <p>Créer des applications web dynamiques.</p>
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

Apprendre à faire passer les éléments Flexbox sur plusieurs lignes avec `flex-wrap: wrap`.

## 2. Prérequis

Vous savez déjà :

- créer un conteneur Flexbox ;
- utiliser `display: flex` ;
- utiliser `flex-direction` ;
- utiliser `justify-content` ;
- utiliser `align-items` ;
- comprendre l’axe principal et l’axe secondaire.

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

    <article class="carte-article">
        <h2>PHP</h2>
        <p>Créer des applications web dynamiques.</p>
    </article>

</section>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Le problème

Un conteneur Flexbox peut contenir plusieurs éléments.

Lorsque les éléments ne tiennent pas dans l’espace disponible, ils peuvent dépasser la largeur du conteneur.

Pour une liste de cartes, ce comportement n’est pas toujours souhaité.

### 1.2. Utiliser `flex-wrap`

`flex-wrap` permet de contrôler le passage des éléments sur plusieurs lignes.

Avec :

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
}
```

les éléments peuvent passer à la ligne lorsqu’il n’y a plus assez de place.

### 1.3. Utiliser `wrap`

`wrap` autorise le retour à la ligne.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    flex-wrap: wrap;
}
```

Les éléments utilisent d’abord l’espace disponible.

Lorsqu’une nouvelle carte ne tient plus sur la ligne, elle passe sur la ligne suivante.

### 1.4. Conserver la direction horizontale

Pour une liste de cartes, on peut utiliser :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
```

Les cartes sont organisées horizontalement.

Lorsqu’il n’y a plus assez de place, elles passent à la ligne suivante.

### 1.5. À retenir

- `flex-wrap` contrôle le passage des éléments sur plusieurs lignes.
- `wrap` autorise le retour à la ligne.
- `flex-wrap` s’applique au conteneur flex.
- Le retour à la ligne dépend de l’espace disponible.
- `flex-wrap` permet d’organiser plusieurs cartes dans un espace limité.

## Partie 2 — Pratique

### 2.1. Préparer les cartes

#### Étape 1 — Donner une taille aux cartes

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    width: 180px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Chaque carte possède maintenant une largeur de `180px`.

#### Étape 2 — Préparer le conteneur

Ajoutez :

```css
.liste-cartes {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 720px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Le conteneur possède un espace limité.

### 2.2. Observer le problème

#### Étape 1 — Afficher les quatre cartes

Observez les quatre cartes.

Le conteneur ne dispose pas de suffisamment d’espace pour placer les quatre cartes sur une seule ligne.

Certaines cartes peuvent dépasser la zone disponible.

### 2.3. Autoriser le passage à la ligne

#### Étape 1 — Ajouter `flex-wrap`

Ajoutez :

```css
.liste-cartes {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 720px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les cartes peuvent maintenant passer sur une deuxième ligne.

### 2.4. Observer le changement

#### Étape 1 — Retirer temporairement `flex-wrap`

Supprimez :

```css
flex-wrap: wrap;
```

Observez le résultat.

#### Étape 2 — Ajouter de nouveau la propriété

Ajoutez :

```css
flex-wrap: wrap;
```

Observez le changement.

La quatrième carte passe maintenant sur une nouvelle ligne.

### 2.5. Organiser les cartes sur plusieurs lignes

#### Étape 1 — Ajouter un espace entre les cartes

Comme `gap` sera étudié plus tard, utilisez la marge déjà connue.

Ajoutez :

```css
.carte-article {
    box-sizing: border-box;
    width: 180px;
    margin: 10px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les cartes possèdent maintenant un espace autour d’elles.

#### Étape 2 — Vérifier les lignes

Avec quatre cartes, vérifiez que :

- les premières cartes restent sur la première ligne ;
- la carte suivante passe sur la ligne suivante lorsqu’il n’y a plus assez de place ;
- les cartes gardent leur largeur ;
- toutes les cartes restent dans le conteneur.

### 2.6. Tester avec une cinquième carte

Ajoutez :

```html
<article class="carte-article">
    <h2>MySQL</h2>
    <p>Stocker les données d'une application.</p>
</article>
```

Observez la nouvelle organisation.

La cinquième carte doit prendre une place disponible sur une ligne existante ou commencer une nouvelle ligne selon l’espace restant.

**Travail à faire :**

À partir du HTML fourni :

- créez cinq cartes ;
- utilisez `.liste-cartes` comme conteneur flex ;
- utilisez `flex-direction: row` ;
- utilisez `flex-wrap: wrap` ;
- donnez une largeur fixe aux cartes ;
- ajoutez une marge autour des cartes ;
- vérifiez que les cartes passent automatiquement à la ligne.

N’utilisez pas encore :

- `gap` ;
- `flex` ;
- `flex-grow`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-235-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur utilise `display: flex`, `flex-direction: row` et `flex-wrap: wrap`.

Les cartes restent dans la zone disponible et passent automatiquement sur une nouvelle ligne lorsque l’espace horizontal n’est plus suffisant.

## Bilan

**Vous avez appris :**

- le rôle de `flex-wrap` ;
- l’utilisation de `wrap` ;
- le fonctionnement du retour à la ligne avec Flexbox.

**Vous avez réalisé :**

Une liste de cartes capable de s’organiser sur plusieurs lignes.

## Glossaire

- **`flex-wrap`** : propriété qui contrôle le passage des éléments sur plusieurs lignes.
- **`wrap`** : valeur qui autorise le retour à la ligne.
- **Retour à la ligne** : passage d’un élément sur une nouvelle ligne lorsque l’espace disponible est insuffisant.
- **Conteneur flex** : élément qui utilise `display: flex`.