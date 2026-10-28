# Session S7 — Finaliser la partie Public du Blog

Bienvenue dans le guide de cadrage de la **Session S7**.  
Dans cette session, l'apprenant finalise **l'intégralité du périmètre public du Blog**. Toutes les pages visiteurs (`index.php`, `article.php`, `categories.php`, `apropos.php`) sont désormais dynamiques, raccordées à MySQL avec des requêtes préparées sécurisées et enrichies par un script client JavaScript.

---

## 1. Objectifs Pédagogiques du Sprint S7

* **Développement Web Applicatif :**  
  - Exploiter les paramètres d'URL avec `$_GET['id']` (`UA.123.16`).
  - Filtrer les enregistrements avec des requêtes préparées SQL et PDO (`UA.124.13`).
  - Structurer la navigation multi-pages et harmoniser les styles avec les variables CSS natives (`:root`, `var()`) (`UA.122.24`, `UA.125.15`).
  - Écrire et exécuter un premier script JavaScript client (`UA.122.31`).
* **Algorithmique :** Résoudre des problèmes algorithmiques simples combinant variables, conditions, boucles et fonctions dans le Sandbox JS (`UA.121.15`).
* **Débogage :** Corriger une erreur simple identifiée avec le débogueur et vérifier la résolution (`UA.125.23`).
* **Versionnement Git :** Retrouver une version antérieure du projet à partir de l'historique des commits (`UA.151.15`).
* **Organisation du Travail :** Comparer l'avancement réel au planning initial et évaluer sa situation de travail (`UA.152.15`).
* **Veille Technologique :** Découvrir ce qu'est une architecture Back-Office et les 4 opérations fondamentales du CRUD pour préparer la session S8 (`UA.161.17`).

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le code hérité de la session S6 (`db.php`, `database.sql`, `index.php`, `index-template.php`, `css/`, `images/`) accompagné des maquettes HTML statiques à dynamiser (`public-article.html`, `public-categorie.html`, `public-apropos.html`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement les fichiers que l'apprenant crée, enrichit et apprend au cours du sprint :
  - `article.php` & `article-template.php` (page de détail dynamique avec `$_GET['id']`).
  - `categories.php` & `categories-template.php` (filtrage des articles par catégorie).
  - `apropos.php` & `apropos-template.php` (page de présentation du blogueur).
  - `index.php` & `index-template.php` (raccordement des liens dynamiques inter-pages).
  - `css/global.css` (centralisation de la charte graphique avec les variables CSS `:root`).
  - `js/script.js` (script JavaScript client).

---

## 3. Index des Plans de Réalisation du Sprint S7

Pour respecter le principe de non-redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas intégrant le filtrage SQL, les requêtes préparées PDO, la gestion de `$_GET` et le multi-pages (`UA.122.24`, `UA.122.31`, `UA.123.16`, `UA.124.13`, `UA.125.15`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-algo.md](../S1/plan-algo.md) :**  
  Mobilisation de l'Unité **UA.121.15** (*Résoudre des problèmes algorithmiques simples dans le Sandbox JS*).
* **[plan-architecture.md](../S2/plan-architecture.md) :**  
  Mobilisation de l'Unité **UA.125.15** (*Structurer un site Web dynamique multi-pages*).
* **[plan-debogage.md](../S2/plan-debogage.md) :**  
  Mobilisation de l'Unité **UA.125.23** (*Corriger une erreur simple*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.15** (*Retrouver une version antérieure de son travail*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.15** (*Suivre son avancement par rapport au temps*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.17** (*Veille sur l'architecture Back-Office et le CRUD* préparant S8).

---

## 4. Livrables Attendus à la Fin de la Session S7

1. La page de détail `article.php` fonctionnelle, sécurisée par requête préparée PDO et affichant le contenu complet de l'article ciblé par son `id`.
2. La page `categories.php` opérationnelle, affichant les articles filtrés selon la catégorie sélectionnée.
3. L'ensemble des liens hypertextes du site raccordés dynamiquement (`article.php?id=...`, `categories.php?id=...`).
4. Le fichier `js/script.js` lié aux templates et exécutant des traitements côté navigateur.
5. Une opération Git démontrant la récupération d'un fichier dans une version antérieure (`git checkout`).
6. Un bilan de temps de réalisation comparé aux estimations initiales.
7. Une slide de veille synthétique sur le rôle d'un Back-Office et le concept du CRUD partagée avec un lien public.
