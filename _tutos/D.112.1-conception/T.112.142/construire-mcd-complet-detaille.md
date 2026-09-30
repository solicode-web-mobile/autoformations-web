---
title: "Construire le MCD complet"
layout: tuto
slug: "construire-mcd-complet"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.142"
type: "classique"
version: "detaille"
ua: "UA.112.14"
nav_order: 9
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Le but ultime de cette étape de conception est d'assembler toutes les entités, les relations et les cardinalités que vous avez patiemment isolées dans les étapes précédentes afin de construire le **MCD complet de l'application Blog**.

Dans ce tutoriel très complet, vous allez apprendre à :
* rassembler logiquement et visuellement les différents éléments d'un modèle conceptuel ;
* représenter clairement sur un schéma des entités, leurs attributs et leurs relations ;
* contrôler et vérifier la cohérence globale de votre modèle final avant de passer au développement.

## 2. Prérequis

* Avoir construit et validé les entités du blog (T.112.133).
* Avoir déterminé et validé les relations et les cardinalités (T.112.141).

## Données de départ

Vos résultats validés lors des deux étapes précédentes constituent vos briques de construction. Voici ce dont vous avez besoin :
* Vos **4 entités** : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.
* Vos **3 relations** validées : 
  * `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
  * `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
  * `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MCD ?

Le **Modèle Conceptuel de Données (MCD)** (issu de la méthode Merise) est le schéma architectural global de votre application. Il rassemble et organise visuellement :
* Les entités (représentées par des rectangles contenant un identifiant souligné et une liste d'attributs)
* Les relations qui les unissent (représentées par des bulles ovales contenant un verbe métier)
* Les cardinalités qui encadrent ces relations (les fameux minimums et maximums)

Attention : Il est primordial de comprendre que le MCD représente uniquement des concepts fonctionnels métier. Il ne représente pas encore la véritable base de données (on n'y trouve pas encore la notion physique de "table" ou de "clé étrangère").

### 1.2. Assemblage

L'assemblage de ce schéma ressemble à un jeu de construction et suit une règle mathématique extrêmement stricte :
```text
Entités validées + Relations validées + Cardinalités validées = MCD complet
```
* **Règle d'or de l'assemblage** : À ce stade de la conception, le travail d'analyse est théoriquement terminé. Vous ne devez absolument pas inventer une nouvelle entité ni ajouter une nouvelle relation qui n'aurait pas été justifiée par une règle de gestion. De la même manière, les cardinalités sont figées et ne doivent pas être modifiées.

### 1.3. Lecture d'un MCD

Un schéma bien conçu est un schéma lisible par n'importe qui (même un client non-technicien). Il doit toujours pouvoir se lire comme un texte, et ce, dans les deux sens de la relation :
```text
AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE
```
> **Lecture de gauche à droite :** Un auteur rédige zéro, un ou plusieurs articles. 
> **Lecture de droite à gauche :** Inversement, un article est rédigé par exactement un auteur.

### 1.4. Vérifications essentielles

Un MCD doit toujours subir un contrôle qualité rigoureux avant d'être validé et transmis à un développeur de bases de données :
1. **Intégrité des attributs** : Chaque donnée doit impérativement rester dans son entité d'origine, telle que vous l'aviez modélisée. Ne déplacez pas un attribut à cette étape.
2. **Exclusion des données calculées** : Une donnée dont la valeur peut être calculée par le système et qui ne nécessite pas d'être stockée (par exemple la `duree_lecture` qui dépend du nombre de mots) ne doit **jamais** apparaître dans le MCD. Si elle y figure encore, supprimez-la.

---

## Partie 2 — Pratique

### 2.1. Rassembler les briques

Pour commencer votre assemblage, étalez virtuellement (ou sur un papier) vos 4 entités finalisées avec toutes leurs données respectives et leur identifiant :
* **VILLE** (`id_ville`, `nom_ville`)
* **AUTEUR** (`id_auteur`, `nom_auteur`, `prenom_auteur`, `email_auteur`)
* **ARTICLE** (`id_article`, `titre_article`, `contenu_article`, `date_publication`, `statut_article`, `image_article`)
* **CATEGORIE** (`id_categorie`, `nom_categorie`)

### 2.2. Connecter les relations

Prenez maintenant vos entités et reliez-les en utilisant exclusivement les 3 relations issues du tutoriel précédent (habite, rédige, regroupe). Ne tracez aucun autre trait.

### 2.3. Assembler le MCD (Exemple visuel)

Sur une feuille de papier, un tableau blanc ou un outil de conception, disposez les blocs intelligemment pour éviter que les lignes ne se croisent, afin d'obtenir ce type de schéma visuel clair :

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

Contrôlez scrupuleusement la qualité de votre modèle final en validant une par une cette check-list :
* Les 4 entités attendues sont-elles bien toutes présentes sur votre schéma avec leur identifiant souligné ?
* Tous les attributs sont-ils présents et à leur bonne place ? (Avez-vous bien pris le soin d'exclure `duree_lecture` ?)
* Les 3 relations (bulles ovales) sont-elles présentes, sans ajout supplémentaire ?
* Les cardinalités inscrites sur les traits sont-elles rigoureusement identiques à l'exercice d'analyse précédent ?

### 2.5. Travail à faire

Prenez le temps de construire le **MCD complet du Blog** en assemblant proprement tous vos résultats sous forme de schéma conceptuel lisible et esthétique (ou à défaut de blocs de texte fortement structurés).

## Livrable

Créez un document **Markdown** contenant votre MCD final. 
Nom conseillé pour votre fichier : `mcd-blog.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.142/mcd-blog.html' | relative_url }}"
    height="650"
    title="Résultat attendu — MCD complet du Blog">
</iframe>

## Critères de réussite

Votre formateur exigera une très grande rigueur sur ce schéma final :
* Le MCD doit contenir très exactement les 4 entités et les 3 relations attendues, rien de plus, rien de moins.
* Les cardinalités doivent être totalement justes et n'avoir subi aucune modification accidentelle.
* La donnée calculée (`duree_lecture`) a été correctement repérée et exclue de la modélisation.

---

## Bilan

### Vous avez appris :
* À assembler un Modèle Conceptuel de Données complet de manière méthodique à partir de briques isolées.
* À vérifier la cohérence absolue et la lisibilité globale d'un schéma de données avant sa mise en production.

Dans le prochain tutoriel, et c'est une grande étape, vous apprendrez à transformer ce MCD conceptuel et abstrait en un modèle de **tables relationnelles** concrètes, prêtes à être injectées dans votre base de données MySQL !

## Glossaire

* **MCD (Modèle Conceptuel de Données)** : Schéma global et abstrait regroupant visuellement les entités, relations et cardinalités.
* **Cohérence** : Ultime phase de vérification qualitative pour s'assurer que le modèle assemblé respecte toutes les règles métier et les normes de modélisation définies en amont.
