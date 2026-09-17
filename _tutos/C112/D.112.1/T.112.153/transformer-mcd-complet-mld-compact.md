---
title: "Transformer le MCD complet en MLD"
layout: tuto
slug: "transformer-mcd-complet-mld"
permalink: /tutos/:slug/compact
tuto_id: "T.112.153"
type: "classique"
version: "compact"
ua: "UA.112.15"
nav_order: 12
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Terminer le Modèle Logique de Données (MLD) en traitant le dernier cas : la relation **N-N** (Plusieurs-à-Plusieurs).

Vous allez apprendre à :
* identifier une relation N-N ;
* la transformer en une **table de liaison** (table associative) ;
* assembler le MLD final complet du Blog.

## 2. Prérequis

* Transformation des entités (T.112.151).
* Transformation des relations 1-N (T.112.152).

## Données de départ

* Votre MLD actuel (4 tables avec leurs PK et FK).
* **Nouveau besoin** : On ajoute un système de "Tags" (mots-clés).
  * Entité `TAG` (id_tag, nom_tag).
  * Relation : Un article possède plusieurs tags, un tag catégorise plusieurs articles.
* Nouvelle relation MCD :
  `ARTICLE (0,N) ─── possede ─── (0,N) TAG`

---

## Partie 1 — Théorie

### 1.1. Le problème du "N vers N"

Si on essaie d'appliquer la règle du "1 vers N", on est bloqué : aucun des deux côtés n'est un "1".
* Si on met `id_tag` dans `ARTICLE`, on ne peut stocker qu'un seul tag par article.
* Si on met `id_article` dans `TAG`, on ne peut lier le tag qu'à un seul article.

### 1.2. La solution : La table de liaison

La règle de transformation pour une relation N-N est la suivante :
1. **La relation devient une table à part entière**. (Son nom est souvent la fusion des deux autres, ex: `ARTICLE_TAG`).
2. Cette nouvelle table récupère les clés primaires (`PK`) des deux tables d'origine.
3. Ces deux clés deviennent **à la fois Clés Étrangères (FK) et Clé Primaire composée (PK)** de la table de liaison.

### 1.3. Exemple

`ARTICLE (0,N) ─── possede ─── (0,N) TAG`
Devient la table :
```text
Table : ARTICLE_TAG
-------------------
id_article (PK, FK)
id_tag (PK, FK)
```

---

## Partie 2 — Pratique

### 2.1. Transformer la nouvelle entité TAG

Commencez par transformer la nouvelle entité classique `TAG` en table, comme vu dans T.112.151.

### 2.2. Créer la table de liaison

Créez la table de liaison `ARTICLE_TAG` pour résoudre la relation N-N.
* Elle ne contient que deux colonnes : `id_article` et `id_tag`.
* N'oubliez pas les annotations `(PK, FK)`.

### 2.3. Travail à faire

Assemblez l'intégralité du MLD du Blog.
Vous devez obtenir **6 tables au total** (les 4 de base + TAG + ARTICLE_TAG).

## Livrable

Votre fichier de conception contenant le MLD final du projet Blog.
Nom conseillé : `mld-complet.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.153/mld-complet.html' | relative_url }}"
    height="650"
    title="Résultat attendu — MLD Complet">
</iframe>

## Critères de réussite

* Le MLD contient exactement 6 tables.
* La table `TAG` possède sa propre `(PK)`.
* La table `ARTICLE_TAG` existe et contient exactement deux clés `(PK, FK)`.
* Les autres tables (Auteur, Ville, Catégorie, Article) conservent les mêmes contraintes qu'aux étapes précédentes.

---

## Bilan

### Vous avez appris :
* À identifier une relation "Plusieurs-à-Plusieurs" (N-N).
* À résoudre cette relation de manière élégante via la création d'une table associative.
* À produire un Modèle Logique de Données (MLD) complet et sans erreur.

Félicitations, la phase de conception théorique est totalement terminée ! Vous êtes désormais prêt(e) à attaquer la réalisation technique (le SQL) dans la prochaine Unité d'Apprentissage.

## Glossaire

* **Relation N-N** : Relation où les cardinalités maximales des deux côtés sont "N".
* **Table de liaison (associative)** : Table créée spécifiquement pour résoudre une relation N-N, contenant au minimum les clés étrangères des deux tables qu'elle relie.
* **Clé primaire composée** : Clé primaire (`PK`) constituée de l'association de deux colonnes (ou plus) pour garantir l'unicité de la combinaison.
