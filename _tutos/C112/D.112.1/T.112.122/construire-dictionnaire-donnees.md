---
title: "Construire le dictionnaire de données"
layout: tuto
slug: "construire-dictionnaire-donnees"
permalink: /tutos/:slug/
tuto_id: "T.112.122"
type: "classique"
version: "normal"
ua: "UA.112.12"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Regrouper et structurer les données identifiées dans plusieurs maquettes du Blog pour construire un **dictionnaire de données** cohérent.

Vous allez apprendre à :

* regrouper les mêmes données ;
* harmoniser leurs noms ;
* compléter leurs descriptions ;
* préciser leur type ;
* indiquer si elles sont obligatoires ;
* distinguer les données stockées des données calculées.

## 2. Prérequis

* Savoir identifier et décrire une donnée dans une maquette (T.112.121).
* Connaître les types conceptuels : Texte, Entier, Nombre décimal, Date, Booléen.
* Savoir distinguer une donnée obligatoire d'une donnée facultative.

## Données de départ

Ce tutoriel utilise plusieurs maquettes du **Blog**.

Les maquettes utilisées sont :

* **Page de création d'un article**
* **Page de liste des articles**
* **Page détail d'un article**

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Ouvrez les maquettes dans votre navigateur avant de commencer.

Les données identifiées dans T.112.121 servent de point de départ.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un dictionnaire de données ?

Un **dictionnaire de données** est un tableau qui liste et décrit les données utilisées par une application.

Il permet de regrouper les informations importantes sur chaque donnée :

* son nom ;
* sa description ;
* un exemple de valeur ;
* son type ;
* son caractère obligatoire ou facultatif ;
* son mode de gestion : stockée ou calculée.

Le dictionnaire sert de référence commune pour la suite de la conception.

### 1.2. Regrouper les données

Une même donnée peut apparaître dans plusieurs maquettes.

Elle ne doit pas être créée plusieurs fois dans le dictionnaire.

**Exemple :**

```text
Page création :
titre_article

Page liste :
titre_article

Page détail :
titre_article
```

Ces trois observations correspondent à une seule donnée :

```text
titre_article
```

### 1.3. Harmoniser les noms

Les noms doivent utiliser une même convention.

Utiliser :

* des minuscules ;
* `_` pour séparer les mots ;
* des noms descriptifs ;
* aucun accent ;
* aucun espace.

**Exemples :**

```text
titre_article
date_publication
nom_categorie
nom_auteur
```

Éviter :

```text
TitreArticle
date publication
NomCatégorie
titreArticle
```

### 1.4. Décrire une donnée

Chaque donnée doit être accompagnée d'une description simple.

**Exemple :**

```text
titre_article
```

Description :

```text
Titre de l'article.
```

La description doit expliquer clairement ce que représente la donnée.

### 1.5. Définir le type

Chaque donnée possède un type conceptuel.

Exemples :

```text
titre_article       → Texte
nombre_articles     → Entier
prix_article        → Nombre décimal
date_publication    → Date
article_publie      → Booléen
```

Une même donnée doit conserver le même type dans le dictionnaire.

### 1.6. Définir si la donnée est obligatoire

Une donnée peut être :

* **obligatoire** : elle doit être renseignée ;
* **facultative** : elle peut rester vide.

**Exemple :**

```text
titre_article → Oui
image_article → Non
```

### 1.7. Distinguer donnée stockée et donnée calculée

Une **donnée stockée** est enregistrée dans l'application.

Une **donnée calculée** est produite à partir d'autres données.

**Exemple :**

```text
contenu_article → Stockée
duree_lecture   → Calculée
```

Le dictionnaire doit permettre de distinguer ces deux cas.

### 1.8. Dictionnaire de données et entité

Le dictionnaire contient toutes les données identifiées.

À ce stade, les données ne sont pas encore organisées en entités.

**Exemple :**

```text
titre_article
nom_auteur
email_auteur
nom_categorie
```

Le dictionnaire décrit ces données.

L'organisation en **ARTICLE**, **AUTEUR** et **CATEGORIE** sera étudiée dans l'UA suivante.

### 1.9. À retenir

* Une même donnée observée plusieurs fois apparaît une seule fois dans le dictionnaire.
* Les noms doivent être cohérents.
* Chaque donnée possède une description.
* Chaque donnée possède un type.
* Chaque donnée est indiquée comme obligatoire ou facultative.
* Une donnée peut être stockée ou calculée.
* Le dictionnaire décrit les données sans encore construire les entités.

