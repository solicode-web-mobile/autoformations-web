---
title: "Comprendre la cascade CSS"
layout: tuto
slug: "comprendre-cascade-css"
permalink: /tutos/comprendre-cascade-css/
tuto_id: "T.122.243"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 3
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cascade CSS</title>
  </head>
  <body>

      <main class="page">

          <h1 class="titre-page">Mon blog</h1>

          <section class="zone-article">

              <h2 class="titre-section">Derniers articles</h2>

              <article class="carte-article">
                  <h3 class="titre-carte">Le métier de développeur</h3>
                  <p class="texte-article">
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>
                  <a href="#" class="lien-article">Lire l'article</a>
              </article>

          </section>

      </main>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Comprendre pourquoi une règle CSS peut remplacer une autre règle.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser un sélecteur de classe ;
- utiliser plusieurs classes ;
- regrouper plusieurs sélecteurs ;
- réutiliser une classe CSS ;
- utiliser `margin`, `padding`, `color` et `font-size`.

## Données de départ

### HTML

```html
<main class="page">

    <h1 class="titre-page">Mon blog</h1>

    <section class="zone-article">

        <h2 class="titre-section">Derniers articles</h2>

        <article class="carte-article">
            <h3 class="titre-carte">Le métier de développeur</h3>

            <p class="texte-article">
                Le développeur crée des applications
                et construit des solutions web.
            </p>

            <a href="#" class="lien-article">Lire l'article</a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. La cascade CSS

En CSS, plusieurs règles peuvent cibler le même élément.

CSS doit alors déterminer quelle déclaration utiliser.

C'est le rôle de la **cascade**.

**Exemple :**

```css
.titre-carte {
    color: blue;
}

.titre-carte {
    color: red;
}
```

Les deux règles ciblent le même élément.

La seconde règle est utilisée pour `color`.

### 1.2. L'ordre des règles

Lorsque deux règles ont le même niveau de priorité, l'ordre dans le fichier CSS est important.

Exemple :

```css
.titre-carte {
    color: blue;
}

.titre-carte {
    color: red;
}
```

La couleur finale est `red`.

Si les règles sont inversées :

```css
.titre-carte {
    color: red;
}

.titre-carte {
    color: blue;
}
```

La couleur finale devient `blue`.

### 1.3. Une seule propriété peut être remplacée

Une règle peut contenir plusieurs propriétés.

```css
.titre-carte {
    color: blue;
    font-size: 20px;
}
```

Une autre règle peut modifier seulement `color`.

```css
.titre-carte {
    color: red;
}
```

Le résultat est :

```text
color : red
font-size : 20px
```

La seconde règle ne supprime pas les autres propriétés.

Elle modifie seulement la déclaration concernée.

### 1.4. Comprendre la spécificité simple

Lorsque plusieurs sélecteurs ciblent le même élément, leur type peut donner une priorité différente.

Pour ce tutoriel, on compare simplement :

```css
h3
```

et :

```css
.titre-carte
```

Un sélecteur de classe est plus spécifique qu'un sélecteur de balise.

Exemple :

```css
h3 {
    color: blue;
}

.titre-carte {
    color: red;
}
```

Le titre ayant la classe `.titre-carte` utilise `red`.

### 1.5. La classe et la balise

Dans :

```html
<h3 class="titre-carte">Le métier de développeur</h3>
```

deux sélecteurs peuvent cibler le même élément :

```css
h3 {
    color: blue;
}

.titre-carte {
    color: red;
}
```

La classe `.titre-carte` est plus spécifique que `h3`.

La couleur finale est donc `red`.

### 1.6. Attention aux règles trop nombreuses

Plusieurs règles qui ciblent les mêmes éléments peuvent rendre le CSS difficile à comprendre.

Il faut donc :

- garder des règles claires ;
- éviter les modifications inutiles ;
- savoir quelle règle produit le résultat final.

### 1.7. À retenir

- La cascade décide quelle déclaration CSS est appliquée.
- L'ordre des règles peut modifier le résultat.
- Une règle plus spécifique peut prendre le dessus.
- Une nouvelle déclaration ne remplace que la propriété concernée.
- Il faut savoir lire les règles qui ciblent un même élément.

## Partie 2 — Pratique

### 2.1. Créer une première règle

#### Étape 1 — Styliser le titre

Ajoutez :

```css
.titre-carte {
    color: #2673e8;
    font-size: 20px;
}
```

Le titre devient bleu.

### 2.2. Créer une deuxième règle

#### Étape 1 — Ajouter une nouvelle règle

Ajoutez sous la première règle :

```css
.titre-carte {
    color: #1c5bba;
}
```

La couleur du titre change.

La taille reste `20px`.

### 2.3. Observer l'ordre des règles

#### Étape 1 — Modifier la dernière règle

Changez :

```css
color: #1c5bba;
```

en :

```css
color: #db2777;
```

La couleur du titre devient rose.

#### Étape 2 — Déplacer la règle

Placez cette règle avant la première :

```css
.titre-carte {
    color: #db2777;
}

