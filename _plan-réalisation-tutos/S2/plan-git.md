# Plan de Réalisation — Versionner son travail avec Git (Session S2 & Vue Globale)

**Domaine de compétence :** Versionner son propre travail (`D.151.1`)  
**Session de première mobilisation :** S2 — Page de détail d’un article — V1 statique  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S2 (première session mobilisant Git). Il formalise la méthodologie générale et l'ensemble des tutoriels Git pour **les 12 sessions de la formation**. Dans les sessions suivantes (S3, S5, S6, S7, S8, S9, S10), l'apprenant réalisera l'Unité d'Apprentissage prévue à son sprint à partir de ce document unique de référence.

---

## 1. Méthodologie Pédagogique de Git en Niveau N1

Git est abordé de manière progressive, pratique et rassurante :
* **D'abord l'interface graphique puis les commandes :** Découverte visuelle dans VS Code puis mémorisation de la routine classique du développeur dans le terminal.
* **Vocabulaire simple et imagé :**
  - Le *dossier de travail* : mon bureau où je modifie mes fichiers.
  - La *zone de préparation* (`git add`) : le carton où je dépose les fichiers prêts à être photographiés.
  - Le *commit* (`git commit`) : la photo officielle et datée de mon projet.
  - Le *dépôt distant* GitHub (`git push`) : la copie de sauvegarde sur Internet.
* **Routine sécurisée :** Toujours vérifier l'état avec `git status` avant et après chaque action.

---

## 2. Articulation Temporelle par Session (S2 à S12)

### ⏮️ Acquis Passés (Session S1)
- Découverte du rôle de Git et de l'intérêt de sauvegarder l'historique du projet pour collaborer (Veille prospective `UA.161.11`).

### 🎯 Unité d'Apprentissage Mobilisée dans ce Sprint (Session S2)
- **UA.151.11 — Déposer son premier travail sur GitHub :**  
  Configurer son identité, initialiser un dépôt local, associer un dépôt distant sur GitHub et envoyer sa première version fonctionnelle du Blog.

### ⏭️ Perspectives Futures (Sessions S3 à S12)
- **S3 (UA.151.12) :** Enregistrer une modification (`git status`, `git add`, `git commit`).
- **S5 (UA.151.13) :** Organiser ses commits avec des messages clairs et atomiques.
- **S6 (UA.151.14) :** Consulter l'historique du projet avec `git log`.
- **S7 (UA.151.15) :** Retrouver et restaurer une version antérieure avec `git checkout` / `git restore`.
- **S8 (UA.151.16) :** Synchroniser son travail avec GitHub (`git push` et `git pull`).
- **S9 (UA.151.17) :** Cloner et récupérer son projet dans un autre dossier avec `git clone`.
- **S10 (UA.151.18) :** Maintenir un travail versionné, propre et toujours récupérable.

---

## 3. Grille Complète des Tutoriels Git (S2 à S10)

| Identifiant | Session | Titre du tutoriel | Unité ciblée | Livrable attendu |
| :--- | :---: | :--- | :---: | :--- |
| **T.151.11.1** | **S2** | Configurer son identité Git dans le terminal | UA.151.11 | Nom et email renseignés avec `git config`. |
| **T.151.11.2** | **S2** | Initialiser le dépôt local du Blog | UA.151.11 | Dépôt local créé avec `git init`. |
| **T.151.11.3** | **S2** | Relier le projet à un dépôt GitHub distant | UA.151.11 | Dépôt distant configuré avec `git remote add origin`. |
| **T.151.11.4** | **S2** | Réaliser son premier commit et son premier push | UA.151.11 | Code de la page article visible sur GitHub. |
| **T.151.12.1** | **S3** | Comprendre les 3 zones de Git | UA.151.12 | Schéma d'exécution Dossier ➔ Index ➔ Dépôt. |
| **T.151.12.2** | **S3** | La routine locale du développeur : status, add, commit | UA.151.12 | Commit de modification enregistré localement. |
| **T.151.13.1** | **S5** | Rédiger des messages de commit professionnels | UA.151.13 | Historique avec verbes d'action et messages clairs. |
| **T.151.14.1** | **S6** | Explorer l'historique des commits avec git log | UA.151.14 | Liste des versions visualisée dans le terminal. |
| **T.151.15.1** | **S7** | Créer un fichier .gitignore et annuler des erreurs | UA.151.15 | Fichier `.gitignore` actif et modifications annulées. |
| **T.151.16.1** | **S8** | Synchroniser son travail avec git push et git pull | UA.151.16 | Modifications partagées et récupérées sans conflit. |
| **T.151.17.1** | **S9** | Cloner un projet existant depuis GitHub | UA.151.17 | Projet cloné dans un nouvel environnement de test. |
| **T.151.18.1** | **S10** | Vérifier l'état de sauvegarde complète du projet | UA.151.18 | Rapport de conformité du dépôt GitHub final. |

