Voici le **plan de formation complet mis à jour**, avec l’initiation au débogage PHP et la configuration de l’environnement intégrées dans **S6 — UA.125.22**, sans créer de nouvelle UA.

# Plan de formation : Déboguer et résoudre les erreurs (Debug)

## 1. Objectif global

Rendre progressivement l'apprenant autonome pour :

> **reproduire un problème, observer l'exécution, localiser l'erreur, la corriger et vérifier que le résultat attendu est obtenu.**

La progression est construite en deux dimensions complémentaires.

### Progression de la compétence

```text
Observer
   ↓
Localiser
   ↓
Corriger
   ↓
Résoudre un parcours complet
```

### Progression technique

```text
JavaScript
   ↓
PHP
   ↓
PHP
   ↓
PHP + MySQL
```

Le passage de JavaScript à PHP ne constitue donc pas une nouvelle méthode de débogage. L'apprenant **transfère progressivement les mêmes gestes de débogage dans un environnement de plus en plus proche du projet réel**.

---

# 2. Tableau récapitulatif des tutoriels

| Session | UA | Tutoriel | Langage / environnement | Compétence principale | Livrable |
|---|---|---|---|---|---|
| **S2** | **UA.125.21** | **T.125.21.1 — Déboguer un programme JavaScript pas à pas** | JavaScript + navigateur | Observer l'exécution | Programme + trace |
| **S6** | **UA.125.22** | **T.125.22.1 — Configurer le débogage PHP** | PHP + Xdebug + VS Code | Configurer l'outil de débogage | Environnement configuré |
| **S6** | **UA.125.22** | **T.125.22.2 — Localiser une erreur en PHP** | PHP + Xdebug + Blog | Reproduire, observer et localiser | Enquête et localisation |
| **S7** | **UA.125.23** | **T.125.23.1 — Corriger une erreur ciblée et vérifier** | PHP + Blog | Corriger et vérifier | Correction + preuve |
| **S9** | **UA.125.24** | **T.125.24.1 — Diagnostiquer un bug sur un parcours complet** | PHP + MySQL + Xdebug + Blog | Suivre, corriger et vérifier un flux complet | Rapport + trace |

---

# 3. S2 — UA.125.21 : Déboguer un programme pas à pas

## T.125.21.1 — Déboguer un programme JavaScript pas à pas

### Objectif

Suivre l'exécution d'un petit programme JavaScript et observer les valeurs des variables à différents moments.

### Environnement technique

**JavaScript dans le navigateur**, à partir d'une Sandbox Algorithmique.

### Situation d'apprentissage

L'apprenant travaille sur un petit programme manipulant des données liées aux articles.

Il apprend d'abord à **observer ce que fait réellement le programme**, sans chercher immédiatement à modifier le code.

### Concepts clés

| Concept | Compréhension attendue au N1 |
|---|---|
| **Exécution** | Le programme exécute des instructions dans un certain ordre. |
| **Ligne exécutée** | Instruction actuellement traitée. |
| **Point d'arrêt** | Endroit où le programme peut être mis en pause. |
| **Pause** | Arrêt temporaire pour observer le programme. |
| **Reprendre** | Continuer l'exécution après la pause. |
| **Exécution pas à pas** | Avancer progressivement dans le programme. |
| **Variable** | Donnée conservée par le programme. |
| **Valeur** | Contenu d'une variable à un moment donné. |
| **Inspection** | Observation d'une valeur pendant l'exécution. |
| **`console.log()`** | Affichage d'une information pour observer une valeur. |
| **Trace de débogage** | Notation des observations réalisées. |

### Progression pédagogique

**Je vois**

Le formateur montre :

```text
Code
  ↓
Point d'arrêt
  ↓
Pause
  ↓
Variable
  ↓
Valeur
  ↓
Étape suivante
```

**Je comprends**

L'apprenant comprend que le programme est exécuté progressivement et qu'il peut observer son état pendant cette exécution.

**Je reproduis**

Il refait le même débogage sur un exercice proche.

