# UA.112.13 — Découvrir les entités par observation des données

## 1. Objectif de l'UA

À partir d'un **dictionnaire de données** et de plusieurs **occurrences**, l'apprenant apprend une méthode simple et progressive permettant de découvrir les entités avant de construire le MCD.

L'objectif n'est pas de demander directement :

> « Quelles sont les entités ? »

L'apprenant apprend plutôt à les **faire apparaître progressivement** à partir des données.

La démarche est :

```text
Dictionnaire de données
        ↓
Observer plusieurs occurrences
        ↓
Repérer les valeurs répétées
        ↓
Comprendre le problème de répétition
        ↓
Rechercher un identifiant
        ↓
Identifier les données qui dépendent de cet identifiant
        ↓
Découvrir une réalité indépendante
        ↓
Créer son identifiant si nécessaire
        ↓
Regrouper les données dépendantes
        ↓
Remplacer les valeurs répétées par l'identifiant
        ↓
Recommencer
        ↓
Construire les entités
```

L'apprenant apprend donc une **méthode de découverte des entités**, et non une simple liste de règles de modélisation.

---

## 2. Problème pédagogique traité

Les débutants rencontrent souvent le problème suivant :

```text
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Ils considèrent naturellement :

```text
nom_ville
```

comme un simple attribut de l'auteur.

Ils ne voient pas immédiatement que les données peuvent représenter plusieurs réalités :

```text
Auteur
Ville
```

La difficulté vient du fait que l'entité `Ville` n'est pas toujours visible directement dans le dictionnaire.

L'apprenant doit donc apprendre à la **déduire du comportement des données**.

---

## 3. Principe pédagogique de l'UA

L'UA repose sur un principe central :

> **On ne demande pas d'abord à l'apprenant de trouver les entités. On lui apprend à rechercher les identifiants, les dépendances et les répétitions qui permettent de faire apparaître les entités.**

L'apprenant doit comprendre progressivement :

```text
Une entité est une réalité que l'application doit pouvoir identifier et gérer.
```

Mais au lieu de partir directement de cette définition abstraite, il l'apprend par une situation concrète.

Exemple :

```text
Tanger
Tanger
Rabat
Tanger
```

La répétition attire l'attention.

On demande :

> Pourquoi la même information apparaît-elle plusieurs fois ?

Puis :

> Est-ce que cette information représente quelque chose que nous pourrions gérer séparément ?

Puis :

> Comment identifier une ville ?

On crée :

```text
id_ville
```

Puis :

```text
id_ville → nom_ville
```

L'apprenant découvre alors :

```text
VILLE
------
id_ville
nom_ville
```

L'entité n'a donc pas été « donnée » à l'apprenant.

Elle a été **découverte par raisonnement**.

---

# 4. Définitions à apprendre dans cette UA

Avant d'appliquer la méthode, l'apprenant doit comprendre quelques notions.

## 4.1. Occurrence

Une occurrence est un exemple concret d'un ensemble de données.

Exemple :

```text
Madani | madani@mail.com | Tanger
Sara   | sara@mail.com   | Tanger
Youssef| youssef@mail.com| Rabat
```

Chaque ligne correspond à une occurrence.

---

## 4.2. Répétition

Une répétition apparaît lorsqu'une même valeur apparaît plusieurs fois.

Exemple :

```text
Tanger
Tanger
Rabat
Tanger
```

`Tanger` est une valeur répétée.

La répétition n'est pas automatiquement une preuve qu'il faut créer une entité.

Elle constitue un **signal qui déclenche une nouvelle observation**.

---

## 4.3. Identifiant

Un identifiant permet de reconnaître une occurrence précise.

Exemple :

```text
id_article
id_auteur
id_ville
id_categorie
```

L'identifiant constitue le point de départ pour rechercher les données qui décrivent la même réalité.

---

## 4.4. Dépendance fonctionnelle

Une dépendance fonctionnelle signifie qu'une donnée permet de déterminer une autre donnée.

Exemple :

```text
id_ville → nom_ville
```

Cela signifie :

> Pour une valeur donnée de `id_ville`, il existe une seule valeur de `nom_ville`.

L'apprenant doit retenir une formulation simple :

> **L'identifiant détermine les données qui décrivent l'entité.**

---

## 4.5. Réalité représentée

Une réalité est ce que les données permettent de représenter ou de gérer.

Exemple :

```text
id_ville
nom_ville
```

représentent :

```text
VILLE
```

De même :

```text
id_categorie
nom_categorie
```

représentent :

```text
CATEGORIE
```

Cette notion doit rester concrète. On évite d'introduire une définition philosophique ou trop abstraite de la « réalité métier ».

---

## 4.6. Entité

Une entité est une réalité que l'application doit pouvoir identifier et gérer.

Exemple :

```text
VILLE
------
id_ville
nom_ville
```

ou :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
```

