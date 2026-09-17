# Programme de formation : Construire le traitement logique

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement d’exécution :** Node.js
**Domaine de compétence :** Construire le traitement logique

---

## 1. Objectif général du domaine

À partir d’un problème simple, l’apprenant est capable de construire un traitement logique en utilisant les **variables, les entrées-sorties, les conditions, les boucles, les tableaux et les fonctions**, puis de réutiliser des traitements élémentaires pour résoudre un problème plus complexe par **décomposition et chaînage**.

L’apprentissage de JavaScript reste au service de l’algorithmique :

> **Comprendre le problème → construire le traitement → l’exécuter avec Node.js → observer et vérifier le résultat.**

---

# 2. Progression générale du domaine

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

Les quatre ordres fondamentaux constituent le socle :

```text
1. Variables
2. Entrées / Sorties
3. Conditions
4. Boucles
```

Les tableaux et les fonctions permettent ensuite de construire des **algorithmes élémentaires réutilisables**.

Enfin, la décomposition et le chaînage permettent de passer de l’algorithme élémentaire à la **conception d’un traitement complet**.

---

# 3. Programme des Unités d’Apprentissage

## UA.121.11 — Manipuler les variables et les entrées-sorties

### Description

Construire un traitement JavaScript simple capable de stocker des données, de recevoir des valeurs, d’effectuer un calcul et de produire un résultat observable.

### Objectif de l’UA

L’apprenant doit être capable de construire un traitement simple suivant le principe :

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
* types `number`, `string`, `boolean` ;
* opérateurs arithmétiques ;
* entrée ;
* sortie ;
* lecture avec Node.js ;
* conversion avec `Number()` ;
* affichage avec `console.log()`.

### Tutoriels

#### T.121.111 — Afficher son nom avec JavaScript

**Objectif :** Découvrir JavaScript et Node.js, puis créer et exécuter un programme qui affiche votre nom dans la console.

#### T.121.112 — Manipuler les variables

**Objectif :** Comprendre ce qu’est une variable et l’utiliser pour stocker et afficher des valeurs en JavaScript.

#### T.121.113 — Effectuer des opérations

**Objectif :** Utiliser les opérations arithmétiques en JavaScript pour calculer un résultat avec des variables.

#### T.121.114 — Recevoir des données

**Objectif :** Recevoir une valeur saisie par l’utilisateur avec `prompt-sync`, la stocker dans une variable et l’afficher avec `console.log()`.

#### T.121.115 — Exercice : gérer un article

**Objectif :** Réutiliser les variables, `prompt-sync`, les opérations et `console.log()` dans un même programme JavaScript.

#### T.121.116 — Échanger deux variables

**Objectif :** Découvrir une première technique algorithmique en JavaScript : échanger les valeurs de deux variables sans les perdre.

### Résultat attendu

L’apprenant sait construire et exécuter un traitement simple utilisant des variables et des entrées-sorties.

---

# UA.121.12 — Contrôler l’exécution avec les conditions et les boucles

### Description

Construire un traitement JavaScript capable de prendre des décisions et de répéter des opérations selon des règles définies.

### Objectif de l’UA

Maîtriser les deux ordres fondamentaux permettant de contrôler le déroulement d’un traitement :

```text
Condition
Répétition
```

### Notions clés

* comparaison ;
* expression logique ;
* condition ;
* `if` ;
* `else` ;
* conditions multiples ;
* opérateurs logiques ;
* répétition ;
* compteur ;
* accumulateur ;
* `for` ;
* `while` ;
* condition d’arrêt.

### Tutoriels

#### T.121.121 — Bases du contrôle de l’exécution

L’apprenant découvre :

* condition ;
* comparaison ;
* valeur vraie / fausse ;
* répétition ;
* condition d’arrêt.

#### T.121.122 — Utiliser les conditions et les boucles

L’apprenant met en pratique :

* `if / else` ;
* plusieurs conditions ;
* `for` ;
* `while` ;
* compteur ;
* accumulateur.

