---
title: "Construire les entités à partir des données"
layout: tuto
slug: "construire-entites-donnees"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.133"
type: "classique"
version: "detaille"
ua: "UA.112.13"
nav_order: 7
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre de manière détaillée à **construire des entités complètes**. L'objectif est de passer d'un simple dictionnaire de données (une liste en vrac) à des structures solides prêtes à être transformées en base de données, en regroupant intelligemment les informations et en isolant les répétitions.

Pas à pas, vous allez apprendre à :
* regrouper logiquement des données autour de leur identifiant naturel ou technique ;
* repérer et extraire de nouvelles entités à partir des valeurs qui se répètent anormalement ;
* remplacer ces données répétées par des identifiants techniques (clés) pour lier les entités entre elles de façon robuste ;
* vérifier la cohérence d'une entité finale avant de clôturer votre modélisation.

## 2. Prérequis

Pour bien comprendre ce chapitre, il est impératif de maîtriser les concepts vus précédemment :
* Vous devez avoir validé le tutoriel "Découvrir une entité à partir d'un identifiant ou d'une répétition" (T.112.132).

## Données de départ

Voici un extrait du dictionnaire de données d'un Blog, que nous utiliserons comme **exemple** pour illustrer la partie théorique :

| Donnée                  | Description                      |
| ----------------------- | -------------------------------- |
| `id_article`            | Identifiant d'un article         |
| `titre_article`         | Titre de l'article               |
| `contenu_article`       | Contenu de l'article             |
| `date_publication`      | Date de publication              |
| `statut_article`        | Statut de l'article              |
| `image_article`         | Image associée à l'article       |
| `id_auteur`             | Identifiant d'un auteur          |
| `nom_auteur`            | Nom de l'auteur                  |
| `prenom_auteur`         | Prénom de l'auteur               |
| `email_auteur`          | Email de l'auteur                |
| `nom_ville`             | Nom de la ville de l'auteur      |
| `nom_categorie`         | Nom de la catégorie de l'article |
| `description_categorie` | Description de la catégorie      |

