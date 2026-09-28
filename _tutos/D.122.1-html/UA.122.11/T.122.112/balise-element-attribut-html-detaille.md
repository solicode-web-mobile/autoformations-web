---
title: "Balise, élément et attribut HTML"
layout: tuto
slug: "balise-element-attribut-html"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.112"
type: "classique"
version: "detaille"
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

Maîtriser le vocabulaire fondamental et la syntaxe stricte d'un document HTML. À la fin de ce tutoriel, la différence entre une balise, un élément, un attribut et sa valeur n'aura plus de secret pour vous.

## 2. Prérequis

* Connaître la structure de base `<html>`, `<head>` et `<body>`.
* Savoir utiliser VS Code et ouvrir une page dans un navigateur.

## 3. Données de départ

Nous allons analyser le fichier HTML suivant :

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

### 1.1. Les Balises (Tags)

Le langage HTML est fondé sur l'utilisation de **balises**. Une balise agit comme une étiquette (tag en anglais) qui encadre le contenu pour indiquer sa nature au navigateur.

- **Balise ouvrante** : Commence par `<` et se termine par `>`. Exemple : `<p>`.
- **Balise fermante** : Identique à l'ouvrante, mais possède un slash `/` avant le nom. Exemple : `</p>`.

*Note : Certaines balises très particulières dites "orphelines" (ou auto-fermantes) n'ont pas besoin de balise fermante, comme `<img>` ou `<br>`.*

### 1.2. L'Élément

Un **élément** HTML correspond à l'entité globale. Il commence à la balise ouvrante, englobe tout le contenu au milieu, et se termine avec la balise fermante.

```html
<p>Le développeur crée des applications.</p>
```
Tout ce bloc de la ligne ci-dessus forme "l'élément paragraphe".

L'arborescence HTML repose sur l'imbrication d'éléments. Un élément peut contenir d'autres éléments. L'élément `<body>` de notre code de départ contient par exemple l'élément `<p>`.

### 1.3. L'Attribut et sa Valeur

Les balises peuvent avoir des **attributs** qui modifient leur comportement par défaut ou leur apportent des informations complémentaires indispensables.

Règles syntaxiques des attributs :
1. Ils se placent *exclusivement* dans la balise **ouvrante**.
2. Ils sont toujours séparés du nom de la balise par un espace.
3. Ils sont suivis du signe `=` puis de leur **valeur** (toujours entourée de guillemets doubles `""`).

```html
<html lang="fr">
```

Ici, `lang` est l'attribut (pour language), et `"fr"` est la valeur d'attribut.

### 1.4. À retenir

* **Balise** : mot-clé entre chevrons (`<p>` ou `</p>`).
* **Élément** : le bloc entier (balises + contenu).
* **Attribut** : propriété ajoutée dans la balise ouvrante.
* **Valeur** : donnée affectée à l'attribut (entre guillemets).

## Partie 2 — Pratique

### 2.1. Créer le fichier

Ouvrez VS Code et créez un fichier nommé `tuto-2-html.html`.

### 2.2. Ajouter le code de départ

Copiez le code fourni dans les données de départ à l'intérieur de votre fichier.

### 2.3. Analyser et vérifier

Observez votre éditeur de code : la **coloration syntaxique** de VS Code vous aide à repérer ce vocabulaire.
- Le nom des balises (`html`, `body`, `p`) est généralement d'une couleur (ex: bleu ou rouge).
- Les attributs (`lang`) sont d'une autre couleur (ex: bleu clair).
- Les valeurs (`"fr"`) sont d'une troisième couleur (ex: orange).

### 2.4. Tester le fichier

Enregistrez votre fichier (`Ctrl + S`) et ouvrez-le dans le navigateur.

**Résultat attendu :**

Seul le contenu textuel s'affiche. Le navigateur interprète les balises, les éléments et les attributs de manière invisible.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-2/tuto-2-html.html' | relative_url}}"
    height="100"
    title="Résultat du tutoriel 2">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une page HTML en analysant rigoureusement son vocabulaire technique.

**Vous savez maintenant :** utiliser les termes exacts (balise, élément, attribut, valeur) et comprendre l'importance de la syntaxe stricte (guillemets, chevrons) en HTML.
