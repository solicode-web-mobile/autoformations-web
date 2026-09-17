### Correction de la structure de l’UA.121.12

Le plan précédent de l’UA.121.12 regroupait trop tôt les **conditions et les boucles** dans les mêmes tutoriels. Cela réduit la progression pédagogique : l’apprenant n’a pas le temps de construire séparément chaque notion avant de les combiner.

La structure proposée ici est plus progressive :

> **Prérequis → Conditions → Boucles → Exercices conditions → Exercices boucles → Algorithme de synthèse**

### Règle pédagogique à retenir

> **Une notion de contrôle est d’abord apprise séparément, puis exercée séparément, avant d’être combinée dans un algorithme.**

---

# UA.121.12 — Contrôler l’exécution avec les conditions et les boucles

**Niveau :** N1 — Débutant
**Domaine :** D.121 — Construire le traitement logique
**Support :** JavaScript pur
**Exécution :** Node.js

## 1. Objectif général de l’UA

L’apprenant apprend à contrôler l’exécution d’un programme à partir de **conditions** et de **boucles**.

Il passe progressivement de :

```text
Expression booléenne
        ↓
Condition
        ↓
Répétition
        ↓
Exercices
        ↓
Combinaison
        ↓
Algorithme élémentaire
```

À la fin de l’UA, l’apprenant doit être capable de construire un traitement simple utilisant :

* une comparaison ;
* une condition ;
* une répétition ;
* une condition d’arrêt ;
* plusieurs conditions ou boucles combinées.

---

# 2. Progression pédagogique de l’UA

```text
T.121.121
Comprendre les expressions booléennes
        ↓
T.121.122
Construire des conditions
        ↓
T.121.123
Construire des boucles
        ↓
T.121.124
S’exercer avec les conditions
        ↓
T.121.125
S’exercer avec les boucles
        ↓
T.121.126
Algorithme élémentaire :
pyramide d’étoiles
```

La logique est volontairement :

```text
COMPRENDRE
    ↓
APPRENDRE
    ↓
REPRODUIRE
    ↓
S'EXERCER
    ↓
COMBINER
```

---

# 3. Liste détaillée des tutoriels

## T.121.121 — Comprendre les expressions booléennes

### Rôle du tutoriel

Ce tutoriel constitue le **prérequis direct des conditions**.

L’apprenant ne commence pas immédiatement avec `if`.

Il apprend d’abord à comprendre ce qu'est une expression qui peut donner :

```text
true
```

ou :

```text
false
```

### Objectif

Comprendre comment JavaScript évalue une expression et produit une valeur booléenne.

### Notions

* booléen ;
* `true` ;
* `false` ;
* comparaison ;
* égalité ;
* différence ;
* supérieur ;
* inférieur ;
* supérieur ou égal ;
* inférieur ou égal ;
* opérateurs logiques simples ;
* résultat d’une expression.

### Progression

```text
Valeur
  ↓
Comparaison
  ↓
Expression booléenne
  ↓
true / false
```

### Exemples

```javascript
10 > 5
```

```javascript
10 === 10
```

```javascript
8 < 3
```

Puis :

```javascript
age >= 18
```

### Pratique

L’apprenant construit plusieurs expressions et prédit le résultat avant d’exécuter le programme.

### Résultat attendu

L’apprenant sait expliquer :

> Une expression booléenne produit `true` ou `false`.

---

# T.121.122 — Construire des conditions

### Rôle du tutoriel

Ce tutoriel réutilise directement les expressions booléennes du T.121.121.

L’apprenant apprend maintenant à utiliser une expression booléenne pour **contrôler une action**.

### Objectif

Construire un traitement avec une ou plusieurs conditions.

### Notions

* `if` ;
* `else` ;
* `else if` ;
* condition ;
* bloc d'instructions ;
* condition simple ;
* conditions multiples ;
* opérateurs logiques dans une condition.

### Progression

```text
Expression booléenne
        ↓
if
        ↓
Action
```

Puis :

```text
Condition
   ├── vraie → action A
   └── fausse → action B
```

Puis :

```text
Condition 1
   ↓
Sinon si condition 2
   ↓
Sinon
```

### Exemples d’applications

