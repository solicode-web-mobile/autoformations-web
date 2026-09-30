---
title: "Préparer le formulaire"
layout: tuto
slug: "preparer-le-formulaire"
permalink: /tutos/:slug/
tuto_id: "T.122.141"
type: "classique"
version: "normal"
ua: "UA.122.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- utiliser la balise `form` ;
- définir la destination d'un formulaire avec `action` ;
- définir la méthode d'envoi avec `method` ;
- préparer un formulaire pour envoyer des données à PHP.

À la fin du tutoriel, la page contiendra un formulaire vide prêt à recevoir des champs.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser des attributs HTML ;
- utiliser `header` ;
- utiliser `nav` ;
- utiliser `main` ;
- utiliser `aside` ;
- utiliser des liens avec `a`.

Vous devez également savoir lire une structure HTML existante.

Aucune connaissance de PHP n'est nécessaire dans ce tutoriel.

## Données de départ

La page d'administration « Ajouter un Article » existe déjà.

Elle contient :

- une barre latérale ;
- un menu de navigation ;
- un en-tête ;
- un titre ;
- une zone prévue pour le formulaire.

### HTML

La zone du formulaire est actuellement vide :

```html
<form class="carte-formulaire">

</form>
```

La balise `form` existe déjà.

Elle ne possède pas encore :

- de destination ;
- de méthode d'envoi ;
- de champs.

### CSS

Le fichier `admin-style.css` existe déjà.

La classe `carte-formulaire` est conservée.

Aucun nouveau CSS n'est étudié dans ce tutoriel.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. La balise `form`

La balise `form` permet de regrouper les éléments d'un formulaire.

Exemple :

```html
<form>

</form>
```

Les champs du formulaire seront placés à l'intérieur.

Un formulaire peut ensuite envoyer les données saisies.

### 1.2. L'attribut `action`

L'attribut `action` indique où les données du formulaire doivent être envoyées.

Exemple :

```html
<form action="traiter-article.php">
</form>
```

Ici, les données sont destinées au script :

```text
traiter-article.php
```

Le script PHP recevra les données du formulaire.

### 1.3. L'attribut `method`

L'attribut `method` indique comment les données sont envoyées.

Pour envoyer des données de formulaire vers un script, on utilise souvent :

```html
<form method="post">
</form>
```

Ici, la méthode utilisée est `post`.

### 1.4. `action` et `method`

Les deux attributs peuvent être utilisés ensemble :

```html
<form
    action="traiter-article.php"
    method="post"
>
</form>
```

Le formulaire possède maintenant :

- une destination ;
- une méthode d'envoi.

### 1.5. Préparer un formulaire pour PHP

Un formulaire HTML peut envoyer ses données à un script PHP.

La structure générale est :

```text
form
├── action → script PHP
└── method → méthode d'envoi
```

Les champs seront ajoutés dans le formulaire dans les tutoriels suivants.

### 1.6. À retenir

- `form` représente un formulaire ;
- `action` indique la destination ;
- `method` indique la méthode d'envoi ;
- `post` est une méthode d'envoi ;
- le script indiqué dans `action` peut être un fichier PHP.

## Partie 2 — Pratique

### 2.1. Repérer le formulaire

Dans la page « Ajouter un Article », recherchez :

```html
<form class="carte-formulaire">

</form>
```

Cette balise représente le formulaire.

Pour l'instant, elle est vide.

### 2.2. Ajouter la destination

Modifiez la balise ouvrante :

```html
<form class="carte-formulaire">
```

Ajoutez l'attribut `action` :

```html
<form
    action="traiter-article.php"
    class="carte-formulaire"
>
```

Le formulaire possède maintenant une destination.

La destination est :

```text
traiter-article.php
```

### 2.3. Ajouter la méthode

Ajoutez ensuite l'attribut `method` :

```html
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>
```

Le formulaire est maintenant préparé pour envoyer des données avec la méthode `post`.

### 2.4. Vérifier la balise `form`

La balise complète doit maintenant être :

```html
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>

</form>
```

Le formulaire reste vide.

C'est normal.

Les champs seront ajoutés dans les tutoriels suivants.

### 2.5. Comprendre les trois éléments

Observez :

```text
form
│
├── action="traiter-article.php"
│   └── destination
│
├── method="post"
│   └── méthode d'envoi
│
└── class="carte-formulaire"
    └── présentation CSS
```

Chaque attribut a un rôle différent.

### 2.6. Conserver la présentation

Ne supprimez pas :

```html
class="carte-formulaire"
```

Cette classe appartient au CSS existant.

Le tutoriel porte sur le fonctionnement du formulaire.

Il ne modifie pas sa présentation.

### 2.7. Tester la page

Ouvrez la page dans le navigateur.

Vérifiez que :

- la page s'affiche correctement ;
- le titre « Ajouter un Article » est visible ;
- le formulaire est présent ;
- aucune erreur HTML n'est visible ;
- la présentation reste identique.

Le formulaire est vide.

C'est le résultat attendu à cette étape.

### 2.8. Vérifier la structure

Vous devez obtenir :

```text
Page Ajouter un Article
│
├── En-tête
│
└── Formulaire
    ├── action → traiter-article.php
    └── method → post
```

Vous êtes maintenant prêt à ajouter les champs du formulaire.

## Résultat attendu

La zone du formulaire doit être :

```html
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>

</form>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-141-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le navigateur doit afficher la page d'administration avec un formulaire vide.

## Partie 3 — Développement progressif

**Série :** Formulaire d'ajout d'un article

**Position :** 1er tutoriel de la série UA.122.13

**Incrément :** Préparation du formulaire avec une destination PHP et une méthode d'envoi.

**Intégration demandée :**

À partir de la page existante :

1. utilisez la balise `form` ;
2. indiquez une destination PHP avec `action` ;
3. utilisez la méthode `post` avec `method`.

Conservez :

- la structure de la page ;
- les classes CSS ;
- le titre ;
- la navigation ;
- la présentation.

Ne créez pas encore de champ.

**Livrable :**

Un formulaire vide ciblant un script PHP.

Le formulaire doit contenir :

```html
action="traiter-article.php"
```

et :

```html
method="post"
```

**Critère de réussite :**

Le formulaire :

- utilise correctement `form` ;
- possède un attribut `action` ;
- possède un attribut `method` ;
- cible un script PHP ;
- utilise la méthode `post` ;
- conserve la présentation existante.

**Résultat attendu :**

```html
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>

</form>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-141-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Cette version constitue la base du formulaire qui sera complété dans **T.122.142 — Saisir et nommer les données**.

## Bilan

**Vous avez réalisé :**

La base du formulaire « Ajouter un Article ».

**Vous savez maintenant :**

- utiliser `form` ;
- définir une destination avec `action` ;
- utiliser `method` ;
- utiliser `post` ;
- préparer un formulaire pour un traitement PHP.

## Glossaire

- **`form`** : élément HTML qui regroupe les champs d'un formulaire.
- **`action`** : attribut qui indique où envoyer les données.
- **`method`** : attribut qui indique la méthode d'envoi.
- **`post`** : méthode d'envoi des données du formulaire.
- **Destination** : endroit vers lequel les données sont envoyées.
- **Script PHP** : fichier PHP qui peut recevoir et traiter les données.