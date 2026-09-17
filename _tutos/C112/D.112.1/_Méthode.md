# Méthode progressive pour découvrir les entités à partir d’un dictionnaire de données

## 1. Objectif de la méthode

Avant de construire un MCD, l’apprenant doit être capable d’identifier les **entités** présentes dans les données.

Le problème rencontré chez les débutants est qu’ils confondent facilement :

* une **entité** ;
* un **attribut** ;
* une **valeur** ;
* une information qui devrait être séparée dans une autre entité.

Par exemple, devant :

```text
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

un débutant peut considérer :

```text
nom_ville
```

comme un simple attribut de l’auteur.

Pourtant, `Ville` peut correspondre à une information qui mérite d’être gérée indépendamment.

L’objectif de cette méthode est donc de lui apprendre à ne pas chercher les entités uniquement à partir des noms des colonnes, mais à **observer la structure et le comportement des données**.

La démarche est la suivante :

```text
Dictionnaire de données
        ↓
Identifier les données calculables
        ↓
Rechercher les identifiants
        ↓
Rechercher les dépendances fonctionnelles
        ↓
Observer les répétitions
        ↓
Détecter les anomalies possibles
        ↓
Créer les nouveaux identifiants
        ↓
Regrouper les données dépendantes
        ↓
Faire apparaître les entités
        ↓
Préparer le MCD
```

---

# 2. Les définitions à enseigner avant la méthode

Avant de demander à l’apprenant d'appliquer la méthode, il faut lui donner quelques définitions simples.

## 2.1. Une donnée

Une donnée est une information que l’application doit connaître.

Exemples :

```text
titre_article
contenu_article
nom_auteur
email_auteur
nom_ville
nom_categorie
```

---

## 2.2. Un attribut

Un attribut est une information qui décrit une chose que l’on souhaite gérer.

Par exemple, un auteur peut être décrit par :

```text
nom_auteur
prenom_auteur
email_auteur
```

Une ville peut être décrite par :

```text
nom_ville
```

Un article peut être décrit par :

```text
titre_article
contenu_article
date_publication
statut_article
image_article
```

---

## 2.3. Une entité

Une entité représente une **chose identifiable que l’application doit gérer**.

Exemples :

```text
Article
Auteur
Ville
Catégorie
```

Une entité possède généralement plusieurs informations qui la décrivent.

Par exemple :

```text
Auteur
 ├── nom
 ├── prénom
 └── email
```

L’objectif de la méthode est justement de permettre à l’apprenant de passer de :

```text
nom_auteur
prenom_auteur
email_auteur
nom_ville
```

à :

```text
Auteur
Ville
```

---

## 2.4. Un identifiant

Un identifiant permet de reconnaître **une occurrence précise d’une entité**.

Par exemple :

```text
id_article
```

permet d’identifier un article.

```text
id_ville
```

permet d’identifier une ville.

On peut donc écrire :

```text
id_article → ...
id_ville → ...
```

L’apprenant doit progressivement comprendre une idée essentielle :

> Quand nous arrivons à identifier une chose de manière unique, nous commençons à faire apparaître une entité.

---

## 2.5. Une dépendance fonctionnelle

Une dépendance fonctionnelle signifie simplement :

> Une valeur permet de déterminer une autre valeur.

On écrit :

```text
A → B
```

Cela signifie :

> Si je connais A, je peux déterminer une seule valeur de B.

Exemple :

```text
id_ville → nom_ville
```

Cela signifie :

> Si je connais `id_ville`, je connais une seule valeur de `nom_ville`.

Par exemple :

```text
id_ville = 12 → nom_ville = Tanger
```

Mais l’inverse n’est pas forcément vrai :

```text
nom_ville → id_ville
```

n'est pas nécessairement une dépendance fonctionnelle.

Pourquoi ?

Parce qu’un même nom peut être utilisé par plusieurs villes.

L’apprenant doit donc apprendre à se poser la question :

> « Est-ce que cette information permet de retrouver une seule autre information ? »

---

## 2.6. Une donnée calculable

Certaines données ne doivent pas être enregistrées car elles peuvent être calculées à partir d’autres données.

Par exemple :

```text
duree_lecture
```

peut être calculée à partir de la taille du contenu ou d’une règle définie par l’application.

Dans ce cas :

```text
duree_lecture = donnée calculable
```

Elle n’a pas besoin d’être stockée dans le dictionnaire final des données persistantes.

Pour la méthode, l’apprenant doit donc commencer par distinguer :

```text
Données à stocker
Données calculables
```

---

# 3. Le principe pédagogique central

La méthode repose sur une idée simple :

> **Une entité peut être découverte en recherchant les données qui dépendent d’un même identifiant.**

Mais le débutant ne voit pas toujours immédiatement les identifiants.

C’est pourquoi la méthode utilise deux chemins complémentaires.

### Chemin 1 : l’identifiant est visible

Par exemple :

```text
id_article
```

L’apprenant peut immédiatement rechercher les données qui dépendent de cet identifiant.

```text
id_article
    ↓
