# Session S8 — Gérer les catégories dans l’Admin

Bienvenue dans le guide de cadrage de la **Session S8**.  
Dans cette session, l'apprenant initie la construction de **l'espace d'administration du Blog (Back-Office)**. Il met en place l'architecture du dossier `admin/` et réalise le cycle de gestion complet (CRUD) des catégories avec formulaires sécurisés en méthode `POST`, requêtes SQL de tri et d'écriture, et confirmations d'actions dans le DOM avec JavaScript.

---

## 1. Objectifs Pédagogiques du Sprint S8

* **Développement Web Applicatif :**  
  - Structurer l'arborescence en séparant l'espace Public et l'espace Admin (`UA.125.16`).
  - Construire un formulaire HTML de saisie structurée en méthode POST (`UA.122.15`).
  - Contrôler et sécuriser les données reçues côté serveur avant traitement (`UA.123.17`).
  - Trier les résultats SQL avec la clause `ORDER BY` (`UA.124.14`).
  - Réaliser les opérations d'insertion, mise à jour et suppression avec requêtes préparées PDO (`UA.124.23`).
  - Manipuler le DOM avec JavaScript pour intercepter les événements et sécuriser les suppressions (`UA.122.32`).
* **Algorithmique :** Trier une collection selon une règle de classement donnée dans le Sandbox JS (`UA.121.16`).
* **Versionnement Git :** Synchroniser son travail local avec un dépôt distant GitHub (`UA.151.16`).
* **Organisation du Travail :** Identifier un blocage technique et le signaler de manière claire et exploitable (`UA.152.16`).
* **Veille Technologique :** Comprendre les mécanismes de la méthode HTTP POST et les enjeux de la soumission sécurisée pour préparer la session S9 (`UA.161.18`).

---

## 2. Organisation des Ressources de Code du Sprint

La réalisation du sprint s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  L'application publique complète héritée de la session S7 (avec `css/global.css` et ses variables `:root`) accompagnée de la feuille de style d'administration (`admin/css/admin-style.css`) et des maquettes HTML statiques (`admin-categories.html`, `admin-categorie-form.html`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement les fichiers développés et appris par l'apprenant au cours du sprint :
  - `admin/index.php` (tableau de bord d'administration).
  - `admin/categories/liste.php` & `liste-template.php` (affichage trié et suppression de catégories).
  - `admin/categories/form.php` & `form-template.php` (formulaire d'ajout et d'édition avec contrôles POST).
  - `js/admin.js` (script de confirmation interactive avant suppression).

---

## 3. Index des Plans de Réalisation du Sprint S8

Pour garantir une progression sans redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas intégrant la structure `admin/`, le formulaire `POST`, le contrôle des saisies, les requêtes SQL `ORDER BY`, `INSERT`, `UPDATE`, `DELETE`, et l'interactivité DOM (`UA.122.15`, `UA.122.32`, `UA.123.17`, `UA.124.14`, `UA.124.23`, `UA.125.16`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-algo.md](../S1/plan-algo.md) :**  
  Mobilisation de l'Unité **UA.121.16** (*Trier une collection d'éléments selon une règle*).
* **[plan-architecture.md](../S2/plan-architecture.md) :**  
  Mobilisation de l'Unité **UA.125.16** (*Structurer la séparation Public et Admin*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.16** (*Synchroniser le travail avec GitHub via git push et git pull*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.16** (*Identifier et signaler un blocage technique*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.18** (*Veille sur la méthode POST et la soumission sécurisée* préparant S9).

---

## 4. Livrables Attendus à la Fin de la Session S8

1. L'espace d'administration accessible via `admin/index.php` avec navigation vers le module de catégories.
2. La liste des catégories `admin/categories/liste.php` fonctionnelle, triée par ordre alphabétique et affichant le nombre d'articles associés.
3. Le formulaire `admin/categories/form.php` opérationnel, capable de créer une nouvelle catégorie ou d'en modifier une existante via la méthode HTTP POST.
4. Les contrôles serveur actifs, bloquant les champs vides avec un message d'erreur explicite.
5. La suppression d'une catégorie fonctionnelle et sécurisée par une boîte de confirmation interactive JavaScript (`js/admin.js`).
6. Un dépôt distant GitHub synchronisé avec les commits du sprint.
7. Un ticket de signalement d'un blocage rédigé selon le standard (problème, impact, actions tentées).
8. Une slide synthétique de veille sur le fonctionnement du protocole HTTP POST partagée en ligne.
