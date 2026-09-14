# Liste des Tutoriels Git N1 (Par Unité d'Apprentissage)

Ce document liste les tutoriels pratiques (mini-guides pas-à-pas) qui seront rédigés pour les apprenants. Ils sont classés par Unité d'Apprentissage (UA). 

*Rappel Pédagogique : Chaque tutoriel devra être rédigé avec un vocabulaire simple (A1-A2), des phrases courtes et des instructions orientées vers l'action.*

---

### UA.115.11 : Préparer l'environnement et déposer son premier travail avec VS Code
*(À intégrer dans la Session 2)*

1. **Tuto 1 : Installer et configurer Git sur son ordinateur**
   - *Objectif :* Installer le logiciel Git et taper ses premières commandes (`git --version`, `git config`) pour s'identifier avec son nom et son email.
2. **Tuto 2 : Comprendre les concepts de base : Git et GitHub**
   - *Objectif :* Comprendre avec des schémas très simples la différence entre l'outil local sur son ordinateur (Git) et le serveur distant sur Internet (GitHub).
3. **Tuto 3 : Sauvegarder son code en un clic avec VS Code**
   - *Objectif :* Utiliser l'interface graphique de VS Code (le panneau Source Control, le bouton + et le bouton Commit/Sync) pour réaliser sa première sauvegarde complète sans taper de ligne de commande.

---

### UA.115.12 : Sauvegarder son travail localement (Ligne de commande)
*(À intégrer dans la Session 3)*

4. **Tuto 4 : Les 3 zones de Git expliquées simplement**
   - *Objectif :* Comprendre le modèle mental de Git (Dossier de travail → Zone de préparation → Dépôt) avec une métaphore claire (ex: la salle d'attente avant la photographie).
5. **Tuto 5 : La routine locale du développeur (Terminal)**
   - *Objectif :* Remplacer les boutons de VS Code par les vraies commandes en réalisant le cycle classique : `git status`, `git add`, `git commit`.

---

### UA.115.13 : Synchroniser son travail avec GitHub
*(À intégrer dans la Session 5)*

6. **Tuto 6 : Partager son travail sur Internet avec `git push`**
   - *Objectif :* Comprendre le lien entre le dépôt local et distant (`origin`) et envoyer ses modifications en ligne de commande.
7. **Tuto 7 : Mettre à jour son ordinateur avec `git pull`**
   - *Objectif :* Apprendre à récupérer le code distant (par exemple si l'apprenant a changé d'ordinateur ou travaillé depuis ailleurs) pour avoir un projet à jour avant de commencer à coder.

---

### UA.115.14 : Sécuriser son projet et ignorer l'inutile
*(À intégrer dans la Session 7)*

8. **Tuto 8 : Créer et configurer un fichier `.gitignore`**
   - *Objectif :* Bloquer les fichiers systèmes et les dossiers inutiles de l'ordinateur pour garder un dépôt propre sur GitHub.
9. **Tuto 9 : Les règles de sécurité avant de valider un commit**
   - *Objectif :* Adopter le réflexe de vérifier ce que l'on envoie (ne jamais envoyer de mot de passe) grâce à `git status` et `git diff` avant de valider.

---

### UA.115.15 : Explorer l'historique et annuler des erreurs simples
*(À intégrer dans la Session 9)*

10. **Tuto 10 : Lire l'historique du projet avec `git log`**
    - *Objectif :* Lire la liste des modifications, comprendre l'identifiant unique d'un commit (hash) et voir comment le projet a évolué dans le temps.
11. **Tuto 11 : Réparer une erreur avant la sauvegarde avec `git restore`**
    - *Objectif :* Effacer complètement les modifications locales d'un fichier qui ne fonctionne plus, pour revenir à la version saine et sécurisée du dernier commit.
