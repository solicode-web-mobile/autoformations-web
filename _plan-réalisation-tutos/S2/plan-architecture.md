# Plan de Réalisation — Structuration du Code et Architecture Web (Session S2 & Vue Globale)

**Domaine de compétence :** Structurer le code (`D.125.1`)  
**Session de première mobilisation :** S2 — Page de détail d’un article — V1 statique  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S2 (première session mobilisant l'architecture de code). Il formalise la méthodologie générale et l'ensemble des tutoriels d'architecture pour **les 12 sessions de la formation**. Dans les sessions suivantes (S3, S4, S6, S7, S8), l'apprenant réalisera l'Unité d'Apprentissage prévue à son sprint à partir de ce document unique de référence.

---

## 1. Méthodologie Pédagogique de l'Architecture en Niveau N1

Structurer une application Web consiste à ranger méthodiquement chaque élément à sa place pour que le projet reste propre, compréhensible et facile à maintenir :
* **Principe fondamental : la séparation des responsabilités :**
  - Le contenu informatif va dans les fichiers HTML.
  - La mise en forme et les couleurs vont dans le dossier `css/`.
  - Les visuels et illustrations vont dans le dossier `images/`.
  - Plus tard, la logique métier ira dans les fichiers PHP et la base de données dans MySQL.
* **Maîtrise absolue des chemins relatifs :** L'apprenant doit comprendre sans ambiguïté comment pointer vers un sous-dossier (`css/style.css`, `images/author.jpg`) ou remonter d'un niveau (`../`).

---

## 2. Articulation Temporelle par Session (S2 à S12)

### ⏮️ Acquis Passés (Session S1)
- Observation de l'arborescence générale du projet cible et découverte des 4 rôles fondamentaux (HTML, CSS, JS, PHP) lors de la veille prospective `UA.161.11`.

### 🎯 Unité d'Apprentissage Mobilisée dans ce Sprint (Session S2)
- **UA.125.11 — Structurer le code d’une page simple :**  
  Organiser le projet en séparant le fichier HTML principal, le dossier de styles `css/` et le dossier des ressources visuelles `images/`, et relier ces éléments avec des chemins relatifs valides.

### ⏭️ Perspectives Futures (Sessions S3 à S12)
- **S3 (UA.125.12) :** Structurer un site Web statique multi-pages avec ressources CSS et médias partagés.
- **S4 (UA.125.13) :** Structurer une page dynamique en séparant le traitement logique (`index.php`) et le template d'affichage (`index-template.php`).
- **S6 (UA.125.14) :** Structurer l'accès aux données en isolant la connexion PDO dans un fichier dédié `db.php`.
- **S7 (UA.125.15) :** Structurer un site dynamique complet avec réutilisation transverse des modules.
- **S8 (UA.125.16) :** Structurer la séparation entre l'espace public (consultation) et l'espace administration privé (`admin/`).

---

## 3. Grille Complète des Tutoriels d'Architecture (S2 à S8)

| Identifiant | Session | Titre du tutoriel | Unité ciblée | Livrable attendu |
| :--- | :---: | :--- | :---: | :--- |
| **T.125.11.1** | **S2** | Séparer le contenu, les styles et les médias | UA.125.11 | Arborescence avec dossiers `css/` et `images/`. |
| **T.125.11.2** | **S2** | Construire et vérifier les chemins relatifs d'une page | UA.125.11 | Liens d'images et de CSS fonctionnels sans erreur 404. |
| **T.125.12.1** | **S3** | Organiser les ressources partagées pour un site multi-pages | UA.125.12 | Deux pages HTML (`index` et `article`) partageant le même CSS. |
| **T.125.13.1** | **S4** | Séparer la logique de traitement et le template d'affichage | UA.125.13 | Séparation nette entre `index.php` et `index-template.php`. |
| **T.125.14.1** | **S6** | Isoler la configuration et la connexion à la base de données | UA.125.14 | Fichier `db.php` indépendant inclus dans le traitement. |
| **T.125.15.1** | **S7** | Factoriser les blocs d'affichage récurrents | UA.125.15 | Architecture modulaire avec fonctions et inclusions sécurisées. |
| **T.125.16.1** | **S8** | Structurer le sous-dossier sécurisé de l'administration | UA.125.16 | Dossier `admin/` indépendant avec son propre agencement. |

---

## 4. Fiches Détaillées des Tutoriels Mobilisés en Session S2

### T.125.11.1 — Séparer le contenu, les styles et les médias
- **Objectif :** Construire une arborescence de fichiers professionnelle dès la première page réalisée.
- **Notions :** Racine du projet, sous-dossiers dédiés (`css/`, `images/`), lisibilité du code.
- **Consigne pas-à-pas :**
  1. À la racine du projet, créer le dossier `css`.
  2. À la racine du projet, créer le dossier `images`.
  3. Déplacer la feuille `style.css` dans le sous-dossier `css/`.
  4. Déplacer les illustrations (`article-cover.png`, `author.jpg`, etc.) dans le sous-dossier `images/`.
  5. Conserver le fichier HTML `public-article.html` directement à la racine.
- **Résultat attendu :** Une arborescence propre où aucun fichier CSS ou image ne flotte en vrac à la racine.

---

### T.125.11.2 — Construire et vérifier les chemins relatifs d'une page
- **Objectif :** Maîtriser l'écriture des chemins relatifs pour relier les ressources sans dépendre de l'emplacement du projet sur le disque dur.
- **Notions :** Chemin relatif descendant (`dossier/fichier`), nom exact avec respect de la casse, vérification dans le navigateur.
- **Consigne pas-à-pas :**
  1. Dans `public-article.html`, vérifier la ligne `<link rel="stylesheet" href="css/style.css">`.
  2. Vérifier les balises images : `<img src="images/author.jpg">` et `<img src="images/article-cover.png">`.
  3. Ouvrir la page dans le navigateur (avec Live Server ou directement).
  4. Ouvrir les DevTools (`F12 > onglet Réseau / Network`).
  5. Recharger la page (`Ctrl + F5`) et s'assurer qu'aucun fichier ne renvoie une erreur rouge `404 Not Found`.
- **Résultat attendu :** Toutes les ressources se chargent correctement avec un code HTTP `200 OK`.
