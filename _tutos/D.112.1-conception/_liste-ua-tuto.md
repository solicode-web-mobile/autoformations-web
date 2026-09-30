# Plan de formation : D.112.1 — Modéliser les données

**Domaine de compétence :** D.112.1 — Modéliser les données

**Compétence :** C.112 — Modéliser les données

## 1. Objectif général du socle N1

À partir de **maquettes**, l'apprenant apprend progressivement à construire un modèle de données simple.

La progression générale est :

```text
Comprendre les données
        ↓
Identifier les données dans les maquettes
        ↓
Construire le dictionnaire de données
        ↓
Observer les occurrences
        ↓
Repérer les répétitions
        ↓
Découvrir les réalités représentées
        ↓
Rechercher les identifiants
        ↓
Identifier les dépendances
        ↓
Construire les entités
        ↓
Déterminer les relations
        ↓
Déterminer les cardinalités
        ↓
Construire le MCD
        ↓
Transformer le MCD en MLD
```

La progression complète est donc :

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
Réalités représentées
   ↓
Identifiants
   ↓
Dépendances
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

L'idée centrale du socle est de **ne pas demander directement à l'apprenant de deviner les entités**.

L'apprenant apprend à les découvrir progressivement :

```text
Données
   ↓
Observation
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

# UA.112.13 — Découvrir les entités à partir des données

**Objectif :**

À partir du dictionnaire de données et de plusieurs occurrences, apprendre une méthode progressive permettant de **faire apparaître les entités à partir de l'observation des données**.

L'apprenant apprend à :

* observer plusieurs occurrences ;
* repérer les valeurs répétées ;
* comprendre le problème posé par certaines répétitions ;
* rechercher les réalités représentées ;
* rechercher les identifiants ;
* identifier les données qui dépendent d'un identifiant ;
* créer un identifiant lorsqu'une nouvelle réalité doit être distinguée ;
* séparer les groupes de données ;
* remplacer une donnée répétée par l'identifiant de la réalité correspondante ;
* recommencer l'observation jusqu'à obtenir les entités.

La méthode centrale de l'UA est :

```text
Observer
   ↓
Repérer
   ↓
Questionner
   ↓
Identifier
   ↓
Chercher les dépendances
   ↓
Séparer
   ↓
Remplacer
   ↓
Recommencer
   ↓
Construire les entités
```

### Deux chemins de découverte

Une entité peut être découverte de deux façons.

### Chemin 1 — L'identifiant est déjà visible

```text
Identifiant
   ↓
Données qui en dépendent
   ↓
Réalité identifiée
   ↓
Entité
```

Exemple :

```text
id_article
   ↓
titre_article
contenu_article
date_publication
   ↓
ARTICLE
```

### Chemin 2 — L'identifiant n'est pas encore visible

```text
Valeur répétée
   ↓
Observation
   ↓
Problème de répétition
   ↓
Réalité indépendante
   ↓
Création d'un identifiant
   ↓
Dépendance fonctionnelle
   ↓
Entité
```

Exemple :

```text
nom_ville
   ↓
Tanger
Tanger
Rabat
Tanger
   ↓
Ville
   ↓
id_ville
   ↓
id_ville → nom_ville
   ↓
VILLE
```

> **Une répétition est un signal d'observation. Elle n'est pas automatiquement une preuve qu'il faut créer une nouvelle entité.**

## T.112.131 — Observer les occurrences et repérer les répétitions

### Description

L'apprenant observe plusieurs occurrences d'un même ensemble de données et compare leurs valeurs.

Il apprend à :

* reconnaître une occurrence ;
* distinguer une donnée d'une valeur ;
* comparer plusieurs occurrences ;
* repérer une valeur répétée ;
* identifier la donnée qui contient cette répétition ;
* comprendre qu'une répétition peut poser un problème de modification.

Le tutoriel ne demande pas encore de construire une entité.

L'objectif est :

```text
Observer
   ↓
Comparer
   ↓
Repérer les répétitions
```

### Partie théorique

* Occurrence
* Valeur
* Ensemble d'occurrences
* Répétition
* Valeur répétée
* Donnée répétée
* Observation des valeurs
* Différence donnée / valeur
* Problème de modification

### Partie pratique

L'apprenant observe par exemple :

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

Puis il indique :

```text
Donnée : nom_ville

Valeur répétée : Tanger
```

L'apprenant explique ensuite pourquoi cette répétition mérite d'être observée.

---

## T.112.132 — Découvrir une entité à partir d'un identifiant ou d'une répétition

### Description

L'apprenant apprend la méthode centrale de découverte d'une entité.

Il travaille sur deux situations :

```text
Identifiant visible
```

et :

```text
Identifiant non visible + valeur répétée
```

Il apprend à passer progressivement de :

```text
Donnée
   ↓
