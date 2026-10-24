---
name: domaine-css
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine CSS.
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à CSS.
---

# Règles de rédaction - Domaine CSS

Ce skill définit les règles spécifiques à appliquer lors de la rédaction, de la simplification ou de la modification de tutoriels appartenant au domaine CSS (comme les tutoriels liés au domaine D.122.2).

## 1. Masquage des Données de départ dans le texte
Dans les tutoriels CSS, **il ne faut pas ajouter la section "## Données de départ"** dans le corps du tutoriel (le markdown).
* Les données de départ (HTML, CSS, JS) sont déjà chargées automatiquement dans l'éditeur de code de l'interface via les champs `data_html`, `data_css`, etc. Les afficher une seconde fois dans le corps du tutoriel est redondant et surcharge inutilement la page.

## 2. Exécutabilité des Exemples (Éditeur Intégré)
Les exemples doivent pouvoir être testés en direct par les apprenants.
Vous devez obligatoirement ajouter le script permettant de configurer notre éditeur dans les tutoriels (généralement sous le front matter) :

```html
<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>
```

## 3. Exemples de code dans la Théorie
Dans la partie "Théorie", il faut obligatoirement ajouter des exemples de code (snippets CSS/HTML) concrets pour illustrer la syntaxe. Cela permet à l'apprenant de voir le code exact qu'il pourra tester pour appliquer la notion qu'il est en train d'apprendre.

## 4. Visibilité des effets CSS (Dimensions et Éditeur)
Les dimensions des blocs (largeur, hauteur) dans les "Données de départ" doivent être pensées pour que l'effet visuel CSS soit garanti et flagrant, même dans un éditeur intégré étroit.
*Par exemple, pour montrer un comportement de type `justify-content` (qui répartit l'espace vide), il est impératif que les éléments enfants soient suffisamment petits (ex: `width: 20%;` ou `width: 80px;`) pour garantir qu'il restera de l'espace vide dans le conteneur, sinon la propriété n'aura aucun effet visuel.*

## 5. Support visuel obligatoire (Schémas SVG)
Le CSS étant un langage de mise en forme visuelle, les notions abstraites doivent absolument être illustrées. Dans la partie "Théorie", **il est obligatoire d'inclure des schémas explicatifs (dessinés en code SVG intégré dans le Markdown)** pour montrer graphiquement le comportement de la propriété étudiée (par exemple, montrer des boîtes colorées qui s'alignent, se répartissent ou s'espacent).
*Ne vous contentez plus de schémas en texte brut (type `[Boîte 1] --- [Boîte 2]`), utilisez toujours le format `<svg>...</svg>` pour un rendu professionnel et clair. **Attention :** La taille de l'exemple théorique (SVG) doit toujours être fixée à `width="800px"`.*
