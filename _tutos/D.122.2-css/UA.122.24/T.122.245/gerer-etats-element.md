---
title: "Gérer les états d'un élément"
layout: tuto
slug: "gerer-etats-element"
permalink: /tutos/gerer-etats-element/
tuto_id: "T.122.245"
type: "classique"
version: "normal"
ua: "UA.122.24"
nav_order: 5

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>États des éléments</title>
  </head>
  <body>

      <main class="page">

          <h1>Mon blog</h1>

          <section class="actions">

              <a href="#" class="bouton-principal">
                  Lire les articles
              </a>

              <a href="#" class="bouton-secondaire">
                  Voir les catégories
              </a>

          </section>

          <section class="zone-articles">

              <article class="carte-article">

                  <h2>Le métier de développeur</h2>

                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
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

Apprendre à changer le style d’un élément lorsqu’il se trouve dans un état particulier avec `:hover` et `:focus`.

## 2. Prérequis

Vous savez déjà :

- créer une classe CSS ;
- réutiliser une classe ;
- regrouper des sélecteurs ;
- comprendre la cascade CSS ;
- comprendre l’héritage ;
- styliser des liens et des boutons avec CSS.

## Données de départ

### HTML

```html
<main class="page">

    <h1>Mon blog</h1>

    <section class="actions">

        <a href="#" class="bouton-principal">
            Lire les articles
        </a>

        <a href="#" class="bouton-secondaire">
            Voir les catégories
        </a>

    </section>

    <section class="zone-articles">

        <article class="carte-article">

            <h2>Le métier de développeur</h2>

            <p>
                Le développeur crée des applications
                et construit des solutions web.
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

```css

```

### JavaScript

Aucun JavaScript n’est nécessaire.

## Partie 1 — Théorie

### 1.1. Comprendre l’état d’un élément

Un élément peut changer de situation pendant l’utilisation de la page.

Par exemple, un lien peut être :

- au repos ;
- survolé par la souris ;
- sélectionné au clavier.

CSS permet de modifier son style selon cet état.

### 1.2. Utiliser `:hover`

`:hover` s'applique lorsqu'un utilisateur place le pointeur de la souris sur un élément.

**Exemple :**

```css
.bouton-principal:hover {
    background: #1c5bba;
}
```

Lorsque la souris passe sur le bouton, son arrière-plan change.

### 1.3. Utiliser `:focus`

`:focus` s'applique lorsqu'un élément reçoit le focus.

Un lien peut recevoir le focus lorsqu'il est sélectionné au clavier.

**Exemple :**

```css
.bouton-principal:focus {
    outline: 2px solid #111827;
}
```

Le navigateur montre alors clairement l'élément sélectionné.

### 1.4. Différence entre `:hover` et `:focus`

`:hover` concerne principalement le passage du pointeur.

`:focus` concerne l'élément actuellement sélectionné.

Exemple :

```css
.bouton-principal:hover {
    background: #1c5bba;
}

.bouton-principal:focus {
    outline: 2px solid #111827;
}
```

Les deux états peuvent avoir des styles différents.

### 1.5. Un état ne change pas le HTML

On n'a pas besoin de modifier le HTML pour créer un état.

Le HTML reste :

```html
<a href="#" class="bouton-principal">
    Lire les articles
</a>
```

Le changement est réalisé par CSS :

```css
.bouton-principal:hover {
    background: #1c5bba;
}
```

### 1.6. Utiliser un état sur plusieurs éléments

Une classe réutilisable peut avoir un état commun.

Exemple :

```css
.lien-article:hover {
    color: #1c5bba;
}
```

Tous les liens qui utilisent `.lien-article` ont alors le même comportement au survol.

### 1.7. À retenir

- Un état décrit la situation actuelle d'un élément.
- `:hover` permet de modifier le style au survol.
- `:focus` permet de modifier le style lorsque l'élément reçoit le focus.
- Les pseudo-classes `:hover` et `:focus` s'ajoutent au sélecteur.
- Un état peut être défini sur une classe réutilisable.

## Partie 2 — Pratique

### 2.1. Créer les boutons

#### Étape 1 — Donner un style commun

Ajoutez :

```css
.bouton-principal,
.bouton-secondaire {
    display: inline-block;
    padding: 10px 18px;
    border-radius: 8px;
    text-decoration: none;
}
```

Les deux liens utilisent maintenant les mêmes propriétés communes.

#### Étape 2 — Donner une présentation différente

Ajoutez :

```css
.bouton-principal {
    color: white;
    background: #2673e8;
}

