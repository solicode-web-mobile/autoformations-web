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
* son caractère **obligatoire ou facultatif** ;
* si elle est **calculée ou non**.

À la fin du tutoriel, vous devez être capable de passer de :

```text
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
* Comprendre le filtre des données : stockée, calculée, temporaire (T.112.112).

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

Dans ce tutoriel, vous apprenez à transformer ce que vous voyez dans la maquette en **données à modéliser**.

La démarche est :

```text
Je regarde la maquette
    ↓
J'observe un élément
    ↓
Je filtre : « Est-ce une donnée stockée ou calculée ? » (J'ignore le temporaire)
    ↓
Je lui donne un nom
```

**Exemple :**

Sur la **page Détail d'un article**, vous pouvez voir :

```text
Mon premier article
```

Vous pouvez identifier une donnée :

```text
titre_article
```

Sa valeur observée est :

```text
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

```text
titre
data1
champ2
information
```

Préférez :

```text
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

```text
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

Une donnée est **obligatoire** lorsqu'elle doit absolument avoir une valeur.

Une donnée est **facultative** lorsqu'elle peut ne pas avoir de valeur.

**Exemple :**

```text
titre_article → obligatoire
image_article → facultative
```

Pour décider, posez-vous la question :

> L'application peut-elle fonctionner avec cette donnée vide ?

Pour une maquette, attention à ne pas inventer une règle qui n'est pas visible.
Lorsque la maquette ne permet pas de savoir si une donnée est obligatoire, il faut le signaler plutôt que l'inventer.

### 1.7. Préciser si une donnée est calculée

Dans un dictionnaire de données, il faut indiquer si la donnée est **calculée** ou non.
Une donnée calculée ne sera généralement pas stockée dans la base de données.

* **Oui** : La donnée est calculée (ex: `duree_lecture`).
* **Non** : La donnée est stockée (ex: `titre_article`).

Il est utile de préciser la règle de calcul dans la description lorsqu'on choisit "Oui".

### 1.8. La démarche complète

Pour chaque élément observé dans une maquette, utilisez cette démarche :

```text
1. Observer (et ignorer les données temporaires de l'interface)
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
      ↓
8. Préciser si elle est calculée
```

### 1.9. À retenir

Une donnée identifiée dans une maquette peut être décrite avec plusieurs informations :

| Donnée          | Description        | Exemple     | Type  | Obligatoire | Calculée |
| --------------- | ------------------ | ----------- | ----- | ----------- | -------- |
| `titre_article` | Titre de l'article | Mon article | Texte | Oui         | Non      |

Le dictionnaire de données final sera construit dans le tutoriel suivant.

Ici, vous apprenez d'abord à **identifier et décrire les données d'une seule maquette**.

## Partie 2 — Pratique

### 2.1. Observer la page Détail d'un article

Ouvrez la maquette du Blog.

Allez sur la **Page Détail d'un article**.

Observez attentivement la page.

Votre première tâche consiste simplement à repérer ce que la page présente comme données.

### Étape 1 — Repérer les éléments

Parcourez la page et notez les éléments qui correspondent à des données à conserver.

Par exemple, vous pouvez observer :

```text
un titre
un nom
une date
une catégorie
un contenu
une durée de lecture
une image
```

Ne recopiez pas encore les noms du dictionnaire.

Écrivez d'abord **ce que vous voyez**.

### Étape 2 — Transformer ce que vous voyez en données

Pour chaque élément observé, donnez un nom de donnée clair (ex: `titre_article`).

### Étape 3 — Donner une valeur

Pour chaque donnée, notez la valeur réellement observée dans la maquette (ex: `Mon premier article`).

### Étape 4 — Décrire les données

Pour chaque donnée identifiée, écrivez une description courte (ex: `Titre de l'article`).

### Étape 5 — Choisir le type

Pour chaque donnée, choisissez son type conceptuel :

```text
Texte
Entier
Nombre décimal
Date
Booléen
```

### Étape 6 — Déterminer le caractère obligatoire

Pour chaque donnée, indiquez si elle est obligatoire : `Oui` ou `Non`.

Si la maquette ne permet pas de le savoir, notez `À déterminer`.

### Étape 7 — Préciser si elle est calculée

Indiquez `Oui` si la donnée provient d'un calcul, ou `Non` si elle doit être stockée telle quelle.

### 2.2. Travail à faire

Construisez votre premier tableau de description à partir de la maquette.

Votre tableau doit contenir au minimum :

| Donnée | Description | Exemple de valeur | Type | Obligatoire | Calculée |
| ------ | ----------- | ----------------- | ---- | ----------- | -------- |
|        |             |                   |      |             |          |
|        |             |                   |      |             |          |
|        |             |                   |      |             |          |
|        |             |                   |      |             |          |
|        |             |                   |      |             |          |
|        |             |                   |      |             |          |

Vous devez identifier **au moins 6 données** présentes dans la page.

### 2.3. Vérification

Avant de terminer, posez-vous ces questions pour chaque ligne :

```text
Ai-je réellement vu cette donnée dans la maquette ?
        ↓
Le nom est-il clair ?
        ↓
La description est-elle précise ?
        ↓
La valeur correspond-elle à la maquette ?
        ↓
Le type est-il cohérent ?
        ↓
Ai-je bien fait attention à la colonne "Calculée" ?
```

### Livrable

Créez un fichier :

```text
dictionnaire-donnees-t112121.csv
```

Le fichier doit contenir les colonnes :

```text
Donnée
Description
Exemple de valeur
Type
Obligatoire
Calculée
```

### Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.121/' | relative_url }}"
    height="600"
    title="Résultat attendu — Identifier et décrire les données d'une maquette">
</iframe>

### Critère de réussite

Le travail est réussi lorsque :

* au moins 6 données ont été identifiées à partir de la maquette ;
* chaque donnée possède un nom clair, une description, et un exemple de valeur ;
* le type choisi est cohérent ;
* le caractère obligatoire est renseigné ;
* l'information "Calculée" est correctement indiquée pour chaque donnée.

## Bilan

**Vous avez réalisé :**

L'identification et la description structurée des données présentes dans une maquette.

**Vous savez maintenant :**

* observer une maquette avec le bon filtre mental ;
* repérer les données qu'elle présente ;
* donner un nom clair à une donnée ;
* choisir un type conceptuel ;
* distinguer une donnée obligatoire d'une donnée facultative ;
* distinguer une donnée stockée d'une donnée calculée.

Vous avez maintenant obtenu une première liste de données décrites.

Dans le prochain tutoriel, vous apprendrez à **regrouper et organiser les données provenant de plusieurs maquettes pour construire le dictionnaire de données complet**.

## Glossaire

* **Donnée** : élément précis manipulé par l'application.
* **Nom de donnée** : nom utilisé pour désigner une donnée.
* **Description** : explication courte de ce que représente une donnée.
* **Valeur** : contenu concret d'une donnée.
* **Type conceptuel** : nature du contenu d'une donnée.
* **Donnée obligatoire** : donnée qui doit avoir une valeur.
* **Donnée calculée** : donnée déduite d'autres informations plutôt que stockée directement.
* **Maquette** : représentation visuelle d'un écran de l'application.
* **Dictionnaire de données** : document qui regroupe et décrit les données de l'application.