titre_article
contenu_article
date_publication
statut_article
image_article
...
```

Il commence alors à découvrir :

```text
Article
```

### Chemin 2 : l’identifiant n’est pas visible

Le dictionnaire contient :

```text
nom_ville
```

mais aucun :

```text
id_ville
```

L’apprenant doit alors utiliser un autre indice :

> **La répétition des valeurs.**

C’est cette deuxième voie qui permet de découvrir des entités comme `Ville`, `Catégorie`, etc.

---

# 4. Étape 1 — Partir du dictionnaire de données

Prenons le dictionnaire suivant :

```text
titre_article
contenu_article
date_publication
statut_article
image_article

nom_auteur
prenom_auteur
email_auteur
nom_ville

nom_categorie

duree_lecture
```

À ce stade, nous ne demandons pas encore :

> « Quelles sont les entités ? »

La question est :

> « Que représentent ces données et quelles relations existent entre elles ? »

---

# 5. Étape 2 — Identifier les données calculables

On commence par retirer de notre raisonnement les données qui n’ont pas besoin d’être stockées.

Ici :

```text
duree_lecture
```

est considérée comme une donnée calculable.

Elle n’est donc pas utilisée pour découvrir les entités.

Il reste :

```text
titre_article
contenu_article
date_publication
statut_article
image_article

nom_auteur
prenom_auteur
email_auteur
nom_ville

nom_categorie
```

---

# 6. Étape 3 — Rechercher les identifiants

On demande ensuite à l’apprenant :

> « Pour chaque groupe de données, comment pouvons-nous identifier une seule occurrence ? »

Pour les articles, il peut découvrir qu’il faut ajouter :

```text
id_article
```

On obtient alors :

```text
id_article
    ↓
titre_article
contenu_article
date_publication
statut_article
image_article
nom_auteur
prenom_auteur
email_auteur
nom_ville
nom_categorie
```

On peut écrire cette dépendance :

```text
id_article →
    titre_article,
    contenu_article,
    date_publication,
    statut_article,
    image_article,
    nom_auteur,
    prenom_auteur,
    email_auteur,
    nom_ville,
    nom_categorie
```

À ce moment-là, l’apprenant commence à voir apparaître une première entité :

```text
Article
```

Pourquoi ?

Parce qu’un identifiant :

```text
id_article
```

permet de regrouper les informations qui décrivent un même article.

---

# 7. Étape 4 — Rechercher les autres dépendances fonctionnelles

On continue à examiner les données.

Supposons que l’on considère que l’adresse email d’un auteur est unique.

On peut alors écrire :

```text
email_auteur →
    nom_auteur,
    prenom_auteur,
    nom_ville
