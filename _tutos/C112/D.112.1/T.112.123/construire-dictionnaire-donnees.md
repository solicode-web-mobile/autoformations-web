---
title: "Construire le dictionnaire de données"
layout: tuto
slug: "construire-dictionnaire-donnees"
permalink: /tutos/:slug/
tuto_id: "T.112.123"
type: "classique"
version: "normal"
ua: "UA.112.12"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Regrouper et structurer les données identifiées dans **toutes les maquettes du Blog** pour construire un **dictionnaire de données** complet et cohérent.

Dans ce tutoriel, vous allez apprendre à :

* regrouper les données récurrentes issues de plusieurs pages ;
* harmoniser leurs noms ;
* compléter leurs descriptions ;
* préciser leur type ;
* indiquer si elles sont obligatoires ;
* distinguer systématiquement les données stockées des données calculées.

## 2. Prérequis

* Savoir identifier et décrire une donnée dans une maquette (T.112.121).
* Connaître les types conceptuels : Texte, Entier, Nombre décimal, Date, Booléen.
* Savoir appliquer le filtre (Stockée, Calculée, Temporaire).

## Données de départ

Ce tutoriel utilise **l'ensemble des maquettes du Blog**.

Vous devez observer toutes les pages disponibles, qu'il s'agisse de la partie publique (visible par les visiteurs) ou de la partie administration (visible par l'auteur).

👉 [Ouvrir l'ensemble des maquettes du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Les données identifiées dans le tutoriel précédent (T.112.121) vous servent de point de départ.

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un dictionnaire de données ?

Un **dictionnaire de données** est un document (souvent un tableau) qui liste de manière exhaustive toutes les données qui seront manipulées et sauvegardées par l'application.

Il sert de référence unique pour toute l'équipe de conception et de développement. Il contient pour chaque donnée :

* son nom ;
* sa description ;
* un exemple de valeur ;
* son type ;
* son caractère obligatoire ou facultatif ;
* l'indication "Calculée" (Oui ou Non).

### 1.2. Regrouper les données

Une même donnée peut apparaître sur de nombreuses maquettes différentes. 
Elle ne doit être inscrite **qu'une seule fois** dans le dictionnaire.

**Exemple :**

```text
Page Création d'article (Admin) :
titre_article

Page Liste des articles (Public) :
titre_article

Page Détail d'un article (Public) :
titre_article
```

Ces trois observations correspondent à la même donnée. Dans le dictionnaire, on ne l'écrira qu'une seule fois : `titre_article`.

### 1.3. Harmoniser les noms

Les noms doivent utiliser une même convention stricte pour éviter toute confusion lors de la programmation.

Utiliser la convention "snake_case" :
* uniquement des minuscules ;
* `_` pour remplacer les espaces et séparer les mots ;
* des noms descriptifs ;
* aucun accent ni caractère spécial.

**Exemples :**

```text
titre_article
date_publication
nom_categorie
nom_auteur
```

**À éviter absolument :**

```text
TitreArticle
date publication
NomCatégorie
data1
```

### 1.4. Décrire une donnée

Chaque donnée doit être accompagnée d'une description simple et précise, compréhensible même sans voir la maquette.

| Donnée             | Description                      |
| ------------------ | -------------------------------- |
| `titre_article`    | Titre principal de l'article     |

### 1.5. Définir le type

Chaque donnée possède un type conceptuel : `Texte`, `Entier`, `Nombre décimal`, `Date`, ou `Booléen` (Vrai/Faux).

### 1.6. Définir si la donnée est obligatoire

Une donnée peut être :
* **Oui (Obligatoire)** : L'application ne peut pas fonctionner si cette donnée manque.
* **Non (Facultative)** : L'application fonctionne très bien sans cette donnée.

### 1.7. Préciser si la donnée est calculée

Comme vu précédemment, il faut toujours préciser la colonne **Calculée** :
* **Oui** : La donnée est produite à partir d'autres données (ex: `duree_lecture`).
* **Non** : La donnée doit être sauvegardée telle quelle (ex: `titre_article`).

### 1.8. Dictionnaire de données et entité

Le dictionnaire contient toutes les données listées les unes à la suite des autres.
À ce stade, les données ne sont pas encore organisées en "familles" (les Entités).

Le regroupement logique en **ARTICLE**, **AUTEUR** ou **CATEGORIE** sera l'objectif du prochain tutoriel (Le Modèle Conceptuel).

---

## Partie 2 — Pratique

### 2.1. Explorer toutes les maquettes

Ouvrez le lien vers les maquettes du Blog. Explorez **toutes** les pages disponibles dans le menu.
Prenez un brouillon et listez les données que vous repérez au fil de votre navigation.

*Page Admin - Créer un article* → Vous repérez `statut_article` (Publié / Brouillon).
*Page Admin - Connexion* → Vous repérez `email_admin` et `mot_de_passe_admin`.
*Page Publique - Catégories* → Vous repérez `description_categorie`.

### 2.2. Regrouper et harmoniser

Rassemblez toutes vos notes.
Éliminez les doublons (par exemple, vous verrez `titre_article` partout, ne le gardez qu'une fois).
Passez tous vos noms au format `nom_de_la_donnee`.

### 2.3. Construire le dictionnaire complet

Créez un tableau complet qui regroupe toutes les données du Blog.

**Structure obligatoire du dictionnaire :**

| Donnée | Description | Exemple de valeur | Type | Obligatoire | Calculée |
| ------ | ----------- | ----------------- | ---- | :---------: | :------: |
|        |             |                   |      |             |          |

### 2.4. Travail à faire

**Consigne :**

Construisez le dictionnaire de données final et complet du Blog en analysant **l'intégralité des maquettes**.
Assurez-vous qu'il ne manque aucune donnée persistante nécessaire au fonctionnement du blog (connexion, création d'article, auteurs, catégories, etc.).

**Livrable :**

Créez un fichier de tableur (CSV ou Excel) :

```text
dictionnaire-donnees-blog.csv
ou
dictionnaire-donnees-blog.xlsx
```

**Critère de réussite :**

* Toutes les maquettes ont été analysées, aucune donnée importante ne manque ;
* Aucune donnée n'est répétée (pas de doublon) ;
* Les noms respectent la convention (`minuscules_avec_underscores`) ;
* Les colonnes Type, Obligatoire et Calculée sont renseignées de manière logique pour chaque donnée.

### Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.122/' | relative_url }}"
    height="600"
    title="Résultat attendu — Dictionnaire de données complet">
</iframe>

## Bilan

**Vous avez réalisé :**

Le dictionnaire de données complet d'une application à partir de l'ensemble de ses maquettes.

**Vous savez maintenant :**

* analyser de multiples maquettes pour en extraire l'essence des données ;
* regrouper et éliminer les doublons pour obtenir une vision globale ;
* construire un document de référence clair et professionnel, indispensable pour la création d'une base de données.

Dans le prochain tutoriel, vous apprendrez à **regrouper ces données en Entités pour construire le Modèle Conceptuel de Données (MCD)**.

## Glossaire

* **Dictionnaire de données** : tableau qui liste et décrit de manière exhaustive toutes les données manipulées par une application.
* **Doublon** : fait d'enregistrer deux fois la même donnée. Le dictionnaire ne doit contenir aucun doublon.
