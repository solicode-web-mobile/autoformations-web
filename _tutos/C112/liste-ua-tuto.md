# 12 tutoriels du socle N1 — Modéliser les données

**Domaine de compétence :** D.112.1 — Modéliser les données
**Compétence :** C.112 — Modéliser les données

La progression part désormais **des maquettes** et non d'un besoin fonctionnel textuel.

```text
Maquette
   ↓
Données
   ↓
Dictionnaire de données
   ↓
Occurrences
   ↓
Répétitions
   ↓
Réalités métier
   ↓
Identifiants et dépendances
   ↓
Entités
   ↓
Relations
   ↓
Cardinalités
   ↓
MCD
   ↓
MLD
```

---

# UA.112.11 — Comprendre le rôle des données

**Objectif :** À partir de maquettes, identifier les données manipulées par l'application et comprendre leur rôle.

## T.112.111 — Observer et identifier les données d'une application

### Description

L'apprenant observe une maquette et repère les informations manipulées par l'application. Il apprend à distinguer une donnée de sa valeur concrète.

### Partie théorique

* Information
* Donnée
* Donnée métier
* Valeur d'une donnée
* Donnée visible
* Donnée saisie
* Différence donnée / valeur

### Partie pratique

À partir d'une maquette de Blog, l'apprenant identifie les données :

```text
titre_article
contenu_article
nom_auteur
nom_categorie
```

et leurs valeurs.

---

## T.112.112 — Identifier les données à conserver

### Description

L'apprenant observe plusieurs maquettes d'une même application afin de comprendre quelles données sont saisies, affichées, calculées et conservées.

### Partie théorique

* Donnée saisie
* Donnée affichée
* Donnée stockée
* Donnée persistante
* Donnée temporaire
* Donnée calculée
* Stockage
* Base de données

### Partie pratique

À partir de plusieurs écrans :

```text
Créer un article
Liste des articles
Détail d'un article
```

l'apprenant identifie le rôle des données et détermine celles qui doivent être conservées.

---

# UA.112.12 — Construire le dictionnaire de données

**Objectif :** À partir des informations observées dans les maquettes, identifier et décrire les données nécessaires.

## T.112.121 — Identifier et décrire les données d'une maquette

### Description

L'apprenant extrait les données visibles d'une maquette et les décrit.

### Partie théorique

* Donnée
* Nom de donnée
* Description
* Exemple de valeur
* Type conceptuel
* Donnée obligatoire
* Donnée facultative
* Types : Texte, Entier, Nombre décimal, Date, Booléen

### Partie pratique

À partir d'une maquette, il construit une première description :

| Donnée             | Description          | Exemple     | Type  | Obligatoire |
| ------------------ | -------------------- | ----------- | ----- | ----------- |
| `titre_article`    | Titre de l'article   | Mon article | Texte | Oui         |
| `contenu_article`  | Contenu de l'article | Texte...    | Texte | Oui         |
| `date_publication` | Date de publication  | 16/09/2026  | Date  | Oui         |

---

## T.112.122 — Construire le dictionnaire de données

### Description

L'apprenant regroupe et structure les données observées dans plusieurs maquettes afin de construire un dictionnaire complet et cohérent.

### Partie théorique

* Dictionnaire de données
* Structure du dictionnaire
* Cohérence des noms
* Cohérence des types
* Exemple de valeur
* Donnée obligatoire / facultative
* Donnée stockée / calculée
* Différence entre dictionnaire de données et entité

### Partie pratique

À partir de plusieurs maquettes du Blog, l'apprenant construit seul le dictionnaire complet.

**Livrable :**

```text
dictionnaire-donnees.csv
```

---

# UA.112.13 — Découvrir les dépendances et construire les entités

**Objectif :** À partir du dictionnaire et de plusieurs exemples de valeurs observés dans les maquettes, découvrir les réalités métier, les identifiants, les dépendances et les entités.

## T.112.131 — Observer les occurrences et repérer les répétitions

### Description

L'apprenant compare plusieurs occurrences de données provenant de maquettes ou d'exemples d'affichage afin de repérer les répétitions.

### Partie théorique

* Occurrence
* Valeur
* Ensemble d'occurrences
* Répétition
* Donnée répétée
* Observation des valeurs
* Différence donnée / occurrence

