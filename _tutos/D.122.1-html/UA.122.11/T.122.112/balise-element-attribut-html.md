---
title: "Balise, élément et attribut HTML"
layout: tuto
slug: "balise-element-attribut-html"
permalink: /tutos/:slug/
tuto_id: "T.122.112"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 2
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
    </head>
    <body>
        <p>Le développeur crée des applications.</p>
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

Identifier et différencier clairement ce qu'est une balise, un élément, un attribut et une valeur d’attribut dans un document HTML.

## 2. Prérequis

* Connaître la structure de base `<html>`, `<head>` et `<body>`.
* Savoir utiliser VS Code et ouvrir une page dans un navigateur.

## 3. Données de départ

Le fichier HTML avec lequel nous allons travailler contient le code suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
</head>
<body>
    <p>Le développeur crée des applications.</p>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. La balise HTML

Une **balise** (ou tag) est un code entouré de chevrons (`<` et `>`) qui indique au navigateur comment interpréter le contenu. 
La majorité des balises fonctionnent par paires : une **balise ouvrante** et une **balise fermante** (qui possède un `/`).

```html
<p>
    Bonjour.
</p>
```

- `<p>` est la balise ouvrante.
- `</p>` est la balise fermante.

### 1.2. L’élément HTML

Un **élément** HTML désigne l'ensemble complet : la balise ouvrante, le contenu à l'intérieur, et la balise fermante.

```html
<p>Bonjour.</p>
```

L'élément complet ici est le paragraphe, composé de `<p>`, du texte "Bonjour." et de `</p>`.

### 1.3. L’attribut et sa valeur

Un **attribut** s'ajoute *à l'intérieur* de la balise ouvrante pour lui donner une information supplémentaire ou modifier son comportement.
L'attribut est toujours suivi d'un signe `=` et de sa **valeur** entre guillemets.

```html
<html lang="fr">
```

Ici :
* `lang` est l’attribut (pour "language").
* `"fr"` est la valeur de l’attribut (pour "français").

### 1.4. À retenir

* **Balise** : mot-clé entre chevrons (`<p>` ou `</p>`).
* **Élément** : le bloc entier (balises + contenu).
* **Attribut** : propriété ajoutée dans la balise ouvrante.
* **Valeur** : donnée affectée à l'attribut (entre guillemets).

## Partie 2 — Pratique

### 2.1. Créer le fichier

Ouvrez VS Code et créez un fichier nommé :

```text
tuto-2-html.html
```

### 2.2. Ajouter le code de départ

Copiez le code fourni dans les données de départ à l'intérieur de votre fichier.

### 2.3. Analyser le code

Entraînez-vous à identifier les différentes parties de votre code :

1. Trouvez l'attribut `lang` dans la balise `<html>`.
2. Identifiez la balise fermante `</body>`.
3. Repérez l'élément paragraphe complet : `<p>Le développeur crée des applications.</p>`.

### 2.4. Tester le fichier

Enregistrez `tuto-2-html.html` et ouvrez-le dans votre navigateur.

**Résultat attendu :**

La page affiche la phrase sans afficher les balises elles-mêmes, ce qui prouve que le navigateur a bien interprété les éléments.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-2/tuto-2-html.html' | relative_url}}"
    height="100"
    title="Résultat du tutoriel 2">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une page HTML en analysant son vocabulaire technique.

**Vous savez maintenant :** utiliser les termes exacts (balise, élément, attribut, valeur) pour décrire et comprendre du code HTML.
