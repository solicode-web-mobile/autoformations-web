---
title: "Algorithme de synthèse : trier une collection"
layout: tuto
slug: "algorithme-synthese-trier-collection"
permalink: /tutos/:slug/
tuto_id: "T.121.166"
type: "algorithme"
version: "normal"
ua: "UA.121.16"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à :

* comprendre l'ordre d'une collection ;
* rechercher un minimum ;
* mémoriser sa position ;
* échanger deux éléments ;
* construire le tri par sélection ;
* tester l'algorithme ;
* adapter le tri à l'ordre décroissant.

Dans ce tutoriel, vous allez réaliser une **synthèse complète**.

Vous devrez partir d'une collection, déterminer l'ordre demandé, construire le tri, tester le résultat et vérifier que l'algorithme fonctionne.

La démarche est :

```text
Problème
↓
Identifier l'ordre demandé
↓
Choisir la logique de recherche
↓
Construire le tri
↓
Tester
↓
Vérifier
```

Vous devez réutiliser uniquement les notions déjà étudiées dans l'UA.121.16 et les UA précédentes.

## 2. Prérequis

Vous devez savoir :

* manipuler un tableau ;
* utiliser un index ;
* utiliser `length` ;
* utiliser une boucle `for` ;
* utiliser une condition ;
* comparer deux valeurs ;
* chercher un minimum ;
* chercher un maximum ;
* mémoriser une position ;
* échanger deux éléments ;
* construire une fonction simple ;
* construire un tri par sélection ;
* tester un algorithme avec plusieurs collections.

Vous devez avoir terminé les tutoriels :

```text
T.121.161 — Comprendre l'ordre et le tri
T.121.162 — Construire les opérations nécessaires au tri
T.121.163 — Exercices sur l'ordre et le tri
T.121.164 — Construire le tri par sélection
T.121.165 — Tester et adapter un algorithme de tri
```

## Données de départ

La collection principale est :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

Le premier travail demandé est un tri dans l'ordre croissant.

Le résultat attendu est :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

Une deuxième collection sera utilisée pour vérifier la solution :

```javascript
let autresNombres = [20, 5, 12, 3, 18, 9];
```

Le résultat croissant attendu est :

```text
[3, 5, 9, 12, 18, 20]
```

Une troisième collection permettra de vérifier les valeurs répétées :

```javascript
let nombresAvecRepetitions = [4, 4, 2, 7, 2];
```

Le résultat croissant attendu est :

```text
[2, 2, 4, 4, 7]
```

## Partie 1 — Théorie

### 1.1. Identifier le problème

Le problème est :

> Trier une collection de nombres dans un ordre donné.

La première question est :

> Quel ordre doit être produit ?

Pour le premier exercice :

```text
ordre croissant
```

Il faut donc chercher :

```text
le plus petit élément restant
```

### 1.2. Reprendre le principe du tri par sélection

Le tri par sélection suit cette logique :

```text
Pour chaque position :

    chercher le plus petit élément restant

    mémoriser sa position

    échanger avec la position courante
```

Le tableau évolue progressivement :

```text
[12, 7, 19, 4, 15, 8, 2, 11]
```

puis :

```text
[2, ..., ..., ..., ..., ..., ..., ...]
```

puis :

```text
[2, 4, ..., ..., ..., ..., ..., ...]
```

et ainsi de suite.

### 1.3. Identifier la partie restante

À chaque étape, une partie du tableau est déjà correctement placée.

Exemple :

```text
[2, 4 | 19, 12, 15, 8, 7, 11]
```

La partie :

```text
[2, 4]
```

est déjà placée.

La recherche continue uniquement dans :

```text
[19, 12, 15, 8, 7, 11]
```

La position courante correspond donc au début de la partie restante.

### 1.4. Choisir la bonne comparaison

Pour un tri croissant :

```text
chercher le minimum
```

La comparaison est :

```javascript
nombres[j] < nombres[positionMinimum]
```

Pour un tri décroissant :

```text
chercher le maximum
```

La comparaison devient :

```javascript
nombres[j] > nombres[positionMaximum]
```

Le principe du tri reste le même.

### 1.5. Vérifier une collection triée

Pour un tri croissant, le résultat doit respecter :

```text
valeur précédente <= valeur suivante
```

Exemple :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

On vérifie :

```text
2 <= 4
4 <= 7
7 <= 8
8 <= 11
11 <= 12
12 <= 15
15 <= 19
```

Si toutes les comparaisons sont correctes, la collection est triée dans l'ordre croissant.

### 1.6. Vérifier les valeurs

Le tri ne doit ni supprimer ni ajouter de valeur.

Avant :

```text
[4, 4, 2, 7, 2]
```

Après :

```text
[2, 2, 4, 4, 7]
```

Les mêmes valeurs sont présentes.

Le nombre d'éléments reste :

```text
5
```

### 1.7. Vérifier plusieurs cas

Une solution correcte doit être testée avec plusieurs collections.

