# UA.121.14 — Créer et utiliser des fonctions

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement d’exécution :** Node.js
**Domaine de compétence :** Construire le traitement logique

---

## 1. Objectif général de l’UA

Dans les UA précédentes, l'apprenant a construit plusieurs traitements :

```text
Variables
   ↓
Conditions
   ↓
Boucles
   ↓
Tableaux
   ↓
Algorithmes élémentaires
```

Il sait maintenant construire des traitements comme :

```text
calculer une somme
rechercher une valeur
trouver un maximum
trouver un minimum
compter des valeurs
calculer une moyenne
```

Le problème est que ces traitements sont encore écrits directement dans le programme.

L'UA.121.14 introduit les **fonctions** pour transformer ces traitements en blocs réutilisables.

La progression devient :

```text
Traitement
   ↓
Fonction
   ↓
Appel
   ↓
Paramètre
   ↓
Résultat
   ↓
Réutilisation
   ↓
Combinaison
```

---

# 2. Objectif opérationnel

À la fin de l'UA, l'apprenant doit être capable de :

* créer une fonction simple ;
* appeler une fonction ;
* transmettre une valeur à une fonction ;
* utiliser un paramètre ;
* recevoir plusieurs paramètres ;
* retourner un résultat avec `return` ;
* stocker le résultat retourné ;
* transformer un algorithme élémentaire en fonction ;
* appeler plusieurs fonctions dans un même traitement ;
* combiner les résultats de plusieurs fonctions.

L'apprenant doit comprendre :

> **Une fonction permet d'isoler un traitement pour pouvoir le réutiliser.**

---

# 3. Progression pédagogique

Je recommande **6 tutoriels**, selon la même organisation que les UA.121.12 et UA.121.13 :

```text
T.121.141
Comprendre les fonctions
        ↓
T.121.142
Créer et appeler une fonction
        ↓
T.121.143
Utiliser paramètres et retour
        ↓
T.121.144
Exercices sur les fonctions
        ↓
T.121.145
Transformer les algorithmes en fonctions
        ↓
T.121.146
Combiner plusieurs fonctions
```

La progression est :

```text
Comprendre
   ↓
Construire
   ↓
Transmettre
   ↓
Récupérer
   ↓
Réutiliser
   ↓
Combiner
```

---

# 4. Programme détaillé

## T.121.141 — Comprendre les fonctions

### Fonction dans l'UA

Premier tutoriel de découverte.

L'apprenant comprend pourquoi une fonction est utile avant d'apprendre à en construire plusieurs.

### Objectif

Comprendre une fonction comme un **bloc de traitement réutilisable**.

### Notions

* fonction ;
* traitement ;
* bloc ;
* nom de fonction ;
* appel ;
* exécution ;
* réutilisation.

### Progression

L'apprenant part d'un traitement écrit plusieurs fois :

```javascript
console.log("Bonjour");
console.log("Bonjour");
console.log("Bonjour");
```

Puis comprend l'idée :

```text
Fonction afficherBonjour
        ↓
Appeler la fonction
        ↓
Exécuter le traitement
```

Exemple :

```javascript
function afficherBonjour() {
    console.log("Bonjour");
}
```

Puis :

```javascript
afficherBonjour();
```

### Notion importante

Une fonction ne s'exécute pas simplement parce qu'elle est déclarée.

Il faut l'appeler :

```text
Déclaration
   ↓
Appel
   ↓
Exécution
```

### Résultat attendu

L'apprenant sait expliquer :

> Une fonction regroupe un traitement que l'on peut appeler plusieurs fois.

---

# T.121.142 — Créer et appeler une fonction

### Fonction dans l'UA

L'apprenant construit lui-même des fonctions simples.

### Objectif

Déclarer une fonction et l'appeler plusieurs fois.

### Notions

* `function` ;
* nom ;
* `{ }` ;
* appel ;
* plusieurs appels ;
* ordre d'exécution.

### Exemple

```javascript
function afficherBonjour() {
    console.log("Bonjour");
}

afficherBonjour();
afficherBonjour();
```

Résultat :

```text
Bonjour
Bonjour
```

### Progression

#### Fonction sans paramètre

```javascript
function afficherMessage() {
    console.log("Bienvenue");
}
```

#### Appel

```javascript
afficherMessage();
```

#### Plusieurs fonctions

```javascript
function afficherDebut() {
    console.log("Début");
}

function afficherFin() {
    console.log("Fin");
}
```

Puis :

```javascript
afficherDebut();
afficherFin();
```

### Exercices simples

* afficher un message ;
* afficher son prénom ;
* afficher un nombre ;
* afficher une information ;
* créer deux fonctions différentes ;
* appeler les fonctions dans un ordre donné.

### Résultat attendu

L'apprenant sait :

