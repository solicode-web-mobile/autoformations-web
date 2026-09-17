---
title: "Déterminer les relations et les cardinalités"
layout: tuto
slug: "determiner-relations-cardinalites"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.141"
type: "classique"
version: "detaille"
ua: "UA.112.14"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à observer vos entités et les informations fournies par les maquettes pour déterminer très exactement comment toutes ces réalités sont liées entre elles dans votre application.

Vous allez apprendre de manière détaillée à :
* formuler une règle de gestion métier ;
* identifier une relation logique entre deux entités ;
* déterminer le minimum et le maximum d'une cardinalité ;
* écrire et lire les cardinalités sur un schéma ;
* distinguer et comprendre les relations 1–1, 1–N et N–N.

## 2. Prérequis

* Avoir suivi et compris le tutoriel sur la construction des entités (T.112.133).
* Savoir distinguer ce qu'est une réalité, une entité, un attribut et un identifiant.

## Données de départ

Vos entités de base (réalisées consciencieusement dans les étapes précédentes) sont les suivantes : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.

En observant très attentivement les [maquettes du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html), on peut facilement déduire les liens qui unissent ces entités.
Exemple d'information déduite de la maquette (en regardant le bas d'un article) : *Un article est rédigé par un auteur.*

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une règle de gestion ?

Une **règle de gestion** est tout simplement une phrase métier qui décrit concrètement et en français une règle de fonctionnement de l'application. Elle permet à tout le monde (développeurs, clients, chefs de projet) de comprendre comment deux réalités sont connectées dans la vraie vie.
Elle utilise presque toujours un **verbe métier** très explicite.
*Exemple : Un auteur habite dans une ville.*

### 1.2. Qu'est-ce qu'une relation ?

Une **relation** (parfois appelée association) représente le lien conceptuel et modélisé entre deux entités. Elle correspond le plus souvent au verbe métier que nous avons trouvé dans la règle de gestion.
Sur un schéma, on la représente souvent par un trait (ou une bulle) entre les deux entités concernées.
*Exemple :* `AUTEUR ─── habite ─── VILLE`

### 1.3. Qu'est-ce qu'une cardinalité ?

Une **cardinalité** est une notion mathématique très simple qui indique combien de fois au minimum et au maximum une occurrence d'une entité peut être liée à une occurrence de l'autre entité.
Elle s'écrit obligatoirement sous la forme de deux valeurs entre parenthèses : `(minimum, maximum)`.
Ne vous inquiétez pas, les valeurs que vous rencontrerez le plus souvent en conception sont toujours les mêmes : `0,1`, `1,1`, `0,N`, ou `1,N`.

### 1.4. Déterminer le maximum

Pour trouver le maximum d'un côté de la relation, il suffit de vous poser une question très simple :
*Une occurrence de mon entité (par exemple "cet auteur précis") peut-elle être liée à une seule ou à plusieurs occurrences en face (par exemple "des articles") ?*
* Si la réponse logique est "une seule", alors le maximum est strict et vaut `1`.
* Si la réponse logique est "plusieurs", alors le maximum est infini et vaut `N`.

### 1.5. Déterminer le minimum

Pour trouver le minimum, posez-vous une seconde question tout aussi simple :
*Ce lien est-il absolument obligatoire pour mon entité, ou peut-il exister des cas où il n'y a aucun lien ?*
* Si le lien est obligatoire pour que la donnée existe, le minimum est `1`.
* Si le lien est facultatif (on peut ne rien avoir en face), le minimum est `0`.

### 1.6. Exemple : AUTEUR et ARTICLE

