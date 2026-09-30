# Programme de formation : Construire le traitement logique

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement d’exécution :** Node.js
**Domaine de compétence :** Construire le traitement logique

---

## 1. Objectif général du domaine

À partir d’un problème simple, l’apprenant est capable de construire un traitement logique en utilisant progressivement les **variables, les entrées-sorties, les conditions, les boucles, les tableaux et les fonctions**, puis de réutiliser et de combiner des traitements élémentaires pour résoudre des problèmes plus complexes par **décomposition et chaînage**.

L’apprentissage de JavaScript reste au service de l’algorithmique :

> **Comprendre le problème → construire le traitement → l’exécuter avec Node.js → observer et vérifier le résultat.**

Le domaine vise donc moins la mémorisation des commandes JavaScript que la construction progressive d’un **répertoire de traitements élémentaires réutilisables**.

---

## 2. Progression générale du domaine

```text
Variables
↓
Entrées / Sorties
↓
Conditions
↓
Boucles
↓
Tableaux
↓
Recherche
↓
Fonctions
↓
Résolution de problèmes
↓
Tri
↓
Décomposition
↓
Chaînage
↓
Traitement complet
```

La progression part des traitements les plus simples vers des traitements de plus en plus structurés.

```text
Valeur simple
↓
Traitement simple
↓
Plusieurs valeurs
↓
Traitement réutilisable
↓
Combinaison de traitements
↓
Résolution d'un problème
↓
Décomposition
↓
Chaînage
↓
Traitement complet
```

Les structures fondamentales utilisées au niveau N1 sont :

```text
Séquence
↓
Condition
↓
Répétition
```

Les variables et les entrées-sorties permettent de construire les premières séquences de traitement.

Les conditions et les boucles permettent ensuite de contrôler l’exécution.

Les tableaux permettent de traiter plusieurs valeurs.

Les fonctions permettent d’isoler et de réutiliser les traitements.

Les algorithmes élémentaires permettent de construire un premier répertoire de solutions.

Enfin, la décomposition et le chaînage permettent d’organiser plusieurs traitements pour construire une solution complète.

---

# 3. Programme des unités d’apprentissage

## UA.121.11 — Manipuler les variables et les entrées-sorties

### Description

Construire un traitement JavaScript simple capable de stocker des données, de recevoir des valeurs, d’effectuer un calcul et de produire un résultat observable.

### Objectif de l’UA

L’apprenant construit ses premiers traitements selon le principe :

```text
Entrée → Traitement → Sortie
```

### Notions clés

* donnée ;
* valeur ;
* variable ;
* constante ;
* affectation ;
* modification d’une variable ;
* `number` ;
* `string` ;
* `boolean` ;
* opérateurs arithmétiques ;
* entrée ;
* sortie ;
* lecture avec Node.js ;
* conversion avec `Number()` ;
* affichage avec `console.log()`.

### Tutoriels

#### T.121.111 — Afficher son nom avec JavaScript

**Objectif :** découvrir JavaScript et Node.js, puis créer et exécuter un premier programme qui affiche son nom dans la console.

#### T.121.112 — Manipuler les variables

**Objectif :** comprendre ce qu’est une variable, stocker une valeur, modifier sa valeur et afficher le résultat.

#### T.121.113 — Effectuer des opérations

**Objectif :** utiliser les opérations arithmétiques pour produire un résultat à partir de plusieurs variables.

#### T.121.114 — Recevoir des données

**Objectif :** recevoir une valeur saisie par l’utilisateur avec `prompt-sync`, la convertir si nécessaire et l’utiliser dans un traitement.

#### T.121.115 — Exercice : gérer un article

**Objectif :** réutiliser les variables, les entrées, les opérations et les sorties dans un même programme.

#### T.121.116 — Échanger deux variables

**Objectif :** découvrir un premier algorithme élémentaire permettant d’échanger les valeurs de deux variables sans les perdre.

### Résultat attendu

L’apprenant sait construire et exécuter un traitement simple utilisant des variables, des entrées et des sorties.

---