*Note du formateur : La donnée `duree_lecture` a été volontairement exclue de cet exemple, car il s'agit d'une donnée calculable (on peut l'estimer à partir de la longueur du contenu).*

---

## Partie 1 — Théorie

### 1.1. Regrouper les données autour d'un identifiant

La première étape fondamentale pour construire une entité consiste à trouver un "chef d'orchestre", c'est-à-dire un identifiant. Une fois cet identifiant repéré, on vient y accrocher toutes les données qui en dépendent de manière directe et évidente (les dépendances fonctionnelles).

Prenons un exemple concret tiré de notre tableau : la donnée `id_article` est un excellent identifiant naturel. Si l'on regarde le reste du dictionnaire, il est évident que le `titre_article`, le `contenu_article` ou encore la `date_publication` n'existent que pour décrire cet article précis. Ils dépendent tous de cet `id_article`. 
En regroupant l'identifiant et toutes ses données dépendantes, on donne officiellement naissance à notre première entité, que nous appellerons tout naturellement l'entité **Article**.

### 1.2. Remplacer les répétitions par des identifiants

Une fois les premiers regroupements effectués, le travail n'est pas terminé. Il faut scruter les données à la recherche de **répétitions**. Comme vous l'avez appris, si des données textuelles engendrent des répétitions (par exemple, le `nom_ville` va se répéter chaque fois que plusieurs auteurs habitent au même endroit ; ou encore `nom_categorie` et `description_categorie` vont se répéter pour chaque article parlant du même sujet), cela signifie qu'elles représentent en fait de nouvelles réalités cachées (Ville, Catégorie). 

Il faut impérativement isoler ces réalités en créant de nouvelles entités indépendantes. Ensuite, dans l'entité d'origine, on vient **remplacer toutes les données textuelles** liées à cette répétition par l'identifiant technique de la nouvelle entité. 
Par exemple, dans l'entité Article, on supprime purement et simplement les textes `nom_categorie` et `description_categorie`, et on les remplace par un unique `id_categorie`. Cette méthode garantit qu'en cas de changement du nom de la catégorie, la modification ne se fera qu'à un seul endroit dans la base de données.

### 1.3. La méthode de construction

Pour ne jamais vous perdre lors de la conception de bases de données, voici la méthode pas-à-pas à appliquer systématiquement :

1. **Observer** : Prenez votre dictionnaire de données global et analysez-le calmement.
2. **Identifier** : Repérez les identifiants naturels ou techniques qui sautent aux yeux (comme `id_article` ou `id_auteur`).
3. **Regrouper** : Associez chaque donnée descriptive à l'identifiant dont elle dépend de manière directe (création des entités primaires).
4. **Isoler les répétitions** : Dans ces nouveaux groupes, cherchez les données textuelles susceptibles de représenter une autre réalité (comme une Catégorie, une Ville, un Pays).
5. **Créer et Remplacer** : Créez ces nouvelles entités en leur forgeant leur propre ID. Enfin, retournez dans vos entités primaires pour remplacer l'ancienne donnée texte par ce nouvel ID flambant neuf.

### 1.4. Vérifier une entité

Avant de valider définitivement une entité, vous devez vérifier qu'elle respecte scrupuleusement ces deux règles d'or :
1. **Règle d'unicité :** L'entité possède un (et un seul) identifiant principal. C'est cet identifiant qui détermine absolument toutes les autres données présentes dans la liste.
2. **Règle de non-répétition :** L'entité ne contient plus aucune donnée textuelle qui représente une réalité extérieure et qui risquerait de se répéter de ligne en ligne.

### 1.5. Pour aller plus loin : les identifiants composés

*Remarque pédagogique : Dans certains cas métier très complexes (comme le traitement d'une ligne de commande e-commerce ou le détail d'une facture), une entité peut avoir besoin de la combinaison stricte de **DEUX** identifiants (par exemple : `id_commande` associé à `id_produit`) pour garantir son unicité. C'est ce que l'on appelle un **identifiant composé**. Ne vous inquiétez pas si cela semble abstrait pour le moment, c'est une notion avancée que vous découvrirez en détail dans le tutoriel suivant.*

---

## Partie 2 — Pratique

Pour cette partie pratique, c'est à vous de jouer. Vous allez appliquer la méthode de construction complète et sans assistance, afin de transformer le dictionnaire brut en véritables entités prêtes à l'emploi.

### Exercice

À partir du dictionnaire de données **complet** de votre Blog (réalisé lors du tutoriel T.112.123), appliquez consciencieusement la méthode en 5 points détaillée dans la théorie pour extraire et construire l'ensemble des entités finales du projet.

**Travail à faire :**
1. Passez en revue la totalité de votre dictionnaire et regroupez toutes les données autour de leurs identifiants principaux.
2. Repérez finement toutes les données textuelles susceptibles de provoquer des répétitions, qui cachent d'autres réalités.
3. Créez les nouvelles entités nécessaires pour accueillir ces réalités, et n'oubliez pas de leur inventer un identifiant technique (`id_...`).
4. Remplacez intelligemment ces données textuelles par les nouveaux identifiants au sein de vos entités d'origine.
5. Dressez la liste complète et définitive de **toutes** les entités de l'application Blog.

Présentez vos entités finales sous le format structuré suivant, en utilisant des tirets pour délimiter le nom :

```text
NOM_DE_L_ENTITÉ
---------------
identifiant
donnée_1
donnée_2
...
```

*(Consigne de votre formateur : À ce stade de votre apprentissage, ne cherchez pas encore à tracer les traits de relation ou à calculer les cardinalités (0,n, 1,1...). Contentez-vous de lister très proprement les entités isolées et leur contenu final).*

## Livrable

Créez un document **Markdown** contenant la liste claire et formatée de vos entités finalisées.
Nom conseillé pour votre fichier : `entites-blog.md`

## Résultat attendu

Vous devez obtenir la liste **complète** des entités nécessaires au fonctionnement du Blog (généralement : Article, Auteur, Catégorie, etc., selon la richesse du dictionnaire que vous avez produit en amont). Chacune doit contenir son identifiant et ses données propres de façon exclusive.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.133/entites-blog.html' | relative_url }}"
    height="450"
    title="Résultat attendu — Construire les entités">
</iframe>

## Critères de réussite

Votre formateur évaluera la qualité de votre modélisation selon ces critères stricts :
* Les 4 entités principales ont été correctement déduites et identifiées.
* Chaque entité possède un identifiant naturel ou technique valide.
* Les données textuelles qui provoquaient des répétitions (`nom_ville`, `nom_categorie`, `description_categorie`) ont bien été arrachées de leur entité d'origine et isolées. Elles ont été parfaitement remplacées par les identifiants techniques correspondants (`id_ville` et `id_categorie`) dans les bonnes entités.
* L'ensemble de votre modèle est propre : il n'y a plus aucune donnée mal placée ou laissée en doublon.

---

## Bilan

### Vous avez appris :
* À structurer votre pensée pour regrouper logiquement des données autour d'un identifiant central.
* À assainir (nettoyer) une entité primaire en isolant les concepts répétitifs au sein de nouvelles entités dédiées.
* À vérifier la cohérence et la robustesse d'une entité finale grâce aux règles d'unicité et de non-répétition.

### Vous avez réalisé :
* La construction complète et professionnelle de l'ensemble des entités d'une application réelle (un Blog) à partir d'un simple dictionnaire de données brut. Félicitations, vous maîtrisez la base de la modélisation et vous êtes fin prêt pour l'étape suivante : la modélisation visuelle !
