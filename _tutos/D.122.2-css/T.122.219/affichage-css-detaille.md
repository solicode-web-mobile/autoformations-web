---
title: "Affichage CSS"
layout: tuto
slug: "affichage-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.219"
type: "classique"
version: "detaille"
ua: "UA.122.21"
nav_order: 9
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Affichage CSS avancé</title>
        <link rel="stylesheet" href="tuto-9-css.css">
    </head>
    <body>
        <p>Ce texte contient un élément <span class="cache">caché</span> qui ne s'affiche pas.</p>
        
        <cite class="citation-bloc">
            Cette balise inline est forcée à s'afficher comme un bloc pour sauter à la ligne.
        </cite>
    </body>
    </html>
data_css: ""
data_js: ""
data_php: ""
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

Saisir le pouvoir de la propriété `display` pour manipuler le flux du document, en masquant dynamiquement des éléments (`none`) ou en écrasant le comportement standard du navigateur (`inline` vers `block`).

## 2. Prérequis

* Différencier l'affichage `block` de l'affichage `inline` (voir T.122.215).

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Affichage CSS avancé</title>
    <link rel="stylesheet" href="tuto-9-css.css">
</head>
<body>
    <p>Ce texte contient un élément <span class="cache">caché</span> qui ne s'affiche pas.</p>
    
    <cite class="citation-bloc">
        Cette balise inline est forcée à s'afficher comme un bloc pour sauter à la ligne.
    </cite>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'invisibilité totale : `display: none`

Il y a deux façons de cacher un élément en CSS :
- `visibility: hidden;` : L'élément devient transparent, mais **il prend toujours sa place physique** sur la page (il y a un "trou" vide).
- `display: none;` : L'élément est complètement retiré du flux d'affichage. Les éléments qui l'entouraient se resserrent pour combler le vide. C'est la méthode reine pour cacher des éléments interactifs (menus déroulants, modales) avant leur activation.

### 1.2. La mutation des éléments : forcer le `display`

Le HTML est sémantique. Une balise `<span>` ou `<cite>` sert à délimiter du texte au milieu d'une phrase. Le navigateur leur donne donc, très logiquement, un comportement `display: inline`.

Cependant, il arrive en design web qu'on veuille utiliser un `<cite>` mais qu'il agisse comme un bloc autonome avec ses propres marges et sauts de ligne. En CSS, rien n'est gravé dans le marbre. Vous pouvez écraser la nature "inline" de la balise et la forcer à devenir un bloc.
```css
cite {
    display: block;
}
```

## Partie 2 — Pratique

### 2.1. Mise en place

Créez `tuto-9-css.html` (collez le HTML de départ) et `tuto-9-css.css` (vide) dans le même dossier.

### 2.2. Supprimer un élément du flux visuel

Ciblez la classe `.cache` portée par notre `<span>` et appliquez-lui la valeur d'effacement absolu.

Dans `tuto-9-css.css` :
```css
.cache {
    display: none;
}
```

### 2.3. Opérer la mutation Inline vers Block

La balise `<cite>` de classe `.citation-bloc` est censée rester collée au paragraphe précédent ou flotter sur la même ligne.
Nous allons la forcer à agir comme une `div` ou un `p` pour qu'elle passe en dessous et qu'on puisse l'espacer.

```css
.citation-bloc {
    /* Mutation de l'élément */
    display: block;
    
    /* Maintenant qu'il est "block", la marge verticale fonctionne ! */
    margin-top: 20px;
    
    /* Mise en forme */
    color: gray;
}
```

### 2.4. Validation

Sauvegardez vos deux fichiers. Ouvrez le fichier HTML.

**Résultat attendu :**
La première phrase se lit de façon fluide, sans espace étrange là où se trouvait le mot "caché". La citation s'est bel et bien comportée comme un bloc indépendant.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-9/tuto-9-css.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel 9">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une manipulation de l'arbre de rendu (Render Tree) du navigateur grâce au CSS.

**Vous savez maintenant :** 
- Que `display: none` fait disparaître l'élément ET son espace.
- Que l'on peut transgresser les règles HTML d'affichage (`inline`, `block`) en les redéfinissant à volonté dans le fichier CSS.
