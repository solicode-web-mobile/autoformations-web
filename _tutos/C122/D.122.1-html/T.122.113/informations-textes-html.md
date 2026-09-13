---
title: "Informations et textes HTML"
layout: tuto
slug: "informations-textes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.113"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 3
---


## 1. Objectif

Ajouter des informations au document HTML et organiser son contenu textuel et sémantique.

À la fin du tutoriel, vous saurez utiliser `meta charset`, `title`, les titres `h1` à `h6`, `p`, `br`, `hr`, `strong`, `time`, `blockquote` et `cite`.

## 2. Prérequis

* Connaître la structure `<html>`, `<head>` et `<body>`.
* Savoir utiliser une balise, un élément, un attribut et une valeur d’attribut.
* Savoir créer et ouvrir un fichier HTML.

## Partie 1 — Théorie

### 1.1. `<meta charset>`

`<meta charset>` indique le codage des caractères utilisé par la page.

Pour une page HTML, on utilise :

```html
<meta charset="UTF-8">
```

`UTF-8` permet d’afficher correctement des caractères comme `é`, `è`, `à` et `ç`.

Cette balise est placée dans `<head>`.

### 1.2. `<title>`

`<title>` définit le titre du document.

Il apparaît dans l’onglet du navigateur.

Exemple :

```html
<title>Le métier de développeur</title>
```

`<title>` est placé dans `<head>`.

### 1.3. Les titres `<h1>` à `<h6>`

Les éléments `<h1>` à `<h6>` permettent d’organiser les titres du contenu.

`<h1>` est le titre principal.

`<h2>` est un titre de niveau inférieur.

`<h3>` est un niveau encore inférieur.

### 1.4. Le paragraphe `<p>`

`<p>` permet d’écrire un paragraphe.

Exemple :

```html
<p>
    Le développeur crée des applications.
</p>
```

### 1.5. Mettre en évidence avec `<strong>`

`<strong>` indique qu'un texte est très important. Il s'affiche souvent en gras.

Exemple :

```html
<p>
    Le <strong>développeur</strong> crée des applications.
</p>
```

### 1.6. La date et l'heure avec `<time>`

`<time>` représente une date ou une heure. L'attribut `datetime` permet de préciser la date au format technique (ex: AAAA-MM-JJ).

Exemple :

```html
<p>
    Publié le <time datetime="2026-02-14">14 Février 2026</time>
</p>
```

### 1.7. Les citations `<blockquote>` et `<cite>`

`<blockquote>` indique une citation longue. `<cite>` donne le titre de l'œuvre ou la source de la citation.

Exemple :

```html
<blockquote>
    <p>Le code est la poésie de la logique.</p>
    <cite>— Un développeur anonyme</cite>
</blockquote>
```

### 1.8. Le saut de ligne `<br>` et la séparation `<hr>`

`<br>` crée un retour à la ligne à l'intérieur d'un paragraphe.
`<hr>` crée une séparation (une ligne horizontale) dans le contenu.

### 1.9. À retenir

* `<meta charset="UTF-8">` indique le codage.
* `<title>` définit le titre de l'onglet.
* `<h1>` à `<h6>` organisent les titres.
* `<p>` crée un paragraphe.
* `<strong>` met en évidence un texte important.
* `<time>` représente une date, souvent avec `datetime`.
* `<blockquote>` crée une citation et `<cite>` en indique la source.
* `<br>` crée un retour à la ligne.
* `<hr>` crée une séparation.

## Partie 2 — Pratique

### 2.1. Créer le fichier de test

Dans cette partie, vous allez tester les nouvelles balises.

#### Étape 1 — Créer le fichier

Créez le fichier :

```text
tuto-3-html.html
```

#### Étape 2 — Ajouter la structure

Ajoutez :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
</head>
<body>
</body>
</html>
```

### 2.2. Ajouter les informations du document

#### Étape 3 — Ajouter `<meta charset>` et `<title>`

Dans `<head>`, ajoutez :

```html
<meta charset="UTF-8">
<title>Le métier de développeur</title>
```

### 2.3. Ajouter les textes

#### Étape 4 — Ajouter le titre principal et une date

Dans `<body>`, ajoutez le titre principal puis la date de publication avec `<time>` :

```html
<h1>Le métier de développeur et ses principales missions</h1>

<p>
    Publié le <time datetime="2026-02-14">14 Février 2026</time>
</p>
```

#### Étape 5 — Ajouter un paragraphe avec `<strong>`

Sous la date, ajoutez un paragraphe qui met en valeur le mot "développeur" :

```html
<p>
    Le <strong>développeur</strong> crée des applications.
    Il transforme un besoin en solution informatique.
</p>
```

#### Étape 6 — Ajouter un titre de section et un paragraphe

Ajoutez :

```html
<h2>Le rôle du développeur</h2>

<p>
    La première mission est d'analyser le besoin.
    Le développeur cherche les fonctionnalités nécessaires.
</p>
```

#### Étape 7 — Ajouter un sous-titre et un paragraphe avec `<br>`

Ajoutez le sous-titre `<h3>` et un paragraphe contenant un saut de ligne :

```html
<h3>Réaliser l'application</h3>

<p>
    Le développeur écrit le code de l'application.<br>
    Il organise son travail et crée les fonctionnalités demandées.
</p>
```

#### Étape 8 — Ajouter une citation et une séparation

Ajoutez `<blockquote>` avec `<cite>` pour citer une source, puis ajoutez `<hr>` :

```html
<blockquote>
    <p>Le développeur réalise l'application à partir du besoin. Il utilise des technologies comme HTML, CSS et JavaScript.</p>
    <cite>— Métier de développeur</cite>
</blockquote>

<hr>
```

### 2.4. Tester

#### Étape 9 — Ouvrir la page

Enregistrez `tuto-3-html.html`.

Ouvrez le fichier dans le navigateur.

**Résultat attendu :**

La page affiche l'ensemble des textes formatés selon les balises utilisées.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-3/tuto-3-html.html' | relative_url}}"
    height="600"
    title="Résultat du tutoriel 3 : HTML">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page affichant différents textes avec une structure sémantique.

**Vous savez maintenant :** utiliser les balises textuelles (titres, paragraphes, citations, dates, mise en évidence) et organiser l'information.

## 4. Glossaire

* **Codage des caractères** : règle utilisée pour afficher correctement les caractères (ex: UTF-8).
* **Hiérarchie des titres** : organisation des titres par niveaux (de h1 à h6).
* **Sémantique** : sens donné au contenu par le choix de la balise HTML (ex: strong indique l'importance).
