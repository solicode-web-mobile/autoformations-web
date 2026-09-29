---
title: "Centraliser les valeurs visuelles"
layout: tuto
slug: "centraliser-valeurs-visuelles"
permalink: /tutos/centraliser-valeurs-visuelles/
tuto_id: "T.122.246"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 6
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Variables CSS</title>
  </head>
  <body>

      <main class="page">

          <h1 class="titre-page">Mon blog</h1>

          <section class="zone-actions">

              <a href="#" class="bouton-principal">
                  Lire les articles
              </a>

              <a href="#" class="bouton-secondaire">
                  Voir les catégories
              </a>

          </section>

          <section class="zone-articles">

              <article class="carte-article">
                  <h2 class="titre-carte">
                      Le métier de développeur
                  </h2>

                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>

                  <a href="#" class="lien-article">
                      Lire l'article
                  </a>
              </article>

              <article class="carte-article">
                  <h2 class="titre-carte">
                      Créer une interface web
                  </h2>

                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les actions disponibles.
                  </p>

                  <a href="#" class="lien-article">
                      Lire l'article
                  </a>
              </article>

          </section>

      </main>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à centraliser les couleurs et les espacements d'une interface avec des variables CSS.

## 2. Prérequis

Vous savez déjà :

- créer une classe CSS ;
- réutiliser une classe ;
- regrouper des sélecteurs ;
- comprendre la cascade CSS ;
- comprendre l'héritage ;
- utiliser `:hover` et `:focus`.

## Données de départ

### HTML

```html id="7rxhzg"
<main class="page">

    <h1 class="titre-page">Mon blog</h1>

    <section class="zone-actions">

        <a href="#" class="bouton-principal">
            Lire les articles
        </a>

        <a href="#" class="bouton-secondaire">
            Voir les catégories
        </a>

    </section>

    <section class="zone-articles">

        <article class="carte-article">
            <h2 class="titre-carte">
                Le métier de développeur
            </h2>

            <p>
                Le développeur crée des applications
                et construit des solutions web.
            </p>

            <a href="#" class="lien-article">
                Lire l'article
            </a>
        </article>

        <article class="carte-article">
            <h2 class="titre-carte">
                Créer une interface web
            </h2>

            <p>
                Une interface claire aide l'utilisateur
                à comprendre les actions disponibles.
            </p>

            <a href="#" class="lien-article">
                Lire l'article
            </a>
        </article>

    </section>

</main>
```

### CSS

Le fichier CSS est vide au départ.

```css id="g6ak3d"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Le problème des valeurs répétées

Une même couleur peut être utilisée plusieurs fois.

Par exemple :

```css
.bouton-principal {
    color: white;
    background: #2673e8;
}

.lien-article {
    color: #2673e8;
}
```

La couleur `#2673e8` est écrite plusieurs fois.

Si cette couleur doit changer, plusieurs règles doivent être modifiées.

### 1.2. Créer une variable CSS

Une variable CSS permet de donner un nom à une valeur.

On peut créer les variables dans `:root`.

**Exemple :**

```css
:root {
    --couleur-primaire: #2673e8;
}
```

La variable s'appelle :

```text id="v0p2fe"
--couleur-primaire
```

Sa valeur est :

```text id="x9duq6"
#2673e8
```

### 1.3. Utiliser une variable avec `var()`

Pour utiliser la variable, on écrit :

```css
.bouton-principal {
    background: var(--couleur-primaire);
}
```

`var()` récupère la valeur de la variable.

### 1.4. Centraliser plusieurs couleurs

On peut définir plusieurs valeurs dans `:root`.

```css id="31cn01"
:root {
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-bordure: #e5e7eb;
}
```

Les valeurs du thème sont maintenant regroupées au même endroit.

### 1.5. Utiliser une variable dans plusieurs règles

La même variable peut être utilisée plusieurs fois.

```css id="6r0i9e"
.bouton-principal {
    background: var(--couleur-primaire);
}

.lien-article {
    color: var(--couleur-primaire);
}
```

Les deux éléments utilisent la même valeur.

### 1.6. Centraliser les espacements

Les variables peuvent aussi contenir des espacements.

```css id="q2x8w8"
:root {
    --espace-petit: 8px;
    --espace-moyen: 16px;
    --espace-grand: 24px;
}
```

On peut ensuite écrire :

```css id="u9t0ag"
.carte-article {
    padding: var(--espace-grand);
}
```

La valeur `24px` n'est plus écrite directement dans la règle du composant.

### 1.7. Modifier une valeur à un seul endroit

Supposons :

```css id="1x9zq0"
:root {
    --espace-moyen: 16px;
}
```

Plusieurs éléments utilisent :

```css id="t8a8r3"
padding: var(--espace-moyen);
```

Si vous changez :

```css id="n2brhm"
--espace-moyen: 20px;
```

tous ces éléments utilisent automatiquement la nouvelle valeur.

### 1.8. À retenir

- Une variable CSS donne un nom à une valeur.
- Les variables du thème peuvent être regroupées dans `:root`.
- `var()` permet d'utiliser une variable.
- Une variable peut être utilisée dans plusieurs règles.
- Une modification dans `:root` peut modifier plusieurs composants.

## Partie 2 — Pratique

### 2.1. Créer les variables du thème

#### Étape 1 — Ajouter `:root`

Ajoutez au début de votre feuille CSS :

```css id="8yb8z6"
:root {
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-bordure: #e5e7eb;

    --espace-petit: 8px;
    --espace-moyen: 16px;
    --espace-grand: 24px;
}
```