* vérifier l’âge ;
* vérifier si une note est suffisante ;
* déterminer si un nombre est positif ;
* déterminer le plus grand de deux nombres.

### Résultat attendu

L’apprenant sait écrire une condition simple et choisir une action selon le résultat.

---

# T.121.123 — Construire des boucles

### Rôle du tutoriel

Après avoir appris la décision, l’apprenant découvre le deuxième grand mécanisme de contrôle : **la répétition**.

### Objectif

Construire une répétition contrôlée.

### Notions

* répétition ;
* boucle ;
* compteur ;
* condition de répétition ;
* condition d’arrêt ;
* `for` ;
* `while`.

### Progression

D'abord comprendre :

```text
Action
  ↓
Répéter
  ↓
Arrêter
```

Puis :

```text
for
```

pour une répétition contrôlée par un compteur.

Puis :

```text
while
```

pour une répétition basée sur une condition.

### Exemples

Afficher :

```text
1
2
3
4
5
```

Puis :

```text
Bonjour
Bonjour
Bonjour
```

Puis :

```text
Afficher les nombres jusqu'à 10
```

### Point important

Le tutoriel doit insister sur :

```text
Initialisation
     ↓
Répétition
     ↓
Évolution
     ↓
Condition d'arrêt
```

L’apprenant doit comprendre pourquoi une boucle doit pouvoir s’arrêter.

### Résultat attendu

L’apprenant sait construire une boucle simple et expliquer sa condition d’arrêt.

---

# T.121.124 — Exercices sur les conditions

### Rôle du tutoriel

Ce tutoriel ne présente plus une nouvelle notion importante.

Il sert à **réutiliser les conditions** de manière autonome.

### Objectif

Résoudre plusieurs petits problèmes utilisant uniquement :

* variables ;
* expressions booléennes ;
* conditions.

Les boucles ne sont pas nécessaires.

### Exercices proposés

#### Exercice 1 — Positif ou négatif

Déterminer si un nombre est :

```text
positif
négatif
```

#### Exercice 2 — Pair ou impair

Déterminer si un nombre est pair ou impair.

#### Exercice 3 — Maximum de deux valeurs

Afficher la plus grande valeur.

#### Exercice 4 — Résultat d’un apprenant

À partir d’une note :

```text
note >= 10
```

indiquer :

```text
Validé
```

ou :

```text
Non validé
```

#### Exercice 5 — Classification d’une valeur

Utiliser plusieurs conditions.

### Pédagogie

Pour chaque exercice :

```text
Comprendre le problème
        ↓
Identifier les données
        ↓
Écrire la règle
        ↓
Construire la condition
        ↓
Tester
```

### Résultat attendu

L’apprenant est capable de choisir et écrire une condition sans recopier un exemple.

---

# T.121.125 — Exercices sur les boucles

### Rôle du tutoriel

Ce tutoriel permet de pratiquer les boucles **sans introduire encore un problème algorithmique complexe**.

### Objectif

Résoudre de petits problèmes répétitifs.

### Notions mobilisées

* `for` ;
* `while` ;
* compteur ;
* accumulateur ;
* condition d'arrêt ;
* répétition.

### Exercices proposés

#### Exercice 1 — Afficher les nombres

Afficher :

```text
1 à 10
```

#### Exercice 2 — Afficher les nombres pairs

Afficher les nombres pairs de :

```text
1 à 20
```

#### Exercice 3 — Calculer une somme

Calculer :

```text
1 + 2 + 3 + ... + 10
```

#### Exercice 4 — Compter

Compter combien de valeurs respectent une règle.

#### Exercice 5 — Répéter une action

Afficher un message un nombre donné de fois.

#### Exercice 6 — Boucle avec condition

Parcourir une série de valeurs et traiter uniquement celles qui respectent une condition.

Cet exercice constitue la **transition vers le tutoriel d’algorithme**.

### Résultat attendu

L’apprenant sait utiliser une boucle pour répéter un traitement et, lorsque nécessaire, appliquer une condition pendant cette répétition.

---

# T.121.126 — Algorithme élémentaire : construire une pyramide d’étoiles

### Rôle du tutoriel

