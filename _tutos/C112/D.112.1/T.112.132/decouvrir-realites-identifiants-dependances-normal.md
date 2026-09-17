---
title: "Découvrir une entité à partir d'un identifiant ou d'une répétition"
layout: tuto
slug: "decouvrir-entite-identifiant-repetition"
permalink: /tutos/:slug/normal
tuto_id: "T.112.132"
type: "classique"
version: "normal"
ua: "UA.112.13"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre une méthode pour **faire apparaître une entité à partir des données brutes**.

Vous allez apprendre à :
* rechercher un identifiant dans un jeu de données ;
* comprendre ce que cet identifiant permet de déterminer ;
* écrire une dépendance fonctionnelle ;
* repérer une répétition pour découvrir une nouvelle réalité ;
* remplacer une donnée répétée par un véritable identifiant.

## 2. Prérequis

* Avoir assimilé le tutoriel "Observer les occurrences et repérer les répétitions" (T.112.131).

## Données de départ

Nous utiliserons ce tableau recensant des informations sur des auteurs :

| nom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------------------------------------- | --------- | ------------- |
| Madani     | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un identifiant ?

Un identifiant est une donnée absolument unique permettant de distinguer chaque occurrence d'un tableau sans confusion.
Dans notre exemple, l'`email_auteur` est unique pour chaque auteur. C'est ce qu'on appelle un identifiant naturel.

### 1.2. L'identifiant permet de déterminer des données

L'identifiant détermine le reste des informations d'une ligne. Si vous connaissez la valeur exacte de l'`email_auteur`, vous connaissez automatiquement et de manière certaine le `nom_auteur` qui y est associé.

### 1.3. Une dépendance fonctionnelle simple

En conception, on note cette relation par une flèche (`->`).
`email_auteur -> nom_auteur`
Cela signifie que `nom_auteur` dépend fonctionnellement de `email_auteur`. L'identifiant est toujours à gauche.

### 1.4. Pourquoi une dépendance ne suffit pas ?

On pourrait écrire `email_auteur -> nom_ville`, car la ville dépend bien de l'auteur. Cependant, une "Ville" est une réalité à part entière du monde réel, pas un simple attribut. Une dépendance ne suffit donc pas pour délimiter les entités.

### 1.5. Première façon de découvrir une entité : partir d'un identifiant

Si vous possédez un identifiant naturel (comme `email_auteur`) et des données qui en dépendent directement (`nom_auteur`), vous avez découvert votre première entité : l'entité **Auteur**.

### 1.6. Deuxième façon de découvrir une entité : partir d'une répétition

La donnée `nom_ville` contient des répétitions (ex: "Tanger"). Comme vu précédemment, une répétition signale qu'une information représente en fait une réalité distincte qui mérite d'être séparée. Ici, "Tanger" représente la réalité **Ville**.

### 1.7. Créer un identifiant pour une nouvelle réalité

Puisque "Ville" est une véritable entité, elle doit avoir un identifiant. Comme un simple nom de ville n'est pas fiable pour être un identifiant unique, nous allons le créer de toutes pièces : `id_ville`.

### 1.8. Une dépendance dans l'entité Ville

Notre nouvelle entité Ville possède maintenant un identifiant et une donnée. On peut donc écrire sa dépendance fonctionnelle :
`id_ville -> nom_ville`

### 1.9. Remplacer la valeur répétée par l'identifiant

Dans notre entité d'origine (Auteur), nous remplaçons le texte répété de la ville par le nouvel identifiant `id_ville`. Cela permet de relier l'auteur à sa ville sans risque d'erreur en cas de modification.

### 1.10. La méthode complète

**Chemin A - L'identifiant est directement visible :**
Identifiant -> Liste des Dépendances -> Création de l'entité.

**Chemin B - L'identifiant n'est pas visible :**
Observation d'une Répétition -> Découverte de la réalité -> Création d'un identifiant -> Création de l'entité -> Remplacement dans le tableau d'origine.

### 1.11. La méthode ne s'arrête pas à la première entité

La découverte des entités est un processus itératif. Vous analysez chaque donnée restante (ex: `nom_categorie`) pour vérifier s'il n'y a pas d'autres répétitions révélant d'autres réalités.

### 1.12. À retenir

* **Identifiant :** Donnée unique déterminant d'autres données sur une même ligne.
* **Dépendance (`->`) :** Lien direct indiquant qu'une donnée est déterminée par un identifiant.
* **Répétition :** Signal indiquant la nécessité de créer une nouvelle entité et de lui forger son propre identifiant.

---

## Partie 2 — Pratique

Pour cette partie pratique, vous allez appliquer les méthodes d'observation vues ci-dessus (recherche d'identifiant et observation de répétitions) pour extraire de nouvelles entités.

### Exercice

Observez le jeu de données suivant recensant des articles de blog :

| id_article | titre_article        | nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------: | -------------------- | ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
|        201 | HTML pour débutant   | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        202 | Les formulaires HTML | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        203 | Actualité Web        | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Rabat     | Actualité     |
|        204 | Organiser un projet  | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Développement |
|        205 | Développement Web    | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |

**Travail à faire :**
Pour chaque donnée importante (ex: `nom_auteur`, `nom_ville`, `nom_categorie`) :
1. Recherchez l'identifiant visible ou repérez les valeurs qui se répètent.
2. Indiquez la réalité concrète (la future entité) représentée par cette répétition.
3. Proposez un nom pour le nouvel identifiant de cette entité.
4. Écrivez la dépendance fonctionnelle correspondante.

Complétez le tableau :

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance |
| --------------- | -------------- | ------------------- | ------------------- | ---------- |
| nom_auteur      |                |                     |                     |            |
| nom_ville       |                |                     |                     |            |
| nom_categorie   |                |                     |                     |            |

*(Consigne : Ne construisez pas encore les relations entre les entités ni le schéma complet. Restez concentré sur la découverte des réalités.)*

## Livrable

Créez un document **Markdown** ou un **Google Doc** et reproduisez le tableau complété pour présenter vos réponses.
Nom conseillé : `decouvrir-realites.md`

## Résultat attendu

Le tableau doit démontrer clairement le cheminement logique suivant : `Donnée -> Observation de Répétition -> Déduction de Réalité -> Création de l'ID -> Dépendance`.

## Critères de réussite

* L'identifiant observé et les répétitions sont correctement repérés.
* La réalité déduite a du sens (ex: Ville).
* Les dépendances fonctionnelles simples sont notées correctement avec la flèche (`->`).
* Aucune construction de relation n'a été faite prématurément.

---

## Bilan

### Vous avez appris :
* À découvrir une entité via un identifiant naturel.
* À découvrir une entité en observant des répétitions.
* À lire et écrire formellement une dépendance fonctionnelle (`A -> B`).

### Vous avez réalisé :
* L'extraction de nouvelles réalités (les futures entités) à partir d'un jeu de données brut. Vous êtes désormais capable de préparer des données pour les modéliser proprement.
