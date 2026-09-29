---
title: "Regrouper les règles communes"
layout: tuto
slug: "regrouper-regles-communes"
permalink: /tutos/regrouper-regles-communes/
tuto_id: "T.122.242"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 2
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Règles communes</title>
  </head>
  <body>

      <main class="page">

          <h1 class="titre-principal">Mon blog</h1>

          <section class="zone-articles">

              <h2 class="titre-section">Derniers articles</h2>

              <article class="carte-article">
                  <h3 class="titre-carte">Le métier de développeur</h3>
                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>
                  <a href="#" class="lien-article">Lire l'article</a>
              </article>

              <article class="carte-article">
                  <h3 class="titre-carte">Créer une interface web</h3>
                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les actions disponibles.
                  </p>
                  <a href="#" class="lien-article">Lire l'article</a>
              </article>

          </section>

          <section class="zone-a-propos">

              <h2 class="titre-section">À propos</h2>

              <p>
                  Je partage des articles sur le développement web.
              </p>

              <a href="#" class="lien-article">En savoir plus</a>

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

Apprendre à regrouper plusieurs sélecteurs qui utilisent les mêmes règles CSS.

## 2. Prérequis

Vous savez déjà :

- créer une classe CSS ;
- réutiliser une classe sur plusieurs éléments ;
- écrire une règle CSS ;
- utiliser plusieurs propriétés dans une même règle ;
- utiliser les sélecteurs de classe ;
- utiliser les sélecteurs de balise.

## Données de départ

### HTML

```html id="5v0z6k"
<main class="page">

    <h1 class="titre-principal">Mon blog</h1>

    <section class="zone-articles">

        <h2 class="titre-section">Derniers articles</h2>

        <article class="carte-article">
            <h3 class="titre-carte">Le métier de développeur</h3>
            <p>
                Le développeur crée des applications
                et construit des solutions web.
            </p>
            <a href="#" class="lien-article">Lire l'article</a>
        </article>

        <article class="carte-article">
            <h3 class="titre-carte">Créer une interface web</h3>
            <p>
                Une interface claire aide l'utilisateur
                à comprendre les actions disponibles.
            </p>
            <a href="#" class="lien-article">Lire l'article</a>
        </article>

    </section>

    <section class="zone-a-propos">

        <h2 class="titre-section">À propos</h2>

        <p>
            Je partage des articles sur le développement web.
        </p>

        <a href="#" class="lien-article">En savoir plus</a>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css id="h4g2o3"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Répéter une même règle

Plusieurs éléments peuvent avoir les mêmes propriétés.

On pourrait écrire :

```css
.titre-section {
    margin-bottom: 20px;
}

.titre-carte {
    margin-bottom: 20px;
}
```

Les deux règles contiennent la même déclaration.

Le code peut être simplifié.

### 1.2. Regrouper des sélecteurs

CSS permet d'écrire plusieurs sélecteurs dans une même règle.

On utilise une virgule `,`.

```css
.titre-section,
.titre-carte {
    margin-bottom: 20px;
}
```

Les deux sélecteurs utilisent maintenant la même règle.

### 1.3. Comprendre la virgule

La virgule indique que plusieurs sélecteurs utilisent la même déclaration.

Dans :

```css id="gn8fm5"
.titre-section,
.titre-carte {
    margin-bottom: 20px;
}
```

CSS applique `margin-bottom: 20px` aux éléments qui utilisent :

```text
.titre-section
```

et :

```text
.titre-carte
```

### 1.4. Regrouper plusieurs types de sélecteurs

Le groupement ne fonctionne pas seulement avec des classes.

On peut aussi regrouper des balises.

```css id="10fwd3"
h2,
h3 {
    margin-bottom: 20px;
}
```

La même règle s'applique aux éléments `h2` et `h3`.

### 1.5. Créer une règle commune

On peut aussi regrouper deux classes différentes qui ont besoin des mêmes propriétés.

```css id="gp1w9c"
.carte-article,
.zone-a-propos {
    padding: 20px;
}
```

Les deux zones reçoivent le même `padding`.

### 1.6. Quand regrouper ?

Il est utile de regrouper les sélecteurs lorsque :

- plusieurs éléments ont les mêmes propriétés ;
- les propriétés doivent rester identiques ;
- le regroupement rend le code plus simple.

Il ne faut pas regrouper des éléments qui ont seulement une propriété en commun lorsque cela rend le code difficile à comprendre.

### 1.7. À retenir

- Une virgule permet de regrouper plusieurs sélecteurs.
- Les sélecteurs groupés utilisent la même règle.
- Le groupement évite de répéter les mêmes déclarations.
- Une règle commune doit être utilisée lorsque les éléments ont réellement un besoin commun.

## Partie 2 — Pratique

### 2.1. Préparer les éléments

#### Étape 1 — Donner un style aux titres

Ajoutez :

```css id="q19q0a"
.titre-section {
    margin: 0 0 20px;
    font-size: 24px;
}

