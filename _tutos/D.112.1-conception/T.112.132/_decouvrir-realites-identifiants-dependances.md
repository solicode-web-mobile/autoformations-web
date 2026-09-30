---
title: "Découvrir une entité à partir d'un identifiant ou d'une répétition"
layout: tuto
slug: "decouvrir-entite-identifiant-repetition"
permalink: /tutos/:slug/
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

Dans ce tutoriel, vous allez apprendre une méthode pour **faire apparaître une entité à partir des données**.

Vous allez apprendre à :

* rechercher un identifiant ;
* comprendre ce que l'identifiant permet d'identifier ;
* rechercher les données qui dépendent de cet identifiant ;
* observer une donnée qui se répète ;
* comprendre pourquoi une répétition doit être étudiée ;
* rechercher la réalité représentée par cette répétition ;
* créer un nouvel identifiant pour cette réalité ;
* écrire une dépendance fonctionnelle simple ;
* remplacer progressivement une donnée répétée par son identifiant.

À la fin du tutoriel, vous saurez commencer à transformer :

```text
Données
   ↓
Identifiant
   ↓
Dépendances
   ↓
Réalité
   ↓
Entité
```

ou :

```text
Donnée répétée
   ↓
Observation
   ↓
Réalité indépendante
   ↓
Nouvel identifiant
   ↓
Entité
```

Vous ne construisez pas encore le MCD.

---

## 2. Prérequis

Avant de commencer, vous devez savoir :

* distinguer une donnée d'une valeur ;
* reconnaître une occurrence ;
* repérer une valeur répétée ;
* comprendre qu'une répétition peut poser un problème de modification ;
* lire un dictionnaire de données simple.

Vous avez appris ces notions dans :

```text
T.112.111 — Distinguer information, donnée et valeur
T.112.112 — Comprendre ce que devient une donnée
T.112.121 — Identifier et décrire les données d'une maquette
T.112.122 — Construire le dictionnaire de données
T.112.131 — Observer les occurrences et repérer les répétitions
```

---

## Données de départ

Nous allons travailler sur un Blog.

Voici plusieurs occurrences d'articles :

| id_article | titre_article             | nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------: | ------------------------- | ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
|        101 | Débuter avec HTML         | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        102 | Créer une page Web        | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        103 | Actualité du Web          | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Rabat     | Actualité     |
|        104 | Organiser son projet      | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        105 | Les outils du développeur | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Actualité     |

Nous allons observer ces données pour découvrir progressivement les réalités qu'elles représentent.

---

# Partie 1 — Théorie

## 1.1. Qu'est-ce qu'un identifiant ?

Un **identifiant** permet de reconnaître une seule occurrence.

Dans notre tableau :

```text
id_article
```

possède les valeurs :

```text
101
102
103
104
105
```

Chaque valeur est différente.

Nous pouvons donc utiliser :

```text
id_article
```

pour identifier un article précis.

Exemple :

```text
id_article = 101
```

permet de retrouver un seul article.

### À retenir

> Un identifiant permet de reconnaître une seule occurrence.

---

## 1.2. L'identifiant permet de déterminer des données

Lorsque nous connaissons :

```text
id_article = 101
```

nous pouvons retrouver les informations de cet article.

Par exemple :

```text
id_article → titre_article
```

Cela signifie :

> L'identifiant `id_article` permet de déterminer le titre de l'article.

Nous pouvons aussi écrire :

```text
id_article → nom_auteur
```

car, dans une ligne donnée, connaître l'article permet de connaître l'auteur indiqué sur cette ligne.

Une écriture de ce type s'appelle une **dépendance fonctionnelle**.

On l'écrit :

```text
A → B
```

et on lit :

> A détermine B.

---

## 1.3. Une dépendance fonctionnelle simple

Prenons :

```text
id_article → titre_article
```

Cela signifie :

```text
Un id_article
        ↓
un seul titre_article
```

Exemple :

