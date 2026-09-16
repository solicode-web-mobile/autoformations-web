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

Réutiliser la démarche de découverte des réalités métier pour construire **seul** les entités du Blog, sans qu'elles soient fournies.

## 2. Prérequis

- Savoir découvrir une réalité métier (T.112.132).
- Savoir construire une entité avec ses attributs et son identifiant (T.112.132).

## Données de départ

Le dictionnaire de données complet du Blog (construit en T.112.122) :

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

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Rappel : entité, attribut, identifiant

Une **entité** regroupe les attributs qui décrivent une réalité métier.

Chaque entité a :

- un **nom** en majuscules (ex : `ARTICLE`),
- des **attributs** (ses propriétés),
- un **identifiant** unique souligné ou précédé de `id_`.

**Format :**

```text
NOM_ENTITE
----------
id_entite       ← identifiant
attribut_1
attribut_2
```

### 1.2. Dépendance fonctionnelle

Une **dépendance fonctionnelle** exprime qu'un identifiant détermine ses attributs.

```text
id_entite → attribut_1, attribut_2
```

### 1.3. Séparation des réalités

Quand une donnée décrit une réalité différente de celle de l'entité principale, elle doit être séparée dans une nouvelle entité.

**Exemple :**

`nom_ville` ne décrit pas un auteur. Elle décrit une ville. Elle appartient à une entité `VILLE`, distincte de `AUTEUR`.

### 1.4. Référence à une autre réalité

Quand une entité est liée à une autre, on ne recopie pas tous les attributs de l'autre entité.

On note simplement le lien (la clé de référence) — cela sera traité dans les tutoriels sur les relations.

### 1.5. Identifiant créé

Quand aucun attribut existant ne peut servir d'identifiant unique, on en crée un :

```text
id_article    (numéro unique généré automatiquement)
id_auteur
id_categorie
id_ville
```

### 1.6. À retenir

- Regrouper les données par réalité métier.
- Chaque groupe devient une entité.
- Chaque entité a un identifiant unique.
- Les données qui décrivent une autre réalité vont dans une autre entité.
- Les données calculées (`duree_lecture`) ne sont pas des attributs à stocker.

## Partie 2 — Pratique

### 2.1. Analyser le dictionnaire

Voici la démarche en 4 étapes.

#### Étape 1 — Poser la question pour chaque donnée

| Donnée              | Quelle réalité décrit-elle ?  |
| ------------------- | ----------------------------- |
| `titre_article`     | L'article                     |
| `contenu_article`   | L'article                     |
| `date_publication`  | L'article                     |
| `statut_article`    | L'article                     |
| `image_article`     | L'article                     |
| `nom_auteur`        | L'auteur                      |
| `prenom_auteur`     | L'auteur                      |
| `email_auteur`      | L'auteur                      |
| `nom_ville`         | La ville                      |
| `nom_categorie`     | La catégorie                  |
| `duree_lecture`     | (calculée — pas stockée)      |

#### Étape 2 — Regrouper par réalité

Quatre réalités distinctes :

- **ARTICLE** : titre, contenu, date, statut, image
- **AUTEUR** : nom, prénom, email
- **VILLE** : nom de la ville
- **CATEGORIE** : nom de la catégorie

#### Étape 3 — Construire les entités

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article

AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur

VILLE
-----
id_ville
nom_ville

CATEGORIE
---------
id_categorie
nom_categorie
```

#### Étape 4 — Exprimer les dépendances fonctionnelles

```text
id_article   → titre_article, contenu_article, date_publication, statut_article, image_article
id_auteur    → nom_auteur, prenom_auteur, email_auteur
id_ville     → nom_ville
id_categorie → nom_categorie
```

---

### 2.2. Travail à faire

**Consigne :**

À partir du dictionnaire de données complet, construisez seul les 4 entités du Blog avec leurs attributs, identifiants et dépendances fonctionnelles.

**Livrable :**

Un document `entites.md` listant les entités, leurs attributs et les dépendances fonctionnelles.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.133/' | relative_url }}"
    height="650"
    title="Résultat attendu — Les 4 entités du Blog">
</iframe>

**Critère de réussite :**

Les 4 entités sont construites avec des attributs corrects, un identifiant pour chacune et les dépendances fonctionnelles exprimées.

## Bilan

**Vous avez réalisé :** La construction des 4 entités du Blog à partir du dictionnaire de données complet.

**Vous savez maintenant :**

- Regrouper les données d'un dictionnaire par réalité métier.
- Construire une entité avec ses attributs et son identifiant.
- Exprimer les dépendances fonctionnelles.
- Identifier les données calculées à exclure des entités.

## Glossaire

- **Entité** : Représentation formelle d'une réalité métier. Regroupe ses attributs et son identifiant.
- **Attribut** : Donnée qui décrit une entité.
- **Identifiant** : Attribut qui distingue chaque occurrence de manière unique.
- **Identifiant créé** : Numéro technique ajouté (`id_article`, `id_auteur`…).
- **Dépendance fonctionnelle** : Relation X → Y.
- **Séparation des réalités** : Chaque réalité distincte devient une entité séparée.
- **Référence** : Lien entre deux entités via un identifiant partagé.