Prenons un exemple concret pour bien comprendre :
* Règle de gestion : *Un article de notre blog est rédigé par un seul auteur (cela donne 1,1 côté Article car il faut au moins un auteur et un seul maximum). En revanche, un auteur inscrit sur notre blog peut rédiger zéro, un ou plusieurs articles (cela donne 0,N côté Auteur, car l'auteur peut ne rien écrire ou écrire beaucoup).*
* Résultat modélisé sur le schéma : `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`

### 1.7. Les principaux types de relations

Il existe 3 grands types de relations, que l'on nomme en regardant les "maximums" des deux côtés :
* **Relation 1–1** : Chaque occurrence de l'entité A est liée à une seule occurrence de l'entité B, et inversement. (Très rare en pratique).
* **Relation 1–N** : Une occurrence de A peut être liée à plusieurs occurrences de B, mais une occurrence de B est liée à une seule occurrence de A. (C'est de loin le cas le plus fréquent, comme Auteur et Article).
* **Relation N–N** : Les occurrences de A peuvent être liées à plusieurs occurrences de B, et inversement. (Un cas complexe qui nécessite souvent une entité de liaison, comme nous l'avons vu avec Ligne_Commande).

### 1.8. La méthode

Pour trouver vos cardinalités à coup sûr et sans jamais vous tromper, appliquez toujours ces 4 étapes :
1. Formulez la règle de gestion avec une phrase française claire et sans ambiguïté.
2. Posez les questions "obligatoire ?" (pour le min) et "plusieurs ?" (pour le max) dans le sens de l'entité A vers l'entité B.
3. Posez exactement les mêmes questions, mais dans le sens inverse (de l'entité B vers l'entité A).
4. Écrivez la relation complète avec les cardinalités posées des deux côtés.

### 1.9. À retenir

* **Règle de gestion** = description textuelle en français du lien métier.
* **Relation** = trait ou bulle qui relie les entités sur le schéma conceptuel.
* **Cardinalité** = les chiffres `(min, max)` posés sur le trait pour définir les limites.
* Le **Minimum** vaut toujours `0` ou `1`. Le **Maximum** vaut toujours `1` ou `N`.

---

## Partie 2 — Pratique

### 2.1. Déterminer la relation AUTEUR — VILLE

Appliquons notre méthode ensemble sur la relation entre les auteurs et les villes :
* **Règle** : Un auteur habite dans 1 seule ville à la fois. Une ville de notre base peut accueillir 0 ou plusieurs auteurs.
* **Côté AUTEUR** : Un auteur habite dans combien de villes simultanément ? -> Une seule (max=1). Est-ce obligatoire d'avoir une ville pour s'inscrire ? -> Oui (min=1). La cardinalité est donc **(1,1)**
* **Côté VILLE** : Une ville peut accueillir combien d'auteurs du blog ? -> Plusieurs (max=N). Est-ce obligatoire d'avoir un auteur pour qu'une ville existe dans la base ? -> Non, on peut référencer une ville où personne n'habite encore (min=0). La cardinalité est donc **(0,N)**
* **Résultat** : `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`

### 2.2. Déterminer la relation AUTEUR — ARTICLE

Faisons de même pour les auteurs et les articles :
* **Règle** : Un article est rédigé par 1 seul auteur. Un auteur peut rédiger 0 ou plusieurs articles.
* **Côté ARTICLE** : Un article est rédigé par combien d'auteurs ? -> Un seul (max=1). Un article peut-il exister sans auteur ? -> Non, c'est obligatoire (min=1). La cardinalité est donc **(1,1)**
* **Côté AUTEUR** : Un auteur rédige combien d'articles ? -> Plusieurs (max=N). Est-ce obligatoire pour s'inscrire ? -> Non, un auteur inscrit n'a peut-être encore rien rédigé (min=0). La cardinalité est donc **(0,N)**
* **Résultat** : `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`

### 2.3. Déterminer la relation CATEGORIE — ARTICLE

À vous de jouer maintenant pour la catégorie et les articles !
* **Règle de gestion** : Un article appartient à 1 seule catégorie. Une catégorie regroupe 0 ou plusieurs articles.
* **Exercice** : Appliquez scrupuleusement la même méthode que ci-dessus pour déduire pas à pas les cardinalités des deux côtés de cette relation.

### 2.4. Observer une relation N–N (Exemple: ARTICLE — TAG)

Prenons un dernier exemple pour illustrer le cas N-N :
* **Règle** : Un article peut utiliser plusieurs tags différents (ex: #php, #web). Inversement, un tag spécifique (ex: #php) peut être utilisé par plusieurs articles différents.
* Ce cas particulier donnera toujours le résultat suivant des deux côtés, car la relation est multiple et facultative dans les deux sens :
* **Résultat** : `ARTICLE (0,N) ─── utilise ─── (0,N) TAG`
*(Note : l'entité TAG n'est pas dans votre dictionnaire, elle est donnée ici uniquement à titre d'exemple pédagogique pour comprendre le N-N).*

### 2.5. Travail à faire

Prenez le temps de déterminer formellement les règles de gestion et les cardinalités complètes pour ces 3 relations étudiées :
1. **ARTICLE — CATEGORIE**
2. **AUTEUR — ARTICLE**
3. **ARTICLE — TAG**

Présentez le résultat de votre analyse sous la forme d'un tableau clair et bien formaté :

| Relation | Règle de gestion | Cardinalité côté A | Cardinalité côté B |
| -------- | ---------------- | ------------------ | ------------------ |
| ...      | ...              | ...                | ...                |

## Livrable

Créez un document **Markdown** bien structuré contenant votre tableau d'analyse final.
Nom conseillé pour votre fichier : `relations-cardinalites.md`

## Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.141/relations-cardinalites.html' | relative_url }}"
    height="320"
    title="Résultat attendu — Relations et cardinalités">
</iframe>

## Critères de réussite

Votre formateur évaluera votre travail selon les critères suivants :
* Le verbe métier de la règle de gestion est clairement identifié et pertinent.
* Le minimum et le maximum de chaque cardinalité sont justifiés et logiquement corrects.
* La distinction entre les types de relations (1-N, N-N) a été bien comprise et respectée dans le tableau.

---

## Bilan

### Vous avez appris :
* À formuler une règle de gestion métier claire à partir d'observations.
* À déduire logiquement et à écrire mathématiquement les cardinalités (min, max) d'une relation.
* À identifier formellement la différence entre des relations 1-1, 1-N et N-N.

Dans le prochain et dernier tutoriel de cette compétence, vous assemblerez enfin tous ces concepts pour dessiner votre premier Modèle Conceptuel de Données (MCD) complet et fonctionnel !

## Glossaire

* **Règle de gestion** : phrase décrivant un lien métier concret entre deux entités.
* **Relation** : représentation visuelle de ce lien sur le schéma conceptuel.
* **Cardinalité** : nombre de participations minimum et maximum d'une occurrence à une relation.
