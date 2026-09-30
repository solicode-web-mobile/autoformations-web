# UA.121.17 — Combiner plusieurs traitements

**Niveau :** N1 — Débutant
**Support technique :** JavaScript pur
**Environnement d’exécution :** Node.js
**Domaine de compétence :** Construire le traitement logique

---

## 1. Position de l’UA dans le parcours

Cette UA constitue la dernière étape du socle N1.

L’apprenant a déjà appris :

```text
Variables
   ↓
Entrées / Sorties
   ↓
Conditions
   ↓
Boucles
   ↓
Tableaux
   ↓
Algorithmes élémentaires
   ↓
Fonctions
   ↓
Résolution de problèmes
   ↓
Tri
```

Il sait maintenant construire des traitements isolés :

```text
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterValidees()
trier()
```

Le problème est maintenant différent :

> **Comment construire un traitement complet lorsqu’un problème contient plusieurs sous-problèmes ?**

L’UA.121.17 introduit donc une première méthode de conception algorithmique :

```text
Comprendre
    ↓
Décomposer
    ↓
Définir les entrées et sorties
    ↓
Choisir les traitements
    ↓
Construire
    ↓
Chaîner
    ↓
Tester
    ↓
Vérifier
```

---

# 2. Objectif général de l’UA

À partir d’un problème algorithmique simple mais composé de plusieurs traitements, l’apprenant doit être capable de :

* identifier le problème global ;
* le découper en sous-problèmes ;
* donner une responsabilité claire à chaque sous-traitement ;
* identifier les entrées de chaque traitement ;
* identifier les sorties de chaque traitement ;
* réutiliser des fonctions et algorithmes déjà construits ;
* organiser l’ordre d’exécution ;
* faire passer un résultat d’un traitement au suivant ;
* tester chaque traitement séparément ;
* tester ensuite le traitement complet.

---

# 3. Notion centrale : la décomposition

La décomposition consiste à transformer :

```text
Un problème global
```

en :

```text
plusieurs problèmes plus petits.
```

Exemple :

> Analyser les résultats d’un groupe et produire une appréciation.

Le problème global peut être décomposé en :

```text
Analyser les résultats
        ↓
Calculer la moyenne
        ↓
Trouver la meilleure note
        ↓
Compter les notes validées
        ↓
Déterminer l'appréciation
```

Chaque étape possède une responsabilité claire.

---

# 4. Notion centrale : le chaînage

Les traitements peuvent ensuite être organisés.

Exemple :

```text
notes
  ↓
calculerMoyenne()
  ↓
moyenne
  ↓
determinerAppreciation()
  ↓
appreciation
```

Le résultat d’un traitement devient l’entrée d’un autre.

On obtient :

```text id="n7k2fd"
Traitement A
    ↓
Résultat A
    ↓
Traitement B
    ↓
Résultat B
    ↓
Traitement C
    ↓
Résultat final
```

Il ne s’agit donc plus seulement d’appeler plusieurs fonctions.

Il faut comprendre **la dépendance entre les traitements**.

---

# 5. Progression pédagogique de l’UA

Pour rester cohérent avec les UA précédentes, je recommande **6 tutoriels** :

```text id="s0v2qa"
T.121.171
Comprendre la décomposition d'un problème
        ↓
T.121.172
Définir les entrées et sorties des traitements
        ↓
T.121.173
Construire les sous-traitements
        ↓
T.121.174
Exercices de décomposition
        ↓
T.121.175
Construire et chaîner plusieurs traitements
        ↓
T.121.176
Algorithme de synthèse : construire un traitement complet
```

La progression est :

```text
Comprendre
   ↓
Décomposer
   ↓
Formaliser
   ↓
Construire
   ↓
Chaîner
   ↓
Réaliser
```

---

# 6. T.121.171 — Comprendre la décomposition d’un problème

### Fonction dans l’UA

Premier tutoriel de découverte.

L’apprenant doit comprendre pourquoi un problème complexe peut être divisé en plusieurs traitements.

### Objectif

Identifier :

* problème global ;
* sous-problème ;
* traitement ;
* responsabilité.

### Exemple

Problème :

> Pour une liste de notes, calculer la moyenne, trouver la meilleure note et produire une appréciation.

Au lieu de construire directement un grand programme :

```text
tout faire dans le même bloc
```

on découpe :

```text
Problème global
      ↓
Calculer la moyenne
      ↓
Trouver la meilleure note
      ↓
Déterminer l'appréciation
```

### Règle

