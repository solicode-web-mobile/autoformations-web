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

Dans ce tutoriel, vous allez apprendre à **observer plusieurs occurrences d'une même donnée**.

Vous allez apprendre à :

* reconnaître une occurrence ;
* distinguer une donnée d'une valeur ;
* comparer plusieurs valeurs ;
* repérer une valeur qui se répète ;
* signaler une donnée qui contient des répétitions ;
* expliquer pourquoi une répétition mérite d'être observée.

À la fin du tutoriel, vous saurez observer les données avant de chercher les entités.

## 2. Prérequis

Avant de commencer, vous devez savoir :

* ce qu'est une donnée ;
* ce qu'est une valeur ;
* faire la différence entre une donnée et sa valeur ;
* lire un dictionnaire de données simple.


## Données de départ

Nous allons travailler avec des données d'auteurs.

Voici un ensemble de plusieurs occurrences :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville |
| ---------- | ------------- | ------------------------------------------- | --------- |
| Ali        | Madani        | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    |

Ces données représentent plusieurs auteurs.

Pour le moment, nous ne cherchons pas encore les entités.

Nous allons seulement **observer les données**.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une occurrence ?

Une **occurrence** est un exemple concret d'un ensemble de données.

Dans notre tableau, chaque ligne représente une occurrence.

Exemple :

```text
Ali
Madani
madani@mail.com
Tanger
```

Cette ligne représente une occurrence.

Une autre ligne représente une autre occurrence :

```text
Sara
Amrani
sara@mail.com
Tanger
```

Nous avons donc plusieurs occurrences.

```text
Occurrence 1 → Madani Ali
Occurrence 2 → Sara Amrani
Occurrence 3 → Youssef Karim
Occurrence 4 → Amine Idrissi
```

### À retenir

> Une occurrence est un exemple concret d'un ensemble de données.

---

### 1.2. Une donnée peut avoir plusieurs valeurs

Une donnée décrit une information.

Par exemple :

```text
nom_auteur
```

est une donnée.

Cette donnée peut avoir plusieurs valeurs :

```text
Madani
Amrani
Karim
Idrissi
```

Autre exemple :

```text
nom_ville
```

est une donnée.

Elle possède ici plusieurs valeurs :

```text
Tanger
Tanger
Rabat
Tanger
```

Il est important de distinguer :

```text
nom_ville → donnée

Tanger → valeur
```

### À retenir

> Une donnée peut avoir une valeur différente pour chaque occurrence.

---

### 1.3. Observer plusieurs occurrences

Une seule occurrence ne permet pas toujours de comprendre le comportement d'une donnée.

Exemple :

```text
Madani → Tanger
```

Nous savons seulement que Madani habite à Tanger.

Mais si nous observons plusieurs occurrences :

```text
Madani   → Tanger
Sara     → Tanger
Youssef  → Rabat
Amine    → Tanger
```

nous pouvons comparer les valeurs.

Nous remarquons alors :

```text
Tanger
Tanger
Rabat
Tanger
```

La valeur `Tanger` apparaît plusieurs fois.

Cette observation n'était pas possible avec une seule occurrence.

### À retenir

> Pour étudier les données, il est utile de comparer plusieurs occurrences.

---

### 1.4. Qu'est-ce qu'une répétition ?

Une répétition apparaît lorsqu'une même valeur apparaît plusieurs fois.

Dans notre tableau :

```text
nom_ville

Tanger
Tanger
Rabat
Tanger
```

La valeur :

```text
Tanger
```

est répétée.

La valeur :

```text
Rabat
```

n'est pas répétée dans cet exemple.

On peut donc écrire :

```text
Tanger → valeur répétée
Rabat  → valeur non répétée
```

### À retenir

> Une répétition signifie qu'une même valeur apparaît plusieurs fois.

---

### 1.5. Comment repérer une répétition ?

Pour repérer une répétition, on peut suivre une méthode simple.

```text
1. Choisir une donnée.

2. Lire ses valeurs.

3. Comparer les valeurs.

4. Chercher les valeurs identiques.

5. Noter les valeurs répétées.
```

Exemple avec `nom_ville` :

```text
Tanger
Tanger
Rabat
Tanger
```

Comparaison :

```text
Tanger = Tanger
Tanger ≠ Rabat
Rabat ≠ Tanger
```

Résultat :

```text
Tanger est répétée.
```

---

### 1.6. Une répétition est un signal d'observation

Une répétition n'est pas automatiquement une erreur.

Par exemple :

```text
Madani → Tanger
Sara → Tanger
Amine → Tanger
```

Il est normal que plusieurs personnes habitent dans la même ville.

La répétition devient intéressante lorsque nous voulons comprendre **pourquoi la même information apparaît plusieurs fois**.

Nous devons donc poser une question :