---

## Partie 2 — Pratique

### 2.1. Reprendre les données des maquettes

Reprenez les données identifiées dans les différentes maquettes du Blog.

Exemple :

**Page de création d'un article**

```text
titre_article
contenu_article
nom_categorie
statut_article
image_article
```

**Page de liste des articles**

```text
titre_article
date_publication
nom_categorie
nom_auteur
prenom_auteur
```

**Page détail d'un article**

```text
titre_article
contenu_article
nom_auteur
prenom_auteur
date_publication
nom_categorie
image_article
duree_lecture
```

### 2.2. Regrouper les mêmes données

Comparez les données provenant des différentes maquettes.

Une même donnée doit apparaître une seule fois.

Après regroupement :

```text
titre_article
contenu_article
nom_auteur
prenom_auteur
date_publication
nom_categorie
statut_article
image_article
duree_lecture
```

### 2.3. Harmoniser les noms

Vérifiez chaque nom.

Respectez la convention :

```text
mot_mot
```

Exemples :

```text
titre_article
date_publication
nom_categorie
```

Corrigez les noms qui ne respectent pas cette convention.

### 2.4. Compléter les descriptions

Pour chaque donnée, indiquez ce qu'elle représente.

Exemple :

| Donnée             | Description                      |
| ------------------ | -------------------------------- |
| `titre_article`    | Titre de l'article               |
| `contenu_article`  | Contenu de l'article             |
| `nom_auteur`       | Nom de l'auteur                  |
| `date_publication` | Date de publication de l'article |

### 2.5. Compléter les autres informations

Ajoutez pour chaque donnée :

* un exemple de valeur ;
* le type ;
* le caractère obligatoire ou facultatif ;
* l'indication stockée ou calculée.

Exemple :

| Donnée             | Description              | Exemple             | Type   | Obligatoire | Stockée |
| ------------------ | ------------------------ | ------------------- | ------ | :---------: | :-----: |
| `titre_article`    | Titre de l'article       | Mon premier article | Texte  |     Oui     |   Oui   |
| `date_publication` | Date de publication      | 16/09/2026          | Date   |     Oui     |   Oui   |
| `duree_lecture`    | Durée estimée de lecture | 5                   | Entier |     Non     |   Non   |

### 2.6. Construire le dictionnaire complet

Regroupez toutes les données dans un seul tableau.

Le dictionnaire final doit contenir au minimum :

```text
Donnée
Description
Exemple
Type
Obligatoire
Stockée
```

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.122/' | relative_url }}"
    height="600"
    title="Résultat attendu — Dictionnaire de données">
</iframe>

### 2.7. Travail à faire

**Consigne :**

Construisez le dictionnaire de données du Blog à partir des données observées dans les différentes maquettes.

Regroupez les mêmes données.

Harmonisez leurs noms.

Complétez leurs descriptions, exemples, types, contraintes et mode de gestion.

**Livrable :**

```text
dictionnaire-donnees.csv
```

Le fichier doit contenir toutes les données retenues dans les maquettes, sans doublons.

**Critère de réussite :**

Le dictionnaire est complet et cohérent :

* aucune même donnée n'est répétée ;
* les noms respectent la convention ;
* les descriptions sont claires ;
* les types sont cohérents ;
* le caractère obligatoire ou facultatif est indiqué ;
* les données stockées et calculées sont distinguées.

## Bilan

**Vous avez réalisé :**

Le dictionnaire de données du Blog à partir de plusieurs maquettes.

**Vous savez maintenant :**

* regrouper des données provenant de plusieurs maquettes ;
* éliminer les doublons ;
* harmoniser les noms ;
* décrire les données ;
* définir leur type ;
* indiquer leur caractère obligatoire ou facultatif ;
* distinguer une donnée stockée d'une donnée calculée.

## Glossaire

* **Dictionnaire de données** : tableau qui liste et décrit les données utilisées par une application.
* **Donnée** : élément identifié et manipulé par l'application.
* **Type** : catégorie qui indique la nature d'une donnée.
* **Donnée obligatoire** : donnée qui doit être renseignée.
* **Donnée facultative** : donnée qui peut rester vide.
* **Donnée stockée** : donnée enregistrée dans l'application.
* **Donnée calculée** : donnée produite à partir d'autres données.
