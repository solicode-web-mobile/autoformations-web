---
title: "Construire les entités à partir des données"
layout: tuto
slug: "construire-entites-partir-donnees"
permalink: /tutos/:slug/
tuto_id: "T.112.133"
type: "classique"
version: "normal"
ua: "UA.112.13"
nav_order: 7
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez appliquer la méthode complète pour **construire les entités à partir d'un dictionnaire de données et de plusieurs occurrences**.

Vous allez apprendre à :

* rechercher les identifiants ;
* regrouper les données qui décrivent une même réalité ;
* repérer les valeurs répétées ;
* découvrir les réalités indépendantes ;
* créer les identifiants nécessaires ;
* écrire les dépendances fonctionnelles simples ;
* remplacer les données répétées par les identifiants ;
* vérifier les groupes de données obtenus ;
* construire les entités finales.

La méthode est :

```text
Observer
   ↓
Chercher un identifiant
   ↓
Chercher les données dépendantes
   ↓
Observer les répétitions
   ↓
Chercher ce que représente la répétition
   ↓
Créer un identifiant si nécessaire
   ↓
Écrire la dépendance
   ↓
Séparer les données
   ↓
Remplacer la donnée répétée par l'identifiant
   ↓
Recommencer
   ↓
Construire les entités
```

À la fin du tutoriel, vous devez être capable de passer de plusieurs occurrences à un ensemble d'entités organisées.

Vous ne construisez pas encore les relations ni les cardinalités.

---

## 2. Prérequis

Avant de commencer, vous devez savoir :

* distinguer une donnée et une valeur ;
* reconnaître une occurrence ;
* repérer une valeur répétée ;
* comprendre le problème de répétition ;
* rechercher un identifiant ;
* comprendre une dépendance fonctionnelle simple ;
* découvrir une réalité à partir d'une répétition.

Vous avez appris ces notions dans :

```text
T.112.111 — Distinguer information, donnée et valeur
T.112.112 — Comprendre ce que devient une donnée
T.112.121 — Identifier et décrire les données d'une maquette
T.112.122 — Construire le dictionnaire de données
T.112.131 — Observer les occurrences et repérer les répétitions
T.112.132 — Découvrir une entité à partir d'un identifiant ou d'une répétition
```

---

## Données de départ

Nous allons travailler sur un Blog.

Voici le dictionnaire de données :

| Donnée             | Description                      |
| ------------------ | -------------------------------- |
| `id_article`       | Identifiant d'un article         |
| `titre_article`    | Titre de l'article               |
| `contenu_article`  | Contenu de l'article             |
| `date_publication` | Date de publication              |
| `statut_article`   | Statut de l'article              |
| `image_article`    | Image associée à l'article       |
| `id_auteur`        | Identifiant d'un auteur          |
| `nom_auteur`       | Nom de l'auteur                  |
| `prenom_auteur`    | Prénom de l'auteur               |
| `email_auteur`     | Email de l'auteur                |
| `nom_ville`        | Nom de la ville de l'auteur      |
| `nom_categorie`    | Nom de la catégorie de l'article |
| `duree_lecture`    | Durée de lecture estimée         |

Pour l'exercice, on considère que :

```text
duree_lecture
```

est une donnée calculable.

Elle ne sera donc pas conservée dans les entités finales.

---

# Partie 1 — Théorie

## 1.1. Construire une entité avec un identifiant

Une entité peut commencer par un identifiant.

Exemple :

```text
id_article
```

Cet identifiant permet de reconnaître un article.

Nous recherchons ensuite les données qui décrivent cet article :

```text
id_article →
    titre_article
    contenu_article
    date_publication
    statut_article
    image_article
```

Nous obtenons :

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

L'idée importante est :

> L'identifiant permet de regrouper les données qui décrivent la même réalité.

---

## 1.2. Un groupe de données peut contenir une autre réalité