> Pourquoi la même valeur est-elle enregistrée plusieurs fois ?

Dans notre exemple :

```text
Tanger
Tanger
Tanger
```

Nous devons simplement signaler :

```text
La valeur "Tanger" est répétée.
```

Nous n'allons pas encore chercher la solution.

La recherche de la solution sera faite dans le tutoriel suivant.

### À retenir

> Une répétition est un signal qui nous pousse à observer davantage les données.

---

### 1.7. Pourquoi observer les répétitions ?

Une information répétée peut poser un problème plus tard.

Prenons cet exemple :

| Auteur        | Ville  |
| ------------- | ------ |
| Madani Ali    | Tanger |
| Sara Amrani   | Tanger |
| Amine Idrissi | Tanger |

Supposons que le nom de la ville doive être corrigé.

La valeur `Tanger` apparaît dans plusieurs lignes.

Nous devrions donc retrouver toutes les occurrences contenant cette valeur.

Cela peut entraîner :

```text
Même information
↓
répétée plusieurs fois
↓
plusieurs lignes à modifier
↓
risque d'oublier une ligne
```

Pour le moment, vous devez seulement retenir :

> Une répétition peut créer un problème de modification.

Nous chercherons une solution dans le prochain tutoriel.

---

### 1.8. Une donnée peut contenir des valeurs répétées

Il faut bien distinguer :

```text
La donnée
```

et :

```text
la valeur répétée
```

Dans notre exemple :

```text
nom_ville
```

est la donnée.

```text
Tanger
```

est une valeur.

Nous avons :

```text
nom_ville
    ↓
Tanger
Tanger
Rabat
Tanger
```

La donnée qui contient une répétition est donc :

```text
nom_ville
```

La valeur répétée est :

```text
Tanger
```

### À retenir

> On repère d'abord la donnée, puis la valeur qui se répète.

---

## Partie 2 — Pratique

### 2.1. Observer un premier tableau

Observez le tableau suivant :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville |
| ---------- | ------------- | ------------------------------------------- | --------- |
| Ali        | Madani        | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    |

Commencez par lire les données.

Vous avez :

```text
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

### 2.2. Identifier les occurrences

Chaque ligne est une occurrence.

Complétez :

| Occurrence | nom_auteur | prenom_auteur | email_auteur | nom_ville |
| ---------- | ---------- | ------------- | ------------ | --------- |
| 1          |            |               |              |           |
| 2          |            |               |              |           |
| 3          |            |               |              |           |
| 4          |            |               |              |           |

### À faire

Indiquez le nombre total d'occurrences.

```text
Nombre d'occurrences : ______
```

---

### 2.3. Observer les valeurs d'une donnée

Choisissez la donnée :

```text
nom_ville
```

Écrivez toutes ses valeurs :

```text
________________
________________
________________
________________
```

Puis comparez-les.

### Question

Quelle valeur apparaît plusieurs fois ?

```text
________________________________
```

---

### 2.4. Repérer les répétitions

Complétez le tableau :

| Donnée        | Valeurs observées                                                                                                                                                      | Valeur répétée ? |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| nom_auteur    | Madani, Amrani, Karim, Idrissi                                                                                                                                         |                  |
| prenom_auteur | Ali, Sara, Youssef, Amine                                                                                                                                              |                  |
| email_auteur  | [madani@mail.com](mailto:madani@mail.com), [sara@mail.com](mailto:sara@mail.com), [youssef@mail.com](mailto:youssef@mail.com), [amine@mail.com](mailto:amine@mail.com) |                  |
| nom_ville     | Tanger, Tanger, Rabat, Tanger                                                                                                                                          |                  |

Pour chaque donnée, indiquez :

```text
Oui
```

ou :

```text
Non
```

---

### 2.5. Observer une autre situation

Voici un autre ensemble de données :

| nom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------------------------------------- | --------- | ------------- |
| Madani     | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |
| Amine      | [amine@mail.com](mailto:amine@mail.com)     | Tanger    | Développement |

Observez les colonnes :

```text
nom_auteur
email_auteur
nom_ville
nom_categorie
```

### Travail à faire

Pour chaque donnée, recherchez les valeurs répétées.

Complétez :

| Donnée        | Valeurs répétées |
| ------------- | ---------------- |
| nom_auteur    |                  |
| email_auteur  |                  |
| nom_ville     |                  |
| nom_categorie |                  |

---

### 2.6. Comparer deux données

Observez :

```text
nom_ville

Tanger
Tanger
Rabat
Tanger
```

Puis :

```text
nom_auteur