## UA.121.12 — Contrôler l’exécution avec les conditions et les boucles

### Description

Construire un traitement capable de prendre des décisions et de répéter des opérations selon des règles définies.

### Objectif de l’UA

L’apprenant maîtrise les deux mécanismes fondamentaux de contrôle de l’exécution :

```text
Condition
↓
Répétition
```

### Notions clés

* valeur vraie / fausse ;
* comparaison ;
* expression booléenne ;
* condition ;
* `if` ;
* `else` ;
* `else if` ;
* opérateurs logiques ;
* répétition ;
* compteur ;
* accumulateur ;
* `for` ;
* `while` ;
* condition d’arrêt.

### Tutoriels

#### T.121.121 — Comprendre les expressions booléennes

**Objectif :** comprendre les valeurs `true` et `false`, les comparaisons et les opérateurs logiques avant d’utiliser les structures de contrôle.

#### T.121.122 — Construire des conditions

**Objectif :** utiliser `if`, `else`, `else if`, ainsi que plusieurs conditions pour faire un choix dans un traitement.

#### T.121.123 — Construire des boucles

**Objectif :** utiliser `for` et `while` pour répéter un traitement avec un compteur ou une condition d’arrêt.

#### T.121.124 — Exercices sur les conditions

**Objectif :** résoudre des petits problèmes utilisant uniquement les conditions.

Exemples :

* positif / négatif ;
* pair / impair ;
* maximum de deux valeurs ;
* validation d’une note ;
* accès autorisé ou refusé ;
* prix selon une règle.

#### T.121.125 — Exercices sur les boucles

**Objectif :** résoudre des problèmes utilisant les répétitions.

Exemples :

* afficher `1` à `10` ;
* afficher les nombres dans l’ordre inverse ;
* afficher les nombres pairs ;
* calculer une somme ;
* compter selon une règle ;
* produire une table de multiplication.

#### T.121.126 — Algorithme élémentaire : construire une pyramide d’étoiles

**Objectif :** construire progressivement un algorithme utilisant plusieurs boucles afin de produire une pyramide d’étoiles.

Progression :

```text
Une étoile
↓
Plusieurs étoiles
↓
Plusieurs lignes
↓
Espaces + étoiles
↓
Pyramide
```

### Résultat attendu

L’apprenant sait contrôler l’exécution d’un traitement avec des conditions et des répétitions.

---

## UA.121.13 — Manipuler les tableaux et les collections

### Description

Construire des traitements permettant de stocker, parcourir et analyser plusieurs valeurs regroupées dans une collection.

### Objectif de l’UA

Passer du traitement d’une valeur au traitement de **plusieurs valeurs organisées dans un tableau**.

### Notions clés

* tableau ;
* collection ;
* élément ;
* index ;
* premier élément ;
* dernier élément ;
* longueur ;
* lecture ;
* modification ;
* parcours ;
* compteur ;
* accumulateur ;
* recherche ;
* position.

### Tutoriels

#### T.121.131 — Comprendre les tableaux

**Objectif :** découvrir la structure d’un tableau, ses éléments, ses index et sa longueur.

#### T.121.132 — Accéder et modifier les éléments d’un tableau

**Objectif :** lire un élément à partir de son index, accéder au premier et au dernier élément et modifier une valeur.

#### T.121.133 — Parcourir et traiter un tableau

**Objectif :** parcourir une collection avec une boucle et traiter successivement ses éléments.

Exemples :

* afficher les éléments ;
* compter les éléments ;
* calculer une somme ;
* sélectionner selon une condition ;
* calculer une moyenne.

#### T.121.134 — Exercices sur les tableaux

**Objectif :** consolider la manipulation des tableaux par des exercices progressifs.

Exemples :

* afficher les valeurs ;
* afficher index + valeur ;
* calculer une somme ;
* calculer une moyenne ;
* compter les valeurs ;
* compter les valeurs selon une règle ;
* calculer la somme des valeurs répondant à une condition.

#### T.121.135 — Construire des algorithmes élémentaires sur un tableau