C'est le **premier vrai algorithme de synthèse de l’UA**.

Il oblige l’apprenant à combiner :

* variables ;
* conditions ;
* boucles ;
* boucles imbriquées ;
* compteur ;
* organisation du traitement ;
* affichage.

### Objectif

Construire progressivement une pyramide d’étoiles avec JavaScript.

Exemple final :

```text
    *
   ***
  *****
 *******
*********
```

### Pourquoi cette réalisation est intéressante

La pyramide permet de passer de :

```text
une boucle simple
```

à :

```text
plusieurs boucles organisées
```

et finalement à :

```text
boucles + conditions
```

### Progression algorithmique

#### Étape 1 — Afficher une étoile

```text
*
```

#### Étape 2 — Afficher plusieurs étoiles

```text
*****
```

#### Étape 3 — Construire un triangle

```text
*
**
***
****
*****
```

#### Étape 4 — Construire une pyramide

```text
    *
   ***
  *****
 *******
*********
```

#### Étape 5 — Contrôler les espaces et les étoiles

L’apprenant doit comprendre qu'une position peut produire :

```text
espace
```

ou :

```text
étoile
```

selon une règle.

On introduit alors réellement :

```text
boucle
    ↓
condition
    ↓
espace ou étoile
```

### Structure algorithmique

```text
Pour chaque ligne
    Pour chaque position
        vérifier la position
        afficher espace ou étoile
```

### Ce que l’apprenant découvre

Cette réalisation fait émerger une première idée importante :

> **Une condition peut être utilisée à l’intérieur d’une boucle pour contrôler le traitement de chaque élément.**

### Résultat attendu

Une pyramide d’étoiles correctement affichée dans Node.js.

Exemple :

```text
    *
   ***
  *****
 *******
*********
```

### Critère de réussite

Le programme doit :

* utiliser des boucles ;
* utiliser une condition lorsque nécessaire ;
* construire plusieurs lignes ;
* produire une pyramide correcte ;
* fonctionner avec Node.js.

---

# 4. Synthèse de l’UA.121.12

| Tutoriel      | Fonction               | Notions principales                     |
| ------------- | ---------------------- | --------------------------------------- |
| **T.121.121** | Prérequis              | Booléens, comparaisons, `true`, `false` |
| **T.121.122** | Apprentissage          | `if`, `else`, `else if`, conditions     |
| **T.121.123** | Apprentissage          | `for`, `while`, compteur, arrêt         |
| **T.121.124** | Exercices              | Conditions                              |
| **T.121.125** | Exercices              | Boucles                                 |
| **T.121.126** | Algorithme élémentaire | Boucles + conditions + pyramide         |

---

# 5. Progression pédagogique complète

```text
T.121.121
Expressions booléennes
        ↓
Je comprends true / false
        ↓
T.121.122
Conditions
        ↓
Je sais prendre une décision
        ↓
T.121.123
Boucles
        ↓
Je sais répéter un traitement
        ↓
T.121.124
Exercices conditions
        ↓
Je sais appliquer une décision
        ↓
T.121.125
Exercices boucles
        ↓
Je sais appliquer une répétition
        ↓
T.121.126
Pyramide d'étoiles
        ↓
Je sais combiner conditions et boucles
```

## 6. Répartition des 6 tutoriels

La logique **Bases → Mécanisme → Exercices → Algorithme** est donc conservée, mais répartie sur plusieurs tutoriels :

```text
1. Prérequis
   ↓
2. Notion : conditions
   ↓
3. Notion : boucles
   ↓
4. Exercices : conditions
   ↓
5. Exercices : boucles
   ↓
6. Algorithme élémentaire
```

Cette organisation est plus adaptée au N1 que l’ancienne version à 4 tutoriels, car **l’apprenant ne découvre pas simultanément deux mécanismes de contrôle**.

### Point de vigilance sur la pyramide

La **pyramide d’étoiles** est un bon premier algorithme de synthèse, mais il faut la traiter comme une **réalisation progressive** et non comme une simple démonstration de boucles imbriquées. Le T.121.126 doit commencer par des formes très simples avant d'arriver à la pyramide complète. Cela permet de conserver une vraie progression N1.
