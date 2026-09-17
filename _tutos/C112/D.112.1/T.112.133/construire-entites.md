---
title: "Construire les entités à partir des données"
layout: tuto
slug: "construire-entites-donnees"
permalink: /tutos/:slug/
tuto_id: "T.112.133"
type: "classique"
version: "normal"
ua: "UA.112.13"
nav_order: 7
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

À partir d'un dictionnaire de données et de plusieurs occurrences, construire les entités qui représentent les différentes réalités du Blog.

Vous allez apprendre à :

* regrouper les données par réalité ;
* construire une entité ;
* choisir ou créer un identifiant ;
* placer les attributs dans la bonne entité ;
* exprimer les dépendances fonctionnelles ;
* exclure les données calculées qui ne sont pas stockées.

## 2. Prérequis

* Savoir construire un dictionnaire de données (T.112.122).
* Savoir observer les occurrences et repérer les répétitions (T.112.131).
* Savoir découvrir les réalités, les identifiants et les dépendances (T.112.132).

## Données de départ

Ce tutoriel utilise le dictionnaire de données du Blog construit dans T.112.122.

Les données retenues sont :

```text
titre_article
contenu_article
date_publication
statut_article
image_article
nom_auteur
prenom_auteur
email_auteur
nom_ville
nom_categorie
duree_lecture
```

Le dictionnaire contient aussi les informations suivantes :

* description ;
* type ;
* caractère obligatoire ou facultatif ;
* caractère stocké ou calculé.

Exemple :

| Donnée          | Type   | Stockée |
| --------------- | ------ | :-----: |
| `titre_article` | Texte  |   Oui   |
| `nom_auteur`    | Texte  |   Oui   |
| `nom_ville`     | Texte  |   Oui   |
| `duree_lecture` | Entier |   Non   |

Les occurrences observées dans T.112.131 et l'analyse réalisée dans T.112.132 servent également de base.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une entité ?

Une **entité** représente une réalité identifiée dans les données.

Elle regroupe les données qui décrivent cette même réalité.

Exemple :

```text
AUTEUR
```

regroupe les données qui décrivent un auteur.

### 1.2. Une entité contient un identifiant et des attributs

Une entité contient :

* un nom ;
* un identifiant ;
* des attributs.

Exemple :

```text
AUTEUR
------

id_auteur
nom_auteur
prenom_auteur
email_auteur
```

`id_auteur` permet de distinguer les occurrences de l'entité.

Les autres données décrivent l'auteur.

### 1.3. Regrouper les données par réalité

Pour construire les entités, on pose la question :

> Quelle réalité cette donnée décrit-elle ?

Exemple :

| Donnée            | Réalité   |
| ----------------- | --------- |
| `titre_article`   | Article   |
| `contenu_article` | Article   |
| `nom_auteur`      | Auteur    |
| `email_auteur`    | Auteur    |
| `nom_ville`       | Ville     |
| `nom_categorie`   | Catégorie |

Les données qui décrivent la même réalité sont regroupées dans la même entité.

### 1.4. Choisir ou créer un identifiant

Pour chaque réalité, il faut disposer d'un identifiant permettant de distinguer ses occurrences.

Deux situations sont possibles.

**Identifiant existant :**

Une donnée déjà présente peut identifier les occurrences si les observations montrent qu'elle est unique.

Exemple :

```text
email_auteur
```

**Identifiant à créer :**

Lorsqu'aucune donnée existante ne convient, on crée un identifiant.

Exemple :

```text
id_auteur
```

Dans ce socle N1, on utilise généralement un identifiant `id_...` créé pour les entités.

### 1.5. Dépendance fonctionnelle

Les attributs d'une entité dépendent de son identifiant.

Exemple :

```text
id_auteur → nom_auteur, prenom_auteur, email_auteur
```

Cela signifie que l'identifiant `id_auteur` détermine les attributs de l'auteur.

### 1.6. Séparer les réalités

Une donnée qui décrit une autre réalité ne doit pas être placée dans la première entité.

Exemple :

```text
nom_auteur
nom_ville
```

ne décrivent pas la même réalité.

On crée donc :

```text
AUTEUR
VILLE
```

et non une seule entité regroupant toutes les données.

### 1.7. Donnée stockée et donnée calculée

Le dictionnaire indique si une donnée est stockée.

Une donnée avec :

```text
Stockée = Oui
```

peut être intégrée dans le modèle.

Une donnée avec :

```text
Stockée = Non
```

est calculée et ne doit pas être ajoutée comme attribut stocké.

Exemple :

```text
duree_lecture → Stockée = Non
```

Cette donnée n'est donc pas ajoutée aux attributs stockés de l'entité `ARTICLE`.

### 1.8. Ne pas créer encore les relations

À ce stade, on construit les entités et leurs attributs.

On ne détermine pas encore :

* les relations entre les entités ;
* les cardinalités ;
* les clés étrangères.

Ces éléments seront étudiés dans l'UA suivante.

### 1.9. À retenir

