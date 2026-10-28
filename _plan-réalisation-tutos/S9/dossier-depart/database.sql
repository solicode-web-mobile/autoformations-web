-- Script de création de la base de données du Blog (Niveau N1)

CREATE DATABASE IF NOT EXISTS `blog_n1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `blog_n1`;

-- Table des administrateurs (ceux qui se connectent)
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(50) NOT NULL,
  `prenom` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `mot_de_passe` VARCHAR(255) NOT NULL
);

-- Table des auteurs (ceux qui écrivent les articles, gérés par l'admin)
CREATE TABLE IF NOT EXISTS `auteurs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(50) NOT NULL,
  `prenom` VARCHAR(50) NOT NULL,
  `image_profil` VARCHAR(255) DEFAULT NULL
);

-- Table des catégories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `libelle` VARCHAR(50) NOT NULL,
  `couleur` VARCHAR(20) NOT NULL DEFAULT 'bleu'
);

-- Table des articles
CREATE TABLE IF NOT EXISTS `articles` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titre` VARCHAR(255) NOT NULL,
  `contenu` TEXT NOT NULL,
  `image` VARCHAR(255) DEFAULT NULL,
  `date_creation` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categorie_id` INT NOT NULL,
  `auteur_id` INT NOT NULL,
  CONSTRAINT `fk_article_categorie` FOREIGN KEY (`categorie_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_article_auteur` FOREIGN KEY (`auteur_id`) REFERENCES `auteurs`(`id`) ON DELETE CASCADE
);

-- Insertion de données de test
INSERT INTO `utilisateurs` (`nom`, `prenom`, `email`, `mot_de_passe`) VALUES
('Admin', 'Super', 'admin@blog.local', '$2y$10$e3MG7k/3i2t6YK2qj0Q4rOQcwwcBQVzOkWnE9CA/4O..p4P8656/W');

INSERT INTO `categories` (`libelle`, `couleur`) VALUES
('Développement', 'bleu'),
('UI / UX', 'rose'),
('Management', 'vert');

INSERT INTO `auteurs` (`nom`, `prenom`, `image_profil`) VALUES
('Ali', 'Madani', 'author.jpg');

INSERT INTO `articles` (`titre`, `contenu`, `image`, `date_creation`, `categorie_id`, `auteur_id`) VALUES
('Le métier de développeur et ses principales missions', 'Le développeur crée des applications...', 'article-example.png', '2026-02-14 10:00:00', 1, 1),
('Design UI/UX : Les bases pour commencer', 'L’expérience utilisateur est primordiale...', 'article-example.png', '2026-02-15 14:30:00', 2, 1);
