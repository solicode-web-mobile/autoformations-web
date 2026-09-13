---
title: "Structure d’un document HTML"
layout: tuto
slug: "structure-document-html"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.111"
type: "classique"
version: "detaille"
ua: "UA.122.11"
nav_order: 1
data_html: ""
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

Créer et comprendre en profondeur la structure de base obligatoire d’un document HTML, puis afficher un titre d'onglet et un paragraphe.

## 2. Prérequis

* Avoir installé Visual Studio Code.
* Savoir créer un fichier avec l'extension `.html`.

## Partie 1 — Théorie

### 1.1. L'anatomie d'une page web

Une page web est un document texte structuré. Pour qu'un navigateur (Chrome, Firefox, Safari) comprenne comment afficher ce texte, le document doit suivre des règles strictes définies par le langage HTML (HyperText Markup Language).

Tout document HTML5 valide *doit* posséder cette arborescence minimale :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Titre</title>
</head>
<body>
    <!-- Contenu -->
</body>
</html>
```

### 1.2. Explication détaillée de chaque balise

- **`<!DOCTYPE html>`** : Ce n'est pas vraiment une balise HTML, mais une instruction. Elle indique au navigateur web : "Attention, le code qui suit respecte la dernière norme du langage HTML5". Sans elle, les vieux navigateurs pourraient mal interpréter la page.
- **`<html lang="fr">`** : C'est la racine du document. Absolument tout le reste doit se trouver à l'intérieur. L'attribut `lang="fr"` est essentiel pour l'accessibilité (les synthèses vocales pour les malvoyants sauront qu'il faut lire en français) et pour le référencement naturel.
- **`<head>`** : C'est le "cerveau" de la page. Rien de ce qui est dans le `<head>` ne s'affiche directement sur la page blanche du navigateur. On y place les configurations, comme le `<meta charset="UTF-8">` qui garantit que les accents s'afficheront correctement, ou la balise `<title>`.
- **`<title>`** : Le titre de la page. Il s'affiche sur l'onglet du navigateur et c'est le texte cliquable qui apparaît dans les résultats de Google.
- **`<body>`** : C'est le "corps" de la page. Tout ce qui est visuel (textes, images, boutons, vidéos) doit obligatoirement être écrit entre `<body>` et `</body>`.

### 1.3. Les balises de texte de base

Pour afficher du texte dans le `<body>`, on ne l'écrit jamais directement "dans le vide". On le structure.
La balise **`<p>`** (pour *paragraph*) permet de délimiter un bloc de texte.

## Partie 2 — Pratique

### 2.1. Créer le fichier

Dans VS Code, créez un fichier nommé :

```text
tuto-1-html.html
```

*Astuce VS Code : Si vous tapez `!` puis que vous appuyez sur la touche `Entrée` ou `Tab`, VS Code générera automatiquement toute cette structure de base pour vous ! Mais pour cet exercice, nous allons l'écrire pour bien la comprendre.*

### 2.2. Ajouter la structure complète

Copiez ou tapez le code suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon premier article</title>
</head>
<body>
</body>
</html>
```

### 2.3. Ajouter le contenu visible

Dans la balise `<body>`, ajoutez un paragraphe `<p>` :

```html
<body>
    <p>Le développeur crée des applications informatiques. Il doit analyser, coder, et tester son travail.</p>
</body>
```

### 2.4. Tester la page

Enregistrez le fichier (`Ctrl + S`).
Ouvrez le fichier `tuto-1-html.html` dans votre navigateur web.

**Résultat attendu :**

L'onglet indique "Mon premier article", les accents s'affichent correctement grâce au charset UTF-8, et le paragraphe est bien visible sur fond blanc.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-1/tuto-1-html.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel 1">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page HTML structurée et sémantiquement correcte.

**Vous savez maintenant :** comprendre le rôle de chaque balise fondamentale (`DOCTYPE`, `html`, `head`, `body`), configurer l'encodage des caractères, et définir un titre pour les moteurs de recherche.

## 4. Glossaire

* **Balise** : Instruction HTML encadrée de chevrons (`< >`).
* **Sémantique** : Le fait de donner du sens au contenu en utilisant la bonne balise (ex: `<p>` indique clairement qu'il s'agit d'un paragraphe de texte).
* **`UTF-8`** : Encodage universel des caractères qui inclut tous les accents et alphabets du monde.
