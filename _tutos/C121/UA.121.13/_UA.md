Pour rester cohérent avec la nouvelle organisation de **UA.121.12**, je recommande de structurer **UA.121.13 — Manipuler les tableaux et collections** selon la même logique :

> **Prérequis → Notion → Mécanisme → Exercices → Algorithmes → Synthèse**

L'apprenant vient de maîtriser les **conditions, boucles, compteurs et accumulateurs**. L'UA.121.13 doit donc utiliser immédiatement ces acquis pour passer du traitement d'une valeur au traitement de **plusieurs valeurs regroupées dans un tableau**.

# UA.121.13 — Manipuler les tableaux et collections

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement :** Node.js
**Domaine :** Construire le traitement logique

## 1. Objectif général de l'UA

L'apprenant apprend à stocker plusieurs valeurs dans un **tableau**, à accéder à ses éléments, à les modifier, à parcourir le tableau et à effectuer des traitements simples sur ses données.

La progression est :

```text
Une valeur
    ↓
Plusieurs valeurs
    ↓
Tableau
    ↓
Index
    ↓
Accès aux éléments
    ↓
Parcours
    ↓
Traitement
    ↓
Recherche
    ↓
Algorithme élémentaire
```

L'objectif n'est pas encore de maîtriser toutes les méthodes JavaScript sur les tableaux.

Le travail porte principalement sur :

* la structure du tableau ;
* les index ;
* `length` ;
* les boucles ;
* les conditions ;
* les compteurs ;
* les accumulateurs ;
* les premiers algorithmes de traitement d'une collection.

---

# 2. Progression générale

```text
T.121.131
Comprendre les tableaux
        ↓
T.121.132
Accéder et modifier les éléments
        ↓
T.121.133
Parcourir et traiter un tableau
        ↓
T.121.134
Exercices sur les tableaux
        ↓
T.121.135
Algorithmes élémentaires sur les tableaux
        ↓
T.121.136
Algorithme de synthèse :
analyser une collection
```

Cette organisation permet de construire progressivement :

```text
Comprendre
   ↓
Manipuler
   ↓
Parcourir
   ↓
S'exercer
   ↓
Construire
   ↓
Combiner
```

---

# 3. T.121.131 — Comprendre les tableaux

### Fonction dans l'UA

C'est le tutoriel de **base**.

L'apprenant passe d'une variable contenant une seule valeur à une variable contenant plusieurs valeurs.

### Objectif

Comprendre ce qu'est un tableau et pourquoi il est utilisé.

### Notions

* tableau ;
* collection ;
* élément ;
* position ;
* index ;
* premier élément ;
* dernier élément ;
* `length` ;
* tableau vide.

### Progression

```text
Une valeur
    ↓
Plusieurs valeurs
    ↓
Tableau
    ↓
Éléments
    ↓
Positions
```

### Exemple

```javascript
let notes = [12, 15, 8, 17];
```

L'apprenant doit comprendre :

```text
notes
 ├── 12
 ├── 15
 ├── 8
 └── 17
```

et :

```text
index
  0 → 12
  1 → 15
  2 → 8
  3 → 17
```

### Résultat attendu

L'apprenant sait expliquer :

> Un tableau permet de regrouper plusieurs valeurs dans une même structure.

---

# 4. T.121.132 — Accéder et modifier les éléments d'un tableau

### Fonction dans l'UA

Ce tutoriel apprend à **manipuler directement les données du tableau**.

### Objectif

Lire et modifier les éléments d'un tableau à partir de leur index.

### Notions

* accès par index ;
* modification par index ;
* premier élément ;
* dernier élément ;
* `length` ;
* position ;
* index valide.

### Progression

```text
Tableau
   ↓
Index
   ↓
Lire un élément
   ↓
Modifier un élément
```

### Exemple

```javascript
let notes = [12, 15, 8, 17];

console.log(notes[0]);
```

Résultat :

```text
12
```

Puis :

```javascript
notes[2] = 10;
```

Le tableau devient :

```text
[12, 15, 10, 17]
```

### Point pédagogique important

L'apprenant doit comprendre que :

```text
premier élément → index 0
```

et non `1`.

### Résultat attendu

L'apprenant sait :

* lire une valeur ;
* modifier une valeur ;
* identifier la position d'un élément ;
* utiliser `length`.

