---
title: "Transformer le MCD complet en MLD"
layout: tuto
slug: "transformer-mcd-complet-mld"
permalink: /tutos/:slug/normal
tuto_id: "T.112.153"
type: "classique"
version: "normal"
ua: "UA.112.15"
nav_order: 12
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Il est temps de finaliser le Modèle Logique de Données (MLD) en traitant le dernier cas de modélisation : la fameuse relation **N-N** (Plusieurs-à-Plusieurs).

Vous allez apprendre à :
* identifier rapidement une relation N-N sur un MCD ;
* la transformer correctement en créant une **table de liaison** (ou table associative) ;
* assembler et valider le MLD final et complet du Blog.

## 2. Prérequis

* Avoir transformé les entités en tables (T.112.151).
* Avoir compris et appliqué le système des clés étrangères pour les relations 1-N (T.112.152).

## Données de départ

* Votre MLD actuel, qui compte pour l'instant 4 tables avec leurs PK et FK.
* **Nouveau besoin métier** : Pour finaliser le blog, on souhaite ajouter un système de "Tags" (des mots-clés thématiques).
  * L'entité classique : `TAG` (id_tag, nom_tag).
  * La règle de gestion : Un article possède un ou plusieurs tags, et un tag peut catégoriser un ou plusieurs articles.
* Ce qui nous donne la nouvelle relation MCD suivante :
  `ARTICLE (0,N) ─── possede ─── (0,N) TAG`

---

## Partie 1 — Théorie

### 1.1. Le problème du "N vers N"

Face à la relation `ARTICLE (0,N) --- (0,N) TAG`, si l'on essaie d'appliquer notre règle habituelle du "1 vers N", on se retrouve bloqué : aucun des deux côtés n'est un "1".
* Si l'on met `id_tag (FK)` dans la table `ARTICLE`, on ne pourra stocker qu'un seul tag pour cet article. C'est faux.
* Si l'on met `id_article (FK)` dans la table `TAG`, on ne pourra lier ce tag qu'à un seul article. C'est faux également.

### 1.2. La solution : La table de liaison

Puisqu'aucune des deux tables ne peut recevoir la clé de l'autre sans briser la règle, la solution est de créer une troisième table au milieu. La règle de transformation pour une relation N-N est la suivante :
1. **La relation (la bulle ovale du MCD) devient une véritable table**. On la nomme généralement en fusionnant le nom des deux autres tables (ex: `ARTICLE_TAG`).
2. Cette nouvelle table associative récupère les clés primaires (`PK`) des deux tables d'origine.
3. Ces deux clés deviennent **à la fois des Clés Étrangères (FK) et une Clé Primaire composée (PK)** pour cette nouvelle table.

### 1.3. Exemple de modélisation

La relation : `ARTICLE (0,N) ─── possede ─── (0,N) TAG`
Se transforme automatiquement en la table de liaison :
```text
Table : ARTICLE_TAG
-------------------
id_article (PK, FK)
id_tag (PK, FK)
```
Cette petite table sert uniquement d'annuaire de correspondance entre les articles et les tags.

---

## Partie 2 — Pratique

### 2.1. Transformer la nouvelle entité TAG

Commencez logiquement par transformer la nouvelle entité `TAG` en une table classique, comme vous l'avez appris dans T.112.151, avec sa clé primaire.

### 2.2. Créer la table de liaison

Créez ensuite la table de liaison `ARTICLE_TAG` pour résoudre la nouvelle relation N-N.
* Elle ne contiendra que les deux colonnes identifiantes : `id_article` et `id_tag`.
* N'oubliez pas d'annoter ces colonnes avec `(PK, FK)` pour indiquer leur double nature.

### 2.3. Travail à faire

Assemblez l'intégralité du MLD de l'application Blog.
En comptant les 4 tables de base, la table TAG et la nouvelle table associative, vous devez obtenir **6 tables au total**.

## Livrable

Mettez à jour votre fichier de conception pour qu'il contienne le MLD final et complet.
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

* Votre MLD final contient bien exactement 6 tables.
* La table classique `TAG` possède bien sa propre `(PK)`.
* La table de liaison `ARTICLE_TAG` est présente et contient exactement les deux clés migrées avec la notation `(PK, FK)`.
* Les 4 autres tables (Auteur, Ville, Catégorie, Article) n'ont subi aucune modification et conservent les clés définies précédemment.

---

## Bilan

### Vous avez appris :
* À identifier le cas particulier d'une relation "Plusieurs-à-Plusieurs" (N-N).
* À résoudre cette impossibilité technique de manière élégante via la création d'une table de liaison.
* À produire un Modèle Logique de Données (MLD) complet, cohérent et sans erreur.

Félicitations, toute la phase de conception théorique est désormais terminée ! Vous avez construit les plans parfaits de votre application. Vous êtes prêt(e) à attaquer la réalisation technique (le langage SQL) dans la prochaine Unité d'Apprentissage.

## Glossaire

* **Relation N-N** : Relation symétrique où les cardinalités maximales des deux entités valent "N".
* **Table de liaison (ou d'association)** : Table purement technique créée pour résoudre une relation N-N, contenant au minimum les clés étrangères des deux tables qu'elle relie.
* **Clé primaire composée** : Clé primaire globale (`PK`) qui est constituée de l'association de plusieurs colonnes (ici, la paire id_article + id_tag garantit qu'on ne lie pas deux fois le même tag au même article).
