# Session S11 — Rechercher et filtrer les articles dans l’Admin

Bienvenue dans le guide de cadrage de la **Session S11**.  
Dans cette session, l'apprenant dote le module des articles du Blog d'un moteur de **recherche textuelle côté serveur avec SQL `LIKE`** et d'un **filtrage dynamique en direct côté client dans le DOM avec JavaScript**. Il apprend également à tester la **non-régression** pour s'assurer que ses nouvelles modifications ne dégradent pas les fonctionnalités existantes.

---

## 1. Objectifs Pédagogiques du Sprint S11

* **Développement Web Applicatif :**  
  - Construire, vérifier et corriger une requête SQL textuelle avec l'opérateur `LIKE` et des jokers (`UA.124.17`).
  - Modifier dynamiquement l'interface dans le DOM sans recharger la page (`UA.122.35`).
  - Combiner plusieurs interactions JavaScript (frappe de touche, parcours de tableau, messages dynamiques) (`UA.122.36`).
* **Vérifier une Solution :**  
  - Vérifier la non-régression en rejouant les scénarios de test du CRUD d'articles après l'ajout de la recherche (`UA.131.12`).
* **Versionnement Git :** Enregistrer les évolutions avec des messages de commit clairs et maintenir le dépôt synchronisé.
* **Organisation du Travail :** Préparer la liste des tâches finales et anticiper les points de recette pour la session S12.
* **Veille Technologique :** Découvrir les étapes d'une recette logicielle professionnelle et les techniques de soutenance technique devant un jury (`UA.161.111`).

---

## 2. Organisation des Ressources de Code du Sprint

La réalisation du sprint s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  L'application complète et sécurisée héritée de la session S10 (parties publique et admin authentifiée avec `check.php`, `db.php`, `database.sql`, `css/`, `images/`, `js/`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement les fichiers développés et appris par l'apprenant au cours du sprint :
  - `admin/articles/liste.php` (contrôleur avec traitement de la recherche `$_GET['q']` et `LIKE`).
  - `admin/articles/liste-template.php` (formulaire de recherche et intégration du script).
  - `js/admin-recherche.js` (script de filtrage instantané côté navigateur).

---

## 3. Index des Plans de Réalisation du Sprint S11

Pour garantir une progression méthodique sans redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas intégrant la recherche SQL `LIKE`, les corrections de requêtes, le filtrage DOM JavaScript et la gestion des états vides (`UA.122.35`, `UA.122.36`, `UA.124.17`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions Antérieures)
* **[plan-test.md](../S9/plan-test.md) :**  
  Mobilisation de l'Unité **UA.131.12** (*Vérifier la non-régression sur le CRUD des articles et des catégories*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation des acquis de synchronisation et de traçabilité Git.
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation des acquis de suivi de projet et préparation de la recette finale.
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.111** (*Veille sur la recette logicielle et la soutenance* préparant S12).

---

## 4. Livrables Attendus à la Fin de la Session S11

1. La recherche serveur par mot-clé active dans `admin/articles/liste.php` avec affichage filtré des articles.
2. Le filtrage instantané côté client opérationnel dans `js/admin-recherche.js` réagissant à la saisie de texte.
3. Le message informatif *"Aucun article ne correspond à votre saisie"* s'affichant automatiquement lorsque le filtre ne trouve rien.
4. Le cahier de recette mis à jour avec la validation formelle de non-régression sur l'ajout et l'édition d'articles.
5. Une slide de veille résumant les critères d'une démonstration technique réussie devant un jury d'évaluation.
