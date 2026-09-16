---
title: "Observer les occurrences et repérer les répétitions"
layout: tuto
slug: "observer-occurrences-repetitions"
permalink: /tutos/:slug/
tuto_id: "T.112.131"
type: "classique"
version: "normal"
ua: "UA.112.13"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Observer plusieurs lignes de données (occurrences) et repérer les valeurs qui se répètent.

Comprendre ce qu'une répétition signifie pour la structure des données.

## 2. Prérequis

- Savoir identifier et nommer une donnée (T.112.111).
- Avoir construit un dictionnaire de données (T.112.122).

## Données de départ

Ce tutoriel utilise un extrait des données du Blog.

Voici plusieurs lignes d'un tableau d'auteurs :

| `nom_auteur` | `email_auteur`       | `nom_ville` |
| ------------ | -------------------- | ----------- |
| Madani       | madani@mail.com      | Tanger      |
| Sara         | sara@mail.com        | Tanger      |
| Youssef      | youssef@mail.com     | Rabat       |
| Amine        | amine@mail.com       | Tanger      |

Chaque ligne représente un auteur.

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une occurrence ?

Une **occurrence** est une ligne concrète de données.

Elle représente un cas précis de la réalité.

**Exemple :**

Le tableau ci-dessus contient **4 occurrences** : 4 auteurs différents.

Chaque ligne est une occurrence de la donnée auteur.

### 1.2. Différence donnée / occurrence

| Concept     | Définition                            | Exemple                 |
| ----------- | ------------------------------------- | ----------------------- |
| Donnée      | Le nom du contenant                   | `nom_auteur`            |
| Occurrence  | Une ligne concrète remplie de valeurs | Madani / madani@mail.com / Tanger |

La donnée est **toujours la même**. Les occurrences sont **différentes à chaque ligne**.

### 1.3. Qu'est-ce qu'une répétition ?

Une **répétition** se produit quand la même valeur apparaît plusieurs fois dans une colonne.

**Exemple :**

Dans la colonne `nom_ville` :

```text
Tanger
Tanger
Rabat
Tanger
```

La valeur "Tanger" apparaît 3 fois. C'est une répétition.

### 1.4. Pourquoi les répétitions sont importantes ?

Une répétition signale que la valeur répétée décrit peut-être une **réalité distincte** dans l'application.

Si "Tanger" se répète, c'est peut-être parce que la ville est une donnée indépendante qui mérite d'être gérée séparément.

> Une répétition est un **signal** : cette valeur existe indépendamment des auteurs.

### 1.5. Donnée répétée

Une **donnée répétée** est une donnée dont la même valeur apparaît dans plusieurs occurrences.

Elle peut indiquer qu'une réalité sous-jacente est partagée entre plusieurs éléments.

### 1.6. À retenir

- Une occurrence est une ligne concrète de données.
- Une répétition se produit quand la même valeur apparaît dans plusieurs lignes.
- Une donnée répétée peut indiquer une réalité à gérer séparément.
- Observer les répétitions est la première étape vers la découverte des entités.

## Partie 2 — Pratique

### 2.1. Observer les occurrences

Regardez le tableau de données fourni dans les **Données de départ**.

#### Étape 1 — Lister les valeurs de chaque colonne

Pour chaque colonne, listez les valeurs :

**Colonne `nom_auteur` :**

```text
Madani
Sara
Youssef
Amine
```

**Colonne `email_auteur` :**

```text
madani@mail.com
sara@mail.com
youssef@mail.com
amine@mail.com
```

**Colonne `nom_ville` :**

```text
Tanger
Tanger
Rabat
Tanger
```

#### Étape 2 — Repérer les répétitions

Posez-vous cette question pour chaque colonne :

> Est-ce que la même valeur apparaît plusieurs fois ?

| Colonne        | Répétition ? | Valeur répétée |
| -------------- | :----------: | -------------- |
| `nom_auteur`   | Non          | —              |
| `email_auteur` | Non          | —              |
| `nom_ville`    | **Oui**      | Tanger (×3)    |

#### Étape 3 — Interpréter la répétition

La valeur "Tanger" se répète dans `nom_ville`.

Cela signifie que plusieurs auteurs habitent dans la même ville.

La ville existe indépendamment des auteurs. Ce n'est pas une propriété unique à chaque auteur.

> `nom_ville` est une **donnée répétée** : signal qu'une réalité distincte existe.

---

### 2.2. Travail à faire

**Consigne :**

Observez le tableau suivant. Identifiez les données répétées et expliquez ce que la répétition signifie.

| `titre_article`                 | `nom_auteur` | `nom_categorie` |
| ------------------------------- | ------------ | --------------- |
| Débuter avec Tailwind CSS       | Madani       | Développement   |
| L'importance des micro-interactions | Sara     | Design UI/UX    |
| Optimiser ses requêtes SQL      | Madani       | Développement   |
| Gérer son temps avec Notion     | Youssef      | Productivité    |
| CSS Grid en 10 minutes          | Sara         | Développement   |

**Livrable :**

Un tableau indiquant pour chaque colonne si des répétitions existent et la valeur répétée.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.131/' | relative_url }}"
    height="500"
    title="Résultat attendu — Répétitions identifiées">
</iframe>

**Critère de réussite :**

Vous avez identifié correctement les colonnes avec répétitions et expliqué ce que cela signifie.

## Bilan

**Vous avez réalisé :** L'observation d'occurrences et la détection des répétitions dans un tableau de données.

**Vous savez maintenant :**

- Définir une occurrence (une ligne concrète de données).
- Repérer une valeur qui se répète dans une colonne.
- Interpréter une répétition comme le signal d'une réalité distincte.

## Glossaire

- **Occurrence** : Ligne concrète de données représentant un cas précis de la réalité.
- **Valeur** : Contenu concret d'une donnée pour une occurrence.
- **Ensemble d'occurrences** : Toutes les lignes d'un même type de données.
- **Répétition** : Même valeur apparaissant dans plusieurs occurrences d'une même colonne.
- **Donnée répétée** : Donnée dont la valeur se répète dans plusieurs lignes.