Supposons que nous obtenions :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
id_auteur
nom_auteur
prenom_auteur
email_auteur
nom_ville
nom_categorie
```

Tout semble être dans `Article`.

Mais nous devons continuer à observer les occurrences.

Pourquoi ?

Parce qu'une donnée peut décrire une autre réalité.

Par exemple :

```text
nom_auteur
prenom_auteur
email_auteur
```

décrivent un auteur.

De même :

```text
nom_ville
```

décrit une ville.

Et :

```text
nom_categorie
```

décrit une catégorie.

Nous devons donc rechercher les répétitions.

---

## 1.3. Découvrir l'entité Auteur

Observons :

| id_article | id_auteur | nom_auteur | prenom_auteur | email_auteur                                |
| ---------: | --------: | ---------- | ------------- | ------------------------------------------- |
|        101 |         1 | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   |
|        102 |         1 | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   |
|        103 |         2 | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       |
|        104 |         1 | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   |
|        105 |         3 | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) |

Nous observons :

```text
id_auteur = 1
```

apparaît plusieurs fois.

Pour cet identifiant :

```text
1 → Madani
1 → Ali
1 → madani@mail.com
```

Nous pouvons écrire :

```text
id_auteur →
    nom_auteur
    prenom_auteur
    email_auteur
```

Nous avons donc :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
```

---

## 1.4. Découvrir l'entité Ville

Observons maintenant :

| id_auteur | nom_auteur | nom_ville |
| --------: | ---------- | --------- |
|         1 | Madani     | Tanger    |
|         2 | Sara       | Rabat     |
|         3 | Youssef    | Rabat     |
|         1 | Madani     | Tanger    |

Nous trouvons :

```text
Tanger
Tanger
Rabat
Rabat
```

Les valeurs sont répétées.

Nous cherchons ce qu'elles représentent :

```text
Tanger → une ville
Rabat → une ville
```

Nous avons donc :

```text
VILLE
```

Nous créons un identifiant :

```text
id_ville
```

Puis :

```text
id_ville → nom_ville
```

Nous obtenons :

```text
VILLE
-----
id_ville
nom_ville
```

---

## 1.5. Remplacer la valeur par son identifiant

Avant :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Après :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
```

Et :

```text
VILLE
-----
id_ville
nom_ville
```

Nous ne répétons donc plus :

```text
Tanger
Rabat
```

dans chaque auteur.

Nous conservons l'identifiant de la ville :

```text
id_ville
```

---

## 1.6. Découvrir l'entité Catégorie

Observons maintenant :

| id_article | nom_categorie |
| ---------: | ------------- |
|        101 | Développement |
|        102 | Développement |
|        103 | Actualité     |
|        104 | Développement |
|        105 | Actualité     |

Nous trouvons :

```text
Développement
Développement
Actualité
Développement
Actualité
```

Les valeurs sont répétées.

Nous recherchons la réalité :

```text
Développement → une catégorie
Actualité → une catégorie
```

Nous créons :

```text
id_categorie
```

Puis :

```text
id_categorie → nom_categorie
```

Nous obtenons :

```text
CATEGORIE
---------
id_categorie
nom_categorie
```

Dans `Article`, nous conservons :

```text
id_categorie
```

et non :

```text
nom_categorie
```

---

## 1.7. Le résultat final

Après plusieurs passages, nous obtenons plusieurs groupes cohérents.

### Article

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
id_auteur
id_categorie
```

