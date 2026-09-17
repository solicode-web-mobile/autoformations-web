---
title: "Comprendre ce que devient une donnée"
layout: tuto
slug: "comprendre-ce-que-devient-une-donnee"
permalink: /tutos/:slug/
tuto_id: "T.112.112"
type: "classique"
version: "normal"
ua: "UA.112.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---


## Objectif

Comprendre qu'une donnée peut avoir différents rôles dans une application.

Reconnaître une donnée :

* saisie ;
* affichée ;
* calculée ;
* stockée ;
* persistante ;
* temporaire.

Comprendre pourquoi certaines données sont conservées et pourquoi d'autres peuvent être utilisées seulement temporairement.

## Prérequis

Savoir distinguer :

* une information ;
* une donnée ;
* une valeur.

Voir **T.112.111 — Distinguer information, donnée et valeur**.

## Données de départ

Dans ce tutoriel, vous travaillez avec des **situations simples d'utilisation d'une application**.

Vous n'avez pas besoin d'observer une maquette.

L'objectif est de comprendre **le rôle d'une donnée dans l'application** avant d'apprendre à rechercher les données dans une maquette.

## Partie 1 — Théorie

### 1.1. Une donnée peut avoir plusieurs rôles

Une même donnée peut avoir plusieurs rôles au cours de son utilisation.

Par exemple :

```text
nom_auteur
    ↓
saisie par l'utilisateur
    ↓
stockée par l'application
    ↓
affichée plus tard
```

La donnée reste la même :

```text
nom_auteur
```

Son rôle dépend de ce que fait l'application avec elle.

### 1.2. Donnée saisie

Une **donnée saisie** est une donnée dont la valeur est fournie par l'utilisateur (par exemple, via un formulaire).

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/formulaire-donnee-saisie.html' | relative_url }}"
    height="400"
    title="Exemple — Formulaire et données saisies">
</iframe>

### 1.3. Donnée affichée (ou visible)

Une **donnée affichée** est une donnée dont la valeur est présentée à l'utilisateur sur l'interface.

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-visible.html' | relative_url }}"
    height="400"
    title="Exemple — Donnée visible">
</iframe>

### 1.4. Donnée calculée

Une **donnée calculée** est produite automatiquement par l'application à partir d'autres données.

L'utilisateur ne fournit pas directement cette valeur.

**Exemple :**

L'application connaît :

```text
contenu_article
```

Elle peut calculer une durée de lecture :

```text
contenu_article
      ↓
calcul
      ↓
duree_lecture
      ↓
5 min
```

Ici :

```text
duree_lecture
```

est une donnée calculée.

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-calculee.html' | relative_url }}"
    height="320"
    title="Exemple — Donnée calculée">
</iframe>

### 1.5. Donnée stockée

Une **donnée stockée** est une donnée enregistrée afin de pouvoir être retrouvée plus tard.

**Exemple :**

Madani saisit :

```text
titre_article
    ↓
Mon premier article
```

Lorsque l'article est enregistré, l'application conserve cette donnée.

Plus tard, l'application peut retrouver :

```text
titre_article
    ↓
Mon premier article
```

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-stockee.html' | relative_url }}"
    height="350"
    title="Exemple — Donnée stockée">
</iframe>

### 1.6. Donnée persistante

Une **donnée persistante** est une donnée conservée dans le temps.

Elle reste disponible après la fin de l'utilisation actuelle de l'application.

**Exemple :**

Un article enregistré dans une application doit pouvoir être retrouvé plus tard.

```text
titre_article
contenu_article
date_publication
```

Ces données peuvent être persistantes.

On peut représenter :

```text
saisie
   ↓
stockage
   ↓
fermeture de l'application
   ↓
réouverture
   ↓
donnée toujours disponible
```

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-persistante.html' | relative_url }}"
    height="300"
    title="Exemple — Donnée persistante">
</iframe>

### 1.7. Donnée temporaire

Une **donnée temporaire** est utilisée pendant une période limitée et n'a pas nécessairement besoin d'être conservée.

**Exemple :**

Un utilisateur commence à écrire :

```text
Mon nouvel article...
```

mais ferme la page sans enregistrer.

La valeur saisie peut être perdue.

On peut représenter :

```text
saisie
   ↓
utilisation temporaire
   ↓
fermeture sans enregistrement
   ↓
donnée perdue
```

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-temporaire.html' | relative_url }}"
    height="280"
    title="Exemple — Donnée temporaire">
</iframe>

### 1.8. Stockage et base de données

Le **stockage** permet de conserver des données afin de pouvoir les retrouver plus tard.

