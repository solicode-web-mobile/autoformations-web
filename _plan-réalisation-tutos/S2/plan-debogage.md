# Plan de Réalisation — Déboguer et Résoudre les Erreurs (Session S2 & Vue Globale)

**Domaine de compétence :** Déboguer et résoudre les erreurs (`D.125.2`)  
**Session de première mobilisation :** S2 — Page de détail d’un article — V1 statique  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S2 (première session mobilisant le débogage). Il formalise la méthodologie générale et l'ensemble des tutoriels de débogage pour **les 12 sessions de la formation**. Dans les sessions suivantes (S6, S7, S9), l'apprenant réalisera l'Unité d'Apprentissage prévue à son sprint à partir de ce document unique de référence.

---

## 1. Méthodologie Pédagogique du Débogage en Niveau N1

Une erreur n'est pas un échec, c'est l'indice normal qui guide le développeur vers la solution :
* **Démarche scientifique et méthodique en 4 temps :**
  1. *Observer :* Quel est le symptôme exact (message rouge dans la console, page blanche, valeur inattendue) ?
  2. *Interrompre l'exécution :* Poser un point d'arrêt (*breakpoint*) pour figer le programme au moment critique.
  3. *Inspecter :* Vérifier le contenu réel de chaque variable dans la mémoire de l'ordinateur.
  4. *Avancer pas à pas :* Exécuter les instructions ligne par ligne (*Step Over*) pour voir exactement où le comportement dévie.

---

## 2. Articulation Temporelle par Session (S2 à S12)

### ⏮️ Acquis Passés (Session S1)
- Manipulation des premières variables et affichage des résultats avec `console.log()` dans le Sandbox Algorithmique (`UA.121.11`).

### 🎯 Unité d'Apprentissage Mobilisée dans ce Sprint (Session S2)
- **UA.125.21 — Déboguer un programme pas à pas :**  
  Utiliser les outils de débogage du navigateur (DevTools) pour poser un point d'arrêt dans un script de traitement d'articles, avancer pas à pas et observer l'évolution des variables en mémoire.

### ⏭️ Perspectives Futures (Sessions S3 à S12)
- **S6 (UA.125.22) :** Localiser une instruction responsable d'un échec de traitement de données PHP / MySQL.
- **S7 (UA.125.23) :** Corriger une erreur simple dans l'affichage dynamique des articles par catégorie.
- **S9 (UA.125.24) :** Diagnostiquer et résoudre un problème complexe sur un parcours complet (formulaire ➔ requête POST ➔ insertion SQL ➔ redirection).

---

## 3. Grille Complète des Tutoriels de Débogage (S2 à S9)

| Identifiant | Session | Titre du tutoriel | Unité ciblée | Livrable attendu |
| :--- | :---: | :--- | :---: | :--- |
| **T.125.21.1** | **S2** | Explorer l'onglet Console des DevTools du navigateur | UA.125.21 | Console ouverte et messages d'erreurs identifiés. |
| **T.125.21.2** | **S2** | Déboguer un script JavaScript pas à pas avec des breakpoints | UA.125.21 | Trace de débogage avec suivi des variables. |
| **T.125.22.1** | **S6** | Traquer une anomalie dans un script serveur PHP | UA.125.22 | Ligne responsable du dysfonctionnement identifiée. |
| **T.125.23.1** | **S7** | Corriger une variable mal transmise dans l'URL | UA.125.23 | Erreur résolue et affichage vérifié après correction. |
| **T.125.24.1** | **S9** | Déboguer un parcours complet de soumission de formulaire | UA.125.24 | Rapport de diagnostic et correction du cycle complet. |

---

## 4. Fiches Détaillées des Tutoriels Mobilisés en Session S2

### T.125.21.1 — Explorer l'onglet Console des DevTools du navigateur
- **Objectif :** Prendre l'habitude de garder la console ouverte pour repérer immédiatement les fautes de frappe et les ressources introuvables.
- **Notions :** Outils de développement du navigateur (`F12`), onglet Console, messages de type *Error*, *Warning* et *Info*.
- **Consigne pas-à-pas :**
  1. Ouvrir le navigateur Chrome, Firefox ou Edge.
  2. Appuyer sur la touche `F12` (ou clic droit > *Inspecter*).
  3. Sélectionner l'onglet **Console**.
  4. Tester un affichage direct en tapant : `console.log("Test de connexion console")`.
  5. Provoquer volontairement une petite erreur (ex: taper `nomInconnu` sans guillemets) et observer le message rouge *ReferenceError*.
- **Résultat attendu :** L'apprenant sait ouvrir sa console et comprendre la nature d'un message d'erreur simple.

---

### T.125.21.2 — Déboguer un script JavaScript pas à pas avec des breakpoints
- **Objectif :** Figer le temps et suivre l'évolution d'une boucle ou d'une condition pas à pas sans multiplier les `console.log()`.
- **Notions :** Onglet *Sources / Débogueur*, point d'arrêt (*Breakpoint*), panneau des variables locales (*Scope*), bouton *Step Over* (`F10`).
- **Consigne pas-à-pas :**
  1. Ouvrir le Sandbox Algorithmique dans le navigateur.
  2. Dans les DevTools, aller dans l'onglet **Sources** (ou **Débogueur**).
  3. Ouvrir le fichier du script JS contenant le calcul des statistiques des articles.
  4. Cliquer sur le numéro de la ligne située au début de la boucle pour poser un point d'arrêt (marqué d'un point bleu ou rouge).
  5. Déclencher l'exécution : le script se fige sur la ligne marquée.
  6. Observer le panneau **Scope** à droite : noter la valeur de départ des variables.
  7. Cliquer 3 fois sur le bouton **Step Over** (`F10`) et observer les variables changer de valeur en direct.
- **Résultat attendu :** Une capture ou trace d'exécution montrant les valeurs successives des variables à chaque tour de boucle.
