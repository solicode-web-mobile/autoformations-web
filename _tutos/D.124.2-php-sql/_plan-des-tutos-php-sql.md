# Plan des Tutoriels : Faire le lien entre PHP et SQL (PDO)

**Niveau :** N1 (Débutant)
**Objectif global :** Connecter l'application PHP à la base de données MySQL pour la rendre totalement dynamique.

## Unité 1 : Connexion et Lecture (Session S6)
*Livrable : Accueil connecté à MySQL.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.211** | Initialiser une connexion sécurisée avec `PDO` | Activer le pilote `pdo_mysql` dans `php.ini` et initialiser la connexion PHP-MySQL. | Fichier `db.php` fonctionnel. |
| **T.124.212** | Exécuter et récupérer des données avec PDO | Récupérer les résultats SQL sous forme de tableau associatif PHP. | Script d'extraction des articles. |
| **T.124.221** | Intégrer les données SQL dans l'interface web | Remplacer les données simulées par les enregistrements de la base de données. | Page d'accueil 100% dynamique. |

## Unité 2 : Sécurité et Paramètres (Session S7)
*Livrable : Vue détaillée d'un article sécurisée.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.231** | Requêtes préparées (`prepare` & `execute`) | Sécuriser les variables issues de l'utilisateur. | Détail de l'article via `$_GET['id']` de façon sécurisée. |

## Unité 3 : Insertion (Session S8)
*Livrable : Ajout de catégorie en base.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.241** | Insérer des données (`INSERT`) | Enregistrer les données d'un formulaire en base. | Sauvegarde d'une nouvelle catégorie avec PDO. |

## Unité 4 : Mise à jour et Suppression (Session S9)
*Livrable : CRUD complet des articles.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.242** | Mettre à jour des données (`UPDATE`) | Modifier un enregistrement existant. | Édition d'un article. |
| **T.124.243** | Supprimer des données (`DELETE`) | Effacer un enregistrement en base. | Suppression d'un article. |

## Unité 5 : Gestion des Erreurs (Session S10)
*Livrable : Application qui ne plante pas à la connexion.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.251** | Gérer les exceptions (`try / catch`) | Afficher proprement les erreurs de connexion. | Bloc try/catch dans `db.php`. |

## Unité 6 : Exploitation avancée (Session S11)
*Livrable : Exploiter les critères complexes de recherche.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.232** | Exploiter les critères de recherche | Interagir entre le formulaire HTML, PHP et `LIKE` SQL. | Résultat dynamique du moteur de recherche. |
