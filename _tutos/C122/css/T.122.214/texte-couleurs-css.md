---
title: "Texte et couleurs CSS"
layout: tuto
slug: "texte-couleurs-css"
permalink: /tutos/:slug/
tuto_id: "T.122.214"
version: "normal"
ua: "UA.122.21"
nav_order: 4
---

## 1. Objectif

Mettre en forme les textes d’une page avec CSS.

À la fin du tutoriel, vous savez utiliser les principales propriétés de texte et les couleurs CSS pour modifier la présentation des contenus.

## 2. Prérequis

* Avoir réalisé `T.122.211`, `T.122.212` et `T.122.213`.
* Connaître les règles CSS et les sélecteurs.
* Connaître les classes utilisées dans la page HTML.

# Partie 1 — Théorie

## 1.1. `font-family`

`font-family` permet de choisir la police du texte.

**Exemple :**

```css id="s5h7q1"
body {
    font-family: Arial, sans-serif;
}
```

Ici, le navigateur utilise `Arial` lorsque cette police est disponible.

## 1.2. `font-size`

`font-size` permet de définir la taille du texte.

**Exemple :**

```css id="0w6n2y"
.article-body {
    font-size: 16px;
}
```

## 1.3. `font-weight`

`font-weight` permet de définir l’épaisseur du texte.

**Exemple :**

```css id="z8a6qc"
.article-body h2 {
    font-weight: 900;
}
```

## 1.4. `font-style`

`font-style` permet de choisir le style du texte.

**Exemple :**

```css id="5a5r4k"
.article-blockquote p {
    font-style: italic;
}
```

## 1.5. `text-align`

`text-align` permet de définir l’alignement du texte.

**Exemple :**

```css id="0jdd3v"
.article-header {
    text-align: center;
}
```

## 1.6. `line-height`

`line-height` permet de régler l’espace vertical entre les lignes.

**Exemple :**

```css id="6dzh1w"
body {
    line-height: 1.5;
}
```

## 1.7. `color`

`color` permet de définir la couleur du texte.

**Exemple :**

```css id="mp4m6b"
body {
    color: #1f2937;
}
```

## 1.8. Couleurs hexadécimales

Une couleur hexadécimale commence par `#`.

**Exemple :**

```css id="5f0sr8"
color: #1f2937;
```

Ici, `#1f2937` représente une couleur.

## 1.9. `background-color`

`background-color` permet de définir la couleur de fond.

**Exemple :**

```css id="ps9k4a"
body {
    background-color: #f9fafb;
}
```

## 1.10. À retenir

* `font-family` choisit la police.
* `font-size` définit la taille.
* `font-weight` définit l’épaisseur.
* `font-style` définit le style.
* `text-align` définit l’alignement.
* `line-height` règle l’espace entre les lignes.
* `color` définit la couleur du texte.
* Une couleur hexadécimale utilise une valeur comme `#1f2937`.
* `background-color` définit la couleur de fond.

# Partie 2 — Pratique

## 2.1. Mettre en forme le document

### Étape 1 — Ouvrir `style.css`

Ouvrez :

```text id="9c8y2m"
css/style.css
```

Vous avez déjà les premières règles CSS.

Remplacez la règle `body` par :

```css id="f74vau"
body {
    color: #1f2937;
    background: #f9fafb;
    font-family: Arial, sans-serif;
    line-height: 1.5;
}
```

Le texte de la page utilise maintenant Arial et un interligne de `1.5`.

## 2.2. Mettre en forme le titre principal

### Étape 2 — Modifier `.article-header h1`

Ajoutez :

```css id="5vcc9d"
.article-header h1 {
    color: #111827;
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}
```

Le titre principal utilise maintenant une autre police, une taille plus grande et un interligne adapté.

## 2.3. Mettre en forme la catégorie

### Étape 3 — Modifier `.article-category`

Complétez la règle :

```css id="zzj3ye"
.article-category {
    color: #1c5bba;
    font-size: 14px;
    text-align: center;
}
```

## 2.4. Mettre en forme les titres du contenu

### Étape 4 — Modifier les titres

Ajoutez :

```css id="jxjssr"
.article-body h2,
.article-body h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}
```

Ajoutez ensuite :

```css id="jg7x1o"
.article-body h2 {
    font-size: 32px;
}

.article-body h3 {
    font-size: 22px;
}
```

## 2.5. Mettre en forme les informations de l’auteur

### Étape 5 — Cibler le texte de l’auteur

Ajoutez :

```css id="r7h2kq"
.article-author span {
    color: #9ca3af;
    font-size: 12px;
}
```

Le texte `Auteur du blog` devient plus petit et plus clair.

## 2.6. Mettre en forme la citation

### Étape 6 — Cibler le texte de la citation

Ajoutez :

```css id="fv2o0n"
.article-blockquote {
    color: #4b5563;
}

.article-blockquote p {
    font-style: italic;
}

.article-blockquote cite {
    color: #6b7280;
    font-size: 13px;
    font-style: normal;
}
```

## 2.7. Vérifier le résultat

### Étape 7 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 8 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez :

* la police générale ;
* la taille du titre principal ;
* la couleur du titre ;
* les titres de section ;
* la catégorie ;
* les informations de l’auteur ;
* le texte de la citation.

**Résultat attendu :**

Une partie importante de la page est maintenant mise en forme avec les propriétés de texte et les couleurs CSS.

Le fichier `style.css` contient notamment :

```css id="6lhrpk"
body {
    color: #1f2937;
    background: #f9fafb;
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

.article-header h1 {
    color: #111827;
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}

.article-body h2,
.article-body h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}
```

# 3. Bilan

**Vous avez réalisé :** la mise en forme des principaux textes et couleurs de la page.

**Vous savez maintenant :** utiliser `font-family`, `font-size`, `font-weight`, `font-style`, `text-align`, `line-height`, `color`, les couleurs hexadécimales et `background-color`.

Dans le prochain tutoriel, vous allez travailler les **arrière-plans et les images**.

# 4. Glossaire

* **Police** : forme utilisée pour afficher les caractères.
* **Taille de police** : dimension des caractères.
* **Épaisseur** : niveau de graisse du texte.
* **Alignement** : position du texte sur une ligne.
* **Interligne** : espace entre les lignes d’un texte.
* **Couleur hexadécimale** : valeur CSS qui représente une couleur, par exemple `#1f2937`.
