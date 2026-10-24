---
name: domaine-debug
description: >-
  Expert en règles de rédaction pour les tutoriels de débogage et résolution d'erreurs (debug).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié au débogage JavaScript, PHP, Xdebug, inspection d'erreurs ou DevTools.
---

# Règles de rédaction - Domaine Débogage (Debug)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine du débogage et de la résolution méthodique des anomalies logicielles (domaine D.125.2).

## 1. La Démarche Méthodique de Débogage (Règle d'or)

Le débogage ne consiste pas à modifier du code au hasard. Tout tutoriel de débogage doit impérativement enseigner et respecter le cycle en **5 étapes successives** :

```text
1. Reproduire  → Identifier le scénario exact qui déclenche l'erreur
      ↓
2. Observer    → Lire les messages d'erreurs, codes de statut et traces
      ↓
3. Localiser   → Poser un point d'arrêt ou une trace pour isoler la ligne fautive
      ↓
4. Corriger    → Appliquer une modification ciblée et minimale
      ↓
5. Vérifier    → Confirmer la résolution du bug sans introduire de régression
```

## 2. Pédagogie de l'Erreur : Présenter le Problème Avant la Solution

* **Afficher le message d'erreur réel** : Toujours inclure une capture ou un bloc textuel contenant l'erreur telle qu'elle apparaît à l'écran (ex: `Uncaught TypeError: Cannot read properties of null`, `Fatal error: Uncaught PDOException`, `404 Not Found`, `500 Internal Server Error`).
* **Expliquer l'anatomie du message d'erreur** :
  - Quel est le type d'erreur ? (Syntaxe, Type, Réseau, Logique).
  - Quel fichier est concerné ?
  - À quelle ligne se situe l'incident ?
* **Scénario d'enquête** : Guider l'apprenant comme un enquêteur en posant des questions de diagnostic ("Que vaut cette variable juste avant la ligne 12 ?").

## 3. Outils et Techniques de Débogage à Aborder

Selon le contexte technologique du tutoriel :
* **Côté Client (JavaScript / Navigateur)** :
  - Panneau `Console` des DevTools (lire les erreurs, traces de pile).
  - Panneau `Sources` / `Debugger` : poser des points d'arrêt (breakpoints), avancer pas-à-pas (`Step over`, `Step into`), observer les variables dans le volet `Scope`.
  - Inspection réseau via l'onglet `Network` (examiner les requêtes et réponses HTTP).
* **Côté Serveur (PHP)** :
  - Configuration de l'affichage des erreurs (`display_errors = On`, `error_reporting(E_ALL)`).
  - Traces d'inspection rapide : `var_dump($var); die();` ou `print_r()`.
  - Débogage pas-à-pas avec **Xdebug** couplé à Visual Studio Code.
* **Côté Base de Données (MySQL)** :
  - Inspection de la requête générée en l'affichant avant son exécution.
  - Copier-coller de la requête brute dans phpMyAdmin pour lire le message d'erreur du serveur SQL.

## 4. Livrables Attendus

* **Fiche d'incident / Rapport d'enquête** :
  - Description du bug observé.
  - Message d'erreur et ligne identifiée.
  - Cause racine expliquée simplement.
  - Code corrigé (diff Avant/Après).
  - Preuve du test de confirmation (résultat correct obtenu).

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel de débogage, vérifiez systématiquement :
> "Le message d'erreur initial est-il reproduit exactement tel que l'apprenant le verra ?"
> "L'apprenant apprend-il à observer l'outil (DevTools / logs) plutôt qu'à deviner la solution ?"
> "La correction proposée est-elle ciblée et expliquée à la source ?"
> "Le tutoriel prévoit-il une étape finale pour vérifier que le comportement normal est rétabli ?"