```text
101 → Débuter avec HTML
102 → Créer une page Web
103 → Actualité du Web
```

Nous avons donc :

```text
id_article → titre_article
```

Nous pouvons aussi avoir :

```text
id_article → nom_auteur
id_article → nom_ville
id_article → nom_categorie
```

Mais attention :

> Une donnée qui dépend d'un identifiant n'est pas automatiquement une donnée propre à cette entité.

Nous devons encore observer les répétitions.

C'est un point important.

---

## 1.4. Pourquoi une dépendance ne suffit pas ?

Regardons :

```text
id_article → nom_auteur
```

Cette dépendance est possible.

Mais observons les données :

```text
101 → Madani
102 → Madani
104 → Madani
```

Le même auteur apparaît dans plusieurs articles.

Cela nous indique que :

```text
Madani
```

ne représente pas un auteur créé spécialement pour l'article 101.

Il représente une réalité indépendante :

```text
Auteur
```

Nous devons donc continuer notre observation.

### À retenir

> Une dépendance nous aide à regrouper les données, mais les répétitions nous aident à découvrir les réalités indépendantes.

---

## 1.5. Première façon de découvrir une entité : partir d'un identifiant

Lorsque nous avons un identifiant clair, nous pouvons commencer par lui.

Exemple :

```text
id_article
```

Nous cherchons les données qui décrivent l'article :

```text
id_article
titre_article
```

Puis :

```text
contenu_article
date_publication
statut_article
image_article
```

Nous obtenons progressivement :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
```

Nous avons commencé à découvrir une entité :

```text
ARTICLE
```

La logique est :

```text
id_article
    ↓
données qui décrivent l'article
    ↓
ARTICLE
```

---

## 1.6. Deuxième façon de découvrir une entité : partir d'une répétition

Toutes les entités ne sont pas visibles directement.

Parfois, nous avons seulement :

```text
nom_ville
```

et aucune donnée :

```text
id_ville
```

Nous devons alors observer les occurrences.

Dans notre exemple :

```text
Tanger
Tanger
Rabat
Tanger
Rabat
```

Nous constatons :

```text
Tanger → répétée
Rabat  → répétée
```

Nous devons alors poser une question :

> Que représente `Tanger` ?

Réponse :

```text
Une ville.
```

Nous commençons donc à découvrir une réalité indépendante :

```text
VILLE
```

Mais nous avons encore un problème :

> Comment identifier une ville ?

---

## 1.7. Créer un identifiant pour une nouvelle réalité

Pour identifier une ville, nous créons :

```text
id_ville
```

Nous pouvons maintenant associer :

```text
id_ville → nom_ville
```

Par exemple :

```text
id_ville | nom_ville
---------|----------
1        | Tanger
2        | Rabat
```

Nous avons maintenant :

```text
VILLE
-----
id_ville
nom_ville
```

La nouvelle entité est apparue grâce à la répétition.

La chaîne de raisonnement est :

```text
nom_ville
   ↓
valeurs répétées
   ↓
problème de répétition
   ↓
réalité indépendante : Ville
   ↓
création de id_ville
   ↓
id_ville → nom_ville
   ↓
VILLE
```

### À retenir

> Lorsqu'une valeur répétée représente une réalité indépendante, nous pouvons créer un identifiant pour cette réalité et construire une nouvelle entité.

---

## 1.8. Une dépendance dans l'entité Ville

Nous avons :

```text
id_ville → nom_ville
```

Pourquoi ?

Parce qu'une valeur de `id_ville` correspond à une seule valeur de `nom_ville`.

Exemple :

```text
1 → Tanger
2 → Rabat
```

Mais nous ne pouvons pas écrire automatiquement :

```text
nom_ville → id_ville
```

Pourquoi ?

Parce qu'un nom de ville ne garantit pas toujours une identification unique.

Pour notre méthode N1, retenez simplement :

> L'identifiant détermine la donnée qui décrit la réalité.

---

## 1.9. Remplacer la valeur répétée par l'identifiant

Avant la séparation :

```text
AUTEUR
------
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Après la découverte de `Ville` :