### Auteur

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
```

### Ville

```text
VILLE
-----
id_ville
nom_ville
```

### Catégorie

```text
CATEGORIE
---------
id_categorie
nom_categorie
```

Nous avons donc découvert quatre entités :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

---

## 1.8. Vérifier une entité

Pour vérifier une entité, posez trois questions.

### Question 1

> Quel est son identifiant ?

Exemple :

```text
id_ville
```

### Question 2

> Quelles données dépendent de cet identifiant ?

Exemple :

```text
id_ville → nom_ville
```

### Question 3

> Ces données décrivent-elles la même réalité ?

Exemple :

```text
id_ville
nom_ville
```

décrivent :

```text
VILLE
```

Si les trois réponses sont cohérentes, le groupe peut correspondre à une entité.

---

## 1.9. Vérifier qu'une donnée doit être séparée

Lorsqu'une donnée semble devoir être séparée, utilisez cette méthode :

```text
Donnée répétée
      ↓
Même valeur présente plusieurs fois ?
      ↓
Oui
      ↓
Que représente cette valeur ?
      ↓
Une réalité indépendante ?
      ↓
Oui
      ↓
Créer un identifiant
      ↓
Rechercher les données dépendantes
      ↓
Créer la nouvelle entité
```

Exemple :

```text
nom_ville
   ↓
Tanger, Tanger, Rabat, Tanger
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

## 1.10. Ne pas confondre entité et attribut

Il est important de ne pas transformer chaque donnée en entité.

Par exemple :

```text
titre_article
```

est une donnée qui décrit un article.

Elle ne devient pas automatiquement :

```text
TITRE
```

De même :

```text
image_article
```

reste une donnée de l'article dans notre modèle.

Pour découvrir une entité, nous cherchons une **réalité indépendante que l'application doit pouvoir identifier et gérer**.

---

## 1.11. La méthode de construction

La méthode complète devient :

```text
1. Observer les données.

2. Retirer les données calculables.

3. Chercher les identifiants déjà présents.

4. Regrouper les données dépendantes.

5. Observer les valeurs répétées.

6. Chercher ce que représente une valeur répétée.

7. Décider si cette réalité doit être gérée séparément.

8. Créer un identifiant pour cette réalité.

9. Écrire les dépendances.

10. Remplacer la donnée répétée par l'identifiant.

11. Recommencer.

12. Vérifier les entités finales.
```

### À retenir

> Une entité n'est pas simplement un mot trouvé dans le dictionnaire.

> Une entité apparaît lorsqu'un ensemble de données permet d'identifier et de décrire une réalité cohérente.

---

# Partie 2 — Pratique

## 2.1. Étape 1 — Observer le dictionnaire

Reprenez les données :

```text
id_article
titre_article
contenu_article
date_publication
statut_article
image_article

id_auteur
nom_auteur
prenom_auteur
email_auteur

nom_ville
nom_categorie

duree_lecture
```

### Travail

Classez les données dans deux groupes :

| Donnée             | À conserver ? | Pourquoi ? |
| ------------------ | ------------- | ---------- |
| `id_article`       |               |            |
| `titre_article`    |               |            |
| `contenu_article`  |               |            |
| `date_publication` |               |            |
| `statut_article`   |               |            |
| `image_article`    |               |            |
| `id_auteur`        |               |            |
| `nom_auteur`       |               |            |
| `prenom_auteur`    |               |            |
| `email_auteur`     |               |            |
| `nom_ville`        |               |            |
| `nom_categorie`    |               |            |
| `duree_lecture`    |               |            |

---

## 2.2. Étape 2 — Construire le premier groupe

Commencez avec :

```text
id_article
```

Cherchez les données qui décrivent l'article.

Complétez :

```text
id_article →
    ______________________
    ______________________
    ______________________
    ______________________
    ______________________
```

Puis écrivez le nom de la réalité :

```text
Réalité : ______________________
```

---

## 2.3. Étape 3 — Observer les auteurs

Observez :

| id_auteur | nom_auteur | prenom_auteur | email_auteur                                |
| --------: | ---------- | ------------- | ------------------------------------------- |
|         1 | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   |
|         1 | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   |
|         2 | Sara       | Amrani        | [sara@mail.com](mailto:sara@mail.com)       |
|         1 | Madani     | Ali           | [madani@mail.com](mailto:madani@mail.com)   |
|         3 | Youssef    | Karim         | [youssef@mail.com](mailto:youssef@mail.com) |