Utilisez notamment :

```text
collection désordonnée
collection déjà triée
collection inversée
collection avec valeurs répétées
petite collection
```

Un seul test ne suffit pas pour vérifier l'algorithme.

### 1.8. À retenir

La synthèse consiste à réutiliser tout ce qui a été appris :

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
Tester
↓
Vérifier
```

Le tri par sélection n'est donc pas une nouvelle notion isolée.

C'est une combinaison de traitements déjà appris.

## Partie 2 — Pratique

### 2.1. Analyser le premier problème

On dispose de :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

Le problème demande un ordre croissant.

Avant de coder, complétez :

| Élément                                    | Réponse |
| ------------------------------------------ | ------- |
| Données                                    |         |
| Ordre demandé                              |         |
| Élément recherché                          |         |
| Position à remplir                         |         |
| Opération utilisée pour déplacer l'élément |         |

Puis représentez le traitement :

```text
Position courante
↓
Recherche du minimum
↓
Position du minimum
↓
Échange
↓
Position suivante
```

### 2.2. Préparer les étapes

Sans écrire encore le programme complet, observez la première étape.

Le tableau est :

```text
[12, 7, 19, 4, 15, 8, 2, 11]
```

Complétez :

```text
Position courante :
__________

Minimum :
__________

Position du minimum :
__________
```

Après l'échange, indiquez le nouveau tableau :

```text
_______________________________
```

Passez ensuite à la deuxième étape.

### 2.3. Suivre le tri manuellement

Complétez le tableau suivant :

| Étape | Position courante | Minimum restant | Position du minimum | Tableau après échange |
| ----- | ----------------: | --------------: | ------------------: | --------------------- |
| 1     |                   |                 |                     |                       |
| 2     |                   |                 |                     |                       |
| 3     |                   |                 |                     |                       |
| 4     |                   |                 |                     |                       |
| 5     |                   |                 |                     |                       |
| 6     |                   |                 |                     |                       |
| 7     |                   |                 |                     |                       |

Cette activité permet de vérifier que vous comprenez le fonctionnement avant de coder.

### 2.4. Construire le programme

Construisez maintenant le tri par sélection avec JavaScript.

Votre programme doit :

1. parcourir les positions ;
2. rechercher le minimum restant ;
3. mémoriser sa position ;
4. échanger les deux éléments ;
5. afficher le tableau final.

Ne recopiez pas un nouveau principe.

Réutilisez celui construit dans les tutoriels précédents.

Le programme ne doit pas utiliser :

```javascript
Array.sort()
```

### 2.5. Vérifier le premier résultat

Pour :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

le résultat attendu est :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

Comparez votre résultat avec le résultat attendu.

Vérifiez également le nombre de valeurs :

```text
Avant : 8
Après : 8
```

### 2.6. Tester avec un deuxième tableau

Utilisez :

```javascript
let nombres = [20, 5, 12, 3, 18, 9];
```

Construisez le résultat attendu avant d'exécuter le programme.

Vous devez obtenir :

```text
[3, 5, 9, 12, 18, 20]
```

Vérifiez :

* l'ordre ;
* le nombre de valeurs ;
* la conservation de toutes les valeurs.

### 2.7. Tester avec des valeurs répétées

Utilisez :

```javascript
let nombres = [4, 4, 2, 7, 2];
```

Le résultat attendu est :

```text
[2, 2, 4, 4, 7]
```

Vérifiez que :

```text
4
```

est toujours présent deux fois et que :

```text
2
```

est toujours présent deux fois.

### 2.8. Tester une collection déjà triée

Utilisez :

```javascript
let nombres = [2, 4, 7, 8, 11, 12, 15, 19];
```

Le résultat attendu reste :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

Le programme doit conserver une collection déjà correctement ordonnée.

### 2.9. Tester une collection inversée

Utilisez :

```javascript
let nombres = [19, 15, 12, 11, 8, 7, 4, 2];
```

Le résultat attendu est :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

Ce test permet de vérifier que l'algorithme peut transformer un ordre complètement inversé.

### 2.10. Construire la version décroissante

Le problème change :

> Trier la collection dans l'ordre décroissant.

Utilisez :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

Le résultat attendu est :

```text
[19, 15, 12, 11, 8, 7, 4, 2]
```

Adaptez uniquement ce qui est nécessaire.

Pour l'ordre décroissant, vous devez chercher :

```text
le maximum restant
```

### 2.11. Vérifier les deux versions

Complétez :

| Collection                     | Croissant | Décroissant |
| ------------------------------ | --------- | ----------- |
| `[12, 7, 19, 4, 15, 8, 2, 11]` |           |             |
| `[20, 5, 12, 3, 18, 9]`        |           |             |
| `[4, 4, 2, 7, 2]`              |           |             |

Observez que le mécanisme général reste identique.

Seule la règle de sélection change.

### 2.12. Exercice de correction

On vous donne ce programme :

```javascript
let nombres = [12, 7, 19, 4, 15];

