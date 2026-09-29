---
title: "Réutiliser une classe CSS"
layout: tuto
slug: "reutiliser-classe-css"
permalink: /tutos/reutiliser-classe-css/
tuto_id: "T.122.241"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Classes réutilisables</title>
  </head>
  <body>

      <main class="page">

          <h1>Mon blog</h1>

          <section class="actions">
              <a href="#" class="bouton-principal">Lire les articles</a>
              <a href="#" class="bouton-principal">Voir les catégories</a>
          </section>

          <section class="articles">

              <article class="carte-article">
                  <h2>Le métier de développeur</h2>
                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>
                  <a href="#" class="bouton-principal">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h2>Créer une interface web</h2>
                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les actions disponibles.
                  </p>
                  <a href="#" class="bouton-principal">Lire l'article</a>
              </article>

          </section>

      </main>

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

Apprendre à utiliser une même classe CSS sur plusieurs éléments pour conserver un style commun.

## 2. Prérequis

Vous savez déjà :

- créer une classe CSS ;
- utiliser un sélecteur de classe ;
- écrire des propriétés CSS ;
- mettre en forme du texte et des liens ;
- utiliser `padding`, `margin`, `border` et `border-radius` ;
- utiliser Flexbox.

## Données de départ

### HTML

```html id="atv2w4"
<main class="page">

    <h1>Mon blog</h1>

    <section class="actions">
        <a href="#" class="bouton-principal">Lire les articles</a>
        <a href="#" class="bouton-principal">Voir les catégories</a>
    </section>

    <section class="articles">

        <article class="carte-article">
            <h2>Le métier de développeur</h2>
            <p>
                Le développeur crée des applications
                et construit des solutions web.
            </p>
            <a href="#" class="bouton-principal">Lire l'article</a>
        </article>

        <article class="carte-article">
            <h2>Créer une interface web</h2>
            <p>
                Une interface claire aide l'utilisateur
                à comprendre les actions disponibles.
            </p>
            <a href="#" class="bouton-principal">Lire l'article</a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css id="c8sgl3"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Une classe peut être utilisée plusieurs fois

Une classe CSS permet de donner le même style à plusieurs éléments.

**Exemple :**

```css
.bouton-principal {
    padding: 10px 18px;
    color: white;
    background: #2673e8;
    border-radius: 8px;
}
```

Plusieurs éléments peuvent utiliser cette classe :

```html
<a href="#" class="bouton-principal">Lire les articles</a>

