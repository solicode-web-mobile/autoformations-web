---
title: "Démarrer un serveur statique local"
layout: tuto
slug: "demarrer-serveur-statique"
permalink: /tutos/demarrer-serveur-statique/
tuto_id: "T.141.11.1"
type: "classique"
version: "normal"
ua: "UA.141.11"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon blog</title>
      <link rel="stylesheet" href="style.css">
  </head>

  <body>
      <header>
          <h1>Mon blog</h1>
      </header>

      <main>
          <h2>Bienvenue</h2>
          <p>Découvrez mon blog.</p>
      </main>
  </body>
  </html>

data_css: |
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
  }

  header {
      margin-bottom: 20px;
  }

  h1 {
      color: #333;
  }

data_js: ""
en_construction: true
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à démarrer un serveur Web local pour un site HTML/CSS.

Vous allez ouvrir votre projet avec une adresse Web locale.

Exemple :

```text
http://127.0.0.1:5500
```

À la fin, vous ne consulterez plus la page avec `file:///`.

## 2. Prérequis

Vous devez savoir :

- créer un fichier HTML ;
- créer un fichier CSS ;
- relier un fichier CSS avec `link` ;
- ouvrir un projet dans Visual Studio Code ;
- utiliser un navigateur Web.

Vous devez avoir un projet Web statique contenant au minimum une page HTML et un fichier CSS.

## Données de départ

### HTML

Le projet contient un fichier `index.html`.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon blog</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Mon blog</h1>
    </header>

    <main>
        <h2>Bienvenue</h2>
        <p>Découvrez mon blog.</p>
    </main>
</body>
</html>
```

### CSS

Le fichier `style.css` contient :

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    margin-bottom: 20px;
}

h1 {
    color: #333;
}
```

### JavaScript

Aucun fichier JavaScript n'est nécessaire dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. Ouvrir un fichier HTML directement

Vous pouvez ouvrir un fichier HTML en double-cliquant dessus.

Le navigateur utilise alors une adresse qui commence par :

```text
file:///
```

La page peut être affichée, mais elle n'est pas ouverte par un serveur Web.

### 1.2. Utiliser un serveur local

Un serveur local permet de servir les fichiers du projet avec une adresse Web.

Exemple :

```text
http://127.0.0.1:5500
```

Le navigateur demande alors la page au serveur local.

### 1.3. `127.0.0.1`

`127.0.0.1` désigne la machine sur laquelle vous travaillez.

Cette adresse est utilisée pour accéder aux services locaux.

Vous pouvez aussi rencontrer :

```text
localhost
```

Dans ce tutoriel, nous utiliserons `127.0.0.1`.

### 1.4. Le port

Un serveur local utilise un port pour recevoir les demandes du navigateur.

Dans notre exemple :

```text
5500
```

L'adresse complète est :

```text
http://127.0.0.1:5500
```

On peut lire cette adresse ainsi :

- `http` : protocole utilisé par le navigateur ;
- `127.0.0.1` : votre machine ;
- `5500` : port du serveur local.

### 1.5. Live Server

Live Server est une extension de Visual Studio Code.

Elle permet de démarrer rapidement un serveur local pour un projet Web statique.

Vous pouvez ensuite ouvrir la page dans le navigateur avec une adresse locale.

### 1.6. À retenir

- `file:///` ouvre directement un fichier.
- Un serveur local sert les fichiers avec `http://`.
- `127.0.0.1` désigne votre machine.
- Un port identifie le service local.
- Live Server permet de démarrer facilement un serveur statique local.

## Partie 2 — Pratique

### 2.1. Ouvrir le projet

#### Étape 1 — Ouvrir Visual Studio Code

Lancez Visual Studio Code.

#### Étape 2 — Ouvrir le projet

Ouvrez le dossier de votre projet Web statique.

Vérifiez que vous voyez :

```text
index.html
style.css
```

### 2.2. Installer Live Server

#### Étape 1 — Ouvrir les extensions

Dans Visual Studio Code, ouvrez la vue **Extensions**.

#### Étape 2 — Rechercher Live Server

