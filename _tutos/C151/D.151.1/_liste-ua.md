# Unités d'Apprentissage (UA) - Git N1

Voici la déclinaison du programme de formation en **Unités d'Apprentissage (UA)**. Chaque UA représente une brique de compétence claire et mesurable pour l'apprenant. Ces UA utilisent la nomenclature officielle (UA.115.xx).

---

### UA.115.11 : Préparer l'environnement et déposer son premier travail avec VS Code
* **Objectif :** Installer Git, le configurer, comprendre la différence avec GitHub, puis cloner et sauvegarder son travail visuellement via l'interface de VS Code.
* **Notions :** Git vs GitHub, Dépôt local vs distant, Le panneau "Contrôle de code source" de VS Code.
* **Actions et Commandes :** 
  * `git --version`
  * `git config` (nom et email)
  * Interface VS Code : Initialiser, Cloner, Ajouter au staging (+), Valider (Commit), Synchroniser (Push/Pull).

### UA.115.12 : Sauvegarder son travail localement (Ligne de commande)
* **Objectif :** Comprendre l'état d'un fichier et réaliser le cycle complet de sauvegarde en ligne de commande.
* **Notions :** Working Directory, Staging Area, Repository, Cycle de vie d'un fichier (modifié, préparé, validé).
* **Commandes :**
  * `git init` et `git clone` (en terminal)
  * `git status`
  * `git add`
  * `git commit -m "..."`

### UA.115.13 : Synchroniser son travail avec GitHub
* **Objectif :** Échanger des mises à jour avec un dépôt distant (envoyer son code et récupérer les nouveautés).
* **Notions :** Dépôt distant (`origin`), le cycle de synchronisation réseau.
* **Commandes :**
  * `git remote` / `git remote -v`
  * `git push`
  * `git pull`
  * `git fetch`

### UA.115.14 : Sécuriser son projet et ignorer l'inutile
* **Objectif :** Contrôler précisément ce qui est envoyé sur GitHub pour éviter de partager des fichiers personnels, temporaires ou des mots de passe.
* **Notions :** Fichiers `.env`, secrets, dépendances.
* **Actions/Commandes :**
  * Configurer un fichier `.gitignore`.
  * Utiliser `git status` et `git diff` pour vérifier les fichiers avant le commit.

### UA.115.15 : Explorer l'historique et annuler des erreurs simples
* **Objectif :** Lire le passé du projet, retrouver une ancienne version et effacer une modification locale non désirée.
* **Notions :** L'historique (log), l'identifiant de commit, `HEAD`.
* **Commandes :**
  * `git log` / `git log --oneline`
  * `git diff`
  * `git restore [fichier]`
  * `git restore --staged [fichier]`
