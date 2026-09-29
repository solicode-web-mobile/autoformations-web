---
title: "Comprendre l'espace disponible"
layout: tuto
slug: "comprendre-espace-disponible"
permalink: /tutos/comprendre-espace-disponible/
tuto_id: "T.122.251"
type: "classique"
version: "normal"
ua: "UA.122.25"
nav_order: 1

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog</title>
  </head>
  <body>

      <main class="page">

          <h1>Derniers articles</h1>

          <section class="liste-articles">

              <article class="carte-article">
                  <h2>Le métier de développeur</h2>
                  <p>
                      Le développeur crée des applications
                      et construit des solutions web.
                  </p>
              </article>

              <article class="carte-article">
                  <h2>Créer une interface web</h2>
                  <p>
                      Une interface claire aide l'utilisateur
                      à comprendre les informations.
                  </p>
              </article>

          </section>

      </main>

  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

Comprendre que l’espace disponible change selon la largeur de la fenêtre et qu’une interface doit pouvoir s’adapter à cet espace.

## 2. Prérequis

Vous savez déjà :

- utiliser une classe CSS ;
- utiliser `width` ;
- utiliser `max-width` ;
- utiliser `margin` ;
- utiliser `padding` ;
- utiliser Flexbox ;
- organiser plusieurs cartes ;
- utiliser `flex-wrap`.

## Données de départ

### HTML

```html id="z9u0yk"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog</title>
</head>
<body>

    <main class="page">

        <h1>Derniers articles</h1>

        <section class="liste-articles">

            <article class="carte-article">
                <h2>Le métier de développeur</h2>
                <p>
                    Le développeur crée des applications
                    et construit des solutions web.
                </p>
            </article>

            <article class="carte-article">
                <h2>Créer une interface web</h2>
                <p>
                    Une interface claire aide l'utilisateur
                    à comprendre les informations.
                </p>
            </article>

        </section>

    </main>

</body>
</html>
```

### CSS

Le fichier CSS est vide au départ.

```css id="g5f2k1"
```

### JavaScript

Aucun JavaScript n'est nécessaire.

## Partie 1 — Théorie

### 1.1. Comprendre l’espace disponible

Une page web est affichée dans une zone visible.

Cette zone dépend de la taille de la fenêtre du navigateur.

Sur un grand écran, l’espace horizontal est important.

Sur un petit écran, l’espace horizontal est plus petit.

La largeur disponible n’est donc pas toujours la même.

### 1.2. Comprendre le viewport

Le **viewport** est la zone visible de la page dans la fenêtre du navigateur.

Sa largeur peut changer lorsque la fenêtre change de taille.

Par exemple :

```text id="5mwp7i"
grand écran
|------------------------------|

petit écran
|---------------|
```

Le contenu doit pouvoir fonctionner dans ces deux situations.

### 1.3. Déclarer le viewport sur mobile

Dans une page HTML, on utilise :