### Questions

Quelle valeur de `id_auteur` est répétée ?

```text
____________________________
```

Quelles données restent identiques lorsque cette valeur est la même ?

```text
____________________________
____________________________
____________________________
```

Écrivez la dépendance :

```text
________________ → ______________________________
```

---

## 2.4. Étape 4 — Construire l'entité Auteur

Complétez :

```text
AUTEUR
------
________________
________________
________________
________________
```

Puis vérifiez :

```text
id_auteur →
    __________________
    __________________
    __________________
```

---

## 2.5. Étape 5 — Observer les villes

Observez :

| id_auteur | nom_auteur | nom_ville |
| --------: | ---------- | --------- |
|         1 | Madani     | Tanger    |
|         2 | Sara       | Rabat     |
|         3 | Youssef    | Rabat     |
|         1 | Madani     | Tanger    |

### Questions

Quelles valeurs sont répétées ?

```text
____________________________
```

Que représentent-elles ?

```text
____________________________
```

La réalité représentée peut-elle être gérée séparément ?

```text
____________________________
```

Quel identifiant proposez-vous ?

```text
____________________________
```

---

## 2.6. Étape 6 — Construire l'entité Ville

Complétez :

```text
VILLE
-----
________________
________________
```

Écrivez la dépendance :

```text
________________ → ________________
```

---

## 2.7. Étape 7 — Modifier l'entité Auteur

Avant :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

Après la découverte de `Ville` :

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
________________
```

Expliquez pourquoi `nom_ville` n'est plus conservé directement dans `Auteur`.

```text
____________________________________________________
____________________________________________________
```

---

## 2.8. Étape 8 — Observer les catégories

Observez :

| id_article | nom_categorie |
| ---------: | ------------- |
|        101 | Développement |
|        102 | Développement |
|        103 | Actualité     |
|        104 | Développement |
|        105 | Actualité     |

### Questions

Quelles valeurs sont répétées ?

```text
____________________________
```

Que représentent-elles ?

```text
____________________________
```

Quel nouvel identifiant proposez-vous ?

```text
____________________________
```

Écrivez la dépendance :

```text
________________ → ________________
```

---

## 2.9. Étape 9 — Construire l'entité Catégorie

Complétez :

```text
CATEGORIE
---------
________________
________________
```

Puis modifiez la partie `Article` :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
id_auteur
________________
```

---

## 2.10. Étape 10 — Vérifier les quatre entités

Vous devez maintenant obtenir :

### Entité 1

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
id_auteur
id_categorie
```

### Entité 2

```text
AUTEUR
------
id_auteur
nom_auteur
prenom_auteur
email_auteur
id_ville
```

### Entité 3

```text
VILLE
-----
id_ville
nom_ville
```

### Entité 4

```text
CATEGORIE
---------
id_categorie
nom_categorie
```

---

## 2.11. Étape 11 — Vérifier les répétitions

Utilisez cette checklist :

| Vérification                                                              | Oui / Non |
| ------------------------------------------------------------------------- | --------- |
| Une même ville est-elle enregistrée plusieurs fois dans `Ville` ?         |           |
| Une même catégorie est-elle enregistrée plusieurs fois dans `Categorie` ? |           |
| `nom_ville` est-il encore répété dans `Auteur` ?                          |           |
| `nom_categorie` est-il encore répété dans `Article` ?                     |           |
| Chaque entité possède-t-elle un identifiant ?                             |           |
| Les données décrivant une même réalité sont-elles regroupées ?            |           |

---

## 2.12. Étape 12 — Vérifier les dépendances

Complétez les principales dépendances :

```text
id_article →
    __________________________________________

id_auteur →
    __________________________________________

id_ville →
    __________________________________________

id_categorie →
    __________________________________________