```

Cela signifie :

> Quand je connais l’email d’un auteur, je peux retrouver son nom, son prénom et sa ville.

Nous avons donc un deuxième groupe logique :

```text
Auteur
```

avec :

```text
email_auteur
nom_auteur
prenom_auteur
nom_ville
```

---

# 8. Étape 5 — Apprendre à détecter une entité grâce à la répétition

C’est ici que se trouve le point pédagogique central de la méthode.

Le débutant peut ne pas voir immédiatement que :

```text
nom_ville
```

correspond à une entité.

On lui fait alors observer les données.

Imaginons :

```text
Article 1 → auteur = Madani Ali → ville = Tanger
Article 2 → auteur = Sara Amrani → ville = Tanger
Article 3 → auteur = Youssef Karim → ville = Rabat
Article 4 → auteur = Nadia Idrissi → ville = Tanger
```

L’apprenant remarque :

```text
Tanger
Tanger
Rabat
Tanger
```

La valeur `Tanger` apparaît plusieurs fois.

On lui pose alors une question :

> « Est-ce normal de répéter la même information plusieurs fois ? »

Puis :

> « Que se passe-t-il si le nom de la ville doit être modifié ? »

Par exemple :

```text
Tanger
Tanger
Tanger
```

Si nous devons corriger ou modifier cette information, plusieurs enregistrements doivent être modifiés.

Cela crée une **anomalie de modification**.

L’objectif pédagogique n’est pas encore de faire apprendre toutes les formes normales à l’apprenant.

On veut simplement lui faire comprendre :

> « Une information répétée peut indiquer qu’elle devrait être gérée séparément. »

---

# 9. Étape 6 — Chercher la chose qui est répétée

On demande ensuite :

> « Qu'est-ce qui est réellement répété ? »

Ce n’est pas :

```text
Tanger
```

qui nous intéresse.

C’est la chose représentée par cette valeur :

```text
Ville
```

Nous pouvons alors dire :

> « Si plusieurs auteurs utilisent la même ville, la ville peut être gérée comme une chose indépendante. »

Nous commençons donc à faire apparaître :

```text
Ville
```

---

# 10. Étape 7 — Créer un nouvel identifiant

Nous devons maintenant pouvoir identifier chaque ville.

Nous créons :

```text
id_ville
```

et nous recherchons les données qui dépendent de cet identifiant.

Nous obtenons :

```text
id_ville → nom_ville
```

Exemple :

```text
id_ville = 1 → Tanger
id_ville = 2 → Rabat
id_ville = 3 → Casablanca
```

L’apprenant comprend alors un mécanisme important :

```text
Une nouvelle chose
        ↓
Un identifiant
        ↓
Les données qui dépendent de cet identifiant
        ↓
Une nouvelle entité
```

Nous avons maintenant :

```text
Ville
 ├── id_ville
 └── nom_ville
```

---

# 11. Étape 8 — Remplacer l'information répétée par l'identifiant

Avant la séparation, nous avions :

```text
Auteur
 ├── email_auteur
 ├── nom_auteur
 ├── prenom_auteur
 └── nom_ville
```

Nous avons découvert :

```text
Ville
 ├── id_ville
 └── nom_ville
```

Nous ne conservons donc plus `nom_ville` dans les données de l’auteur.

Nous le remplaçons par :

```text
id_ville
```

Nous obtenons :

```text
Auteur
 ├── email_auteur
 ├── nom_auteur
 ├── prenom_auteur
 └── id_ville
```

Et :

```text
Ville
 ├── id_ville
 └── nom_ville
```

L’idée importante à transmettre à l’apprenant est :

> « Quand une donnée devient indépendante, on ne répète plus sa valeur dans les autres données : on conserve son identifiant. »

---

# 12. Étape 9 — Recommencer l'observation

La méthode n’est pas terminée.

Après avoir découvert `Ville`, on recommence l’observation sur les autres données.

Dans `Article`, nous avons :

```text
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
email_auteur
nom_ville
nom_categorie
```

Nous avons déjà découvert que :

```text
nom_ville
```

doit être remplacé par :

```text
id_ville
```

Nous obtenons :

```text
id_article →
    titre_article,
    contenu_article,
    date_publication,
    statut_article,
    image_article,
    email_auteur,
    id_ville,
    nom_categorie