#### T.121.123 — Exercices sur les conditions et les boucles

Exercices :

* déterminer si une valeur est positive ;
* déterminer le maximum de deux valeurs ;
* afficher une série de nombres ;
* afficher les nombres pairs ;
* calculer une somme ;
* compter des valeurs selon une règle.

#### T.121.124 — Algorithmes élémentaires avec conditions et boucles

Algorithmes :

* maximum de deux valeurs ;
* somme d’une série ;
* comptage conditionnel ;
* factoriel.

### Résultat attendu

L’apprenant sait contrôler l’exécution d’un traitement en utilisant des décisions et des répétitions.

---

# UA.121.13 — Manipuler les tableaux et collections

### Description

Construire des traitements JavaScript permettant de stocker, parcourir et analyser une collection de valeurs.

### Objectif de l’UA

Passer du traitement d’une valeur à celui de **plusieurs valeurs organisées dans un tableau**.

### Notions clés

* tableau ;
* collection ;
* élément ;
* index ;
* longueur ;
* accès à un élément ;
* modification ;
* parcours ;
* recherche ;
* position ;
* comptage.

### Tutoriels

#### T.121.131 — Bases des tableaux

L’apprenant découvre :

* création d’un tableau ;
* élément ;
* index ;
* `length` ;
* lecture ;
* modification.

#### T.121.132 — Parcourir et traiter un tableau

L’apprenant apprend à :

* parcourir avec une boucle ;
* accéder successivement aux éléments ;
* utiliser un compteur ;
* utiliser un accumulateur ;
* combiner tableau, condition et boucle.

#### T.121.133 — Exercices sur les tableaux

Exercices :

* afficher les éléments ;
* calculer la somme ;
* calculer la moyenne ;
* compter les éléments ;
* compter les valeurs répondant à une condition ;
* rechercher une valeur.

#### T.121.134 — Algorithmes classiques de recherche

Algorithmes :

* recherche linéaire ;
* recherche du maximum ;
* recherche du minimum ;
* recherche de la position d’une valeur.

### Résultat attendu

L’apprenant sait parcourir et analyser une collection en utilisant les conditions et les boucles.

---

# UA.121.14 — Créer et utiliser des fonctions

### Description

Construire et utiliser des fonctions JavaScript simples afin d’isoler, réutiliser et combiner des traitements.

### Objectif de l’UA

Transformer les traitements déjà appris en **unités de traitement réutilisables**.

### Notions clés

* fonction ;
* déclaration ;
* appel ;
* paramètre ;
* argument ;
* résultat ;
* `return` ;
* réutilisation ;
* traitement local ;
* fonction de calcul ;
* fonction de recherche.

### Tutoriels

#### T.121.141 — Bases des fonctions

L’apprenant découvre :

* rôle d’une fonction ;
* déclaration ;
* appel ;
* paramètres ;
* arguments ;
* valeur de retour.

#### T.121.142 — Construire une fonction avec entrée et sortie

L’apprenant pratique :

```text
Entrée
↓
Traitement
↓
Retour
```

avec :

* paramètres ;
* traitement ;
* `return`.

#### T.121.143 — Exercices sur les fonctions

Exercices :

* fonction de somme ;
* fonction de maximum ;
* fonction de moyenne ;
* fonction de recherche ;
* fonction de comptage.

#### T.121.144 — Transformer les algorithmes élémentaires en fonctions