Chaque sous-problème doit avoir un rôle clair.

Exemple :

```text
calculerMoyenne()
→ calculer uniquement la moyenne

trouverMaximum()
→ trouver uniquement le maximum

determinerAppreciation()
→ produire uniquement l'appréciation
```

### Résultat attendu

L’apprenant comprend :

> Décomposer, c’est diviser un problème en traitements plus petits et plus faciles à construire.

---

# 7. T.121.172 — Définir les entrées et sorties des traitements

### Fonction dans l’UA

Après avoir découpé le problème, l’apprenant doit déterminer ce que chaque traitement **reçoit** et ce qu’il **produit**.

### Objectif

Décrire chaque traitement sous la forme :

```text
Entrées
   ↓
Traitement
   ↓
Sortie
```

### Exemple 1

```text
Entrée :
[12, 15, 8, 17]

Traitement :
calculer la moyenne

Sortie :
13
```

### Exemple 2

```text
Entrée :
13

Traitement :
déterminer le niveau

Sortie :
"Validé"
```

### Exemple 3

```text
Entrée :
[12, 15, 8, 17]

Traitement :
trouver le maximum

Sortie :
17
```

### Dépendance

L’apprenant découvre :

```text
notes
  ↓
calculerMoyenne()
  ↓
moyenne
  ↓
determinerNiveau()
  ↓
niveau
```

La sortie d’un traitement peut devenir l’entrée d’un autre.

### Résultat attendu

L’apprenant sait décrire les traitements sans encore coder tout le programme.

---

# 8. T.121.173 — Construire les sous-traitements

### Fonction dans l’UA

L’apprenant passe à la construction des traitements séparément.

### Objectif

Construire chaque sous-traitement indépendamment avant de les réunir.

### Exemple

Problème :

> Analyser les notes d’un groupe.

### Sous-traitement 1

```text
calculerSomme(notes)
```

### Sous-traitement 2

```text
calculerMoyenne(notes)
```

### Sous-traitement 3

```text
trouverMaximum(notes)
```

### Sous-traitement 4

```text
compterValidees(notes)
```

### Sous-traitement 5

```text
determinerAppreciation(moyenne)
```

### Méthode

Pour chaque traitement :

```text
1. Définir son rôle.
2. Définir ses entrées.
3. Définir sa sortie.
4. Construire la fonction.
5. Tester la fonction.
```

### Exemple

```javascript
function determinerAppreciation(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    }

    if (moyenne >= 10) {
        return "Validé";
    }

    return "Non validé";
}
```

Test :

```javascript
console.log(determinerAppreciation(14));
```

Résultat :

```text
Validé
```

### Résultat attendu

L’apprenant sait construire et tester chaque traitement **avant le chaînage**.

---

# 9. T.121.174 — Exercices de décomposition

### Fonction dans l’UA

Ce tutoriel permet de s’entraîner à décomposer un problème sans donner immédiatement la solution.

### Objectif

Pour chaque problème, identifier :

```text
Problème global
       ↓
Sous-problèmes
       ↓
Entrées
       ↓
Sorties
```

### Exercice 1 — Résultats d’un apprenant

Données :

```text
notes
```

Résultats :

```text
moyenne
minimum
maximum
validation
```

L’apprenant doit proposer les traitements nécessaires.

---

### Exercice 2 — Analyse d’une liste de nombres

Données :

```text
nombres
```

Résultats :

```text
somme
moyenne
pairs
maximum
minimum
```

L’apprenant doit découper le problème.

---

### Exercice 3 — Prix d’une commande

Données :

```text
prix
quantité
```

Le programme doit :

* calculer le total ;
* calculer une remise ;
* calculer le prix final.

Décomposition possible :

```text
calculerTotal()
        ↓
calculerRemise()
        ↓
calculerPrixFinal()
```

---

### Exercice 4 — Résultat d’une formation

Données :

```text
notes
```

Le programme doit :

* calculer la moyenne ;
* vérifier la validation ;
* déterminer une appréciation.

L’apprenant doit identifier les dépendances.

---

### Exercice 5 — Analyse d’une collection

Données :

```text
[12, 5, 18, 7, 20, 10]
```

Le programme doit :

* compter les valeurs ;
* calculer la moyenne ;
* rechercher le maximum ;
* rechercher le minimum ;
* compter les valeurs supérieures à 10.

### Résultat attendu

L’apprenant produit pour chaque exercice un schéma :

```text
Problème global
      ↓
Traitement A
      ↓
Traitement B
      ↓
Traitement C
```

