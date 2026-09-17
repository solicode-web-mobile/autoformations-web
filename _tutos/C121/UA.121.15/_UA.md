# UA.121.15 — Résoudre des problèmes algorithmiques simples

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement d’exécution :** Node.js
**Domaine de compétence :** Construire le traitement logique

---

## 1. Objectif général de l’UA

Dans les UA précédentes, l'apprenant a appris séparément :

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
Algorithmes élémentaires
   ↓
Fonctions
```

Il dispose maintenant d'un premier répertoire de traitements :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterValidees()
```

Le but de l'UA.121.15 est de passer de :

> **« Je sais construire un traitement »**

à :

> **« Je sais choisir et combiner les traitements nécessaires pour résoudre un problème. »**

L'apprenant doit apprendre à partir d'un problème simple, identifier les données, définir le résultat attendu, choisir les traitements nécessaires, puis construire une solution avec les notions déjà acquises.

La progression devient :

```text
Problème
   ↓
Comprendre
   ↓
Identifier les données
   ↓
Définir le résultat attendu
   ↓
Découper le problème
   ↓
Choisir les traitements
   ↓
Construire
   ↓
Tester
   ↓
Vérifier
```

---

# 2. Objectif opérationnel

À la fin de l'UA, l'apprenant doit être capable de :

* lire un problème simple ;
* identifier les données disponibles ;
* identifier les entrées ;
* identifier les sorties ;
* identifier les règles ;
* déterminer les traitements nécessaires ;
* choisir entre variable, condition, boucle, tableau et fonction ;
* réutiliser un algorithme élémentaire déjà appris ;
* décomposer un problème simple en plusieurs traitements ;
* tester chaque traitement ;
* vérifier le résultat final.

L'UA ne doit pas encore introduire la **décomposition avancée**, le **chaînage complexe** ou la conception architecturale. Ces notions seront approfondies dans **UA.121.17**.

---

# 3. Principe pédagogique de l'UA

Le problème doit être abordé avant le code.

La démarche devient :

```text
Comprendre
   ↓
Modéliser simplement
   ↓
Construire
   ↓
Tester
   ↓
Corriger
```

Le code ne doit donc pas être la première étape.

L'apprenant doit d'abord savoir répondre à :

```text
Quelles sont les données ?
Que doit produire le programme ?
Quelles règles faut-il appliquer ?
Quels traitements sont nécessaires ?
```

---

# 4. Progression des tutoriels

Je recommande **6 tutoriels** pour conserver la même structure que les UA.121.12, UA.121.13 et UA.121.14 :

```text
T.121.151
Comprendre un problème algorithmique
        ↓
T.121.152
Identifier les données et les règles
        ↓
T.121.153
Construire une solution simple
        ↓
T.121.154
Exercices de résolution
        ↓
T.121.155
Construire une solution avec plusieurs traitements
        ↓
T.121.156
Algorithme de synthèse : analyser une collection
```

La progression est :

```text
Comprendre
   ↓
Analyser
   ↓
Construire
   ↓
S'exercer
   ↓
Combiner
   ↓
Résoudre
```

---

# 5. T.121.151 — Comprendre un problème algorithmique

### Fonction dans l'UA

Premier tutoriel de découverte.

L'apprenant doit apprendre qu'un problème algorithmique n'est pas immédiatement un problème de code.

### Objectif

Apprendre à lire un problème et à identifier ce qui est demandé.

### Notions

* problème ;
* objectif ;
* données ;
* entrée ;
* sortie ;
* résultat attendu ;
* règle ;
* traitement.

### Exemple

Problème :

> À partir d'une liste de notes, afficher la moyenne.

L'apprenant identifie :

```text
Données :
une liste de notes

Résultat :
une moyenne
```

### Progression

```text
Problème
   ↓
Que possède-t-on ?
   ↓
Que doit-on obtenir ?
```

### Exemple concret

```text
Données :
[12, 15, 8, 17]

Résultat attendu :
13
```

### Résultat attendu

L'apprenant sait reformuler un problème sous la forme :

```text
Entrées → Traitement → Sorties
```

---

# 6. T.121.152 — Identifier les données et les règles

### Fonction dans l'UA

Ce tutoriel transforme la compréhension du problème en **description exploitable**.

### Objectif

Identifier :

* les données ;
* les règles ;
* les traitements ;
* les résultats.

### Exemple

Problème :