.titre-carte {
    margin: 0 0 20px;
    font-size: 20px;
}
```

Les deux titres utilisent maintenant des règles différentes.

### 2.2. Observer les déclarations identiques

Les deux règles contiennent :

```css id="2l7ubv"
margin: 0 0 20px;
```

Cette déclaration est identique.

Nous pouvons la regrouper.

### 2.3. Regrouper les sélecteurs

#### Étape 1 — Remplacer les deux règles

Supprimez les deux règles précédentes.

Ajoutez :

```css id="w4b1v2"
.titre-section,
.titre-carte {
    margin: 0 0 20px;
}
```

Les deux titres gardent le même espacement.

### 2.4. Conserver une propriété différente

Les deux titres n'ont pas la même taille.

On peut donc conserver une règle séparée pour chaque titre.

Ajoutez :

```css id="jz5b0k"
.titre-section {
    font-size: 24px;
}

.titre-carte {
    font-size: 20px;
}
```

Le code contient maintenant :

```css id="w5qpq5"
.titre-section,
.titre-carte {
    margin: 0 0 20px;
}

.titre-section {
    font-size: 24px;
}

.titre-carte {
    font-size: 20px;
}
```

La règle commune est regroupée.

Les propriétés différentes restent séparées.

### 2.5. Regrouper des zones avec le même espace intérieur

#### Étape 1 — Créer les règles séparées

Ajoutez :

```css id="sejkeh"
.carte-article {
    padding: 20px;
}

.zone-a-propos {
    padding: 20px;
}
```

Les deux zones utilisent le même `padding`.

#### Étape 2 — Regrouper les sélecteurs

Remplacez les deux règles par :

```css id="t0g1sl"
.carte-article,
.zone-a-propos {
    padding: 20px;
}
```

Une seule règle suffit maintenant.

### 2.6. Regrouper les règles de liens

#### Étape 1 — Ajouter un style commun

Ajoutez :

```css id="u0nplq"
.lien-article {
    display: inline-block;
    margin-top: 12px;
}
```

Tous les liens qui utilisent cette classe ont le même style.

### 2.7. Observer l'intérêt du groupement

#### Étape 1 — Ajouter une troisième zone

Ajoutez :

```html id="uw8gkb"
<section class="zone-contact">

    <h2 class="titre-section">Contact</h2>

    <p>
        Retrouvez les nouveaux articles du blog.
    </p>

</section>
```

#### Étape 2 — Donner le même espace aux zones

Ajoutez la classe dans la règle :

```css id="k4n5i6"
.carte-article,
.zone-a-propos,
.zone-contact {
    padding: 20px;
}
```

Les trois zones utilisent maintenant la même règle.

### 2.8. Identifier les règles communes

Observez le code.

Repérez :

```text id="0fdw0e"
.titre-section
.titre-carte
```

Ils partagent une règle.

Repérez :

```text id="ow8gwj"
.carte-article
.zone-a-propos
.zone-contact
```

Ils partagent également une règle.

Le but est de retrouver dans le CSS les propriétés réellement communes.

### 2.9. Éviter les regroupements inutiles

Ne regroupez pas deux sélecteurs uniquement parce qu'ils sont dans la même page.

Par exemple :

```css id="j2y3f3"
.titre-section,
.lien-article {
    font-size: 24px;
}
```

Ce regroupement n'est pas cohérent si les deux éléments ne doivent pas avoir la même taille.

Regroupez uniquement les sélecteurs qui ont réellement besoin de la même règle.

### 2.10. Préparer le CSS commun

À la fin de l'exercice, vous pouvez obtenir :

```css id="w3w7jw"
.titre-section,
.titre-carte {
    margin: 0 0 20px;
}

.titre-section {
    font-size: 24px;
}

.titre-carte {
    font-size: 20px;
}

.carte-article,
.zone-a-propos,
.zone-contact {
    padding: 20px;
}

.lien-article {
    display: inline-block;
    margin-top: 12px;
}
```

Chaque règle possède maintenant un rôle clair.

**Travail à faire :**

À partir du HTML fourni :

- identifiez les éléments qui utilisent les mêmes propriétés ;
- regroupez les sélecteurs concernés avec une virgule ;
- conservez des règles séparées lorsque les propriétés sont différentes ;
- ajoutez une troisième zone ;
- appliquez-lui les règles communes appropriées ;
- vérifiez que votre CSS contient moins de répétitions.

Le résultat doit utiliser le groupement de sélecteurs.

N'introduisez pas encore :

- la cascade CSS ;
- la spécificité ;
- l'héritage ;
- les variables CSS ;
- `:root` ;
- `var()`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-242-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les sélecteurs qui ont réellement les mêmes propriétés sont regroupés dans une même règle CSS.

Les propriétés différentes restent dans des règles séparées.

Le CSS contient moins de répétitions sans créer de regroupements inutiles.

## Bilan

**Vous avez appris :**

- à identifier des règles communes ;
- à regrouper plusieurs sélecteurs ;
- à utiliser la virgule `,` dans un sélecteur CSS ;
- à garder les propriétés différentes dans des règles séparées.

**Vous avez réalisé :**

Une feuille CSS avec des règles communes regroupées pour plusieurs éléments de la page.

## Glossaire

- **Sélecteur** : élément qui indique à quels éléments une règle CSS s'applique.
- **Sélecteurs groupés** : plusieurs sélecteurs réunis dans une même règle CSS.
- **Règle commune** : règle CSS utilisée par plusieurs sélecteurs.
- **Déclaration** : association d'une propriété et d'une valeur CSS.
- **Répétition** : même déclaration écrite plusieurs fois dans le CSS.