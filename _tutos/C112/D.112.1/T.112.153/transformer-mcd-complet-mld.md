---
title: "Transformer le MCD complet en MLD"
layout: tuto
slug: "transformer-mcd-complet-mld"
permalink: /tutos/:slug/
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

Réaliser seul la **transformation complète** du MCD du Blog en MLD.

Découvrir comment transformer une **relation N–N** (plusieurs-à-plusieurs) en créant une **table de liaison**.

## 2. Prérequis

- Savoir transformer une entité en table (T.112.151).
- Savoir transformer une relation 1–N en clé étrangère (T.112.152).
- Avoir le MCD complet du Blog sous les yeux (T.112.142).

## Données de départ

Le MCD complet du Blog comprend :

- 4 entités : `VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`
- 3 relations 1–N : *habite*, *rédige*, *appartient*
- 1 relation N–N : `ARTICLE (0,N) ─── possède ─── (0,N) TAG` (vue en T.112.141)

Entité `TAG` (à ajouter au modèle) :

```text
TAG
---
id_tag
nom_tag
```

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

## Partie 1 — Théorie

### 1.1. Rappel : Transformation MCD → MLD

1. **Entité** → **Table** (avec sa clé primaire PK).
2. **Relation 1–N** → **Clé étrangère (FK)** dans la table côté (1,1).
3. **Relation N–N** → *Nouvelle règle à découvrir.*

### 1.2. Relation N–N : Le problème

Prenons la relation :

```text
ARTICLE (0,N) ─── possède ─── (0,N) TAG
```

- Un article peut avoir plusieurs tags.
- Un tag peut être associé à plusieurs articles.

**Où mettre la clé étrangère ?**

Si on la met dans `ARTICLE` (`tag_id`), on ne peut stocker qu'un seul tag par article (impossible car un article en a plusieurs).

Si on la met dans `TAG` (`article_id`), on ne peut lier le tag qu'à un seul article (impossible car le tag sert à plusieurs articles).

**Conclusion :** On ne peut mettre la clé étrangère dans aucune des deux tables.

### 1.3. Relation N–N : La solution (Table de liaison)

Pour résoudre ce problème, on crée une **troisième table**, appelée **table de liaison** (ou table d'association).

Règle de transformation :

> **Une relation N–N devient une nouvelle table.**
> **Cette table contient deux clés étrangères qui pointent vers les deux tables liées.**

**Exemple :**

On crée la table `ARTICLE_TAG`.

```text
ARTICLE_TAG
-----------
article_id   FK
tag_id       FK
```

Cette table contient uniquement des paires : "L'article n°1 a le tag n°5", "L'article n°1 a le tag n°8", etc.

### 1.4. Clé composée

Dans une table de liaison pure, la combinaison des deux clés étrangères forme souvent la clé primaire de cette nouvelle table (on parle de clé primaire composée), pour éviter de lier deux fois le même tag au même article.

```text
ARTICLE_TAG
-----------
article_id   PK, FK
tag_id       PK, FK
```

*(Si cela vous semble complexe, retenez simplement que la table de liaison contient les deux clés étrangères).*

### 1.5. À retenir

- Pour transformer tout le MCD, on traite d'abord les entités, puis les relations 1–N, puis les relations N–N.
- Une relation N–N se transforme toujours en une **nouvelle table de liaison**.
- La table de liaison contient deux clés étrangères pointant vers les tables qu'elle relie.
- Le nom de la table de liaison combine souvent les noms des deux tables (ex: `ARTICLE_TAG`).

## Partie 2 — Pratique

### 2.1. Transformer la relation ARTICLE - TAG

#### Étape 1 — Créer les tables principales

```text
ARTICLE
-------
id_article   PK
titre_article
...

TAG
---
id_tag       PK
nom_tag
```

#### Étape 2 — Créer la table de liaison

On crée la table `ARTICLE_TAG` pour lier les deux.

```text
ARTICLE_TAG
-----------
article_id   FK
tag_id       FK
```

#### Étape 3 — Écrire les références

La table de liaison fait référence aux deux tables principales :

```text
article_tag.article_id → article.id_article
article_tag.tag_id     → tag.id_tag
```

C'est tout ! La relation N–N est transformée.

---

### 2.2. Travail à faire

**Consigne :**

Réalisez la transformation complète du MCD du Blog (y compris l'entité `TAG` et la relation N–N).

Rédigez le Modèle Logique de Données (MLD) complet.

**Livrable :**

Un document `mld-blog.md` listant toutes les tables, leurs colonnes (PK et FK), et toutes les références entre les tables.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.112.153/' | relative_url }}"
    height="750"
    title="Résultat attendu — MLD complet du Blog">
</iframe>

**Critère de réussite :**

- Les 5 tables principales sont présentes (`VILLE`, `AUTEUR`, `CATEGORIE`, `ARTICLE`, `TAG`).
- Les relations 1–N sont traduites par des clés étrangères dans les bonnes tables.
- La relation N–N est traduite par une table de liaison.
- Toutes les références (`FK → PK`) sont listées.

## Bilan

**Vous avez réalisé :** La construction du Modèle Logique de Données (MLD) complet de l'application Blog.

**Vous savez maintenant :**

- Transformer un MCD complet en MLD.
- Résoudre une relation N–N en créant une table de liaison.
- Écrire le schéma complet d'une base de données relationnelle avant de la créer.

## Glossaire

- **Transformation MCD → MLD** : Passage du modèle conceptuel aux tables de la base de données.
- **Relation N–N** : Relation où les deux entités ont une cardinalité maximum à N.
- **Table de liaison** : Nouvelle table créée pour traduire une relation N–N.
- **Clé composée** : Clé primaire formée de plusieurs colonnes (souvent dans les tables de liaison).
