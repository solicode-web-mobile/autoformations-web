---
title: "Projet de synthèse — Cartes d'articles"
layout: tuto
slug: "synthese-cartes-articles"
permalink: /tutos/synthese-cartes-articles/
tuto_id: "T.122.22.6"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 6
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartes d'articles</title>
  </head>
  <body>

      <main>
          <h1>Derniers articles</h1>

          <section>
              <article class="carte-article">

                  <div class="carte-image">
                      <img
                          src="images/article-example.png"
                          alt="Écran montrant du code informatique">
                  </div>

                  <div class="carte-contenu">
                      <h2>Le métier de développeur</h2>
                      <p>
                          Le développeur crée des applications
                          et transforme un besoin en solution.
                      </p>
                      <a href="#">Lire l'article</a>
                  </div>

              </article>

              <article class="carte-article">

                  <div class="carte-image">
                      <img
                          src="images/article-example.png"
                          alt="Interface utilisateur">
                  </div>

                  <div class="carte-contenu">
                      <h2>Créer une interface web</h2>
                      <p>
                          Une interface claire aide l'utilisateur
                          à comprendre les actions disponibles.
                      </p>
                      <a href="#">Lire l'article</a>
                  </div>

              </article>

              <article class="carte-article">

                  <div class="carte-image">
                      <img
                          src="images/article-example.png"
                          alt="Développeur travaillant sur une application">
                  </div>

                  <div class="carte-contenu">
                      <h2>Tester une application</h2>
                      <p>
                          Les tests permettent de vérifier
                          que les fonctionnalités fonctionnent.
                      </p>
                      <a href="#">Lire l'article</a>
                  </div>

              </article>
          </section>
      </main>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Construire plusieurs cartes d’articles avec des dimensions et des espacements cohérents.

## 2. Prérequis

Vous savez déjà :

- écrire une règle CSS ;
- utiliser une classe CSS ;
- utiliser `box-sizing` ;
- utiliser `min-width` ;
- utiliser `max-width` ;
- utiliser `min-height` ;
- utiliser `padding` ;
- utiliser `margin` ;
- utiliser `border` ;
- utiliser `border-radius` ;
- utiliser `overflow: hidden` ;
- utiliser `object-fit`.

## Données de départ

### HTML

Le HTML de départ contient trois cartes d’articles.

```html
<main>
    <h1>Derniers articles</h1>

    <section>
        <article class="carte-article">

            <div class="carte-image">
                <img
                    src="images/article-example.png"
                    alt="Écran montrant du code informatique">
            </div>

            <div class="carte-contenu">
                <h2>Le métier de développeur</h2>
                <p>
                    Le développeur crée des applications
                    et transforme un besoin en solution.
                </p>
                <a href="#">Lire l'article</a>
            </div>

        </article>

        <article class="carte-article">

            <div class="carte-image">
                <img
                    src="images/article-example.png"
                    alt="Interface utilisateur">
            </div>

            <div class="carte-contenu">
                <h2>Créer une interface web</h2>
                <p>
                    Une interface claire aide l'utilisateur
                    à comprendre les actions disponibles.
                </p>
                <a href="#">Lire l'article</a>
            </div>

        </article>

        <article class="carte-article">

            <div class="carte-image">
                <img
                    src="images/article-example.png"
                    alt="Développeur travaillant sur une application">
            </div>

            <div class="carte-contenu">
                <h2>Tester une application</h2>
                <p>
                    Les tests permettent de vérifier
                    que les fonctionnalités fonctionnent.
                </p>
                <a href="#">Lire l'article</a>
            </div>

        </article>
    </section>
</main>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Construire un composant homogène

Les trois cartes utilisent la même classe :

```css
.carte-article
```

Une seule règle CSS peut donc définir les caractéristiques communes des trois cartes.

### 1.2. Contrôler les dimensions

Une carte peut avoir :

```css
min-width: 280px;
max-width: 400px;
min-height: 300px;
```

Ces contraintes permettent de garder une taille cohérente.

### 1.3. Organiser l’espace

Le `padding` crée un espace à l’intérieur de la carte.

Les `margin` séparent les éléments.

Exemple :

```css
.carte-contenu {
    padding: 20px;
}

.carte-contenu h2 {
    margin: 0 0 12px;
}

