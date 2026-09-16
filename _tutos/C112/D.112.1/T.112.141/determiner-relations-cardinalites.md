---
title: "Déterminer les relations et les cardinalités"
layout: tuto
slug: "determiner-relations-cardinalites"
permalink: /tutos/:slug/
tuto_id: "T.112.141"
type: "classique"
version: "normal"
ua: "UA.112.14"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Observer les maquettes et les données pour comprendre comment les entités sont **liées**.

Déterminer les **relations** et leurs **cardinalités**.

## 2. Prérequis

- Avoir construit les entités du Blog (T.112.133).
- Connaître les notions d'entité, attribut et identifiant.

## Données de départ

Les 4 entités du Blog :

```text
ARTICLE   AUTEUR   VILLE   CATEGORIE
```

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Règle de gestion

Une **règle de gestion** est une phrase qui décrit comment deux réalités sont liées.

Elle se formule avec un verbe métier.

**Exemples :**

> Un auteur habite dans une ville.
> Un article est rédigé par un auteur.
> Un article appartient à une catégorie.

### 1.2. Relation (ou association)

Une **relation** est le lien entre deux entités.

Elle est représentée par un verbe métier.

**Exemple :**

```text
AUTEUR ─── habite ─── VILLE
```

### 1.3. Cardinalité

La **cardinalité** indique combien d'occurrences d'une entité peuvent être liées à une occurrence de l'autre entité.

On note deux valeurs : **minimum** et **maximum**.

| Notation | Signification                               |
| -------- | ------------------------------------------- |
| `0, 1`   | Zéro ou une occurrence                      |
| `1, 1`   | Exactement une occurrence                   |
| `0, N`   | Zéro ou plusieurs occurrences               |
| `1, N`   | Une ou plusieurs occurrences                |

### 1.4. Types de relations

| Type  | Notation            | Exemple                                  |
| ----- | ------------------- | ---------------------------------------- |
| 1–1   | `1,1 ─── 1,1`      | Un auteur a un seul profil               |
| 1–N   | `1,1 ─── 0,N`      | Un auteur rédige plusieurs articles      |
| N–N   | `0,N ─── 0,N`      | Un article peut avoir plusieurs tags     |

### 1.5. Comment déterminer une cardinalité ?

Posez deux questions symétriques :

> **Question 1 :** Un [A] peut être lié à combien de [B] ?
> **Question 2 :** Un [B] peut être lié à combien de [A] ?

**Exemple — AUTEUR et VILLE :**

> Un auteur habite dans combien de villes ? → **1 seule** (1,1)
> Une ville peut accueillir combien d'auteurs ? → **plusieurs** (0,N)

Résultat :

```text
VILLE (1,N) ─── habite ─── (1,1) AUTEUR
```

### 1.6. À retenir

- Une règle de gestion décrit le lien entre deux entités avec un verbe.
- Une cardinalité indique le minimum et le maximum de liens possibles.
- On pose deux questions symétriques pour déterminer les deux cardinalités.
- Les types principaux : 1–1, 1–N, N–N.

## Partie 2 — Pratique

### 2.1. Analyser les liens du Blog

#### Lien 1 : AUTEUR — VILLE

Règle de gestion :

> Un auteur habite dans une ville.
> Une ville peut être associée à plusieurs auteurs.

Questions :

- Un auteur habite dans combien de villes ? → 1 seule → cardinalité : **(1,1)**
- Une ville regroupe combien d'auteurs ? → plusieurs → cardinalité : **(1,N)**

```text
VILLE (1,N) ─── habite ─── (1,1) AUTEUR
```

#### Lien 2 : AUTEUR — ARTICLE

Règle de gestion :

> Un auteur rédige plusieurs articles.
> Un article est rédigé par un seul auteur.

Questions :

- Un auteur rédige combien d'articles ? → plusieurs → cardinalité : **(1,N)**
- Un article est rédigé par combien d'auteurs ? → un seul → cardinalité : **(1,1)**

```text
AUTEUR (1,N) ─── rédige ─── (1,1) ARTICLE
```

#### Lien 3 : CATEGORIE — ARTICLE

Règle de gestion :

> Une catégorie regroupe plusieurs articles.
> Un article appartient à une seule catégorie.

Questions :

- Une catégorie regroupe combien d'articles ? → plusieurs → cardinalité : **(1,N)**
- Un article appartient à combien de catégories ? → une seule → cardinalité : **(1,1)**

```text
CATEGORIE (1,N) ─── regroupe ─── (1,1) ARTICLE
```

---

### 2.2. Travail à faire

**Consigne :**

Pour chaque lien ci-dessous, formulez la règle de gestion et déterminez les cardinalités.

1. ARTICLE et TAG *(un article peut avoir plusieurs tags ; un tag peut être associé à plusieurs articles)*
2. AUTEUR et ARTICLE *(relation déjà vue — à refaire seul)*

**Livrable :**

Un document listant les relations avec leurs cardinalités.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.141/' | relative_url }}"
    height="500"
    title="Résultat attendu — Relations et cardinalités">
</iframe>

**Critère de réussite :**

Chaque relation est formulée avec un verbe métier et les deux cardinalités sont correctes.

## Bilan

**Vous avez réalisé :** La détermination des relations et cardinalités entre les entités du Blog.

**Vous savez maintenant :**

- Formuler une règle de gestion avec un verbe métier.
- Poser les deux questions symétriques pour déterminer les cardinalités.
- Distinguer les types de relations : 1–1, 1–N, N–N.

## Glossaire

- **Règle de gestion** : Phrase décrivant comment deux réalités sont liées, avec un verbe.
- **Relation** : Lien formel entre deux entités.
- **Cardinalité** : Nombre minimum et maximum de liens entre deux entités.
- **Minimum** : Nombre minimal d'occurrences liées (0 ou 1).
- **Maximum** : Nombre maximal d'occurrences liées (1 ou N).
- **Relation 1–N** : Un côté a une occurrence, l'autre en a plusieurs.
- **Relation N–N** : Les deux côtés peuvent avoir plusieurs occurrences.