---

# 5. La méthode de découverte des entités

L'UA doit enseigner une procédure stable que l'apprenant pourra réutiliser.

## Étape 1 — Vérifier les données à conserver

L'apprenant commence par distinguer :

```text
données stockées
données calculables
```

Exemple :

```text
duree_lecture
```

peut être calculable.

L'apprenant ne l'utilise donc pas pour construire une entité.

---

## Étape 2 — Chercher les identifiants déjà visibles

L'apprenant cherche d'abord les données capables d'identifier une occurrence.

Exemple :

```text
id_article
```

Il recherche alors les données qui en dépendent :

```text
id_article →
    titre_article
    contenu_article
    date_publication
    statut_article
    image_article
```

Il découvre progressivement :

```text
ARTICLE
```

L'idée à retenir est :

```text
Identifiant
    ↓
Données dépendantes
    ↓
Groupe cohérent
    ↓
Entité
```

---

## Étape 3 — Lorsque l'identifiant n'est pas visible, observer les répétitions

Supposons que le dictionnaire contient :

```text
nom_ville
```

mais pas :

```text
id_ville
```

L'apprenant observe plusieurs occurrences :

```text
Madani    → Tanger
Sara      → Tanger
Youssef   → Rabat
Amine     → Tanger
```

Il constate :

```text
Tanger
Tanger
Rabat
Tanger
```

Il doit alors se poser une question :

> Pourquoi la même information est-elle enregistrée plusieurs fois ?

---

## Étape 4 — Comprendre le problème de la répétition

L'apprenant étudie un cas de modification.

Supposons que :

```text
Tanger
```

doive être corrigé.

La même valeur apparaît dans plusieurs occurrences.

L'apprenant comprend alors :

```text
Même information
        ↓
Répétée plusieurs fois
        ↓
Plusieurs occurrences à modifier
        ↓
Risque d'incohérence
```

Le but n'est pas encore d'enseigner en détail la normalisation.

L'objectif N1 est plus simple :

> **Éviter d'enregistrer inutilement plusieurs fois une même réalité.**

---

## Étape 5 — Rechercher ce que représente la donnée répétée

L'apprenant ne doit pas s'arrêter à :

```text
Tanger
```

Il doit rechercher :

```text
Qu'est-ce que Tanger représente ?
```

Réponse :

```text
Une ville
```

On passe donc de :

```text
nom_ville
```

à :

```text
VILLE
```

---

## Étape 6 — Créer un identifiant pour cette nouvelle réalité

La nouvelle réalité doit pouvoir être identifiée.

On crée :

```text
id_ville
```

Puis on recherche la donnée qui dépend de cet identifiant :

```text
id_ville → nom_ville
```

L'apprenant peut maintenant construire :

```text
VILLE
------
id_ville
nom_ville
```

---

## Étape 7 — Remplacer la donnée répétée par l'identifiant

Avant :

```text
AUTEUR
------
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Après la découverte de `Ville` :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
```

Et :

```text
VILLE
------
id_ville
nom_ville
```

L'apprenant comprend donc une règle essentielle :

> **Lorsqu'une réalité devient indépendante, les autres groupes de données ne conservent plus sa valeur descriptive ; ils conservent son identifiant.**

---

## Étape 8 — Recommencer

La méthode fonctionne par itérations.

Après avoir découvert `Ville`, l'apprenant revient aux données restantes.

Exemple :

```text
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
email_auteur
id_ville
nom_categorie
```

Il observe de nouveau les valeurs.

Il peut constater que :

```text
Actualité
Actualité
Tutoriel
Actualité
```

se répète.

Il recommence alors le même raisonnement :

```text
Répétition
    ↓
Problème
    ↓
Réalité représentée
    ↓
Identifiant
    ↓
Dépendance
    ↓
Nouvelle entité
```

Cela permet de découvrir :

```text
CATEGORIE
---------
id_categorie
nom_categorie
```

---

# 6. Méthode complète sous forme d'algorithme pédagogique

L'apprenant peut retenir la procédure suivante :