```

---

# 13. Étape 10 — Rechercher une nouvelle répétition

Nous observons maintenant :

```text
nom_categorie
```

Supposons que plusieurs articles aient :

```text
Actualité
Actualité
Tutoriel
Actualité
Tutoriel
```

Nous observons encore une répétition.

On pose exactement les mêmes questions :

> « Est-ce que cette information est répétée ? »

> « Est-ce que sa modification pourrait nécessiter plusieurs modifications ? »

> « Est-ce que ce que nous manipulons correspond à une chose indépendante ? »

Ici, la chose indépendante est :

```text
Catégorie
```

Nous créons donc :

```text
id_categorie
```

puis :

```text
id_categorie → nom_categorie
```

Nous avons alors :

```text
Catégorie
 ├── id_categorie
 └── nom_categorie
```

Et dans `Article` :

```text
id_article →
    titre_article,
    contenu_article,
    date_publication,
    statut_article,
    image_article,
    email_auteur,
    id_ville,
    id_categorie
```

---

# 14. Le résultat final

Après plusieurs passages, nous arrivons progressivement à des groupes cohérents.

### Article

```text
id_article
titre_article
contenu_article
date_publication
statut_article
image_article
email_auteur
id_categorie
```

### Auteur

```text
email_auteur
nom_auteur
prenom_auteur
id_ville
```

### Ville

```text
id_ville
nom_ville
```

### Catégorie

```text
id_categorie
nom_categorie
```

Nous avons donc fait apparaître les entités :

```text
Article
Auteur
Ville
Catégorie
```

---

# 15. Le rôle des dépendances fonctionnelles dans la découverte

Les dépendances fonctionnelles jouent ici un rôle très important.

Elles permettent de répondre à la question :

> « Quelles informations décrivent la même chose ? »

Par exemple :

```text
id_ville → nom_ville
```

nous indique que :

```text
id_ville
```

identifie une ville et que :

```text
nom_ville
```

est une information qui décrit cette ville.

De la même manière :

```text
id_categorie → nom_categorie
```

nous indique :

```text
id_categorie
        ↓
Catégorie
        ↓
nom_categorie
```

Et :

```text
id_article →
    titre_article
    contenu_article
    date_publication
    statut_article
    image_article
    email_auteur
    id_categorie
```

nous permet de regrouper les informations qui décrivent un article.

---

# 16. Une règle pédagogique importante : l'identifiant facilite la découverte

Il faut insister auprès de l’apprenant sur cette idée :

> **Plus nous trouvons d'identifiants, plus il devient facile de découvrir les entités.**

Par exemple :

```text
id_article
```

nous permet de découvrir :

```text
Article
```

Puis :

```text
id_ville
```

nous permet de découvrir :

```text
Ville
```

Puis :

```text
id_categorie
```

nous permet de découvrir :

```text
Catégorie
```

L’apprenant doit progressivement prendre l’habitude de se demander :

> « Quelle donnée peut identifier une seule occurrence ? »

---

# 17. Que faire lorsqu’un identifiant n’apparaît pas dans le dictionnaire ?

C'est précisément là que la règle de répétition devient utile.

Par exemple, nous avons :

```text
nom_ville
```

mais pas :

```text
id_ville
```

L’apprenant peut suivre la chaîne suivante :

```text
nom_ville
    ↓
La valeur est-elle répétée ?
    ↓
Oui
    ↓
Pourquoi la répétition pose-t-elle problème ?
    ↓
Risque de modification de plusieurs lignes
    ↓
L'information peut-elle être gérée indépendamment ?
    ↓
Oui
    ↓