```text
déclarer une fonction
        ↓
appeler une fonction
        ↓
réutiliser la fonction
```

---

# T.121.143 — Utiliser les paramètres et le retour

### Fonction dans l'UA

C'est le tutoriel central de l'UA.

L'apprenant passe d'une fonction fixe à une fonction capable de travailler sur des données différentes.

### Objectif

Utiliser :

* paramètres ;
* arguments ;
* `return`.

### Partie A — Paramètre

Exemple :

```javascript
function afficherBonjour(prenom) {
    console.log("Bonjour " + prenom);
}
```

Appels :

```javascript
afficherBonjour("Madani");
afficherBonjour("Ali");
```

Le même traitement fonctionne avec différentes valeurs.

### Partie B — Plusieurs paramètres

```javascript
function afficherSomme(a, b) {
    console.log(a + b);
}
```

Appel :

```javascript
afficherSomme(10, 5);
```

Résultat :

```text
15
```

### Partie C — Retourner un résultat

Faire :

```javascript
function additionner(a, b) {
    return a + b;
}
```

Puis :

```javascript
let resultat = additionner(10, 5);

console.log(resultat);
```

Résultat :

```text
15
```

### Différence importante

L'apprenant doit comprendre :

```text
console.log()
```

et :

```text
return
```

ne jouent pas le même rôle.

```text
console.log()
→ affiche

return
→ retourne une valeur
```

### Partie D — Utiliser le résultat

```javascript
let somme = additionner(10, 5);
let double = somme * 2;

console.log(double);
```

Cela introduit l'idée essentielle :

```text
Entrées
   ↓
Fonction
   ↓
Traitement
   ↓
Retour
   ↓
Résultat réutilisable
```

### Résultat attendu

L'apprenant sait créer une fonction de la forme :

```text
Entrée → Traitement → Retour
```

---

# T.121.144 — Exercices sur les fonctions

### Fonction dans l'UA

Ce tutoriel consolide les notions de fonction, paramètre et `return`.

Il n'introduit pas de nouvel algorithme complexe.

### Objectif

Construire de petites fonctions réutilisables.

### Exercices

#### Exercice 1 — Fonction de somme

```javascript
additionner(10, 5)
```

Résultat :

```text
15
```

#### Exercice 2 — Fonction de différence

```javascript
soustraire(10, 5)
```

Résultat :

```text
5
```

#### Exercice 3 — Fonction de multiplication

```javascript
multiplier(4, 5)
```

Résultat :

```text
20
```

#### Exercice 4 — Fonction de majorité

```javascript
estMajeur(20)
```

Résultat :

```text
true
```

#### Exercice 5 — Fonction de nombre pair

```javascript
estPair(8)
```

Résultat :

```text
true
```

#### Exercice 6 — Fonction de maximum de deux valeurs

```javascript
trouverMaximum(12, 18)
```

Résultat :

```text
18
```

#### Exercice 7 — Fonction de moyenne

```javascript
calculerMoyenne(12, 15, 9)
```

Résultat :

```text
12
```

### Organisation des exercices

La progression doit être :

```text
Fonction simple
   ↓
Paramètre
   ↓
Deux paramètres
   ↓
Condition
   ↓
Calcul
   ↓
Retour
```

### Résultat attendu

L'apprenant commence à construire son propre **répertoire de fonctions simples**.

---

# T.121.145 — Transformer les algorithmes élémentaires en fonctions

### Fonction dans l'UA

Ce tutoriel fait le lien direct avec **UA.121.13**.

L'apprenant reprend des algorithmes déjà maîtrisés et les transforme en fonctions réutilisables.

### Objectif

Transformer un traitement existant en fonction.

### Algorithmes concernés

Les algorithmes suivants ont déjà été construits :

```text
somme
moyenne
recherche
maximum
minimum
comptage
```

Ils deviennent :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compter()
```

### Exemple 1 — Somme

Avant :

```javascript
let somme = 0;

for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i];
}
```

Après :

```javascript
function calculerSomme(nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme = somme + nombres[i];
    }

    return somme;
}
```

Appel :

```javascript
let resultat = calculerSomme([4, 7, 2, 9]);

console.log(resultat);
```

### Exemple 2 — Maximum

```javascript
function trouverMaximum(nombres) {
    let maximum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > maximum) {
            maximum = nombres[i];
        }
    }

    return maximum;
}
```

### Exemple 3 — Recherche

```javascript
function rechercher(nombres, valeur) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === valeur) {
            return true;
        }
    }

    return false;
}
```

### Exemple 4 — Minimum

```javascript
function trouverMinimum(nombres) {
    let minimum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] < minimum) {
            minimum = nombres[i];
        }
    }

    return minimum;
}
```

### Notion fondamentale

L'apprenant doit comprendre :

```text
Algorithme
   ↓
