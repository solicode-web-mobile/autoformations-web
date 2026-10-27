# Session S4 — Construire la page d’accueil dynamique du Blog

Bienvenue dans le guide de cadrage de la **Session S4**.  
Dans cette session charnière, l'apprenant effectue la transition majeure de sa formation : **le passage d'un site Web statique HTML/CSS à une application Web dynamique en PHP pur**.

---

## 1. Objectifs Pédagogiques du Sprint S4

* **Développement Web (PHP procédural — D.123.1) :** Organisé en **exactement 2 UAs** (règle de démarrage d'une nouvelle technologie) :
  - **UA.123.11 — Bien démarrer avec PHP :** Installer PHP, préparer l'environnement local avec le serveur intégré (`php -S`), et écrire son premier script autonome avec `echo` hors projet (`T.123.11.0`, `T.123.11.1`).
  - **UA.123.12 — Construire une page Web dynamique avec PHP :** Manipuler des structures de données en mémoire (tableaux associatifs), adapter l'affichage avec des conditions (`if / else`), et générer dynamiquement les cartes et liens avec `foreach` sécurisé par `htmlspecialchars()` (`T.123.12.1` à `T.123.12.4`).
* **Architecture Web (D.125.1) :** Séparer la préparation des données (`index.php`) du template d'affichage HTML (`index-template.php`) grâce à l'instruction `require` (`UA.125.13`, `T.125.13.1`).
* **Conception des Données (D.112.1) :** Déterminer les relations, les cardinalités et formaliser le schéma conceptuel complet (MCD) du Blog (`UA.112.14`).
* **Veille Technologique (D.161.1) :** Découvrir la factorisation avec les fonctions et l'inclusion de templates pour préparer la session S5 (`UA.161.14`).

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement web applicatif s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le code hérité de la session S3 comprenant la page d'accueil statique (`public-index.html`), la page article (`public-article.html`), les feuilles de style CSS et les images.
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Le code cible PHP que l'apprenant apprend à écrire au fil des tutoriels :
  - `commandes.md` (relevé des commandes d'installation et de lancement du serveur local).
  - `test-serveur.php` & `hello.php` (sas d'installation et de syntaxe minimale).
  - `index.php` (logique serveur : tableau d'articles en mémoire, conditions, inclusion du template).
  - `index-template.php` (template d'affichage : remplacement des cartes dupliquées par une boucle dynamique `foreach`).

---

## 3. Index des Plans de Réalisation du Sprint S4

Pour respecter le principe de non-redondance, chaque volet d'apprentissage fait l'objet d'un fichier dédié accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas de PHP procédural et de l'architecture dynamique (`UA.123.11`, `UA.123.12`, `UA.125.13`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-conception.md](../S1/plan-conception.md) :**  
  Mobilisation de l'Unité **UA.112.14** (*Déterminer les relations, les cardinalités et construire le schéma MCD complet*).
* **[plan-architecture.md](../S2/plan-architecture.md) :**  
  Mobilisation de l'Unité **UA.125.13** (*Séparer la logique de préparation des données et le template d'affichage*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.14** (*Veille sur la modularité et les fonctions en PHP* préparant S5).

---

## 4. Livrables Attendus à la Fin de la Session S4

1. **Livrable Complet de la Session :** Le `dossier-depart/` hérité de S3 entièrement transformé et enrichi avec le `code-a-apprendre/`, formant l'application Web dynamique navigable et exécutable sur le serveur local (`php -S localhost:8000`).
2. **Code source physique tapé par l'apprenant :**
   - Fichier `commandes.md` consignant les commandes d'installation et de serveur local.
   - Scripts autonomes `test-serveur.php` et `hello.php`.
   - Contrôleur serveur `index.php` et vue template `index-template.php`.
3. **Livrables transversaux :**
   - Le schéma conceptuel MCD du Blog validé (`mcd-blog`) reliant les entités Article, Auteur et Catégorie (`UA.112.14`).
   - Une slide de veille synthétique sur la modularité et les fonctions en PHP partagée avec un lien public (`UA.161.14`).
