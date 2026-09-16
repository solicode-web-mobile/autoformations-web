---
title: "Découvrir les réalités, les identifiants et les dépendances"
layout: tuto
slug: "decouvrir-realites-identifiants-dependances"
permalink: /tutos/:slug/
tuto_id: "T.112.132"
type: "classique"
version: "normal"
ua: "UA.112.13"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Analyser ce que chaque donnée décrit réellement.

Découvrir les **réalités métier**, les **identifiants** et les **dépendances fonctionnelles**.

## 2. Prérequis

- Avoir construit le dictionnaire de données (T.112.122).
- Savoir repérer les répétitions dans un tableau d'occurrences (T.112.131).

## Données de départ

Ce tutoriel part de trois données observées dans les auteurs du Blog :

```text
nom_auteur
email_auteur
nom_ville
```

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une réalité métier ?

Une **réalité métier** est une chose concrète du domaine de l'application qui existe de manière indépendante.

Elle peut être identifiée, décrite et gérée séparément.

**Exemples dans le Blog :**

- Un **auteur** est une réalité métier : il existe indépendamment de ses articles.
- Une **catégorie** est une réalité métier : elle existe indépendamment des articles qu'elle regroupe.
- Un **article** est une réalité métier : il a son propre contenu, sa propre date.

### 1.2. Propriété et attribut

Une **propriété** (ou **attribut**) est une donnée qui décrit une réalité métier.

**Exemple :**

La réalité "auteur" a ces propriétés :

```text
nom_auteur
email_auteur
```

Ces données décrivent l'auteur. Ce sont ses attributs.

### 1.3. Qu'est-ce qu'une entité ?

Une **entité** est la représentation formelle d'une réalité métier dans le modèle de données.

Elle regroupe les attributs qui décrivent cette réalité.

**Exemple :**

```text
AUTEUR
------
nom_auteur
email_auteur
```

### 1.4. Qu'est-ce qu'un identifiant ?

Un **identifiant** est un attribut (ou un groupe d'attributs) qui permet de distinguer chaque occurrence de manière unique.

- Un **identifiant existant** est déjà présent dans les données (ex : `email_auteur` — chaque auteur a un email unique).
- Un **identifiant à créer** est un numéro technique ajouté pour identifier chaque occurrence (ex : `id_auteur`).

**Exemple :**

```text
AUTEUR
------
id_auteur   ← identifiant (à créer)
nom_auteur
email_auteur
```

### 1.5. Donnée déterminante et donnée dépendante

- Une **donnée déterminante** est l'identifiant : elle détermine de manière unique une occurrence.
- Une **donnée dépendante** est un attribut qui dépend de l'identifiant.

**Exemple :**

```text
id_auteur → nom_auteur, email_auteur
```

On lit : "À partir de `id_auteur`, on connaît `nom_auteur` et `email_auteur`."

### 1.6. Dépendance fonctionnelle simple

Une **dépendance fonctionnelle simple** (DF) est une relation entre un identifiant et ses attributs.

Notation :

```text
X → Y
```

Cela signifie : "La valeur de X détermine de manière unique la valeur de Y."

**Exemple :**

```text
id_auteur → nom_auteur
id_auteur → email_auteur
id_ville  → nom_ville
```

### 1.7. À retenir

- Une réalité métier est une chose concrète qui existe de manière indépendante.
- Une entité représente formellement une réalité métier.
- Un identifiant distingue chaque occurrence de manière unique.
- Une dépendance fonctionnelle relie l'identifiant à ses attributs.

## Partie 2 — Pratique

### 2.1. Analyser les données

Voici trois données à analyser :

```text
nom_auteur
email_auteur
nom_ville
```

#### Étape 1 — Que décrit chaque donnée ?

Posez-vous cette question pour chaque donnée :

> Quelle réalité cette donnée décrit-elle ?

| Donnée         | Réalité décrite |
| -------------- | --------------- |
| `nom_auteur`   | L'auteur        |
| `email_auteur` | L'auteur        |
| `nom_ville`    | La ville        |

#### Étape 2 — Regrouper par réalité

Deux réalités distinctes apparaissent :

**Réalité 1 : l'auteur**

```text
nom_auteur
email_auteur
```

**Réalité 2 : la ville**

```text
nom_ville
```

#### Étape 3 — Ajouter un identifiant

Chaque entité a besoin d'un identifiant pour distinguer ses occurrences.

```text
AUTEUR
------
id_auteur
nom_auteur
email_auteur

VILLE
-----
id_ville
nom_ville
```

#### Étape 4 — Exprimer les dépendances fonctionnelles

```text
id_auteur → nom_auteur, email_auteur
id_ville  → nom_ville
```

---

### 2.2. Travail à faire

**Consigne :**

Analysez les données suivantes et découvrez les réalités métier, les identifiants et les dépendances.

```text
titre_article
contenu_article
date_publication
nom_auteur
email_auteur
nom_categorie
```

Pour chaque groupe de données, posez-vous : « Quelle réalité décrivent-elles ? »

**Livrable :**

Un document listant les entités découvertes avec leurs attributs, identifiants et dépendances fonctionnelles.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.132/' | relative_url }}"
    height="600"
    title="Résultat attendu — Entités et dépendances">
</iframe>

**Critère de réussite :**

Vous avez découvert au moins 3 entités distinctes avec leurs attributs et identifiants corrects.

## Bilan

**Vous avez réalisé :** La découverte des réalités métier, identifiants et dépendances à partir d'un groupe de données.

**Vous savez maintenant :**

- Identifier une réalité métier à partir d'un groupe de données.
- Construire une entité avec ses attributs et son identifiant.
- Exprimer une dépendance fonctionnelle simple.

## Glossaire

- **Réalité métier** : Chose concrète du domaine de l'application qui existe de manière indépendante.
- **Entité** : Représentation formelle d'une réalité métier dans le modèle de données.
- **Attribut** : Donnée qui décrit une entité.
- **Identifiant** : Attribut qui distingue chaque occurrence de manière unique.
- **Identifiant existant** : Attribut déjà présent qui est unique par nature (ex : email).
- **Identifiant à créer** : Numéro technique ajouté pour identifier chaque occurrence.
- **Donnée déterminante** : Identifiant — détermine une occurrence de manière unique.
- **Donnée dépendante** : Attribut qui dépend de l'identifiant.
- **Dépendance fonctionnelle** : Relation X → Y signifiant que X détermine Y de manière unique.