---

# 5. T.121.133 — Parcourir et traiter un tableau

### Fonction dans l'UA

C'est le tutoriel central.

L'apprenant réutilise les **boucles** de l'UA précédente pour traiter plusieurs valeurs.

### Objectif

Parcourir tous les éléments d'un tableau et effectuer un traitement sur chacun.

### Notions

* parcours ;
* boucle `for` ;
* index ;
* `length` ;
* compteur ;
* accumulateur ;
* condition dans un parcours.

### Progression

```text
Tableau
   ↓
Premier élément
   ↓
Élément suivant
   ↓
...
   ↓
Dernier élément
```

Exemple :

```javascript
let notes = [12, 15, 8, 17];

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

Résultat :

```text
12
15
8
17
```

Puis :

```text
Tableau
   ↓
Parcourir
   ↓
Vérifier
   ↓
Compter
   ↓
Additionner
```

### Premiers traitements

* afficher tous les éléments ;
* calculer la somme ;
* compter les éléments ;
* compter les valeurs respectant une condition ;
* calculer une moyenne simple.

### Résultat attendu

L'apprenant comprend qu'un tableau devient réellement utile lorsqu'il peut être **parcouru et traité automatiquement**.

---

# 6. T.121.134 — Exercices sur les tableaux

### Fonction dans l'UA

Ce tutoriel ne doit pas introduire de nouveau mécanisme important.

Il sert à automatiser la manipulation des tableaux.

### Objectif

Résoudre plusieurs problèmes simples sur des tableaux.

### Exercices proposés

#### Exercice 1 — Afficher les éléments

```javascript
let nombres = [4, 7, 2, 9, 5];
```

Afficher tous les éléments.

---

#### Exercice 2 — Afficher les positions

Pour le même tableau, afficher :

```text
index 0 → 4
index 1 → 7
index 2 → 2
...
```

---

#### Exercice 3 — Calculer la somme

```text
[4, 7, 2, 9, 5]
```

Résultat :

```text
27
```

---

#### Exercice 4 — Calculer la moyenne

Même tableau.

Résultat :

```text
5.4
```

---

#### Exercice 5 — Compter les nombres pairs

À partir de :

```text
[4, 7, 2, 9, 5, 8]
```

Compter les valeurs paires.

---

#### Exercice 6 — Compter les valeurs supérieures à 10

```text
[8, 15, 7, 20, 12]
```

---

#### Exercice 7 — Rechercher une valeur

À partir de :

```text
[12, 8, 15, 4, 19]
```

chercher `15`.

Le programme doit indiquer si la valeur existe.

---

#### Exercice 8 — Modifier les éléments

À partir d'un tableau de notes, modifier une valeur donnée.

### Résultat attendu

L'apprenant sait résoudre de petits problèmes combinant :

```text
Tableau
+
Boucle
+
Condition
+
Compteur
+
Accumulateur
```

---

# 7. T.121.135 — Construire des algorithmes élémentaires sur un tableau

### Fonction dans l'UA

On passe des exercices vers les premiers **algorithmes réutilisables**.

### Objectif

Construire des traitements classiques sur un tableau sans utiliser de méthode JavaScript avancée.

### Notions

* recherche ;
* maximum ;
* minimum ;
* position ;
* valeur trouvée ;
* parcours complet ;
* résultat intermédiaire.

### Algorithmes

#### 1. Recherche linéaire

Exemple :

```text
Tableau :
[12, 8, 15, 4, 19]

Valeur recherchée :
15
```

Principe :

```text
Premier élément
    ↓
Comparer
    ↓
Élément trouvé ?
   ├── oui → arrêter
   └── non → continuer
```

---

#### 2. Recherche du maximum

Exemple :

```text
[12, 8, 15, 4, 19]
```

Résultat :

```text
19
```

Principe :

```text
prendre une première valeur
        ↓
comparer avec la suivante
        ↓
conserver la plus grande
        ↓
