---
title: "Déterminer les relations et les cardinalités"
layout: tuto
slug: "determiner-relations-cardinalites"
permalink: /tutos/:slug/compact
tuto_id: "T.112.141"
type: "classique"
version: "compact"
ua: "UA.112.14"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Déterminer les liens entre les entités à partir des maquettes.

Vous allez apprendre à :
* formuler une règle de gestion ;
* identifier une relation ;
* déterminer le minimum et le maximum ;
* écrire les cardinalités ;
* distinguer les relations 1–1, 1–N et N–N.

## 2. Prérequis

* Construire les entités (T.112.133).
* Distinguer réalité, entité, attribut et identifiant.

## Données de départ

Vos entités de base : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.

Observez les [maquettes du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html) pour déduire les liens.
Exemple d'information déduite : *Un article est rédigé par un auteur.*

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une règle de gestion ?

* Une phrase décrivant une règle du domaine.
* Utilise un **verbe métier**.
* Ex: *Un auteur habite dans une ville.*

### 1.2. Qu'est-ce qu'une relation ?

* Le lien entre deux entités, exprimé par le verbe métier.
* Ex: `AUTEUR ─── habite ─── VILLE`

### 1.3. Qu'est-ce qu'une cardinalité ?

* Indique le nombre minimum et maximum de liens pour une occurrence.
* S'écrit `(minimum, maximum)`.
* Valeurs courantes : `0,1`, `1,1`, `0,N`, `1,N`.

### 1.4. Déterminer le maximum

* Question : *Une occurrence peut-elle être liée à une seule ou à plusieurs ?*
* Si une seule -> max = `1`.
* Si plusieurs -> max = `N`.

### 1.5. Déterminer le minimum

* Question : *Ce lien est-il obligatoire ?*
* Si oui -> min = `1`.
* Si non (facultatif) -> min = `0`.

### 1.6. Exemple : AUTEUR et ARTICLE

* Règle : *Un article est rédigé par un seul auteur (1,1). Un auteur peut rédiger plusieurs articles (0,N).*
* Résultat : `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`

### 1.7. Les principaux types de relations

* **1–1** : Chaque occurrence est liée à une seule en face.
* **1–N** : Une occurrence est liée à plusieurs, l'autre à une seule.
* **N–N** : Les deux côtés peuvent être liés à plusieurs.

### 1.8. La méthode

1. Formulez la règle de gestion.
2. Posez la question dans le sens A vers B -> min, max.
3. Posez la question dans le sens B vers A -> min, max.
4. Écrivez la relation.

### 1.9. À retenir

* Règle de gestion = description du lien.
* Relation = lien entre entités.
* Cardinalité = (min, max).
* Minimum = 0 ou 1. Maximum = 1 ou N.

---

## Partie 2 — Pratique

### 2.1. Déterminer la relation AUTEUR — VILLE

* Règle : *Un auteur habite dans 1 seule ville. Une ville accueille 0 ou N auteurs.*
* Côté AUTEUR : habite dans combien de villes ? -> 1. Obligatoire ? -> 1. **(1,1)**
* Côté VILLE : accueille combien d'auteurs ? -> N. Obligatoire ? -> 0. **(0,N)**
* Résultat : `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`

### 2.2. Déterminer la relation AUTEUR — ARTICLE

* Règle : *Un article est rédigé par 1 seul auteur. Un auteur rédige 0 ou N articles.*
* Côté ARTICLE : rédigé par combien d'auteurs ? -> 1. Obligatoire ? -> 1. **(1,1)**
* Côté AUTEUR : rédige combien d'articles ? -> N. Obligatoire ? -> 0. **(0,N)**
* Résultat : `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`

### 2.3. Déterminer la relation CATEGORIE — ARTICLE

* Règle : *Un article appartient à 1 seule catégorie. Une catégorie regroupe 0 ou N articles.*
* Appliquez la méthode pour déterminer les cardinalités des deux côtés.

### 2.4. Observer une relation N–N (Exemple: ARTICLE — TAG)

* Règle : *Un article utilise 0 ou N tags. Un tag est utilisé par 0 ou N articles.*
* Résultat : `ARTICLE (0,N) ─── utilise ─── (0,N) TAG`

### 2.5. Travail à faire

Déterminez les règles et les cardinalités pour ces 3 relations :
1. **ARTICLE — CATEGORIE**
2. **AUTEUR — ARTICLE**
3. **ARTICLE — TAG**

Présentez le résultat sous forme de tableau :

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
* Verbe métier clair.
* Minimum et maximum corrects.
* Distinction correcte des types de relations (1-N, N-N).

---

## Bilan

### Vous avez appris :
* À formuler une règle de gestion.
* À déduire et écrire les cardinalités (min, max).
* À identifier les relations 1-1, 1-N et N-N.

Dans le prochain tutoriel, vous assemblerez tout cela pour créer le Modèle Conceptuel de Données (MCD).

## Glossaire

* **Règle de gestion** : phrase décrivant un lien métier.
* **Relation** : lien entre deux entités.
* **Cardinalité** : minimum et maximum d'une relation.