```text
1. Observer les données.

2. Écarter les données calculables.

3. Chercher un identifiant déjà présent.

4. Chercher les données qui dépendent de cet identifiant.

5. Former un premier groupe cohérent.

6. Observer les valeurs des données restantes.

7. Repérer les valeurs répétées.

8. Se demander si la répétition représente une réalité indépendante.

9. Si oui, identifier cette réalité.

10. Créer un identifiant pour cette réalité.

11. Rechercher les données qui dépendent de cet identifiant.

12. Construire le nouveau groupe de données.

13. Remplacer la donnée répétée par son identifiant
    dans les autres groupes.

14. Recommencer l'observation.

15. Arrêter lorsque les données sont organisées
    en groupes cohérents sans répétition inutile.
```

---

# 7. Les trois tutoriels de l'UA

## T.112.131 — Observer les occurrences et repérer les répétitions

### Description

L'apprenant apprend à observer plusieurs occurrences d'un même ensemble de données et à repérer les valeurs qui se répètent.

Il découvre que les valeurs doivent être observées, comparées et interprétées avant de construire les entités.

### Partie théorique

* Occurrence
* Valeur
* Ensemble d'occurrences
* Répétition
* Valeur répétée
* Observation des occurrences
* Différence entre donnée et valeur
* Répétition comme signal d'observation

### Partie pratique

À partir d'un ensemble d'occurrences :

```text
nom_auteur | email_auteur          | nom_ville
-----------|-----------------------|----------
Madani     | madani@mail.com       | Tanger
Sara       | sara@mail.com         | Tanger
Youssef    | youssef@mail.com      | Rabat
Amine      | amine@mail.com        | Tanger
```

L'apprenant doit :

1. identifier les occurrences ;
2. relever les valeurs ;
3. repérer les valeurs répétées ;
4. indiquer quelles données contiennent des répétitions ;
5. expliquer pourquoi une répétition doit être observée.

### Résultat attendu

L'apprenant sait dire :

```text
nom_ville contient des valeurs répétées.
```

Mais il ne construit pas encore systématiquement l'entité `Ville`.

Le tutoriel prépare la découverte.

---

# T.112.132 — Découvrir une entité à partir d'un identifiant ou d'une répétition

### Description

L'apprenant apprend la méthode centrale de l'UA.

Il découvre qu'une entité peut apparaître de deux manières :

```text
Identifiant déjà visible
        ↓
Données dépendantes
        ↓
Entité
```

ou :

```text
Valeur répétée
        ↓
Problème de répétition
        ↓
Réalité indépendante
        ↓
Nouvel identifiant
        ↓
Dépendance fonctionnelle
        ↓
Entité
```

### Partie théorique

* Identifiant
* Donnée déterminante
* Donnée dépendante
* Dépendance fonctionnelle
* Réalité représentée
* Entité
* Attribut
* Répétition
* Problème de modification
* Identifiant à créer
* Remplacement d'une valeur par son identifiant

### Partie pratique

L'apprenant part de :

```text
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

et des occurrences :

```text
Madani   | madani@mail.com   | Tanger
Sara     | sara@mail.com     | Tanger
Youssef  | youssef@mail.com  | Rabat
Amine    | amine@mail.com    | Tanger
```

Il suit la méthode :

```text
Tanger
    ↓
valeur répétée
    ↓
problème de modification
    ↓
recherche de la réalité
    ↓
VILLE
    ↓
création de id_ville
    ↓
id_ville → nom_ville
```

Puis :

```text
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
------
id_ville
nom_ville
```

### Résultat attendu

L'apprenant est capable d'expliquer :

```text
Pourquoi Ville apparaît ?
Comment Ville a été découverte ?
Pourquoi id_ville a été créé ?
Pourquoi nom_ville n'est plus répété dans Auteur ?
```

C'est le **tutoriel central de l'UA**.

---

# T.112.133 — Appliquer la méthode pour construire les entités

### Description

L'apprenant applique seul la méthode sur un ensemble complet de données.

Il ne reçoit pas directement la liste des entités.

Il doit les faire apparaître progressivement en utilisant :

```text
identifiants
+
dépendances
+
répétitions
+
séparation des réalités
```

### Partie théorique

* Révision de la méthode
* Entité
* Identifiant
* Attribut
* Dépendance fonctionnelle
* Groupe de données
* Réalité indépendante
* Remplacement par identifiant
* Vérification de cohérence

### Partie pratique

À partir du dictionnaire :

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

et de plusieurs occurrences, l'apprenant doit :

1. identifier les données calculables ;
2. rechercher `id_article` ;
3. rechercher les données dépendantes de `id_article` ;
4. rechercher `id_auteur` ;
5. observer les répétitions ;
6. découvrir `Ville` ;
7. créer `id_ville` ;
8. remplacer `nom_ville` par `id_ville` ;
9. rechercher les autres répétitions ;
10. découvrir `Categorie` ;
11. créer `id_categorie` ;
12. remplacer `nom_categorie` par `id_categorie` ;
13. vérifier les groupes finaux.

Il doit arriver progressivement à une organisation du type :

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

Le livrable contient pour chaque entité :

```text
Nom de l'entité

