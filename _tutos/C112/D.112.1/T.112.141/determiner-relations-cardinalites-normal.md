---
title: "Déterminer les relations et les cardinalités"
layout: tuto
slug: "determiner-relations-cardinalites"
permalink: /tutos/:slug/normal
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

À partir des entités que vous avez isolées et des informations fournies par les maquettes, l'objectif est de déterminer comment toutes ces réalités sont liées entre elles.

Vous allez apprendre à :
* formuler une règle de gestion ;
* identifier une relation entre deux entités ;
* déterminer le minimum et le maximum d'une cardinalité ;
* écrire les cardinalités ;
* distinguer les relations 1–1, 1–N et N–N.

## 2. Prérequis

* Avoir suivi le tutoriel sur la construction des entités (T.112.133).
* Savoir distinguer une réalité, une entité, un attribut et un identifiant.

## Données de départ

Vos entités de base (réalisées précédemment) : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.

En observant attentivement les [maquettes du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html), on peut déduire les liens.
Exemple d'information déduite de la maquette : *Un article est rédigé par un auteur.*

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une règle de gestion ?

Une **règle de gestion** est une phrase métier qui décrit concrètement une règle de l'application. Elle permet de comprendre comment deux réalités sont connectées.
Elle utilise presque toujours un **verbe métier**.
*Exemple : Un auteur habite dans une ville.*

### 1.2. Qu'est-ce qu'une relation ?

Une **relation** (ou association) représente le lien modélisé entre deux entités. Elle correspond souvent au verbe métier trouvé dans la règle de gestion.
*Exemple :* `AUTEUR ─── habite ─── VILLE`

### 1.3. Qu'est-ce qu'une cardinalité ?

Une **cardinalité** indique combien de fois au minimum et au maximum une occurrence d'une entité peut être liée à une occurrence de l'autre entité.
Elle s'écrit toujours sous la forme de deux valeurs : `(minimum, maximum)`.
Les valeurs que vous rencontrerez le plus souvent sont : `0,1`, `1,1`, `0,N`, `1,N`.

### 1.4. Déterminer le maximum

Pour trouver le maximum d'un côté de la relation, posez-vous une question simple :
*Une occurrence de mon entité peut-elle être liée à une seule ou à plusieurs occurrences en face ?*
* Si la réponse est "une seule", le maximum est `1`.
* Si la réponse est "plusieurs", le maximum est `N`.

### 1.5. Déterminer le minimum

Pour trouver le minimum, posez-vous une seconde question :
*Ce lien est-il obligatoire pour mon entité ?*
* Si le lien est obligatoire, le minimum est `1`.
* Si le lien est facultatif, le minimum est `0`.

### 1.6. Exemple : AUTEUR et ARTICLE

* Règle de gestion : *Un article est rédigé par un seul auteur (donc 1,1 côté Article). En revanche, un auteur peut rédiger zéro, un ou plusieurs articles (donc 0,N côté Auteur).*
* Résultat modélisé : `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`

### 1.7. Les principaux types de relations