.carte-contenu p {
    margin: 0 0 16px;
}
```

### 1.4. Maîtriser l’image

Une image peut utiliser :

```css
width: 100%;
height: 220px;
object-fit: cover;
```

Elle occupe ainsi toute la largeur de la zone prévue.

### 1.5. À retenir

Le projet réunit les notions de l’UA.122.22 :

- dimensionner ;
- limiter ;
- espacer ;
- contenir ;
- homogénéiser.

## Partie 2 — Pratique

### 2.1. Préparer la page

#### Étape 1 — Créer la feuille CSS

Créez le fichier :

```text
style.css
```

Reliez-le à la page HTML.

### 2.2. Mettre en forme la carte

#### Étape 1 — Définir les dimensions

Ajoutez la règle :

```css
.carte-article {
    box-sizing: border-box;
    min-width: 280px;
    max-width: 400px;
    min-height: 300px;
}
```

#### Étape 2 — Ajouter la présentation de la carte

Complétez la règle :

```css
.carte-article {
    box-sizing: border-box;
    min-width: 280px;
    max-width: 400px;
    min-height: 300px;
    margin-bottom: 24px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
}
```

Les cartes ont maintenant une taille contrôlée.

Un espace de `24px` est créé entre deux cartes.

### 2.3. Mettre en forme les images

#### Étape 1 — Préparer la zone de l’image

Ajoutez :

```css
.carte-image img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
}
```

Chaque image occupe toute la largeur disponible.

### 2.4. Organiser le contenu

#### Étape 1 — Ajouter le `padding`

Ajoutez :

```css
.carte-contenu {
    padding: 20px;
}
```

Le contenu ne touche plus les bords.

#### Étape 2 — Organiser le titre

Ajoutez :

```css
.carte-contenu h2 {
    margin: 0 0 12px;
}
```

#### Étape 3 — Organiser le texte

Ajoutez :

```css
.carte-contenu p {
    margin: 0 0 16px;
}
```

### 2.5. Mettre en forme le lien

#### Étape 1 — Donner une couleur au lien

Ajoutez :

```css
.carte-contenu a {
    color: #2673e8;
    text-decoration: none;
}
```

### 2.6. Organiser la page

#### Étape 1 — Ajouter un espace autour du contenu

Ajoutez :

```css
main {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
}
```

La page possède maintenant une largeur maximale.

Le contenu est centré avec `margin: auto`.

#### Étape 2 — Organiser le titre

Ajoutez :

```css
main h1 {
    margin: 0 0 32px;
}
```

Un espace est créé entre le titre et les cartes.

### 2.7. Vérifier les trois cartes

Observez les trois cartes.

Vérifiez :

- les trois cartes utilisent la même classe ;
- leur largeur est limitée ;
- leur hauteur minimale est identique ;
- leur contenu possède le même espace intérieur ;
- leurs images ont la même hauteur ;
- leurs bordures sont identiques ;
- leurs coins sont arrondis ;
- un espace régulier sépare les cartes.

**Travail à faire :**

À partir du HTML fourni, réalisez la présentation complète des trois cartes.

Votre CSS doit :

- contrôler la taille des cartes ;
- organiser l’espace intérieur ;
- séparer les éléments avec `margin` ;
- limiter les images ;
- garder les images dans les coins de la carte ;
- appliquer les mêmes règles aux trois cartes ;
- ajouter un espace entre les cartes ;
- centrer la zone principale de la page.

N’utilisez pas Flexbox.

N’utilisez pas `gap`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-22-6-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les trois cartes utilisent une même structure CSS.

Leurs dimensions sont cohérentes.

Les contenus sont correctement espacés.

Les images restent dans les limites des cartes.

Les cartes sont présentées avec un espacement régulier.

La page reste lisible dans sa zone de contenu.

## Bilan

**Vous avez réalisé :**

Une page contenant trois cartes d’articles homogènes.

**Vous savez maintenant :**

- contrôler les dimensions d’un composant ;
- organiser son espace intérieur ;
- séparer ses éléments ;
- contrôler le contenu qui dépasse ;
- réutiliser les mêmes règles CSS sur plusieurs cartes.

## Glossaire

- **Carte** : bloc qui présente un contenu court.
- **Composant** : élément d’interface réutilisable.
- **Homogène** : qui garde la même présentation.
- **Dimension** : taille d’un élément.
- **Espacement** : distance entre deux éléments.
- **`overflow`** : propriété qui contrôle le contenu qui dépasse.