Identifiant

Attributs

Dépendances fonctionnelles principales

Explication courte de la découverte
```

---

# 8. Résultat de l'UA.112.13

À la fin de l'UA, l'apprenant sait appliquer une méthode pour passer de :

```text
Dictionnaire
    ↓
Occurrences
    ↓
Valeurs
    ↓
Répétitions
    ↓
Problème de répétition
    ↓
Réalité indépendante
    ↓
Identifiant
    ↓
Dépendances fonctionnelles
    ↓
Entité
```

Il sait notamment expliquer :

```text
Pourquoi cette entité existe ?

Quel est son identifiant ?

Quelles données la décrivent ?

Pourquoi certaines données ont été séparées ?

Pourquoi une valeur a été remplacée par un identifiant ?
```

---

# 9. Ce que l'UA ne fait pas encore

Pour conserver une séparation pédagogique claire, l'UA.112.13 ne traite pas encore :

* les relations entre entités ;
* les cardinalités ;
* la lecture des associations ;
* la construction du MCD ;
* la transformation en MLD ;
* les clés étrangères.

Ces notions commencent dans :

```text
UA.112.14 — Déterminer les relations et construire le MCD
```

L'apprenant doit donc sortir de l'UA.112.13 avec :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

mais **sans encore devoir construire leurs relations et leurs cardinalités**.

---

# 10. Nouvelle progression pédagogique de l'UA

La progression interne de l'UA devient :

```text
T.112.131
Observer
« Je regarde plusieurs occurrences. »
        ↓
Je repère les répétitions.

        ↓

T.112.132
Comprendre la méthode
« Pourquoi cette valeur se répète-t-elle ? »
        ↓
« Que représente-t-elle ? »
        ↓
« Comment identifier cette réalité ? »
        ↓
« Quelles données dépendent de cet identifiant ? »

        ↓

T.112.133
Appliquer
« Je recommence la méthode seul. »
        ↓
Je découvre les différentes entités.
```

---

# 11. Nouvelle frontière entre UA.112.12 et UA.112.13

La séparation entre les deux unités devient ainsi beaucoup plus nette.

## UA.112.12 — Construire le dictionnaire de données

Question principale :

> **« Quelles sont les données présentes dans les maquettes ? »**

L'apprenant observe :

```text
Maquette
    ↓
Données
    ↓
Noms
    ↓
Descriptions
    ↓
Types
    ↓
Dictionnaire
```

Il ne cherche pas encore à normaliser ou à construire les entités.

---

## UA.112.13 — Découvrir les entités par observation des données

Question principale :

> **« Que représentent réellement ces données et comment pouvons-nous les organiser ? »**

L'apprenant travaille sur :

```text
Dictionnaire
    ↓
Occurrences
    ↓
Répétitions
    ↓
Identifiants
    ↓
Dépendances
    ↓
Séparation des réalités
    ↓
Entités
```

---

# 12. Formulation courte de l'objectif de l'UA

Pour ton document de formation, je recommande cette formulation :

> **Objectif :**
>
> À partir d'un dictionnaire de données et de plusieurs occurrences, l'apprenant apprend à observer les répétitions, rechercher les identifiants, établir des dépendances fonctionnelles simples et séparer progressivement les données afin de découvrir les entités.

---

# 13. Principe clé de l'UA

La phrase que l'apprenant doit retenir est :

> **« Je ne cherche pas directement les entités. Je les découvre en observant les données, leurs répétitions, leurs identifiants et leurs dépendances. »**

Et la méthode peut être mémorisée sous cette forme :

```text
OBSERVER
   ↓
REPÉRER
   ↓
QUESTIONNER
   ↓
IDENTIFIER
   ↓
DÉPENDRE
   ↓
SÉPARER
   ↓
REMPLACER
   ↓
RECOMMENCER
   ↓
CONSTRUIRE LES ENTITÉS
```

Cette conception rend l'UA.112.13 beaucoup plus cohérente avec ta méthode : **l'entité devient le résultat d'une démarche d'observation et de transformation, et non un concept que l'apprenant doit reconnaître intuitivement dans le dictionnaire.**