### Partie pratique

L'apprenant observe :

| nom_auteur | email_auteur                                | nom_ville |
| ---------- | ------------------------------------------- | --------- |
| Madani     | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
| Sara       | [sara@mail.com](mailto:sara@mail.com)       | Tanger    |
| Youssef    | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     |
| Amine      | [amine@mail.com](mailto:amine@mail.com)     | Tanger    |

Il repère notamment :

```text
Tanger
Tanger
Rabat
Tanger
```

et identifie les valeurs répétées.

---

## T.112.132 — Découvrir les réalités, les identifiants et les dépendances

### Description

L'apprenant analyse ce que chaque donnée décrit réellement, distingue les réalités métier et cherche les identifiants permettant d'identifier leurs occurrences.

### Partie théorique

* Réalité métier
* Propriété / caractéristique
* Entité
* Attribut
* Identifiant
* Identifiant existant
* Identifiant à créer
* Donnée déterminante
* Donnée dépendante
* Dépendance fonctionnelle simple

### Partie pratique

À partir de :

```text
nom_auteur
email_auteur
nom_ville
```

l'apprenant se demande :

```text
Que décrit cette donnée ?
        ↓
Quelle réalité représente-t-elle ?
        ↓
Comment identifier cette réalité ?
        ↓
Quelles données dépendent de cet identifiant ?
```

Il découvre :

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

et :

```text
id_auteur → nom_auteur, email_auteur
id_ville  → nom_ville
```

---

## T.112.133 — Construire les entités à partir des données

### Description

L'apprenant réutilise la démarche précédente sur un nouveau jeu de données et construit seul les entités sans qu'elles soient fournies.

### Partie théorique

* Entité
* Attribut
* Identifiant
* Propriété
* Dépendance fonctionnelle
* Séparation des réalités
* Identifiant créé
* Référence à une autre réalité

### Partie pratique

À partir d'un dictionnaire et de plusieurs occurrences, l'apprenant doit découvrir :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

puis leurs attributs et identifiants.

**Livrable :**

```text
entites.md
```

---

# UA.112.14 — Déterminer les relations et construire le MCD

**Objectif :** À partir des entités découvertes et des informations fournies par les maquettes, déterminer les relations, les cardinalités et construire le MCD.

## T.112.141 — Déterminer les relations et les cardinalités

### Description

L'apprenant observe plusieurs maquettes et les informations qu'elles présentent pour comprendre comment les entités sont liées, puis détermine les cardinalités à partir des règles déduites.

### Partie théorique

* Règle de gestion
* Relation
* Association
* Entités participantes
* Verbe métier
* Cardinalité
* Minimum / maximum
* 1–1
* 1–N
* N–N

### Partie pratique

À partir des informations observées :

> Un auteur habite dans une ville.
> Une ville peut être associée à plusieurs auteurs.

L'apprenant construit :

```text
VILLE 1 ───── N AUTEUR
```

Puis travaille sur des exemples 1–1, 1–N et N–N.

---

## T.112.142 — Construire le MCD complet

### Description

L'apprenant rassemble les entités, relations et cardinalités découvertes précédemment pour construire le MCD complet du modèle étudié.

### Partie théorique

* MCD
* Entité
* Attribut
* Identifiant
* Association
* Cardinalité
* Lecture d'un MCD
* Cohérence d'un MCD

### Partie pratique

À partir des résultats précédents, l'apprenant construit un MCD complet :

```text
VILLE 1 ───── N AUTEUR

AUTEUR 1 ───── N ARTICLE

CATEGORIE 1 ───── N ARTICLE
```

**Livrable :**

```text
mcd-blog
```

---

# UA.112.15 — Construire le MLD

**Objectif :** Transformer le MCD en modèle relationnel composé de tables, colonnes et clés.

## T.112.151 — Transformer les entités en tables

### Description

L'apprenant découvre la transformation d'une entité du MCD en table relationnelle et identifie les clés primaires.

### Partie théorique

* MLD
* Table
* Colonne
* Ligne / enregistrement
* Clé primaire
* Entité → table
* Attribut → colonne
* Identifiant → clé primaire

### Partie pratique

À partir de :