Valeur
   ↓
Réalité représentée
   ↓
Identifiant
   ↓
Données dépendantes
   ↓
Entité
```

Pour une réalité découverte à partir d'une répétition, il apprend à :

```text
Observer la répétition
   ↓
Identifier la réalité représentée
   ↓
Créer un identifiant
   ↓
Écrire la dépendance
   ↓
Remplacer la valeur répétée par l'identifiant
```

### Partie théorique

* Réalité représentée
* Entité
* Attribut
* Identifiant
* Identifiant existant
* Identifiant à créer
* Donnée déterminante
* Donnée dépendante
* Dépendance fonctionnelle simple
* Séparation d'une réalité
* Remplacement d'une valeur par un identifiant

### Partie pratique

À partir de données comme :

```text
id_article
titre_article
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

l'apprenant :

1. repère `id_article` ;
2. cherche les données déterminées par `id_article` ;
3. observe les répétitions de `nom_auteur` ;
4. découvre la réalité `Auteur` ;
5. observe les répétitions de `nom_ville` ;
6. découvre la réalité `Ville` ;
7. crée `id_ville` ;
8. écrit :

```text
id_ville → nom_ville
```

9. remplace `nom_ville` par `id_ville` dans le groupe d'auteur.

Exemple :

```text
AVANT

AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Puis :

```text
APRÈS

AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
```

et :

```text
VILLE
-----
id_ville
nom_ville
```

### Résultat de l'UA intermédiaire

L'apprenant sait expliquer :

```text
Pourquoi l'entité existe.

Quel est son identifiant.

Quelles données la décrivent.

Pourquoi une donnée répétée a été séparée.

Pourquoi elle a été remplacée par un identifiant.
```

---

## T.112.133 — Construire les entités à partir des données

### Description

L'apprenant applique seul la méthode complète sur un jeu de données.

Il ne reçoit pas directement la liste des entités.

Il doit les découvrir progressivement en utilisant :

```text
identifiants
+
dépendances
+
répétitions
+
réalités représentées
```

La démarche demandée est :

```text
Données
   ↓
Observer
   ↓
Chercher les identifiants
   ↓
Chercher les dépendances
   ↓
Observer les répétitions
   ↓
Découvrir les réalités
   ↓
Créer les identifiants nécessaires
   ↓
Séparer les données
   ↓
Remplacer les valeurs répétées
   ↓
Recommencer
   ↓
Entités finales
```

### Partie théorique

La théorie est une **synthèse de la méthode** :

* Entité
* Attribut
* Identifiant
* Réalité
* Dépendance fonctionnelle
* Groupe de données
* Répétition
* Séparation des réalités
* Identifiant créé
* Remplacement par identifiant
* Vérification d'une entité

### Partie pratique

À partir d'un dictionnaire de données et de plusieurs occurrences, l'apprenant doit découvrir progressivement :

```text
ARTICLE

AUTEUR

VILLE

CATEGORIE
```

Puis construire pour chaque entité :

```text
Entité
   ↓
Identifiant
   ↓
Attributs
   ↓
Dépendances
```

Exemple de résultat :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
id_auteur
id_categorie
```

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
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

Il sait également expliquer **comment chaque entité a été découverte**.

### Important

À la fin de cette UA :

```text
Les entités sont identifiées.
Les attributs sont regroupés.
Les identifiants sont déterminés.
Les principales dépendances sont identifiées.
```

Mais :

```text
Les relations ne sont pas encore construites.
Les cardinalités ne sont pas encore étudiées.
Le MCD n'est pas encore construit.
```

---

# UA.112.14 — Déterminer les relations et construire le MCD

**Objectif :**

À partir des entités découvertes et des informations disponibles dans les maquettes et les données, déterminer les relations, les cardinalités et construire le MCD.

## T.112.141 — Déterminer les relations et les cardinalités

### Description

L'apprenant observe comment les réalités sont liées et traduit ces liens sous forme de relations.

Il apprend à distinguer :

```text
Entités déjà découvertes
        ↓
Lien entre les réalités
        ↓
Relation
        ↓
Cardinalités
```

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

À partir de règles simples :

```text
Un auteur habite dans une ville.

Une ville peut être associée à plusieurs auteurs.
```

l'apprenant construit :

```text
VILLE 1 ───── N AUTEUR
```

Puis il travaille sur :

```text
1–1

1–N

N–N
```

---

## T.112.142 — Construire le MCD complet

### Description

L'apprenant rassemble les entités, les relations et les cardinalités découvertes précédemment afin de produire le MCD complet.

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