Toutes les valeurs communes sont maintenant centralisées.

### 2.2. Utiliser les variables de couleur

#### Étape 1 — Préparer le bouton principal

Ajoutez :

```css id="w6wpbj"
.bouton-principal {
    display: inline-block;
    padding: var(--espace-petit) var(--espace-grand);
    color: white;
    background: var(--couleur-primaire);
    border-radius: 8px;
    text-decoration: none;
}
```

Le bouton utilise la variable de couleur primaire.

#### Étape 2 — Ajouter l'état `:hover`

Ajoutez :

```css id="7f7e4m"
.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}
```

La couleur du survol utilise également une variable.

### 2.3. Utiliser les variables pour les cartes

#### Étape 1 — Créer le style commun

Ajoutez :

```css id="a6p3ds"
.carte-article {
    padding: var(--espace-grand);
    color: var(--couleur-texte);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 12px;
}
```

Le composant utilise maintenant plusieurs variables.

### 2.4. Utiliser une variable pour le fond de page

#### Étape 1 — Styliser la page

Ajoutez :

```css id="rlfg9u"
.page {
    max-width: 900px;
    margin: 40px auto;
    padding: var(--espace-grand);
    background: var(--couleur-fond);
}
```

Le fond et l'espace intérieur utilisent des valeurs centralisées.

### 2.5. Utiliser une variable pour le lien

#### Étape 1 — Ajouter le style du lien

Ajoutez :

```css id="0nh9ai"
.lien-article {
    color: var(--couleur-primaire);
    text-decoration: none;
}
```

#### Étape 2 — Ajouter l'état `:hover`

Ajoutez :

```css id="8h8k4e"
.lien-article:hover {
    color: var(--couleur-primaire-hover);
}
```

Le lien et le bouton utilisent maintenant les mêmes valeurs du thème.

### 2.6. Utiliser les variables pour les titres

#### Étape 1 — Créer le style des titres

Ajoutez :

```css id="5wz9bs"
.titre-page {
    margin: 0 0 var(--espace-grand);
    color: var(--couleur-texte);
}

.titre-carte {
    margin: 0 0 var(--espace-moyen);
    color: var(--couleur-texte);
}
```

Les espacements sont maintenant centralisés.

### 2.7. Modifier le thème

#### Étape 1 — Modifier la couleur primaire

Dans `:root`, changez uniquement :

```css id="v7myy4"
--couleur-primaire: #2673e8;
```

par :

```css id="42c4qs"
--couleur-primaire: #1c5bba;
```

Observez la page.

Les éléments qui utilisent :

```css id="7pxm1o"
var(--couleur-primaire)
```

changent automatiquement.

### 2.8. Modifier un espacement

#### Étape 1 — Modifier une variable

Changez :

```css id="acmgl3"
--espace-grand: 24px;
```

par :

```css id="xq0e7q"
--espace-grand: 32px;
```

Observez les cartes et les autres éléments qui utilisent cette variable.

Plusieurs espacements changent avec une seule modification.

### 2.9. Identifier les valeurs centralisées

Observez votre CSS.

Les valeurs communes doivent être placées dans :

```css id="7mcj78"
:root
```

Les composants doivent utiliser :

```css id="1nt9v4"
var(--nom-de-la-variable)
```

Le principe devient :

```text id="t8d3c0"
valeur commune
      ↓
    :root
      ↓
   var(...)
      ↓
plusieurs composants
```

### 2.10. Vérifier le résultat

Vérifiez que :

- les couleurs communes sont définies dans `:root` ;
- les composants utilisent `var()` ;
- les espacements communs utilisent des variables ;
- une modification dans `:root` modifie plusieurs éléments ;
- les valeurs restent faciles à identifier.

Pour les couleurs du thème et les espacements communs, ne recopiez pas les mêmes valeurs directement dans les composants.

**Travail à faire :**

À partir du HTML fourni :

- créez les variables de couleur dans `:root` ;
- créez trois variables d'espacement ;
- utilisez `var()` dans les boutons ;
- utilisez `var()` dans les cartes ;
- utilisez `var()` dans les liens ;
- utilisez `var()` dans les titres ;
- modifiez une couleur dans `:root` ;
- modifiez un espacement dans `:root` ;
- vérifiez que plusieurs éléments changent automatiquement.

Votre CSS doit utiliser les variables pour les valeurs visuelles communes.

N'introduisez pas encore :

- les fichiers CSS modulaires ;
- `@import` ;
- une architecture CSS complexe ;
- des variables avancées ;
- des calculs avec les variables.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-246-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les valeurs visuelles communes sont centralisées dans `:root`.

Les composants utilisent `var()` au lieu de recopier les mêmes valeurs.

Une modification d'une variable dans `:root` modifie correctement plusieurs éléments de l'interface.

## Bilan

**Vous avez appris :**

- à créer une variable CSS ;
- à utiliser `:root` ;
- à utiliser `var()` ;
- à centraliser les couleurs ;
- à centraliser les espacements ;
- à modifier plusieurs composants depuis un seul endroit.

**Vous avez réalisé :**

Une interface dont les valeurs visuelles communes sont centralisées et réutilisées par plusieurs composants.

## Glossaire

- **Variable CSS** : nom associé à une valeur CSS.
- **`:root`** : élément racine utilisé ici pour définir les variables communes.
- **`var()`** : fonction utilisée pour récupérer la valeur d'une variable CSS.
- **Valeur visuelle** : valeur qui définit une partie de l'apparence, comme une couleur ou un espace.
- **Centraliser** : regrouper des valeurs dans un même endroit.