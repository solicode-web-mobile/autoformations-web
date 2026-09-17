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

Assembler les entités, les relations et les cardinalités produites dans les tutoriels précédents pour construire le **MCD complet du Blog**.

Vous allez apprendre à :

* rassembler les éléments d'un modèle ;
* représenter les entités et leurs attributs ;
* placer les relations entre les entités ;
* conserver les cardinalités déjà déterminées ;
* vérifier la cohérence du MCD.

## 2. Prérequis

* Savoir construire les entités du Blog (T.112.133).
* Savoir déterminer les relations et les cardinalités (T.112.141).
* Connaître les notions d'entité, attribut, identifiant, relation et cardinalité.

## Données de départ

Les résultats précédents sont les données de départ du tutoriel.

### Entités

Les entités construites dans T.112.133 sont :

```text id="6n4y4o"
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

### Relations et cardinalités

Les relations déterminées dans T.112.141 sont :

```text id="4uc8l9"
VILLE (0,N) ─── habite ─── (1,1) AUTEUR

AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE

CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

Ces résultats sont déjà validés.

Le travail du présent tutoriel consiste à les **assembler**, et non à les redéterminer.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MCD ?

Un **MCD**, ou **Modèle Conceptuel de Données**, représente les réalités, leurs données et les liens entre elles.

Il rassemble :

* les entités ;
* les identifiants ;
* les attributs ;
* les relations ;
* les cardinalités.

Le MCD décrit la structure des données au niveau conceptuel.

Il ne décrit pas encore les tables de la base de données.

### 1.2. Les composants du MCD

| Composant   | Rôle                                      |
| ----------- | ----------------------------------------- |
| Entité      | Représente une réalité                    |
| Identifiant | Distingue les occurrences                 |
| Attribut    | Décrit une entité                         |
| Relation    | Relie des entités                         |
| Cardinalité | Indique le minimum et le maximum de liens |

### 1.3. Construire le MCD à partir des résultats précédents

Pour construire le MCD :

```text id="j1m2x8"
Entités
   ↓
Relations
   ↓
Cardinalités
   ↓
MCD complet
```

Il ne faut pas créer de nouvelles entités ou de nouvelles relations à cette étape.

### 1.4. Lire une relation dans un MCD

Une relation peut être représentée ainsi :

```text id="4qio6z"
ENTITE_A (minimum,maximum)
      ─── verbe ───
ENTITE_B (minimum,maximum)
```

Exemple :

```text id="efzw7m"
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

Lecture :

> Un auteur peut rédiger zéro, un ou plusieurs articles.

> Un article est rédigé par exactement un auteur.

### 1.5. Vérifier les cardinalités

Dans ce tutoriel, les cardinalités ont déjà été déterminées dans T.112.141.

Il ne faut donc pas les modifier pendant l'assemblage.

La vérification consiste à contrôler que le MCD reprend bien les résultats précédents.

### 1.6. Vérifier les attributs

Chaque attribut doit rester dans l'entité déterminée précédemment.

Exemple :

```text id="4uqvgt"
nom_auteur
prenom_auteur
email_auteur
```

restent dans :

```text id="3iw3om"
AUTEUR
```

`nom_ville` reste dans :

```text id="0vwf56"
VILLE
```

### 1.7. Vérifier les données calculées

Une donnée calculée non stockée ne doit pas être ajoutée comme attribut de l'entité.

Dans le dictionnaire :

```text id="4z8x50"
duree_lecture
Stockée = Non
```

Elle n'apparaît donc pas dans le MCD final.

### 1.8. À retenir

* Le MCD rassemble les résultats des étapes précédentes.
* Une entité contient son identifiant et ses attributs.
* Une relation relie deux entités.
* Une cardinalité possède un minimum et un maximum.
* Les cardinalités de T.112.141 sont reprises sans modification.
* Une donnée calculée non stockée ne doit pas être ajoutée au MCD.
* Le MCD est encore un modèle conceptuel ; les tables seront étudiées dans l'UA suivante.

---

## Partie 2 — Pratique

### 2.1. Reprendre les entités

Commencez par reprendre les quatre entités construites dans T.112.133.

### ARTICLE

```text id="6s1xkd"
ARTICLE
-------

id_article
titre_article
contenu_article
date_publication
statut_article
image_article
```

### AUTEUR

```text id="9owqbf"
AUTEUR
------

id_auteur
nom_auteur
prenom_auteur
email_auteur
```

### VILLE

```text id="jk4xkq"
VILLE
-----

id_ville
nom_ville
```

### CATEGORIE

```text id="kb7lkz"
CATEGORIE
---------

