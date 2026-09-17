#  Plan de formation  : D.112.1 — Modéliser les données

**Domaine de compétence :** D.112.1 — Modéliser les données

**Compétence :** C.112 — Modéliser les données

## 1. Objectif général du socle N1

À partir de **maquettes**, l'apprenant apprend progressivement à :

```text
Comprendre les données
        ↓
Identifier les données dans les maquettes
        ↓
Construire le dictionnaire de données
        ↓
Observer les occurrences et les répétitions
        ↓
Découvrir les réalités représentées
        ↓
Identifier les dépendances et les entités
        ↓
Déterminer les relations
        ↓
Construire le MCD
        ↓
Transformer le MCD en MLD
```

La progression reste donc :

```text
Maquette
   ↓
Compréhension de la donnée
   ↓
Données
   ↓
Dictionnaire de données
   ↓
Occurrences
   ↓
Répétitions
   ↓
Réalités
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

**Objectif :**

Comprendre ce qu'est une donnée, distinguer une donnée de sa valeur et comprendre les principaux rôles d'une donnée dans une application.

> Dans cette UA, l'apprenant **n'apprend pas encore à extraire les données d'une maquette**.
> La maquette peut servir de contexte, mais l'objectif est de comprendre le concept de donnée.

## T.112.111 — Distinguer information, donnée et valeur

### Description

L'apprenant découvre la différence entre une information, une donnée et la valeur d'une donnée.

Il apprend à répondre à deux questions :

```text
Qu'est-ce que la donnée ?
Quelle est sa valeur ?
```

### Partie théorique

* Information
* Donnée
* Valeur d'une donnée
* Différence donnée / valeur

### Exemple

```text
titre_article
        ↓
Mon premier article
```

* `titre_article` = donnée
* `Mon premier article` = valeur de la donnée
* « Le titre de l'article est Mon premier article » = information

### Partie pratique

À partir de plusieurs exemples :

```text
nom_auteur → Madani Ali

email_auteur → madani@mail.com

date_publication → 16/09/2026

nombre_articles → 5
```

L'apprenant doit distinguer :

```text
donnée
valeur
information
```

---

## T.112.112 — Comprendre ce que devient une donnée

### Description

L'apprenant comprend qu'une donnée peut être saisie, affichée, utilisée, calculée et conservée par une application.

### Partie théorique

* Donnée saisie
* Donnée visible / affichée
* Donnée stockée
* Donnée persistante
* Donnée temporaire
* Donnée calculée
* Stockage
* Base de données

### Partie pratique

À partir de situations simples, l'apprenant suit le parcours d'une donnée.

Exemple :

```text
Madani saisit son nom
        ↓
L'application utilise la donnée
        ↓
L'application affiche son nom
        ↓
L'application enregistre son nom
        ↓
Le nom peut être réutilisé plus tard
```

L'apprenant identifie le rôle de la donnée à chaque étape.

### Résultat de l'UA

L'apprenant sait :

* expliquer ce qu'est une donnée ;
* distinguer une donnée de sa valeur ;
* distinguer information, donnée et valeur ;
* reconnaître une donnée saisie ;
* reconnaître une donnée affichée ;
* comprendre qu'une donnée peut être stockée et réutilisée.

**Important :**

L'apprenant ne construit pas encore de dictionnaire et ne cherche pas encore systématiquement les données dans une maquette.

---

# UA.112.12 — Construire le dictionnaire de données

**Objectif :**

À partir de **maquettes**, identifier, nommer, décrire et organiser les données nécessaires à l'application.

> C'est dans cette UA que l'apprenant apprend réellement :
>
> **Maquette → observer → repérer les données → les nommer → les décrire.**

## T.112.121 — Identifier et décrire les données d'une maquette

### Description

L'apprenant observe une maquette et repère les données visibles ou manipulées par l'écran.

Il apprend à transformer ce qu'il voit dans la maquette en données clairement nommées.

### Partie théorique

* Donnée
* Nom de donnée
* Description
* Exemple de valeur
* Type conceptuel
* Donnée obligatoire
* Donnée facultative
* Texte
* Entier
* Nombre décimal
* Date
* Booléen

### Partie pratique

À partir d'une maquette du Blog, l'apprenant repère les données :

```text
titre_article
contenu_article
date_publication
nom_auteur
nom_categorie
```

Puis il commence à les décrire :

| Donnée             | Description          | Exemple     | Type  | Obligatoire |
| ------------------ | -------------------- | ----------- | ----- | ----------- |
| `titre_article`    | Titre de l'article   | Mon article | Texte | Oui         |
| `contenu_article`  | Contenu de l'article | Texte...    | Texte | Oui         |
| `date_publication` | Date de publication  | 16/09/2026  | Date  | Oui         |

---

## T.112.122 — Construire le dictionnaire de données

### Description

L'apprenant regroupe les données identifiées dans plusieurs maquettes et construit un dictionnaire de données cohérent.

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

À partir de plusieurs maquettes du Blog :

```text
Créer un article
Liste des articles
Détail d'un article
```

l'apprenant :

1. identifie les données ;
2. regroupe les données identiques ;
3. harmonise les noms ;
4. complète les descriptions ;
5. indique les types ;
6. indique les données obligatoires ou facultatives ;
7. distingue les données stockées des données calculées.

### Livrable

```text
dictionnaire-donnees.csv
```

### Résultat de l'UA

L'apprenant sait passer de :

```text
Maquette
    ↓
