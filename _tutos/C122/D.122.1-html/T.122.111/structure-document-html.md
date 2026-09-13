---
title: "Structure d’un document HTML"
layout: tuto
slug: "structure-document-html"
permalink: /tutos/:slug/
tuto_id: "T.122.111"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 1
---


## 1. Objectif

Créer la structure de base d’un document HTML.

À la fin du tutoriel, vous saurez créer une page HTML avec un titre et un paragraphe.

## 2. Prérequis

* Avoir installé Visual Studio Code.
* Savoir ouvrir un dossier.
* Savoir créer un fichier.
* Avoir un navigateur Web.

## Partie 1 — Théorie

### 1.1. Structure d’un document HTML

Un document HTML possède une structure de base.

```html
<!DOCTYPE html>

<html lang="fr">

<head>
</head>

<body>
</body>

</html>
```

`<!DOCTYPE html>` indique que le document utilise HTML.

`<html>` contient tout le document.

`<head>` contient les informations du document.

`<body>` contient le contenu visible de la page.

### 1.2. L’élément `<html>`

`<html>` est l’élément racine du document.

Il contient :

```text
html
├── head
└── body
```

Un document HTML possède un seul élément `<html>`.

### 1.3. La partie `<head>`

`<head>` contient les informations du document.

Par exemple, `<title>` permet de définir le titre de la page :

```html
<head>
    <title>Mon article</title>
</head>
```

Le titre apparaît dans l’onglet du navigateur.

### 1.4. La partie `<body>`

`<body>` contient le contenu visible de la page.

Par exemple, `<p>` permet d’afficher un paragraphe :

```html
<body>
    <p>Le développeur crée des applications.</p>
</body>
```

### 1.5. À retenir

* `<!DOCTYPE html>` indique que le document utilise HTML.
* `<html>` contient tout le document.
* `<head>` contient les informations du document.
* `<title>` définit le titre de la page.
* `<body>` contient le contenu visible.
* `<p>` permet d’afficher un paragraphe.
* Un document HTML possède un seul élément `<html>`.

## Partie 2 — Pratique

### 2.1. Créer un premier fichier HTML

Dans cette partie, vous allez créer un petit fichier pour tester la structure HTML.

#### Étape 1 — Ouvrir VS Code

Ouvrez Visual Studio Code.

#### Étape 2 — Créer le fichier

Créez un fichier nommé :

```text
tuto-1-html.html
```

### 2.2. Écrire la structure HTML

#### Étape 3 — Ajouter la structure

Dans `tuto-1-html.html`, ajoutez :

```html
<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Mon premier article</title>
</head>

<body>
</body>

</html>
```

### 2.3. Ajouter le contenu

#### Étape 4 — Ajouter un paragraphe

Dans `<body>`, ajoutez un paragraphe.

Par exemple :

```html
<p>Le développeur crée des applications.</p>
```

Le fichier devient :

```html
<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Mon premier article</title>
</head>

<body>
    <p>Le développeur crée des applications.</p>
</body>

</html>
```

Vous pouvez remplacer la phrase par une autre phrase.

### 2.4. Tester la page

#### Étape 5 — Ouvrir le fichier

Ouvrez `tuto-1-html.html` dans votre navigateur.

**Résultat attendu :**

La page affiche une phrase.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-1/tuto-1-html.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel 1 : HTML">
</iframe>


## 4. Bilan

**Vous avez réalisé :** une première page HTML avec sa structure de base, un titre et un paragraphe.

**Vous savez maintenant :** créer un document HTML