Créer l'identifiant
    ↓
id_ville
    ↓
id_ville → nom_ville
    ↓
Découverte de l'entité Ville
```

Cette chaîne de raisonnement est beaucoup plus accessible à un débutant que :

> « Normalisez votre relation jusqu'à la 3NF et identifiez les dépendances transitives. »

---

# 18. La boucle complète de la méthode

La méthode peut être présentée aux apprenants comme une boucle.

```text
1. Observer les données
        ↓
2. Supprimer les données calculables
        ↓
3. Chercher un identifiant
        ↓
4. Chercher les données qui dépendent de cet identifiant
        ↓
5. Observer les valeurs répétées
        ↓
6. Rechercher la chose représentée par cette répétition
        ↓
7. Créer un identifiant pour cette chose
        ↓
8. Écrire sa dépendance fonctionnelle
        ↓
9. Remplacer la valeur répétée par l'identifiant
        ↓
10. Recommencer l'observation
        ↓
11. Arrêter lorsque les données sont regroupées
    sans répétition inutile
```

---

# 19. Les deux questions fondamentales à apprendre par cœur

Pour un niveau N1, la méthode peut être résumée par deux questions.

### Question 1 — Quel est l'identifiant ?

> « Comment reconnaître une seule occurrence de cette chose ? »

Exemple :

```text
id_ville
```

### Question 2 — Quelles données dépendent de cet identifiant ?

Exemple :

```text
id_ville → nom_ville
```

Ces deux questions permettent progressivement de construire les groupes de données qui correspondent aux entités.

---

# 20. La règle de répétition

La répétition devient un **signal d’alerte**, pas une preuve automatique.

On peut enseigner à l’apprenant :

> « Une valeur qui se répète doit nous faire poser une question : est-ce que l'information devrait être gérée séparément ? »

Exemple :

```text
Tanger
Tanger
Tanger
Rabat
Tanger
```

La répétition de `Tanger` nous pousse à examiner :

```text
Ville
```

Puis à rechercher :

```text
id_ville
```

et :

```text
id_ville → nom_ville
```

Il est important de préciser pédagogiquement que **toute répétition ne signifie pas automatiquement qu’il faut créer une nouvelle entité**. La répétition est un indice qui déclenche une analyse.

---

# 21. La règle de modification

Pour aider le débutant à comprendre pourquoi la répétition pose problème, on peut utiliser une situation très concrète.

Supposons :

```text
Auteur
-----------------------------------
Madani Ali     Tanger
Sara Amrani    Tanger
Youssef Karim  Tanger
```

Si le nom de la ville doit être corrigé, plusieurs lignes contiennent la même information.

L'apprenant doit alors comprendre le problème :

```text
Une même information
        ↓
répétée plusieurs fois
        ↓
plusieurs lignes à modifier
        ↓
risque d'incohérence
```

La solution pédagogique consiste alors à centraliser cette information :

```text
Ville
----------------
id_ville | nom_ville
1        | Tanger
```

Puis à conserver uniquement :

```text
id_ville
```

dans les données de l’auteur.

---

# 22. Une règle importante sur les identifiants

Pour éviter une confusion chez les débutants, il est préférable de distinguer :

### Identifiant technique

```text
id_auteur
id_article
id_ville
id_categorie
```

### Identifiant métier éventuellement unique

Par exemple :

```text
email_auteur
```

peut être considéré comme identifiant uniquement si le système garantit réellement qu’un email correspond à un seul auteur.

Pour l’enseignement N1, on peut donc privilégier :

```text
id_auteur
```

et conserver :

```text
email_auteur
```

comme simple attribut pouvant éventuellement être unique.

Le modèle devient alors plus clair :

```text
Auteur
    id_auteur
    nom_auteur
    prenom_auteur
    email_auteur
    id_ville
```

La dépendance devient :

```text
id_auteur →
    nom_auteur,
    prenom_auteur,
    email_auteur,
    id_ville
