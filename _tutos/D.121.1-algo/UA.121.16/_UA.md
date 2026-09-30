# UA.121.16 — Trier une collection

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement d’exécution :** Node.js
**Domaine de compétence :** Construire le traitement logique

---

## 1. Objectif général de l’UA

Dans les UA précédentes, l’apprenant sait :

```text
Variables
   ↓
Conditions
   ↓
Boucles
   ↓
Tableaux
   ↓
Recherche
   ↓
Maximum / Minimum
   ↓
Fonctions
   ↓
Résolution de problèmes
```

L’UA.121.16 introduit un nouveau type de traitement :

> **ordonner les éléments d’une collection selon une règle.**

L'apprenant va passer de :

```text
Trouver une valeur
```

à :

```text
Modifier l'ordre de plusieurs valeurs
```

L’objectif n’est pas d’apprendre les méthodes JavaScript de tri comme `sort()`.

L’objectif est de **comprendre et construire un algorithme de tri simple**.

---

# 2. Objectif opérationnel

À la fin de l’UA, l’apprenant doit être capable de :

* comprendre ce qu'est un ordre ;
* distinguer ordre croissant et ordre décroissant ;
* comparer deux valeurs ;
* repérer la position d'une valeur ;
* chercher un minimum dans une partie de tableau ;
* échanger deux valeurs ;
* construire progressivement un tri ;
* expliquer le principe du tri par sélection ;
* coder le tri par sélection en JavaScript ;
* tester le tri sur plusieurs tableaux.

La progression est :

```text
Comprendre l'ordre
      ↓
Comparer
      ↓
Chercher le minimum
      ↓
Mémoriser sa position
      ↓
Échanger
      ↓
Répéter
      ↓
Trier
```

---

# 3. Prérequis de l’UA

L’apprenant doit déjà savoir :

* manipuler un tableau ;
* utiliser un index ;
* utiliser `length` ;
* parcourir un tableau ;
* utiliser des conditions ;
* rechercher un maximum ;
* rechercher un minimum ;
* utiliser une variable temporaire ;
* échanger deux variables ;
* construire une fonction simple.

Le concept d’échange a déjà été introduit dans une UA précédente.

Exemple :

```javascript
let a = 10;
let b = 20;

let temporaire = a;
a = b;
b = temporaire;
```

Après l’échange :

```text
a = 20
b = 10
```

Ce traitement sera réutilisé pour le tri.

---

# 4. Progression pédagogique de l’UA

Pour cette UA, une progression en **6 tutoriels** reste cohérente avec les UA précédentes :

```text
T.121.161
Comprendre l'ordre et le tri
        ↓
T.121.162
Construire les opérations nécessaires au tri
        ↓
T.121.163
Exercices sur l'ordre et le tri
        ↓
T.121.164
Construire le tri par sélection
        ↓
T.121.165
Tester et adapter un algorithme de tri
        ↓
T.121.166
Algorithme de synthèse : trier une collection
```

La logique est :

```text
Comprendre
   ↓
Préparer
   ↓
S'exercer
   ↓
Construire
   ↓
Adapter
   ↓
Réaliser
```

---

# 5. T.121.161 — Comprendre l’ordre et le tri

### Fonction dans l’UA

Premier tutoriel de découverte.

L’apprenant comprend ce que signifie **ordonner une collection**.

### Objectif

Comprendre :

* ordre ;
* classement ;
* ordre croissant ;
* ordre décroissant ;
* valeur avant ;
* valeur après ;
* collection triée ;
* collection non triée.

### Exemple

Collection de départ :

```text
[7, 3, 9, 2, 5]
```

Ordre croissant :

```text
[2, 3, 5, 7, 9]
```

Ordre décroissant :

```text
[9, 7, 5, 3, 2]
```

### L’apprenant doit comprendre

```text
Collection
   ↓
Comparer les valeurs
   ↓
Déterminer leur ordre
   ↓
Déplacer certaines valeurs
   ↓
Collection ordonnée
```

### Activités

* classer manuellement de petites listes ;
* comparer deux valeurs ;
* identifier la plus petite valeur ;
* identifier la plus grande valeur ;
* observer les positions avant et après un classement.

### Résultat attendu

L’apprenant comprend :

> Trier une collection signifie modifier l'ordre de ses éléments selon une règle.

---

# 6. T.121.162 — Construire les opérations nécessaires au tri

### Fonction dans l’UA

Ce tutoriel prépare techniquement l’algorithme de tri.

L’apprenant réutilise des traitements qu'il connaît déjà.

### Objectif

Construire les trois opérations fondamentales :

```text
Chercher
Mémoriser
Échanger
```

### Notions

* minimum ;
* position du minimum ;
* recherche dans une partie du tableau ;
* position ;
* variable temporaire ;
* échange ;
* partie triée ;
* partie non triée.

### Étape 1 — Chercher le minimum

Exemple :

```text
[7, 3, 9, 2, 5]
```

Le minimum est :

```text
2
```

Sa position est :

```text
3
```

### Étape 2 — Mémoriser la position

On conserve :

```text
minimum
positionMinimum
```

### Étape 3 — Échanger

