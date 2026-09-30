---
title: "Découvrir une entité à partir d'un identifiant ou d'une répétition"
layout: tuto
slug: "decouvrir-entite-identifiant-repetition"
permalink: /tutos/:slug/compact
tuto_id: "T.112.132"
type: "classique"
version: "compact"
ua: "UA.112.13"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **faire apparaître une entité à partir des données**.

Vous allez apprendre à :
* rechercher un identifiant ;
* comprendre ce que l'identifiant permet de déterminer ;
* écrire une dépendance fonctionnelle ;
* repérer une répétition pour découvrir une nouvelle réalité ;
* remplacer une donnée répétée par un identifiant.

## 2. Prérequis

* Observer les occurrences et repérer les répétitions (T.112.131).

## Données de départ

| nom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------------------------------------- | --------- | ------------- |
| Madani     | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un identifiant ?

Un identifiant est une donnée unique qui permet de distinguer chaque occurrence sans aucune confusion.
Exemple : `email_auteur` est unique pour chaque auteur. C'est un identifiant naturel.

### 1.2. L'identifiant permet de déterminer des données

L'identifiant détermine d'autres informations. Si vous connaissez l'`email_auteur`, vous connaissez automatiquement le `nom_auteur`.

### 1.3. Une dépendance fonctionnelle simple

On note cette relation par une flèche (`->`).
`email_auteur -> nom_auteur`
Cela signifie que `nom_auteur` dépend fonctionnellement de `email_auteur`.

### 1.4. Pourquoi une dépendance ne suffit pas ?

Une dépendance simple ne dit pas si l'information appartient réellement au même sujet (la même "entité").
Exemple : `email_auteur -> nom_ville`. La ville dépend de l'auteur, mais une ville est une réalité à part entière.

### 1.5. Première façon de découvrir une entité : partir d'un identifiant

Si vous avez un identifiant naturel (comme `email_auteur`) et des données qui en dépendent directement (`nom_auteur`), vous avez découvert votre première entité : **Auteur**.

### 1.6. Deuxième façon de découvrir une entité : partir d'une répétition

La donnée `nom_ville` contient des répétitions (ex: "Tanger"). Une répétition signale qu'une information représente une réalité distincte. Ici, "Tanger" représente la réalité **Ville**.

### 1.7. Créer un identifiant pour une nouvelle réalité

Puisque "Ville" est une entité, elle a besoin d'un identifiant. S'il n'y en a pas, on le crée : `id_ville`.

### 1.8. Une dépendance dans l'entité Ville

On obtient une nouvelle dépendance pour cette réalité :
`id_ville -> nom_ville`

### 1.9. Remplacer la valeur répétée par l'identifiant

Dans l'entité Auteur, on remplace la donnée textuelle `nom_ville` (qui se répétait) par l'identifiant `id_ville`. Cela élimine le risque d'erreur lors des modifications.

### 1.10. La méthode complète

**Chemin A - L'identifiant est visible :**
Identifiant -> Dépendances -> Création de l'entité.

**Chemin B - L'identifiant n'est pas visible :**
Répétition -> Découverte de la réalité -> Création de l'identifiant -> Création de l'entité -> Remplacement.

### 1.11. La méthode ne s'arrête pas à la première entité

Le processus est itératif. Vous analysez chaque donnée restante (ex: `nom_categorie`) pour voir si elle représente une nouvelle réalité.

### 1.12. À retenir

* **Identifiant :** Donnée unique déterminant d'autres données.
* **Dépendance (`->`) :** Lien direct entre un identifiant et une donnée.
* **Répétition :** Signal pour créer une nouvelle entité et son identifiant.

---

## Partie 2 — Pratique

### Exercice

Observez le jeu de données suivant :

| id_article | titre_article        | nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------: | -------------------- | ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
|        201 | HTML pour débutant   | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        202 | Les formulaires HTML | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        203 | Actualité Web        | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Rabat     | Actualité     |
|        204 | Organiser un projet  | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Développement |
|        205 | Développement Web    | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |

**Travail à faire :**
Pour chaque donnée importante (ex: `nom_auteur`, `nom_ville`, `nom_categorie`) :
1. Recherchez l'identifiant visible ou les valeurs répétées.
2. Indiquez la réalité représentée par cette répétition.
3. Proposez un identifiant pour cette nouvelle entité.
4. Écrivez la dépendance fonctionnelle.

Complétez le tableau :

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance |
| --------------- | -------------- | ------------------- | ------------------- | ---------- |
| nom_auteur      |                |                     |                     |            |
| nom_ville       |                |                     |                     |            |
| nom_categorie   |                |                     |                     |            |

*(Ne construisez pas encore les relations ou le MCD.)*

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant le tableau complété pour vos réponses.
Nom conseillé : `decouvrir-realites.md`

## Résultat attendu

Le tableau doit démontrer clairement le cheminement logique suivant : `Donnée -> Observation de Répétition -> Déduction de Réalité -> Création de l'ID -> Dépendance`.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.132/decouvrir-realites.html' | relative_url }}"
    height="450"
    title="Résultat attendu — Découvrir les réalités">
</iframe>

## Critères de réussite

* L'identifiant observé et les répétitions sont corrects.
* La réalité (l'entité) déduite a du sens (ex: Ville).
* Les dépendances fonctionnelles simples sont correctement notées.
* Aucune construction de relation n'a été faite prématurément.

---

## Bilan

### Vous avez appris :
* À découvrir une entité via un identifiant naturel.
* À découvrir une entité en observant des répétitions.
* À écrire une dépendance fonctionnelle (`A -> B`).

### Vous avez réalisé :
* L'extraction de nouvelles réalités (entités) à partir d'un jeu de données brut.
