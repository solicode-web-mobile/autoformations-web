---
title: "Transformer le MCD complet en MLD"
layout: tuto
slug: "transformer-mcd-complet-mld"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.153"
type: "classique"
version: "detaille"
ua: "UA.112.15"
nav_order: 12
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Cette ultime étape marque l'achèvement de votre conception de base de données. L'objectif est de finaliser le Modèle Logique de Données (MLD) en étudiant et en résolvant le tout dernier cas de modélisation relationnelle : l'intrigante relation **N-N** (Plusieurs-à-Plusieurs).

Dans ce tutoriel très complet, vous allez apprendre à :
* identifier sans hésitation une relation N-N sur n'importe quel modèle conceptuel ;
* la transformer correctement d'un point de vue informatique en créant une **table de liaison** (également appelée table associative) ;
* concevoir une clé primaire composée ;
* assembler, vérifier et valider le MLD final et complet de votre projet de Blog.

## 2. Prérequis

* Avoir parfaitement maîtrisé la transformation des entités de base en tables (T.112.151).
* Avoir compris et appliqué sans erreur la migration des identifiants via les clés étrangères pour les relations 1-N (T.112.152).

## Données de départ

* Votre MLD actuel est presque prêt. Il compte pour l'instant 4 tables solidement liées par des clés étrangères (PK et FK).
* **Un dernier besoin métier surgit** : Pour finaliser ce blog professionnel, l'équipe décide d'y intégrer un système de "Tags" (des mots-clés thématiques transverses, très utiles pour le référencement naturel).
  * L'entité classique : `TAG` (id_tag, nom_tag).
  * La règle de gestion dictée par le client : "Un article peut posséder plusieurs mots-clés (tags) différents. Inversement, un même tag peut servir à catégoriser des dizaines d'articles différents."
* Ce qui, en termes de modélisation MCD, nous donne cette nouvelle relation mathématique :
  `ARTICLE (0,N) ─── possede ─── (0,N) TAG`

---

## Partie 1 — Théorie

### 1.1. Le problème informatique du "N vers N"

Face à la relation conceptuelle `ARTICLE (0,N) --- (0,N) TAG`, si l'on essaie de forcer notre bonne vieille règle du "1 vers N", on se retrouve immédiatement bloqué face à un mur logique : **aucun des deux côtés n'a de cardinalité 1**.
* Faisons l'essai mental : si l'on insère bêtement une colonne `id_tag (FK)` directement dans la table `ARTICLE`, on ne pourra stocker qu'un et un seul tag par article (puisqu'une case de tableau ne contient qu'une seule valeur en SQL). C'est contraire au besoin.
* À l'inverse, si l'on insère une colonne `id_article (FK)` dans la table `TAG`, on ne pourra lier ce mot-clé qu'à un unique article. Ce mot-clé ne serait pas réutilisable. C'est tout aussi faux.

### 1.2. L'élégante solution : La table de liaison

Puisqu'absolument aucune des deux tables ne peut recevoir la clé de l'autre sans briser la règle fondamentale des bases de données relationnelles, la seule issue logique est de **créer une troisième table au milieu**.
La règle officielle de transformation pour une relation N-N est la suivante :
1. **La relation elle-même (la bulle ovale du MCD) mute et devient une véritable table physique**. On la nomme très généralement en fusionnant par un tiret bas le nom des deux tables qu'elle marie (exemple : `ARTICLE_TAG`).
2. Cette nouvelle "table associative" (ou table de liaison) récupère instantanément les clés primaires (`PK`) des deux tables d'origine.
3. Ces deux clés migrées deviennent **à la fois des Clés Étrangères (FK) et, ensemble, une Clé Primaire composée (PK)**. Cela signifie que la paire "un article + un tag précis" est unique, empêchant d'attribuer deux fois exactement le même tag au même article.

### 1.3. Exemple concret de modélisation

La relation conceptuelle abstraite : 
`ARTICLE (0,N) ─── possede ─── (0,N) TAG`

Se transforme automatiquement en cette structure physique :
```text
Table : ARTICLE_TAG
-------------------
id_article (PK, FK)
id_tag     (PK, FK)
```
Cette table très particulière (souvent invisible pour l'utilisateur final) sert exclusivement d'annuaire de correspondance entre la table géante des Articles et la table des Tags.

---

## Partie 2 — Pratique

### 2.1. Transformer la nouvelle entité TAG

Pour commencer cette dernière ligne droite, transformez la nouvelle entité de base `TAG` en une table classique, comme vous l'avez appris dans T.112.151, en n'oubliant pas de définir sa clé primaire.

### 2.2. Créer la table de liaison

Créez ensuite l'indispensable table de liaison `ARTICLE_TAG` pour résoudre techniquement la nouvelle relation N-N que nous avons introduite.
* Elle ne contiendra (pour l'instant) que les deux colonnes identifiantes : `id_article` et `id_tag`.
* N'oubliez surtout pas d'annoter ces deux colonnes avec la mention `(PK, FK)` pour documenter clairement leur double nature auprès du développeur qui codera la base.

### 2.3. Travail à faire

Assemblez l'intégralité du gigantesque MLD de l'application Blog.
Faisons les comptes : avec vos 4 tables de base, votre nouvelle table TAG, et la nouvelle table associative pour les relier, vous devez modéliser **6 tables au total**, parfaitement interconnectées.

## Livrable

Mettez à jour et finalisez votre fichier de conception pour qu'il contienne l'architecture relationnelle finale de l'application.
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

Votre formateur sera intraitable sur cette validation finale :
* Votre MLD liste bien exactement 6 tables distinctes.
* La table classique `TAG` possède bien sa propre clé primaire `(PK)`.
* La table de liaison `ARTICLE_TAG` est bien modélisée et contient exactement les deux clés migrées avec la double annotation `(PK, FK)`.
* Toutes les autres tables (Auteur, Ville, Catégorie, Article) n'ont subi aucune modification hasardeuse et conservent jalousement les clés que vous aviez définies précédemment.

---

## Bilan

### Vous avez appris :
* À identifier instantanément le cas particulier d'une relation "Plusieurs-à-Plusieurs" (N-N) sur un schéma d'architecture.
* À résoudre cette impossibilité technique de manière très élégante via la conception d'une table de liaison (ou associative).
* À produire en totale autonomie un Modèle Logique de Données (MLD) complexe, cohérent, sans erreur, et prêt pour la production.

Toutes nos félicitations, l'intégralité de la phase de conception théorique est désormais terminée ! Vous avez surmonté les difficultés et construit les plans parfaits et optimisés de votre future application. 
Vous êtes maintenant armé(e) et prêt(e) à attaquer la réalisation technique (le code SQL de création de ces tables) dans la prochaine grande Unité d'Apprentissage.

## Glossaire

* **Relation N-N (Many-to-Many)** : Relation symétrique complexe où les cardinalités maximales des deux entités valent "N" (Plusieurs). C'est le seul type de relation qui nécessite de créer une table supplémentaire.
* **Table de liaison (ou table associative / de jointure)** : Table purement technique et non fonctionnelle créée pour résoudre le croisement d'une relation N-N. Elle contient systématiquement les clés étrangères pointant vers les deux tables qu'elle relie.
* **Clé primaire composée** : Clé primaire globale (`PK`) d'une table qui, au lieu d'utiliser une seule colonne, est constituée de l'association obligatoire de plusieurs colonnes. Dans notre cas, la paire inséparable `id_article + id_tag` garantit mathématiquement qu'il est impossible de lier deux fois le même tag exact au même article.
