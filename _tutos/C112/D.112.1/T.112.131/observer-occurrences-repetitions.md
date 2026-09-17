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

Observer plusieurs occurrences d'un même ensemble de données et repérer les valeurs qui se répètent.

Vous allez apprendre à :

* reconnaître une occurrence ;
* distinguer une donnée d'une occurrence ;
* comparer plusieurs occurrences ;
* repérer une valeur répétée.

## 2. Prérequis

* Savoir identifier et décrire une donnée (T.112.121).
* Savoir construire un dictionnaire de données (T.112.122).
* Connaître la différence entre une donnée et sa valeur.

## Données de départ

Ce tutoriel utilise des données issues du dictionnaire de données du Blog.

Voici plusieurs occurrences d'auteurs :

| `nom_auteur` | `email_auteur`                              | `nom_ville` |
| ------------ | ------------------------------------------- | ----------- |
| Madani       | [madani@mail.com](mailto:madani@mail.com)   | Tanger      |
| Sara         | [sara@mail.com](mailto:sara@mail.com)       | Tanger      |
| Youssef      | [youssef@mail.com](mailto:youssef@mail.com) | Rabat       |
| Amine        | [amine@mail.com](mailto:amine@mail.com)     | Tanger      |

Chaque ligne contient les valeurs d'une même occurrence.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une occurrence ?

Une **occurrence** est un ensemble concret de valeurs correspondant à un cas précis.

Dans le tableau :

```text
Madani | madani@mail.com | Tanger
```

représente une occurrence.

Le tableau contient donc **4 occurrences**.

### 1.2. Donnée et occurrence

Une **donnée** indique ce que l'on observe.

Une **occurrence** contient les valeurs concrètes de ces données.

| Concept    | Exemple                             |
| ---------- | ----------------------------------- |
| Donnée     | `nom_auteur`                        |
| Valeur     | `Madani`                            |
| Occurrence | `Madani / madani@mail.com / Tanger` |

La donnée décrit le champ.

La valeur correspond au contenu de ce champ pour une occurrence.

### 1.3. Observer les valeurs

Pour observer les répétitions, on regarde les valeurs d'une même donnée sur plusieurs occurrences.

Exemple :

```text
nom_ville

Tanger
Tanger
Rabat
Tanger
```

On compare les valeurs :

```text
Tanger
Tanger
Rabat
Tanger
```

### 1.4. Qu'est-ce qu'une répétition ?

Une **répétition** existe lorsque la même valeur apparaît plusieurs fois pour une même donnée.

Dans :

```text
Tanger
Tanger
Rabat
Tanger
```

la valeur `Tanger` apparaît **3 fois**.

Il y a donc une répétition de la valeur `Tanger`.

### 1.5. Répétition dans plusieurs colonnes

Toutes les données ne présentent pas forcément une répétition.

Exemple :

| Donnée         | Valeurs observées             | Répétition |
| -------------- | ----------------------------- | ---------- |
| `nom_auteur`   | Madani, Sara, Youssef, Amine  | Non        |
| `email_auteur` | 4 valeurs différentes         | Non        |
| `nom_ville`    | Tanger, Tanger, Rabat, Tanger | Oui        |

La répétition doit être observée **pour chaque donnée**.

### 1.6. À retenir

* Une **donnée** indique ce que l'on observe.
* Une **valeur** est le contenu concret d'une donnée.
* Une **occurrence** correspond à un ensemble concret de valeurs.
* Une **répétition** existe lorsqu'une même valeur apparaît plusieurs fois.
* À ce stade, on observe les répétitions sans encore construire les entités.

---

## Partie 2 — Pratique

### 2.1. Observer les occurrences

Observez les quatre occurrences fournies dans les données de départ.

### Étape 1 — Observer chaque colonne

Commencez par `nom_auteur`.

```text
Madani
Sara
Youssef
Amine
```

Puis `email_auteur`.

```text
madani@mail.com
sara@mail.com
youssef@mail.com
amine@mail.com
```

Puis `nom_ville`.

```text
Tanger
Tanger
Rabat
Tanger
```

### Étape 2 — Comparer les valeurs

Pour chaque donnée, comparez les valeurs entre les différentes occurrences.

Posez-vous la question :

> Une même valeur apparaît-elle plusieurs fois ?

### Étape 3 — Repérer les répétitions

Complétez le tableau :

| Donnée         | Répétition ? | Valeur répétée | Nombre |
| -------------- | :----------: | -------------- | -----: |
| `nom_auteur`   |      Non     | —              |      0 |
| `email_auteur` |      Non     | —              |      0 |
| `nom_ville`    |      Oui     | Tanger         |      3 |

### 2.2. Travail à faire

Observez le tableau suivant :

| `titre_article`                     | `nom_auteur` | `nom_categorie` |
| ----------------------------------- | ------------ | --------------- |
| Débuter avec Tailwind CSS           | Madani       | Développement   |
| L'importance des micro-interactions | Sara         | Design UI/UX    |
| Optimiser ses requêtes SQL          | Madani       | Développement   |
| Gérer son temps avec Notion         | Youssef      | Productivité    |
| CSS Grid en 10 minutes              | Sara         | Développement   |

Pour chaque colonne :

1. observez les valeurs ;
2. repérez les valeurs qui se répètent ;
3. indiquez le nombre de répétitions.

**Livrable :**

```text
occurrences-repetitions.md
```

Le livrable doit contenir un tableau indiquant, pour chaque donnée :

* s'il existe une répétition ;
* la valeur répétée ;
* le nombre d'apparitions.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.131/' | relative_url }}"
    height="500"
    title="Résultat attendu — Occurrences et répétitions">
</iframe>

**Critère de réussite :**

Les répétitions sont correctement identifiées pour chaque donnée.

Aucune conclusion sur les entités, les identifiants ou les dépendances n'est demandée dans ce tutoriel.

## Bilan

**Vous avez réalisé :**

L'observation de plusieurs occurrences et l'identification des valeurs répétées.

**Vous savez maintenant :**

* reconnaître une occurrence ;
* distinguer une donnée, une valeur et une occurrence ;
* comparer les valeurs de plusieurs occurrences ;
* repérer une valeur répétée ;
* compter les répétitions.

## Glossaire

* **Occurrence** : ensemble concret de valeurs correspondant à un cas précis.
* **Valeur** : contenu concret d'une donnée pour une occurrence.
* **Ensemble d'occurrences** : groupe de plusieurs occurrences observées ensemble.
* **Répétition** : même valeur apparaissant plusieurs fois pour une même donnée.
* **Donnée répétée** : donnée pour laquelle une même valeur apparaît dans plusieurs occurrences.