**Objectif :** construire des traitements classiques sur une collection.

Algorithmes :

* rechercher une valeur ;
* retourner une position ;
* trouver le maximum ;
* trouver le minimum ;
* trouver la position du maximum ;
* trouver la position du minimum.

#### T.121.136 — Algorithme de synthèse : analyser une collection

**Objectif :** combiner plusieurs traitements élémentaires pour analyser une collection de notes.

L’apprenant construit notamment :

```text
Compter
↓
Sommer
↓
Calculer la moyenne
↓
Trouver le maximum
↓
Trouver le minimum
↓
Compter les valeurs selon une règle
```

### Résultat attendu

L’apprenant sait parcourir et analyser une collection en utilisant les conditions, les boucles et les traitements élémentaires de recherche.

---

## UA.121.14 — Créer et utiliser des fonctions

### Description

Construire et utiliser des fonctions JavaScript afin d’isoler, réutiliser et combiner des traitements.

### Objectif de l’UA

Transformer les traitements déjà construits en **unités de traitement réutilisables**.

### Notions clés

* fonction ;
* déclaration ;
* appel ;
* paramètre ;
* argument ;
* résultat ;
* `return` ;
* réutilisation ;
* fonction de calcul ;
* fonction de recherche ;
* fonction de comptage ;
* combinaison de fonctions.

### Tutoriels

#### T.121.141 — Comprendre les fonctions

**Objectif :** comprendre le rôle d’une fonction, sa déclaration, son appel et la réutilisation d’un même traitement.

#### T.121.142 — Créer et appeler une fonction

**Objectif :** créer des fonctions simples, les appeler plusieurs fois et organiser plusieurs fonctions dans un programme.

#### T.121.143 — Utiliser les paramètres et le retour

**Objectif :** transmettre des données à une fonction avec des paramètres et récupérer son résultat avec `return`.

Progression :

```text
Fonction
↓
Paramètre
↓
Traitement
↓
return
↓
Réutilisation du résultat
```

#### T.121.144 — Exercices sur les fonctions

**Objectif :** réutiliser les fonctions dans des problèmes simples.

Exemples :

* addition ;
* multiplication ;
* maximum ;
* minimum ;
* nombre pair ;
* note validée ;
* total ;
* moyenne ;
* recherche.

#### T.121.145 — Transformer les algorithmes élémentaires en fonctions

**Objectif :** transformer les traitements déjà construits sur les tableaux en fonctions réutilisables.