> À partir d'une liste de notes, calculer la moyenne et indiquer si elle est validée.

L'apprenant construit :

```text
Données :
notes

Règle 1 :
calculer la moyenne

Règle 2 :
moyenne >= 10

Résultats :
moyenne
validée / non validée
```

### Notions

* entrée ;
* sortie ;
* règle ;
* traitement ;
* condition ;
* calcul ;
* résultat intermédiaire.

### Méthode

```text
1. Identifier les données.
2. Identifier le résultat.
3. Identifier les règles.
4. Déterminer les traitements.
```

### Résultat attendu

L'apprenant sait passer de :

```text
Problème en français
```

à :

```text
Données
+
Règles
+
Résultats
```

sans encore produire toute la solution JavaScript.

---

# 7. T.121.153 — Construire une solution simple

### Fonction dans l'UA

L'apprenant passe maintenant de l'analyse au code.

### Objectif

Construire une solution simple à partir de données et de règles déjà identifiées.

### Notions mobilisées

* variables ;
* conditions ;
* boucles ;
* tableaux ;
* fonctions ;
* algorithmes élémentaires.

### Exemple

Problème :

> Déterminer si un nombre est positif.

Analyse :

```text
Donnée :
nombre

Règle :
nombre >= 0

Résultat :
Positif / Négatif
```

Solution :

```javascript
let nombre = 12;

if (nombre >= 0) {
    console.log("Positif");
} else {
    console.log("Négatif");
}
```

### Deuxième niveau

Problème :

> Calculer la moyenne d'une liste de notes puis indiquer si elle est validée.

L'apprenant choisit :

```text
tableau
   ↓
calculerMoyenne()
   ↓
condition
```

### Résultat attendu

L'apprenant comprend qu'il ne doit pas chercher une nouvelle notion à chaque problème.

Il doit d'abord regarder dans son **répertoire de traitements déjà appris**.

---

# 8. T.121.154 — Exercices de résolution algorithmique

### Fonction dans l'UA

Ce tutoriel constitue la phase d'entraînement.

Il ne doit pas introduire de nouvelles notions importantes.

### Objectif

Résoudre progressivement des problèmes où plusieurs notions doivent être choisies.

### Exercices proposés

### Exercice 1 — Positif ou négatif

```text
Entrée :
nombre

Sortie :
Positif / Négatif
```

### Exercice 2 — Maximum de deux valeurs

```text
Entrées :
a
b

Sortie :
plus grande valeur
```

### Exercice 3 — Moyenne et validation

```text
Entrée :
tableau de notes

Sorties :
moyenne
validé / non validé
```

### Exercice 4 — Analyse d'une collection

```text
Entrée :
tableau de nombres

Sorties :
somme
moyenne
```

### Exercice 5 — Recherche

```text
Entrées :
tableau
valeur recherchée

Sortie :
true / false
```

### Exercice 6 — Analyse de notes

```text
Entrée :
tableau de notes

Sorties :
maximum
minimum
moyenne
nombre de notes validées
```

### Méthode imposée

Pour chaque problème :

```text
1. Lire.
2. Identifier les données.
3. Identifier le résultat.
4. Écrire les règles.
5. Choisir les traitements.
6. Coder.
7. Tester.
```

### Résultat attendu

L'apprenant commence à choisir seul les notions utiles.

---

# 9. T.121.155 — Construire une solution avec plusieurs traitements

### Fonction dans l'UA

Ce tutoriel constitue la transition entre **résolution simple** et **décomposition**.

Il ne doit pas encore faire de la décomposition avancée de l'UA.121.17.

### Objectif

Construire une solution à partir de plusieurs fonctions et traitements déjà connus.

### Exemple

Problème :

> Analyser les résultats d'un groupe d'apprenants.

Données :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Résultats :

```text
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
```

### L'apprenant choisit les fonctions

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
```

### Structure

```text
Problème
   ↓
Identifier les résultats
   ↓
Associer chaque résultat à un traitement
   ↓
Appeler les fonctions
   ↓
