# Plan détaillé des tutoriels : Mettre une application en service localement (Deploy)

Ce document présente le découpage de la formation en tutoriels pratiques, basés sur les Unités d'Apprentissage (UA) du déploiement en environnement local (sur sa propre machine).

## Tableau récapitulatif

| Session | Identifiant | Titre | Objectif | Livrable |
| :--- | :--- | :--- | :--- | :--- |
| **S3** | **T.141.11.1** | Démarrer un serveur statique local | Exécuter un site HTML/CSS sans utiliser `file:///`. | Site accessible via `127.0.0.1`. |
| **S5** | **T.141.12.1** | Démarrer un environnement PHP (Apache) | Placer le code au bon endroit et faire tourner PHP. | Site accessible via `localhost`. |
| **S6** | **T.141.13.1** | Démarrer un environnement complet avec MySQL | Importer la base de données et lier l'application. | Site dynamique connecté fonctionnel. |

---

## Détail des tutoriels

### UA.141.11 - Déployer un site Web statique

#### T.141.11.1 - Démarrer un serveur statique local
*   **Objectif :** Comprendre qu'un site doit être "servi" via le réseau (même local) et non simplement ouvert comme un fichier.
*   **Description :** L'apprenant ouvre le dossier de son projet dans VS Code, installe/lance l'extension Live Server, et accède au site via l'IP locale (127.0.0.1) ou son adresse locale.
*   **Notions abordées :** Serveur local simple, Live Server, adresse locale, navigateur.
*   **Livrable attendu :** Preuve visuelle du site qui tourne sur un port local (ex: `http://127.0.0.1:5500`).
*   **Application au projet (S3) :** Le tutoriel est appliqué sur la **page d'accueil statique du Blog** construite en S3. L'apprenant ne l'ouvre plus en double-cliquant sur le fichier `index.html` dans l'explorateur, mais démarre son serveur Live Server pour valider son accessibilité "Web".

---

### UA.141.12 - Déployer un site Web dynamique

#### T.141.12.1 - Démarrer un environnement PHP (Apache)
*   **Objectif :** Exécuter du code PHP localement à l'aide d'un serveur web (Apache).
*   **Description :** L'apprenant démarre son environnement (ex: Laragon ou XAMPP), place le dossier de son projet dans le répertoire `www` (ou `htdocs`), et ouvre l'URL correspondante (`http://localhost/projet`).
*   **Notions abordées :** Serveur Web, Apache, dossier public (`htdocs`/`www`), exécution côté serveur, localhost.
*   **Livrable attendu :** La page s'affiche correctement, c'est-à-dire sans afficher le code source PHP brut (signe que le serveur l'a interprété).
*   **Application au projet (S5) :** L'apprenant déploie **les pages PHP de l'interface publique** réalisées en S5 (qui utilisent des données simulées en tableau PHP, sans BDD). Il confirme que son projet a basculé du statique au dynamique.

---

### UA.141.13 - Déployer un site Web dynamique avec une base de données

#### T.141.13.1 - Démarrer un environnement complet avec MySQL
*   **Objectif :** Associer une base de données MySQL à un projet PHP local pour le rendre 100% fonctionnel.
*   **Description :** L'apprenant démarre Apache ET MySQL. Il se rend sur l'outil de gestion (ex: phpMyAdmin), importe le fichier `.sql` de la base de données, configure les identifiants de connexion dans le code PHP (ex: fichier de config), et teste le site.
*   **Notions abordées :** Service MySQL, import de base, identifiants de configuration, connexion PHP/MySQL.
*   **Livrable attendu :** L'application tourne et affiche des données persistantes issues de MySQL, sans erreur de connexion.
*   **Application au projet (S6) :** L'apprenant déploie **la version finale du Blog Public (S6)**. Il importe la structure de la BDD qu'il vient de créer, configure l'accès, et valide que les articles à l'écran sont bien ceux qui sont enregistrés en base.
