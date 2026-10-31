# Domaine PHP & Base de Données (`domaine-php-sql`)

> **Ressource Didactique — Solicode**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Connexion PDO, requêtes préparées, CRUD dynamique, sécurité SQL.

---

## 1. Connexion Sécurisée via PDO
- Toujours utiliser `PDO` avec gestion robuste des exceptions :
  ```php
  try {
      $pdo = new PDO("mysql:host=localhost;dbname=blog;charset=utf8mb4", "root", "", [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
      ]);
  } catch (PDOException $e) {
      die("Erreur de connexion : " . $e->getMessage());
  }
  ```

---

## 2. Interdiction Absolue de Concaténation de Variables
- **Règle inviolable :** Toute requête contenant des données provenant de l'utilisateur doit obligatoirement utiliser une **requête préparée** :
  ```php
  // ✅ Correct : Requête préparée avec paramètres nommés ou ?
  $stmt = $pdo->prepare("SELECT * FROM articles WHERE id_article = :id");
  $stmt->execute(['id' => $id]);
  $article = $stmt->fetch();

  // ❌ INTERDIT : Concaténation ouvrant une faille d'injection SQL
  // $pdo->query("SELECT * FROM articles WHERE id_article = " . $_GET['id']);
  ```

---

## 3. Séparation Configuration & Affichage
- Le fichier de configuration de la base (`db.php` ou `connexion.php`) doit être isolé et inclus avec `require_once`.
- L'affichage des données dans la page se fait avec une boucle `foreach` propre et `htmlspecialchars()`.
