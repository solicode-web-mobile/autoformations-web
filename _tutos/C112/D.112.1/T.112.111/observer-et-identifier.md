---
title: "Distinguer information, donnée et valeur"
layout: tuto
slug: "distinguer-information-donnee-valeur"
permalink: /tutos/:slug/
tuto_id: "T.112.111"
type: "classique"
version: "normal"
ua: "UA.112.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---


## Objectif

Comprendre ce qu'est une **information**, une **donnée** et une **valeur**.

Savoir distinguer :

* une information ;
* une donnée ;
* la valeur d'une donnée ;
* une donnée saisie ;
* une donnée visible.

Comprendre la différence entre une **donnée** et sa **valeur**.

## Prérequis

Aucun prérequis.

C'est le premier tutoriel du domaine **Modéliser les données**.

## Données de départ

Dans ce tutoriel, vous travaillez avec des exemples simples de données.

Vous n'avez pas besoin d'observer une maquette.

L'objectif est d'abord de **comprendre les concepts** avant d'apprendre à identifier les données dans une maquette.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une information ?

Une **information** est un renseignement qui permet de comprendre quelque chose.

**Exemple :**

> Madani Ali a publié un article le 14 février 2026.

Cette phrase donne une information à l'utilisateur.

Elle contient plusieurs éléments.

```text
Madani Ali
14 février 2026
un article
```

Ces éléments peuvent être représentés par différentes données dans une application.

### 1.2. Qu'est-ce qu'une donnée ?

Une **donnée** est un élément précis qu'une application peut utiliser, afficher, enregistrer ou modifier.

Une donnée possède un **nom**.

**Exemple :**

```text
nom_auteur
date_publication
titre_article
```

Ces noms permettent à l'application de distinguer les différentes données.

Une donnée n'est donc pas la même chose que l'information complète.

**Exemple :**

```text
Information :
Madani Ali a publié un article le 14 février 2026.

Données :
nom_auteur
prenom_auteur
date_publication
```

### 1.3. Qu'est-ce qu'une valeur ?

Une **valeur** est le contenu concret d'une donnée à un moment donné.

**Exemple :**

| Donnée             | Valeur          |
| ------------------ | --------------- |
| `nom_auteur`       | Madani          |
| `prenom_auteur`    | Ali             |
| `date_publication` | 14 février 2026 |

Ici :

```text
nom_auteur
      ↓
    Madani
```

`nom_auteur` est la **donnée**.

`Madani` est la **valeur** de cette donnée.

### 1.4. Différence entre donnée et valeur

Il faut bien distinguer les deux.

```text
Donnée
↓
nom_auteur

Valeur
↓
Madani
```

La **donnée** représente ce que l'application doit manipuler.

La **valeur** représente le contenu réel de cette donnée pour un cas précis.

**Exemple :**

```text
nom_auteur → Madani
nom_auteur → Sara
nom_auteur → Youssef
```

La donnée reste :

```text
nom_auteur
```

La valeur peut changer :

```text
Madani
Sara
Youssef
```

> **La donnée est ce que l'application manipule.**
>
> **La valeur est le contenu concret de cette donnée.**

### 1.5. Une donnée saisie

Une **donnée saisie** est une donnée dont la valeur est fournie par l'utilisateur.

**Exemple :**

Un utilisateur remplit un formulaire :

```text
Nom :
Madani

Prénom :
Ali

Email :
madani@mail.com
```

On peut représenter cette situation ainsi :

```text
nom_auteur
    ↓
Madani
```

```text
prenom_auteur
    ↓
Ali
```

```text
email_auteur
    ↓
madani@mail.com
```

L'utilisateur a fourni les valeurs.

La donnée existait comme élément à saisir, puis elle reçoit une valeur.

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.111/formulaire-donnee-saisie.html' | relative_url }}"
    height="480"
    title="Exemple — Formulaire et données saisies">
</iframe>

### 1.6. Une donnée visible

Une **donnée visible** est une donnée dont la valeur est affichée à l'utilisateur.

**Exemple :**

L'application affiche :

```text
Madani Ali
```

L'utilisateur peut voir la valeur associée aux données :

```text
nom_auteur → Madani
prenom_auteur → Ali
```

Une donnée peut donc être :

```text
saisie
```

puis :

```text
stockée
```

puis :

```text
affichée
```

L'objectif ici est simplement de comprendre qu'une même donnée peut avoir différents rôles dans l'application.

### 1.7. Exemple complet

Considérons les données suivantes :