for (let i = 0; i < nombres.length - 1; i++) {
    let positionMaximum = i;

    for (let j = i + 1; j < nombres.length; j++) {
        if (nombres[j] > nombres[positionMaximum]) {
            positionMaximum = j;
        }
    }

    let temporaire = nombres[i];
    nombres[i] = nombres[positionMaximum];
    nombres[positionMaximum] = temporaire;
}
```

Le programme produit un ordre décroissant.

Vous devez modifier uniquement ce qui est nécessaire pour obtenir un ordre croissant.

Testez ensuite avec :

```javascript
let nombres = [12, 7, 19, 4, 15];
```

Résultat attendu :

```text
[4, 7, 12, 15, 19]
```

### 2.13. Vérification finale

Votre solution doit maintenant fonctionner avec plusieurs situations :

```javascript
let test1 = [12, 7, 19, 4, 15, 8, 2, 11];

let test2 = [20, 5, 12, 3, 18, 9];

let test3 = [4, 4, 2, 7, 2];

let test4 = [1, 2, 3, 4, 5];

let test5 = [5, 4, 3, 2, 1];
```

Vérifiez pour chaque test :

```text
Le résultat est-il trié ?
Les valeurs sont-elles conservées ?
Le nombre de valeurs est-il identique ?
```

### 2.14. Exercice de synthèse individuel

Construisez seul un programme permettant de trier une collection dans l'ordre croissant.

Utilisez :

```javascript
let nombres = [18, 5, 12, 7, 20, 3, 9, 15];
```

Vous devez :

1. analyser le problème ;
2. déterminer l'ordre demandé ;
3. choisir le tri par sélection ;
4. construire le programme ;
5. tester le programme ;
6. vérifier le résultat.

Le résultat attendu est :

```text
[3, 5, 7, 9, 12, 15, 18, 20]
```

Puis adaptez votre programme pour obtenir :

```text
[20, 18, 15, 12, 9, 7, 5, 3]
```

dans l'ordre décroissant.

**Travail à faire :**

Construire, tester et adapter un algorithme de tri par sélection sur plusieurs collections.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'analyse du problème ;
* le principe du tri choisi ;
* le code du tri croissant ;
* les tests du tri croissant ;
* le code ou l'adaptation du tri décroissant ;
* les tests du tri décroissant ;
* la vérification des résultats.

**Résultat attendu :**

Pour :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

ordre croissant :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

ordre décroissant :

```text
[19, 15, 12, 11, 8, 7, 4, 2]
```

Pour :

```javascript
let nombres = [20, 5, 12, 3, 18, 9];
```

ordre croissant :

```text
[3, 5, 9, 12, 18, 20]
```

ordre décroissant :

```text
[20, 18, 12, 9, 5, 3]
```

Pour :

```javascript
let nombres = [4, 4, 2, 7, 2];
```

ordre croissant :

```text
[2, 2, 4, 4, 7]
```

ordre décroissant :

```text
[7, 4, 4, 2, 2]
```

**Critère de réussite :**

La solution est réussie lorsque :

* le tri par sélection fonctionne correctement ;
* plusieurs collections sont testées ;
* les valeurs répétées sont conservées ;
* une collection déjà triée fonctionne ;
* une collection inversée fonctionne ;
* l'ordre croissant fonctionne ;
* l'ordre décroissant fonctionne ;
* l'apprenant sait expliquer la règle qui change entre les deux versions ;
* `Array.sort()` n'est pas utilisé.

## Bilan

**Vous avez réalisé la synthèse de l'UA.121.16.**

Vous savez maintenant :

```text
Comprendre l'ordre
↓
Comparer
↓
Chercher
↓
Mémoriser une position
↓
Échanger
↓
Répéter
↓
Trier
↓
Tester
↓
Adapter
↓
Vérifier
```

Vous avez construit un **algorithme classique de tri** à partir de traitements déjà appris.

Vous savez également adapter le même principe :

```text
Tri croissant
→ chercher le minimum
```

et :

```text
Tri décroissant
→ chercher le maximum
```

Le tri constitue ainsi un exemple concret de réutilisation et de combinaison de traitements.

L'UA suivante pourra maintenant aller plus loin : au lieu de construire un seul algorithme classique, vous apprendrez à **décomposer un problème en plusieurs sous-traitements, définir leurs entrées et sorties et organiser leurs dépendances**.

## Glossaire

* **Synthèse** : activité qui mobilise plusieurs connaissances déjà apprises.
* **Tri par sélection** : algorithme qui place progressivement le minimum ou le maximum à la bonne position.
* **Ordre croissant** : ordre du plus petit au plus grand.
* **Ordre décroissant** : ordre du plus grand au plus petit.
* **Collection** : ensemble de valeurs, par exemple un tableau.
* **Test** : exécution d'un programme avec des données choisies.
* **Vérification** : contrôle du résultat obtenu par rapport au résultat attendu.