```text
VILLE
-----
id_ville
nom_ville
```

l'apprenant construit :

```text
VILLE
-----
id_ville PK
nom_ville
```

Puis il transforme les autres entités de son MCD.

---

## T.112.152 — Transformer les relations en clés étrangères

### Description

L'apprenant apprend à transformer une relation 1–N du MCD en clé étrangère dans le MLD.

### Partie théorique

* Clé étrangère
* Référence
* Relation 1–N
* Clé primaire
* Table référencée
* Table contenant la clé étrangère
* Référence PK → FK

### Partie pratique

À partir de :

```text
VILLE 1 ───── N AUTEUR
```

il produit :

```text
VILLE
-----
id
nom
```

```text
AUTEUR
------
id
nom
email
ville_id
```

avec :

```text
auteur.ville_id → ville.id
```

---

## T.112.153 — Transformer le MCD complet en MLD

### Description

L'apprenant réalise seul la transformation complète du MCD en MLD, y compris les relations N–N et les tables de liaison.

### Partie théorique

* Transformation MCD → MLD
* Table
* Colonne
* Clé primaire
* Clé étrangère
* Relation 1–N
* Relation N–N
* Table de liaison
* Clés étrangères dans une table de liaison
* Clé composée, seulement si nécessaire

### Partie pratique

À partir du MCD complet du Blog, l'apprenant produit :

```text
ARTICLE
-------
id
titre
contenu
auteur_id
categorie_id
```

```text
AUTEUR
------
id
nom
email
ville_id
```

```text
VILLE
-----
id
nom
```

```text
CATEGORIE
---------
id
nom
description
```

Puis, pour :

```text
ARTICLE N ───── N TAG
```

il construit :

```text
ARTICLE_TAG
-----------
article_id
tag_id
```

**Livrable :**

```text
mld-blog
```

---

# Vue d'ensemble des 12 tutoriels

|  # | Tutoriel                                                                    | Résultat principal                             |
| -: | --------------------------------------------------------------------------- | ---------------------------------------------- |
|  1 | **T.112.111 — Observer et identifier les données d'une application**        | Identifier les données à partir d'une maquette |
|  2 | **T.112.112 — Identifier les données à conserver**                          | Comprendre le rôle des données                 |
|  3 | **T.112.121 — Identifier et décrire les données d'une maquette**            | Décrire les données                            |
|  4 | **T.112.122 — Construire le dictionnaire de données**                       | Produire un dictionnaire complet               |
|  5 | **T.112.131 — Observer les occurrences et repérer les répétitions**         | Repérer les répétitions                        |
|  6 | **T.112.132 — Découvrir les réalités, les identifiants et les dépendances** | Découvrir les réalités et dépendances          |
|  7 | **T.112.133 — Construire les entités à partir des données**                 | Construire les entités                         |
|  8 | **T.112.141 — Déterminer les relations et les cardinalités**                | Déterminer les relations et cardinalités       |
|  9 | **T.112.142 — Construire le MCD complet**                                   | Produire le MCD                                |
| 10 | **T.112.151 — Transformer les entités en tables**                           | Transformer les entités en tables              |
| 11 | **T.112.152 — Transformer les relations en clés étrangères**                | Définir les FK                                 |
| 12 | **T.112.153 — Transformer le MCD complet en MLD**                           | Produire le MLD complet                        |

### Progression pédagogique finale

```text
T.112.111
Observer la maquette
        ↓
T.112.112
Comprendre le rôle des données
        ↓
T.112.121
Identifier et décrire les données
        ↓
T.112.122
Construire le dictionnaire
        ↓
T.112.131
Observer les occurrences
        ↓
T.112.132
Découvrir les réalités et dépendances
        ↓
T.112.133
Construire les entités
        ↓
T.112.141
Déterminer les relations et cardinalités
        ↓
T.112.142
Construire le MCD
        ↓
T.112.151
Transformer les entités en tables
        ↓
T.112.152
Transformer les relations en FK
        ↓
T.112.153
Construire le MLD
```

Ainsi, **la maquette reste le point de départ de toute la progression** : l'apprenant ne reçoit pas les entités, les relations ou le MCD déjà construits ; il les découvre progressivement à partir de ce qu'il observe.