Exemples :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compter()
```

#### T.121.146 — Combiner plusieurs fonctions

**Objectif :** utiliser plusieurs fonctions dans un même traitement et transmettre le résultat d’une fonction à une autre.

### Résultat attendu

L’apprenant sait construire des fonctions simples, réutiliser leurs résultats et combiner plusieurs fonctions.

---

## UA.121.15 — Résoudre des problèmes algorithmiques simples

### Description

Construire une solution à partir d’un problème concret en choisissant et en combinant des traitements déjà appris.

### Objectif de l’UA

Passer de :

> **« Je sais utiliser une notion. »**

à :

> **« Je sais choisir et combiner plusieurs traitements pour résoudre un problème. »**

### Méthode de résolution

```text
Comprendre
↓
Identifier
↓
Choisir
↓
Construire
↓
Tester
↓
Vérifier
```

### Notions clés

* problème ;
* objectif ;
* données d’entrée ;
* résultat attendu ;
* règle ;
* traitement ;
* choix d’un traitement ;
* combinaison ;
* test ;
* vérification.

### Tutoriels

#### T.121.151 — Comprendre un problème algorithmique

**Objectif :** identifier l’objectif, les données d’entrée, les règles, les traitements et les sorties d’un problème.

#### T.121.152 — Identifier les données et les règles

**Objectif :** analyser plus précisément les données disponibles, les règles à respecter et les résultats intermédiaires nécessaires.

#### T.121.153 — Construire une solution simple

**Objectif :** passer de l’analyse à une première solution en réutilisant les variables, conditions, boucles, tableaux et fonctions déjà appris.

#### T.121.154 — Exercices de résolution algorithmique

**Objectif :** résoudre plusieurs problèmes simples en choisissant les traitements adaptés.

Exemples :

* analyser une série de nombres ;
* rechercher une valeur ;
* calculer une moyenne ;
* compter selon une règle ;
* analyser une liste de notes.

#### T.121.155 — Construire une solution avec plusieurs traitements

**Objectif :** combiner plusieurs traitements connus pour résoudre un même problème.

Exemple :

```text
Tableau de notes
↓
Somme
↓
Moyenne
↓
Maximum
↓
Minimum
↓
Validation
```

#### T.121.156 — Algorithme de synthèse : analyser une collection

**Objectif :** construire une solution complète à partir d’un problème d’analyse de notes.

Résultats attendus sur un exemple :

```text
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Somme des notes validées
Moyenne des notes validées
Résultat final
```

### Résultat attendu

L’apprenant sait construire une solution algorithmique simple en choisissant et en combinant plusieurs traitements déjà maîtrisés.

---

## UA.121.16 — Trier une collection

### Description

Construire un traitement permettant d’ordonner les éléments d’une collection selon une règle donnée.

### Objectif de l’UA

Découvrir et construire un **algorithme classique de tri** à partir de traitements élémentaires déjà maîtrisés.

Le tri est construit par l’apprenant.

L’utilisation directe de `Array.sort()` est exclue dans les tutoriels de construction de l’algorithme.

### Notions clés

* ordre ;
* ordre croissant ;
* ordre décroissant ;
* comparaison ;
* position ;
* minimum ;
* permutation ;
* partie triée ;
* partie non triée ;
* boucle imbriquée ;
* tri par sélection.

### Tutoriels

#### T.121.161 — Comprendre l’ordre et le tri

**Objectif :** comprendre la notion d’ordre, distinguer ordre croissant et décroissant et observer la différence entre collection triée et non triée.

#### T.121.162 — Construire les opérations nécessaires au tri

**Objectif :** construire les opérations utilisées par le tri :

* rechercher un minimum ;
* mémoriser sa position ;
* échanger deux éléments ;
* déplacer un élément à la bonne position.

#### T.121.163 — Exercices sur l’ordre et le tri

**Objectif :** effectuer manuellement les étapes d’un tri sur de petites collections et expliquer chaque déplacement.

#### T.121.164 — Construire le tri par sélection

**Objectif :** construire progressivement l’algorithme du tri par sélection.

Principe :

```text
Pour chaque position
    rechercher le minimum restant
    mémoriser sa position
    échanger avec la position courante
```

#### T.121.165 — Tester et adapter un algorithme de tri

**Objectif :** tester l’algorithme sur plusieurs collections et l’adapter à l’ordre décroissant.

Tests :

* collection déjà triée ;
* collection inversée ;
* collection désordonnée ;
* valeurs répétées.

#### T.121.166 — Algorithme de synthèse : trier une collection

**Objectif :** construire et vérifier un traitement complet de tri par sélection sur différentes collections.

### Résultat attendu

L’apprenant sait construire, expliquer, tester et adapter un algorithme classique de tri.

---

## UA.121.17 — Combiner plusieurs traitements

### Description

Construire un traitement complet en décomposant un problème en plusieurs traitements élémentaires, puis en organisant et en chaînant leurs résultats.

### Objectif de l’UA

Introduire une première méthode de conception algorithmique :

```text
Comprendre
↓
Décomposer
↓
Définir les entrées et les sorties
↓
Construire les traitements
↓
Identifier les dépendances
↓
Chaîner
↓
Tester
↓
Vérifier
```

### Notions clés

* problème global ;
* sous-problème ;
* décomposition ;
* responsabilité ;
* entrée ;
* sortie ;
* dépendance ;
* résultat intermédiaire ;
* ordre d’exécution ;
* chaînage ;
* composition ;
* test individuel ;
* test global.

### Tutoriels

#### T.121.171 — Comprendre la décomposition d’un problème

**Objectif :** repérer les sous-problèmes d’un problème global et comprendre qu’un traitement complexe peut être divisé en traitements plus simples.

Principe :

```text
Problème global
↓
Sous-problème 1
Sous-problème 2
Sous-problème 3
```

#### T.121.172 — Définir les entrées et sorties des traitements

**Objectif :** définir pour chaque sous-traitement :

```text
Entrées
↓
Traitement
↓
Sorties
```

L’apprenant identifie également les résultats nécessaires aux traitements suivants.

#### T.121.173 — Construire les sous-traitements

**Objectif :** construire chaque traitement séparément, avec une responsabilité claire, puis vérifier son fonctionnement avant de l’intégrer au traitement global.

#### T.121.174 — Exercices de décomposition

**Objectif :** analyser plusieurs problèmes et identifier :

* les sous-problèmes ;
* les traitements nécessaires ;
* les entrées ;
* les sorties ;
* les dépendances ;
* l’ordre des traitements.

#### T.121.175 — Construire et chaîner plusieurs traitements

**Objectif :** organiser plusieurs traitements afin que le résultat d’un traitement puisse devenir l’entrée d’un autre lorsque cela est nécessaire.

Exemple :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
résultat
```