```text
AUTEUR
------
nom_auteur
prenom_auteur
email_auteur
id_ville
```

Et nous avons :

```text
VILLE
-----
id_ville
nom_ville
```

La valeur :

```text
Tanger
```

n'est donc plus répétée dans chaque occurrence d'auteur.

Nous conservons :

```text
id_ville
```

qui permet de retrouver :

```text
nom_ville
```

### À retenir

> Lorsqu'une réalité devient indépendante, les autres données utilisent son identifiant au lieu de répéter sa valeur descriptive.

---

## 1.10. La méthode complète

Vous pouvez maintenant retenir les deux chemins.

### Chemin A — L'identifiant est visible

```text
Identifiant
    ↓
Données dépendantes
    ↓
Réalité identifiée
    ↓
Entité
```

Exemple :

```text
id_article
    ↓
titre_article
contenu_article
date_publication
    ↓
ARTICLE
```

### Chemin B — L'identifiant n'est pas visible

```text
Valeur répétée
    ↓
Observation
    ↓
Problème de répétition
    ↓
Réalité indépendante
    ↓
Créer un identifiant
    ↓
Dépendance fonctionnelle
    ↓
Entité
```

Exemple :

```text
Tanger
    ↓
valeur répétée
    ↓
Ville
    ↓
id_ville
    ↓
id_ville → nom_ville
    ↓
VILLE
```

---

## 1.11. La méthode ne s'arrête pas à la première entité

Après avoir découvert une entité, nous devons recommencer l'observation.

Exemple :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
id_auteur
id_categorie
```

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
```

```text
VILLE
-----
id_ville
nom_ville
```

Il faut ensuite observer les données restantes.

Par exemple :

```text
nom_categorie

Développement
Développement
Actualité
Développement
Actualité
```

La répétition nous donne un nouveau signal.

Nous pouvons alors recommencer :

```text
Répétition
    ↓
Réalité représentée
    ↓
Catégorie
    ↓
id_categorie
    ↓
id_categorie → nom_categorie
```

Cette répétition de la méthode sera étudiée plus complètement dans le tutoriel suivant.

---

## 1.12. À retenir

```text
1. Chercher un identifiant.

2. Chercher les données qu'il détermine.

3. Observer les répétitions.

4. Lorsqu'une valeur se répète, chercher ce qu'elle représente.

5. Si elle représente une réalité indépendante,
   créer un identifiant.

6. Écrire la dépendance fonctionnelle.

7. Regrouper les données de cette réalité.

8. Remplacer la valeur répétée par son identifiant.

9. Recommencer.
```

La méthode est donc :

```text
Observer
   ↓
Identifier
   ↓
Chercher les dépendances
   ↓
Repérer les répétitions
   ↓
Découvrir une réalité
   ↓
Créer un identifiant
   ↓
Séparer
   ↓
Recommencer
```

---

# Partie 2 — Pratique

## 2.1. Étape 1 — Chercher l'identifiant

Observez le tableau :

| id_article | titre_article             | nom_auteur | prenom_auteur | email_auteur                                | nom_ville |
| ---------: | ------------------------- | ---------- | ------------- | ------------------------------------------- | --------- |
|        101 | Débuter avec HTML         | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
|        102 | Créer une page Web        | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
|        103 | Actualité du Web          | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Rabat     |
|        104 | Organiser son projet      | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    |
|        105 | Les outils du développeur | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     |

### Question

Quelle donnée peut identifier une seule occurrence d'article ?

```text
________________________________
```

### Question

Donnez deux exemples de valeurs de cet identifiant.

```text
________________________________
________________________________
```

---

## 2.2. Étape 2 — Rechercher les données dépendantes

On part de :

```text
id_article
```

Cherchez les données qui permettent de décrire l'article.

Complétez :

```text
id_article →
    ______________________
    ______________________
    ______________________
```

