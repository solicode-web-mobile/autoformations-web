---
title: "Découvrir une entité à partir d'un identifiant ou d'une répétition"
layout: tuto
slug: "decouvrir-entite-identifiant-repetition"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.132"
type: "classique"
version: "detaille"
ua: "UA.112.13"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre de manière approfondie et guidée une méthode fondamentale pour **faire apparaître une entité (une nouvelle table) à partir d'un simple jeu de données brut**. 

Pas à pas, vous allez apprendre à :
* rechercher méticuleusement un identifiant au sein de vos données ;
* comprendre précisément ce que cet identifiant permet d'identifier dans le monde réel ;
* écrire et lire une dépendance fonctionnelle (la relation stricte entre les données) ;
* repérer et analyser une répétition de valeur pour découvrir l'existence d'une nouvelle réalité cachée ;
* remplacer de façon logique une donnée textuelle répétée par un véritable identifiant technique pour garantir l'intégrité de vos futures bases de données.

À la fin de ce tutoriel, la méthode de découverte des entités n'aura plus de secret pour vous, et vous saurez structurer vos données de manière professionnelle.

## 2. Prérequis

Avant de vous lancer dans cette méthode, il est absolument indispensable de maîtriser l'observation des données :
* Vous devez avoir complété et parfaitement assimilé le tutoriel **Observer les occurrences et repérer les répétitions (T.112.131)**.

## Données de départ

Pour illustrer pas à pas la théorie et la pratique, nous utiliserons cet ensemble de données recensant des informations sur des auteurs :

| nom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------------------------------------- | --------- | ------------- |
| Madani     | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |

Prenez le temps d'observer ce tableau. Il contient trois occurrences (trois lignes), et plusieurs répétitions sont déjà visibles.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un identifiant ?

Un identifiant est une donnée très spéciale au sein de votre jeu de données. C'est la seule information qui est garantie d'être **unique** et qui permet de distinguer une occurrence (une ligne) de toutes les autres, sans la moindre ambiguïté possible. 

Dans notre exemple, si l'on regarde la donnée `email_auteur`, on constate qu'il est impossible que deux auteurs différents partagent la même adresse email. L'email est donc naturellemment unique pour chaque personne : c'est ce que l'on appelle un **identifiant naturel**.

### 1.2. L'identifiant permet de déterminer des données

La force principale d'un identifiant est qu'il "détermine" le reste des informations. Cela signifie que si vous me donnez un identifiant précis, je peux deviner avec certitude le reste de la ligne.
Par exemple : si vous connaissez la valeur exacte de `email_auteur` (disons *madani@mail.com*), vous connaissez automatiquement et sans erreur possible le `nom_auteur` associé (*Madani*). 

### 1.3. Une dépendance fonctionnelle simple

En modélisation de base de données, cette relation de "détermination" s'écrit de manière très précise. On utilise le symbole de la flèche (`->`) pour exprimer ce lien fort entre les deux données.

On l'écrit ainsi :
`email_auteur -> nom_auteur`

Cette syntaxe se lit de la manière suivante : *"Le nom_auteur dépend fonctionnellement de l'email_auteur"*. C'est ce qu'on appelle une **dépendance fonctionnelle simple**. L'identifiant se place toujours à gauche de la flèche.

### 1.4. Pourquoi une dépendance ne suffit pas ?

On pourrait être tenté de dire que, puisque `nom_ville` dépend de l'auteur (Madani habite à Tanger), on a `email_auteur -> nom_ville`. Bien que cette dépendance existe (la ville dépend bien de l'auteur), cela ne nous dit pas si "Ville" appartient réellement à la **même** entité (le même grand sujet). 

En réalité, une "Ville" est une notion du monde réel à part entière (elle a un nom, peut avoir un code postal, une région). Elle ne se limite pas à être un simple attribut de l'Auteur. Une dépendance ne nous permet donc pas, à elle seule, de délimiter proprement nos entités.

### 1.5. Première façon de découvrir une entité : partir d'un identifiant

