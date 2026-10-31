# Plan de Réalisation — Sandbox Algorithmique avec JavaScript (Session S1 & Vue Globale)

**Domaine de compétence :** Construire le traitement logique (`D.121.1`)  
**Session de première mobilisation :** S1 — Comprendre le projet et premiers traitements logiques  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S1 (première session mobilisant l'algorithmique). Il formalise l'intégralité du parcours d'apprentissage de la logique et des algorithmes dans le Sandbox JavaScript pour **les 12 sessions de la formation**. Dans les sessions suivantes (S2, S3, S5, S7, S8, S9), l'apprenant réalisera le tutoriel prévu à son programme à partir de ce document unique de référence.

---

## 1. Rôle Pédagogique du Sandbox Algorithmique

Le Sandbox Algorithmique isole l'apprentissage de la logique pure :
* **Environnement épuré :** Les exercices s'exécutent en console JavaScript (Node.js ou console du navigateur) sans interférence avec le HTML, le CSS ou les requêtes réseau.
* **Rôle d'amorce conceptuelle :** Chaque concept logique fondamental (variables, conditions, boucles, fonctions, collections) est d'abord manipulé et assimilé dans le Sandbox en JavaScript, avant d'être réinvesti dans le code serveur PHP du projet Fil Rouge.

---

## 2. Déroulé des Tutoriels Algorithmiques (Sessions S1 à S12)

| Identifiant | Session | Titre du tutoriel | Objectif d'apprentissage | Livrable attendu |
| :--- | :---: | :--- | :--- | :--- |
| **T.121.111** | **S1** | Variables, constantes et entrées-sorties en JavaScript | Déclarer des variables et constantes, réaliser des calculs arithmétiques et afficher avec `console.log`. | Script JS en console manipulant titre, prix et quantité. |
| **T.121.121** | **S2** | Contrôler l'exécution avec les conditions (`if / else`) | Prendre des décisions logiques en comparant des valeurs et adapter l'affichage. | Script JS avec structures conditionnelles `if / else`. |
| **T.121.131** | **S3** | Manipuler les tableaux et collections en mémoire | Déclarer un tableau de données, accéder aux éléments par index et parcourir avec une boucle. | Script JS manipulant une collection de données en mémoire. |
| **T.121.141** | **S5** | Créer et utiliser des fonctions réutilisables | Factoriser un traitement logique dans une fonction recevant des paramètres et renvoyant une valeur. | Ensemble de fonctions réutilisables (calcul de total, recherche). |
| **T.121.151** | **S7** | Résoudre des problèmes algorithmiques : Filtrage et comptage | Parcourir une collection pour extraire des éléments selon un critère et compter les résultats. | Programme de filtrage et de statistiques sur une collection. |
| **T.121.161** | **S8** | Trier une collection selon un critère | Ordonner une collection d'objets par ordre alphabétique ou chronologique. | Script de tri d'une liste selon deux critères distincts. |
| **T.121.171** | **S9** | Combiner plusieurs traitements algorithmiques complexes | Construire un pipeline complet combinant recherche, filtrage conditionnel, tri et comptage. | Application console complète résolvant un cas métier complet. |

---

## 3. Fiches Détaillées des Tutoriels par Unité d'Apprentissage

### UA.121.11 — Manipuler les variables et les entrées-sorties (Session S1)
* **T.121.111 — Variables, expressions et entrées-sorties**
  - **Objectif :** Manipuler les premiers conteneurs de données et afficher un résultat en console.
  - **Description :** L'apprenant crée un fichier de script, déclare des variables (`let`) et des constantes (`const`) pour représenter des données d'un article (titre, prix unitaire, quantité en stock), effectue un calcul de valeur totale et affiche le résultat avec `console.log()`.
  - **Notions :** Déclaration de variable (`let`, `const`), types simples (chaîne, nombre, booléen), opérateurs arithmétiques (`+`, `-`, `*`), affichage en console.
  - **Livrable :** Script JavaScript simple exécuté en console.

---

### UA.121.12 — Contrôler l’exécution avec les conditions et les boucles (Session S2)
* **T.121.121 — Les conditions avec `if`, `else if` et `else`**
  - **Objectif :** Guider le comportement du programme selon la valeur des variables.
  - **Description :** L'apprenant écrit un script évaluant le statut d'un article : si le stock est égal à 0 afficher « Épuisé », si le stock est inférieur à 5 afficher « Stock limité », sinon afficher « Disponible ».
  - **Notions :** Opérateurs de comparaison (`===`, `!==`, `<`, `>`), opérateurs logiques (`&&`, `||`), embranchements `if / else`.
  - **Livrable :** Script conditionnel validé.

---

### UA.121.13 — Manipuler les tableaux et collections (Session S3)
* **T.121.131 — Tableaux indexés et boucles de parcours**
  - **Objectif :** Gérer plusieurs valeurs regroupées dans une seule structure ordonnée.
  - **Description :** L'apprenant crée une liste de plusieurs articles sous forme de tableau d'objets, utilise une boucle `for` ou `for...of` pour parcourir la liste et affiche chaque élément en console.
  - **Notions :** Tableaux (`Array`), indexation à partir de 0, propriété `.length`, boucle de parcours `for`.
  - **Livrable :** Script de parcours de collection.

---

### UA.121.14 — Créer et utiliser des fonctions (Session S5)
* **T.121.141 — Modularisation avec les fonctions**
  - **Objectif :** Découper le programme en blocs réutilisables et autonomes.
  - **Description :** L'apprenant écrit deux fonctions : une fonction `calculerRemise(prix, pourcentage)` et une fonction `trouverArticleParTitre(collection, titreCherche)`.
  - **Notions :** Mot-clé `function`, paramètres d'entrée, instruction de sortie `return`, portée des variables (scope).
  - **Livrable :** Fichier de fonctions logiques testé en console.

---

### UA.121.15 — Résoudre des problèmes algorithmiques simples (Session S7)
* **T.121.151 — Filtrer une collection selon un critère métier**
  - **Objectif :** Extraire un sous-ensemble d'une liste répondant à une condition.
  - **Description :** À partir d'une collection d'articles, extraire uniquement les articles appartenant à la catégorie « Technologie » et compter combien d'articles sont publiés.
  - **Notions :** Algorithme de filtrage, accumulateur, compteur.
  - **Livrable :** Script de filtrage et comptage d'une collection.

---

### UA.121.16 — Trier une collection (Session S8)
* **T.121.161 — Ordonner une collection d'objets**
  - **Objectif :** Appliquer une règle d'ordre sur une collection en mémoire.
  - **Description :** L'apprenant implémente un tri croissant selon la date de publication ou l'ordre alphabétique du titre d'article.
  - **Notions :** Algorithme de comparaison, fonction de tri `.sort()`, ordre lexicographique vs chronologique.
  - **Livrable :** Script ordonnant une collection selon deux critères.

---

### UA.121.17 — Combiner plusieurs traitements (Session S9)
* **T.121.171 — Traitement complet combiné**
  - **Objectif :** Assembler toutes les briques algorithmiques au sein d'un traitement complexe.
  - **Description :** Le programme reçoit une collection brute, recherche les articles d'un auteur donné, filtre les articles publiés, les trie par date décroissante et calcule la moyenne de lecture.
  - **Notions :** Chaînage d'opérations, décomposition de problème, validation des cas limites.
  - **Livrable :** Application console robuste traitant un jeu d'essai réaliste.
