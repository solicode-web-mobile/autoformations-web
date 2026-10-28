# Session S6 — Connecter la page d’accueil à MySQL

Bienvenue dans le guide de cadrage de la **Session S6**.  
Dans cette session, l'apprenant accomplit un tournant fondamental dans son parcours de développeur : **l'abandon des données codées en dur au profit d'une base de données relationnelle MySQL réelle** pilotée par **PHP et PDO**.

---

## 1. Objectifs Pédagogiques du Sprint S6

* **Exploiter les données (SQL & PDO) :** Créer la base de données relationnelle et ses tables à partir du MLD, puis écrire et exécuter des requêtes `SELECT` avec jointure (`UA.124.11`, `UA.124.12`, `UA.124.21`, `UA.124.22`).
* **Architecture d'Application Web :** Structurer une page dynamique en distinguant rigoureusement la configuration d'accès aux données (`db.php`), le traitement logique (`index.php`) et l'affichage (`index-template.php`) (`UA.125.14`).
* **Débogage :** Localiser un problème d'accès aux données ou d'exécution de requête en inspectant les messages d'erreur PDO (`UA.125.22`).
* **Versionnement Git :** Consulter l'historique des commits pour suivre l'évolution des versions de l'application (`UA.151.14`).
* **Organisation du Travail :** Mettre à jour l'état d'avancement d'une tâche sur son tableau de bord pour rendre son travail visible aux autres (`UA.152.14`).
* **Veille Technologique :** Comprendre le fonctionnement de la méthode HTTP GET préparant S7 (`UA.161.16`) et découvrir l'environnement tout-en-un Laragon sous Windows (`UA.161.113`).

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le code complet hérité de la session S5 (`index.php` appelant `fonctions.php` lisant `data/*.json`, `index-template.php`, `css/`, `images/`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Strictement le code cible spécifique que l'apprenant écrit et apprend dans ce sprint :
  - `database.sql` (script SQL de création de la base `blog_n1` et des tables relationnelles).
  - `db.php` (initialisation de la connexion sécurisée PDO avec gestion d'exceptions).
  - `index.php` (contrôleur réusiné exécutant les requêtes SQL et transmettant les données au template).

---

## 3. Index des Plans de Réalisation du Sprint S6

Pour garantir l'unicité des plans et éviter toute redondance, chaque volet est accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas en 8 étapes découpées intégrant le démarrage MySQL avec Workbench, la création DDL, l'insertion DML, la sélection simple avec tri, la jointure SQL, la connexion PDO, l'extraction avec `fetchAll` et l'affichage dynamique (`UA.124.11`, `UA.124.12`, `UA.124.21`, `UA.124.22`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-architecture.md](../S2/plan-architecture.md) :**  
  Mobilisation de l'Unité **UA.125.14** (*Structurer une page avec accès aux données*).
* **[plan-debogage.md](../S2/plan-debogage.md) :**  
  Mobilisation de l'Unité **UA.125.22** (*Localiser un problème dans le code*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.14** (*Consulter l’historique des versions*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.14** (*Rendre l’état de son travail visible*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation des Unités **UA.161.16** (*Veille sur la méthode HTTP GET*) et **UA.161.113** (*Veille sur Laragon et le dev local*).

---

## 4. Livrables Attendus à la Fin de la Session S6

1. La base de données `blog_n1` importée et fonctionnelle sous MySQL avec ses tables `categories`, `articles`, `auteurs`, `utilisateurs`.
2. Le fichier de connexion centralisé `db.php` configuré avec PDO et sécurisé par `try / catch`.
3. Le fichier contrôleur `index.php` réusiné, effectuant les requêtes SQL et transmettant les données réelles au template.
4. La page d'accueil du Blog affichant dynamiquement les articles enregistrés en base de données.
5. Une consultation de l'historique Git (`git log --oneline`) documentée.
6. Le statut de la tâche technique mis à jour en `Terminé` sur le tableau Kanban / Trello.
7. Une slide de veille synthétique sur le fonctionnement de la méthode HTTP GET partagée avec un lien public (`T.161.161`).
8. Une slide de veille synthétique sur l'environnement de développement Laragon partagée avec un lien public (`T.161.1131`).
