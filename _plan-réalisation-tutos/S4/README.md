# Session S4 — Construire la page d’accueil dynamique du Blog

Bienvenue dans le guide de cadrage de la **Session S4**.  
Dans cette session charnière, l'apprenant effectue la transition majeure de sa formation : **le passage d'un site Web statique HTML/CSS à une application Web dynamique en PHP pur**.

---

## 1. Objectifs Pédagogiques du Sprint S4

* **Développement Web (PHP procédural) :** Écrire et exécuter son premier script PHP, manipuler des variables et des tableaux associatifs en mémoire, appliquer des conditions et répéter l'affichage des cartes d'articles avec une boucle `foreach` (`UA.123.11`, `UA.123.12`, `UA.123.13`, `UA.123.14`).
* **Architecture Web :** Séparer la préparation des données (`index.php`) du template d'affichage HTML (`index-template.php`) grâce à l'instruction `require` (`UA.125.13`).
* **Conception des Données :** Déterminer les relations, les cardinalités et formaliser le schéma conceptuel complet (MCD) du Blog (`UA.112.14`).
* **Veille Technologique :** Découvrir la factorisation avec les fonctions et l'inclusion de templates pour préparer la session S5 (`UA.161.14`).

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement web applicatif s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le code hérité de la session S3 comprenant la page d'accueil statique (`public-index.html`), la page article (`public-article.html`), les feuilles de style CSS et les images.
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Le code cible PHP que l'apprenant apprend à écrire au fil des tutoriels :
  - `index.php` (logique serveur : tableau d'articles en mémoire, conditions, inclusion du template).
  - `index-template.php` (template d'affichage : remplacement des cartes dupliquées par une boucle dynamique `foreach`).

---

## 3. Index des Plans de Réalisation du Sprint S4

Pour respecter le principe de non-redondance, chaque volet d'apprentissage fait l'objet d'un fichier dédié accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas de PHP procédural et de l'architecture dynamique (`UA.123.11` à `UA.123.14`, `UA.125.13`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-conception.md](../S1/plan-conception.md) :**  
  Mobilisation de l'Unité **UA.112.14** (*Déterminer les relations, les cardinalités et construire le schéma MCD complet*).
* **[plan-architecture.md](../S2/plan-architecture.md) :**  
  Mobilisation de l'Unité **UA.125.13** (*Séparer la logique de préparation des données et le template d'affichage*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.14** (*Veille sur la modularité et les fonctions en PHP* préparant S5).

---

## 4. Livrables Attendus à la Fin de la Session S4

1. La page d'accueil dynamique `index.php` opérationnelle affichant les articles dynamiquement depuis un tableau PHP en mémoire.
2. Une séparation nette et fonctionnelle entre le script serveur `index.php` et la vue `index-template.php`.
3. Le schéma conceptuel MCD du Blog validé (`mcd-blog`) reliant les entités Article, Auteur et Catégorie.
4. Une slide de veille synthétique sur la modularité et les fonctions en PHP partagée avec un lien public.