Il existe deux manières de découvrir une entité. La première est de s'appuyer sur l'identifiant que vous venez de trouver.

Si vous avez trouvé un identifiant naturel fort (comme `email_auteur`) et que vous avez regroupé les données qui dépendent intimement et directement de lui (comme `nom_auteur`), félicitations : vous venez de découvrir votre première entité, que vous pouvez nommer **Auteur**.

### 1.6. Deuxième façon de découvrir une entité : partir d'une répétition

La deuxième manière est beaucoup plus subtile et demande de l'observation. Regardez la donnée `nom_ville`. Vous remarquez que la valeur *Tanger* y est répétée plusieurs fois. 

Comme vous l'avez appris dans le tutoriel précédent, une répétition est un signal d'alerte majeur. Elle indique que l'information qu'elle contient (ici, la ville) mérite de devenir indépendante pour éviter les problèmes de modification (imaginez devoir renommer "Tanger" sur 10 000 lignes). La répétition de "Tanger" nous révèle donc l'existence d'une deuxième réalité distincte, que l'on nommera **Ville**.

### 1.7. Créer un identifiant pour une nouvelle réalité

Maintenant que nous avons déduit que **Ville** est une entité à part entière, elle doit obéir à la règle d'or des entités : elle doit posséder son propre identifiant. 

Si l'on regarde nos données de départ, nous n'avons qu'un simple `nom_ville`. Le nom d'une ville n'est pas un identifiant fiable (il peut exister deux villes homonymes dans le monde). S'il n'y a pas d'identifiant naturel, **on le crée de toutes pièces**. Nous allons donc créer un identifiant technique nommé `id_ville`.

### 1.8. Une dépendance dans l'entité Ville

Notre entité Ville prend forme. Elle possède un identifiant (`id_ville`) et une donnée qui en dépend (`nom_ville`). Nous pouvons donc écrire la dépendance fonctionnelle propre à cette nouvelle réalité :

`id_ville -> nom_ville`

### 1.9. Remplacer la valeur répétée par l'identifiant

C'est ici que la magie de la modélisation opère. Dans notre entité de départ (**Auteur**), nous avions un problème avec la donnée textuelle `nom_ville` qui se répétait dangereusement. 

Pour résoudre ce problème de manière élégante et robuste, nous allons remplacer cette donnée textuelle longue par l'identifiant technique de la ville (`id_ville`). Ainsi, au lieu d'écrire "Tanger" partout, nous écrirons simplement le numéro de la ville (ex: 1). Si le nom de la ville doit changer un jour, nous ne le modifierons qu'à un seul endroit, dans l'entité Ville, et tous les auteurs liés à l'id 1 seront instantanément mis à jour.

### 1.10. La méthode complète

Pour résumer, la méthode pour découvrir vos entités suit toujours deux grands chemins possibles :

**Chemin A - L'identifiant est directement visible :**
1. Vous repérez un Identifiant.
2. Vous listez ses Dépendances.
3. Vous validez la Création de l'entité.