Fonction
   ↓
Réutilisation
```

### Résultat attendu

L'apprenant possède désormais un premier **répertoire de fonctions de traitement** :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
```

---

# T.121.146 — Combiner plusieurs fonctions

### Fonction dans l'UA

C'est le **tutoriel de synthèse de l'UA**.

L'apprenant ne construit plus uniquement une fonction isolée.

Il utilise plusieurs fonctions pour résoudre un même problème.

### Objectif

Construire un traitement complet à partir de plusieurs fonctions déjà créées.

### Situation

On dispose de :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Nous avons besoin de plusieurs résultats :

```text
Somme
Moyenne
Maximum
Minimum
```

Nous pouvons utiliser :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
```

### Organisation

```text
                    notes
                      ↓
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
calculerSomme()   maximum()     minimum()
        ↓
    moyenne()
        ↓
 résultat final
```

### Exemple

```javascript
function calculerSomme(nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme = somme + nombres[i];
    }

    return somme;
}

function calculerMoyenne(nombres) {
    let somme = calculerSomme(nombres);

    return somme / nombres.length;
}

function trouverMaximum(nombres) {
    let maximum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > maximum) {
            maximum = nombres[i];
        }
    }

    return maximum;
}

function trouverMinimum(nombres) {
    let minimum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] < minimum) {
            minimum = nombres[i];
        }
    }

    return minimum;
}
```

Puis :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);

console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
```

### Résultat attendu

```text
Somme : 76
Moyenne : 12.666...
Maximum : 17
Minimum : 8
```

### Chaînage

Cette étape introduit une première forme de composition :

```text
calculerSomme()
       ↓
calculerMoyenne()
```

La sortie d'une fonction devient une donnée utilisée par une autre fonction.

C'est une préparation importante pour **UA.121.17 — Combiner plusieurs traitements**.

---

# 5. Vue synthétique

| Tutoriel      | Fonction   | Notions principales             | Niveau de traitement     |
| ------------- | ---------- | ------------------------------- | ------------------------ |
| **T.121.141** | Comprendre | Fonction, bloc, appel           | Découverte               |
| **T.121.142** | Construire | `function`, appel               | Fonction simple          |
| **T.121.143** | Paramétrer | paramètres, arguments, `return` | Fonction réutilisable    |
| **T.121.144** | S'exercer  | calculs, conditions, retour     | Exercices                |
| **T.121.145** | Réutiliser | algorithmes → fonctions         | Algorithmes élémentaires |
| **T.121.146** | Combiner   | appels multiples, composition   | Synthèse                 |

---

# 6. Progression détaillée

```text
               CRÉER ET UTILISER DES FONCTIONS
                             │
                             ▼
                T.121.141 — Comprendre
                             │
                fonction / traitement
                             │
                             ▼
                T.121.142 — Construire
                             │
                  déclaration / appel
                             │
                             ▼
                T.121.143 — Paramétrer
                             │
                 paramètres / return
                             │
                             ▼
                T.121.144 — Exercices
                             │
              fonctions de calcul simples
                             │
                             ▼
                T.121.145 — Réutiliser
                             │
             algorithmes → fonctions
                             │
                             ▼
                T.121.146 — Combiner
                             │
                   plusieurs fonctions
                             │
                             ▼
                    traitement complet
```

---

# 7. Répertoire de fonctions construit dans l'UA

À la fin de l'UA, l'apprenant commence à constituer un petit **répertoire de traitements réutilisables** :

```text
additionner()
soustraire()
multiplier()
estMajeur()
estPair()
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
```

La distinction pédagogique avec les UA précédentes devient :

```text
UA.121.12
Contrôler l'exécution
        ↓
conditions
boucles
```

```text
UA.121.13
Manipuler les tableaux
        ↓
parcours
recherche
maximum
minimum
```

```text
UA.121.14
Créer et utiliser des fonctions
        ↓
isoler
nommer
paramétrer
retourner
réutiliser
combiner
```

---

# 8. Règle pédagogique de l'UA.121.14

La règle fondamentale peut être formulée ainsi :

> **Une fonction n'est pas une nouvelle manière d'écrire du code : c'est un moyen d'isoler un traitement déjà compris afin de pouvoir le réutiliser.**

La progression doit donc rester :

```text
Comprendre le traitement
        ↓
Construire le traitement
        ↓
Nommer le traitement
        ↓
Transformer en fonction
        ↓
Ajouter des paramètres
        ↓
Retourner un résultat
        ↓
Réutiliser
        ↓
Combiner
```

Cette UA prépare directement **UA.121.15 — Résoudre des problèmes algorithmiques simples**, où l'apprenant pourra choisir plusieurs fonctions et traitements élémentaires pour construire une solution complète.
