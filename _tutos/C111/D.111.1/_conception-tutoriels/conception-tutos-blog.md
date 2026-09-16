Voici les **9 fiches de conception adaptées** spécifiquement aux maquettes HTML fournies pour le Blog. Chaque action fait désormais référence aux fichiers HTML exacts de l'application.

# Fiches de conception des tutoriels — N1 (Adaptées au Blog)

## T.111.111 — Comprendre le contexte et les espaces d’un Blog

### 1. Objectif du tutoriel
Permettre à l’apprenant de comprendre le rôle général du Blog et d’identifier ses différents espaces en ouvrant concrètement les différents fichiers HTML de la maquette.

### 2. Notions de base à expliquer
* Application.
* Contexte fonctionnel.
* Finalité d’une application.
* Espace public.
* Espace de connexion.
* Espace administration.
* Page / écran.

### 3. Actions concrètes sur la maquette
* Parcourir l'ensemble des fichiers `.html` présents dans le dossier `maquettes-blog/`.
* Ouvrir et identifier la page d’accueil (`public-index.html`).
* Ouvrir et identifier les autres pages publiques (`public-article.html`, `public-categorie.html`, `public-apropos.html`).
* Ouvrir la page de connexion (`admin-login.html`).
* Ouvrir le tableau de bord d'administration (`admin-dashboard.html`).
* Ouvrir les pages de gestion (`admin-articles.html`, `admin-categories.html` et leurs formulaires).
* Regrouper physiquement les fichiers par espace : Espace Public (`public-*.html`), Espace Connexion (`admin-login.html`), Espace Administration (`admin-*.html`).
* Produire un schéma très simple des espaces du Blog avec les noms des fichiers correspondants.

---

## T.111.112 — Identifier les acteurs du Blog

### 1. Objectif du tutoriel
Permettre à l’apprenant d’identifier quels utilisateurs se servent des différents fichiers HTML de la maquette.

### 2. Notions de base à expliquer
* Acteur.
* Utilisateur.
* Visiteur.
* Administrateur.
* Rôle.
* Espace utilisé par un acteur.

### 3. Actions concrètes sur la maquette
* Observer le rendu des pages de l'espace public (`public-index.html`, etc.).
* Déduire que n'importe qui (le Visiteur) peut consulter ces pages.
* Observer le rendu des pages d'administration (`admin-dashboard.html`).
* Remarquer la nécessité de s'identifier via `admin-login.html` pour y accéder (l'Administrateur).
* Associer chaque acteur à ses fichiers HTML.
* Produire un tableau croisant l'acteur (Visiteur/Administrateur) et l'espace/fichiers utilisés.

---

# UA.111.12 — Actions du Visiteur

## T.111.121 — Identifier les actions du Visiteur sur le Blog public

### 1. Objectif du tutoriel
Permettre à l’apprenant d’ouvrir les fichiers de la partie publique et d'y lister les actions réalisables en cliquant sur les éléments.

### 2. Notions de base à expliquer
* Action.
* Élément d’interface.
* Lien / Bouton.
* Formulaire.
* Consultation / Navigation.
* Connexion.

### 3. Actions concrètes sur la maquette
* Ouvrir `public-index.html` : repérer les liens du menu principal, les clics sur les catégories et les boutons "Lire la suite" des articles.
* Ouvrir `public-article.html` : repérer ce qui est lisible et cliquable.
* Ouvrir `public-categorie.html` : repérer le filtrage visuel des articles par catégorie.
* Ouvrir `admin-login.html` : repérer les champs "Email" et "Mot de passe", ainsi que le bouton de soumission "Se connecter".
* Dresser une liste brute des actions repérées sur ces 4 fichiers.

---

## T.111.122 — Organiser les actions du Visiteur

### 1. Objectif du tutoriel
Permettre à l’apprenant de nettoyer, regrouper et formuler correctement les actions observées dans les fichiers publics.

### 2. Notions de base à expliquer
* Regroupement.
* Action d’un acteur.
* Liste d’actions.
* Catégorisation simple par écran.

### 3. Actions concrètes sur la maquette
* Reprendre la liste brute issue de `public-index.html`, `public-article.html`, `public-categorie.html` et `admin-login.html`.
* Regrouper les actions par fichier/écran.
* Supprimer les redondances (ex: "cliquer sur accueil" et "retour à l'accueil").
* Formuler chaque action avec un verbe à l'infinitif (ex: "Consulter un article", "Se connecter").
* Produire la liste propre des actions du Visiteur.

---

# UA.111.13 — Actions de l’Administrateur

## T.111.131 — Identifier les actions de l’Administrateur

### 1. Objectif du tutoriel
Permettre à l’apprenant d’ouvrir les fichiers d'administration et d'y identifier les boutons et liens d'action spécifiques.

### 2. Notions de base à expliquer
* Administration.
* Gestion.
* Consultation (liste).
* Ajout (formulaire).
* Modification.
* Suppression.
* Élément géré.