<a href="#" class="bouton-principal">Voir les catégories</a>
```

Les deux liens ont le même style.

### 1.2. Le même style pour plusieurs éléments

Une classe permet d'éviter de recopier les mêmes règles CSS.

Sans classe commune, il faudrait créer plusieurs règles.

Avec une classe commune :

```css id="qehyps"
.bouton-principal {
    padding: 10px 18px;
    color: white;
    background: #2673e8;
    border-radius: 8px;
}
```

le style est écrit une seule fois.

### 1.3. Réutiliser une classe dans différentes zones

Une même classe peut être utilisée dans différentes parties d'une page.

Dans notre exemple, `.bouton-principal` est utilisé :

- dans la zone d'actions ;
- dans les cartes d'articles.

Le style reste identique.

### 1.4. Réutiliser une classe sur plusieurs pages

Le principe est aussi valable pour plusieurs pages du même site.

Par exemple :

```text id="d7ymyd"
public-index.html
public-article.html
public-categorie.html
```

Ces pages peuvent utiliser la même classe :

```html id="rljqpp"
<a href="#" class="bouton-principal">Lire l'article</a>
```

La même règle CSS peut alors être réutilisée.

Le but est de garder une présentation commune.

### 1.5. Ne pas créer une classe pour chaque élément

Il n'est pas nécessaire de créer une nouvelle classe lorsque deux éléments doivent avoir exactement le même style.

On peut réutiliser :

```css id="65d3o4"
.bouton-principal
```

sur plusieurs éléments.

### 1.6. À retenir

- Une classe CSS peut être utilisée plusieurs fois.
- Une même classe donne un style commun.
- Le style est écrit une seule fois.
- Une classe commune peut être utilisée dans plusieurs zones d'une page.
- La même classe peut aussi être utilisée sur plusieurs pages.

## Partie 2 — Pratique

### 2.1. Créer un style commun pour les boutons

#### Étape 1 — Créer la classe

Ajoutez :

```css id="ip0sd7"
.bouton-principal {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    background: #2673e8;
    border-radius: 8px;
    text-decoration: none;
}
```

La classe définit maintenant un style commun.

#### Étape 2 — Observer les éléments

Les trois liens qui utilisent :

```html id="oc8zuw"
class="bouton-principal"
```

ont maintenant le même style.

### 2.2. Réutiliser la classe

#### Étape 1 — Vérifier le premier lien

Repérez :

```html id="3kqj5r"
<a href="#" class="bouton-principal">Lire les articles</a>
```

#### Étape 2 — Vérifier le deuxième lien

Repérez :

```html id="z8k605"
<a href="#" class="bouton-principal">Voir les catégories</a>
```

#### Étape 3 — Vérifier les liens des cartes

Repérez :

```html id="7z2ewy"
<a href="#" class="bouton-principal">Lire l'article</a>
```

La même classe est réutilisée.

### 2.3. Modifier le style une seule fois

#### Étape 1 — Modifier le fond

Changez :

```css id="ia17v2"
background: #2673e8;
```

en :

```css id="r7xv5k"
background: #1c5bba;
```

Observez le résultat.

Tous les éléments utilisant `.bouton-principal` changent en même temps.

### 2.4. Ajouter un nouvel élément

#### Étape 1 — Ajouter un troisième bouton

Ajoutez dans la zone `actions` :

```html id="q7v0g0"
<a href="#" class="bouton-principal">À propos</a>
```

Le nouveau lien utilise automatiquement le même style.

Aucune nouvelle règle CSS n'est nécessaire.

### 2.5. Réutiliser la classe sur une autre page

#### Étape 1 — Créer une deuxième page

Créez :

```text id="qf9lqb"
public-article.html
```

Ajoutez un lien :

```html id="29g2l5"
<a href="#" class="bouton-principal">Retour aux articles</a>
```

#### Étape 2 — Utiliser la même feuille CSS

La page doit utiliser la même feuille CSS.

La classe `.bouton-principal` peut donc être réutilisée.

### 2.6. Créer une classe pour les titres de cartes

#### Étape 1 — Identifier le besoin

Les deux titres utilisent actuellement :

```html id="n6cfn6"
<h2>...</h2>
```

Vous souhaitez leur donner le même style.

#### Étape 2 — Ajouter une classe commune

Modifiez les titres :

```html id="p2q1ct"
<h2 class="titre-carte">Le métier de développeur</h2>

<h2 class="titre-carte">Créer une interface web</h2>
```

#### Étape 3 — Créer la règle CSS

Ajoutez :

```css id="l9i5gv"
.titre-carte {
    margin: 0 0 12px;
    font-size: 22px;
}
```

Les deux titres utilisent maintenant la même règle.

### 2.7. Observer l'intérêt de la réutilisation

Changez :

```css id="0w8c6j"
font-size: 22px;
```

en :

```css id="03al76"
font-size: 24px;
```

Les deux titres changent en même temps.

Une seule modification suffit.

**Travail à faire :**

À partir du HTML fourni :

- créez une classe `.bouton-principal` ;
- appliquez-la aux différents liens d'action ;
- utilisez la même classe dans plusieurs zones de la page ;
- créez une classe `.titre-carte` ;
- appliquez-la aux titres des deux cartes ;
- modifiez chaque règle une seule fois ;
- vérifiez que tous les éléments concernés changent ensemble.

Créez également une deuxième page utilisant `.bouton-principal`.

N'introduisez pas encore :

- la cascade CSS ;
- la spécificité ;
- l'héritage ;
- les variables CSS ;
- une organisation CSS en plusieurs fichiers.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-241-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Une même classe CSS est utilisée sur plusieurs éléments.

Une modification de la règle CSS modifie tous les éléments qui utilisent cette classe.

Le même principe fonctionne dans plusieurs zones de la page et sur une deuxième page.

## Bilan

**Vous avez appris :**

- à réutiliser une classe CSS ;
- à appliquer un même style à plusieurs éléments ;
- à éviter de recopier les mêmes règles ;
- à utiliser une classe commune dans plusieurs pages.

**Vous avez réalisé :**

Des éléments d'interface utilisant des classes CSS réutilisables.

## Glossaire

- **Classe CSS** : nom utilisé pour appliquer une même règle à plusieurs éléments.
- **Réutiliser** : utiliser le même élément plusieurs fois.
- **Style commun** : présentation identique utilisée par plusieurs éléments.
- **Composant** : élément d'interface qui peut être réutilisé.