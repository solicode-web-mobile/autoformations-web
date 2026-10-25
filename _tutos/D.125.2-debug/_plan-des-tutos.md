# Plan de Réalisation — Déboguer et Résoudre les Erreurs (D.125.2)

**Domaine de compétence :** Déboguer et résoudre les erreurs (`D.125.2`)  
**Session de première mobilisation :** S2 — Page de détail d’un article — V1 statique  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S2 (première session mobilisant le débogage). Il formalise la méthodologie générale et l'ensemble des tutoriels de débogage pour **les 12 sessions de la formation**. Dans les sessions suivantes (S6, S7, S9), l'apprenant réalisera l'Unité d'Apprentissage prévue à son sprint à partir de ce document unique de référence.

---

## 1. Méthodologie Pédagogique du Débogage en Niveau N1

Une erreur n'est pas un échec, c'est l'indice normal qui guide le développeur vers la solution :

* **Démarche scientifique et méthodique en 4 temps :**
  1. **Observer :** Quel est le symptôme exact (valeur inattendue, message dans la console, page blanche) ?
  2. **Interrompre l'exécution :** Poser un point d'arrêt (*breakpoint*) pour figer le programme au moment critique.
  3. **Inspecter :** Vérifier le contenu réel de chaque variable dans la mémoire de l'ordinateur (panneau *Scope*).
  4. **Avancer pas à pas :** Exécuter les instructions ligne par ligne (*Step Over* - `F10`) pour identifier précisément l'instruction défaillante, puis corriger le code.

> **Principe d'Action Directe :**  
> Aucun livrable documentaire ou rapport écrit n'est demandé à l'apprenant. L'apprenant réalise le débogage en direct avec les outils professionnels et résout l'anomalie dans le code source.

---

## 2. Articulation Temporelle par Session (S2 à S12)

### ⏮️ Acquis Passés (Session S1)
- Manipulation des premières variables et affichage des résultats avec `console.log()` dans le Sandbox Algorithmique (`UA.121.11`).

### 🎯 Unité d'Apprentissage Mobilisée dans ce Sprint (Session S2)
- **UA.125.21 — Déboguer un programme pas à pas :**  
  Utiliser les outils de débogage du navigateur (DevTools) pour poser un point d'arrêt dans un script de traitement d'articles, avancer pas à pas avec *Step Over*, observer l'évolution des variables en mémoire et corriger l'erreur de calcul.

### ⏭️ Perspectives Futures (Sessions S3 à S12)
- **S6 (UA.125.22) :** Localiser une instruction responsable d'un échec de traitement de données PHP / MySQL.
- **S7 (UA.125.23) :** Corriger une erreur simple dans l'affichage dynamique des articles par catégorie.
- **S9 (UA.125.24) :** Diagnostiquer et résoudre un problème complexe sur un parcours complet (formulaire → requête POST → insertion SQL → redirection).

---

## 3. Grille Complète des Tutoriels de Débogage (S2 à S9)

| Identifiant | Session | Titre du tutoriel | Unité ciblée | Action & Résolution attendue |
| :--- | :---: | :--- | :---: | :--- |
| **T.125.21.1** | **S2** | Déboguer un script JavaScript pas à pas avec des breakpoints | UA.125.21 | Point d'arrêt posé, exécution pas à pas (`F10`), erreur de calcul corrigée. |
| **T.125.22.1** | **S6** | Installer et tester Xdebug avec VS Code | UA.125.22 | Module activé dans `php.ini`, extension configurée, point d'arrêt testé. |
| **T.125.22.2** | **S6** | Traquer une anomalie dans un script PHP | UA.125.22 | Points d'arrêt sur boucle foreach, erreur de calcul corrigée. |
| **T.125.23.1** | **S7** | Corriger une variable mal transmise dans l'URL | UA.125.23 | Erreur de paramètre URL identifiée et affichage par catégorie rétabli. |
| **T.125.24.1** | **S9** | Déboguer un parcours complet de soumission de formulaire | UA.125.24 | Suivi du flux complet (HTML → PHP → SQL) et résolution de l'anomalie de bout en bout. |

---

## 4. Fiche Détaillée — Session S2 (UA.125.21)

### T.125.21.1 — Déboguer un script JavaScript pas à pas avec des breakpoints

