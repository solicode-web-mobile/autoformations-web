# Session S9 — Gérer les articles dans l’Admin

Bienvenue dans le guide de cadrage de la **Session S9**.  
Dans cette session, l'apprenant enrichit le Back-Office du Blog avec **le cycle complet (CRUD) des articles**. Il exploite les jointures SQL multi-tables (`JOIN`), borne ses requêtes avec `LIMIT`, organise un contrôleur de soumission complet en PHP (`admin/articles/form.php`), manipule les événements utilisateur en JavaScript et rédige son premier cahier de test de vérification manuelle.

---

## 1. Objectifs Pédagogiques du Sprint S9

* **Développement Web Applicatif :**  
  - Exploiter des données issues de plusieurs tables via des jointures SQL (`UA.124.24`).
  - Limiter le nombre de résultats retournés avec la clause `LIMIT` (`UA.124.15`).
  - Organiser un traitement PHP complet gérant la validation, les dépendances et l'enregistrement (`UA.123.18`).
  - Gérer les événements utilisateur avec JavaScript dans le navigateur (`UA.122.33`).
* **Vérifier une Solution (Nouveau domaine transverse) :**  
  - Réaliser une vérification manuelle pas-à-pas et documenter les résultats obtenus (`UA.131.11`).
* **Algorithmique :** Combiner plusieurs traitements (recherche, filtrage, comptage, tri) pour résoudre un problème complet dans le Sandbox JS (`UA.121.17`).
* **Débogage :** Résoudre un problème dans un parcours complet impliquant plusieurs traitements successifs (`UA.125.24`).
* **Versionnement Git :** Récupérer son projet depuis GitHub et le remettre en état de fonctionnement (`UA.151.17`).
* **Organisation du Travail :** Rendre compte clairement de sa contribution (ce qui est fait, ce qui reste, difficultés, prochaines actions) (`UA.152.17`).
* **Veille Technologique :** Découvrir le mécanisme des sessions PHP et du contrôle d'accès pour préparer la session S10 (`UA.161.19`).

---

## 2. Organisation des Ressources de Code du Sprint

La réalisation du sprint s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  L'application complète héritée de la session S8 (parties publique et administration des catégories, `db.php`, `database.sql`, `css/`, `images/`, `js/`) accompagnée des maquettes statiques de la gestion des articles (`admin-articles.html`, `admin-article-form.html`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement les fichiers développés et appris par l'apprenant au cours du sprint :
  - `admin/articles/liste.php` & `liste-template.php` (liste des articles avec jointures de catégories et auteurs).
  - `admin/articles/form.php` & `form-template.php` (formulaire d'ajout et d'édition d'article avec listes déroulantes).

---

## 3. Index des Plans de Réalisation du Sprint S9

Pour garantir une progression méthodique sans redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas intégrant les jointures SQL, la clause `LIMIT`, le traitement complet PHP d'un article et les événements JavaScript (`UA.122.33`, `UA.123.18`, `UA.124.15`, `UA.124.24`).

### B. Nouveau Domaine Transverse Cadré dans ce Sprint
* **[plan-test.md](plan-test.md) :**  
  Plan de référence pour la compétence **Vérifier une solution**, introduisant la méthode de vérification manuelle par scénarios d'usage (`UA.131.11`).

### C. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-algo.md](../S1/plan-algo.md) :**  
  Mobilisation de l'Unité **UA.121.17** (*Combiner plusieurs traitements algorithmiques*).
* **[plan-debogage.md](../S2/plan-debogage.md) :**  
  Mobilisation de l'Unité **UA.125.24** (*Résoudre un problème dans un parcours complet*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.17** (*Récupérer son travail depuis GitHub via git clone et git fetch*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.17** (*Rendre compte clairement de sa contribution*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.19** (*Veille sur les sessions PHP et l'authentification* préparant S10).

---

## 4. Livrables Attendus à la Fin de la Session S9

1. La page `admin/articles/liste.php` fonctionnelle, affichant les articles avec leurs catégories, auteurs et dates formatées.
2. La clause `LIMIT` opérationnelle pour calibrer l'affichage.
3. Le formulaire `admin/articles/form.php` capable de créer un article ou de le modifier avec sélection dynamique de la catégorie et de l'auteur.
4. La suppression d'un article effective avec redirection propre vers la liste.
5. Un cahier de test manuel déroulé et documenté validant les 4 parcours CRUD du module article.
6. Un compte-rendu d'avancement synthétique rédigé selon le standard (réalisé, reste à faire, points de blocage).
7. Une slide de veille sur le fonctionnement de `session_start()` et des cookies de session partagée en ligne.
