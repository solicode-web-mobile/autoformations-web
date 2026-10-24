---
title: "Construire le MCD complet"
layout: tuto
slug: "construire-mcd-complet"
permalink: /tutos/:slug/normal
tuto_id: "T.112.142"
type: "classique"
version: "normal"
ua: "UA.112.14"
nav_order: 9
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

L'objectif de ce tutoriel est d'assembler toutes les entités, relations et cardinalités que vous avez isolées précédemment afin de construire le **MCD complet du Blog**.

Vous allez apprendre à :
* rassembler logiquement les différents éléments d'un modèle conceptuel ;
* représenter visuellement des entités, leurs attributs et leurs relations ;
* vérifier la cohérence globale du modèle final.

## 2. Prérequis

* Avoir construit les entités (T.112.133).
* Avoir déterminé les relations et les cardinalités (T.112.141).

## Données de départ

Vos résultats validés lors des étapes précédentes constituent vos données de départ :
* Vos **entités** : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.
* Vos **relations** : 
  * `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
  * `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
  * `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MCD ?

Le **Modèle Conceptuel de Données (MCD)** est le schéma global qui rassemble et organise :
* Les entités (avec leurs identifiants et attributs)
* Les relations qui les unissent
* Les cardinalités qui délimitent ces relations

Attention : Le MCD représente des concepts (des idées). Il ne représente pas encore la véritable base de données (il n'y a pas encore de tables ou de clés étrangères physiques).

### 1.2. Assemblage

L'assemblage suit une règle très stricte :
```text
Entités existantes + Relations existantes + Cardinalités validées = MCD complet
```
* **Règle d'or** : À ce stade, vous ne devez inventer aucune nouvelle entité ni ajouter de nouvelle relation. De plus, vous ne devez absolument pas modifier les cardinalités que vous avez déjà validées.

### 1.3. Lecture d'un MCD

Un schéma bien conçu doit pouvoir se lire comme un texte, toujours dans les deux sens :
```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```
> Un auteur rédige zéro, un ou plusieurs articles. Inversement, un article est rédigé par exactement un auteur.

### 1.4. Vérifications essentielles

Un MCD doit toujours être contrôlé avant d'être validé :
1. **Intégrité des attributs** : Chaque donnée doit impérativement rester dans son entité d'origine, telle que vous l'aviez modélisée.
2. **Exclusion des données calculées** : Une donnée calculée et non stockée (par exemple `duree_lecture`) ne doit **jamais** apparaître dans le MCD.

---

## Partie 2 — Pratique

### 2.1. Rassembler les briques

Pour commencer, reprenez vos 4 entités finalisées avec toutes leurs données respectives :
* **VILLE** (`id_ville`, `nom_ville`)
* **AUTEUR** (`id_auteur`, `nom_auteur`, `prenom_auteur`, `email_auteur`)
* **ARTICLE** (`id_article`, `titre_article`, `contenu_article`, `date_publication`, `statut_article`, `image_article`)
* **CATEGORIE** (`id_categorie`, `nom_categorie`)

### 2.2. Connecter les relations

Liez maintenant ces entités en utilisant exclusivement les 3 relations issues du tutoriel précédent (habite, rédige, regroupe).

### 2.3. Assembler le MCD (Exemple visuel)

Sur une feuille de papier, un tableau blanc ou un logiciel de modélisation, organisez les blocs pour obtenir ce type de schéma visuel :

```text
VILLE
-----
id_ville
...
  | (0,N)
habite
  | (1,1)
AUTEUR
------
id_auteur
...
```

### 2.4. Vérifier la cohérence

Contrôlez la qualité de votre modèle final en utilisant cette check-list :
* Les 4 entités attendues sont-elles bien présentes avec leur identifiant souligné ?
* Tous les attributs sont-ils présents et bien placés (et avez-vous bien supprimé `duree_lecture`) ?
* Les 3 relations sont-elles présentes, sans ajout supplémentaire ?
* Les cardinalités sont-elles rigoureusement identiques à celles de l'exercice précédent ?

### 2.5. Travail à faire

Construisez le **MCD complet du Blog** en assemblant proprement tous vos résultats sous forme de schéma conceptuel (ou de blocs de texte structurés).

## Livrable

Créez un document **Markdown** contenant votre MCD final.
Nom conseillé : `mcd-blog.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.142/mcd-blog.html' | relative_url }}"
    height="650"
    title="Résultat attendu — MCD complet du Blog">
</iframe>

## Critères de réussite

* Le MCD contient très exactement les 4 entités et les 3 relations attendues.
* Les cardinalités sont justes et n'ont pas été modifiées par erreur.
* La donnée calculée a été correctement exclue de la modélisation.

---

## Bilan

### Vous avez appris :
* À assembler un Modèle Conceptuel de Données complet à partir de briques isolées.
* À vérifier la cohérence et la lisibilité globale d'un schéma de données.

Dans le prochain tutoriel, vous apprendrez à transformer ce MCD abstrait en **tables relationnelles** concrètes prêtes pour votre base de données.

## Glossaire

* **MCD** : Modèle global et abstrait regroupant les entités, relations et cardinalités.
* **Cohérence** : Phase de vérification finale pour s'assurer que le modèle assemblé respecte toutes les règles définies en amont.