Combiner les résultats
```

### Exemple

```javascript
let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let validees = compterValidees(notes);
```

### Résultat attendu

L'apprenant commence à voir qu'un problème peut être construit à partir de plusieurs **briques de traitement existantes**.

---

# 10. T.121.156 — Algorithme de synthèse : analyser une collection

### Fonction dans l'UA

C'est le **tutoriel de synthèse** de l'UA.

Il doit demander à l'apprenant de résoudre un problème relativement complet sans lui donner directement les fonctions à appeler.

### Objectif

Construire une solution complète à partir d'un problème donné.

### Situation

Une application doit analyser les résultats d'un groupe.

Données :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Le programme doit produire :

```text
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Moyenne validée
```

### Première étape : comprendre

```text
Entrée :
tableau de notes
```

```text
Sorties :
plusieurs informations
```

### Deuxième étape : identifier les traitements

L'apprenant doit identifier lui-même :

```text
compter
somme
moyenne
maximum
minimum
condition
```

### Troisième étape : choisir les fonctions

Le répertoire existant peut être réutilisé :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
estValidee()
```

### Quatrième étape : construire

Le traitement devient :

```text
Tableau
   ↓
Analyse
   ├── somme
   ├── moyenne
   ├── maximum
   ├── minimum
   └── notes validées
          ↓
      résultat final
```

### Résultats attendus

Pour :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

on obtient :

```text
Nombre de notes : 8
Somme : 91
Moyenne : 11.375
Maximum : 17
Minimum : 6
Notes validées : 5
```

La moyenne des notes validées est :

```text
13.6
```

### Critère de réussite

L'apprenant doit :

* identifier correctement les données ;
* identifier les résultats demandés ;
* choisir les traitements nécessaires ;
* réutiliser les fonctions déjà connues ;
* construire le programme ;
* tester avec un second tableau ;
* vérifier les résultats.

---

# 11. Vue synthétique

| Tutoriel      | Fonction   | Progression                    | Production              |
| ------------- | ---------- | ------------------------------ | ----------------------- |
| **T.121.151** | Comprendre | problème → données → résultat  | Analyse simple          |
| **T.121.152** | Formaliser | données → règles → traitements | Description du problème |
| **T.121.153** | Construire | analyse → code                 | Solution simple         |
| **T.121.154** | Exercices  | problèmes progressifs          | Solutions individuelles |
| **T.121.155** | Combiner   | fonctions → traitement complet | Solution composée       |
| **T.121.156** | Synthèse   | problème → solution complète   | Algorithme de synthèse  |

---

# 12. Progression globale

```text
             RÉSOUDRE UN PROBLÈME ALGORITHMIQUE
                           │
                           ▼
              T.121.151 — Comprendre
                           │
                  problème / objectif
                           │
                           ▼
               T.121.152 — Analyser
                           │
                 données / règles
                           │
                           ▼
               T.121.153 — Construire
                           │
                règles → traitement
                           │
                           ▼
                T.121.154 — Exercices
                           │
                  résolution autonome
                           │
                           ▼
               T.121.155 — Combiner
                           │
               plusieurs traitements
                           │
                           ▼
                T.121.156 — Synthèse
                           │
                  problème complet
```

---

# 13. Relation avec les UA précédentes

Cette UA joue un rôle important dans le parcours.

```text
UA.121.12
Contrôler l'exécution
        ↓
conditions + boucles
```

```text
UA.121.13
Manipuler les tableaux
        ↓
parcours + algorithmes élémentaires
```

```text
UA.121.14
Créer des fonctions
        ↓
traitements réutilisables
```

Puis :

```text
UA.121.15
Résoudre des problèmes
        ↓
choisir les traitements
        ↓
combiner les traitements
        ↓
construire une solution
```

Et seulement après :

```text
UA.121.16
Trier une collection
```

puis :

```text
UA.121.17
Combiner plusieurs traitements
        ↓
décomposition
        ↓
chaînage
        ↓
traitement complet
```

---

# 14. Règle pédagogique fondamentale de l'UA.121.15

La règle centrale peut être formulée ainsi :

> **Avant de coder, l'apprenant identifie le problème, les données, le résultat attendu et les règles. Il choisit ensuite parmi les notions et traitements déjà appris pour construire la solution.**

Cela évite de transformer l'apprentissage algorithmique en mémorisation de nouvelles commandes JavaScript.

Le parcours devient :

```text
Comprendre le problème
        ↓
Identifier les données
        ↓
Identifier le résultat
        ↓
Définir les règles
        ↓
Choisir les traitements connus
        ↓
Construire
        ↓
Tester
        ↓
Vérifier
```

Cette UA constitue donc le véritable passage entre **l'apprentissage des notions** et la **résolution autonome de problèmes algorithmiques**.