Ne cherchez pas encore les autres entités.

Le but est uniquement de comprendre ce que l'identifiant `id_article` permet de retrouver.

---

## 2.3. Étape 3 — Observer une donnée qui se répète

Observez :

```text
nom_auteur

Madani
Madani
Sara
Madani
Youssef
```

### Question

Quelle valeur est répétée ?

```text
________________________________
```

### Question

Combien de fois apparaît-elle ?

```text
________________________________
```

### Question

Cette répétition indique-t-elle qu'il existe probablement plusieurs articles pour le même auteur ?

```text
________________________________
```

---

## 2.4. Étape 4 — Chercher ce que représente la valeur répétée

Nous avons trouvé :

```text
Madani
Madani
Madani
```

Ne cherchez plus seulement la valeur.

Posez-vous la question :

> « Que représente Madani dans l'application ? »

Réponse attendue sous forme de réalité :

```text
________________________________
```

Puis complétez :

```text
Cette réalité possède ses propres informations :

________________________________
________________________________
________________________________
```

---

## 2.5. Étape 5 — Observer une deuxième répétition

Observez :

```text
nom_ville

Tanger
Tanger
Rabat
Tanger
Rabat
```

### Questions

Quelle valeur est répétée ?

```text
________________________________
```

Qu'est-ce que cette valeur représente ?

```text
________________________________
```

Pourquoi cette réalité peut-elle être gérée séparément ?

```text
________________________________
________________________________
```

---

## 2.6. Étape 6 — Créer l'identifiant de la nouvelle réalité

Nous avons découvert :

```text
VILLE
```

Mais nous devons pouvoir identifier chaque ville.

Proposez un nom d'identifiant :

```text
________________________________
```

Puis écrivez la dépendance :

```text
________________ → ________________
```

---

## 2.7. Étape 7 — Construire le groupe de données de la nouvelle entité

Complétez :

```text
VILLE
-----
________________
________________
```

Puis écrivez une phrase simple :

> `id_ville` permet de déterminer __________________.

---

## 2.8. Étape 8 — Remplacer la donnée répétée

Avant :

```text
AUTEUR
------
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Après la découverte de `Ville`, complétez :

```text
AUTEUR
------
nom_auteur
prenom_auteur
email_auteur
________________
```

Puis :

```text
VILLE
-----
id_ville
nom_ville
```

---

## 2.9. Étape 9 — Recommencer l'observation

Après la découverte de `Ville`, observez maintenant :

```text
nom_categorie

Développement
Développement
Actualité
Développement
Actualité
```

### Question

Quelle valeur est répétée ?

```text
________________________________
```

### Question

Que représente cette valeur ?

```text
________________________________
```

### Question

À votre avis, quelle nouvelle réalité semble apparaître ?

```text
________________________________
```

Dans cet exercice, vous ne devez pas encore construire complètement cette nouvelle entité.

L'objectif est de reconnaître que **la même méthode peut être réutilisée**.

---

## 2.10. Exercice individuel — Découvrir les réalités

Observez le jeu de données suivant :

| id_article | titre_article        | nom_auteur | prenom_auteur | email_auteur                                | nom_ville | nom_categorie |
| ---------: | -------------------- | ---------- | ------------- | ------------------------------------------- | --------- | ------------- |
|        201 | HTML pour débutant   | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        202 | Les formulaires HTML | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |
|        203 | Actualité Web        | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       | Rabat     | Actualité     |
|        204 | Organiser un projet  | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) | Rabat     | Développement |
|        205 | Développement Web    | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   | Tanger    | Développement |

### Travail à faire

Pour chaque donnée importante :

1. recherchez l'identifiant visible ;
2. recherchez les valeurs répétées ;
3. indiquez ce que représente une valeur répétée ;
4. proposez un identifiant pour la nouvelle réalité ;
5. écrivez une dépendance fonctionnelle simple.

Complétez ce tableau :

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance |
| --------------- | -------------- | ------------------- | ------------------- | ---------- |
| nom_auteur      |                |                     |                     |            |
| nom_ville       |                |                     |                     |            |
| nom_categorie   |                |                     |                     |            |

Ne construisez pas encore les relations entre les entités.

Ne construisez pas encore le MCD.

---

## Travail à faire

À partir du jeu de données fourni, appliquez la méthode de découverte.

Votre travail doit montrer :

```text
1. L'identifiant observé.

