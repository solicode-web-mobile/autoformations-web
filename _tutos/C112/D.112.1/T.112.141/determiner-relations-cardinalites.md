---
title: "Déterminer les relations et les cardinalités"
layout: tuto
slug: "determiner-relations-cardinalites"
permalink: /tutos/:slug/
tuto_id: "T.112.141"
type: "classique"
version: "normal"
ua: "UA.112.14"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

À partir des entités et des informations fournies par les maquettes, déterminer comment les réalités sont liées.

Vous allez apprendre à :

* formuler une règle de gestion ;
* identifier une relation entre deux entités ;
* déterminer le minimum ;
* déterminer le maximum ;
* écrire les cardinalités ;
* distinguer les relations 1–1, 1–N et N–N.

## 2. Prérequis

* Savoir construire les entités du Blog (T.112.133).
* Savoir distinguer une réalité, une entité, un attribut et un identifiant.
* Savoir identifier les données qui décrivent une même réalité.

## Données de départ

Les entités du Blog construites dans T.112.133 sont :

```text
ARTICLE
AUTEUR
VILLE
CATEGORIE
```

Les maquettes du Blog permettent d'observer les informations sur les liens entre ces réalités.

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Pour déterminer une relation, on utilise une information qui décrit un lien entre deux réalités.

Exemple :

```text
Un article est rédigé par un auteur.
```

Cette phrase permet de rechercher une relation entre :

```text
ARTICLE
AUTEUR
```

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une règle de gestion ?

Une **règle de gestion** est une phrase qui décrit une règle du domaine.

Elle permet de comprendre comment deux réalités sont liées.

Elle utilise généralement un **verbe métier**.

**Exemples :**

```text
Un article est rédigé par un auteur.

Un auteur habite dans une ville.

Un article appartient à une catégorie.
```

Une règle de gestion sert de base pour déterminer une relation et ses cardinalités.

### 1.2. Qu'est-ce qu'une relation ?

Une **relation** représente un lien entre deux entités.

Elle correspond à une action ou à un lien exprimé par un verbe métier.

Exemple :

```text
AUTEUR ─── habite ─── VILLE
```

Autre exemple :

```text
AUTEUR ─── rédige ─── ARTICLE
```

### 1.3. Qu'est-ce qu'une cardinalité ?

Une **cardinalité** indique combien de fois une occurrence d'une entité peut être liée à une occurrence de l'autre entité.

Elle possède deux valeurs :

```text
minimum, maximum
```

Exemples :

| Cardinalité | Signification     |
| ----------- | ----------------- |
| `0,1`       | zéro ou une       |
| `1,1`       | exactement une    |
| `0,N`       | zéro ou plusieurs |
| `1,N`       | une ou plusieurs  |

### 1.4. Déterminer le maximum

Pour déterminer le maximum, posez une question simple :

> Une occurrence peut-elle être liée à une seule occurrence ou à plusieurs ?

Exemple :

> Un article est rédigé par combien d'auteurs ?

Réponse :

```text
un seul
```

Le maximum est donc :

```text
1
```

Autre question :

> Un auteur peut rédiger combien d'articles ?

Réponse :

```text
plusieurs
```

Le maximum est donc :

```text
N
```

### 1.5. Déterminer le minimum

Pour déterminer le minimum, posez une deuxième question :

> Une occurrence doit-elle obligatoirement avoir ce lien ?

Exemple :

> Un article doit-il être associé à un auteur ?

Si la règle impose qu'un article possède un auteur :

```text
minimum = 1
```

Si le lien est facultatif :

```text
minimum = 0
```

Il faut donc déterminer séparément :

```text
minimum
+
maximum
```

### 1.6. Exemple : AUTEUR et ARTICLE

Supposons les règles :

```text
Un article est rédigé par un seul auteur.

Un auteur peut rédiger plusieurs articles.
```

Pour `ARTICLE` :

> Un article est rédigé par combien d'auteurs ?

```text
1
```

Le minimum et le maximum sont :

```text
1,1
```

Pour `AUTEUR` :

> Un auteur peut rédiger combien d'articles ?

```text
plusieurs
```

Et un auteur peut ne pas encore avoir d'article.

On obtient :

```text
0,N
```

La relation est donc :

```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

### 1.7. Les principaux types de relations

#### Relation 1–1

Chaque occurrence de A est liée à une seule occurrence de B.

Exemple :

```text
PERSONNE (1,1) ─── possède ─── (1,1) PASSEPORT
```

#### Relation 1–N

Une occurrence de A peut être liée à plusieurs occurrences de B.

Exemple :

```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

#### Relation N–N

Une occurrence de A peut être liée à plusieurs occurrences de B, et une occurrence de B peut être liée à plusieurs occurrences de A.

Exemple :

```text
ARTICLE (0,N) ─── utilise ─── (0,N) TAG
```

Dans cet exemple, `TAG` est utilisé uniquement comme **exemple pédagogique** d'une relation N–N.

Il ne fait pas partie des entités du Blog construites dans T.112.133.

### 1.8. La méthode pour déterminer les cardinalités

Pour chaque relation :

**Étape 1**

Formulez la règle de gestion.

**Étape 2**

Posez la question dans un sens :

> Un A peut être lié à combien de B ?

Déterminez le minimum et le maximum.

**Étape 3**

Posez la question dans l'autre sens :

> Un B peut être lié à combien de A ?

Déterminez également le minimum et le maximum.

**Étape 4**

Écrivez la relation complète.