**Je teste**

Il modifie une donnée et observe son effet sur l'exécution.

**Je présente**

Il produit une trace d'observation.

### Travail à réaliser

**Sandbox Algorithmique JavaScript traitant des données liées aux articles.**

### Livrable

> **Programme JavaScript accompagné d'une trace de débogage montrant l'exécution pas à pas et l'évolution des variables.**

### Validation

L'apprenant est capable de :

```text
Mettre en pause
→ Avancer pas à pas
→ Observer
→ Décrire ce qui se passe
```

---

# 4. S6 — UA.125.22 : Localiser un problème dans le code

## T.125.22.1 — Configurer l'environnement de débogage PHP

### Objectif

Mettre en place l'environnement PHP avec Xdebug et Visual Studio Code pour retrouver les gestes de débogage vus en JavaScript.

### Environnement technique

**PHP + Xdebug + Visual Studio Code.**

### Situation d'apprentissage

L'apprenant connaît déjà le principe du débogage grâce à JavaScript en S2.
Il doit maintenant **retrouver les mêmes gestes avec PHP**.

La session commence donc par une courte prise en main de l'environnement :

```text
Installer Xdebug
   ↓
Vérifier son installation
   ↓
Configurer PHP
   ↓
Configurer VS Code
   ↓
Lancer une session de débogage
   ↓
Tester un point d'arrêt
   ↓
Observer une variable PHP
```

### Livrable

