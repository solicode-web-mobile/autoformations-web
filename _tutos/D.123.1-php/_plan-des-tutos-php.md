# Plan des Tutoriels : Réaliser le traitement serveur (PHP)

**Niveau :** N1 (Débutant)
**Objectif global :** Maîtriser les bases de la programmation procédurale avec PHP et intégrer la logique dynamique au sein d'une page Web.

## Unité 1 : Les bases du PHP (Session S4)
*Livrable : Page d'accueil avec des articles en dur.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.123.11.1** | Écrire son premier script PHP | Exécuter un script simple sur un serveur local et l'afficher dans l'HTML. | Afficher dynamiquement le titre du Blog. |
| **T.123.12.1** | Variables et Tableaux | Stocker les données d'un article dans des variables et tableaux associatifs. | Tableau `$articles` contenant 2 articles en dur. |
| **T.123.13.1** | Les conditions (`if / else`) | Prendre des décisions logiques en PHP. | Afficher un badge "Nouveau" si l'article est récent. |
| **T.123.14.1** | Les boucles (`foreach`) | Parcourir une collection de données pour répéter un affichage. | Boucle affichant tous les articles sur la page d'accueil. |

## Unité 2 : Organisation du code (Session S5)
*Livrable : Accueil avec appel de fonctions.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.123.15.1** | Créer et utiliser des fonctions | Organiser le code en blocs réutilisables. | Fonction `get_derniers_articles()` appelée dans l'accueil. |

## Unité 3 : Transmission de paramètres (Session S7)
*Livrable : Page de détail dynamique.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.123.16.1** | La méthode `$_GET` | Récupérer des paramètres depuis l'URL. | Page `article.php?id=X` dynamique. |

## Unité 4 : Formulaires et Contrôle (Session S8)
*Livrable : Ajout de catégorie avec vérification.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.123.17.1** | La méthode `$_POST` et Contrôle | Récupérer et valider les données d'un formulaire. | Validation du formulaire d'ajout de catégorie. |

## Unité 5 : Traitement PHP Complet (Session S9)
*Livrable : Gestion des articles complète.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.123.18.1** | Logique métier et Redirection | Combiner variables, requêtes et redirection (`header`). | Ajout complet d'un article et retour liste. |

## Unité 6 : Sécurité et Sessions (Session S10)
*Livrable : Espace d'administration sécurisé.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.123.20.1** | Les Sessions (`$_SESSION`) | Maintenir l'état de connexion d'un utilisateur. | Script `login.php` et `check.php`. |
| **T.123.20.2** | Hachage de mot de passe | Vérifier un mot de passe sécurisé. | Utilisation de `password_verify()` à la connexion. |
