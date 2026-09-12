---
title: "Liens et listes CSS"
layout: tuto
slug: "liens-listes-css"
permalink: /tutos/:slug/
tuto_id: "T.122.216"
version: "normal"
ua: "UA.122.21"
nav_order: 6
---

## 1. Objectif

Mettre en forme les liens et les listes d’une page avec CSS.

À la fin du tutoriel, vous savez cibler les éléments `<a>`, `<ul>` et `<li>` avec CSS.

## 2. Prérequis

* Avoir réalisé `T.122.211` à `T.122.215`.
* Connaître les règles CSS.
* Savoir utiliser les sélecteurs de balise et de classe.
* Connaître les éléments `<a>`, `<ul>` et `<li>`.

# Partie 1 — Théorie

## 1.1. Le sélecteur `a`

Le sélecteur `a` cible les liens HTML.

**Exemple :**

```css
a {
    color: #1c5bba;
}
```

La règle modifie la couleur des liens.

## 1.2. Le sélecteur `ul`

Le sélecteur `ul` cible une liste non ordonnée.

**Exemple :**

```css
ul {
    padding-left: 24px;
}
```

Cette propriété ajoute un espace à gauche de la liste.

## 1.3. Le sélecteur `li`

Le sélecteur `li` cible les éléments d’une liste.

**Exemple :**

```css
li {
    margin-bottom: 12px;
}
```

Cette règle ajoute un espace sous chaque élément de la liste.

## 1.4. À retenir

* `a` cible les liens.
* `ul` cible une liste non ordonnée.
* `li` cible les éléments d’une liste.
* Une même règle CSS peut être appliquée à tous les éléments ciblés.

# Partie 2 — Pratique

## 2.1. Mettre en forme les liens

### Étape 1 — Ouvrir `style.css`

Ouvrez :

```text
css/style.css
```

Vous avez déjà les règles CSS des tutoriels précédents.

### Étape 2 — Ajouter une couleur aux liens

Ajoutez :

```css
a {
    color: #1c5bba;
}
```

Les liens de la page utilisent maintenant cette couleur.

## 2.2. Mettre en forme la liste des missions

La page HTML contient :

```html
<ul class="article-list">
    <li>
        <strong>Analyser le besoin</strong> :
        comprendre le projet et identifier les fonctionnalités.
    </li>

    <li>
        <strong>Réaliser l'application</strong> :
        écrire le code et développer les fonctionnalités.
    </li>

    <li>
        <strong>Vérifier l'application</strong> :
        tester l'application et corriger les erreurs.
    </li>

    <li>
        <strong>Déployer l'application</strong> :
        mettre l'application sur un serveur pour la rendre disponible.
    </li>
</ul>
```

### Étape 3 — Cibler la liste

Ajoutez :

```css
.article-body ul {
    padding-left: 24px;
}
```

La liste possède maintenant un espace à gauche.

### Étape 4 — Cibler les éléments de la liste

Ajoutez :

```css
.article-body li {
    margin-bottom: 12px;
}
```

Un espace est maintenant ajouté entre les éléments de la liste.

## 2.3. Vérifier le résultat

### Étape 5 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 6 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez :

* la couleur des liens ;
* la position de la liste ;
* l’espace entre les éléments de la liste.

**Résultat attendu :**

La liste des missions est mieux organisée et les liens utilisent la couleur définie.

Le fichier `style.css` contient maintenant notamment :

```css
a {
    color: #1c5bba;
}

.article-body ul {
    padding-left: 24px;
}

.article-body li {
    margin-bottom: 12px;
}
```

# 3. Bilan

**Vous avez réalisé :** la mise en forme des liens et de la liste des missions.

**Vous savez maintenant :** utiliser les sélecteurs `a`, `ul` et `li` pour mettre en forme les liens et les listes.

Dans le prochain tutoriel, vous allez apprendre à contrôler les **dimensions des éléments** de la page.

# 4. Glossaire

* **Lien** : élément qui permet d’accéder à une autre ressource.
* **Liste non ordonnée** : liste créée avec `<ul>`.
* **Élément de liste** : élément créé avec `<li>`.
* **Espace intérieur** : espace situé entre le contenu et la limite d’un élément.
