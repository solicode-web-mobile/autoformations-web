---
title: "Observer les occurrences et repérer les répétitions"
layout: tuto
slug: "observer-occurrences-reperer-repetitions"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.131"
type: "classique"
version: "detaille"
ua: "UA.112.13"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **observer plusieurs occurrences d'une même donnée** afin d'y repérer de manière précise les répétitions.

Vous allez apprendre de manière détaillée à :
* distinguer clairement ce qu'est une donnée de ce qu'est une valeur ;
* reconnaître une occurrence complète et la comparer avec d'autres occurrences ;
* repérer visuellement et logiquement une valeur qui se répète pour une donnée précise ;
* expliquer de façon argumentée pourquoi une répétition constitue un "signal" important qui mérite d'être étudié de près.

À la fin de ce tutoriel, vous aurez acquis la capacité d'analyser le comportement fondamental des données avant même de chercher à concevoir des entités complexes.

## 2. Prérequis

Avant de commencer ce tutoriel, vous devez vous assurer de :
* Comprendre parfaitement ce qu'est une donnée et une valeur (vu dans le tutoriel T.112.111).
* Savoir lire et interpréter un dictionnaire de données simple (vu dans le tutoriel T.112.122).

## Données de départ

Pour illustrer nos explications, nous utiliserons un ensemble de données représentant plusieurs auteurs d'articles. Observez attentivement le tableau ci-dessous :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville |
| ---------- | ------------- | ------------------------------------------- | --------- |
| Ali        | Madani        | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    |

Attention : pour le moment, nous ne cherchons pas du tout à construire le modèle conceptuel ou à deviner les entités. Notre but exclusif est d'**observer ces données** telles qu'elles nous sont présentées.

---

## Partie 1 — Théorie

### 1.1. Occurrence, donnée et valeur

Il est crucial de bien différencier ces trois concepts fondamentaux en modélisation :

* **Donnée :** Il s'agit de l'information brute que l'application doit gérer pour fonctionner. C'est en quelque sorte la "question" ou le "titre" de l'information. Par exemple, `nom_ville` ou `email_auteur` sont des données.
* **Valeur :** C'est le contenu concret, la réponse à la question posée par la donnée pour une situation précise. Par exemple, `Tanger` est une valeur concrète pour la donnée `nom_ville`.
* **Occurrence :** Une occurrence représente un exemple complet et concret de tout un ensemble de données liées entre elles. Dans un tableau de données, **chaque ligne représente une occurrence unique**. 

Dans notre tableau d'exemple, nous avons très exactement 4 occurrences, car nous décrivons 4 auteurs différents. 
Il est important de noter que pour une même donnée (comme `prenom_auteur`), chaque occurrence (chaque ligne) peut évidemment posséder une valeur tout à fait différente.

### 1.2. Observer plusieurs occurrences

