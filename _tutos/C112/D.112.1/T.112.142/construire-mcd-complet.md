---
title: "Construire le MCD complet"
layout: tuto
slug: "construire-mcd-complet"
permalink: /tutos/:slug/
tuto_id: "T.112.142"
type: "classique"
version: "normal"
ua: "UA.112.14"
nav_order: 9
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Rassembler les entités, relations et cardinalités pour construire le **MCD complet** du Blog.

Vérifier la cohérence du modèle.

## 2. Prérequis

- Avoir construit les entités du Blog (T.112.133).
- Avoir déterminé les relations et cardinalités (T.112.141).

## Données de départ

- Les 4 entités : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`
- Les relations et cardinalités déterminées en T.112.141

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MCD ?

Un **MCD** (Modèle Conceptuel de Données) est une représentation graphique et textuelle de toutes les entités d'une application et de leurs relations.

Il décrit **ce qui doit être modélisé**, sans s'occuper encore de comment le stocker techniquement.

### 1.2. Composants d'un MCD

| Composant    | Rôle                                          |
| ------------ | --------------------------------------------- |
| Entité       | Représente une réalité métier                 |
| Attribut     | Propriété d'une entité                        |
| Identifiant  | Attribut unique d'une entité                  |
| Association  | Lien entre deux entités avec un verbe         |
| Cardinalité  | Nombre min/max de liens pour chaque entité    |

### 1.3. Comment lire un MCD ?

Pour lire une relation dans le MCD :

```text
ENTITE_A (cardinalité_A) ─── VERBE ─── (cardinalité_B) ENTITE_B
```

**Lecture :**

> Une ENTITE_A peut être liée à [cardinalité_A] ENTITE_B.

**Exemple :**

```text
AUTEUR (1,N) ─── rédige ─── (1,1) ARTICLE
```

> Un auteur peut rédiger une ou plusieurs articles.
> Un article est rédigé par exactement un auteur.

### 1.4. Cohérence d'un MCD

Un MCD est cohérent si :

- Chaque entité a un identifiant unique.
- Les cardinalités reflètent les règles de gestion réelles.
- Aucun attribut n'est dupliqué entre les entités.
- Les données calculées ne sont pas dans les entités.

### 1.5. À retenir

- Le MCD représente toutes les entités et leurs relations.
- Il se lit de gauche à droite avec les cardinalités des deux côtés.
- Il doit être cohérent avec les règles de gestion de l'application.

## Partie 2 — Pratique

### 2.1. Assembler le MCD du Blog

#### Entités

```text
VILLE             AUTEUR            ARTICLE           CATEGORIE
-----             ------            -------           ---------
id_ville          id_auteur         id_article        id_categorie
nom_ville         nom_auteur        titre_article     nom_categorie
                  prenom_auteur     contenu_article
                  email_auteur      date_publication
                                    statut_article
                                    image_article
```

#### Relations et cardinalités

```text
VILLE (1,N) ─── habite ─── (1,1) AUTEUR

AUTEUR (1,N) ─── rédige ─── (1,1) ARTICLE

CATEGORIE (1,N) ─── regroupe ─── (1,1) ARTICLE
```

#### MCD textuel complet

```text
VILLE
-----
id_ville
nom_ville

    (1,N) habite (1,1)

AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur

    (1,N) rédige (1,1)

ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article

    (1,1) appartient (1,N)

CATEGORIE
---------
id_categorie
nom_categorie
```

### 2.2. Vérifier la cohérence

Posez ces questions sur votre MCD :

| Question de vérification                              | Réponse attendue |
| ----------------------------------------------------- | ---------------- |
| Chaque entité a-t-elle un identifiant ?               | Oui              |
| Les cardinalités reflètent-elles les règles métier ?  | Oui              |
| Des attributs sont-ils dupliqués entre entités ?      | Non              |
| `duree_lecture` est-elle dans une entité ?            | Non (calculée)   |

---

### 2.3. Travail à faire

**Consigne :**

Construisez le MCD complet du Blog en vous basant sur vos résultats des tutoriels précédents.

Rédigez-le en format textuel puis vérifiez sa cohérence.

**Livrable :**

```text
mcd-blog.md
```

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.142/' | relative_url }}"
    height="650"
    title="Résultat attendu — MCD complet du Blog">
</iframe>

**Critère de réussite :**

Le MCD contient les 4 entités avec leurs attributs, les 3 relations avec leurs cardinalités correctes.

## Bilan

**Vous avez réalisé :** Le MCD complet du Blog, avec entités, attributs, identifiants, relations et cardinalités.

**Vous savez maintenant :**

- Assembler un MCD à partir des entités et relations.
- Lire un MCD correctement.
- Vérifier la cohérence d'un MCD.

## Glossaire

- **MCD** : Modèle Conceptuel de Données — représentation de toutes les entités et leurs relations.
- **Association** : Lien entre deux entités représenté par un verbe.
- **Cardinalité** : Nombre min/max de liens pour chaque entité dans une relation.
- **Cohérence d'un MCD** : Chaque entité a un identifiant, pas d'attribut dupliqué, cardinalités correctes.
- **Lecture d'un MCD** : Lire de gauche à droite avec les cardinalités des deux côtés.