2. Les données qui dépendent de cet identifiant.

3. Les valeurs répétées.

4. La réalité représentée par une répétition.

5. L'identifiant créé pour cette réalité.

6. Une dépendance fonctionnelle simple.

7. Le remplacement de la donnée répétée par l'identifiant.
```

Vous devez montrer votre raisonnement.

Exemple de structure :

```text
Donnée observée
    ↓
Valeur répétée
    ↓
Réalité représentée
    ↓
Identifiant
    ↓
Dépendance fonctionnelle
```

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant vos réponses.

Nom conseillé :

```text
decouverte-entites.md
```

## Résultat attendu

Votre document doit montrer qu'une entité peut être découverte de deux façons :

```text
Identifiant connu
    ↓
Données dépendantes
    ↓
Réalité
    ↓
Entité
```

et :

```text
Valeur répétée
    ↓
Observation
    ↓
Réalité indépendante
    ↓
Nouvel identifiant
    ↓
Dépendance
    ↓
Entité
```

Vous devez être capable de produire au minimum un raisonnement de ce type :

```text
nom_ville
    ↓
Tanger est répétée
    ↓
La valeur représente une ville
    ↓
Création de id_ville
    ↓
id_ville → nom_ville
    ↓
VILLE
```

## Critère de réussite

Le travail est réussi si :

* l'identifiant `id_article` est correctement identifié ;
* les données dépendantes de `id_article` sont correctement repérées ;
* les valeurs répétées sont correctement observées ;
* la réalité représentée par une répétition est correctement identifiée ;
* un identifiant adapté est proposé ;
* la dépendance fonctionnelle est correctement écrite ;
* la donnée répétée peut être remplacée par l'identifiant correspondant ;
* le raisonnement est expliqué dans le bon ordre ;
* aucune relation ou cardinalité n'est encore construite ;
* aucun MCD n'est encore produit.

---

## Bilan

### Vous avez appris

Vous savez maintenant :

* rechercher un identifiant ;
* comprendre qu'un identifiant permet de déterminer des données ;
* écrire une dépendance fonctionnelle simple ;
* observer les répétitions ;
* rechercher ce que représente une valeur répétée ;
* découvrir une nouvelle réalité ;
* créer un identifiant pour cette réalité ;
* regrouper ses données ;
* remplacer progressivement une valeur répétée par son identifiant.

### Vous avez réalisé

Vous avez appliqué une première méthode pour faire apparaître les entités à partir des données.

Vous avez commencé avec :

```text
Données
```

puis vous avez utilisé :

```text
Identifiant
```

et :

```text
Répétition
```

pour découvrir :

```text
Réalité
```

puis :

```text
Entité
```

La prochaine étape consiste à appliquer cette méthode sur un ensemble complet de données afin de **construire plusieurs entités de manière autonome**.

---

## Glossaire

* **Identifiant** : donnée qui permet de reconnaître une seule occurrence.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée permet de déterminer une autre donnée.
* **Donnée déterminante** : donnée située à gauche d'une dépendance fonctionnelle.
* **Donnée dépendante** : donnée déterminée par une autre donnée.
* **Réalité** : chose que les données permettent de représenter et de gérer.
* **Entité** : réalité que l'application peut identifier et gérer.
* **Répétition** : même valeur présente plusieurs fois.
* **Séparer** : retirer une réalité indépendante d'un autre groupe de données pour la gérer séparément.
* **Identifiant créé** : identifiant ajouté pour pouvoir identifier une nouvelle réalité.
