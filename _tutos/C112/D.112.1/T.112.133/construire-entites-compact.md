---
title: "Construire les entités à partir des données"
layout: tuto
slug: "construire-entites-donnees"
permalink: /tutos/:slug/compact
tuto_id: "T.112.133"
type: "classique"
version: "compact"
ua: "UA.112.13"
nav_order: 7
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **construire des entités complètes** en regroupant les données et en isolant les répétitions.

Vous allez apprendre à :
* regrouper les données autour de leur identifiant ;
* créer de nouvelles entités à partir des répétitions ;
* remplacer les données répétées par des identifiants techniques ;
* vérifier la cohérence d'une entité finale.

## 2. Prérequis

* Découvrir une entité à partir d'un identifiant ou d'une répétition (T.112.132).

## Données de départ

Voici le dictionnaire de données d'un Blog que nous devons modéliser :

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
| `description_categorie` | Description de la catégorie      |

*Note : La donnée `duree_lecture` a été exclue car c'est une donnée calculable.*

---

## Partie 1 — Théorie

### 1.1. Regrouper les données autour d'un identifiant

Une entité se construit en regroupant toutes les données qui dépendent fonctionnellement d'un même identifiant.
Exemple : `titre_article`, `contenu_article`, `date_publication` dépendent directement de `id_article`. Elles forment l'entité **Article**.

### 1.2. Remplacer les répétitions par des identifiants

Si des données engendrent des répétitions (ex: `nom_ville` pour un auteur, `nom_categorie` et `description_categorie` pour un article), il faut isoler cette réalité dans une nouvelle entité.
Dans l'entité d'origine, on remplace toutes les données textuelles liées à cette répétition par l'identifiant de la nouvelle entité (ex: `nom_categorie` et `description_categorie` sont remplacés par un unique `id_categorie`).

### 1.3. La méthode de construction

1. **Observer** : Prendre le dictionnaire de données global.
2. **Identifier** : Repérer les identifiants naturels ou techniques évidents (ex: `id_article`, `id_auteur`).
3. **Regrouper** : Associer chaque donnée à l'identifiant dont elle dépend directement.
4. **Isoler les répétitions** : Repérer les données qui représentent une autre réalité (ex: Catégorie, Ville).
5. **Créer et Remplacer** : Créer ces nouvelles entités avec leur propre ID, et remplacer l'ancienne donnée par ce nouvel ID dans l'entité d'origine.

### 1.4. Vérifier une entité

Une entité est valide si elle respecte deux règles strictes :
1. **Unicité :** Il possède un et un seul identifiant qui détermine toutes les autres données.
2. **Aucune répétition anormale :** Aucune donnée textuelle représentant une autre réalité ne s'y répète.

### 1.5. Pour aller plus loin : les identifiants composés

*Remarque : Dans certains cas complexes (comme une ligne de commande ou une facture), une entité peut avoir besoin de la combinaison de **DEUX** identifiants (ex: `id_commande` + `id_produit`) pour être unique. C'est ce qu'on appelle un **identifiant composé**, une notion que vous découvrirez dans le tutoriel suivant.*

---

## Partie 2 — Pratique

### Exercice

À partir du dictionnaire de données fourni dans les "Données de départ", appliquez la méthode complète pour construire les entités finales du Blog.

**Travail à faire :**
1. Regroupez les données autour des identifiants principaux (`id_article`, `id_auteur`).
2. Repérez les données qui cachent d'autres réalités (répétitions).
3. Créez les nouvelles entités nécessaires et leurs identifiants.
4. Remplacez ces données par les nouveaux identifiants dans les entités d'origine.
5. Dressez la liste complète et définitive des entités.

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

Créez un document **Markdown** contenant la liste de vos entités finalisées.
Nom conseillé : `entites-blog.md`

## Résultat attendu

Vous devez obtenir **4 entités** distinctes (Article, Auteur, Ville, Catégorie), chacune contenant son identifiant et ses données propres (ou les clés étrangères correspondantes notées comme de simples identifiants).

## Critères de réussite

* Les 4 entités ont été correctement identifiées.
* Chaque entité possède un identifiant valide.
* Les données textuelles répétitives (`nom_ville`, `nom_categorie`, `description_categorie`) ont bien été isolées et remplacées par `id_ville` et `id_categorie` dans les bonnes entités.
* Il n'y a plus aucune donnée mal placée ou en doublon.

---

## Bilan

### Vous avez appris :
* À regrouper logiquement des données autour d'un identifiant.
* À nettoyer une entité en isolant les concepts répétitifs dans de nouvelles entités.
* À vérifier la cohérence d'une entité finale.

### Vous avez réalisé :
* La construction complète des entités d'une application (Blog) à partir d'un simple dictionnaire de données brut. Vous êtes prêt pour l'étape de modélisation visuelle !