- **Objectif :** Figer le temps et suivre l'évolution d'un calcul pas à pas sans multiplier les `console.log()`.
- **Notions :** DevTools (`F12`), onglet *Sources / Débogueur*, point d'arrêt (*Breakpoint*), panneau des variables locales (*Scope*), bouton *Step Over* (`F10`).
- **Consigne pas-à-pas :**
  1. Ouvrir le navigateur Chrome, Firefox ou Edge sur la page de test `debug.html`.
  2. Ouvrir les DevTools avec la touche `F12`.
  3. Aller dans l'onglet **Sources** (ou **Débogueur**).
  4. Sélectionner le fichier JavaScript et cliquer sur la marge pour poser un point d'arrêt au début du calcul.
  5. Recharger la page (`F5`) : le script se fige sur la ligne marquée.
  6. Observer le panneau **Scope** à droite : inspecter les valeurs des variables en mémoire.
  7. Cliquer sur le bouton **Step Over** (`F10`) pour avancer ligne par ligne et constater l'erreur de calcul.
  8. Modifier le code dans l'éditeur pour corriger l'opération et vérifier le résultat attendu dans la console.
- **Validation :** L'apprenant sait poser un point d'arrêt, inspecter les variables locales et résoudre le problème dans le code source.

---

## 5. Fiches Préparatoires — Sessions Futures (S6, S7, S9)

### S6 — UA.125.22 : T.125.22.1 — Installer et tester Xdebug avec VS Code
- **Objectif :** Mettre en place l'environnement de débogage serveur PHP et valider un premier point d'arrêt.
- **Environnement :** PHP + Xdebug + VS Code.
- **Situation :** Script simple `test-debug.php`.
- **Démarche :**
  1. Activer le bloc `[xdebug]` dans `php.ini`.
  2. Installer l'extension PHP Debug dans VS Code.
  3. Configurer l'écouteur `Listen for Xdebug` sur le port 9003 dans `launch.json`.
  4. Créer `test-debug.php`, poser un point d'arrêt et vérifier la suspension de l'exécution lors de la requête web.

---

### S6 — UA.125.22 : T.125.22.2 — Traquer une anomalie dans un script PHP
- **Objectif :** Suivre pas à pas l'exécution d'une boucle PHP avec Xdebug, observer l'évolution des variables locales et corriger une erreur de logique de calcul.
- **Environnement :** PHP + Xdebug + VS Code.
- **Situation :** Le calcul du cumul des lectures d'articles du Blog produit un résultat faux.
- **Démarche :**
  1. Poser un point d'arrêt à l'intérieur de la boucle `foreach` du script `statistiques.php`.
  2. Lancer l'écoute Xdebug et charger la page dans le navigateur.
  3. Suivre l'exécution pas à pas avec Step Over (`F10`) et inspecter la variable d'accumulation dans le panneau des variables locales.
  4. Constater l'écrasement de la valeur et corriger l'instruction avec l'opérateur d'accumulation (`+=`).

---

### S7 — UA.125.23 : T.125.23.1 — Corriger une variable mal transmise dans l'URL
- **Objectif :** Corriger une erreur ciblée liée à la transmission d'un paramètre dans une requête Web.
- **Environnement :** PHP + application Blog.
- **Situation :** Le filtre par catégorie ne renvoie aucun article lorsqu'on clique sur un lien de navigation.
- **Démarche :**
  1. Inspecter le paramètre `$_GET['categorie']` transmis dans l'URL.
  2. Poser un point d'arrêt au début du script de filtrage.
  3. Vérifier la valeur reçue par rapport à la valeur attendue par la requête SQL.
  4. Appliquer la correction ciblée dans le template ou dans le script de traitement.
  5. Vérifier que les articles de la catégorie s'affichent correctement.

---

### S9 — UA.125.24 : T.125.24.1 — Déboguer un parcours complet de soumission de formulaire
- **Objectif :** Suivre une donnée tout au long d'un cycle complet (Frontend → Serveur → Base de données → Redirection).
- **Environnement :** PHP + MySQL + application Blog (partie Admin).
- **Situation :** L'ajout d'un nouvel article depuis le formulaire d'administration ne produit aucun enregistrement en base.
- **Démarche :**
  1. Suivre la donnée depuis la soumission du formulaire (`$_POST`).
  2. Vérifier la réception et la validation des champs dans le script de traitement.
  3. Inspecter la requête préparée PDO avant son exécution.
  4. Identifier à quelle étape précise le flux est interrompu et corriger le dysfonctionnement.
  5. Valider la création effective de l'article dans l'interface et en base de données.