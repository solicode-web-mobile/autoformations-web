---
title: "Construire et chaîner plusieurs traitements"
layout: tuto
slug: "construire-chainer-plusieurs-traitements"
permalink: /tutos/:slug/
tuto_id: "T.121.175"
type: "classique"
version: "normal"
ua: "UA.121.17"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à :

* décomposer un problème ;
* identifier les sous-problèmes ;
* définir les responsabilités ;
* définir les entrées et les sorties ;
* construire et tester les sous-traitements.

Dans ce tutoriel, vous allez apprendre à **organiser plusieurs traitements et à faire circuler leurs résultats**.

Vous allez apprendre à :

* identifier les traitements indépendants ;
* identifier les traitements dépendants ;
* déterminer l'ordre d'exécution ;
* faire passer le résultat d'une fonction à une autre ;
* construire une chaîne simple de traitements ;
* tester chaque traitement ;
* tester ensuite leur combinaison.

La progression est :

```text
Problème global
↓
Sous-traitements
↓
Entrées / sorties
↓
Dépendances
↓
Ordre d'exécution
↓
Chaînage
↓
Test global
```

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* créer des fonctions ;
* utiliser des paramètres ;
* retourner une valeur avec `return` ;
* analyser un problème ;
* décomposer un problème ;
* définir les entrées et sorties d'un traitement ;
* tester une fonction séparément.

Vous devez avoir terminé :

**T.121.171 — Comprendre la décomposition d'un problème**

**T.121.172 — Définir les entrées et sorties des traitements**

**T.121.173 — Construire les sous-traitements**

**T.121.174 — Exercices de décomposition**

## Données de départ

Nous allons travailler sur un problème simple.

### Problème

Une application reçoit les notes d'un groupe.

Elle doit :

* calculer la moyenne ;
* déterminer si le groupe est validé ;
* produire une appréciation.

Les notes sont :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Les règles d'appréciation sont :

```text
moyenne >= 16 → Très bien
moyenne >= 10 → Validé
sinon → Non validé
```

Les traitements nécessaires sont :

```text
calculerMoyenne()
determinerAppreciation()
```

La difficulté est maintenant de comprendre **dans quel ordre les utiliser**.

## Partie 1 — Théorie

### 1.1. Plusieurs traitements ne sont pas forcément chaînés

Un problème peut contenir plusieurs traitements qui utilisent directement la même entrée.

Exemple :

```text
notes
├── calculerMoyenne()
├── trouverMaximum()
└── trouverMinimum()
```

Les trois traitements peuvent fonctionner séparément.

Ils sont donc indépendants les uns des autres.

On peut les exécuter dans n'importe quel ordre si aucun résultat de l'un n'est nécessaire à l'autre.

### 1.2. Un traitement peut dépendre d'un autre

Considérons :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

`determinerAppreciation()` ne peut pas fonctionner tant que la moyenne n'est pas disponible.

Il existe donc une dépendance :

```text
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
```

La moyenne est :

* la sortie du premier traitement ;
* l'entrée du deuxième traitement.

### 1.3. Qu'est-ce que le chaînage ?

Le **chaînage** consiste à organiser plusieurs traitements de façon que le résultat d'un traitement puisse devenir l'entrée du traitement suivant.

Exemple :

```text
Traitement A
↓
Résultat A
↓
Traitement B
↓
Résultat B
↓
Traitement C
```

Le résultat circule donc d'un traitement à l'autre.

### 1.4. Exemple simple

On veut calculer la moyenne puis déterminer l'appréciation.

Premier traitement :

```text
notes
↓
calculerMoyenne()
↓
moyenne
```

Deuxième traitement :

```text
moyenne
↓
determinerAppreciation()
↓
appréciation
```

Le chaînage complet est :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

### 1.5. Transformer le schéma en variables

En JavaScript :

```javascript
let moyenne = calculerMoyenne(notes);
```

La variable `moyenne` contient maintenant la sortie du premier traitement.

On peut ensuite l'utiliser :

```javascript
let appreciation = determinerAppreciation(moyenne);
```

On obtient :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

La variable joue donc le rôle de **liaison** entre les traitements.

### 1.6. Construire les fonctions

Le premier traitement peut être :

```javascript
function calculerMoyenne(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }

    return somme / notes.length;
}
```

Le second :

```javascript
function determinerAppreciation(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    }

    if (moyenne >= 10) {
        return "Validé";
    }

    return "Non validé";
}
```

### 1.7. Construire le chaînage

On peut maintenant écrire :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

let moyenne = calculerMoyenne(notes);

let appreciation = determinerAppreciation(moyenne);