### 1.9. À retenir

* Une règle de gestion décrit un lien entre deux réalités.
* Une relation représente ce lien entre deux entités.
* Une cardinalité possède un minimum et un maximum.
* Le maximum indique : `1` ou `N`.
* Le minimum indique : `0` ou `1`.
* Les deux côtés de la relation doivent être analysés séparément.
* Une relation peut être 1–1, 1–N ou N–N.

---

## Partie 2 — Pratique

### 2.1. Déterminer la relation AUTEUR — VILLE

Observez les informations du Blog.

La règle de gestion est :

```text
Un auteur habite dans une ville.

Une ville peut être le lieu d'habitation de plusieurs auteurs.
```

#### Étape 1 — Analyser le côté AUTEUR

Question :

> Un auteur habite dans combien de villes ?

Dans cet exercice :

```text
une seule
```

Donc :

```text
maximum = 1
```

Le lien est obligatoire :

```text
minimum = 1
```

Cardinalité :

```text
(1,1)
```

#### Étape 2 — Analyser le côté VILLE

Question :

> Une ville peut être associée à combien d'auteurs ?

Réponse :

```text
plusieurs
```

Le maximum est donc :

```text
N
```

Le lien peut être absent pour une ville du référentiel :

```text
minimum = 0
```

Cardinalité :

```text
(0,N)
```

#### Résultat

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR
```

### 2.2. Déterminer la relation AUTEUR — ARTICLE

Utilisez les règles suivantes :

```text
Un article est rédigé par un seul auteur.

Un auteur peut rédiger plusieurs articles.
```

#### Étape 1 — Analyser ARTICLE

Question :

> Un article est rédigé par combien d'auteurs ?

```text
1
```

Cardinalité :

```text
(1,1)
```

#### Étape 2 — Analyser AUTEUR

Question :

> Un auteur peut rédiger combien d'articles ?

```text
plusieurs
```

Un auteur peut aussi ne pas avoir encore d'article.

Cardinalité :

```text
(0,N)
```

#### Résultat

```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```

### 2.3. Déterminer la relation CATEGORIE — ARTICLE

Utilisez les règles :

```text
Un article appartient à une seule catégorie.

Une catégorie peut regrouper plusieurs articles.
```

Posez les deux questions :

> Un article appartient à combien de catégories ?

> Une catégorie peut regrouper combien d'articles ?

Déterminez ensuite :

```text
ARTICLE : ?
CATEGORIE : ?
```

Puis écrivez la relation complète.

### 2.4. Observer une relation N–N

Considérez cet exemple :

```text
Un article peut utiliser plusieurs tags.

Un tag peut être utilisé par plusieurs articles.
```

Posez les deux questions :

> Un article peut utiliser combien de tags ?

> Un tag peut être utilisé par combien d'articles ?

Vous devez obtenir une relation de type :

```text
ARTICLE (0,N) ─── utilise ─── (0,N) TAG
```

Cet exemple sert uniquement à comprendre la relation **N–N**.

### 2.5. Travail à faire

Pour chacune des relations suivantes :

1. **ARTICLE — CATEGORIE**
2. **AUTEUR — ARTICLE**
3. **ARTICLE — TAG**

Faites le travail suivant :

* formulez la règle de gestion ;
* posez la question dans le premier sens ;
* déterminez le minimum et le maximum ;
* posez la question dans le second sens ;
* déterminez le minimum et le maximum ;
* écrivez la relation complète.

Présentez votre travail sous la forme :

| Relation | Règle de gestion | Cardinalité côté A | Cardinalité côté B |
| -------- | ---------------- | ------------------ | ------------------ |
| ...      | ...              | ...                | ...                |

**Livrable :**

```text
relations-cardinalites.md
```

Le document doit contenir les relations, leurs règles de gestion et leurs cardinalités.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.141/' | relative_url }}"
    height="550"
    title="Résultat attendu — Relations et cardinalités">
</iframe>

**Critère de réussite :**

Pour chaque relation :

* le verbe métier est clairement formulé ;
* les deux côtés de la relation sont analysés ;
* le minimum est justifié ;
* le maximum est correctement déterminé ;
* la cardinalité complète est correctement écrite ;
* les relations 1–1, 1–N et N–N sont correctement distinguées.

## Bilan

**Vous avez réalisé :**

La détermination des relations et des cardinalités à partir des règles de gestion.

**Vous savez maintenant :**

* formuler une règle de gestion ;
* identifier une relation entre deux entités ;
* déterminer le minimum d'une cardinalité ;
* déterminer le maximum d'une cardinalité ;
* distinguer les relations 1–1, 1–N et N–N.

Dans le prochain tutoriel, vous allez rassembler les entités, les relations et les cardinalités pour construire le **MCD complet**.

## Glossaire

* **Règle de gestion** : phrase qui décrit une règle du domaine entre plusieurs réalités.
* **Relation** : lien entre deux entités.
* **Verbe métier** : verbe qui décrit le lien entre deux réalités.
* **Cardinalité** : minimum et maximum de liens possibles entre deux entités.
* **Minimum** : nombre minimal de liens possibles : `0` ou `1`.
* **Maximum** : nombre maximal de liens possibles : `1` ou `N`.
* **Relation 1–1** : chaque occurrence est liée à au plus une occurrence de l'autre entité.
* **Relation 1–N** : une occurrence peut être liée à plusieurs occurrences de l'autre entité.
* **Relation N–N** : les deux entités peuvent être liées à plusieurs occurrences.