Madani
Amrani
Karim
Idrissi
```

### Questions

Quelle donnée contient une répétition ?

```text
________________________________
```

Quelle valeur est répétée ?

```text
________________________________
```

La donnée `nom_auteur` contient-elle une répétition dans cet exemple ?

```text
________________________________
```

---

### 2.7. Observer le problème

Reprenons :

| nom_auteur    | nom_ville |
| ------------- | --------- |
| Madani Ali    | Tanger    |
| Sara Amrani   | Tanger    |
| Amine Idrissi | Tanger    |

La valeur :

```text
Tanger
```

apparaît trois fois.

### Question

Supposons que le nom de cette ville doive être modifié.

Combien de lignes contiennent cette information ?

```text
________________________________
```

### Question

Pourquoi cette répétition peut-elle poser un problème ?

Écrivez votre réponse avec une phrase simple.

```text
________________________________
________________________________
```

---

### 2.8. Faire la différence entre observation et solution

À ce stade, vous devez seulement observer.

Vous avez découvert :

```text
nom_ville
    ↓
Tanger
Tanger
Rabat
Tanger
```

Vous avez constaté :

```text
Tanger est répétée.
```

Vous pouvez aussi constater :

```text
La répétition peut rendre une modification plus difficile.
```

Mais vous ne devez pas encore :

```text
créer une table Ville
```

ou :

```text
créer id_ville
```

ou :

```text
construire un MCD
```

Ces étapes seront étudiées plus tard.

### À retenir

```text
T.112.131
        ↓
Observer
        ↓
Comparer
        ↓
Repérer
        ↓
Signaler les répétitions
```

---

### 2.9. Exercice individuel

À partir du tableau suivant :

| nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
| Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
| Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Tanger    | Développement |
| Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |
| Amine      | Idrissi       | [amine@mail.com](mailto:amine@mail.com)     | Tanger    | Développement |
| Nadia      | Alaoui        | [nadia@mail.com](mailto:nadia@mail.com)     | Rabat     | Actualité     |

### Travail à faire

Pour chaque donnée :

1. listez les valeurs observées ;
2. recherchez les valeurs répétées ;
3. indiquez les données qui contiennent au moins une répétition ;
4. choisissez une répétition et expliquez pourquoi elle mérite une observation.

Complétez ce tableau :

| Donnée        | Valeurs observées | Valeur(s) répétée(s) | Observation |
| ------------- | ----------------- | -------------------- | ----------- |
| nom_auteur    |                   |                      |             |
| prenom_auteur |                   |                      |             |
| email_auteur  |                   |                      |             |
| nom_ville     |                   |                      |             |
| nom_categorie |                   |                      |             |

Ne cherchez pas encore les entités.

Ne créez pas encore de nouveaux identifiants.

---

## Travail à faire

À partir des données fournies dans le tutoriel, produisez une observation des occurrences et des répétitions.

Votre travail doit contenir :

```text
1. Les occurrences observées.

2. Les données étudiées.

3. Les valeurs répétées.

4. Les données qui contiennent des répétitions.

5. Une explication simple d'un problème possible lié à une répétition.
```

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant vos réponses.

Nom conseillé :

```text
observation-occurrences-repetitions.md
```

## Résultat attendu

À la fin du travail, votre document doit permettre de voir clairement :

```text
Donnée
   ↓
Valeurs observées
   ↓
Valeurs répétées
   ↓
Problème possible
```

Vous devez être capable de montrer, par exemple :

```text
nom_ville
    ↓
Tanger
Tanger
Rabat
Tanger
    ↓
Tanger est répétée.
    ↓
Cette répétition mérite une observation.
```

## Critère de réussite

Le travail est réussi si :

* toutes les données demandées sont observées ;
* les occurrences sont correctement identifiées ;
* les valeurs répétées sont correctement repérées ;
* la différence entre donnée et valeur est respectée ;
* le problème lié à une répétition est expliqué simplement ;
* aucune entité n'est créée à ce stade ;
* aucun identifiant n'est inventé à ce stade.

---

## Bilan

### Vous avez appris

Vous savez maintenant :

* reconnaître une occurrence ;
* distinguer une donnée d'une valeur ;
* observer plusieurs occurrences ;
* comparer les valeurs ;
* repérer une valeur répétée ;
* identifier une donnée qui contient des répétitions ;
* comprendre qu'une répétition peut créer un problème de modification.

### Vous avez réalisé

Vous avez observé un ensemble de données et identifié les répétitions.

La prochaine étape sera de chercher **ce que représentent réellement les données** et de découvrir progressivement les **identifiants et les dépendances**.

---

## Glossaire

* **Occurrence** : exemple concret d'un ensemble de données.
* **Donnée** : information que l'application doit connaître ou utiliser.
* **Valeur** : contenu réel d'une donnée.
* **Répétition** : même valeur présente plusieurs fois.
* **Donnée répétée** : donnée dont les valeurs peuvent apparaître plusieurs fois.
* **Modification** : changement d'une information existante.
* **Observation** : action de regarder et comparer les données pour comprendre leur comportement.