console.log("Moyenne :", moyenne);
console.log("Appréciation :", appreciation);
```

Résultat :

```text
Moyenne : 12.666666666666666
Appréciation : Validé
```

### 1.8. Comprendre l'ordre d'exécution

Le programme doit respecter cet ordre :

```text
1. calculer la moyenne
2. stocker la moyenne
3. utiliser la moyenne
4. calculer l'appréciation
5. afficher le résultat
```

On ne peut pas commencer par :

```javascript
determinerAppreciation(moyenne);
```

avant d'avoir obtenu :

```javascript
let moyenne = calculerMoyenne(notes);
```

La dépendance impose donc un ordre.

### 1.9. Plusieurs branches à partir d'un même résultat

Une sortie peut alimenter plusieurs traitements.

Exemple :

```text
notes
↓
calculerMoyenne()
↓
moyenne
├──→ determinerValidation()
└──→ determinerAppreciation()
```

La moyenne devient une donnée commune à deux traitements.

On peut donc écrire :

```javascript
let moyenne = calculerMoyenne(notes);

let validation = determinerValidation(moyenne);

let appreciation = determinerAppreciation(moyenne);
```

Les deux traitements utilisent la même sortie :

```text
moyenne
```

### 1.10. Plusieurs traitements indépendants et une chaîne

Un problème peut combiner les deux situations.

Exemple :

```text
                         ┌──→ trouverMaximum()
                         │
notes ──→ calculerMoyenne() ──→ moyenne ──→ determinerAppreciation()
                         │
                         └──→ trouverMinimum()
```

On peut simplifier :

```text
notes
├──→ trouverMaximum()
├──→ trouverMinimum()
└──→ calculerMoyenne()
       ↓
     moyenne
       ↓