### 3. Actions concrètes sur la maquette
* Ouvrir `admin-dashboard.html` : repérer les cartes statistiques et les liens vers les gestions.
* Ouvrir `admin-articles.html` : repérer le tableau, le bouton "Ajouter un article", et les icônes/boutons "Modifier" et "Supprimer" sur chaque ligne.
* Ouvrir `admin-article-form.html` : repérer le formulaire de saisie pour ajouter ou modifier.
* Ouvrir `admin-categories.html` et `admin-categorie-form.html` : repérer les mêmes mécaniques (tableau, boutons d'action, formulaire).
* Lier chaque bouton repéré à l'intention de l'Administrateur (ajouter, modifier, supprimer, lister).

---

## T.111.132 — Organiser les actions de l’Administrateur

### 1. Objectif du tutoriel
Permettre à l’apprenant de regrouper les actions de l’Administrateur par "Entité" (Articles, Catégories).

### 2. Notions de base à expliquer
* Regroupement par Entité / Élément géré.
* Actions de gestion.
* Cohérence entre action et élément.

### 3. Actions concrètes sur la maquette
* Reprendre les actions repérées sur `admin-articles.html` et `admin-article-form.html` et les regrouper sous le titre "Articles".
* Reprendre les actions repérées sur `admin-categories.html` et `admin-categorie-form.html` et les regrouper sous le titre "Catégories".
* Formuler clairement la liste complète des actions de gestion (ex: "Ajouter un article", "Modifier une catégorie").
* Produire la synthèse des actions de l'Administrateur.

---

# UA.111.14 — Identifier les fonctionnalités

## T.111.141 — Transformer une action en fonctionnalité

### 1. Objectif du tutoriel
Permettre à l’apprenant de transformer une action observée dans les fichiers HTML en une phrase fonctionnelle standardisée.

### 2. Notions de base à expliquer
* Fonctionnalité.
* Formulation fonctionnelle : **Acteur + action + élément**.

### 3. Actions concrètes sur la maquette
* Choisir une action (ex: bouton "Se connecter" dans `admin-login.html`).
* Construire la phrase : "Le Visiteur (Acteur) se connecte (Action) au back-office (Élément)".
* Choisir une action de l'admin (ex: bouton "Ajouter" dans `admin-articles.html`).
* Construire la phrase : "L'Administrateur ajoute un article".
* Appliquer cette formulation à toutes les actions listées dans les tutoriels précédents.
* Produire une liste propre de fonctionnalités.

---

## T.111.142 — Décrire une fonctionnalité avec acteur, écran, action et résultat

### 1. Objectif du tutoriel
Permettre à l’apprenant de simuler le passage d'un fichier HTML à un autre en décrivant le parcours fonctionnel.

### 2. Notions de base à expliquer
* Parcours simple.
* Relation : **Acteur → écran → action → résultat**.

### 3. Actions concrètes sur la maquette
* Prendre l'exemple de la lecture d'un article.
* Décrire : Visiteur → `public-index.html` → Clique sur "Lire la suite" → `public-article.html` s'affiche.
* Prendre l'exemple de l'ajout d'une catégorie.
* Décrire : Administrateur → `admin-categories.html` → Clique sur "Ajouter" → `admin-categorie-form.html` s'affiche.
* Rédiger 3 ou 4 parcours illustratifs basés sur les maquettes réelles pour bien comprendre la navigation.

---

## T.111.143 — Produire la synthèse fonctionnelle du Blog

### 1. Objectif du tutoriel
Permettre à l’apprenant de réunir l'ensemble du travail d'observation des maquettes pour produire le tableau fonctionnel final.

### 2. Notions de base à expliquer
* Synthèse.
* Organisation d’une description fonctionnelle simple.

### 3. Actions concrètes sur la maquette
* Créer un tableau final avec deux grandes colonnes ou sections : "Visiteur" et "Administrateur".
* Insérer pour le Visiteur toutes ses fonctionnalités (Consulter les articles, Consulter une catégorie, Consulter le détail, Se connecter).
* Insérer pour l'Administrateur toutes ses fonctionnalités (Gérer les articles : lister/ajouter/modifier/supprimer, Gérer les catégories : lister/ajouter/modifier/supprimer).
* Ajouter en face de chaque fonctionnalité les fichiers HTML (`public-*.html`, `admin-*.html`) correspondants.
* Livrer le document de synthèse fonctionnelle, qui servira de base à toute la formation.

---

# Consignes globales pour les rédacteurs

* **Public cible : N1 débutant.**
* Utiliser un **français A1-A2**, des **phrases courtes** et des **verbes d’action**.
* Partir toujours de la **maquette existante du Blog** : citez systématiquement le nom du fichier HTML (`public-index.html`, etc.) concerné par l'explication.
* Chaque tutoriel doit suivre la logique : **notion → exemple → observation du fichier HTML → application → résultat**.
* Montrer clairement le **résultat attendu** à la fin du tutoriel.
* Éviter les termes complexes (UML, Merise, cas d’utilisation) et ne pas demander de modélisation formelle au N1.
* Les tutoriels doivent permettre à l’apprenant d’ouvrir les fichiers HTML chez lui et de reproduire la démarche d'observation.