> **Un environnement PHP préparé pour le débogage et une courte trace de prise en main (point d'arrêt testé).**

---

## T.125.22.2 — Localiser une erreur en PHP

### Objectif

Reproduire un problème dans le Blog, utiliser l'environnement de débogage PHP pour observer l'exécution et les données, puis localiser la partie du traitement probablement responsable.

### Environnement technique

**PHP + Xdebug + Visual Studio Code + application Blog.**

### Situation d'apprentissage

> **Un article du Blog ne s'affiche pas.**

L'apprenant doit chercher où le traitement ne produit plus le résultat attendu.

### Progression pédagogique

**Je reproduis**

L'apprenant reproduit le problème du Blog :

```text
Attendu : l'article doit s'afficher.
Obtenu : l'article ne s'affiche pas.
```

**Je teste**

Il place des points d'arrêt et des points de contrôle (ex: `var_dump($article);`).
La question centrale devient : *À quel moment la donnée n'a-t-elle plus la valeur attendue ?*

**Je présente**

L'apprenant produit sa trace :
```text
Problème : l'article ne s'affiche pas.
Scénario : ...
Observation 1 : ...
Observation 2 : ...
Localisation probable : ...
```

### Livrable

> **Un document présentant le scénario de reproduction, les observations et la partie du traitement probablement responsable.**

---

# 5. S7 — UA.125.23 : Corriger une erreur simple

## T.125.23.1 — Corriger une erreur ciblée et vérifier

### Objectif

Corriger une erreur simple de manière ciblée et vérifier que le résultat attendu est obtenu.

### Environnement technique

**PHP + application Blog + débogueur PHP.**

L'environnement reste le même que S6 afin que la nouvelle difficulté porte sur le **raisonnement de correction**, et non sur l'apprentissage d'un nouvel outil.

### Concepts clés

| Concept | Compréhension attendue au N1 |
|---|---|
| **Erreur** | Élément du code qui provoque le comportement incorrect. |
| **Cause probable** | Partie identifiée comme responsable du problème. |
| **Correction ciblée** | Modification limitée à ce qui est nécessaire. |
| **Faute de syntaxe** | Écriture incorrecte d'une instruction. |
| **Mauvais nom de variable** | Utilisation d'un nom qui ne correspond pas à la variable attendue. |
| **Modification** | Changement effectué dans le code. |
| **Test** | Vérification après la correction. |
| **Résultat attendu** | Résultat que l'application doit produire. |
| **Preuve de correction** | Élément montrant que le problème est résolu. |

### Situation d'apprentissage

Suite au travail de S6 :

> le problème d'affichage d'une catégorie est localisé.

L'apprenant doit maintenant corriger **l'erreur identifiée** dans :

```text
categories.php
categories-template.php
```

### Progression pédagogique

```text
Problème reproduit
       ↓
Erreur localisée
       ↓
Correction ciblée
       ↓
Nouveau test
       ↓
Comparaison
       ↓
Preuve
```

La règle essentielle :

> **Ne pas modifier plusieurs éléments au hasard. Corriger ce que le diagnostic permet d'expliquer.**

### Travail à réaliser

**Corriger une erreur empêchant l'affichage des articles correspondant à la catégorie demandée.**

### Livrable

> **Code corrigé, trace de la modification et preuve d'une exécution correcte après correction.**

### Validation

L'apprenant sait :

```text
Localiser
→ Corriger
→ Tester
→ Vérifier
```

---

# 6. S9 — UA.125.24 : Résoudre un problème dans un parcours complet

## T.125.24.1 — Diagnostiquer un bug sur un parcours complet

### Objectif

Suivre une donnée à travers un parcours complet, identifier l'étape où le problème apparaît, corriger le problème et vérifier le fonctionnement de l'ensemble du parcours.

### Environnement technique

**PHP + MySQL + application Blog + Xdebug.**

### Situation d'apprentissage

> Un nouvel article est saisi dans l'administration, mais l'article n'apparaît pas comme prévu.

L'apprenant doit suivre le parcours de la donnée au lieu de chercher directement une ligne fautive.

### Parcours étudié

```text
admin/articles/form.php
        ↓
Formulaire
        ↓
$_POST
        ↓
admin/articles/traitement.php
        ↓
Traitement PHP
        ↓
Requête SQL exécutée avec PDO
        ↓
MySQL
        ↓
Enregistrement
        ↓
Récupération
        ↓
Affichage
```

### Concepts clés

| Concept | Compréhension attendue au N1 |
|---|---|
| **Parcours** | Ensemble des étapes nécessaires à une action. |
| **Flux de données** | Passage d'une donnée d'une étape à l'autre. |
| **Formulaire** | Point de départ de l'action utilisateur. |
| **`$_POST`** | Données reçues depuis le formulaire. |
| **Traitement PHP** | Code qui reçoit et traite les données. |
| **Requête SQL** | Instruction utilisée pour agir sur la base de données. |
| **PDO** | Mécanisme PHP utilisé pour communiquer avec la base. |
| **MySQL** | Système utilisé pour stocker les données. |
| **Enregistrement** | Donnée stockée dans la base. |
| **Récupération** | Lecture des données nécessaires à l'affichage. |
| **Affichage** | Présentation finale du résultat. |
| **Point de contrôle** | Endroit où l'on vérifie l'état d'une donnée. |
| **Suivi de la donnée** | Vérification de la donnée à travers les différentes étapes. |

### Progression pédagogique

**Je vois**

Le formateur représente le parcours :

```text
Formulaire
→ PHP
→ SQL
→ MySQL
→ Affichage
```

Puis montre comment placer des points de contrôle.

**Je comprends**

L'apprenant comprend qu'un problème situé en fin de parcours peut avoir commencé plus tôt.

Il réutilise :

```text
S2 → observer
S6 → localiser
S7 → corriger et vérifier
```

**Je reproduis**

Il réalise l'action complète :

```text
1. Ouvrir le formulaire
2. Saisir un article
3. Envoyer
4. Consulter le résultat
5. Reproduire le problème
```

**Je teste**

Il vérifie successivement :

```text
La donnée est-elle envoyée ?
        ↓
Est-elle reçue dans $_POST ?
        ↓
Est-elle correctement traitée en PHP ?
        ↓
La requête SQL utilise-t-elle les bonnes données ?
        ↓
L'enregistrement est-il effectué ?
        ↓
La donnée est-elle récupérée ?
        ↓
Est-elle affichée ?
```

Par exemple :

```php
var_dump($_POST);
```

peut servir à vérifier les données reçues par le traitement PHP.

**Je localise**

L'apprenant détermine l'étape où apparaît l'anomalie.

**Je corrige**

Il applique une correction ciblée.

**Je vérifie**

Il refait le parcours complet et vérifie le résultat final.

**Je présente**

Il produit une trace complète :

```text
Problème :
...

Scénario de reproduction :
...

Étape 1 :
...

Étape 2 :
...

Anomalie identifiée :
...

Correction :
...

Test après correction :
...

Résultat final :
...
```

### Travail à réaliser

**Diagnostiquer un problème d'ajout ou de modification d'article en suivant le parcours : formulaire → requête → traitement PHP → accès SQL → affichage.**

### Livrable

> **Rapport d'enquête retraçant le parcours de la donnée, l'étape fautive identifiée, le code corrigé et la trace de débogage finale confirmant le bon fonctionnement du parcours.**

### Validation

L'apprenant sait :

```text
Reproduire
→ Suivre la donnée
→ Localiser
→ Corriger
→ Tester
→ Vérifier le parcours complet
```

---

# 7. Progression des concepts

La progression des notions est volontairement cumulative.

### S2 — Observer

```text
Exécution
→ ligne
→ point d'arrêt
→ pause
→ pas à pas
→ variable
→ valeur
→ inspection
```

### S6 — Localiser

```text
Bug
→ attendu / obtenu
→ reproduction
→ observation
→ point de contrôle
→ var_dump()
→ localisation
```

### S7 — Corriger

```text
Erreur
→ cause probable
→ correction ciblée
→ test
→ preuve
```

### S9 — Résoudre

```text
Parcours
→ flux de données
→ formulaire
→ $_POST
→ PHP
→ SQL
→ MySQL
→ récupération
→ affichage
→ suivi de la donnée
```

---

# 8. Séquençage pédagogique global

## S2 : apprendre le geste de débogage

**JavaScript**

L'apprenant découvre le débogage dans un environnement simple.

```text
Je mets en pause
→ j'avance
→ je regarde
→ j'explique
```

Il apprend principalement **à observer**.

---

## S6 : transférer le geste vers PHP

**PHP + Xdebug**

L'apprenant retrouve les mêmes gestes avec PHP :

```text
Point d'arrêt
→ pause
→ pas à pas
→ inspection
```

Puis il les applique à un vrai problème du Blog.

Il apprend principalement **à localiser**.

---

## S7 : transformer le diagnostic en action

**PHP**

L'apprenant reste dans le même environnement et apprend à :

```text
Localiser
→ Corriger
→ Tester
```

Il apprend principalement **à corriger proprement et à vérifier**.

---

## S9 : résoudre de bout en bout

**PHP + MySQL**

L'apprenant réutilise toute la méthode sur un parcours plus long :

```text
Formulaire
→ $_POST
→ PHP
→ SQL
→ MySQL
→ récupération
→ affichage
```

Il apprend principalement **à suivre une donnée à travers plusieurs étapes pour résoudre un problème de bout en bout**.

---

# 9. Logique finale du parcours

Le domaine Debug peut donc être résumé ainsi :

```text
              DÉBOGUAGE N1
                   │
                   ↓
        ┌─────────────────────┐
        │ S2 — JavaScript     │
        │ Observer            │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │ S6 — PHP            │
        │ Localiser           │
        │ + découvrir Xdebug  │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │ S7 — PHP            │
        │ Corriger            │
        │ + vérifier          │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │ S9 — PHP + MySQL    │
        │ Suivre et résoudre  │
        │ un parcours complet  │
        └─────────────────────┘
```

La méthode commune à toutes les sessions devient :

> **Reproduire → Observer → Localiser → Corriger → Tester → Vérifier**

La technologie évolue :

> **JavaScript → PHP → PHP → PHP + MySQL**

mais **la méthode de débogage reste stable**. C'est précisément cette stabilité qui permet à l'apprenant N1 de construire progressivement son autonomie sans être confronté à des techniques de débogage avancées.