Données observées
    ↓
Données nommées et décrites
    ↓
Dictionnaire de données
```

---

# UA.112.13 — Découvrir les dépendances et construire les entités

**Objectif :**

À partir du dictionnaire de données et de plusieurs occurrences, découvrir ce que les données représentent réellement, repérer les répétitions, identifier les réalités, les identifiants, les dépendances et construire les entités.

> C'est ici que l'apprenant commence à raisonner sur le **métier** et les **réalités représentées par les données**.

## T.112.131 — Observer les occurrences et repérer les répétitions

### Description

L'apprenant compare plusieurs valeurs d'un même ensemble de données afin de repérer les occurrences et les répétitions.

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

Il repère :

```text
Tanger
Tanger
Rabat
Tanger
```

puis identifie les valeurs répétées.

---

## T.112.132 — Découvrir les réalités, les identifiants et les dépendances

### Description

L'apprenant cherche à comprendre ce que les données décrivent réellement.

Il passe progressivement de :

```text
Donnée
   ↓
Ce qu'elle décrit
   ↓
Réalité représentée
   ↓
Identifiant
   ↓
Données qui en dépendent
```

### Partie théorique

* Réalité métier
* Donnée métier
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

Il découvre progressivement :

```text
AUTEUR
------
id_auteur
nom_auteur
email_auteur

VILLE
----
id_ville
nom_ville
```

Puis :

```text
id_auteur → nom_auteur, email_auteur

id_ville → nom_ville
```

---

## T.112.133 — Construire les entités à partir des données

### Description

L'apprenant réutilise la démarche sur un nouveau jeu de données et construit seul les entités.

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

À partir d'un dictionnaire et de plusieurs occurrences, l'apprenant découvre :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

puis construit pour chaque entité :

```text
Entité
   ↓
Identifiant
   ↓
Attributs
```

### Livrable

```text
entites.md
```

### Résultat de l'UA

L'apprenant sait passer de :

```text
Dictionnaire
    ↓
Occurrences
    ↓
Répétitions
    ↓
Réalités
    ↓
Identifiants
    ↓
Dépendances
    ↓
Entités
```

---

# UA.112.14 — Déterminer les relations et construire le MCD

**Objectif :**

À partir des entités découvertes et des informations fournies par les maquettes, déterminer les relations, les cardinalités et construire le MCD.

## T.112.141 — Déterminer les relations et les cardinalités

### Description

L'apprenant observe comment les réalités sont liées et traduit ces liens sous forme de relations.

### Partie théorique

* Règle de gestion
* Relation
* Association
* Entités participantes
* Verbe métier
* Cardinalité
* Minimum
* Maximum
* 1–1
* 1–N
* N–N

### Partie pratique

À partir d'une règle telle que :

```text
Un auteur habite dans une ville.
Une ville peut être associée à plusieurs auteurs.
```

l'apprenant construit :

```text
VILLE 1 ───── N AUTEUR
```

Puis il travaille sur des exemples :

```text
1–1
1–N
N–N
```

---

## T.112.142 — Construire le MCD complet

### Description

L'apprenant rassemble les entités, relations et cardinalités découvertes précédemment pour produire le MCD complet.

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

À partir des résultats précédents :

```text
VILLE 1 ───── N AUTEUR

AUTEUR 1 ───── N ARTICLE