|  # | Tutoriel                                                                           | Résultat principal                          |
| -: | ---------------------------------------------------------------------------------- | ------------------------------------------- |
|  1 | **T.112.111 — Distinguer information, donnée et valeur**                           | Comprendre ce qu'est une donnée             |
|  2 | **T.112.112 — Comprendre ce que devient une donnée**                               | Comprendre le rôle d'une donnée             |
|  3 | **T.112.121 — Identifier et décrire les données d'une maquette**                   | Repérer et décrire les données              |
|  4 | **T.112.122 — Construire le dictionnaire de données**                              | Produire le dictionnaire                    |
|  5 | **T.112.131 — Observer les occurrences et repérer les répétitions**                | Observer les occurrences et les répétitions |
|  6 | **T.112.132 — Découvrir une entité à partir d'un identifiant ou d'une répétition** | Apprendre la méthode de découverte          |
|  7 | **T.112.133 — Construire les entités à partir des données**                        | Construire plusieurs entités                |
|  8 | **T.112.141 — Déterminer les relations et les cardinalités**                       | Déterminer les relations                    |
|  9 | **T.112.142 — Construire le MCD complet**                                          | Produire le MCD                             |
| 10 | **T.112.151 — Transformer les entités en tables**                                  | Transformer les entités en tables           |
| 11 | **T.112.152 — Transformer les relations en clés étrangères**                       | Définir les clés étrangères                 |
| 12 | **T.112.153 — Transformer le MCD complet en MLD**                                  | Produire le MLD                             |

---

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
Observer les occurrences et repérer les répétitions
        ↓
T.112.132
Découvrir une entité à partir d'un identifiant ou d'une répétition
        ↓
T.112.133
Construire les entités à partir des données
        ↓
T.112.141
Déterminer les relations et les cardinalités
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

---

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

DÉCOUVRIR ET STRUCTURER

« Quelles valeurs observe-t-on ? »

« Quelles valeurs se répètent ? »

« Que représentent ces répétitions ? »

« Quel identifiant permet d'identifier cette réalité ? »

« Quelles données dépendent de cet identifiant ? »

« Comment organiser les données en entités ? »

        ↓

UA.112.14

RELIER

« Comment les entités sont-elles liées ? »

« Quelles sont les cardinalités ? »

        ↓

UA.112.15

TRANSFORMER

« Comment transformer le MCD en tables ? »

« Comment transformer les relations en clés étrangères ? »
```

---

# Principe pédagogique du socle N1

La progression suit une montée en abstraction :

```text
1. Je comprends une donnée.
        ↓
2. Je repère une donnée.
        ↓
3. Je décris une donnée.
        ↓
4. Je construis un dictionnaire.
        ↓
5. J'observe plusieurs occurrences.
        ↓
6. Je repère les répétitions.
        ↓
7. Je cherche ce que représentent les données.
        ↓
8. Je recherche les identifiants.
        ↓
9. J'identifie les dépendances.
        ↓
10. Je construis les entités.
        ↓
11. Je relie les entités.
        ↓
12. Je construis le MCD.
        ↓
13. Je transforme le MCD en MLD.
```

---

# Méthode centrale pour découvrir les entités

La méthode enseignée dans l'UA.112.13 est résumée ainsi :

```text
                         DONNÉES
                            ↓
                       OBSERVER
                            ↓
                ┌───────────┴───────────┐
                ↓                       ↓
      IDENTIFIANT VISIBLE       VALEUR RÉPÉTÉE
                ↓                       ↓
      Données dépendantes        Observer la répétition
                ↓                       ↓
           RÉALITÉ              Chercher la réalité
                ↓                       ↓
             ENTITÉ             Identifiant à créer
                                        ↓
                                  Dépendance
                                        ↓
                                      ENTITÉ
                └───────────┬───────────┘
                            ↓
                       SÉPARER
                            ↓
                Remplacer les valeurs
                    par les identifiants
                            ↓
                       RECOMMENCER
                            ↓
                   ENTITÉS FINALES
```

Cette méthode devient donc la **charnière pédagogique entre le dictionnaire de données et le MCD**.

L'apprenant ne passe plus directement de :

```text
Dictionnaire → Entités
```

mais de :

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
    ↓
Relations
    ↓
Cardinalités
    ↓
MCD
    ↓
MLD
```

Ainsi, **« trouver les données dans une maquette » appartient à UA.112.12**, **« observer et interpréter le comportement des données pour découvrir les entités » appartient à UA.112.13**, **« relier les entités » appartient à UA.112.14**, et **« transformer le modèle conceptuel en modèle relationnel » appartient à UA.112.15**.
