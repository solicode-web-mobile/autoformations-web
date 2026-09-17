---
title: "Construire les entités à partir des données"
layout: tuto
slug: "construire-entites-donnees"
permalink: /tutos/:slug/normal
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

Dans ce tutoriel, vous allez apprendre à **construire des entités complètes**. L'objectif est de regrouper intelligemment vos données et d'isoler les répétitions pour préparer votre base de données.

Vous allez apprendre à :
* regrouper les données autour de leur identifiant ;
* créer de nouvelles entités à partir des répétitions ;
* remplacer les données répétées par des identifiants techniques ;
* vérifier la cohérence d'une entité finale.

## 2. Prérequis

* Découvrir une entité à partir d'un identifiant ou d'une répétition (T.112.132).

## Données de départ

Voici un extrait du dictionnaire de données d'un Blog, que nous utiliserons comme **exemple** pour illustrer la partie théorique :

| Donnée                  | Description                      |
| ----------------------- | -------------------------------- |
| `id_article`            | Identifiant d'un article         |
| `titre_article`         | Titre de l'article               |
| `contenu_article`       | Contenu de l'article             |
| `date_publication`      | Date de publication              |
| `statut_article`        | Statut de l'article              |
| `image_article`         | Image associée à l'article       |
| `id_auteur`             | Identifiant d'un auteur          |
| `nom_auteur`            | Nom de l'auteur                  |
| `prenom_auteur`         | Prénom de l'auteur               |
| `email_auteur`          | Email de l'auteur                |
| `nom_ville`             | Nom de la ville de l'auteur      |
| `nom_categorie`         | Nom de la catégorie de l'article |
| `description_categorie` | Description de la catégorie      |

*Note : La donnée `duree_lecture` a été exclue de cet exemple car c'est une donnée calculable.*

---

## Partie 1 — Théorie

### 1.1. Regrouper les données autour d'un identifiant

Une entité se construit en regroupant toutes les données qui dépendent fonctionnellement d'un même identifiant.
Par exemple, dans notre tableau, `titre_article`, `contenu_article` et `date_publication` dépendent directement de `id_article`. En les regroupant, elles forment l'entité **Article**.

### 1.2. Remplacer les répétitions par des identifiants

Si des données engendrent des répétitions (ex: `nom_ville` pour un auteur, `nom_categorie` et `description_categorie` pour un article), cela signifie qu'elles représentent une autre réalité. Il faut isoler cette réalité dans une nouvelle entité.
Dans l'entité d'origine, on remplace alors toutes les données textuelles liées à cette répétition par l'identifiant de la nouvelle entité. Par exemple, `nom_categorie` et `description_categorie` sont supprimés de l'Article et remplacés par un unique `id_categorie`.

### 1.3. La méthode de construction

Pour construire vos entités, appliquez toujours ces étapes :
1. **Observer** : Prenez votre dictionnaire de données global.
2. **Identifier** : Repérez les identifiants naturels ou techniques évidents (ex: `id_article`, `id_auteur`).
3. **Regrouper** : Associez chaque donnée à l'identifiant dont elle dépend directement.
4. **Isoler les répétitions** : Repérez les données textuelles qui représentent une autre réalité et provoquent des doublons.
5. **Créer et Remplacer** : Créez ces nouvelles entités avec leur propre ID. Remplacez ensuite l'ancienne donnée texte par ce nouvel ID dans l'entité d'origine.

### 1.4. Vérifier une entité

Une entité est considérée comme valide si elle respecte ces deux règles :
1. **Unicité :** Elle possède un et un seul identifiant qui détermine toutes les autres données.
2. **Aucune répétition anormale :** Aucune donnée textuelle représentant une autre réalité ne s'y répète.

### 1.5. Pour aller plus loin : les identifiants composés

*Remarque : Dans certains cas complexes (comme une ligne de commande ou une facture), une entité peut avoir besoin de la combinaison de **DEUX** identifiants (ex: `id_commande` + `id_produit`) pour être unique. C'est ce qu'on appelle un **identifiant composé**, une notion que vous découvrirez dans le tutoriel suivant.*

---

## Partie 2 — Pratique

### Exercice

À partir du dictionnaire de données **complet** de votre Blog (réalisé lors du tutoriel T.112.123), appliquez la méthode de construction pour extraire l'ensemble des entités finales du projet.

**Travail à faire :**
1. Passez en revue votre dictionnaire et regroupez toutes les données autour de leurs identifiants principaux.
2. Cherchez toutes les données susceptibles de provoquer des répétitions et qui cachent d'autres réalités.
3. Créez les nouvelles entités nécessaires et inventez-leur un identifiant technique.
4. Remplacez ces données par les nouveaux identifiants (clés étrangères) dans les entités d'origine.
5. Dressez la liste complète et définitive de **toutes** les entités de l'application Blog.

Présentez vos entités finales sous ce format :

```text
NOM_DE_L_ENTITÉ
---------------
identifiant
donnée_1
donnée_2
...
```

*(Consigne : Ne tracez pas encore les traits de relation ou les cardinalités. Contentez-vous de lister proprement les entités et leur contenu final).*

## Livrable

Créez un document **Markdown** ou un **Google Doc** contenant la liste claire de vos entités finalisées.
Nom conseillé : `entites-blog.md`

## Résultat attendu

Vous devez obtenir la liste **complète** des entités nécessaires au fonctionnement du Blog (généralement : Article, Auteur, Catégorie, etc., selon la richesse du dictionnaire que vous avez produit). Chacune doit contenir son identifiant et ses données propres.

## Critères de réussite

* Toutes les données du dictionnaire complet ont été classées dans une entité logique.
* Chaque entité possède un identifiant valide.
* Toutes les données textuelles générant des répétitions ont bien été isolées dans de nouvelles entités et remplacées par des identifiants dans les bonnes entités.
* Il n'y a plus aucune donnée mal placée ou en doublon dans l'ensemble de votre modèle.

---

## Bilan

### Vous avez appris :
* À regrouper logiquement des données autour d'un identifiant.
* À nettoyer une entité en isolant les concepts répétitifs dans de nouvelles entités dédiées.
* À vérifier la cohérence et la propreté d'une entité finale.

### Vous avez réalisé :
* La construction complète des entités d'une application (Blog) à partir de son dictionnaire de données global. Vous êtes prêt pour la modélisation visuelle !
