---
title: "Informations et textes HTML"
layout: tuto
slug: "informations-textes-html"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.113"
type: "classique"
version: "detaille"
ua: "UA.122.11"
nav_order: 3
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
    </head>
    <body>
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

Apprendre à donner du sens à votre contenu grâce à la "sémantique textuelle". Ce tutoriel vous apprendra à configurer les métadonnées de la page et à hiérarchiser correctement vos titres et paragraphes.

## 2. Prérequis

* Connaître la structure `<html>`, `<head>` et `<body>`.
* Savoir ce qu'est un attribut et sa valeur.

## 3. Données de départ

Nous partons d'un document HTML vide, sans aucune information technique ni contenu :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
</head>
<body>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'encodage et les balises `<meta>`

Les balises `<meta>` sont placées dans le `<head>`. Elles sont invisibles pour l'utilisateur, mais cruciales pour le navigateur et les moteurs de recherche.
La plus importante est celle de l'encodage des caractères :

```html
<meta charset="UTF-8">
```
*Si vous omettez cette balise, les lettres comme "é", "à", "ç" risquent de s'afficher comme des symboles étranges (ex: "Ã©"). Le format `UTF-8` est le standard mondial.*

### 1.2. La hiérarchie des titres (Heading)

Le langage HTML propose 6 niveaux de titres, de `<h1>` à `<h6>`. 
Ces balises sont primordiales pour le SEO (référencement sur Google) et pour l'accessibilité.

- `<h1>` : Le titre principal. Il ne devrait y en avoir qu'**un seul** par page.
- `<h2>` : Les grands chapitres.
- `<h3>` : Les sous-chapitres, etc.

*Important : Ne choisissez pas un titre pour sa "taille visuelle" (ce sera le rôle du CSS plus tard), mais pour son importance logique.*

### 1.3. La sémantique textuelle

Il ne suffit pas d'afficher du texte, il faut lui donner du sens :
- `<strong>` : Indique que le mot est d'une grande importance (le navigateur le mettra en gras par défaut).
- `<time>` : Permet d'encadrer une date. L'attribut `datetime` indique aux robots (comme Google) la vraie date au format standard lisible par la machine (`AAAA-MM-JJ`).
- `<blockquote>` : Utilisé pour les citations longues (un bloc complet).
- `<cite>` : Identifie le titre de l'œuvre citée ou le nom de l'auteur.

### 1.4. Le cas des balises orphelines

Contrairement à `<p>` qui a besoin d'un début et d'une fin, les balises de structure simples n'encadrent rien :
- `<br>` (break) : force le retour à la ligne immédiatement, au milieu d'un paragraphe.
- `<hr>` (horizontal rule) : dessine une ligne séparatrice.

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Dans VS Code, créez un fichier `tuto-3-html.html` et copiez les données de départ.

### 2.2. Construire la page étape par étape

Remplissez votre fichier pour obtenir la structure sémantique complète suivante :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- 1. Encodage et Titre -->
    <meta charset="UTF-8">
    <title>Le métier de développeur</title>
</head>
<body>
    <!-- 2. Titre principal unique et date -->
    <h1>Le métier de développeur et ses principales missions</h1>
    <p>
        Publié le <time datetime="2026-02-14">14 Février 2026</time>
    </p>

    <!-- 3. Paragraphe avec importance sémantique -->
    <p>
        Le <strong>développeur</strong> crée des applications.
        Il transforme un besoin en solution informatique.
    </p>

    <!-- 4. Hiérarchie H2 et H3 -->
    <h2>Le rôle du développeur</h2>
    <p>
        La première mission est d'analyser le besoin.
        Le développeur cherche les fonctionnalités nécessaires.
    </p>

    <h3>Réaliser l'application</h3>
    
    <!-- 5. Utilisation du retour à la ligne forcé -->
    <p>
        Le développeur écrit le code de l'application.<br>
        Il organise son travail et crée les fonctionnalités demandées.
    </p>

    <!-- 6. Citation et séparation -->
    <blockquote>
        <p>Le développeur réalise l'application à partir du besoin. Il utilise des technologies comme HTML, CSS et JavaScript.</p>
        <cite>— Métier de développeur</cite>
    </blockquote>
    <hr>
</body>
</html>
```

### 2.3. Tester la page

Enregistrez et ouvrez le fichier dans le navigateur. Observez bien comment le navigateur interprète chaque balise par défaut : le `<h1>` est le plus gros, le `<blockquote>` a une marge à gauche, le `<hr>` trace une ligne grise.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-3/tuto-3-html.html' | relative_url}}"
    height="600"
    title="Résultat du tutoriel 3">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page riche, validant les bonnes pratiques du web.

**Vous savez maintenant :** ce qu'est la "sémantique web" et comment l'utiliser pour structurer vos textes (titres `h1`-`h6`, `strong`, `time`, citations) et gérer les métadonnées (`charset`, `title`).
