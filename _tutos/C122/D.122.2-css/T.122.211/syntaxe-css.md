---
title: "Syntaxe CSS"
layout: tuto
slug: "syntaxe-css"
permalink: /tutos/:slug/
tuto_id: "T.122.211"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 1
---

## 1. Objectif

Découvrir la syntaxe CSS et écrire une règle CSS.

À la fin du tutoriel, vous saurez identifier un sélecteur, une propriété, une valeur et une déclaration.

## 2. Prérequis

* Avoir une page HTML.
* Connaître les éléments HTML.
* Savoir ouvrir un projet dans Visual Studio Code.
* Savoir créer un fichier.

## Partie 1 — Théorie

### 1.1. Une règle CSS

Une règle CSS permet de définir la présentation d’un élément HTML.

Sa structure est :

```css
selecteur {
    propriete: valeur;
}
```

Exemple :

```css
body {
    color: #1f2937;
}
```

Une règle CSS contient :

* un sélecteur ;
* une ou plusieurs déclarations.

### 1.2. Le sélecteur

Le sélecteur indique l’élément HTML ciblé.

Exemple :

```css
body {
    color: #1f2937;
}
```

Ici, `body` est le sélecteur.

Il cible l’élément `<body>`.

### 1.3. La propriété

La propriété indique ce que l’on veut modifier.

Exemple :

```css
body {
    color: #1f2937;
}
```

Ici, `color` est la propriété.

Elle permet de modifier la couleur du texte.

### 1.4. La valeur

La valeur indique le réglage choisi pour la propriété.

Exemple :

```css
body {
    color: #1f2937;
}
```

Ici, `#1f2937` est la valeur de `color`.

### 1.5. La déclaration

Une déclaration associe une propriété et une valeur.

Exemple :

```css
color: #1f2937;
```

Une déclaration se termine par `;`.

Une règle peut contenir plusieurs déclarations.

Exemple :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

### 1.6. À retenir

* Le **sélecteur** indique quoi cibler.
* La **propriété** indique quoi modifier.
* La **valeur** indique le réglage.
* Une **déclaration** contient une propriété et une valeur.
* Une **règle CSS** contient un sélecteur et une ou plusieurs déclarations.

## Partie 2 — Pratique

### 2.1. Créer le fichier CSS

#### Étape 1 — Ouvrir le projet

Ouvrez votre projet dans Visual Studio Code.

#### Étape 2 — Créer le dossier

Créez le dossier :

```text
css
```

#### Étape 3 — Créer le fichier

Dans le dossier `css`, créez :

```text
style.css
```

### 2.2. Écrire une première règle CSS

#### Étape 4 — Ajouter le sélecteur

Dans `style.css`, écrivez :

```css
body {

}
```

`body` est le sélecteur.

#### Étape 5 — Ajouter une déclaration

Ajoutez :

```css
body {
    color: #1f2937;
}
```

Vous avez maintenant :

* `body` : sélecteur ;
* `color` : propriété ;
* `#1f2937` : valeur ;
* `color: #1f2937;` : déclaration.

### 2.3. Ajouter une deuxième déclaration

#### Étape 6 — Ajouter l’arrière-plan

Ajoutez :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

La règle contient maintenant deux déclarations.

### 2.4. Vérifier le fichier

#### Étape 7 — Enregistrer

Enregistrez :

```text
css/style.css
```

La liaison entre `detaille-article.html` et `style.css` sera étudiée dans le tutoriel suivant.

**Résultat attendu :**

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

## Partie 3 — Développement progressif

### 3.1. Exercice

Vous allez commencer la mise en forme CSS de la page `detaille-article.html`.

Dans votre projet, utilisez le fichier :

```text
css/style.css
```

Utilisez les notions étudiées dans ce tutoriel :

* sélecteur ;
* propriété ;
* valeur ;
* déclaration ;
* règle CSS.

Écrivez la première règle CSS de votre projet.

### 3.2. Résultat attendu

Après l’application de la notion étudiée dans ce tutoriel, le résultat attendu est :

```text
/code/blog/pagedetaille/
└── page-detaile-css-v1.tuto-1-css.html
```

Le résultat est présenté ci-dessous :

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/pagedetaille/page-detaile-css-v1.tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu après le tutoriel 1 CSS">
</iframe>

**Travail à faire :**

Utilisez les notions étudiées dans ce tutoriel pour compléter votre fichier :

```text
css/style.css
```

Reproduisez le résultat présenté dans l’iframe.

**Livrable :**

```text
css/style.css
```

**Critère de réussite :**

Le fichier contient une règle CSS correcte avec :

* un sélecteur ;
* une propriété ;
* une valeur ;
* une déclaration.

### 3.3. Résultat final

La page sera mise en forme progressivement pendant les tutoriels de l’UA `UA.122.21`.

Le résultat final de référence est :

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/pagedetaille/page-detaile-html-v1.html' | relative_url}}"
    height="700"
    title="Résultat final de la page détaille d’un article">
</iframe>

À ce stade, vous ne devez pas reproduire toute la mise en forme.

Vous avez seulement commencé le fichier `style.css`.

## Bilan

**Vous avez réalisé :** une première règle CSS dans `style.css`.

**Vous savez maintenant :** identifier et écrire un sélecteur, une propriété, une valeur et une déclaration CSS.

## Glossaire

* **CSS** : langage utilisé pour mettre en forme une page Web.
* **Sélecteur** : partie d’une règle CSS qui indique l’élément ciblé.
* **Propriété** : caractéristique que CSS peut modifier.
* **Valeur** : réglage donné à une propriété.
* **Déclaration** : association entre une propriété et une valeur.
* **Règle CSS** : ensemble formé par un sélecteur et une ou plusieurs déclarations.