CATEGORIE 1 ───── N ARTICLE
```

l'apprenant construit le MCD complet du Blog.

### Livrable

```text
mcd-blog
```

---

# UA.112.15 — Construire le MLD

**Objectif :**

Transformer le MCD en modèle relationnel composé de tables, colonnes et clés.

## T.112.151 — Transformer les entités en tables

### Description

L'apprenant découvre comment transformer une entité du MCD en table relationnelle et comment identifier la clé primaire.

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

l'apprenant produit :

```text
VILLE
-----
id_ville PK
nom_ville
```

Puis transforme les autres entités de son MCD.

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

et :

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

L'apprenant réalise seul la transformation complète du MCD en MLD, y compris les relations N–N.

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

Puis, pour une relation :

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

### Livrable

```text
mld-blog
```

---

# Vue d'ensemble des 12 tutoriels

|  # | Tutoriel                                                                    | Résultat principal                     |
| -: | --------------------------------------------------------------------------- | -------------------------------------- |
|  1 | **T.112.111 — Distinguer information, donnée et valeur**                    | Comprendre ce qu'est une donnée        |
|  2 | **T.112.112 — Comprendre ce que devient une donnée**                        | Comprendre le rôle d'une donnée        |
|  3 | **T.112.121 — Identifier et décrire les données d'une maquette**            | Extraire et décrire les données        |
|  4 | **T.112.122 — Construire le dictionnaire de données**                       | Produire le dictionnaire               |
|  5 | **T.112.131 — Observer les occurrences et repérer les répétitions**         | Repérer les occurrences et répétitions |
|  6 | **T.112.132 — Découvrir les réalités, les identifiants et les dépendances** | Comprendre les réalités et dépendances |
|  7 | **T.112.133 — Construire les entités à partir des données**                 | Construire les entités                 |
|  8 | **T.112.141 — Déterminer les relations et les cardinalités**                | Déterminer les relations               |
|  9 | **T.112.142 — Construire le MCD complet**                                   | Produire le MCD                        |
| 10 | **T.112.151 — Transformer les entités en tables**                           | Transformer les entités en tables      |
| 11 | **T.112.152 — Transformer les relations en clés étrangères**                | Définir les clés étrangères            |
| 12 | **T.112.153 — Transformer le MCD complet en MLD**                           | Produire le MLD                        |

# Progression pédagogique finale

```text
T.112.111
Distinguer information, donnée et valeur
        ↓
T.112.112
Comprendre ce que devient une donnée
        ↓
T.112.121
Identifier et décrire les données d'une maquette
        ↓
T.112.122
Construire le dictionnaire de données
        ↓
T.112.131
Observer les occurrences et les répétitions
        ↓
T.112.132
Découvrir les réalités, identifiants et dépendances
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
Transformer les relations en clés étrangères
        ↓
T.112.153
Construire le MLD
```

# Règle de séparation entre les UA

```text
UA.112.11
COMPRENDRE
« Qu'est-ce qu'une donnée ? »
« Quelle est sa valeur ? »
« Quel rôle joue-t-elle ? »

        ↓

UA.112.12
IDENTIFIER ET DÉCRIRE
« Quelles sont les données présentes dans la maquette ? »
« Comment les nommer et les décrire ? »

        ↓

UA.112.13
INTERPRÉTER ET STRUCTURER
« Que représentent réellement ces données ? »
« Quelles réalités peut-on distinguer ? »
« Quelles données dépendent d'un identifiant ? »

        ↓

UA.112.14
RELIER
« Comment les entités sont-elles liées ? »

        ↓

UA.112.15
TRANSFORMER
« Comment transformer le MCD en tables ? »
```

# Principe pédagogique du socle N1

La progression suit une montée en abstraction :

```text
1. Je comprends une donnée.
        ↓
2. Je repère une donnée.
        ↓
3. Je décris une donnée.
        ↓
4. Je regroupe les données.
        ↓
5. J'observe les valeurs.
        ↓
6. Je comprends ce que les données représentent.
        ↓
7. Je construis les entités.
        ↓
8. Je relie les entités.
        ↓
9. Je construis le MCD.
        ↓
10. Je transforme le MCD en MLD.
```

Ainsi, **« trouver les données dans une maquette » appartient exclusivement à UA.112.12**, tandis que **« comprendre ce qu'est une donnée » appartient à UA.112.11**, et **« comprendre ce que les données représentent réellement » commence dans UA.112.13**.