---

# 10. T.121.175 — Construire et chaîner plusieurs traitements

### Fonction dans l’UA

C’est le tutoriel central consacré au **chaînage**.

### Objectif

Construire plusieurs fonctions puis organiser leurs dépendances.

### Exemple

On dispose de :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Nous voulons obtenir une appréciation.

### Étape 1 — Calculer la moyenne

```text
notes
  ↓
calculerMoyenne()
  ↓
moyenne
```

### Étape 2 — Déterminer le niveau

```text
moyenne
  ↓
determinerNiveau()
  ↓
niveau
```

### Chaînage complet

```text
notes
  ↓
calculerMoyenne()
  ↓
12.67
  ↓
determinerNiveau()
  ↓
"Validé"
```

### Exemple JavaScript

```javascript
function calculerMoyenne(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }

    return somme / notes.length;
}

function determinerNiveau(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    }

    if (moyenne >= 10) {
        return "Validé";
    }

    return "Non validé";
}

let notes = [12, 15, 8, 17, 10, 14];

let moyenne = calculerMoyenne(notes);
let niveau = determinerNiveau(moyenne);

console.log("Moyenne :", moyenne);
console.log("Niveau :", niveau);
```

### Résultat

```text
Moyenne : 12.666...
Niveau : Validé
```

### Deuxième exemple : plusieurs branches

```text
notes
 ├── calculerMoyenne()
 │       ↓
 │    moyenne
 │       ↓
 │  determinerNiveau()
 │       ↓
 │   appréciation
 │
 ├── trouverMaximum()
 │       ↓
 │   meilleure note
 │
 └── trouverMinimum()
         ↓
      plus petite note
```

Ici, plusieurs traitements utilisent la même entrée.

### Résultat attendu

L’apprenant comprend la différence entre :

```text
Plusieurs fonctions indépendantes
```

et :

```text
Fonctions dépendantes
```

---

# 11. T.121.176 — Algorithme de synthèse : construire un traitement complet

### Fonction dans l’UA

C’est le projet algorithmique final de l’UA. L’apprenant doit partir d’un problème global, le décomposer, construire les fonctions nécessaires, puis les chaîner.

### Situation

On veut analyser les résultats d’un groupe.

Données :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Le programme doit produire :

```text
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Moyenne validée
Appréciation
```

### Étape 1 — Identifier le problème

```text
Analyser une collection de notes.
```

### Étape 2 — Identifier les données

```text
notes
```

### Étape 3 — Identifier les résultats

```text
nombre
somme
moyenne
maximum
minimum
notes validées
moyenne validée
appréciation
```

### Étape 4 — Décomposer

Le problème devient :

```text
Analyser les notes
       │
       ├── compterNotes()
       │
       ├── calculerSomme()
       │
       ├── calculerMoyenne()
       │
       ├── trouverMaximum()
       │
       ├── trouverMinimum()
       │
       ├── compterValidees()
       │
       ├── calculerMoyenneValidees()
       │
       └── determinerAppreciation()
```

### Étape 5 — Identifier les dépendances

Certaines fonctions utilisent directement les notes :

```text
notes
 ├── calculerSomme()
 ├── trouverMaximum()
 ├── trouverMinimum()
 └── compterValidees()
```

Mais certaines fonctions dépendent d’un résultat précédent :

```text
notes
  ↓
calculerMoyenne()
  ↓
moyenne
  ↓
determinerAppreciation()
```

Et :

```text
notes
  ↓
notes validées
  ↓
calculerMoyenneValidees()
```

### Étape 6 — Construire le traitement

L’apprenant doit organiser le programme.

Exemple d’organisation :

```text
Définir les fonctions
        ↓
Définir les données
        ↓
Calculer les résultats indépendants
        ↓
Calculer les résultats dépendants
        ↓
Afficher les résultats
```

### Résultat attendu

Pour :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

les résultats doivent être :

```text
Nombre de notes : 8
Somme : 91
Moyenne : 11.375
Maximum : 17
Minimum : 6
Notes validées : 5
Somme des notes validées : 68
Moyenne des notes validées : 13.6
Appréciation : Validé
```

### Critère de réussite

L’apprenant doit :

* identifier le problème global ;
* identifier les sous-problèmes ;
* définir les entrées et sorties ;
* construire les traitements ;
* réutiliser les fonctions précédentes ;
* identifier les dépendances ;
* respecter l’ordre d’exécution ;
* tester les fonctions séparément ;
* tester le traitement complet ;
* vérifier les résultats.

