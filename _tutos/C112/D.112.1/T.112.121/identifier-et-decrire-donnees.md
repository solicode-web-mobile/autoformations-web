---
title: "Identifier et décrire les données d'une maquette"
layout: tuto
slug: "identifier-decrire-donnees-maquette"
permalink: /tutos/:slug/
tuto_id: "T.112.121"
type: "classique"
version: "normal"
ua: "UA.112.12"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---


## Objectif

Observer une maquette et identifier les **données** qu'elle présente.

Pour chaque donnée identifiée, apprendre à préciser :

* son **nom** ;
* sa **description** ;
* un **exemple de valeur** ;
* son **type** ;
* son caractère **obligatoire ou facultatif**.

À la fin du tutoriel, vous devez être capable de passer de :

```text id="78d6fq"
Maquette
    ↓
Données observées
    ↓
Données nommées
    ↓
Données décrites
```

## Prérequis

* Savoir distinguer une donnée de sa valeur (T.112.111).
* Comprendre les rôles possibles d'une donnée (T.112.112).

## Données de départ

Ce tutoriel utilise la maquette du **Blog**.

Maquette utilisée :

**Page Détail d'un article**

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Ouvrez la maquette dans votre navigateur avant de commencer.

## Partie 1 — Théorie

### 1.1. Observer une maquette pour trouver les données

Une maquette représente visuellement un écran d'une application.

Elle permet d'observer les informations présentées à l'utilisateur.

Dans cette UA, vous apprenez à transformer ce que vous voyez dans la maquette en **données**.

La démarche est :

```text id="k06hvp"
Je regarde
    ↓
J'observe un élément
    ↓
Je me demande :
« Est-ce une donnée ? »
    ↓
Je lui donne un nom
```

**Exemple :**

Sur une page d'article, vous pouvez voir :

```text id="edm1q7"
Mon premier article
```

Vous pouvez identifier une donnée :

```text id="f7u1go"
titre_article
```

Sa valeur observée est :

```text id="8byz7s"
Mon premier article
```

### 1.2. Nommer une donnée

Le **nom d'une donnée** permet de la désigner clairement.

Pour ce domaine, utilisez une convention simple :

* lettres minuscules ;
* mots séparés par `_` ;
* pas d'espace ;
* pas d'accents ;
* nom clair et précis.

**Exemples :**

| Élément observé     | Nom de donnée      |
| ------------------- | ------------------ |
| Titre de l'article  | `titre_article`    |
| Nom de l'auteur     | `nom_auteur`       |
| Date de publication | `date_publication` |

Évitez les noms peu clairs :

```text id="4m8nxb"
titre
data1
champ2
information
```

Préférez :

```text id="rfj7cq"
titre_article
nom_auteur
date_publication
```

### 1.3. Décrire une donnée

La **description** explique simplement ce que représente la donnée.

Elle doit être courte et précise.

**Exemples :**

| Donnée             | Description                      |
| ------------------ | -------------------------------- |
| `titre_article`    | Titre de l'article               |
| `nom_auteur`       | Nom de l'auteur                  |
| `date_publication` | Date de publication de l'article |

Une bonne description permet de comprendre la donnée sans regarder la maquette.

### 1.4. Donner un exemple de valeur

Une donnée peut avoir plusieurs valeurs.

L'**exemple de valeur** permet de montrer concrètement ce que la donnée peut contenir.

**Exemple :**

| Donnée             | Exemple de valeur   |
| ------------------ | ------------------- |
| `titre_article`    | Mon premier article |
| `nom_auteur`       | Madani              |
| `date_publication` | 16/09/2026          |

Attention :

```text id="c1w6ed"
Donnée :
titre_article

Valeur :
Mon premier article
```

La donnée et sa valeur sont deux choses différentes.

### 1.5. Choisir le type d'une donnée

Le **type conceptuel** indique la nature du contenu de la donnée.

| Type               | Description                     | Exemple           |
| ------------------ | ------------------------------- | ----------------- |
| **Texte**          | Suite de caractères             | Développement web |
| **Entier**         | Nombre entier                   | 5                 |
| **Nombre décimal** | Nombre avec une partie décimale | 4.5               |
| **Date**           | Date                            | 16/09/2026        |
| **Booléen**        | Vrai ou Faux                    | Vrai              |

Ces types sont **conceptuels**.

Ils servent à décrire la nature de la donnée avant de parler de son stockage technique.

### 1.6. Déterminer si une donnée est obligatoire

Une donnée est **obligatoire** lorsqu'elle doit avoir une valeur.

Une donnée est **facultative** lorsqu'elle peut ne pas avoir de valeur.

**Exemple :**

```text id="yv9i5m"
titre_article → obligatoire
image_article → facultative
```

Pour décider, posez-vous la question :

> L'application peut-elle fonctionner avec cette donnée vide ?

Pour une maquette, attention à ne pas inventer une règle qui n'est pas visible.

Lorsque la maquette ne permet pas de savoir si une donnée est obligatoire, il faut le signaler plutôt que l'inventer.

### 1.7. La démarche complète

Pour chaque élément observé dans une maquette, utilisez cette démarche :

```text id="gr09i8"
1. Observer
      ↓
2. Identifier la donnée
      ↓
3. Donner un nom
      ↓
4. Décrire la donnée
      ↓
5. Donner un exemple de valeur
      ↓
6. Choisir son type
      ↓
7. Déterminer si elle est obligatoire
```

### 1.8. À retenir

Une donnée identifiée dans une maquette peut être décrite avec plusieurs informations :