* Une entité représente une réalité.
* Les données d'une même réalité sont regroupées dans une entité.
* Chaque entité possède un identifiant.
* Les autres données deviennent des attributs.
* Les attributs dépendent de l'identifiant.
* Les données calculées non stockées ne sont pas ajoutées comme attributs stockés.
* Les relations entre les entités seront étudiées ensuite.

---

## Partie 2 — Pratique

### 2.1. Analyser les données

Reprenons le dictionnaire du Blog.

| Donnée             | Stockée | Réalité   |
| ------------------ | :-----: | --------- |
| `titre_article`    |   Oui   | Article   |
| `contenu_article`  |   Oui   | Article   |
| `date_publication` |   Oui   | Article   |
| `statut_article`   |   Oui   | Article   |
| `image_article`    |   Oui   | Article   |
| `nom_auteur`       |   Oui   | Auteur    |
| `prenom_auteur`    |   Oui   | Auteur    |
| `email_auteur`     |   Oui   | Auteur    |
| `nom_ville`        |   Oui   | Ville     |
| `nom_categorie`    |   Oui   | Catégorie |
| `duree_lecture`    |   Non   | Article   |

### Étape 1 — Regrouper les données

Les données sont regroupées selon la réalité qu'elles décrivent.

**ARTICLE**

```text
titre_article
contenu_article
date_publication
statut_article
image_article
duree_lecture
```

**AUTEUR**

```text
nom_auteur
prenom_auteur
email_auteur
```

**VILLE**

```text
nom_ville
```

**CATEGORIE**

```text
nom_categorie
```

### Étape 2 — Vérifier les données calculées

`duree_lecture` possède :

```text
Stockée = Non
```

Elle ne sera donc pas conservée comme attribut stocké de l'entité `ARTICLE`.

On obtient :

**ARTICLE**

```text
titre_article
contenu_article
date_publication
statut_article
image_article
```

### Étape 3 — Ajouter les identifiants

Ajoutez un identifiant à chaque entité :

```text
id_article
id_auteur
id_ville
id_categorie
```

### Étape 4 — Construire les entités

Le résultat devient :

```text
ARTICLE
-------

id_article
titre_article
contenu_article
date_publication
statut_article
image_article
```

```text
AUTEUR
------

id_auteur
nom_auteur
prenom_auteur
email_auteur
```

```text
VILLE
-----

id_ville
nom_ville
```

```text
CATEGORIE
---------

id_categorie
nom_categorie
```

### Étape 5 — Exprimer les dépendances

Pour chaque entité, écrivez la dépendance entre l'identifiant et ses attributs.

```text
id_article → titre_article, contenu_article, date_publication, statut_article, image_article
```

```text
id_auteur → nom_auteur, prenom_auteur, email_auteur
```

```text
id_ville → nom_ville
```

```text
id_categorie → nom_categorie
```

### 2.2. Travail à faire

À partir du dictionnaire de données complet du Blog et des observations précédentes, construisez **seul** les entités.

Pour chaque donnée :

1. déterminez la réalité qu'elle décrit ;
2. regroupez les données de la même réalité ;
3. vérifiez si la donnée est stockée ;
4. choisissez ou créez un identifiant ;
5. construisez l'entité ;
6. ajoutez ses attributs ;
7. exprimez les dépendances fonctionnelles.

Vous devez construire les entités :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

Ne construisez pas encore les relations entre ces entités.

**Livrable :**

```text
entites.md
```

Le document doit contenir :

* les entités ;
* leurs identifiants ;
* leurs attributs ;
* les dépendances fonctionnelles.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.133/' | relative_url }}"
    height="650"
    title="Résultat attendu — Entités du Blog">
</iframe>

**Critère de réussite :**

Les entités sont correctement construites :

* chaque donnée stockée est placée dans la bonne entité ;
* les données calculées non stockées sont exclues ;
* chaque entité possède un identifiant ;
* les attributs correspondent à la réalité représentée ;
* les dépendances fonctionnelles sont correctement exprimées ;
* aucune relation ou cardinalité n'est encore ajoutée.

## Bilan

**Vous avez réalisé :**

Les entités du Blog à partir du dictionnaire de données et des observations précédentes.

**Vous savez maintenant :**

* regrouper les données par réalité ;
* construire une entité ;
* choisir ou créer un identifiant ;
* placer les attributs dans la bonne entité ;
* exclure une donnée calculée non stockée ;
* exprimer les dépendances fonctionnelles.

Dans le prochain tutoriel, vous apprendrez à **relier les entités et déterminer les cardinalités**.

## Glossaire

* **Entité** : représentation d'une réalité dans le modèle de données.
* **Attribut** : donnée qui décrit une entité.
* **Identifiant** : donnée qui permet de distinguer les occurrences d'une entité.
* **Identifiant créé** : identifiant ajouté lorsque les données existantes ne permettent pas d'identifier simplement les occurrences.
* **Dépendance fonctionnelle** : relation `X → Y` indiquant que X détermine Y.
* **Donnée stockée** : donnée conservée dans le modèle et dans les données de l'application.
* **Donnée calculée** : donnée produite à partir d'autres données.
* **Réalité** : élément du domaine décrit par un groupe de données.