---

# 12. Vue synthétique de l’UA.121.17

| Tutoriel      | Fonction   | Progression                       | Production            |
| ------------- | ---------- | --------------------------------- | --------------------- |
| **T.121.171** | Comprendre | problème → sous-problèmes         | Décomposition simple  |
| **T.121.172** | Formaliser | entrées → traitements → sorties   | Contrats simples      |
| **T.121.173** | Construire | sous-traitements                  | Fonctions testées     |
| **T.121.174** | Exercices  | décomposition autonome            | Schémas de résolution |
| **T.121.175** | Chaîner    | dépendances → ordre               | Traitement composé    |
| **T.121.176** | Synthèse   | décomposer → construire → chaîner | Traitement complet    |

---

# 13. Progression complète

```text
                 COMBINER PLUSIEURS TRAITEMENTS
                              │
                              ▼
              T.121.171 — Comprendre
                              │
                    problème global
                              │
                              ▼
               T.121.172 — Formaliser
                              │
                 entrées / sorties
                              │
                              ▼
               T.121.173 — Construire
                              │
                    sous-traitements
                              │
                              ▼
               T.121.174 — Exercices
                              │
                     décomposition
                              │
                              ▼
               T.121.175 — Chaîner
                              │
                     dépendances
                              │
                              ▼
                T.121.176 — Synthèse
                              │
                  traitement complet
```

---

# 14. Relation avec les UA précédentes

Cette UA représente l'aboutissement logique du parcours N1.

```text
UA.121.12
Conditions + boucles
        ↓
UA.121.13
Tableaux + algorithmes
        ↓
UA.121.14
Fonctions réutilisables
        ↓
UA.121.15
Résolution de problèmes
        ↓
UA.121.16
Algorithme classique : tri
        ↓
UA.121.17
Décomposition + chaînage
```

La progression générale devient :

```text
Apprendre une notion
        ↓
Utiliser la notion
        ↓
Combiner plusieurs notions
        ↓
Construire un algorithme
        ↓
Transformer l'algorithme en fonction
        ↓
Résoudre un problème
        ↓
Décomposer le problème
        ↓
Chaîner les traitements
        ↓
Construire un traitement complet
```

---

# 15. Distinction importante entre UA.121.15 et UA.121.17

Les deux UA sont proches, mais elles ne jouent pas le même rôle.

### UA.121.15 — Résoudre un problème

L’apprenant se demande principalement :

```text
Quel traitement dois-je utiliser ?
```

Il choisit parmi des traitements déjà appris.

```text
Problème
   ↓
Choisir les outils connus
   ↓
Construire la solution
```

### UA.121.17 — Combiner plusieurs traitements

L'apprenant se demande maintenant :

```text
Comment découper le problème ?
Quel traitement dépend de quel autre ?
Dans quel ordre les exécuter ?
```

La logique devient :

```text
Problème global
       ↓
Décomposition
       ↓
Sous-problèmes
       ↓
Traitements
       ↓
Dépendances
       ↓
Chaînage
       ↓
Traitement complet
```

C'est cette distinction qui permet de préparer progressivement l'apprenant à des problèmes plus importants sans introduire brutalement une architecture complexe.

---

# 16. Règle pédagogique fondamentale

La règle centrale de l’UA.121.17 peut être formulée ainsi :

> **Un problème complexe doit d'abord être décomposé en traitements simples et compréhensibles. Chaque traitement possède une responsabilité claire, des entrées et une sortie. Les traitements sont ensuite organisés selon leurs dépendances et testés individuellement avant le test global.**

La progression finale du domaine **Construire le traitement logique — N1** devient ainsi :

```text
                 CONSTRUIRE LE TRAITEMENT LOGIQUE
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
     ORDRES DE BASE                         ALGORITHMES
          │                                       │
   Variables / E-S                         Somme
   Conditions                              Recherche
   Boucles                                 Maximum
                                           Minimum
                                           Tri
          │                                       │
          └───────────────────┬───────────────────┘
                              ↓
                         TABLEAUX
                              ↓
                         FONCTIONS
                              ↓
                    RÉSOLUTION DE PROBLÈMES
                              ↓
                        DÉCOMPOSITION
                              ↓
                          CHAÎNAGE
                              ↓
                    TRAITEMENT COMPLET
```

Ainsi, l’UA.121.17 termine le N1 sur une compétence importante : **ne plus seulement savoir programmer un traitement, mais savoir organiser plusieurs traitements simples pour construire une solution complète**.