**Chemin B - L'identifiant n'est pas visible, mais il y a des répétitions :**
1. Vous observez une Répétition.
2. Vous déduisez la Réalité cachée (l'entité).
3. Vous procédez à la Création de l'identifiant technique.
4. Vous validez la Création de l'entité.
5. Vous faites le Remplacement dans le tableau d'origine.

### 1.11. La méthode ne s'arrête pas à la première entité

La découverte des entités est un processus **itératif**. Une fois que vous avez isolé "Auteur" et "Ville", vous ne devez pas vous arrêter en si bon chemin. Vous devez analyser chaque donnée restante (comme `nom_categorie`) et vous poser à nouveau la question : y a-t-il une répétition ? Si oui, le cycle (Chemin B) recommence jusqu'à ce que toutes vos données soient proprement classées.

### 1.12. À retenir

* **Identifiant :** C'est une donnée absolument unique qui permet de distinguer et de déterminer sans ambiguïté les autres données d'une même ligne.
* **Dépendance (`->`) :** C'est la relation directe qui indique qu'une donnée appartient et est déterminée par un identifiant.
* **Répétition :** C'est un signal d'alerte. Une valeur qui se répète vous indique très souvent qu'il est temps de créer une nouvelle entité et de lui forger son propre identifiant.

---

## Partie 2 — Pratique

Pour cette partie pratique, vous allez directement appliquer les méthodes d'observation et de déduction que vous venez d'apprendre dans la partie théorique. L'objectif est de vous entraîner à découvrir des entités cachées sans être assisté à chaque étape.

### Exercice

Prenez le temps d'observer très attentivement ce nouveau jeu de données recensant des articles de blog. Cherchez les identifiants naturels et repérez toutes les valeurs textuelles qui se répètent anormalement.

| id_article | titre_article        | nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------: | -------------------- | ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
|        201 | HTML pour débutant   | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        202 | Les formulaires HTML | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        203 | Actualité Web        | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Rabat     | Actualité     |
|        204 | Organiser un projet  | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Développement |
|        205 | Développement Web    | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |

**Travail à faire :**
Pour chaque donnée importante présentée ci-dessous (`nom_auteur`, `nom_ville`, `nom_categorie`), vous devez appliquer méthodiquement les étapes suivantes :
1. Recherchez l'identifiant visible (s'il y en a un) ou les valeurs textuelles qui se répètent plusieurs fois.
2. Indiquez clairement quelle réalité concrète du monde réel (la future entité) est représentée par cette répétition.
3. Proposez un nom de colonne clair pour le nouvel identifiant technique que vous allez créer pour cette entité.
4. Écrivez formellement la dépendance fonctionnelle qui relie ce nouvel identifiant à sa donnée (en utilisant la flèche `->`).

Pour formaliser et structurer votre réponse, complétez scrupuleusement le tableau ci-dessous :

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance |
| --------------- | -------------- | ------------------- | ------------------- | ---------- |
| nom_auteur      |                |                     |                     |            |
| nom_ville       |                |                     |                     |            |
| nom_categorie   |                |                     |                     |            |

*(Consigne de formateur : Ne cherchez surtout pas encore à relier ces entités entre elles ou à dessiner un Modèle Conceptuel de Données complet. Contentez-vous d'isoler ces réalités !)*

## Livrable

Créez un document **Markdown** ou utilisez un **Google Doc**. Reproduisez le tableau ci-dessus et complétez-le avec vos réponses détaillées. 
Nommez votre fichier : `decouvrir-realites.md` pour faciliter le suivi par votre formateur.

## Résultat attendu

Votre tableau final doit démontrer de manière limpide la logique de votre réflexion pédagogique : 
`Donnée -> Observation de Répétition -> Déduction de la Réalité -> Création du Nouvel ID -> Écriture de la Dépendance`. 
Il doit être clair et facile à lire.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.132/decouvrir-realites.html' | relative_url }}"
    height="450"
    title="Résultat attendu — Découvrir les réalités">
</iframe>

## Critères de réussite

Votre formateur évaluera votre travail selon les points stricts suivants :
* L'identifiant observé et les répétitions sont corrects et justifiés.
* La réalité (l'entité) que vous avez déduite est logique et a du sens dans le contexte donné (ex: Ville).
* Les dépendances fonctionnelles simples sont notées avec la syntaxe correcte (`A -> B`).
* Vous avez bien respecté la consigne stricte de ne construire aucune relation entre les entités prématurément.

---

## Bilan

### Vous avez appris :
* À découvrir avec certitude une première entité en vous appuyant sur un identifiant naturel.
* À débusquer de nouvelles entités cachées en prêtant attention aux répétitions de valeurs.
* À comprendre, lire et écrire la notation formelle d'une dépendance fonctionnelle (`A -> B`).

### Vous avez réalisé :
* L'extraction méthodique et réfléchie de nouvelles réalités (vos futures entités) à partir de l'analyse scrupuleuse d'un jeu de données brut. Vous êtes désormais capable d'assainir des données répétitives en prévision de leur structuration dans une base de données professionnelle.