L'étude d'une seule et unique occurrence (par exemple, regarder uniquement la ligne où l'on apprend que Madani habite à Tanger) ne nous permet pas de comprendre le comportement global d'une donnée. 

C'est seulement en observant **plusieurs occurrences simultanément**, c'est-à-dire en analysant plusieurs lignes d'un coup, que nous pouvons commencer à comparer les valeurs entre elles. Cette comparaison est indispensable pour détecter des motifs réguliers, et particulièrement ce que l'on appelle les **répétitions**.

### 1.3. Qu'est-ce qu'une répétition ?

On dit qu'une répétition apparaît dans un jeu de données lorsqu'une **même valeur exacte** est présente plusieurs fois pour une **même donnée**.

Prenons l'exemple de la donnée `nom_ville` en lisant notre tableau de haut en bas :
* Ligne 1 : `Tanger`
* Ligne 2 : `Tanger`
* Ligne 3 : `Rabat`
* Ligne 4 : `Tanger`

En observant cette liste, nous constatons immédiatement que la valeur `Tanger` est **répétée** puisqu'elle apparaît à 3 reprises. En revanche, la valeur `Rabat` n'est pas répétée, car elle n'apparaît qu'une seule fois.

### 1.4. Pourquoi les répétitions sont-elles importantes ?

Beaucoup de débutants pensent qu'une répétition est forcément une erreur de saisie. Ce n'est pas le cas : il est tout à fait normal que plusieurs auteurs habitent à Tanger. 

Cependant, une répétition est toujours un **signal d'alerte important** pour le concepteur d'une base de données. 

Imaginez la situation suivante : si une information répétée (comme le nom de la ville "Tanger") doit être corrigée (par exemple, parce qu'elle a été mal orthographiée et doit devenir "Tanger-Ville"), il faudra parcourir tout le tableau et modifier manuellement **toutes les occurrences** qui contiennent cette valeur. Si le tableau contient 10 000 lignes, cela crée un risque immense d'oublier de corriger une ligne, ce qui rendrait vos données incohérentes.

> **Règle d'or :** Une répétition indique qu'une information (comme la ville) mérite peut-être d'être extraite de ce tableau et gérée de manière totalement séparée, afin d'éviter les futurs problèmes de mise à jour. Observer cette répétition est la toute première étape indispensable vers la découverte d'une nouvelle entité.

---

## Partie 2 — Pratique

### Exercice

À partir du tableau suivant, qui recense des informations sur plusieurs auteurs et leurs catégories d'écriture :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
| Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    | Développement |
| Nadia      | Alaoui        | [nadia@mail.com](mailto:nadia@mail.com)     | Rabat     | Actualité     |

**Travail à faire :**
1. Pour chaque donnée présentée dans le tableau (`nom_auteur`, `prenom_auteur`, `email_auteur`, `nom_ville`, `nom_categorie`), dressez l'inventaire complet de toutes les valeurs observées, ligne par ligne.
2. En analysant ces inventaires, indiquez clairement quelles sont les valeurs qui sont répétées plusieurs fois pour une même donnée.
3. Choisissez l'une des répétitions que vous avez trouvées (par exemple pour la ville ou la catégorie) et expliquez, en rédigeant une phrase claire, quel problème très concret cela poserait si on devait modifier ou corriger cette information à l'avenir.

*(Rappel fondamental : Ne cherchez pas encore à créer de nouveaux identifiants (comme un id_ville) ou de nouvelles tables. Votre rôle à ce stade se limite strictement à l'observation fine des données !)*

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant vos réponses détaillées aux 3 questions posées ci-dessus. Veillez à structurer vos réponses de manière lisible.
Nom conseillé pour votre fichier : `observation-occurrences-repetitions.md`

## Critères de réussite

Votre formateur évaluera votre travail selon les critères suivants :
* Les occurrences du tableau ont été correctement comprises et les valeurs répétées ont été identifiées sans erreur.
* La différence sémantique entre une "donnée" (le conteneur) et une "valeur" (le contenu) est bien comprise et parfaitement respectée dans la formulation de vos réponses.
* L'impact négatif qu'aurait une répétition lors de la mise à jour des données (le problème de modification) est clairement expliqué.
* Vous avez respecté la consigne d'observation : aucune entité ou aucun identifiant n'a été inventé prématurément dans cet exercice.

---

## Bilan

### Ce que vous avez appris :
* Vous savez désormais faire la différence fondamentale entre une donnée, une valeur, et une occurrence complète.
* Vous avez appris qu'il est indispensable de lire et de comparer plusieurs occurrences d'un jeu de données pour en comprendre la structure cachée.
* Vous êtes désormais capable de repérer les répétitions de valeurs et de comprendre en quoi elles constituent un **signal fort** (elles annoncent un risque d'anomalie et d'incohérence lors d'une future modification des données).

La prochaine étape de votre apprentissage consistera à chercher **ce que représentent réellement dans le monde réel ces valeurs répétées**. Cela vous permettra de découvrir progressivement, étape par étape, vos toutes premières **entités** (rendez-vous dans le tutoriel T.112.132).