```

Cette façon de faire est particulièrement intéressante pédagogiquement car elle montre que :

> **l'identifiant sert à identifier l'entité ; les autres données servent à la décrire.**

---

# 23. Le résultat obtenu avant le MCD

À cette étape, l’objectif n’est pas encore de dessiner le MCD.

L’apprenant doit d’abord obtenir une structure logique claire :

```text
Article
    id_article
    titre_article
    contenu_article
    date_publication
    statut_article
    image_article
    id_auteur
    id_categorie

Auteur
    id_auteur
    nom_auteur
    prenom_auteur
    email_auteur
    id_ville

Ville
    id_ville
    nom_ville

Categorie
    id_categorie
    nom_categorie
```

À partir de cette structure, le passage au MCD devient beaucoup plus simple.

L’apprenant possède déjà :

* les entités ;
* leurs identifiants ;
* leurs attributs ;
* des premières indications sur les liens entre les données.

Le MCD vient ensuite formaliser les relations entre ces entités.

---

# 24. La méthode en une phrase

La méthode peut être résumée ainsi :

> **Observer les données → trouver les identifiants → trouver les dépendances → repérer les répétitions → isoler les informations indépendantes → créer leurs identifiants → remplacer les valeurs répétées par les identifiants → recommencer jusqu'à obtenir des groupes de données cohérents.**

---

# 25. La méthode simplifiée pour l'apprenant N1

Pour une utilisation en salle de formation, on peut même réduire la méthode à cinq questions.

```text
1. Cette donnée est-elle calculable ?
       ↓
   Oui → ne pas la stocker
   Non → continuer

2. Quel identifiant permet d'identifier une occurrence ?
       ↓

3. Quelles données dépendent de cet identifiant ?
       ↓

4. Est-ce qu'une donnée est répétée ?
       ↓
   Oui → chercher si elle représente une chose indépendante

5. Si elle représente une chose indépendante :
       ↓
   créer son identifiant
       ↓
   créer son groupe de données
       ↓
   remplacer la valeur répétée par l'identifiant
       ↓
   recommencer
```

---

# 26. Formulation pédagogique à transmettre aux apprenants

Tu peux présenter la méthode avec cette consigne :

> **Ne cherchez pas directement les entités.**
>
> Commencez par observer les données.
>
> Cherchez d'abord les identifiants.
>
> Pour chaque identifiant, cherchez les données qu'il permet de déterminer.
>
> Ensuite, observez les répétitions.
>
> Lorsqu'une information se répète, demandez-vous si elle représente une chose indépendante.
>
> Si c'est le cas, créez un identifiant pour cette chose, regroupez les données qui dépendent de cet identifiant, puis remplacez les valeurs répétées par cet identifiant.
>
> Recommencez jusqu'à obtenir des groupes de données cohérents et sans répétition inutile.
>
> **Chaque groupe obtenu correspond ensuite à une entité que nous pourrons utiliser pour construire le MCD.**

---

# 27. Le principe pédagogique à retenir

La force de cette méthode est qu'elle transforme la découverte des entités en une **suite de raisonnements observables** :

```text
Je vois une donnée
      ↓
Je cherche son rôle
      ↓
Je cherche son identifiant
      ↓
Je cherche ses dépendances
      ↓
Je remarque une répétition
      ↓
Je cherche ce qui est répété
      ↓
Je donne un identifiant à cette chose
      ↓
Je regroupe ses informations
      ↓
Je découvre une entité
```

Ainsi, l'apprenant ne doit plus « deviner » que `Ville` est une entité.

Il arrive à `Ville` par le raisonnement :

```text
nom_ville
   ↓
valeurs répétées
   ↓
répétition problématique
   ↓
information indépendante
   ↓
création de id_ville
   ↓
id_ville → nom_ville
   ↓
Ville
```

C'est précisément ce raisonnement que l'on cherche à installer avant de passer à la construction du MCD.
