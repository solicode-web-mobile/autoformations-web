# Session S3 — Page d’accueil du Blog — V1 statique

Bienvenue dans le guide de cadrage de la **Session S3**.  
Dans cette session, l'apprenant franchit une étape majeure en concevant son premier **site Web multi-pages** : il construit la page d'accueil du Blog (`public-index.html`), structure plusieurs articles en grille responsive avec Flexbox, relie les pages entre elles et apprend à estimer son temps de travail.

---

## 1. Objectifs Pédagogiques du Sprint S3

* **Développement Web :** Structurer les grandes zones de la page d'accueil (`header`, `nav`, `hero`, `main`, `footer`), modéliser des cartes d'articles répétitives et les agencer en grille responsive avec Flexbox (`UA.122.13`, `UA.122.14`, `UA.122.22`, `UA.122.23`).
* **Architecture Web :** Organiser les ressources communes (`css/`, `images/`) pour faire fonctionner harmonieusement un site statique à plusieurs pages (`UA.125.12`).
* **Versionnement Git :** Réaliser son premier commit d'évolution du projet en utilisant le cycle `git status`, `git add`, `git commit` (`UA.151.12`).
* **Gestion du Travail :** Estimer la durée d'une tâche d'intégration en heures et comparer le temps prévu avec le temps réel (`UA.152.22`).
* **Analyse & Conception :** Identifier les actions de l'Administrateur dans l'application (`UA.111.13`) et déterminer les dépendances fonctionnelles entre les données (`UA.112.13`).
* **Algorithmique :** Manipuler les tableaux et les collections de données en JavaScript dans le Sandbox Algorithmique (`UA.121.13`).
* **Veille Technologique :** Découvrir le rôle d'un serveur Web et du langage dynamique PHP pour préparer le sprint suivant (`UA.161.13`).

---

## 2. Organisation des Ressources de Code du Sprint

La progression de développement web applicatif s'appuie sur deux dossiers de code :

* **[dossier-depart/](dossier-depart/) :**  
  Le code hérité de la session S2 comprenant la page de détail d'un article (`public-article.html`), la feuille de style de base (`css/style.css`) et les visuels (`images/`).
* **[code-a-apprendre/](code-a-apprendre/) :**  
  Le code cible finalisé que l'apprenant conçoit et apprend à écrire au fil des tutoriels :
  - `public-index.html` (page d'accueil complète avec menu, bannière hero et grille de cartes d'articles).
  - Les feuilles de style CSS enrichies pour l'agencement Flexbox et les cartes.
  - La navigation croisée fonctionnelle entre la page d'accueil et la page article.

---

## 3. Index des Plans de Réalisation du Sprint S3

Pour respecter le principe de non-redondance, chaque volet d'apprentissage fait l'objet d'un fichier dédié accessible par lien relatif :

### A. Progression de Développement Web Applicatif (Spécifique à ce Sprint)
* **[plan-developpement.md](plan-developpement.md) :**  
  Plan d'intégration pas-à-pas de la page d'accueil et de la grille d'articles (`UA.122.13`, `UA.122.14`, `UA.122.22`, `UA.122.23`).

### B. Domaines Transversaux Mobilisés (Référencés depuis les Sessions S1 et S2)
* **[plan-architecture.md](../S2/plan-architecture.md) :**  
  Mobilisation de l'Unité **UA.125.12** (*Structurer un site Web statique multi-pages*).
* **[plan-git.md](../S2/plan-git.md) :**  
  Mobilisation de l'Unité **UA.151.12** (*Enregistrer une modification dans l'historique Git*).
* **[plan-gestion.md](../S2/plan-gestion.md) :**  
  Mobilisation de l'Unité **UA.152.22** (*Estimer et organiser son temps*).
* **[plan-veille.md](../S1/plan-veille.md) :**  
  Mobilisation de l'Unité **UA.161.13** (*Veille sur le Web dynamique et le serveur PHP* préparant S4).
* **[plan-analyse.md](../S1/plan-analyse.md) :**  
  Mobilisation de l'Unité **UA.111.13** (*Identifier les actions des acteurs - partie admin*).
* **[plan-conception.md](../S1/plan-conception.md) :**  
  Mobilisation de l'Unité **UA.112.13** (*Déterminer les dépendances fonctionnelles*).
* **[plan-algo.md](../S1/plan-algo.md) :**  
  Mobilisation de l'Unité **UA.121.13** (*Manipuler les tableaux et collections en JavaScript*).

---

## 4. Livrables Attendus à la Fin de la Session S3

1. La page d'accueil `public-index.html` fonctionnelle avec sa barre de navigation Flexbox et sa grille de 6 articles.
2. La liaison bidirectionnelle entre `public-index.html` et `public-article.html` par des liens hypertextes valides.
3. Le nouveau commit Git enregistré dans l'historique local et envoyé sur GitHub avec un message explicite.
4. Une fiche d'estimation du temps renseignée avant la réalisation et confrontée au temps réel à la fin du sprint.
5. Une synthèse sur les dépendances fonctionnelles identifiées entre les données du Blog.
6. Le traitement JavaScript sur les tableaux d'articles validé dans le Sandbox Algorithmique.
7. Une slide de veille synthétique sur le fonctionnement d'un serveur Web et du langage PHP partagée avec un lien public.
