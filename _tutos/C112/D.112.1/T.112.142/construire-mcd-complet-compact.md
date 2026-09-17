---
title: "Construire le MCD complet"
layout: tuto
slug: "construire-mcd-complet"
permalink: /tutos/:slug/compact
tuto_id: "T.112.142"
type: "classique"
version: "compact"
ua: "UA.112.14"
nav_order: 9
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Assembler les entités, relations et cardinalités pour construire le **MCD complet du Blog**.

Vous allez apprendre à :
* rassembler les éléments d'un modèle conceptuel ;
* représenter visuellement entités, attributs et relations ;
* vérifier la cohérence du modèle final.

## 2. Prérequis

* Entités (T.112.133).
* Relations et cardinalités (T.112.141).

## Données de départ

Vos résultats validés des étapes précédentes :
* Entités : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.
* Relations : 
  * `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
  * `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
  * `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MCD ?

Le **Modèle Conceptuel de Données (MCD)** rassemble :
* Les entités (avec identifiants et attributs)
* Les relations
* Les cardinalités
Le MCD n'est pas encore la base de données (pas de tables).

### 1.2. Assemblage

```text
Entités + Relations + Cardinalités = MCD complet
```
* **Règle d'or** : N'ajoutez aucune nouvelle entité ou relation à ce stade. Ne modifiez pas les cardinalités déjà validées.

### 1.3. Lecture d'un MCD

On lit toujours la relation dans les deux sens :
```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```
> Un auteur rédige 0 ou plusieurs articles. Un article est rédigé par exactement 1 auteur.

### 1.4. Vérifications essentielles

1. **Attributs** : Chaque donnée doit rester dans son entité d'origine.
2. **Données calculées** : Une donnée calculée non stockée (ex: `duree_lecture`) n'apparaît **pas** dans le MCD.

---

## Partie 2 — Pratique

### 2.1. Rassembler les briques

Reprenez vos 4 entités finalisées avec leurs données :
* **VILLE** (`id_ville`, `nom_ville`)
* **AUTEUR** (`id_auteur`, `nom_auteur`, `prenom_auteur`, `email_auteur`)
* **ARTICLE** (`id_article`, `titre_article`, `contenu_article`, `date_publication`, `statut_article`, `image_article`)
* **CATEGORIE** (`id_categorie`, `nom_categorie`)

### 2.2. Connecter les relations

Liez-les avec les 3 relations exactes issues du tutoriel précédent (habite, rédige, regroupe).

### 2.3. Assembler le MCD (Exemple visuel)

Organisez le texte pour simuler le schéma :

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

Contrôlez votre modèle final avec cette check-list :
* Les 4 entités sont-elles présentes avec leur ID ?
* Les attributs sont-ils tous là (sauf `duree_lecture`) ?
* Les 3 relations sont-elles présentes sans ajout ?
* Les cardinalités sont-elles strictement identiques à l'exercice précédent ?

### 2.5. Travail à faire

Construisez le **MCD complet du Blog** en assemblant proprement tous vos résultats.

## Livrable

Créez un document **Markdown** contenant le MCD sous forme de blocs de texte reliés.
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

* Le MCD contient exactement les 4 entités et les 3 relations attendues.
* Les cardinalités sont exactes et non modifiées.
* La donnée calculée a été correctement exclue.

---

## Bilan

### Vous avez appris :
* À assembler un MCD complet à partir de briques séparées.
* À vérifier la cohérence globale d'un modèle de données.

Dans le prochain tutoriel, vous apprendrez à transformer ce MCD abstrait en **tables relationnelles** concrètes pour votre base de données.

## Glossaire

* **MCD** : Modèle global regroupant entités, relations et cardinalités.
* **Cohérence** : Fait de vérifier que le modèle assemblé respecte scrupuleusement les règles définies en amont.