---

## 4. Fiches Détaillées des Tutoriels Mobilisés en Session S2

### T.151.11.1 — Configurer son identité Git dans le terminal
- **Objectif :** Indiquer à Git le nom et l'adresse email de l'auteur pour signer chaque sauvegarde.
- **Notions :** Commandes `git config --global user.name` et `git config --global user.email`.
- **Consigne pas-à-pas :**
  1. Ouvrir le terminal intégré dans VS Code (`Ctrl + ù` ou `Terminal > Nouveau terminal`).
  2. Taper : `git config --global user.name "Prénom Nom"`.
  3. Taper : `git config --global user.email "mon.email@example.com"`.
  4. Vérifier avec : `git config --list`.
- **Résultat attendu :** Les informations d'identité s'affichent correctement dans la liste de configuration.

---

### T.151.11.2 — Initialiser le dépôt local du Blog
- **Objectif :** Transformer le dossier de travail du Blog en un dépôt suivi par Git.
- **Notions :** Commande `git init`, création du dossier invisible `.git/`.
- **Consigne pas-à-pas :**
  1. Vérifier que le terminal se trouve bien à la racine du projet Blog.
  2. Taper la commande : `git init`.
  3. Taper `git status` pour observer la liste des fichiers détectés non suivis (*untracked files*).
- **Résultat attendu :** Le message *« Initialized empty Git repository »* confirme l'activation de Git.

---

### T.151.11.3 — Relier le projet à un dépôt GitHub distant
- **Objectif :** Établir la passerelle entre l'ordinateur de l'apprenant et son compte GitHub.
- **Notions :** Dépôt public GitHub, URL de dépôt, commande `git remote add origin <URL>`.
- **Consigne pas-à-pas :**
  1. Se connecter sur [GitHub](https://github.com) et créer un nouveau dépôt vide nommé `mon-blog-personnel`.
  2. Ne pas cocher "Add a README" ni "Add .gitignore".
  3. Copier l'URL HTTPS du dépôt fourni par GitHub.
  4. Dans le terminal local, taper : `git remote add origin <URL-COPIÉE>`.
  5. Vérifier la liaison avec : `git remote -v`.
- **Résultat attendu :** L'adresse distante `origin` est enregistrée pour l'envoi (*push*) et la réception (*fetch*).

---

### T.151.11.4 — Réaliser son premier commit et son premier push
- **Objectif :** Enregistrer la première version de la page article et l'envoyer sur GitHub.
- **Notions :** `git add .`, `git commit -m "..."`, `git branch -M main`, `git push -u origin main`.
- **Consigne pas-à-pas :**
  1. Ajouter tous les fichiers dans la zone de préparation : `git add .`.
  2. Vérifier avec `git status` : tous les fichiers passent en vert.
  3. Créer le premier commit : `git commit -m "feat: création de la page de détail d'un article v1"`.
  4. Renommer la branche principale : `git branch -M main`.
  5. Envoyer le code sur GitHub : `git push -u origin main`.
- **Résultat attendu :** La page GitHub affiche l'arborescence des fichiers du Blog avec le message du commit.
