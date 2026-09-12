---
title: "Titres, paragraphes et informations HTML"
layout: tuto
slug: "informations-textes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.113"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.11"
nav_order: 3
---


## 1. Objectif

Ajouter des informations au document HTML et organiser son contenu avec des titres et des paragraphes.

À la fin du tutoriel, vous saurez utiliser `meta charset`, `title`, les titres `h1` à `h6`, `p`, `br` et `hr`.

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

Exemple :

```html
<h1>Le métier de développeur</h1>

<h2>Le rôle du développeur</h2>

<h3>Réaliser l'application</h3>
```

### 1.4. Le paragraphe `<p>`

`<p>` permet d’écrire un paragraphe.

Exemple :

```html
<p>
    Le développeur crée des applications.
    Il transforme un besoin en solution informatique.
</p>
```

### 1.5. Le saut de ligne `<br>`

`<br>` crée un retour à la ligne.

Exemple :

```html
<p>
    Le développeur crée des applications.<br>
    Il transforme un besoin en solution informatique.
</p>
```

Les deux phrases restent dans le même paragraphe.

### 1.6. La séparation `<hr>`

`<hr>` crée une séparation dans le contenu.

Exemple :

```html
<p>Première partie.</p>

<hr>

<p>Deuxième partie.</p>
```

### 1.7. À retenir

* `<meta charset="UTF-8">` indique le codage des caractères.
* `<title>` définit le titre du document.
* `<h1>` à `<h6>` organisent les titres.
* `<p>` crée un paragraphe.
* `<br>` crée un retour à la ligne.
* `<hr>` crée une séparation.

## Partie 2 — Pratique

### 2.1. Créer un fichier de test

Dans cette partie, vous allez tester les nouvelles balises avant de les utiliser dans le blog.

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

#### Étape 3 — Ajouter `<meta charset>`

Dans `<head>`, ajoutez :

```html
<meta charset="UTF-8">
```

#### Étape 4 — Ajouter `<title>`

Ajoutez :

```html
<title>Le métier de développeur</title>
```

Votre `<head>` devient :

```html
<head>
    <meta charset="UTF-8">
    <title>Le métier de développeur</title>
</head>
```

### 2.3. Ajouter les textes

#### Étape 5 — Ajouter un titre principal

Dans `<body>`, ajoutez :

```html
<h1>Le métier de développeur et ses principales missions</h1>
```

#### Étape 6 — Ajouter un paragraphe

Sous le titre, ajoutez :

```html
<p>
    Le développeur crée des applications.
    Il transforme un besoin en solution informatique.
</p>
```

#### Étape 7 — Ajouter un titre de section

Ajoutez :

```html
<h2>Le rôle du développeur</h2>
```

#### Étape 8 — Ajouter un autre paragraphe

Ajoutez :

```html
<p>
    La première mission est d'analyser le besoin.
    Le développeur cherche les fonctionnalités nécessaires.
</p>
```

#### Étape 9 — Ajouter un sous-titre

Ajoutez :

```html
<h3>Réaliser l'application</h3>
```

### 2.4. Ajouter un saut de ligne et une séparation

#### Étape 10 — Ajouter `<br>`

Ajoutez :

```html
<p>
    Le développeur écrit le code de l'application.<br>
    Il organise son travail et crée les fonctionnalités demandées.
</p>
```

#### Étape 11 — Ajouter `<hr>`

Ajoutez :

```html
<hr>
```

### 2.5. Tester

#### Étape 12 — Ouvrir la page

Enregistrez `tuto-3-html.html`.

Ouvrez le fichier dans le navigateur.

**Résultat attendu :**

La page affiche :

* un titre dans l’onglet ;
* un titre principal ;
* un titre de section ;
* un sous-titre ;
* plusieurs paragraphes ;
* un saut de ligne ;
* une séparation.


<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-3-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 1 : HTML">
</iframe>

## Partie 3 — Développement de blog

### 3.1. Exercice

Vous allez maintenant utiliser les notions apprises dans ce tutoriel pour commencer la page de l’article du blog.

Créez un projet nommé :

```text
blog
```

Dans ce projet, créez une page :

```text
detaille-article.html
```

Cette page doit utiliser :

* `<!DOCTYPE html>`
* `<html lang="fr">`
* `<head>`
* `<meta charset="UTF-8">`
* `<title>`
* `<body>`
* `<h1>`
* `<h2>`
* `<h3>`
* `<p>`
* `<br>`
* `<hr>`

Ajoutez le contenu nécessaire pour obtenir le résultat présenté ci-dessous.

### 3.2. Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detaille-v1/page-detail-html-v1.tuto-3-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 3 : HTML">
</iframe>

**Travail à faire :**

Reproduisez ce résultat dans votre fichier `detaille-article.html` en utilisant uniquement les notions étudiées dans ce tutoriel et les tutoriels précédents.

**Livrable :**

```text
detaille-article.html
```

**Critère de réussite :**

La page obtenue correspond au résultat présenté dans l’iframe.

## 4. Bilan

**Vous avez réalisé :** la première version structurée de la page `detaille-article.html`.

**Vous savez maintenant :** ajouter les informations du document et organiser un contenu avec des titres, des paragraphes, un saut de ligne et une séparation.

## 5. Glossaire

* **Codage des caractères** : règle utilisée pour afficher correctement les caractères.
* **Titre** : texte qui présente une partie du contenu.
* **Hiérarchie des titres** : organisation des titres par niveaux.
* **Paragraphe** : bloc de texte créé avec `<p>`.
* **Saut de ligne** : retour à la ligne créé avec `<br>`.
* **Séparation** : ligne créée avec `<hr>` pour séparer deux parties.