Avant :

```text
[7, 3, 9, 2, 5]
```

Après échange de `7` et `2` :

```text
[2, 3, 9, 7, 5]
```

### Étape 4 — Comprendre la zone triée

Après le premier échange :

```text
[2 | 3, 9, 7, 5]
```

La première partie est considérée comme triée :

```text
2
```

La partie restante doit encore être traitée.

Puis :

```text
[2, 3 | 9, 7, 5]
```

Puis :

```text
[2, 3, 5 | 7, 9]
```

### Résultat attendu

L’apprenant comprend le mécanisme :

```text
Chercher le minimum
        ↓
Trouver sa position
        ↓
Échanger
        ↓
Passer à la position suivante
```

---

# 7. T.121.163 — Exercices sur l’ordre et le tri

### Fonction dans l’UA

Ce tutoriel permet de s'entraîner avant de construire l’algorithme complet.

### Objectif

Manipuler les mécanismes nécessaires au tri sans encore demander l’implémentation complète du tri par sélection.

### Exercices

#### Exercice 1 — Classer manuellement

```text
[8, 3, 6, 1, 5]
```

Produire :

```text
[1, 3, 5, 6, 8]
```

#### Exercice 2 — Trouver le minimum

```text
[12, 7, 19, 4, 15]
```

Résultat :

```text
4
```

#### Exercice 3 — Trouver la position du minimum

Même tableau.

Résultat :

```text
position : 3
```

#### Exercice 4 — Faire un échange

Échanger :

```text
7
```

et :

```text
2
```

dans :

```text
[5, 7, 9, 2, 4]
```

Résultat :

```text
[5, 2, 9, 7, 4]
```

#### Exercice 5 — Première étape du tri

À partir de :

```text
[7, 3, 9, 2, 5]
```

trouver le minimum et effectuer le premier échange.

Résultat :

```text
[2, 3, 9, 7, 5]
```

#### Exercice 6 — Deuxième étape

À partir de :

```text
[2, 3, 9, 7, 5]
```

chercher le minimum de la partie restante.

Résultat :

```text
[2, 3, 5, 7, 9]
```

### Résultat attendu

L’apprenant est capable de suivre manuellement les étapes de l'algorithme avant de les automatiser.

---

# 8. T.121.164 — Construire le tri par sélection

### Fonction dans l’UA

C’est le **tutoriel d’apprentissage de l’algorithme classique**.

### Objectif

Construire pas à pas le **tri par sélection**.

### Principe

Pour chaque position :

```text
1. Chercher le plus petit élément restant.
2. Trouver sa position.
3. Échanger avec la position courante.
4. Passer à la position suivante.
```

### Exemple

Tableau initial :

```text
[7, 3, 9, 2, 5]
```

#### Étape 1

Chercher le minimum :

```text
2
```

Position :

```text
3
```

Échanger avec la position `0` :

```text
[2, 3, 9, 7, 5]
```

#### Étape 2

La première position est maintenant correcte.

Chercher le minimum à partir de l'index `1` :

```text
3
```

Il est déjà à la bonne position.

```text
[2, 3, 9, 7, 5]
```

#### Étape 3

Chercher le minimum à partir de l'index `2` :

```text
5
```

Échanger avec `9` :

```text
[2, 3, 5, 7, 9]
```

#### Étape 4

Le minimum restant est :

```text
7
```

Le tableau est terminé.

### Structure algorithmique

```text
Pour chaque position i :

    minimum = position i

    Pour chaque position j après i :

        si tableau[j] < tableau[minimum] :
            minimum = j

    échanger tableau[i] et tableau[minimum]
```

### Première version JavaScript

```javascript
let nombres = [7, 3, 9, 2, 5];

for (let i = 0; i < nombres.length - 1; i++) {

    let positionMinimum = i;

    for (let j = i + 1; j < nombres.length; j++) {

        if (nombres[j] < nombres[positionMinimum]) {
            positionMinimum = j;
        }
    }

    let temporaire = nombres[i];
    nombres[i] = nombres[positionMinimum];
    nombres[positionMinimum] = temporaire;
}

console.log(nombres);
```

Résultat :

```text
[2, 3, 5, 7, 9]
```

### Résultat attendu

L’apprenant doit comprendre le rôle de chaque partie :

```text
boucle externe
     ↓
position courante

boucle interne
     ↓
chercher minimum

échange
     ↓
placer le minimum
```

---

# 9. T.121.165 — Tester et adapter un algorithme de tri

### Fonction dans l’UA

Après avoir construit le tri par sélection, l’apprenant doit apprendre à **tester son algorithme sur plusieurs situations** et à modifier une règle simple.

### Objectif

Vérifier qu'un algorithme de tri fonctionne avec différentes collections.

### Tests

#### Tableau déjà trié

```text
[1, 2, 3, 4, 5]
```

Résultat :

```text
[1, 2, 3, 4, 5]
```

#### Tableau inversé

```text
[5, 4, 3, 2, 1]
```

Résultat :

```text
[1, 2, 3, 4, 5]
```

#### Tableau quelconque

```text
[8, 3, 7, 1, 5]
```

