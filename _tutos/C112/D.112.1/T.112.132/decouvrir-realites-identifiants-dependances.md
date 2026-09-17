---
title: "Découvrir les réalités, les identifiants et les dépendances"
layout: tuto
slug: "decouvrir-realites-identifiants-dependances"
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

Analyser plusieurs occurrences pour comprendre ce que les données représentent réellement.

Vous allez apprendre à :

* reconnaître une réalité décrite par plusieurs données ;
* rechercher un identifiant ;
* distinguer un identifiant d'un simple attribut ;
* observer quelles données dépendent d'un identifiant ;
* exprimer une dépendance fonctionnelle simple.

## 2. Prérequis

* Savoir identifier et décrire une donnée (T.112.121).
* Savoir construire un dictionnaire de données (T.112.122).
* Savoir observer des occurrences et repérer les répétitions (T.112.131).

## Données de départ

Ce tutoriel utilise le dictionnaire de données et plusieurs occurrences du Blog.

Observez les données suivantes :

| `nom_auteur` | `email_auteur`                              | `nom_ville` |
| ------------ | ------------------------------------------- | ----------- |
| Madani       | [madani@mail.com](mailto:madani@mail.com)   | Tanger      |
| Sara         | [sara@mail.com](mailto:sara@mail.com)       | Tanger      |
| Youssef      | [youssef@mail.com](mailto:youssef@mail.com) | Rabat       |
| Amine        | [amine@mail.com](mailto:amine@mail.com)     | Tanger      |

Ces données ont déjà été observées dans le tutoriel précédent.

Dans ce tutoriel, on cherche maintenant à comprendre :

```text
Que représentent réellement ces données ?
```

---

## Partie 1 — Théorie

### 1.1. Observer ce que les données représentent

Une donnée décrit une information sur une réalité.

Exemple :

```text
nom_auteur
email_auteur
```

Ces deux données décrivent la même réalité :

```text
AUTEUR
```

La donnée :

```text
nom_ville
```

décrit une autre réalité :

```text
VILLE
```

On passe donc de :

```text
données
   ↓
ce qu'elles décrivent
   ↓
réalités
```

### 1.2. Qu'est-ce qu'une réalité ?

Une **réalité** est une chose que les données permettent de décrire dans l'application.

Exemples :

```text
AUTEUR
VILLE
ARTICLE
CATEGORIE
```

Plusieurs données peuvent décrire une même réalité.

Exemple :

```text
AUTEUR

nom_auteur
email_auteur
```

À ce stade, on cherche surtout à répondre à la question :

> Qu'est-ce que ces données décrivent ?

### 1.3. Rechercher un identifiant

Un **identifiant** permet de distinguer une occurrence d'une autre.

Pour rechercher un identifiant, on vérifie si une donnée possède une valeur permettant de distinguer les occurrences.

Exemple :

| `nom_auteur` | `email_auteur`                              |
| ------------ | ------------------------------------------- |
| Madani       | [madani@mail.com](mailto:madani@mail.com)   |
| Sara         | [sara@mail.com](mailto:sara@mail.com)       |
| Youssef      | [youssef@mail.com](mailto:youssef@mail.com) |
| Amine        | [amine@mail.com](mailto:amine@mail.com)     |

Dans cet exemple, les emails sont tous différents.

On peut donc considérer :

```text
email_auteur
```

comme un **identifiant possible** des auteurs.

Mais cette conclusion doit être basée sur l'observation des données.

On ne considère pas automatiquement qu'un email est toujours un identifiant.

### 1.4. Identifiant existant et identifiant à créer

Un **identifiant existant** est déjà présent dans les données.

Exemple :

```text
email_auteur
```

peut être utilisé comme identifiant si les valeurs sont uniques.

Un **identifiant à créer** est ajouté lorsque les données disponibles ne permettent pas d'identifier simplement les occurrences.

Exemple :

```text
id_auteur
```

Dans ce cas :

```text
id_auteur
```

sert à distinguer les auteurs.

### 1.5. Attribut et identifiant

Un **attribut** décrit une réalité.

Un **identifiant** permet de distinguer ses occurrences.

Exemple :

```text
AUTEUR

identifiant :
email_auteur

attribut :
nom_auteur
```

L'identifiant et les autres données ont donc des rôles différents.

### 1.6. Dépendance entre les données

Une donnée peut déterminer une autre donnée.

Exemple :

```text
email_auteur → nom_auteur
```

Cela signifie :

> Pour un email donné, on connaît le nom de l'auteur correspondant.

L'email est alors une donnée **déterminante**.

Le nom est une donnée **dépendante**.

### 1.7. Dépendance fonctionnelle simple

Une **dépendance fonctionnelle** s'écrit :

```text
X → Y
```

Elle signifie :

> La valeur de X détermine une seule valeur de Y.

Exemple :

```text
email_auteur → nom_auteur
```

Si l'email permet d'identifier un auteur, il détermine son nom.

### 1.8. Une réalité peut avoir plusieurs identifiants possibles

Une réalité peut parfois être identifiée par plusieurs données.

Exemple :

```text
AUTEUR

email_auteur
id_auteur
```

`email_auteur` peut être un identifiant existant si les valeurs sont uniques.

`id_auteur` peut être un identifiant créé.

À ce stade, l'objectif est de **repérer les possibilités**, pas encore de choisir toute la structure finale du modèle.

### 1.9. À retenir