* **Relation 1–1** : Chaque occurrence de l'entité A est liée à une seule occurrence de l'entité B, et inversement.
* **Relation 1–N** : Une occurrence de A peut être liée à plusieurs occurrences de B, mais une occurrence de B est liée à une seule occurrence de A. (C'est le cas le plus fréquent).
* **Relation N–N** : Les occurrences de A peuvent être liées à plusieurs occurrences de B, et inversement.

### 1.8. La méthode

Pour trouver vos cardinalités sans vous tromper :
1. Formulez la règle de gestion avec une phrase claire.
2. Posez les questions "obligatoire ?" (min) et "plusieurs ?" (max) dans le sens A vers B.
3. Posez les mêmes questions dans le sens B vers A.
4. Écrivez la relation complète avec les cardinalités des deux côtés.

### 1.9. À retenir

* **Règle de gestion** = description textuelle du lien.
* **Relation** = trait qui relie les entités sur le schéma.
* **Cardinalité** = les chiffres `(min, max)` posés sur le trait.
* Le **Minimum** vaut toujours 0 ou 1. Le **Maximum** vaut toujours 1 ou N.

---

## Partie 2 — Pratique

### 2.1. Déterminer la relation AUTEUR — VILLE

* **Règle** : Un auteur habite dans 1 seule ville. Une ville accueille 0 ou plusieurs auteurs.
* **Côté AUTEUR** : Un auteur habite dans combien de villes ? -> Une seule (max=1). Est-ce obligatoire ? -> Oui (min=1). Cardinalité = **(1,1)**
* **Côté VILLE** : Une ville accueille combien d'auteurs ? -> Plusieurs (max=N). Est-ce obligatoire ? -> Non, on peut avoir une ville sans auteur inscrit (min=0). Cardinalité = **(0,N)**
* **Résultat** : `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`

### 2.2. Déterminer la relation AUTEUR — ARTICLE

* **Règle** : Un article est rédigé par 1 seul auteur. Un auteur rédige 0 ou plusieurs articles.
* **Côté ARTICLE** : Un article est rédigé par combien d'auteurs ? -> Un seul (max=1). Est-ce obligatoire ? -> Oui (min=1). Cardinalité = **(1,1)**
* **Côté AUTEUR** : Un auteur rédige combien d'articles ? -> Plusieurs (max=N). Est-ce obligatoire ? -> Non, un auteur inscrit n'a peut-être encore rien rédigé (min=0). Cardinalité = **(0,N)**
* **Résultat** : `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`

### 2.3. Déterminer la relation CATEGORIE — ARTICLE

* **Règle de gestion** : Un article appartient à 1 seule catégorie. Une catégorie regroupe 0 ou plusieurs articles.
* **Exercice** : Appliquez la même méthode pour déduire les cardinalités des deux côtés.

### 2.4. Observer une relation N–N (Exemple: ARTICLE — TAG)

* **Règle** : Un article peut utiliser plusieurs tags (ex: #php, #web). Un tag peut être utilisé par plusieurs articles.
* Ce cas particulier donnera toujours le résultat suivant des deux côtés :
* **Résultat** : `ARTICLE (0,N) ─── utilise ─── (0,N) TAG`
*(Note : l'entité TAG est donnée ici uniquement à titre d'exemple pédagogique).*

### 2.5. Travail à faire

Déterminez formellement les règles de gestion et les cardinalités pour ces 3 relations :
1. **ARTICLE — CATEGORIE**
2. **AUTEUR — ARTICLE**
3. **ARTICLE — TAG**

Présentez le résultat sous la forme d'un tableau clair :

| Relation | Règle de gestion | Cardinalité côté A | Cardinalité côté B |
| -------- | ---------------- | ------------------ | ------------------ |
| ...      | ...              | ...                | ...                |

## Livrable

Créez un document **Markdown** contenant votre tableau.
Nom conseillé : `relations-cardinalites.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.141/relations-cardinalites.html' | relative_url }}"
    height="320"
    title="Résultat attendu — Relations et cardinalités">
</iframe>

## Critères de réussite

Pour chaque relation :
* Le verbe métier est clairement identifié.
* Le minimum et le maximum sont justifiés et corrects.
* Les types de relations (1-N, N-N) sont bien respectés.

---

## Bilan

### Vous avez appris :
* À formuler une règle de gestion métier.
* À déduire logiquement et à écrire les cardinalités (min, max).
* À identifier la différence entre des relations 1-1, 1-N et N-N.

Dans le prochain tutoriel, vous assemblerez enfin tous ces concepts pour dessiner votre premier Modèle Conceptuel de Données (MCD) complet !

## Glossaire

* **Règle de gestion** : phrase décrivant un lien métier entre deux entités.
* **Relation** : représentation de ce lien sur le schéma.
* **Cardinalité** : nombre de participations minimum et maximum à une relation.