```

Puis vérifiez que chaque dépendance correspond à l'entité concernée.

---

# Travail à faire

À partir du jeu complet de données fourni dans ce tutoriel, construisez les entités sans recopier directement le modèle final.

Votre démarche doit montrer les différentes étapes :

```text
Données
   ↓
Identifiants
   ↓
Données dépendantes
   ↓
Répétitions
   ↓
Réalités découvertes
   ↓
Nouveaux identifiants
   ↓
Dépendances
   ↓
Entités finales
```

Vous devez construire :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

Pour chaque entité, indiquez :

```text
Nom de l'entité
Identifiant
Attributs
Dépendances fonctionnelles principales
```

Vous devez également expliquer au moins une séparation :

```text
nom_ville → id_ville
```

ou :

```text
nom_categorie → id_categorie
```

en expliquant pourquoi la donnée répétée a été remplacée par un identifiant.

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant votre travail.

Nom conseillé :

```text
entites-blog.md
```

Le document doit contenir :

```text
1. Analyse des données

2. Données calculables

3. Identifiants trouvés

4. Dépendances fonctionnelles

5. Répétitions observées

6. Réalités découvertes

7. Entités finales

8. Explication des séparations
```

## Résultat attendu

Le résultat final doit contenir des groupes de données cohérents.

Exemple de présentation :

```text
ARTICLE
-------
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
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

```text
CATEGORIE
---------
id_categorie
nom_categorie
```

Les valeurs de `nom_ville` et `nom_categorie` ne doivent plus être répétées dans les autres entités.

## Critère de réussite

Le travail est réussi si :

* les données calculables sont correctement identifiées ;
* `id_article` est utilisé comme identifiant de l'article ;
* `id_auteur` permet d'identifier les auteurs ;
* les répétitions de `nom_ville` sont correctement observées ;
* `Ville` est correctement découverte ;
* `id_ville → nom_ville` est correctement formulée ;
* `nom_ville` est remplacé par `id_ville` dans `Auteur` ;
* les répétitions de `nom_categorie` sont correctement observées ;
* `Categorie` est correctement découverte ;
* `id_categorie → nom_categorie` est correctement formulée ;
* `nom_categorie` est remplacé par `id_categorie` dans `Article` ;
* chaque entité possède un identifiant ;
* les données d'une même réalité sont regroupées ;
* aucune relation ni cardinalité n'est construite ;
* aucun MCD n'est encore produit.

---

## Bilan

### Vous avez appris

Vous savez maintenant appliquer une méthode complète pour découvrir les entités.

Vous savez :

* rechercher un identifiant ;
* regrouper les données qui dépendent de cet identifiant ;
* observer les répétitions ;
* rechercher la réalité représentée par une répétition ;
* créer un nouvel identifiant ;
* établir une dépendance fonctionnelle simple ;
* séparer une réalité indépendante ;
* remplacer une valeur répétée par son identifiant ;
* vérifier les entités obtenues.

### Vous avez réalisé

Vous êtes parti de :

```text
Dictionnaire
+
Occurrences
```

pour construire :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

La progression est :

```text
Données
   ↓
Observation
   ↓
Répétitions
   ↓
Réalités
   ↓
Identifiants
   ↓
Dépendances
   ↓
Entités
```

Vous êtes maintenant prêt à étudier **comment ces entités sont liées entre elles**.

---

## Glossaire

* **Entité** : réalité que l'application peut identifier et gérer.
* **Identifiant** : donnée qui permet de reconnaître une seule occurrence d'une entité.
* **Attribut** : donnée qui décrit une entité.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée permet de déterminer une autre donnée.
* **Réalité** : chose représentée par un groupe de données.
* **Répétition** : même valeur présente plusieurs fois.
* **Donnée calculable** : donnée qui peut être obtenue à partir d'autres données.
* **Séparation** : organisation d'une réalité indépendante dans son propre groupe de données.