id_categorie
nom_categorie
```

### 2.2. Reprendre les relations

Ajoutez ensuite les trois relations validées dans T.112.141.

**Relation 1 :**

```text id="z5zjuc"
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

**Relation 2 :**

```text id="h7n9c3"
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

**Relation 3 :**

```text id="qjmy0g"
CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

### 2.3. Assembler le MCD

Regroupez maintenant les entités et les relations.

Une représentation textuelle simplifiée peut être :

```text id="luqz6y"
VILLE
-----

id_ville
nom_ville

        (0,N)
          |
       habite
          |
        (1,1)

AUTEUR
------

id_auteur
nom_auteur
prenom_auteur
email_auteur

        (0,N)
          |
       rédige
          |
        (1,1)

ARTICLE
-------

id_article
titre_article
contenu_article
date_publication
statut_article
image_article

        (1,1)
          |
       regroupe
          |
        (0,N)

CATEGORIE
---------

id_categorie
nom_categorie
```

Pour faciliter la lecture, la relation `CATEGORIE — ARTICLE` peut également être présentée dans le même sens que les résultats de T.112.141 :

```text id="37ed84"
CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

### 2.4. Vérifier la cohérence du MCD

Vérifiez le résultat avec les questions suivantes :

| Question                                          | Résultat attendu |
| ------------------------------------------------- | ---------------- |
| Les 4 entités sont-elles présentes ?              | Oui              |
| Chaque entité possède-t-elle un identifiant ?     | Oui              |
| Chaque attribut est-il dans la bonne entité ?     | Oui              |
| Les 3 relations sont-elles présentes ?            | Oui              |
| Les cardinalités sont-elles celles de T.112.141 ? | Oui              |
| `duree_lecture` est-elle absente du MCD stocké ?  | Oui              |
| Une nouvelle entité a-t-elle été ajoutée ?        | Non              |
| Une nouvelle relation a-t-elle été ajoutée ?      | Non              |

### 2.5. Lire le MCD complet

À partir du MCD, vérifiez que vous pouvez lire chaque relation.

**AUTEUR — ARTICLE**

```text id="smyb2l"
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

Lecture :

> Un auteur peut rédiger plusieurs articles.

> Un article est rédigé par un seul auteur.

**VILLE — AUTEUR**

```text id="an3azd"
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

Lecture :

> Une ville peut être associée à plusieurs auteurs.

> Un auteur habite dans une seule ville.

**CATEGORIE — ARTICLE**

```text id="6v5i2t"
CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE
```

Lecture :

> Une catégorie peut regrouper plusieurs articles.

> Un article appartient à une seule catégorie.

### 2.6. Travail à faire

Construisez le **MCD complet du Blog** à partir des résultats de :

* T.112.133 — Entités ;
* T.112.141 — Relations et cardinalités.

Votre MCD doit contenir :

* les 4 entités ;
* leurs identifiants ;
* leurs attributs ;
* les 3 relations ;
* les cardinalités des deux côtés.

Ne créez pas de nouvelles relations.

Ne modifiez pas les cardinalités déjà déterminées.

Ne transformez pas encore le MCD en tables.

**Livrable :**

```text id="8hf7ag"
mcd-blog.md
```

Le document doit présenter le MCD complet et sa vérification de cohérence.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.142/mcd-blog.html' | relative_url }}"
    height="650"
    title="Résultat attendu — MCD complet du Blog">
</iframe>

**Critère de réussite :**

Le MCD :

* contient les 4 entités attendues ;
* contient les bons identifiants et attributs ;
* contient les 3 relations attendues ;
* conserve exactement les cardinalités déterminées dans T.112.141 ;
* n'ajoute aucune relation ou entité non prévue ;
* exclut les données calculées non stockées ;
* est lisible et cohérent.

## Bilan

**Vous avez réalisé :**

Le MCD complet du Blog à partir des entités, relations et cardinalités produites dans les tutoriels précédents.

**Vous savez maintenant :**

* assembler un MCD ;
* représenter les entités et leurs attributs ;
* intégrer les relations et cardinalités ;
* lire un MCD ;
* vérifier sa cohérence.

Dans le prochain tutoriel, vous apprendrez à **transformer les entités du MCD en tables relationnelles**.

## Glossaire

* **MCD** : Modèle Conceptuel de Données représentant les entités et leurs relations.
* **Entité** : représentation d'une réalité dans le modèle.
* **Attribut** : donnée qui décrit une entité.
* **Identifiant** : donnée qui permet de distinguer les occurrences d'une entité.
* **Relation** : lien entre deux entités.
* **Cardinalité** : minimum et maximum de liens entre deux entités.
* **Cohérence** : correspondance entre les entités, attributs, relations et cardinalités du modèle.