D’autres traitements peuvent être exécutés en parallèle :

```text
notes ──→ trouverMaximum()
      └─→ trouverMinimum()
```

#### T.121.176 — Algorithme de synthèse : construire un traitement complet

**Objectif :** construire une solution complète à partir d’un problème global en utilisant la décomposition, les fonctions, les traitements élémentaires et le chaînage.

Exemple :

```text
Liste de notes
        │
        ├──→ calculerSomme()
        │
        ├──→ calculerMoyenne()
        │          │
        │          └──→ determinerAppreciation()
        │
        ├──→ trouverMaximum()
        │
        ├──→ trouverMinimum()
        │
        └──→ compterValidees()
```

Les résultats sont ensuite assemblés pour produire le résultat final.

### Résultat attendu

L’apprenant sait passer d’un problème global à plusieurs traitements élémentaires, définir leurs entrées et sorties, identifier leurs dépendances et les chaîner pour construire une solution complète.

---

# 4. Vue synthétique du programme

| UA            | Objectif principal           | Progression interne                                                          | Production principale                  |
| ------------- | ---------------------------- | ---------------------------------------------------------------------------- | -------------------------------------- |
| **UA.121.11** | Variables et entrées-sorties | Bases → manipulations → exercices → premier algorithme                       | Échange de deux variables              |
| **UA.121.12** | Contrôle de l’exécution      | Booléens → conditions → boucles → exercices → algorithme                     | Pyramide d’étoiles                     |
| **UA.121.13** | Tableaux et collections      | Bases → accès → parcours → exercices → recherche → synthèse                  | Analyse d’une collection               |
| **UA.121.14** | Fonctions                    | Bases → appel → paramètres/retour → exercices → transformation → combinaison | Fonctions de traitements élémentaires  |
| **UA.121.15** | Résolution de problèmes      | Comprendre → identifier → construire → exercices → combinaison → synthèse    | Analyse algorithmique d’une collection |
| **UA.121.16** | Tri                          | Comprendre → opérations → exercices → tri par sélection → tests → synthèse   | Tri par sélection                      |
| **UA.121.17** | Décomposition et chaînage    | Décomposer → définir E/S → construire → exercices → chaîner → synthèse       | Traitement complet                     |

---

# 5. Logique pédagogique générale

Le parcours suit la logique suivante :

```text
               CONSTRUIRE LE TRAITEMENT LOGIQUE
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
      BASES DU TRAITEMENT                  ALGORITHMES
          │                                       │
   Variables / E-S                        Échange
   Conditions                             Recherche
   Boucles                                Maximum / Minimum
          │                               Tri
          └───────────────────┬───────────────┘
                              │
                         TABLEAUX
                              │
                              ▼
                         FONCTIONS
                              │
                              ▼
                  RÉSOLUTION DE PROBLÈMES
                              │
                              ▼
                       DÉCOMPOSITION
                              │
                              ▼
                          CHAÎNAGE
                              │
                              ▼
                    TRAITEMENT COMPLET
```

