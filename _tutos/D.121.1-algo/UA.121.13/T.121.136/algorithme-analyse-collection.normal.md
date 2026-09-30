---
title: "Algorithme de synthèse : analyser une collection"
layout: tuto
slug: "algorithme-analyser-collection"
permalink: /tutos/:slug/
tuto_id: "T.121.136"
type: "algorithme"
version: "normal"
ua: "UA.121.13"
nav_order: 6
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel de synthèse, vous allez construire un **algorithme complet d'analyse** d'une collection.
Le but est de combiner tous les traitements étudiés précédemment (somme, moyenne, maximum, minimum, comptage conditionnel) **au sein d'une seule et unique boucle**.

L'objectif de performance est d'éviter de parcourir le tableau plusieurs fois.

## Partie 1 — Théorie : L'art de la boucle unique

Imaginons que l'on doive traiter des notes :
```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Au lieu de faire une boucle pour la somme, puis une boucle pour le maximum, puis une boucle pour le minimum, on fait tout en même temps :

1. **Préparation (avant la boucle)** : On initialise toutes nos variables (compteurs à `0`, accumulateurs à `0`, extrêmes à `notes[0]`).
2. **Traitement (pendant la boucle)** : On analyse chaque `note` et on met à jour nos variables avec des conditions `if`.
3. **Conclusion (après la boucle)** : On effectue les calculs finaux qui dépendent des totaux (comme les moyennes) et on affiche les résultats.

{% include array-svg.html
   name="notes"
   title="Tableau de notes à analyser"
   values="12,15,8,17,10,14"
%}

### Exemple d'implémentation complète

```javascript
let notes = [12, 15, 8, 17, 10, 14];

// 1. Préparation
let somme = 0;
let max = notes[0];
let min = notes[0];
let nbValidees = 0;
let sommeValidees = 0;

// 2. Traitement (Une seule boucle !)
for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    
    // Somme globale
    somme = somme + note;
    
    // Extrêmes
    if (note > max) max = note;
    if (note < min) min = note;
    
    // Conditionnel (Notes >= 10)
    if (note >= 10) {
        nbValidees++;
        sommeValidees = sommeValidees + note;
    }
}

// 3. Conclusion
let moyenne = somme / notes.length;
let moyenneValidees = sommeValidees / nbValidees;

console.log("Moyenne générale :", moyenne.toFixed(2));
console.log("Max :", max, "| Min :", min);
console.log("Moyenne des validées :", moyenneValidees.toFixed(2));
```

*Résultat dans la console :*
```text
Moyenne générale : 12.67
Max : 17 | Min : 8
Moyenne des validées : 13.60
```

## Partie 2 — Travail à faire (Livrable)

Vous devez concevoir un programme de synthèse complet pour analyser les statistiques de ventes mensuelles d'une boutique.

```javascript
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
```

**Règles de gestion :**
- Une vente est considérée comme "Exceptionnelle" si son montant est **supérieur ou égal à 130**.

**Votre programme doit utiliser une boucle unique pour calculer et afficher :**
1. Le nombre total de ventes réalisées.
2. Le chiffre d'affaires total (la somme).
3. Le montant de la vente la plus élevée (Maximum) et la plus faible (Minimum).
4. Le nombre de ventes "Exceptionnelles".
5. Le chiffre d'affaires généré *uniquement* par ces ventes exceptionnelles.

**Livrable attendu :**
Créez un fichier `synthese-ventes.js` contenant l'intégralité de votre code JavaScript commenté. Exécutez-le pour vérifier vos résultats.

*(Résultats attendus pour vérification : 8 ventes, CA Total 995, Max 180, Min 75, 4 ventes exceptionnelles générant 620 de CA).*

## Bilan

**Vous savez maintenant :**
* Analyser une collection complète de bout en bout en un seul parcours.
* Distinguer les étapes d'un algorithme : Initialisation, Traitement (Boucle), Synthèse (Post-Boucle).
* Mutualiser les opérations pour créer des algorithmes performants.

C'est une étape majeure validée ! Vous êtes désormais capable d'extraire de l'intelligence à partir de données brutes.

## Glossaire

* **Analyse d'une collection** : traitement complet qui permet d'extraire plusieurs informations (statistiques) à partir de données brutes.
* **Boucle unique** : technique d'optimisation visant à réaliser plusieurs traitements différents lors d'un seul parcours du tableau.