Recherchez :

```text
Live Server
```

#### Étape 3 — Installer l'extension

Installez l'extension **Live Server**.

Après l'installation, Visual Studio Code peut utiliser cette extension pour démarrer un serveur local.

### 2.3. Démarrer le serveur

#### Étape 1 — Ouvrir `index.html`

Ouvrez le fichier `index.html`.

#### Étape 2 — Démarrer Live Server

Utilisez l'action **Go Live** proposée par Live Server.

Le serveur démarre localement.

#### Étape 3 — Ouvrir le navigateur

Le navigateur ouvre une adresse de ce type :

```text
http://127.0.0.1:5500/index.html
```

Le numéro de port peut être différent selon votre environnement.

### 2.4. Vérifier l'adresse

#### Étape 1 — Observer la barre d'adresse

Vérifiez que l'adresse commence par :

```text
http://
```

Elle ne doit plus commencer par :

```text
file:///
```

#### Étape 2 — Vérifier la page

La page doit afficher :

- le titre `Mon blog` ;
- le titre `Bienvenue` ;
- le texte `Découvrez mon blog.` ;
- le style CSS.

### 2.5. Tester une modification

#### Étape 1 — Modifier le titre

Dans `index.html`, remplacez :

```html
<h1>Mon blog</h1>
```

par :

```html
<h1>Mon blog personnel</h1>
```

#### Étape 2 — Enregistrer

Enregistrez le fichier.

#### Étape 3 — Observer le navigateur

Rechargez la page si nécessaire.

Le nouveau titre doit apparaître.

Vous travaillez maintenant avec le site servi par le serveur local.

### 2.6. Tester le fichier CSS

#### Étape 1 — Modifier le CSS

Dans `style.css`, modifiez la règle du titre.

Par exemple :

```css
h1 {
    color: #555;
}
```

#### Étape 2 — Enregistrer

Enregistrez le fichier.

#### Étape 3 — Vérifier la page

Le changement de style doit apparaître dans le navigateur.

Le serveur utilise donc bien les fichiers de votre projet.

### 2.7. Exercice individuel

**Travail à faire :**

À partir de votre page d'accueil statique :

1. ouvrez le projet dans Visual Studio Code ;
2. installez Live Server ;
3. démarrez le serveur ;
4. ouvrez la page avec l'adresse locale ;
5. vérifiez que l'adresse utilise `http://` ;
6. modifiez le titre de la page ;
7. modifiez une règle CSS ;
8. vérifiez les changements dans le navigateur.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- le nom du projet ;
- l'adresse locale utilisée ;
- le port utilisé ;
- une capture de la page ouverte dans le navigateur.

**Résultat attendu :**

La page d'accueil du blog est accessible avec une adresse locale de ce type :

```text
http://127.0.0.1:5500/index.html
```

La page fonctionne avec son fichier CSS.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/deploy/tuto-1-deploy.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le projet est accessible dans le navigateur avec une adresse `http://`.

La page ne doit pas être ouverte avec `file:///`.

Le HTML et le CSS doivent fonctionner correctement.

## Bilan

**Vous avez appris :**

- à démarrer un serveur statique local ;
- à utiliser Live Server ;
- à reconnaître une adresse locale ;
- à utiliser `127.0.0.1` et un port ;
- à tester une page Web avec `http://`.

**Vous avez réalisé :**

La mise en service locale de votre site statique.

Le projet est maintenant accessible comme une page Web locale :

```text
http://127.0.0.1:5500
```

## Glossaire

- **Serveur local** : programme qui fournit des fichiers Web sur votre machine.
- **Live Server** : extension de Visual Studio Code qui démarre un serveur local.
- **`localhost`** : nom utilisé pour désigner la machine locale.
- **`127.0.0.1`** : adresse IP de la machine locale.
- **Port** : numéro utilisé par un service pour recevoir des demandes.
- **Navigateur** : logiciel utilisé pour consulter des pages Web.
- **`file:///`** : adresse utilisée pour ouvrir directement un fichier local.
- **HTTP** : protocole utilisé pour échanger des pages et des ressources Web.