continuer
```

---

#### 3. Recherche du minimum

Même principe pour la plus petite valeur.

---

#### 4. Recherche de la position

Exemple :

```text
[12, 8, 15, 4, 19]
```

Recherche :

```text
15
```

Résultat :

```text
index 2
```

### Résultat attendu

L'apprenant possède maintenant un premier **répertoire d'algorithmes élémentaires** :

```text
rechercher()
trouverMaximum()
trouverMinimum()
trouverPosition()
```

Ces traitements pourront être transformés en fonctions dans l'UA.121.14.

---

# 8. T.121.136 — Algorithme de synthèse : analyser une collection

### Fonction dans l'UA

C'est le **tutoriel de synthèse** de l'UA.

Il reprend les traitements précédents et les combine dans un même problème.

### Objectif

Analyser une collection de valeurs à partir d'un tableau.

### Données

Exemple :

```javascript
let notes = [12, 15, 8, 17, 10, 6, 14];
```

### Travail demandé

Le programme doit :

1. afficher les notes ;
2. calculer la somme ;
3. calculer la moyenne ;
4. rechercher la meilleure note ;
5. rechercher la plus petite note ;
6. compter les notes supérieures ou égales à `10`.

### Organisation

```text
Tableau de notes
       ↓
   Parcours
       ↓
 ┌─────┼─────┬─────┬─────┐
 ↓     ↓     ↓     ↓     ↓
Somme Moyenne Max  Min  Comptage
       ↓
   Résultat final
```

### Algorithme

```text
notes
  ↓
parcourir le tableau
  ↓
pour chaque note
  ├── ajouter à la somme
  ├── comparer au maximum
  ├── comparer au minimum
  └── vérifier si note >= 10
  ↓
calculer la moyenne
  ↓
afficher les résultats
```

### Résultat attendu

Pour :

```javascript
let notes = [12, 15, 8, 17, 10, 6, 14];
```

le programme doit obtenir :

```text
Somme : 82
Moyenne : 11.71
Maximum : 17
Minimum : 6
Notes validées : 5
```

### Critère de réussite

Le traitement :

* parcourt correctement le tableau ;
* ne traite aucun élément manuellement ;
* utilise les boucles et conditions déjà apprises ;
* calcule correctement les résultats ;
* fonctionne avec un autre tableau.

---

# 9. Vue synthétique

| Tutoriel      | Rôle         | Progression         | Traitement principal              |
| ------------- | ------------ | ------------------- | --------------------------------- |
| **T.121.131** | Base         | Comprendre          | Tableau, élément, index           |
| **T.121.132** | Manipulation | Lire → modifier     | Accès par index                   |
| **T.121.133** | Mécanisme    | Parcourir → traiter | `for`, `length`, compteur         |
| **T.121.134** | Exercices    | Réutiliser          | Somme, moyenne, comptage          |
| **T.121.135** | Algorithmes  | Construire          | Recherche, max, min               |
| **T.121.136** | Synthèse     | Combiner            | Analyse complète d'une collection |

---

# 10. Progression complète de l'UA

```text
             TABLEAUX ET COLLECTIONS
                       │
                       ▼
          T.121.131 — Comprendre
                       │
          tableau / élément / index
                       │
                       ▼
          T.121.132 — Manipuler
                       │
             lire / modifier
                       │
                       ▼
          T.121.133 — Parcourir
                       │
               boucle + index
                       │
                       ▼
          T.121.134 — Exercices
                       │
        somme / moyenne / comptage
                       │
                       ▼
          T.121.135 — Algorithmes
                       │
       recherche / maximum / minimum
                       │
                       ▼
          T.121.136 — Synthèse
                       │
             analyser une collection
```

## 11. Lien avec l'UA précédente

La transition entre les deux UA devient très claire :

```text
UA.121.12
Contrôler l'exécution
        ↓
conditions
boucles
compteurs
accumulateurs
        ↓
UA.121.13
Manipuler les tableaux
        ↓
plusieurs valeurs
        ↓
parcours
        ↓
traitement des éléments
        ↓
algorithmes sur collections
```

La règle pédagogique importante pour cette UA est donc :

> **Le tableau n'est pas appris isolément : il est immédiatement relié aux boucles, aux conditions, aux compteurs et aux accumulateurs déjà appris dans l'UA.121.12.**

Ainsi, l'UA.121.13 prépare directement **UA.121.14 — Créer et utiliser des fonctions**, où les algorithmes de recherche, maximum, minimum, somme et comptage pourront être transformés en **traitements réutilisables**.
