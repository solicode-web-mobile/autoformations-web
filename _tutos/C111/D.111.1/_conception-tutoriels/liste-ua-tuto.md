# Programme N1 — 3 UA / 6 tutoriels

## UA.111.11 — Identifier le contexte et les acteurs

**Objectif :** comprendre le Blog, distinguer ses espaces et identifier les acteurs.

### T.111.111 — Comprendre le contexte et les espaces d’un Blog

**Objectif :** L’apprenant observe la maquette complète et apprend à distinguer le contexte général, la partie publique, la connexion et l’administration.

**Résultat :**

* **Espace Public** (Consultation libre) :
   - Page d'accueil
   - Page de détail d'un article
   - Page de liste des articles par catégorie
   - Page d'informations "À propos"

* **Espace de Connexion** (Barrière d'accès) :
   - Page de connexion (Formulaire)

* **Espace Administration** (Gestion sécurisée) :
   - Tableau de bord principal
   - Pages de gestion des articles (Liste et formulaire de saisie)
   - Pages de gestion des catégories (Liste et formulaire de saisie)

### T.111.112 — Identifier les acteurs du Blog

**Objectif :** L’apprenant observe les différents espaces pour identifier qui utilise l'application.

**Résultat :**

| Acteur             | Pages / Espace concerné                                                                                     | Rôle                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Visiteur**       | Pages de l'Espace Public (Accueil, Catégories, Détail d'un article, À propos)                               | Consulter librement les contenus du blog sans être identifié. |
| **Administrateur** | Page de Connexion et pages de l'Espace Administration (Tableau de bord, Gestion des articles et catégories) | S'identifier pour gérer et administrer les contenus du blog.  |

---

## UA.111.12 — Définir les fonctionnalités de la partie publique

**Objectif :** Repérer les actions du Visiteur et les formuler en fonctionnalités complètes.

### T.111.121 — Repérer les actions du Visiteur

**Objectif :** L’apprenant repère les actions possibles (liens, boutons, formulaires) pour le Visiteur.

**Résultat :**

*Sur la page d'accueil et les listes d'articles :*
- Cliquer sur les liens du menu (Accueil, Catégories, À propos).
- Cliquer sur un badge de catégorie.
- Cliquer sur "Lire la suite" d'un article.

*Sur la page de détail d'un article :*
- Lire/Consulter le titre, la date, l'auteur et le texte de l'article.
- Revenir à l'accueil via le logo.

*Sur la page de connexion :*
- Saisir l'adresse email.
- Saisir le mot de passe.
- Cliquer sur le bouton "Se connecter".

### T.111.122 — Formaliser les fonctionnalités du Visiteur

**Objectif :** L'apprenant regroupe les actions, applique la règle de nommage, décrit les parcours et produit la synthèse finale pour la partie publique.

**Résultat :**

**1. Règle de nommage (Acteur + Action + Élément) :**
- Le Visiteur consulte la liste des articles.
- Le Visiteur consulte les articles d'une catégorie.
- Le Visiteur consulte le détail d'un article.
- Le Visiteur s'authentifie (se connecte).

**2. Exemples de parcours fonctionnels :**
> **Acteur :** Visiteur
> **Écran de départ :** Page d'accueil
> **Action :** Clique sur le bouton "Lire la suite"
> **Résultat :** Affichage de la Page de détail de l'article

**3. Synthèse fonctionnelle de la partie publique :**
| Acteur | Fonctionnalités |
|---|---|
| **Visiteur** | - Consulter la liste des articles<br>- Consulter les articles d'une catégorie<br>- Consulter le détail d'un article<br>- S'authentifier (se connecter) |

---

## UA.111.13 — Définir les fonctionnalités de l'administration

**Objectif :** Repérer les actions de l'Administrateur et les formuler en fonctionnalités complètes.

### T.111.131 — Repérer les actions de l'Administrateur

**Objectif :** L’apprenant repère les actions visibles dans l'espace d'administration (boutons, formulaires).

**Résultat :**

*Sur le Tableau de bord :*
- Cliquer sur "Gestion des articles".
- Cliquer sur "Gestion des catégories".
- Cliquer sur "Se déconnecter".

*Sur la page des Articles :*
- Visualiser la liste des articles.
- Cliquer sur "Ajouter un article".
- Cliquer sur l'icône "Modifier" d'une ligne.
- Cliquer sur l'icône "Supprimer" d'une ligne.

*Sur le formulaire d'Article :*
- Remplir le formulaire (Titre, Image, Catégorie, Contenu) et Enregistrer.

*Sur les pages des Catégories (Liste et Formulaire) :*
- Voir la liste des catégories.
- Ajouter une catégorie (Remplir et Enregistrer).
- Modifier une catégorie.
- Supprimer une catégorie.

### T.111.132 — Formaliser les fonctionnalités de l'Administrateur

**Objectif :** L'apprenant regroupe les actions, applique la règle de nommage, décrit les parcours et produit la synthèse finale pour la partie admin.

**Résultat :**

**1. Règle de nommage (Acteur + Action + Élément) par Entité :**

**Articles :**
- L'Administrateur liste les articles.
- L'Administrateur ajoute un article.
- L'Administrateur modifie un article.
- L'Administrateur supprime un article.

**Catégories :**
- L'Administrateur liste les catégories.
- L'Administrateur ajoute une catégorie.
- L'Administrateur modifie une catégorie.
- L'Administrateur supprime une catégorie.

**2. Exemples de parcours fonctionnels :**
> **Acteur :** Administrateur
> **Écran de départ :** Page de gestion des catégories
> **Action :** Clique sur le bouton "Ajouter une catégorie"
> **Résultat :** Affichage du formulaire de création de catégorie

**3. Synthèse fonctionnelle de la partie admin :**
| Acteur | Fonctionnalités |
|---|---|
| **Administrateur** | **Gestion des Articles :**<br>- Lister les articles<br>- Ajouter un article<br>- Modifier un article<br>- Supprimer un article<br><br>**Gestion des Catégories :**<br>- Lister les catégories<br>- Ajouter une catégorie<br>- Modifier une catégorie<br>- Supprimer une catégorie |

---

## Vue synthétique

| UA            | Tutos | Logique                                                   |
| ------------- | ----: | --------------------------------------------------------- |
| **UA.111.11** |     2 | Où sommes-nous ? Qui utilise l’application ?              |
| **UA.111.12** |     2 | Quelles sont les fonctionnalités de la partie publique ?  |
| **UA.111.13** |     2 | Quelles sont les fonctionnalités de l'administration ?    |

**Total : 6 tutoriels.**

Cette organisation a l'avantage de faire de chaque UA un **petit bloc autonome** : un tutoriel montre la démarche sur la maquette, puis le second consolide la création de la fonctionnalité (nommage + parcours) et donne le livrable final (synthèse par espace) réutilisable.
