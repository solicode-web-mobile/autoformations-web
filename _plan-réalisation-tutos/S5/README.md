# Session S5 — Page d’accueil du Blog — V3

Bienvenue dans le guide de cadrage de la **Session S5**.  
Dans cette session, l'apprenant franchit une étape essentielle d'ingénierie logicielle : **la modularisation du code PHP avec des fonctions** et **le passage au modèle relationnel (MLD)** en conception de données.

---

## 1. Objectifs Pédagogiques du Sprint S5

* **Développement Web (PHP Modulaire) :** Extraire la logique de données dans des fonctions réutilisables regroupées dans un fichier dédié `fonctions.php` et réusiner le contrôleur `index.php` (`UA.123.15`, `UA.123.19`).
* **Analyse du Besoin :** Regrouper les actions détaillées des acteurs en fonctionnalités cohérentes du système (`UA.111.14`).
* **Conception des Données :** Transformer le schéma conceptuel MCD en Modèle Logique de Données (MLD relationnel) avec tables, clés primaires et clés étrangères (`UA.112.15`).
* **Algorithmique :** Créer des fonctions JavaScript avec paramètres et valeurs de retour dans le Sandbox Algorithmique (`UA.121.14`).
* **Versionnement Git :** Regrouper des modifications cohérentes dans des commits séparés et utiliser des messages clairs (`UA.151.13`).
* **Gestion du Travail :** Décomposer une tâche technique en sous-actions ordonnées chronologiquement (`UA.152.13`).
* **Veille Technologique :** Découvrir ce qu'est une base de données relationnelle MySQL et le langage SQL pour préparer la session S6 (`UA.161.15`).

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement web applicatif s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le code hérité de la session S4 (`index.php` avec tableaux en dur, `index-template.php`, `css/`, `images/`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Le code cible modularisé que l'apprenant conçoit et apprend à structurer :
  - `fonctions.php` (fonctions `get_derniers_articles()` et `get_categories()`).
  - `index.php` (contrôleur allégé à moins de 10 lignes utilisant `require_once 'fonctions.php'`).

---

## 3. Index des Plans de Réalisation du Sprint S5

Pour respecter le principe de non-redondance, chaque volet d'apprentissage fait l'objet d'un fichier dédié accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'apprentissage pas-à-pas des fonctions PHP et de la modularité du code (`UA.123.15`, `UA.123.19`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-analyse.md](../S1/plan-analyse.md) :**  
  Mobilisation de l'Unité **UA.111.14** (*Identifier les fonctionnalités du système*).
* **[plan-conception.md](../S1/plan-conception.md) :**  
  Mobilisation de l'Unité **UA.112.15** (*Construire le Modèle Logique de Données relationnel - MLD*).
* **[plan-algo.md](../S1/plan-algo.md) :**  
  Mobilisation de l'Unité **UA.121.14** (*Créer et utiliser des fonctions dans le Sandbox JS*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.13** (*Organiser ses commits avec des messages explicites*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.13** (*Découper et ordonner son travail*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.15** (*Veille sur les bases de données et MySQL* préparant S6).

---

## 4. Livrables Attendus à la Fin de la Session S5

1. Le fichier modulaire `fonctions.php` contenant les fonctions retournant les collections d'articles et de catégories.
2. Le fichier contrôleur `index.php` réusiné, concis et propre, alimentant le template sans modification du rendu visuel.
3. Le schéma MLD relationnel validé (tables `articles`, `auteurs`, `categories` avec clés primaires et étrangères).
4. Le tableau fonctionnel regroupant les actions du système en cas d'utilisation identifiables.
5. Deux commits Git distincts enregistrés avec des messages conformes aux standards professionnels.
6. Une fiche de découpage chronologique d'une tâche technique décomposée en 4 sous-étapes.
7. Une slide de veille synthétique sur le rôle d'un SGBDR MySQL partagée avec un lien public.
