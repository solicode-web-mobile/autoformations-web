# Session S12 — Finaliser et présenter le Projet Fil Rouge

Bienvenue dans le guide de cadrage de la **Session S12**.  
Cette session marque l'aboutissement du **Projet Fil Rouge Blog**. L'apprenant finalise son application Web complète en la rendant **responsive** (adaptable sur mobile et tablette grâce aux `@media queries` CSS), déroule la **recette logicielle finale** de bout-en-bout, et prépare sa **soutenance technique devant le jury**.

---

## 1. Objectifs Pédagogiques du Sprint S12

* **Développement Web Applicatif :**  
  - Adapter une interface aux différentes largeurs d'écrans avec CSS Responsive (`UA.122.25`).
  - Déployer l'application complète et réinitialiser son environnement avec `install.php`.
* **Vérifier une Solution :**  
  - Dérouler la grille de recette complète (parcours Public et Admin) pour garantir un fonctionnement sans bug devant le jury (`UA.131.11`, `UA.131.12`).
* **Versionnement Git :** Clôturer le projet avec un commit final propre, étiqueté (`git tag v1.0.0`) et synchronisé sur GitHub.
* **Organisation du Travail :** Réaliser le bilan global du projet (temps passé, difficultés résolues, compétences acquises) et préparer le support de présentation.
* **Veille Technologique :** Découvrir l'écosystème professionnel moderne du développeur Web (POO, frameworks PHP, outils d'intégration continue) pour préparer son insertion et son passage au niveau N2 (`UA.161.112`).

---

## 2. Organisation des Ressources de Code du Sprint

La réalisation du sprint s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  L'application complète issue de la session S11 (espace public dynamique, espace d'administration complet avec catégories, articles, recherche et authentification sécurisée).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement les fichiers développés et appris par l'apprenant au cours du sprint :
  - `css/responsive.css` (feuille de style adaptative pour mobiles et tablettes).
  - `install.php` (script d'initialisation automatique de la base MySQL).

---

## 3. Index des Plans de Réalisation du Sprint S12

Pour garantir une progression méthodique sans redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas intégrant le responsive design (`@media queries`), l'adaptation des grilles et de la navigation, et le script de déploiement (`UA.122.25`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions Antérieures)
* **[plan-test.md](../S9/plan-test.md) :**  
  Mobilisation de la recette globale de non-régression avant la soutenance (`UA.131.11`, `UA.131.12`).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation des acquis pour la livraison finale et l'étiquetage de version sur GitHub (`v1.0.0`).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation des acquis pour le bilan de projet et la préparation de la soutenance orale.
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.112** (*Veille sur l'écosystème professionnel du développeur* préparant le passage au niveau N2).

---

## 4. Livrables Attendus à la Fin de la Session S12

1. L'application Web Blog 100 % opérationnelle, navigable et responsive sur tout type d'écran (smartphone, tablette, ordinateur).
2. La feuille de style `css/responsive.css` intégrée et active.
3. Le script `install.php` permettant une installation clé en main de la base de données.
4. Le cahier de recette validé à 100 % couvrant l'intégralité des fonctionnalités publiques et d'administration.
5. Le dépôt GitHub finalisé avec tag `v1.0.0` et code source propre.
6. Le support de présentation (diaporama) et la démonstration technique prête pour le jury de soutenance.