| Donnée          | Description        | Exemple     | Type  | Obligatoire |
| --------------- | ------------------ | ----------- | ----- | ----------- |
| `titre_article` | Titre de l'article | Mon article | Texte | Oui         |

Le dictionnaire de données sera construit dans le tutoriel suivant.

Ici, vous apprenez d'abord à **identifier et décrire les données d'une maquette**.

## Partie 2 — Pratique

### 2.1. Observer la page Détail d'un article

Ouvrez la maquette du Blog.

Allez sur la **Page Détail d'un article**.

Observez attentivement la page.

Ne cherchez pas encore à construire le dictionnaire complet.

Votre première tâche consiste simplement à repérer ce que la page présente comme données.

### Étape 1 — Repérer les éléments

Parcourez la page et notez les éléments qui correspondent à des données.

Par exemple, vous pouvez observer :

```text id="q1z2rq"
un titre
un nom
une date
une catégorie
un contenu
une image
```

Ne recopiez pas encore les noms du dictionnaire.

Écrivez d'abord **ce que vous voyez**.

### Étape 2 — Transformer ce que vous voyez en données

Pour chaque élément observé, donnez un nom de donnée.

**Exemple :**

```text id="7c6g8g"
Ce que je vois :
Le titre « Mon premier article »

Donnée :
titre_article
```

Continuez avec les autres éléments de la page.

### Étape 3 — Donner une valeur

Pour chaque donnée, notez la valeur réellement observée dans la maquette.

Exemple :

```text id="z9w7i9"
Donnée :
titre_article

Valeur observée :
Mon premier article
```

### Étape 4 — Décrire les données

Pour chaque donnée identifiée, écrivez une description courte.

Exemple :

```text id="28q5t2"
Donnée :
titre_article

Description :
Titre de l'article
```

### Étape 5 — Choisir le type

Pour chaque donnée, choisissez son type conceptuel :

```text id="7e6tzn"
Texte
Entier
Nombre décimal
Date
Booléen
```

Posez-vous la question :

> Quel type de contenu cette donnée représente-t-elle ?

### Étape 6 — Déterminer le caractère obligatoire

Pour chaque donnée, indiquez :

```text id="yl2l0k"
Oui
ou
Non
```

Lorsque la maquette ne permet pas de déterminer cette information, notez :

```text id="cnf2nq"
À déterminer
```

Ne faites pas d'hypothèse uniquement parce qu'une donnée est visible.

### 2.2. Travail à faire

Construisez votre premier tableau de description à partir de la maquette.

Votre tableau doit contenir au minimum :

| Donnée | Description | Exemple de valeur | Type | Obligatoire |
| ------ | ----------- | ----------------- | ---- | ----------- |
|        |             |                   |      |             |
|        |             |                   |      |             |
|        |             |                   |      |             |
|        |             |                   |      |             |
|        |             |                   |      |             |
|        |             |                   |      |             |

Vous devez identifier **au moins 6 données** présentes dans la page.

### 2.3. Vérification

Avant de terminer, vérifiez chaque ligne de votre tableau.

Pour chaque donnée, posez-vous ces questions :

```text id="6g8jgt"
Ai-je réellement vu cette donnée dans la maquette ?
        ↓
Le nom est-il clair ?
        ↓
La description explique-t-elle ce qu'elle représente ?
        ↓
La valeur correspond-elle à la maquette ?
        ↓
Le type est-il cohérent ?
        ↓
Ai-je une justification pour « obligatoire » ?
```

### Livrable

Créez un fichier :

```text id="6i0m7k"
dictionnaire-donnees-t112121.csv
```

Le fichier doit contenir les colonnes :

```text id="n1yrx2"
Donnée
Description
Exemple de valeur
Type
Obligatoire
```

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.121/' | relative_url }}"
    height="600"
    title="Résultat attendu — Identifier et décrire les données d'une maquette">
</iframe>

### Critère de réussite

Le travail est réussi lorsque :

* au moins 6 données ont été identifiées à partir de la maquette ;
* chaque donnée possède un nom clair ;
* chaque donnée possède une description courte ;
* chaque donnée possède un exemple de valeur ;
* le type choisi est cohérent ;
* le caractère obligatoire est renseigné ou signalé comme à déterminer lorsque la maquette ne permet pas de le savoir.

## Bilan

**Vous avez réalisé :**

L'identification et la description des données présentes dans une maquette.

**Vous savez maintenant :**

* observer une maquette ;
* repérer les données qu'elle présente ;
* donner un nom clair à une donnée ;
* décrire une donnée ;
* donner un exemple de valeur ;
* choisir un type conceptuel ;
* distinguer une donnée obligatoire d'une donnée facultative ;
* signaler une information qui ne peut pas être déduite de la maquette.

Vous avez maintenant obtenu une première liste de données décrites.

Dans le prochain tutoriel, vous apprendrez à **regrouper et organiser les données provenant de plusieurs maquettes pour construire le dictionnaire de données complet**.

## Glossaire

* **Donnée** : élément précis manipulé par l'application.
* **Nom de donnée** : nom utilisé pour désigner une donnée.
* **Description** : explication courte de ce que représente une donnée.
* **Valeur** : contenu concret d'une donnée.
* **Type conceptuel** : nature du contenu d'une donnée.
* **Donnée obligatoire** : donnée qui doit avoir une valeur.
* **Donnée facultative** : donnée qui peut ne pas avoir de valeur.
* **Maquette** : représentation visuelle d'un écran de l'application.
* **Dictionnaire de données** : document qui regroupe et décrit les données de l'application.
