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
* une valeur ;
* une donnée saisie ;
* une donnée visible.

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

Une **donnée saisie** est une donnée dont la valeur est fournie par l'utilisateur.

**Exemple :**

Un utilisateur saisit :

```text
Madani
```

dans un champ « Nom ».

On peut représenter la situation ainsi :

```text
nom_auteur
    ↓
Madani
```

La donnée `nom_auteur` reçoit la valeur `Madani`.

### 1.3. Donnée affichée

Une **donnée affichée** est une donnée dont la valeur est présentée à l'utilisateur.

**Exemple :**

L'application affiche :

```text
Madani
```

On peut représenter :

```text
nom_auteur
    ↓
Madani
    ↓
affiché à l'écran
```

Une même donnée peut donc être :

```text
saisie
```

à un moment, puis :

```text
affichée
```

plus tard.

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

### 2.1. Comprendre le parcours d'une donnée

Lisez la situation suivante.

Madani utilise une application de Blog.

Il saisit son nom :

```text
Madani
```

L'application reçoit la valeur :

```text
nom_auteur → Madani
```

L'application enregistre ensuite cette valeur.

Plus tard, lorsqu'un article est affiché, l'application présente :

```text
Madani
```

Complétez le parcours :

```text
nom_auteur
    ↓
____________
    ↓
____________
    ↓
____________
```

### 2.2. Identifier le rôle d'une donnée

Pour chaque situation, indiquez le rôle de la donnée.

| Situation                                                    | Rôle |
| ------------------------------------------------------------ | ---- |
| L'utilisateur entre son nom dans un formulaire               |      |
| L'application affiche le nom de l'auteur                     |      |
| L'application enregistre le nom de l'auteur                  |      |
| L'application calcule une durée de lecture                   |      |
| Une valeur est utilisée uniquement pendant la saisie         |      |
| Une donnée reste disponible après fermeture de l'application |      |

Utilisez les termes :

```text
saisie
affichée
calculée
stockée
temporaire
persistante
```

### 2.3. Reconnaître les données calculées

Observez les situations suivantes.

**Situation A**

```text
contenu_article
      ↓
calcul
      ↓
duree_lecture
```

**Situation B**

```text
nom_auteur
      ↓
saisie par l'utilisateur
```

**Situation C**

```text
titre_article
      ↓
enregistré
      ↓
réutilisé plus tard
```

Pour chaque situation, indiquez si la donnée est :

* saisie ;
* calculée ;
* stockée ;
* persistante.

Une même donnée peut avoir plusieurs rôles.

### 2.4. Travail à faire

Complétez le tableau suivant.

| Donnée          | Situation                                    | Rôle |
| --------------- | -------------------------------------------- | ---- |
| `nom_auteur`    | L'utilisateur saisit son nom                 |      |
| `nom_auteur`    | L'application affiche son nom                |      |
| `titre_article` | L'article est enregistré                     |      |
| `titre_article` | Le titre est retrouvé plus tard              |      |
| `duree_lecture` | L'application calcule « 5 min »              |      |
| `texte_saisi`   | L'utilisateur ferme la page sans enregistrer |      |

### Livrable

Créez un document contenant vos réponses.

```text
t112112-role-donnees.md
```

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/' | relative_url }}"
    height="650"
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
