# Plan de Réalisation — Progression Développement Web (Session S12)

**Progression :** Développement Web Applicatif (Responsive Design, Recette finale & Soutenance)  
**Session :** S12 — Finaliser et présenter le Projet Fil Rouge  
**Niveau :** N1 (Débutant)  

---

## 1. Contexte & Objectif du Sprint S12

Dans cette douzième et ultime session, l'apprenant finalise **l'intégralité du Projet Fil Rouge Blog**. Il adapte l'ensemble des écrans (Public et Back-Office) aux différentes tailles d'écrans (smartphones, tablettes, ordinateurs) grâce au **Responsive Web Design**, effectue la recette finale de non-régression et prépare sa démonstration technique pour la soutenance devant le jury.

* **Problème résolu :** Jusqu'à présent, les pages étaient conçues pour des écrans d'ordinateur (desktop). Sur smartphone, le menu débordait, les grilles d'articles étaient illisibles et les tableaux admin étaient coupés.
* **Solution pédagogique :**
  1. Configurer la balise meta Viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0">` sur toutes les pages.
  2. Écrire les règles CSS adaptatives via des requêtes de médias (`@media (max-width: 768px)`) dans [code-a-apprendre/css/responsive.css](code-a-apprendre/css/responsive.css) (`UA.122.25`).
  3. Adapter la grille d'articles Flexbox/CSS Grid pour passer de 3 colonnes à 1 colonne sur smartphone.
  4. Rendre la barre latérale et les tableaux d'administration consultables sur mobile (`overflow-x: auto`).
  5. Fournir un script d'installation automatisé [code-a-apprendre/install.php](code-a-apprendre/install.php) permettant au jury d'initialiser l'application et sa base de données immédiatement.

```mermaid
flowchart TD
    Desktop["Écran Desktop (> 1024px)<br>Grille 3 colonnes + Sidebar fixe"]
    Tablet["Écran Tablette (768px - 1024px)<br>Grille 2 colonnes"]
    Mobile["Écran Mobile (< 768px)<br>Grille 1 colonne + Navigation empilée"]

    Desktop -->|@media max-width: 1024px| Tablet
    Tablet -->|@media max-width: 768px| Mobile
    Mobile --> Recette["Recette Complète & Déploiement<br>(install.php + Grille de Test)"]
    Recette --> Soutenance["Soutenance Finale N1 devant le Jury"]
```

---

## 2. Articulation Temporelle de la Progression

### ⏮️ Acquis Passés (Sessions S1 à S11)
- Maquettage HTML5 sémantique et mise en forme CSS3 pure (`UA.122.11`, `UA.122.21`, `UA.122.22`).
- Développement PHP procédural structuré en architecture Modèle/Contrôleur/Vue (`UA.123.11` à `UA.123.18`, `UA.125.13` à `UA.125.16`).
- Gestion de base de données MySQL et requêtes sécurisées PDO (`UA.124.11` à `UA.124.25`).
- Interactivité DOM client JavaScript (`UA.122.31` à `UA.122.36`).
- Contrôle d'accès et authentification par session (`admin/auth/check.php`).
- Tests manuels et vérification de non-régression (`UA.131.11`, `UA.131.12`).

### 🎯 Unités d'Apprentissage & Tutoriels Mobilisés dans ce Sprint (Session S12)

#### Construire l’interface (D.122.1, html & css)

* **UA.122.25 — Adapter une interface aux écrans :**  
  Adapter la disposition, les marges et les dimensions des composants de l'interface lorsque la largeur d'affichage change en utilisant les requêtes médias CSS (`@media`).
  - **T.122.25.1 — Adapter la navigation et la grille publique sur mobile**  
    *Livrable :* Règles CSS responsive pour l'en-tête et les cartes d'articles | *Fichier :* `css/responsive.css`
  - **T.122.25.2 — Adapter l'espace administration aux petits écrans**  
    *Livrable :* Tableaux défilants et barre latérale adaptée sur smartphone | *Fichier :* `css/responsive.css`

#### Finalisation et Déploiement Applicatif

* **T.125.16.2 — Script d'installation et recette finale de l'application :**  
  Automatiser le déploiement de la base de données et vérifier l'ensemble des parcours pour garantir une présentation sans accroc.
  - **T.125.16.2 — Déployer et valider l'application pour la soutenance**  
    *Livrable :* Script `install.php` opérationnel et recette finale validée | *Fichier :* `install.php`

### ⏭️ Perspectives Futures (Transition vers le Niveau N2)
- **Niveau N2 :** Programmation Orientée Objet (POO) en PHP, architecture MVC stricte, utilisation de bases de données relationnelles avancées et découverte des frameworks professionnels.

---

## 3. Fiches de Conception Détaillées des Tutoriels

### T.122.25.1 — Adapter la navigation et la grille publique sur mobile
- **Objectif :** Rendre les pages publiques du Blog agréables à lire sur smartphone et tablette sans zoom ni défilement horizontal parasite.
- **Notions :** `<meta name="viewport">`, règles `@media (max-width: 768px)`, flex-direction en colonne, grille 1 colonne.
- **Consigne pour l'apprenant :**
  1. Vérifier que la balise `<meta name="viewport" content="width=device-width, initial-scale=1.0">` est bien présente dans `<head>` de tous les templates.
  2. Dans [code-a-apprendre/css/responsive.css](code-a-apprendre/css/responsive.css), déclarer la requête `@media (max-width: 768px)`.
  3. Faire passer la barre de navigation `.barre-navigation` en disposition verticale (`flex-direction: column`).
  4. Redéfinir la grille des articles `.grille-articles` en une seule colonne (`grid-template-columns: 1fr`).
- **Résultat attendu :** En redimensionnant la fenêtre du navigateur en-dessous de 768px, les articles s'empilent parfaitement sur une seule colonne lisible.

---

### T.122.25.2 — Adapter l'espace administration aux petits écrans
- **Objectif :** Permettre à un administrateur d'utiliser le Back-Office sur un écran portable ou une tablette.
- **Notions :** Règle `overflow-x: auto` pour les tableaux volumineux, empilement de la barre latérale.
- **Consigne pour l'apprenant :**
  1. Dans `css/responsive.css`, sous la règle `@media (max-width: 768px)`, passer la barre latérale `.barre-laterale` en pleine largeur (`width: 100%`).
  2. Ajouter `overflow-x: auto;` sur le conteneur `.contenu-page` pour que le tableau des articles puisse défiler horizontalement sans briser la mise en page.
  3. Lier `css/responsive.css` dans [dossier-depart/admin/css/admin-style.css](dossier-depart/admin/css/admin-style.css).
- **Résultat attendu :** L'espace d'administration reste 100 % opérationnel et lisible sur smartphone.

---

### T.125.16.2 — Déployer et valider l'application pour la soutenance
- **Objectif :** Faciliter la mise en route du projet par un tiers (correcteur, jury, recruteur).
- **Notions :** Exécution de scripts SQL via PDO, vérification globale de bout-en-bout.
- **Consigne pour l'apprenant :**
  1. Créer le script [code-a-apprendre/install.php](code-a-apprendre/install.php) qui lit le fichier `database.sql` et reconstruit la base avec les données de démonstration.
  2. Tester l'installation sur une base propre en exécutant `http://localhost/install.php`.
  3. Dérouler la grille de recette complète : parcours visiteur (accueil, article, catégories, à propos) et parcours administrateur (connexion, catégories, articles, recherche, déconnexion).
- **Résultat attendu :** L'application est installée en un clic et prête pour une présentation sans faille devant le jury.