determinerAppreciation()
```

Les trois premiers traitements utilisent les notes.

La fonction `determinerAppreciation()` dépend uniquement de la moyenne.

### 1.11. Ne pas confondre appel et chaînage

Appeler plusieurs fonctions ne signifie pas forcément les chaîner.

Exemple :

```javascript
let somme = calculerSomme(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
```

Ici :

```text
notes
├──→ calculerSomme()
├──→ trouverMaximum()
└──→ trouverMinimum()
```

Les traitements utilisent la même entrée.

Ils ne dépendent pas les uns des autres.

À l'inverse :

```javascript
let moyenne = calculerMoyenne(notes);
let appreciation = determinerAppreciation(moyenne);
```

forme une chaîne :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
```

### 1.12. Déterminer l'ordre d'exécution

Pour trouver l'ordre, posez la question :

> De quelle donnée ce traitement a-t-il besoin ?

Exemple :

```text
determinerAppreciation()
```

a besoin de :

```text
moyenne
```

La moyenne est produite par :

```text
calculerMoyenne()
```

Donc :

```text
calculerMoyenne()
```

doit être exécuté avant :

```text
determinerAppreciation()
```

### 1.13. Construire un plan d'exécution

Avant le code, écrivez :

```text
1. calculer la moyenne
2. déterminer l'appréciation
3. afficher les résultats
```

Puis :

```text
notes
↓
moyenne
↓
appréciation
```

Cette préparation évite de mélanger les responsabilités.

### 1.14. Tester le chaînage

Il faut d'abord vérifier chaque fonction.

Puis vérifier leur combinaison.

Exemple :

```text
Test de calculerMoyenne()
✓

Test de determinerAppreciation()
✓

Test du chaînage
✓
```

Un problème dans le résultat final peut alors être localisé plus facilement.

### 1.15. Modifier un traitement sans casser les autres

Supposons que `determinerAppreciation()` change ses règles.

La fonction :

```text
calculerMoyenne()
```

ne doit pas être modifiée si elle fonctionne toujours correctement.

La décomposition et le chaînage permettent de limiter les modifications au traitement concerné.

### 1.16. À retenir

Le chaînage consiste à faire circuler les résultats :

```text
Entrée
↓
Traitement A
↓
Résultat A
↓
Traitement B
↓
Résultat B
```

Pour organiser un chaînage :

```text
1. identifier les dépendances ;
2. déterminer l'ordre ;
3. stocker les résultats ;
4. transmettre ces résultats ;
5. tester chaque traitement ;
6. tester la combinaison.
```

## Partie 2 — Pratique

### 2.1. Identifier la dépendance

Observez :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

Complétez :

```text
Traitement A :
________________________

Sortie A :
________________________

Traitement B :
________________________

Entrée B :
________________________
```

Puis répondez :

> Pourquoi le traitement B doit-il attendre le traitement A ?

### 2.2. Construire un premier chaînage

Utilisez :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Construisez :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

Commencez par écrire les fonctions.

Puis écrivez le traitement principal.

### 2.3. Tester le premier chaînage

Avec :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

le résultat attendu est :

```text
Moyenne : 12.666666666666666
Appréciation : Validé
```

Testez également :

```javascript
let notes = [16, 17, 18];
```

Résultat attendu :

```text
Moyenne : 17
Appréciation : Très bien
```

Puis :

```javascript
let notes = [5, 7, 8];
```

Résultat attendu :

```text
Moyenne : 6.666666666666667
Appréciation : Non validé
```

### 2.4. Construire deux traitements indépendants

Utilisez :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Construisez :

```text
notes
├──→ trouverMaximum()
└──→ trouverMinimum()
```

Dans ce cas, aucun des deux traitements n'a besoin du résultat de l'autre.

Écrivez :

```javascript
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
```

Puis affichez :

```text
Maximum : 17
Minimum : 8
```

### 2.5. Combiner indépendance et chaînage

Construisez maintenant :

```text
notes
├──→ trouverMaximum()
├──→ trouverMinimum()
└──→ calculerMoyenne()
       ↓
     moyenne
       ↓
determinerAppreciation()
```

Écrivez le traitement principal correspondant.

Vous devez obtenir :

```text
Maximum : 17
Minimum : 8
Moyenne : 12.666666666666666
Appréciation : Validé
```

### 2.6. Identifier l'ordre d'exécution

À partir de :

```text
notes
├──→ calculerMoyenne()
│      ↓
│    moyenne
│      ↓
│    determinerAppreciation()
│
├──→ trouverMaximum()
│
└──→ trouverMinimum()
```

indiquez un ordre d'exécution possible.

Complétez :

```text
1. ______________________
2. ______________________
3. ______________________
4. ______________________
5. ______________________
```

Certaines fonctions peuvent être exécutées avant ou après d'autres lorsqu'elles sont indépendantes.

### 2.7. Construire une chaîne avec trois traitements

Nouveau problème :

> Une application reçoit une liste de notes. Elle doit calculer la moyenne, déterminer si le groupe est validé, puis produire une appréciation.

Les traitements sont :

```text
calculerMoyenne()
determinerValidation()
determinerAppreciation()
```

Construisez la chaîne :

```text
notes
↓
____________________
↓
moyenne
↓
____________________
↓
validation
↓
____________________
↓
appréciation
```

Identifiez ensuite les entrées et sorties de chaque traitement.

### 2.8. Construire le chaînage

Les règles de validation sont :

```text
moyenne >= 10 → Validé
moyenne < 10 → Non validé
```

Les règles d'appréciation sont :

```text
moyenne >= 16 → Très bien
moyenne >= 10 → Bien
moyenne < 10 → À améliorer
```

Construisez :

```javascript
function calculerMoyenne(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }

    return somme / notes.length;
}

function determinerValidation(moyenne) {
    if (moyenne >= 10) {
        return "Validé";
    }

    return "Non validé";
}

function determinerAppreciation(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    }

    if (moyenne >= 10) {
        return "Bien";
    }

    return "À améliorer";
}
```

Puis construisez le traitement principal :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

let moyenne = calculerMoyenne(notes);
let validation = determinerValidation(moyenne);
let appreciation = determinerAppreciation(moyenne);

console.log("Moyenne :", moyenne);
console.log("Validation :", validation);
console.log("Appréciation :", appreciation);
```

### 2.9. Vérifier la chaîne avec plusieurs données

Testez avec :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Puis :

```javascript
let notes = [16, 17, 18];
```

Puis :

```javascript
let notes = [5, 7, 8];
```

Complétez :

| Notes                     | Moyenne | Validation | Appréciation |
| ------------------------- | ------: | ---------- | ------------ |
| `[12, 15, 8, 17, 10, 14]` |         |            |              |
| `[16, 17, 18]`            |         |            |              |
| `[5, 7, 8]`               |         |            |              |

### 2.10. Construire un chaînage avec une collection

Nouveau problème :

> Une application reçoit une liste de notes. Elle doit calculer les notes validées, puis calculer la moyenne des notes validées.

Représentez d'abord :

```text
notes
↓
identifier les notes validées
↓
notes validées
↓
calculer la moyenne
↓
moyenne validée
```

Identifiez les deux traitements nécessaires.

La première fonction produit :

```text
notes validées
```

La seconde reçoit :

```text
notes validées
```

### 2.11. Déterminer l'ordre des traitements

Pour le problème précédent :

```text
Traitement A :
sélectionner les notes validées

Traitement B :
calculer la moyenne
```

Répondez :

> Lequel doit être exécuté en premier ?

Expliquez pourquoi.

Puis écrivez :

```text
Traitement A
↓
Résultat A
↓
Traitement B
↓
Résultat B
```

### 2.12. Exercice de correction

Observez :

```javascript
let moyenne = determinerAppreciation(notes);
let appreciation = calculerMoyenne(moyenne);
```

Le code est incorrect.

Identifiez le problème.

La bonne relation est :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

Corrigez le code.

### 2.13. Exercice individuel

Une application doit analyser les résultats d'un groupe.

Elle doit :

* calculer la moyenne ;
* trouver le maximum ;
* trouver le minimum ;
* produire une appréciation à partir de la moyenne.

Données :

```javascript
let notes = [14, 9, 12, 16, 7, 11];
```

Vous devez construire :

```text
notes
├──→ calculerMoyenne()
│      ↓
│    moyenne
│      ↓
│    determinerAppreciation()
│
├──→ trouverMaximum()
│
└──→ trouverMinimum()
```

Vous devez :

1. construire les fonctions ;
2. tester chaque fonction ;
3. identifier les dépendances ;
4. déterminer l'ordre d'exécution ;
5. construire le traitement principal ;
6. tester l'ensemble.

### 2.14. Exercice de synthèse

Madani Ali souhaite construire un programme d'analyse des résultats.

Données :

```javascript
let notes = [13, 8, 16, 11, 7, 15];
```

Le programme doit produire :

```text
Somme
Moyenne
Maximum
Minimum
Notes validées
Appréciation
```

L'appréciation dépend de la moyenne.

Vous devez maintenant préparer le chaînage.

#### Étape 1 — Identifier les traitements

Complétez :

```text
____________________
____________________
____________________
____________________
____________________
____________________
```

#### Étape 2 — Identifier les traitements indépendants

Quels traitements utilisent directement :

```text
notes
```

sans attendre le résultat d'un autre traitement ?

#### Étape 3 — Identifier le traitement dépendant

Quel traitement a besoin de :

```text
moyenne
```

comme entrée ?

#### Étape 4 — Construire le schéma

Votre schéma doit ressembler à :

```text
notes
├──→ ____________________
├──→ ____________________
├──→ ____________________
├──→ ____________________
│
└──→ ____________________
       ↓
     moyenne
       ↓
  ____________________
```

#### Étape 5 — Construire le programme

Implémentez ensuite les fonctions et le traitement principal.

**Travail à faire :**

Construire et chaîner plusieurs traitements afin de transformer un problème décomposé en traitement organisé.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la décomposition du problème ;
* les traitements identifiés ;
* les entrées et sorties ;
* les dépendances ;
* le schéma de chaînage ;
* le code des fonctions ;
* le traitement principal ;
* les tests individuels ;
* le test global.

**Résultat attendu :**

Pour le problème :

```javascript
let notes = [13, 8, 16, 11, 7, 15];
```

le programme doit notamment produire :

```text
Somme : 70
Moyenne : 11.666666666666666
Maximum : 16
Minimum : 7
Notes validées : 4
```

L'appréciation doit être calculée à partir de la moyenne et non directement à partir du tableau.

**Critère de réussite :**

Vous avez réussi lorsque :

* les traitements sont correctement séparés ;
* les responsabilités sont respectées ;
* les sorties sont correctement transmises aux traitements dépendants ;
* l'ordre d'exécution respecte les dépendances ;
* les traitements indépendants peuvent être exécutés séparément ;
* chaque fonction est testée ;
* le traitement complet est testé ;
* aucun traitement ne reçoit une donnée qu'il n'est pas prévu de recevoir.

## Bilan

Vous savez maintenant faire plus que décomposer un problème.

Vous savez **organiser les traitements selon leurs dépendances**.

Vous avez appris à distinguer :

### Traitements indépendants

```text
notes
├──→ traitement A
├──→ traitement B
└──→ traitement C
```

### Traitements chaînés

```text
notes
↓
traitement A
↓
résultat A
↓
traitement B
↓
résultat B
```

La méthode complète devient :

```text
Comprendre
↓
Décomposer
↓
Définir les entrées et sorties
↓
Construire les traitements
↓
Identifier les dépendances
↓
Déterminer l'ordre
↓
Chaîner
↓
Tester
↓
Vérifier
```

Vous êtes maintenant prêt pour le dernier tutoriel de l'UA.121.17 : **T.121.176 — Algorithme de synthèse : construire un traitement complet**.

## Glossaire

* **Chaînage** : organisation de plusieurs traitements dans laquelle le résultat d'un traitement devient l'entrée d'un autre.
* **Dépendance** : relation entre deux traitements lorsque l'un a besoin du résultat de l'autre.
* **Traitement indépendant** : traitement qui peut utiliser directement ses propres données sans attendre un autre traitement.
* **Résultat intermédiaire** : résultat produit par un traitement et utilisé ensuite par un autre.
* **Ordre d'exécution** : ordre dans lequel les traitements doivent être réalisés.
* **Branche** : traitement qui part d'une même donnée que d'autres traitements.