.titre-carte {
    color: #2673e8;
    font-size: 20px;
}
```

La couleur devient maintenant bleue.

L'ordre des règles produit donc un résultat différent.

### 2.4. Observer une propriété indépendante

#### Étape 1 — Ajouter une autre propriété

Conservez :

```css
.titre-carte {
    color: #2673e8;
    font-size: 20px;
}
```

Ajoutez :

```css
.titre-carte {
    color: #db2777;
}
```

Le résultat est :

```text
couleur : rose
taille : 20px
```

Seule la propriété `color` a été remplacée.

### 2.5. Comparer une balise et une classe

#### Étape 1 — Ajouter une règle pour `h3`

Ajoutez :

```css
h3 {
    color: #2673e8;
}
```

Le titre utilise toujours la classe `.titre-carte`.

#### Étape 2 — Ajouter une règle de classe

Ajoutez :

```css
.titre-carte {
    color: #db2777;
}
```

La règle de classe est plus spécifique que la règle de balise.

Le titre reste donc rose.

### 2.6. Tester l'ordre avec deux règles de même type

#### Étape 1 — Créer deux règles

Utilisez :

```css
.titre-carte {
    font-size: 20px;
}

.titre-carte {
    font-size: 24px;
}
```

La taille finale est `24px`.

#### Étape 2 — Inverser les règles

Utilisez :

```css
.titre-carte {
    font-size: 24px;
}

.titre-carte {
    font-size: 20px;
}
```

La taille finale devient `20px`.

### 2.7. Identifier la règle appliquée

#### Étape 1 — Ouvrir les outils du navigateur

Ouvrez la page dans votre navigateur.

Ouvrez les outils de développement.

Sélectionnez le titre :

```html
<h3 class="titre-carte">
```

Observez les règles CSS appliquées.

#### Étape 2 — Observer une règle remplacée

Ajoutez :

```css
.titre-carte {
    color: blue;
}

.titre-carte {
    color: red;
}
```

Observez la règle qui est utilisée.

Observez aussi la règle qui est remplacée.

La règle finale permet d'expliquer la couleur affichée.

### 2.8. Réutiliser cette compréhension dans le Blog

Dans un projet réel, une classe commune peut être définie :

```css
.titre-carte {
    color: #111827;
    font-size: 20px;
}
```

Une autre règle peut ensuite modifier uniquement une propriété :

```css
.titre-carte {
    color: #2673e8;
}
```

Le style commun reste présent.

Seule la couleur change.

**Travail à faire :**

À partir du HTML fourni :

- créez une règle pour `.titre-carte` ;
- créez une deuxième règle pour la même classe ;
- modifiez l'ordre des deux règles ;
- observez le résultat ;
- créez une règle `h3` ;
- créez ensuite une règle `.titre-carte` ;
- comparez le résultat ;
- observez dans les outils du navigateur quelle règle est appliquée et quelle règle est remplacée.

Créez au moins deux situations où le résultat change à cause de la cascade.

N'introduisez pas encore :

- l'héritage CSS ;
- les variables CSS ;
- `:root` ;
- `var()` ;
- `!important` ;
- les sélecteurs avancés.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-243-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

L'apprenant sait expliquer pourquoi une déclaration est appliquée ou remplacée.

Il sait distinguer :

```text
ordre des règles
```

et :

```text
spécificité simple
```

Il sait modifier une règle sans modifier inutilement les autres propriétés.

## Bilan

**Vous avez appris :**

- le principe de la cascade CSS ;
- l'influence de l'ordre des règles ;
- la notion de spécificité simple ;
- la différence entre un sélecteur de balise et un sélecteur de classe ;
- l'identification d'une règle remplacée.

**Vous avez réalisé :**

Une page dans laquelle plusieurs règles CSS ciblent les mêmes éléments, puis une lecture du résultat produit par la cascade.

## Glossaire

- **Cascade CSS** : mécanisme qui détermine quelles règles CSS sont appliquées.
- **Spécificité** : niveau de priorité d'un sélecteur.
- **Sélecteur de balise** : sélecteur comme `h3` qui cible les éléments de cette balise.
- **Sélecteur de classe** : sélecteur comme `.titre-carte` qui cible les éléments ayant cette classe.
- **Règle remplacée** : règle dont une déclaration n'est finalement pas utilisée.