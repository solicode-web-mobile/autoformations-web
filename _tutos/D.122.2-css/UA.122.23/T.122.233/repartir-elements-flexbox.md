---
title: "Répartir les éléments"
layout: tuto
slug: "repartir-elements-flexbox"
permalink: /tutos/repartir-elements-flexbox/
tuto_id: "T.122.233"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 3
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Répartition des cartes</title>
  </head>
  <body>

      <section class="liste-cartes">

          <article class="carte-article">
              <h2>HTML</h2>
              <p>Créer la structure d'une page web.</p>
          </article>

          <article class="carte-article">
              <h2>CSS</h2>
              <p>Mettre en forme une page web.</p>
          </article>

          <article class="carte-article">
              <h2>JavaScript</h2>
              <p>Ajouter des comportements à une page.</p>
          </article>

      </section>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Apprendre à répartir les éléments sur l’axe principal d’un conteneur Flexbox avec `justify-content`.

## 2. Prérequis

Vous savez déjà :

- créer un conteneur Flexbox avec `display: flex` ;
- choisir une direction avec `flex-direction` ;
- utiliser `row` et `column` ;
- identifier les éléments flex.

## Données de départ

### HTML

```html
<section class="liste-cartes">

    <article class="carte-article">
        <h2>HTML</h2>
        <p>Créer la structure d'une page web.</p>
    </article>

    <article class="carte-article">
        <h2>CSS</h2>
        <p>Mettre en forme une page web.</p>
    </article>

    <article class="carte-article">
        <h2>JavaScript</h2>
        <p>Ajouter des comportements à une page.</p>
    </article>

</section>
```

### CSS

Le fichier CSS est vide au départ.

```css
```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Contrôler la répartition avec `justify-content`

`justify-content` contrôle la position des éléments sur l’axe principal du conteneur Flexbox.

**Exemple :**

```css
.liste-cartes {
    display: flex;
    justify-content: center;
}
```

Les éléments sont placés au centre de l’axe principal.

### 1.2. Utiliser `flex-start`

`flex-start` place les éléments au début de l’axe principal.

```css
.liste-cartes {
    display: flex;
    justify-content: flex-start;
}
```

Avec `flex-direction: row`, les éléments commencent à gauche.

### 1.3. Utiliser `center`

`center` place les éléments au centre de l’axe principal.

```css
.liste-cartes {
    display: flex;
    justify-content: center;
}
```

Avec `flex-direction: row`, les cartes sont regroupées au centre.

### 1.4. Utiliser `space-between`

`space-between` place le premier élément au début et le dernier à la fin.

L’espace disponible est réparti entre les éléments.

```css
.liste-cartes {
    display: flex;
    justify-content: space-between;
}
```

Avec trois cartes :

```text
Carte 1          Carte 2          Carte 3
```

L’espace entre les cartes est réparti automatiquement.

### 1.5. Le rôle de l’axe principal

Avec :

```css
flex-direction: row;
```

l’axe principal est horizontal.

Avec :

```css
flex-direction: column;
```

l’axe principal est vertical.

`justify-content` agit toujours sur cet axe.

### 1.6. À retenir

- `justify-content` contrôle la répartition sur l’axe principal.
- `flex-start` place les éléments au début.
- `center` place les éléments au centre.
- `space-between` répartit l’espace entre les éléments.
- Le résultat dépend de `flex-direction`.

## Partie 2 — Pratique

### 2.1. Préparer les cartes

#### Étape 1 — Donner une taille aux cartes

Ajoutez :

```css
.carte-article {
    width: 180px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les trois cartes ont maintenant une taille visible.

#### Étape 2 — Préparer le conteneur

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    width: 800px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Le conteneur utilise Flexbox avec une direction horizontale.

### 2.2. Placer les cartes au début

#### Étape 1 — Ajouter `flex-start`

Ajoutez :

```css
.liste-cartes {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 800px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
    background: #f9fafb;
}
```

Les cartes se placent au début du conteneur.

### 2.3. Centrer les cartes

#### Étape 1 — Remplacer la valeur

Remplacez :

```css
justify-content: flex-start;
```

par :

```css
justify-content: center;
```

Les trois cartes sont maintenant regroupées au centre.

### 2.4. Répartir l’espace disponible

#### Étape 1 — Utiliser `space-between`

Remplacez :

```css
justify-content: center;
```

par :

```css
justify-content: space-between;
```

Le premier élément reste au début.

Le dernier élément reste à la fin.

L’espace disponible est réparti entre les cartes.

### 2.5. Comparer les trois valeurs

Testez successivement :

```css
justify-content: flex-start;
```

puis :

```css
justify-content: center;
```

puis :

```css
justify-content: space-between;
```

Observez la position des cartes dans le conteneur.

### 2.6. Tester avec une direction verticale

#### Étape 1 — Changer la direction

Remplacez :

```css
flex-direction: row;
```

par :

```css
flex-direction: column;
```

Gardez :

```css
justify-content: center;
```

Observez le résultat.

`justify-content` agit maintenant sur l’axe vertical.

#### Étape 2 — Revenir à la direction horizontale

Remplacez :

```css
flex-direction: column;
```

par :

```css
flex-direction: row;
```

Le résultat revient à une organisation horizontale.

**Travail à faire :**

À partir du HTML fourni :

- créez trois cartes ;
- utilisez `display: flex` sur leur conteneur ;
- utilisez `flex-direction: row` ;
- testez `justify-content: flex-start` ;
- testez `justify-content: center` ;
- testez `justify-content: space-between` ;
- choisissez `space-between` pour le résultat final.

N’utilisez pas encore :

- `align-items` ;
- `flex-wrap` ;
- `gap` ;
- `flex` ;
- `flex-grow`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-233-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Le conteneur utilise `display: flex` et `flex-direction: row`.

L’apprenant sait modifier la répartition avec :

```text
flex-start
center
space-between
```

Le résultat final utilise `space-between` et répartit correctement les trois cartes sur l’axe horizontal.

## Bilan

**Vous avez appris :**

- le rôle de `justify-content` ;
- `flex-start` ;
- `center` ;
- `space-between` ;
- le lien entre `justify-content` et l’axe principal.

**Vous avez réalisé :**

Une ligne de cartes dont la répartition peut être contrôlée avec Flexbox.

## Glossaire

- **`justify-content`** : propriété qui contrôle la répartition des éléments sur l’axe principal.
- **`flex-start`** : place les éléments au début de l’axe principal.
- **`center`** : place les éléments au centre de l’axe principal.
- **`space-between`** : répartit l’espace entre les éléments.
- **Axe principal** : axe utilisé par Flexbox pour organiser les éléments selon `flex-direction`.