L’apprenant transforme en fonctions les traitements précédents :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
rechercher()
compter()
```

### Résultat attendu

L’apprenant sait construire des fonctions simples et utiliser leurs résultats dans d’autres traitements.

---

# UA.121.15 — Résoudre des problèmes algorithmiques simples

### Description

Construire des traitements JavaScript combinant plusieurs notions déjà maîtrisées afin de résoudre un problème algorithmique simple.

### Objectif de l’UA

Passer de :

> « Je sais utiliser une notion »

à :

> « Je sais choisir et combiner plusieurs notions pour résoudre un problème. »

### Notions clés

* compréhension du problème ;
* données d’entrée ;
* résultat attendu ;
* règles de traitement ;
* choix des structures ;
* combinaison des traitements ;
* vérification du résultat.

### Tutoriels

#### T.121.151 — Comprendre un problème algorithmique

L’apprenant apprend à identifier :

* le problème ;
* les données disponibles ;
* les entrées ;
* les sorties ;
* le résultat attendu ;
* les opérations nécessaires.

#### T.121.152 — Construire une solution à partir des ordres de base

L’apprenant choisit et combine :

* variables ;
* entrées-sorties ;
* conditions ;
* boucles ;
* tableaux ;
* fonctions.

#### T.121.153 — Exercices de résolution algorithmique

Exercices progressifs :

* analyser une série de nombres ;
* calculer des statistiques ;
* rechercher une valeur ;
* compter selon une règle ;
* analyser une liste de notes.

#### T.121.154 — Algorithme de synthèse : analyser une collection

Exemple :

```text
notes
↓
calculer la somme
↓
calculer la moyenne
↓
chercher le minimum
↓
chercher le maximum
↓
compter les valeurs selon une règle
```

### Résultat attendu

L’apprenant sait construire une solution simple en combinant plusieurs traitements déjà appris.

---

# UA.121.16 — Trier une collection

### Description

Construire un traitement permettant d’ordonner les éléments d’une collection selon une règle donnée.

### Objectif de l’UA

Découvrir et construire un algorithme classique nécessitant la combinaison de plusieurs traitements élémentaires.

### Notions clés

* ordre croissant ;
* ordre décroissant ;
* comparaison ;
* position ;
* partie triée ;
* partie non triée ;
* minimum ;
* permutation ;
* boucles imbriquées ;
* réutilisation de l’algorithme d’échange.

### Tutoriels

#### T.121.161 — Bases du classement et du tri

L’apprenant découvre :

* notion d’ordre ;
* comparaison ;
* position ;
* élément à déplacer ;
* partie triée / non triée.

#### T.121.162 — Construire les opérations nécessaires au tri

L’apprenant pratique :

* rechercher un minimum ;
* mémoriser sa position ;
* échanger deux éléments ;
* répéter le traitement.

#### T.121.163 — Exercices de tri

Exercices :

* trier manuellement une petite collection ;
* déterminer l’élément à déplacer ;
* effectuer les permutations ;
* expliquer les étapes.

#### T.121.164 — Algorithme classique : tri par sélection

Construction du tri :

```text
Pour chaque position
    rechercher le minimum restant
    échanger avec la position courante
```

Puis réalisation en JavaScript et vérification avec Node.js.

### Résultat attendu

L’apprenant sait construire un algorithme classique de tri et expliquer son fonctionnement.

---

# UA.121.17 — Combiner plusieurs traitements

### Description

Construire un traitement complet en décomposant un problème en plusieurs traitements élémentaires, puis en organisant et en chaînant leurs résultats.

### Objectif de l’UA

Introduire une véritable **méthode de conception algorithmique** :

```text
Comprendre
→ Décomposer
→ Construire
→ Chaîner
→ Tester
```

### Notions clés

* problème global ;
* sous-problème ;
* décomposition ;
* entrée ;
* sortie ;
* responsabilité d’un traitement ;
* dépendance ;
* ordre d’exécution ;
* chaînage ;
* résultat intermédiaire ;
* composition ;
* test individuel ;
* test global.

### Tutoriels

#### T.121.171 — Bases de la décomposition d’un problème

L’apprenant apprend à :

* comprendre l’objectif global ;
* identifier les entrées ;
* identifier les sorties ;
* repérer les sous-problèmes ;
* diviser un traitement complexe en traitements plus simples.

Principe :

```text
Problème global
↓
Sous-problème 1
Sous-problème 2
Sous-problème 3
```

#### T.121.172 — Construire et chaîner les traitements

L’apprenant apprend à définir :

```text
Entrées
Traitement
Sorties
```

pour chaque sous-traitement, puis à construire :

```text
A
↓
Résultat A
↓
B
↓
Résultat B
↓
C
```

La sortie d’un traitement devient l’entrée du suivant lorsque cela est nécessaire.

#### T.121.173 — Exercice de conception par décomposition et chaînage

À partir d’un problème donné, l’apprenant doit :

* comprendre le problème ;
* identifier les données ;
* identifier le résultat attendu ;
* découper le traitement ;
* identifier les algorithmes élémentaires nécessaires ;
* définir les fonctions ;
* représenter le chaînage.

Le travail de conception est réalisé **avant le codage**.

#### T.121.174 — Algorithme de synthèse : construire un traitement complet

Exemple :

```text
Liste de notes
      ↓
