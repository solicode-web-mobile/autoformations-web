---
name: domaine-php-sql
description: >-
  Expert en règles de rédaction pour les tutoriels d'accès aux bases de données avec PHP et PDO (php-sql).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel reliant PHP à MySQL via PDO (requêtes préparées, CRUD, affichage dynamique).
---

# Règles de rédaction - Domaine PHP & SQL (PDO)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels traitant de la connexion, de l'interrogation et de l'exploitation des données MySQL au sein d'une application PHP (domaine D.124.2).

## 1. Utilisation Exclusive de PDO et Sécurité Anti-Injection (Règle d'or)

* **PDO uniquement** : L'extension PDO (`PHP Data Objects`) est le standard unique d'apprentissage. Ne jamais utiliser l'extension obsolète `mysqli_*`.
* **Requêtes préparées obligatoires** : Dès qu'une requête dépend d'une variable ou d'une entrée utilisateur (issue de `$_GET`, `$_POST`, etc.), l'utilisation des requêtes préparées avec marqueurs nommés (ou anonymes `?`) est **strictement obligatoire** :

```php
// ✅ Correct : Requête préparée anti-injection
$stmt = $pdo->prepare("SELECT * FROM articles WHERE id = :id");
$stmt->execute(['id' => $id]);
$article = $stmt->fetch();
```

```php
// ❌ STRICTEMENT INTERDIT : Concaténation de variables dans le SQL
$stmt = $pdo->query("SELECT * FROM articles WHERE id = " . $_GET['id']);
```

* **Gestion robuste de la connexion** : La connexion PDO doit être instanciée dans un bloc `try ... catch (PDOException $e)` avec l'attribut d'erreur `PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION`.

## 2. Démarche Pédagogique d'Intégration des Données

La chaîne de traitement complète doit être expliquée pas-à-pas :
1. **Connexion** : Fichier dédié (ex: `db.php` ou `connexion.php`) instanciant l'objet `$pdo`.
2. **Requête** : Préparation et exécution de la requête SQL côté serveur.
3. **Extraction** : Récupération des données via `$stmt->fetchAll(PDO::FETCH_ASSOC)` pour une liste ou `$stmt->fetch(PDO::FETCH_ASSOC)` pour un élément unique.
4. **Restitution** : Boucle PHP (`foreach`) dans le HTML pour afficher dynamiquement les données sous forme de cartes, listes ou tableaux.

## 3. Gestion des Opérations CRUD

Pour chaque opération du CRUD, appliquer le modèle adapté :
* **Create (`INSERT`)** : Formulaire HTML → Contrôle PHP → `$pdo->prepare("INSERT ...")` → Redirection avec `header("Location: liste.php")`.
* **Read (`SELECT`)** : `$pdo->query()` pour les listes statiques, `$pdo->prepare()` pour les filtres ou détails.
* **Update (`UPDATE`)** : Pré-remplissage du formulaire avec les données existantes → Soumission → Exécution de l'UPDATE → Redirection.
* **Delete (`DELETE`)** : Lien ou bouton sécurisé par méthode POST ou paramètre d'action → Confirmation → Suppression.

## 4. Livrables Attendus

* Projet PHP local connecté à une base MySQL opérationnelle (ex: sous Laragon ou XAMPP).
* Code source modulaire : fichier de connexion (`db.php`) distinct des fichiers d'actions (`ajouter.php`, `supprimer.php`) et des vues (`index.php`).
* Preuve d'exécution : affichage dynamique dans le navigateur de données ajoutées ou modifiées en direct dans la base de données.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel PHP-SQL, vérifiez systématiquement :
> "Toute requête intégrant une variable utilise-t-elle bien `prepare()` et `execute()` ?"
> "La connexion PDO active-t-elle le mode d'exception pour détecter les erreurs SQL ?"
> "Les données extraites sont-elles correctement échappées avec `htmlspecialchars()` lors de l'affichage HTML ?"
> "Le schéma SQL de la table requise est-il rappelé pour permettre à l'apprenant de tester immédiatement ?"
