# Plan de Réalisation — Analyser un Besoin Existant (Session S1 & Vue Globale)

**Domaine de compétence :** Analyser un besoin existant (`D.111.1`)  
**Session de première mobilisation :** S1 — Comprendre le projet et premiers traitements logiques  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S1 (première session mobilisant l'analyse). Il formalise l'ensemble des tutoriels d'analyse fonctionnelle pour **les 12 sessions de la formation**. Dans les sessions suivantes (S2, S3, S5), l'apprenant réalisera le tutoriel prévu à son programme à partir de ce document unique de référence.

---

## 1. Contexte & Rôle de l'Analyse en Niveau N1

L'analyse du besoin permet à un développeur débutant de comprendre le projet avant d'écrire la moindre ligne de code :
* Identifier l'application, sa finalité et ses utilisateurs cibles.
* Observer les maquettes d'écrans pour repérer qui fait quoi.
* Relier les actions observables des acteurs aux fonctionnalités du système informatique.

---

## 2. Déroulé des Tutoriels d'Analyse (Sessions S1 à S12)

| Identifiant | Session | Titre du tutoriel | Objectif d'apprentissage | Livrable attendu |
| :--- | :---: | :--- | :--- | :--- |
| **T.111.111** | **S1** | Identifier le contexte, la finalité et les acteurs | Analyser la présentation du Blog pour identifier son but et ses 2 acteurs clés (Visiteur, Administrateur). | Fiche d'analyse : Contexte ➔ Finalité ➔ Acteurs ➔ Rôles. |
| **T.111.121** | **S2** | Identifier les actions des acteurs — Partie Publique | Lister les actions d'un visiteur sur la page détail d'un article (lire, voir date, voir auteur, voir catégorie). | Tableau des actions de la partie publique. |
| **T.111.131** | **S3** | Identifier les actions des acteurs — Partie Admin | Observer les écrans d'administration pour repérer les actions de gestion de l'Administrateur. | Tableau des actions de gestion des contenus (articles, catégories). |
| **T.111.141** | **S5** | Structurer les fonctionnalités du système | Regrouper les actions détaillées en modules fonctionnels cohérents (Authentification, CRUD, Consultation, Recherche). | Matrice fonctionnelle complète du Blog personnel. |

---

## 3. Fiches Détaillées des Tutoriels par Unité d'Apprentissage

### UA.111.11 — Identifier le contexte et les acteurs (Session S1)
* **T.111.111 — Identifier le contexte, la finalité et les acteurs du Blog**
  - **Objectif :** Lire le cahier des charges et observer les maquettes globales pour comprendre la raison d'être du Blog personnel.
  - **Description :** L'apprenant répond aux questions fondamentales : Quelle est l'application ? Quel problème résout-elle ? Qui sont les utilisateurs et quels sont leurs droits respectifs ?
  - **Notions :** Contexte applicatif, finalité, périmètre, acteurs (Visiteur anonyme vs Administrateur connecté), rôles et permissions.
  - **Livrable :** Document synthétique de cadrage : `Application → Finalité → Acteurs → Rôles`.

---

### UA.111.12 — Identifier les actions des acteurs — Partie Publique (Session S2)
* **T.111.121 — Identifier les actions des acteurs sur la page détail**
  - **Objectif :** Décortiquer la maquette de la page détail d'un article pour en extraire les actions possibles.
  - **Description :** L'apprenant liste toutes les interactions offertes au visiteur (lire le contenu complet, visualiser l'image d'illustration, identifier l'auteur et la date de publication, cliquer sur la catégorie associée, revenir à l'accueil).
  - **Notions :** Parcours utilisateur, action générale vs action détaillée, éléments d'interaction.
  - **Livrable :** Liste structurée des actions de consultation publique.

---

### UA.111.13 — Identifier les actions des acteurs — Partie Admin (Session S3)
* **T.111.131 — Identifier les actions d'administration des contenus**
  - **Objectif :** Examiner les maquettes du Back-Office pour repérer les opérations de gestion.
  - **Description :** L'apprenant recense les opérations réservées à l'administrateur : ajouter un article, modifier un texte, supprimer un article obsolète, créer une catégorie thématique.
  - **Notions :** Espace privé, gestion de contenu, droits d'administration.
  - **Livrable :** Répertoire des actions d'administration.

---

### UA.111.14 — Identifier les fonctionnalités (Session S5)
* **T.111.141 — Regrouper les actions en fonctionnalités majeures**
  - **Objectif :** Synthétiser l'ensemble des actions identifiées pour dresser la carte fonctionnelle du Blog.
  - **Description :** L'apprenant regroupe les actions en 5 grands blocs fonctionnels : Consultation publique, Gestion des catégories, Gestion des articles, Authentification/Sécurité, Recherche et filtres.
  - **Notions :** Découpage fonctionnel, cartographie des besoins, exigences métier.
  - **Livrable :** Carte fonctionnelle unifiée reliant `Acteurs → Actions → Fonctionnalités`.