```html id="nv6u0y"
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Cette balise indique au navigateur mobile d'utiliser la largeur réelle de l'appareil pour afficher la page.

Elle est importante pour une interface responsive.

### 1.4. Une largeur fixe peut poser problème

Supposons :

```css id="q5y3qq"
.page {
    width: 900px;
}
```

La page demande toujours `900px`.

Sur un petit écran, cette largeur peut être supérieure à l’espace disponible.

Une partie de la page peut alors sortir de la zone visible.

### 1.5. Utiliser une largeur maximale

On peut utiliser une largeur maximale :

```css id="j1s1js"
.page {
    width: 900px;
    max-width: 100%;
}
```

La page peut utiliser jusqu'à `900px`.

Elle ne doit pas dépasser la largeur disponible.

`max-width` a déjà été étudié en S2.

Dans cette UA, nous le réutilisons pour observer l’adaptation de l’interface.

### 1.6. Une interface fluide

Une interface est dite **fluide** lorsqu’elle peut utiliser l’espace disponible sans dépasser la zone d’affichage.

L’objectif n’est pas encore de modifier la présentation avec des Media Queries.

L’objectif est d’abord de comprendre que :

> **l’espace disponible peut changer.**

### 1.7. Observer la largeur disponible

Une même page peut être affichée :

```text id="l0veee"
sur un écran large
sur un écran moyen
sur un écran étroit
```

Le contenu doit rester accessible.

La largeur de la fenêtre devient donc une donnée importante pour le responsive.

### 1.8. À retenir

- Le viewport est la zone visible de la page.
- Sa largeur peut changer.
- Une largeur fixe trop grande peut dépasser l’espace disponible.
- `max-width: 100%` peut limiter la largeur à l’espace disponible.
- Une interface fluide tient compte de l’espace disponible.
- Les Media Queries seront étudiées plus tard.

## Partie 2 — Pratique

### 2.1. Préparer la page

#### Étape 1 — Donner une taille aux cartes

Ajoutez :

```css id="yuk3p3"
.carte-article {
    width: 320px;
    padding: 20px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
```

Les cartes possèdent maintenant une largeur définie.

#### Étape 2 — Préparer la zone

Ajoutez :

```css id="4j6g2g"
.liste-articles {
    display: flex;
    gap: 24px;
}

.page {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
}
```

Les cartes sont placées dans un conteneur Flexbox.

### 2.2. Observer l’espace disponible

#### Étape 1 — Réduire la fenêtre

Ouvrez la page dans le navigateur.

Réduisez progressivement la largeur de la fenêtre.

Observez les cartes.

La largeur disponible diminue.

### 2.3. Observer une largeur fixe

#### Étape 1 — Donner une largeur fixe à la page

Modifiez `.page` :

```css id="y8z9hk"
.page {
    width: 900px;
    margin: 40px auto;
    padding: 20px;
}
```

Réduisez fortement la largeur de la fenêtre.

Observez le résultat.

La page peut devenir plus large que l’espace disponible.

### 2.4. Limiter la largeur de la page

#### Étape 1 — Ajouter `max-width`

Remplacez la règle précédente par :

```css id="8l79ne"
.page {
    width: 900px;
    max-width: 100%;
    margin: 40px auto;
    padding: 20px;
}
```

Réduisez de nouveau la largeur de la fenêtre.

Observez la différence.

La largeur de `.page` est maintenant limitée par l’espace disponible.

### 2.5. Comprendre la différence

Avec :

```css id="43c2up"
width: 900px;
```

la page demande `900px`.

Avec :

```css id="h1q8tx"
max-width: 100%;
```

la page ne peut pas dépasser la largeur disponible.

Le navigateur peut donc réduire la largeur de l’élément.

### 2.6. Observer le viewport

#### Étape 1 — Tester plusieurs tailles

Testez la page avec :

```text id="41gq2c"
large fenêtre
fenêtre moyenne
petite fenêtre
```

Utilisez aussi le mode appareil des outils de développement du navigateur.

Observez la largeur de la zone visible.

### 2.7. Observer les cartes

#### Étape 1 — Réduire la fenêtre

Réduisez la largeur jusqu'à ce que les deux cartes ne tiennent plus correctement sur une ligne.

Le conteneur utilise déjà :

```css id="2xxpi7"
display: flex;
```

et :

```css id="f3s1c0"
gap: 24px;
```

Dans cette étape, nous observons uniquement la relation entre les cartes et l’espace disponible.

La modification de leur disposition selon la largeur sera étudiée dans les tutoriels suivants.

### 2.8. Tester la largeur de la zone principale

#### Étape 1 — Modifier `max-width`

Testez :

```css id="4u3y0e"
max-width: 700px;
```

Puis :

```css id="k15j1g"
max-width: 900px;
```

Observez la largeur de la zone.

La largeur disponible influence directement la place occupée par le contenu.

### 2.9. Identifier le problème

Observez la situation suivante :

```text id="60ll88"
Fenêtre large
        ↓
beaucoup d'espace disponible

Fenêtre étroite
        ↓
peu d'espace disponible
```

Posez-vous la question :

> « Mon interface peut-elle utiliser l’espace disponible sans dépasser la fenêtre ? »

Cette question sera utilisée dans toute la suite de l’UA.122.25.

### 2.10. Vérifier le viewport

#### Étape 1 — Repérer la balise

Dans le `<head>`, vérifiez la présence de :

```html id="9h6k00"
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Cette balise doit être présente dans la page.

### 2.11. Préparer la suite du responsive

Pour le moment, vous avez observé :

```text id="me8dm4"
largeur de la fenêtre
        ↓
espace disponible
        ↓
taille possible du contenu
```

Dans le prochain tutoriel, vous apprendrez à utiliser des dimensions relatives pour mieux utiliser cet espace.

**Travail à faire :**

À partir du HTML fourni :

- créez une zone principale pour les articles ;
- donnez une largeur initiale à la zone ;
- observez le résultat sur une grande fenêtre ;
- réduisez la largeur de la fenêtre ;
- observez ce qui se passe lorsque l’espace devient insuffisant ;
- utilisez `max-width: 100%` pour empêcher la zone principale de dépasser l’espace disponible ;
- vérifiez la présence de la balise `meta viewport` ;
- testez la page avec plusieurs largeurs de fenêtre.

Vous devez être capable d’expliquer la différence entre :

```text id="e5eq4s"
largeur de la fenêtre
```

et :

```text id="1h2n84"
largeur du contenu
```

N'utilisez pas encore :

- `%` pour créer des dimensions relatives de composants ;
- `rem` ;
- `vw` ;
- `@media` ;
- `min-width` et `max-width` dans une Media Query ;
- les breakpoints ;
- l'approche mobile-first.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses et votre code CSS.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-251-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

L’apprenant sait expliquer ce qu’est le viewport.

Il sait expliquer que la largeur disponible change selon la taille de la fenêtre.

Il sait identifier le problème d’une largeur trop grande.

Il sait utiliser `max-width: 100%` pour empêcher une zone de dépasser l’espace disponible.

La page contient également une balise `meta viewport` correcte.

## Bilan

**Vous avez appris :**

- le principe du viewport ;
- la notion de largeur disponible ;
- l’effet d’une largeur fixe trop grande ;
- le rôle de `max-width: 100%` ;
- le principe d’une interface fluide.

**Vous avez réalisé :**

Une page capable de limiter sa zone principale à l’espace disponible.

## Glossaire

- **Viewport** : zone visible d’une page dans la fenêtre du navigateur.
- **Largeur disponible** : largeur que le navigateur peut utiliser pour afficher le contenu.
- **Interface fluide** : interface qui peut utiliser l’espace disponible sans dépasser la zone d’affichage.
- **`max-width`** : propriété qui définit une largeur maximale.
- **`100%`** : valeur qui représente ici la totalité de la largeur disponible de l’élément parent.
- **`meta viewport`** : balise HTML qui indique au navigateur mobile comment utiliser la largeur de l’appareil pour afficher la page.