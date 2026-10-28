# Session S2 — Page de détail d'un article — V1 statique

Bienvenue dans le guide de cadrage de la **Session S2**.  
Dans cette session, l'apprenant construit la première page Web statique du Blog (la page de détail d'un article). Il découvre le versionnement avec Git, structure son projet, apprend à déboguer pas à pas et pose les bases d'une organisation professionnelle de son travail.

---

## 1. Objectifs Pédagogiques du Sprint S2

* **Développement Web :** Écrire le code HTML5 sémantique et la feuille de style CSS3 de la page article.
* **Versionnement :** Initialiser son premier dépôt Git local et publier son travail sur GitHub.
* **Architecture :** Séparer proprement le contenu HTML, les styles dans `css/` et les images dans `images/`.
* **Débogage :** Poser ses premiers points d'arrêt dans les DevTools pour inspecter les variables pas à pas.
* **Gestion du travail :** Identifier les critères d'acceptation d'une tâche et rédiger sa fiche de mission.
* **Algorithmique & Données :** Approfondir les conditions et boucles dans le Sandbox JS et formaliser le dictionnaire des données.

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement web applicatif s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le point de départ remis à l'apprenant contenant **uniquement les ressources graphiques** (`images/author.jpg`, `images/article-cover.png`, `images/article-example.png`). L'apprenant crée lui-même toute sa structure HTML et ses styles CSS à partir de zéro.
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Le code cible finalisé que l'apprenant apprend à écrire au fil des tutoriels :
  - `public-article.html` (page complète structurée en HTML5).
  - `css/style.css` (feuille de style complète pour la page article).

---

## 3. Index des Plans de Réalisation du Sprint S2

Pour éviter toute redondance et garantir une vision claire, chaque volet d'apprentissage fait l'objet d'un fichier dédié :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'intégration pas-à-pas de la page article (`UA.122.11`, `UA.122.12`, `UA.122.21`) reliant [dossier-depart/](dossier-depart/) à [code-a-apprendre/](code-a-apprendre/).

### B. Nouveaux Domaines Techniques Mobilisés (Plans Uniques Rédigés pour les 12 Sessions)
* **[plan-git.md](plan-git.md) :**  
  Méthodologie Git et grille complète des tutoriels de versionnement (`UA.151.11` à `UA.151.18`).
* **[plan-gestion.md](plan-gestion.md) :**  
  Organisation du travail, estimation du temps et communication (`UA.152.21` à `UA.152.18`).
* **[plan-architecture.md](plan-architecture.md) :**  
  Séparation des responsabilités et structuration des dossiers (`UA.125.11` à `UA.125.16`).
* **[plan-debogage.md](plan-debogage.md) :**  
  Méthode d'investigation et utilisation des DevTools (`UA.125.21` à `UA.125.24`).

### C. Domaines Transversaux Mobilisés (Référencés depuis la Session S1)
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.12** (*Veille sur la mise en page moderne : Flexbox et Grid* préparant S3).
* **[plan-analyse.md](../S1/plan-analyse.md) :**  
  Mobilisation de l'Unité **UA.111.12** (*Identifier les actions des acteurs - partie public*).
* **[plan-conception.md](../S1/plan-conception.md) :**  
  Mobilisation de l'Unité **UA.112.12** (*Construire le dictionnaire de données*).
* **[plan-algo.md](../S1/plan-algo.md) :**  
  Mobilisation de l'Unité **UA.121.12** (*Contrôler l'exécution avec les conditions et les boucles*).

---

## 4. Livrables Attendus à la Fin de la Session S2

1. Le fichier `public-article.html` et sa feuille `css/style.css` validés et fonctionnels dans le navigateur.
2. Le projet versionné localement avec un premier commit propre et publié sur un dépôt GitHub public.
3. Le dictionnaire de données décrivant les champs de l'article (titre, contenu, date, auteur, catégorie).
4. La trace d'un débogage pas à pas réalisé dans les DevTools avec observation des variables.
5. Une fiche de tâche simple complétée avant le démarrage de l'intégration.
6. Une slide synthétique de veille technologique sur Flexbox et CSS Grid partagée avec un lien public.
