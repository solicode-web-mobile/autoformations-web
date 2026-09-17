---
title: "Identifier les données à conserver"
layout: tuto
slug: "identifier-donnees-a-conserver"
permalink: /tutos/:slug/
tuto_id: "T.112.112"
type: "classique"
version: "normal"
ua: "UA.112.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## Objectif

Comprendre quelles données une application doit conserver pour fonctionner.

Reconnaître une donnée :

* calculée ;
* stockée (persistante) ;
* temporaire.

Comprendre pourquoi il faut ignorer les éléments d'interface (données temporaires) et les calculs lors de la conception d'une base de données.

## Prérequis

Savoir distinguer :

* une information ;
* une donnée ;
* une valeur.

Voir **T.112.111 — Distinguer information, donnée et valeur**.

## Données de départ

Dans ce tutoriel, vous travaillez avec des **situations simples d'utilisation d'une application**.

Vous n'avez pas besoin d'observer une maquette.

L'objectif est de comprendre **quelles données sont utiles à conserver** avant d'apprendre à rechercher les données dans une maquette.

## Partie 1 — Théorie

### 1.1. Toutes les données ne se valent pas

Dans une application, l'utilisateur voit beaucoup d'informations : des formulaires, des résultats de recherche, des statistiques, des listes d'articles, etc.

Mais **toutes ces données ne sont pas enregistrées dans la base de données**.

Pour préparer la conception d'une base de données, il est indispensable de savoir filtrer :
- ce qui doit être conservé ;
- ce qui peut être calculé ;
- ce qui est purement temporaire.

### 1.2. Donnée calculée

Une **donnée calculée** est produite automatiquement par l'application à partir d'autres données.

La règle d'or en conception de base de données est qu'il est **inutile de stocker une donnée calculable**, puisqu'on peut la déduire à tout moment.

**Exemple :**

L'application connaît le `contenu_article`. Elle peut calculer automatiquement une durée de lecture en comptant les mots :

```text
contenu_article
      ↓
calcul
      ↓
duree_lecture (5 min)
```

Ici, `duree_lecture` est une donnée calculée. On ne la stockera pas dans la base de données.

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-calculee.html' | relative_url }}"
    height="320"
    title="Exemple — Donnée calculée">
</iframe>

### 1.3. Donnée stockée (Persistante)

Une **donnée stockée** (ou persistante) est une donnée qui doit être conservée dans le temps, même après la fermeture de l'application.

C'est uniquement ce type de donnée que l'on conservera pour construire la base de données.

**Exemple :**

Madani saisit le titre de son article :

```text
titre_article
    ↓
Mon premier article
```

L'application doit conserver cette donnée pour pouvoir afficher l'article demain, ou dans un mois.

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-persistante.html' | relative_url }}"
    height="300"
    title="Exemple — Donnée persistante">
</iframe>

### 1.4. Donnée temporaire

Une **donnée temporaire** est utilisée pendant une courte période (souvent liée à l'interface) et n'a pas besoin d'être conservée dans la base de données.

**Exemples classiques :**
- Le texte tapé dans une barre de recherche.
- Un message d'erreur affiché à l'écran ("Mot de passe incorrect").
- Un filtre appliqué sur une liste (ex: "Afficher uniquement les articles récents").

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.112/donnee-temporaire.html' | relative_url }}"
    height="280"
    title="Exemple — Donnée temporaire">
</iframe>

### 1.5. Le filtre de conception

Lorsque vous analysez une application, vous devez appliquer ce filtre mental :

> **Cette donnée doit-elle être retrouvée demain par l'application ?**
> - **Oui** ➔ Donnée stockée (On la garde pour la base de données).
> - **Non, c'est juste une interaction de l'interface** ➔ Donnée temporaire (On l'ignore).
> - **Non, on peut la deviner grâce à un calcul** ➔ Donnée calculée (On la note comme règle de calcul, on ne la stocke pas).

### 1.6. À retenir

Retenez les points suivants pour la conception de données :

* **Donnée stockée (persistante)** : donnée indispensable à conserver dans le temps (ex: titre d'un article). **À modéliser.**
* **Donnée calculée** : donnée déduite d'autres informations (ex: durée de lecture). **À ne pas stocker.**
* **Donnée temporaire** : donnée d'interface éphémère (ex: barre de recherche). **À ignorer.**

## Partie 2 — Pratique

### 2.1. Travail à faire

Pour chaque situation décrite dans le tableau ci-dessous, vous devez indiquer l'état de la donnée.

Choisissez parmi les états suivants : `stockée`, `calculée`, `temporaire`.

**Recopiez et complétez le tableau suivant :**

| Donnée          | Situation dans l'application                 | État de la donnée |
| --------------- | -------------------------------------------- | ----------------- |
| `titre_article` | L'article est publié et enregistré dans la base |                  |
| `mot_cle`       | L'utilisateur tape "Tutoriel" dans la barre de recherche |                  |
| `duree_lecture` | L'application compte les mots et déduit « 5 min » |                 |
| `date_publication`| L'application mémorise le jour où l'article a été posté |                  |
| `message_erreur`| Un texte rouge "Mot de passe incorrect" apparaît à l'écran |                  |

### 2.2. Livrable

Créez un document Markdown (ou un Google Doc) contenant votre tableau complété.

```text
t112112-donnees-a-conserver.md
```

### Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.112/' | relative_url }}"
    height="320"
    title="Résultat attendu — Données à conserver">
</iframe>

### Critère de réussite

Vous avez correctement :

* distingué une donnée stockée (persistante) d'une donnée temporaire ;
* reconnu une donnée calculée ;
* écarté les éléments purement liés à l'interface.

## Bilan

**Vous avez appris à :**

* filtrer les informations utiles pour une base de données ;
* ignorer les éléments d'interface (données temporaires) ;
* identifier les données calculées qui ne nécessitent pas de stockage.

La prochaine étape consiste à apprendre à **observer une maquette pour extraire ces données persistantes**.

## Glossaire

* **Donnée stockée (persistante)** : donnée conservée dans le temps, essentielle au fonctionnement de l'application.
* **Donnée calculée** : donnée produite automatiquement à partir d'autres données existantes.
* **Donnée temporaire** : donnée utilisée momentanément (souvent pour l'interface) et qui n'a pas vocation à être enregistrée.
