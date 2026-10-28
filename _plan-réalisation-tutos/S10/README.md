# Session S10 — Gérer l’authentification de l’Admin

Bienvenue dans le guide de cadrage de la **Session S10**.  
Dans cette session, l'apprenant sécurise **l'accès à la totalité de l'espace d'administration du Blog**. Il met en place un formulaire de connexion sécurisé, contrôle les saisies en JavaScript côté navigateur, vérifie les identifiants via des requêtes SQL et `password_verify()`, initialise les sessions PHP et verrouille les pages d'administration avec un garde de sécurité (`check.php`).

---

## 1. Objectifs Pédagogiques du Sprint S10

* **Développement Web Applicatif :**  
  - Contrôler les données saisies côté navigateur avant envoi avec JavaScript (`UA.122.34`).
  - Combiner les critères de recherche en SQL pour identifier l'utilisateur (`UA.124.16`).
  - Valider l'empreinte sécurisée du mot de passe et gérer les erreurs d'accès (`UA.124.25`).
  - Gérer les sessions PHP (`session_start`, `$_SESSION`) et le verrouillage d'accès (`UA.123.18`).
* **Vérifier une Solution :**  
  - Réutiliser le protocole de vérification manuelle pour tester les cas passants et bloquants de la connexion (`UA.131.11`).
* **Versionnement Git :** Maintenir un travail versionné et récupérable avec commits atomiques et synchronisation régulière (`UA.151.18`).
* **Organisation du Travail :** Maintenir un suivi exploitable et lisible de l'avancement global (`UA.152.18`).
* **Veille Technologique :** Découvrir le principe de la recherche textuelle en SQL (`LIKE`) et du filtrage multicritères pour préparer la session S11 (`UA.161.110`).

---

## 2. Organisation des Ressources de Code du Sprint

La réalisation du sprint s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  L'application complète héritée de la session S9 (espace public, modules categories et articles admin, `db.php`, `database.sql`, `css/`, `images/`, `js/`) accompagnée de la maquette HTML de connexion (`admin-login.html`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement les fichiers développés et appris par l'apprenant au cours du sprint :
  - `admin/auth/login.php` & `login-template.php` (contrôleur et interface de connexion).
  - `admin/auth/logout.php` (déconnexion et destruction de session).
  - `admin/auth/check.php` (verrou de protection inclus dans les pages admin).
  - `js/auth-validation.js` (script de contrôle des saisies côté navigateur).

---

## 3. Index des Plans de Réalisation du Sprint S10

Pour garantir une progression méthodique sans redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas intégrant le formulaire de login, le contrôle JavaScript, l'identification SQL, `password_verify` et les verrous de session PHP (`UA.122.34`, `UA.123.18`, `UA.124.16`, `UA.124.25`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions Antérieures)
* **[plan-test.md](../S9/plan-test.md) :**  
  Mobilisation de l'Unité **UA.131.11** (*Réaliser une vérification manuelle des cas passants et rejetés de connexion*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.18** (*Maintenir un travail versionné et récupérable*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.18** (*Maintenir un suivi de projet exploitable*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.110** (*Veille sur la recherche textuelle et les filtres multicritères* préparant S11).

---

## 4. Livrables Attendus à la Fin de la Session S10

1. La page de connexion `admin/auth/login.php` opérationnelle et stylisée.
2. Le contrôle JavaScript bloquant les envois avec email invalide ou champs vides.
3. L'authentification sécurisée avec vérification par mot de passe hashé (`password_verify`).
4. Le fichier `admin/auth/check.php` verrouillant efficacement toutes les pages de l'espace administration contre les accès non autorisés.
5. Le script `admin/auth/logout.php` déconnectant proprement l'utilisateur avec redirection.
6. Le cahier de recette manuel validant le parcours de connexion (cas valides et cas erronés).
7. Le tableau de suivi de projet à jour reflétant l'avancement réel.
8. Une slide de veille sur l'utilisation du mot-clé SQL `LIKE` et des filtres préparant la session S11.