| Donnée          | Valeur                                    |
| --------------- | ----------------------------------------- |
| `nom_auteur`    | Madani                                    |
| `prenom_auteur` | Ali                                       |
| `email_auteur`  | [madani@mail.com](mailto:madani@mail.com) |
| `titre_article` | Mon premier article                       |

L'information peut être :

> Madani Ali a publié « Mon premier article ».

On peut distinguer :

```text
Information
    ↓
Madani Ali a publié « Mon premier article ».

Données
    ↓
nom_auteur
prenom_auteur
titre_article

Valeurs
    ↓
Madani
Ali
Mon premier article
```

### 1.8. À retenir

Retenez les éléments suivants :

* Une **information** est un renseignement utile.
* Une **donnée** est un élément précis manipulé par l'application.
* Une donnée possède un nom.
* Une **valeur** est le contenu concret d'une donnée.
* Une **donnée saisie** reçoit une valeur fournie par l'utilisateur.
* Une **donnée visible** est affichée à l'utilisateur.
* La donnée peut rester la même alors que sa valeur change.

**Exemple :**

```text
Donnée :
titre_article

Valeur :
Mon premier article
```

Puis :

```text
Donnée :
titre_article

Nouvelle valeur :
Comprendre Laravel
```

La donnée reste `titre_article`.

La valeur change.

## Partie 2 — Pratique

### 2.1. Identifier les données et leurs valeurs

Lisez les informations suivantes :

```text
Madani Ali
madani@mail.com
Mon premier article
16/09/2026
```

Les données associées sont :

| Donnée             | Valeur                                    |
| ------------------ | ----------------------------------------- |
| `nom_auteur`       | Madani                                    |
| `prenom_auteur`    | Ali                                       |
| `email_auteur`     | [madani@mail.com](mailto:madani@mail.com) |
| `titre_article`    | Mon premier article                       |
| `date_publication` | 16/09/2026                                |

### 2.2. Travail à faire

Pour chaque exemple, indiquez :

1. La donnée.
2. Sa valeur.
3. S'il s'agit d'une donnée saisie ou visible.

**Exemple :**

```text
Madani
```

Réponse attendue :

```text
Donnée : nom_auteur
Valeur : Madani
```

Puis :

```text
L'utilisateur saisit son nom dans un formulaire.
```

Réponse :

```text
Donnée : nom_auteur
Valeur : Madani
Rôle : donnée saisie
```

Puis :

```text
L'application affiche Madani sur la page.
```

Réponse :

```text
Donnée : nom_auteur
Valeur : Madani
Rôle : donnée visible
```

### 2.3. Exercice

Complétez le tableau suivant :

| Situation                                  | Donnée | Valeur | Rôle |
| ------------------------------------------ | ------ | ------ | ---- |
| L'utilisateur saisit son nom               |        |        |      |
| L'application affiche son nom              |        |        |      |
| L'utilisateur saisit le titre d'un article |        |        |      |
| L'application affiche le titre             |        |        |      |

### Livrable

Créez un document contenant vos réponses.

```text
t112111-information-donnee-valeur.md
```

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.111/' | relative_url }}"
    height="700"
    title="Résultat attendu — Information, donnée et valeur">
</iframe>

### Critère de réussite

Vous avez correctement :

* distingué une information d'une donnée ;
* distingué une donnée de sa valeur ;
* identifié les valeurs correspondantes ;
* reconnu une donnée saisie ;
* reconnu une donnée visible.

## Bilan

**Vous avez appris à :**

* distinguer une information d'une donnée ;
* identifier une donnée ;
* identifier la valeur d'une donnée ;
* expliquer la différence entre donnée et valeur ;
* reconnaître une donnée saisie ;
* reconnaître une donnée visible.

**Vous savez maintenant :**

```text
Information
    ↓
Données
    ↓
Valeurs
```

Et vous savez que :

```text
Donnée ≠ Valeur
```

Exemple :

```text
titre_article
      ↓
Mon premier article
```

La prochaine étape consiste à apprendre à **repérer les données dans une maquette et à les décrire**.

## Glossaire

* **Information** : renseignement utile permettant de comprendre quelque chose.
* **Donnée** : élément précis manipulé par une application.
* **Valeur** : contenu concret d'une donnée dans un cas précis.
* **Donnée saisie** : donnée dont la valeur est fournie par l'utilisateur.
* **Donnée visible** : donnée dont la valeur est affichée à l'utilisateur.
* **Maquette** : représentation visuelle d'un écran de l'application.