* Plusieurs données peuvent décrire une même réalité.
* Une réalité peut être identifiée à partir des données observées.
* Un identifiant permet de distinguer les occurrences.
* Un identifiant peut déjà exister ou être ajouté.
* Une donnée peut en déterminer une autre.
* Une dépendance fonctionnelle s'écrit `X → Y`.
* La construction complète des entités sera réalisée dans le tutoriel suivant.

---

## Partie 2 — Pratique

### 2.1. Observer les données

Reprenez le tableau :

| `nom_auteur` | `email_auteur`                              | `nom_ville` |
| ------------ | ------------------------------------------- | ----------- |
| Madani       | [madani@mail.com](mailto:madani@mail.com)   | Tanger      |
| Sara         | [sara@mail.com](mailto:sara@mail.com)       | Tanger      |
| Youssef      | [youssef@mail.com](mailto:youssef@mail.com) | Rabat       |
| Amine        | [amine@mail.com](mailto:amine@mail.com)     | Tanger      |

### Étape 1 — Chercher ce que décrivent les données

Pour chaque donnée, posez-vous la question :

> Qu'est-ce que cette donnée décrit ?

Complétez :

| Donnée         | Réalité décrite |
| -------------- | --------------- |
| `nom_auteur`   | Auteur          |
| `email_auteur` | Auteur          |
| `nom_ville`    | Ville           |

On observe donc deux réalités :

```text
AUTEUR
VILLE
```

### Étape 2 — Chercher un identifiant possible

Observez les valeurs de :

```text
nom_auteur
```

Puis :

```text
email_auteur
```

Posez-vous la question :

> Quelle donnée permet de distinguer les auteurs ?

Dans cet exemple :

```text
Madani
Sara
Youssef
Amine
```

sont tous différents.

Les emails sont également tous différents :

```text
madani@mail.com
sara@mail.com
youssef@mail.com
amine@mail.com
```

On peut donc retenir :

```text
email_auteur
```

comme identifiant existant possible.

### Étape 3 — Chercher les données dépendantes

Une fois l'identifiant trouvé, recherchez les données qu'il détermine.

Exemple :

```text
email_auteur → nom_auteur
```

On peut aussi avoir :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

si un identifiant `id_auteur` est ajouté.

### Étape 4 — Observer la ville

Observez :

```text
nom_ville

Tanger
Tanger
Rabat
Tanger
```

Plusieurs auteurs peuvent avoir la même ville.

La répétition observée dans T.112.131 permet maintenant de poser une nouvelle question :

> Ces valeurs décrivent-elles la même réalité que l'auteur ?

La réponse est non.

```text
AUTEUR
   ≠
VILLE
```

On découvre donc une seconde réalité.

### Étape 5 — Exprimer les dépendances

Pour l'auteur, exprimez les dépendances observées :

```text
email_auteur → nom_auteur
```

Pour la ville, si un identifiant `id_ville` est ajouté :

```text
id_ville → nom_ville
```

### 2.2. Travail à faire

Analysez les données suivantes :

```text
titre_article
contenu_article
date_publication
nom_auteur
email_auteur
nom_categorie
```

Utilisez plusieurs occurrences du Blog pour rechercher :

1. ce que chaque groupe de données décrit ;
2. les réalités différentes ;
3. un identifiant possible pour chaque réalité ;
4. les données qui dépendent de cet identifiant ;
5. les dépendances fonctionnelles simples.

Présentez votre analyse sous une forme simple :

| Réalité | Données observées | Identifiant possible | Données dépendantes |
| ------- | ----------------- | -------------------- | ------------------- |
| ...     | ...               | ...                  | ...                 |

Puis écrivez les dépendances sous la forme :

```text
X → Y
```

**Livrable :**

Une fiche d'analyse présentant :

* les réalités découvertes ;
* les identifiants possibles ;
* les données dépendantes ;
* les dépendances fonctionnelles observées.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.132/' | relative_url }}"
    height="600"
    title="Résultat attendu — Réalités, identifiants et dépendances">
</iframe>

**Critère de réussite :**

L'analyse :

* distingue correctement les différentes réalités ;
* propose des identifiants justifiés par les données ;
* distingue identifiant et attribut ;
* exprime correctement les dépendances fonctionnelles simples ;
* ne construit pas encore le MCD.

## Bilan

**Vous avez réalisé :**

L'analyse des données pour découvrir les réalités qu'elles représentent, rechercher des identifiants et exprimer des dépendances fonctionnelles.

**Vous savez maintenant :**

* regrouper des données selon la réalité qu'elles décrivent ;
* rechercher un identifiant à partir des occurrences ;
* distinguer un identifiant d'un attribut ;
* reconnaître une donnée déterminante et une donnée dépendante ;
* écrire une dépendance fonctionnelle simple.

Dans le prochain tutoriel, vous utiliserez cette analyse pour **construire les entités**.

## Glossaire

* **Réalité** : élément du domaine que les données permettent de décrire.
* **Entité** : représentation d'une réalité dans un modèle de données.
* **Attribut** : donnée qui décrit une réalité.
* **Identifiant** : donnée qui permet de distinguer les occurrences d'une réalité.
* **Identifiant existant** : identifiant déjà présent dans les données.
* **Identifiant à créer** : identifiant ajouté pour distinguer les occurrences.
* **Donnée déterminante** : donnée qui permet de déterminer une autre donnée.
* **Donnée dépendante** : donnée déterminée par une autre donnée.
* **Dépendance fonctionnelle** : relation `X → Y` indiquant que X détermine Y.