Une **base de données** est un système utilisé par l'application pour organiser et conserver les données.

Exemple :

```text
Article
-------
titre
contenu
date_publication
```

L'application peut conserver ces données dans une base de données.

À ce niveau, il faut surtout comprendre l'idée suivante :

> Une donnée qui doit être retrouvée plus tard doit être conservée quelque part.

### 1.9. Une donnée peut avoir plusieurs rôles

Une même donnée peut passer par plusieurs rôles.

**Exemple :**

```text
nom_auteur
    ↓
saisie
    ↓
stockée
    ↓
réutilisée
    ↓
affichée
```

Une autre donnée peut être calculée :

```text
contenu_article
    ↓
calcul
    ↓
duree_lecture
    ↓
affichée
```

Il ne faut donc pas penser qu'une donnée possède un seul rôle.

### 1.10. À retenir

Retenez les points suivants :

* Une donnée peut être **saisie** par l'utilisateur.
* Une donnée peut être **affichée** par l'application.
* Une donnée peut être **calculée** automatiquement.
* Une donnée peut être **stockée** pour être réutilisée.
* Une donnée **persistante** reste disponible dans le temps.
* Une donnée **temporaire** peut être utilisée sans être conservée durablement.
* Une même donnée peut avoir plusieurs rôles.

Exemple :

```text
nom_auteur
    ↓
saisie
    ↓
stockée
    ↓
affichée
```

## Partie 2 — Pratique

### 2.1. Travail à faire

Pour chaque situation décrite dans le tableau ci-dessous, vous devez indiquer le **rôle** ou l'état de la donnée.

Choisissez parmi les rôles suivants : `saisie`, `affichée`, `calculée`, `stockée`, `persistante`, `temporaire`.

*(Note : Une même donnée peut avoir plusieurs rôles en même temps, mais concentrez-vous sur l'action décrite).*

**Recopiez et complétez le tableau suivant :**

| Donnée          | Situation dans l'application                 | Rôle(s) de la donnée |
| --------------- | -------------------------------------------- | -------------------- |
| `nom_auteur`    | L'utilisateur tape son nom dans le champ     |                      |
| `nom_auteur`    | Le nom apparaît en haut de l'article publié  |                      |
| `titre_article` | L'article est enregistré dans la base        |                      |
| `titre_article` | L'application retrouve le titre 2 mois plus tard |                  |
| `duree_lecture` | L'application compte les mots et déduit « 5 min » |                 |
| `texte_brouillon`| L'utilisateur ferme la page sans sauvegarder |                  |

### 2.2. Livrable

Créez un document Markdown (ou un Google Doc) contenant votre tableau complété.

```text
t112112-role-donnees.md
```

### Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.112/' | relative_url }}"
    height="400"
    title="Résultat attendu — Rôle d'une donnée">
</iframe>

### Critère de réussite

Vous avez correctement :

* reconnu une donnée saisie ;
* reconnu une donnée affichée ;
* reconnu une donnée calculée ;
* reconnu une donnée stockée ;
* distingué une donnée persistante d'une donnée temporaire ;
* compris qu'une même donnée peut avoir plusieurs rôles.

## Bilan

**Vous avez appris à :**

* reconnaître les principaux rôles d'une donnée ;
* comprendre qu'une donnée peut être saisie puis affichée ;
* comprendre qu'une donnée peut être calculée ;
* comprendre qu'une donnée peut être stockée ;
* distinguer une donnée persistante d'une donnée temporaire.

**Vous savez maintenant représenter un parcours simple :**

```text
Saisie
   ↓
Stockage
   ↓
Réutilisation
   ↓
Affichage
```

ou :

```text
Données existantes
   ↓
Calcul
   ↓
Nouvelle valeur
   ↓
Affichage
```

La prochaine étape consiste à apprendre à **observer une maquette pour identifier et décrire les données qu'elle contient**.

## Glossaire

* **Donnée saisie** : donnée dont la valeur est fournie par l'utilisateur.
* **Donnée affichée** : donnée dont la valeur est présentée à l'utilisateur.
* **Donnée calculée** : donnée produite automatiquement à partir d'autres données.
* **Donnée stockée** : donnée enregistrée pour pouvoir être retrouvée plus tard.
* **Donnée persistante** : donnée conservée dans le temps.
* **Donnée temporaire** : donnée utilisée momentanément et qui peut être perdue sans enregistrement.
* **Stockage** : mécanisme permettant de conserver des données.
* **Base de données** : système utilisé pour organiser et conserver les données d'une application.