La progression pédagogique fondamentale est :

```text
Comprendre
↓
Reproduire
↓
Expérimenter
↓
Réaliser
↓
Réutiliser
```

Pour le niveau N1 :

```text
Je vois
↓
Je comprends
↓
Je reproduis
↓
Je vérifie
↓
Je réutilise
```

Chaque nouvelle UA réutilise les notions et les traitements appris précédemment.

Ainsi :

```text
Variables
↓
Conditions / Boucles
↓
Tableaux
↓
Recherche
↓
Fonctions
↓
Résolution
↓
Tri
↓
Décomposition
↓
Chaînage
```

L’apprenant construit progressivement un **répertoire de traitements élémentaires**.

Il apprend ensuite à :

```text
réutiliser
↓
combiner
↓
décomposer
↓
enchaîner
↓
construire
```

un traitement plus complet.

---

# 6. Structure pédagogique des tutoriels

Chaque tutoriel conserve une structure cohérente :

```text
Situation / problème
↓
Théorie nécessaire
↓
Démonstration
↓
Réalisation
↓
Test
↓
Exercice
↓
Critère de réussite
```

Pour les tutoriels d’algorithmes :

```text
Comprendre le problème
↓
Observer l’algorithme
↓
Reproduire
↓
Tester
↓
Modifier
↓
Réutiliser
```

Pour les tutoriels de synthèse :

```text
Comprendre
↓
Construire
↓
Tester
↓
Vérifier
↓
Réutiliser
```

Pour l’UA.121.17 :

```text
Comprendre
↓
Décomposer
↓
Définir les entrées et sorties
↓
Construire les traitements élémentaires
↓
Identifier les dépendances
↓
Chaîner
↓
Tester chaque traitement
↓
Tester le traitement complet
```

---

# 7. Répartition des types de tutoriels

Les tutoriels ne doivent pas tous avoir la même fonction.

La progression générale utilise plusieurs catégories :

```text
Tutoriel de base
↓
Tutoriel de mécanisme
↓
Tutoriel d'exercice
↓
Tutoriel d'algorithme élémentaire
↓
Tutoriel d'algorithme classique
↓
Tutoriel de synthèse
```

Toutes les UA n’utilisent pas nécessairement toutes les catégories de la même manière.

Le choix dépend de la notion et de la difficulté.

---

# 8. Règle pédagogique fondamentale

> **Chaque nouvelle UA réutilise les notions, les structures et les algorithmes construits dans les UA précédentes.**

L’apprenant ne mémorise donc pas une succession de commandes JavaScript.

Il construit progressivement un **répertoire de traitements élémentaires**, puis apprend à les **réutiliser, les combiner, les décomposer et les chaîner** pour résoudre des problèmes.

Le rôle de JavaScript et de Node.js est de permettre l’exécution, l’observation et la vérification des traitements algorithmiques.

---

# 9. Volume global du domaine

Le domaine contient :

```text
7 UA
×
6 tutoriels
=
42 tutoriels
```

Répartition :

```text
UA.121.11 → 6 tutoriels
UA.121.12 → 6 tutoriels
UA.121.13 → 6 tutoriels
UA.121.14 → 6 tutoriels
UA.121.15 → 6 tutoriels
UA.121.16 → 6 tutoriels
UA.121.17 → 6 tutoriels
```

Le domaine se termine par une compétence de niveau N1 clairement identifiable :

```text
Comprendre un problème
↓
Choisir les traitements nécessaires
↓
Construire les traitements
↓
Les organiser
↓
Les réutiliser
↓
Les chaîner
↓
Vérifier le résultat
```

### Compétence finale visée

À la fin du domaine, l’apprenant est capable de construire un **traitement logique complet en JavaScript**, à partir d’un problème simple, en utilisant des traitements élémentaires déjà appris et en les organisant par **décomposition, réutilisation et chaînage**.