calculerSomme()
      ↓
somme
      ↓
calculerMoyenne()
      ↓
moyenne
      ↓
determinerAppreciation()
      ↓
résultat final
```

En parallèle :

```text
Liste de notes
      ↓
trouverMaximum()
      ↓
meilleure note
```

L’apprenant assemble ensuite les résultats pour produire le traitement complet.

### Résultat attendu

L’apprenant sait passer d’un problème global à plusieurs algorithmes élémentaires, puis les organiser et les chaîner pour construire une solution complète.

---

# 4. Vue synthétique du programme

| UA            | Objectif principal           | Progression interne                     | Algorithme principal                  |
| ------------- | ---------------------------- | --------------------------------------- | ------------------------------------- |
| **UA.121.11** | Variables et entrées-sorties | Bases → ordre de traitement → exercices | Échange de deux variables             |
| **UA.121.12** | Contrôle de l’exécution      | Bases → conditions/boucles → exercices  | Maximum, somme, factoriel             |
| **UA.121.13** | Collections                  | Bases → parcours → exercices            | Recherche / maximum                   |
| **UA.121.14** | Fonctions                    | Bases → paramètres/retour → exercices   | Fonctions de traitements élémentaires |
| **UA.121.15** | Résolution                   | Bases → combinaison → exercices         | Analyse d’une collection              |
| **UA.121.16** | Tri                          | Bases → mécanisme → exercices           | Tri par sélection                     |
| **UA.121.17** | Conception                   | Décomposition → chaînage → exercice     | Traitement complet chaîné             |

---

# 5. Logique pédagogique générale

Le parcours respecte la progression suivante :

```text
                 CONSTRUIRE LE TRAITEMENT LOGIQUE
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
     ORDRES DE BASE                        ALGORITHMES
          │                                       │
 Variables / E-S                          Échange
 Conditions                              Maximum
 Boucles                                 Recherche
          │                               Tri
          └───────────────────┬───────────────────┘
                              │
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

La règle pédagogique fondamentale devient :

> **Chaque nouvelle UA réutilise les notions et les algorithmes des UA précédentes.**

Ainsi, l’apprenant ne mémorise pas une succession de commandes JavaScript. Il construit progressivement un **répertoire de traitements élémentaires**, puis apprend à les **réutiliser, les combiner et les chaîner** pour résoudre des problèmes.

# 6. Structure standard d’un tutoriel

Pour conserver une cohérence avec la pédagogie de Spartel Dev Academy, chaque tutoriel peut suivre cette organisation :

```text
1. Situation / problème
2. Théorie nécessaire
3. Démonstration
4. Réalisation avec JavaScript / Node.js
5. Test du résultat
6. Exercice ou réinvestissement
7. Critère de réussite
```

Pour les tutoriels d’algorithmes, la progression peut être :

```text
Comprendre le problème
↓
Observer l'algorithme
↓
Reproduire
↓
Tester
↓
Modifier
↓
Réutiliser
```

Pour **UA.121.17**, on ajoute explicitement :

```text
Comprendre
↓
Décomposer
↓
Définir les entrées/sorties
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

Le domaine compte ainsi **28 tutoriels structurés en 7 UA × 4 tutoriels**, avec une fonction claire pour chaque tutoriel : **bases, ordre/mécanisme, exercices, algorithme élémentaire ou classique**.