Résultat :

```text
[1, 3, 5, 7, 8]
```

#### Tableau avec valeurs identiques

```text
[5, 2, 5, 3, 2]
```

Résultat :

```text
[2, 2, 3, 5, 5]
```

### Adapter vers l'ordre décroissant

Le même mécanisme peut être modifié :

```text
plus petit
```

devient :

```text
plus grand
```

La règle :

```javascript
if (nombres[j] < nombres[positionMinimum])
```

devient une règle de recherche du maximum restant.

### Résultat décroissant

```text
[9, 7, 5, 3, 2]
```

### Résultat attendu

L’apprenant découvre qu'un algorithme peut être adapté en modifiant **une règle de comparaison**, sans reconstruire tout le traitement.

---

# 10. T.121.166 — Algorithme de synthèse : trier une collection

### Fonction dans l’UA

C'est le **tutoriel de synthèse** de l’UA.

L'apprenant doit maintenant résoudre un problème de tri complet.

### Objectif

Construire et vérifier un programme capable de trier une collection selon une règle donnée.

### Situation

On dispose de :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

Le programme doit produire :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

### Travail demandé

L'apprenant doit :

1. identifier l'ordre demandé ;
2. déterminer la logique de recherche du minimum ;
3. mémoriser sa position ;
4. effectuer l'échange ;
5. répéter le traitement ;
6. vérifier le résultat.

### Deuxième test

```text
[20, 5, 12, 3, 18, 9]
```

Résultat :

```text
[3, 5, 9, 12, 18, 20]
```

### Troisième test

L'apprenant doit produire le tri décroissant :

```text
[20, 18, 12, 9, 5, 3]
```

### Critère de réussite

Le programme :

* trie correctement plusieurs tableaux ;
* fonctionne avec un tableau déjà trié ;
* fonctionne avec un tableau inversé ;
* fonctionne avec des valeurs répétées ;
* peut produire un ordre croissant ;
* peut être adapté à l'ordre décroissant ;
* n'utilise pas `Array.sort()`.

---

# 11. Vue synthétique de l'UA

| Tutoriel      | Fonction   | Notions principales           | Production              |
| ------------- | ---------- | ----------------------------- | ----------------------- |
| **T.121.161** | Comprendre | ordre, croissant, décroissant | Classement manuel       |
| **T.121.162** | Préparer   | minimum, position, échange    | Mécanisme de tri        |
| **T.121.163** | Exercices  | recherche + échange           | Étapes manuelles        |
| **T.121.164** | Construire | tri par sélection             | Algorithme classique    |
| **T.121.165** | Adapter    | tests, comparaison            | Croissant / décroissant |
| **T.121.166** | Synthèse   | tri complet                   | Programme de tri        |

---

# 12. Progression complète

```text
                    TRIER UNE COLLECTION
                           │
                           ▼
             T.121.161 — Comprendre
                           │
                ordre / classement
                           │
                           ▼
               T.121.162 — Préparer
                           │
          minimum / position / échange
                           │
                           ▼
               T.121.163 — Exercices
                           │
                reproduire les étapes
                           │
                           ▼
               T.121.164 — Construire
                           │
                  tri par sélection
                           │
                           ▼
                T.121.165 — Adapter
                           │
                tester / ordre inverse
                           │
                           ▼
                T.121.166 — Synthèse
                           │
                     trier une collection
```

---

# 13. Lien avec les UA précédentes

L'UA.121.16 ne doit pas être enseignée comme un algorithme isolé.

Elle réutilise progressivement les traitements déjà connus :

```text
UA.121.13
Tableaux
   ↓
Parcours
   ↓
Index
```

```text
UA.121.13
Minimum
Position
```

```text
UA.121.11
Échange de deux variables
```

Puis :

```text
UA.121.16
Recherche du minimum
+
Position
+
Échange
+
Boucles
=
Tri par sélection
```

C'est précisément ce qui rend cette UA importante pédagogiquement :

> **Le tri n'est pas présenté comme une nouvelle collection de commandes, mais comme la combinaison de traitements déjà appris.**

---

# 14. Règle pédagogique fondamentale

La règle centrale de l'UA.121.16 peut être formulée ainsi :

> **Un algorithme classique doit être construit à partir de traitements déjà connus avant d'être généralisé ou optimisé.**

La progression doit donc être :

```text
Comparer
   ↓
Chercher
   ↓
Mémoriser
   ↓
Échanger
   ↓
Répéter
   ↓
Trier
```

L'apprenant doit pouvoir expliquer le tri **avant** de mémoriser son code.

L'objectif final du N1 n'est pas seulement de savoir écrire :

```javascript
for (...)
```

mais de comprendre :

```text
Pourquoi cette boucle existe ?
Que cherche-t-elle ?
Pourquoi mémorise-t-on une position ?
Pourquoi échange-t-on les valeurs ?
Pourquoi recommence-t-on à la position suivante ?
```

C'est cette compréhension qui prépare directement **UA.121.17 — Combiner plusieurs traitements**, où l'apprenant passera du simple algorithme classique à la **décomposition et au chaînage de plusieurs traitements**.