.bouton-secondaire {
    color: #1f2937;
    background: white;
    border: 1px solid #e5e7eb;
}
```

Les deux boutons ont maintenant des styles différents.

### 2.2. Ajouter un état `:hover`

#### Étape 1 — Modifier le bouton principal au survol

Ajoutez :

```css
.bouton-principal:hover {
    background: #1c5bba;
}
```

Placez la souris sur le bouton.

La couleur de fond change.

#### Étape 2 — Modifier le bouton secondaire au survol

Ajoutez :

```css
.bouton-secondaire:hover {
    color: #2673e8;
    border-color: #2673e8;
}
```

Placez la souris sur le deuxième bouton.

Le texte et la bordure changent.

### 2.3. Ajouter un état `:focus`

#### Étape 1 — Donner un repère visuel

Ajoutez :

```css
.bouton-principal:focus,
.bouton-secondaire:focus {
    outline: 2px solid #111827;
    outline-offset: 2px;
}
```

Les deux boutons possèdent maintenant un style lorsqu'ils reçoivent le focus.

#### Étape 2 — Tester avec le clavier

Cliquez sur la page.

Appuyez sur la touche `Tab`.

Observez le bouton sélectionné.

Continuez à appuyer sur `Tab`.

Le focus se déplace entre les éléments interactifs.

### 2.4. Gérer l’état d’un lien d’article

#### Étape 1 — Créer l’état `:hover`

Ajoutez :

```css
.lien-article {
    color: #2673e8;
    text-decoration: none;
}

.lien-article:hover {
    color: #1c5bba;
}
```

Le lien change de couleur lorsque la souris passe dessus.

#### Étape 2 — Ajouter `:focus`

Ajoutez :

```css
.lien-article:focus {
    outline: 2px solid #111827;
    outline-offset: 2px;
}
```

Le lien possède maintenant aussi un repère lorsqu'il reçoit le focus.

### 2.5. Comparer un style normal et un style d’état

Une règle normale :

```css
.bouton-principal {
    background: #2673e8;
}
```

Une règle d'état :

```css
.bouton-principal:hover {
    background: #1c5bba;
}
```

La première règle définit l'apparence habituelle.

La deuxième règle définit l'apparence pendant le survol.

### 2.6. Observer la cascade avec un état

#### Étape 1 — Ajouter une règle générale

Ajoutez :

```css
a {
    color: #1f2937;
}
```

#### Étape 2 — Conserver la classe

Conservez :

```css
.bouton-principal {
    color: white;
}
```

Le bouton conserve sa couleur blanche.

La règle de classe est plus spécifique que la règle de balise.

### 2.7. Créer un comportement cohérent

Pour le Blog, les éléments interactifs doivent donner un retour visuel.

Vous pouvez utiliser :

```css
.bouton-principal:hover {
    background: #1c5bba;
}

.bouton-principal:focus {
    outline: 2px solid #111827;
    outline-offset: 2px;
}
```

L'utilisateur voit ainsi un changement lorsqu'il interagit avec l'élément.

### 2.8. Vérifier les différents états

Testez les situations suivantes :

```text
État normal
↓
passage de la souris
↓
:focus
```

Vérifiez que le style change au bon moment.

Vérifiez également que le HTML n'est pas modifié pour créer ces états.

**Travail à faire :**

À partir du HTML fourni :

- créez un style commun pour les deux boutons ;
- créez un état `:hover` pour chaque bouton ;
- créez un état `:focus` pour les deux boutons ;
- créez un état `:hover` pour le lien de l'article ;
- créez un état `:focus` pour ce lien ;
- testez les états avec la souris ;
- testez les états avec la touche `Tab`.

Le résultat doit fournir un retour visuel clair lors de l'interaction.

N'introduisez pas encore :

- les variables CSS ;
- `:root` ;
- `var()` ;
- les sélecteurs avancés ;
- les animations CSS ;
- les transitions.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-245-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Les boutons changent de présentation au survol.

Les boutons et le lien d'article possèdent un repère visuel lorsqu'ils reçoivent le focus.

L'apprenant sait distinguer le style normal du style lié à `:hover` et `:focus`.

## Bilan

**Vous avez appris :**

- le principe d'un état CSS ;
- `:hover` ;
- `:focus` ;
- la différence entre le survol et le focus ;
- la création d'un retour visuel avec des pseudo-classes.

**Vous avez réalisé :**

Des boutons et un lien d'article qui changent de présentation selon l'interaction de l'utilisateur.

## Glossaire

- **État** : situation particulière d’un élément pendant son utilisation.
- **`:hover`** : pseudo-classe appliquée lorsque le pointeur passe sur un élément.
- **`:focus`** : pseudo-classe appliquée lorsqu'un élément reçoit le focus.
- **Pseudo-classe** : mot-clé CSS qui représente un état particulier d’un élément.
- **Focus** : élément actuellement sélectionné pour recevoir une interaction.