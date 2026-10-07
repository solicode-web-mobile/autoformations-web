# Synchronisation du Thème (Core Theme)

Ce document explique le fonctionnement et l'utilisation des scripts de synchronisation du thème (`pull_theme.ps1` et `push_theme.ps1`). 

La plateforme d'autoformation est divisée en trois niveaux (N1, N2, N3), chacun disposant de son propre dépôt. Afin de partager le même thème (design, gabarits, styles, scripts) entre ces trois niveaux, un dépôt centralisé appelé `autoformations-core-theme` est utilisé.

## Architecture Local-First

L'architecture de synchronisation repose sur un fonctionnement "Local-First". 
Le dépôt central (`autoformations-core-theme`) est cloné localement dans le dossier parent de votre projet. Les fichiers partagés sont ensuite copiés physiquement entre ce dépôt central et votre projet courant, permettant un développement fluide et un rechargement en temps réel de votre environnement Jekyll.

Le fichier `theme-sync.json` situé à la racine du projet permet de définir avec précision quels dossiers (`sync_directories`) et quels fichiers individuels (`sync_files`) doivent être synchronisés.

## Utilisation des Scripts

### 1. Mettre à jour son projet : `pull_theme.ps1`

**Rôle :** Importe les dernières modifications du dépôt central vers votre projet local (N1, N2 ou N3).

**Fonctionnement :**
1. Vérifie si le dossier central `../autoformations-core-theme` existe. Si ce n'est pas le cas, le script va le cloner automatiquement depuis GitHub.
2. Télécharge les dernières mises à jour du dépôt central depuis GitHub.
3. Lit la configuration définie dans `theme-sync.json`.
4. Écrase ou ajoute les dossiers et fichiers listés depuis le Core Theme vers votre dépôt courant.

**Commande :**
```powershell
.\pull_theme.ps1
```
*(Optionnel) Vous pouvez spécifier une version (tag) spécifique pour récupérer une version donnée : `.\pull_theme.ps1 -Version "v1.0"`*

### 2. Partager ses modifications : `push_theme.ps1`

**Rôle :** Exporte les modifications de thème que vous avez effectuées depuis votre projet local vers le dépôt central partagé.

**Fonctionnement :**
1. Vérifie la présence du dépôt `../autoformations-core-theme` (ou le clone le cas échéant).
2. Lit la configuration `theme-sync.json`.
3. Copie les dossiers et fichiers modifiés de votre projet courant vers le dossier du Core Theme.

**Commande :**
```powershell
.\push_theme.ps1
```
*(Note : Il se peut que vous deviez ensuite vous rendre dans le dossier `autoformations-core-theme` pour commiter et pousser manuellement ces changements vers le dépôt distant, à moins que cette étape ne soit automatisée dans la version actuelle du script).*

## Ajouter un nouveau fichier au thème partagé

Si vous créez ou modifiez un fichier (ex: nouveau CSS, nouveau Layout) qui doit être partagé entre les trois niveaux N1, N2 et N3 :

1. **Vérification globale :** Si votre fichier est situé dans l'un des dossiers déjà définis dans `"sync_directories"` de `theme-sync.json` (par exemple `assets/css`), vous n'avez rien à modifier dans la configuration. Le fichier sera automatiquement pris en compte par la synchronisation.
2. **Ajout ciblé :** S'il s'agit d'un fichier isolé ou dans un dossier qui n'est pas synchronisé dans son ensemble, vous devez ajouter son chemin explicitement à la liste `"sync_files"` du fichier `theme-sync.json`.
3. **Diffusion :** Exécutez `.\push_theme.ps1` pour transmettre ce nouveau fichier au Core Theme.

---

**⚠️ Règle d'Or :** N'ajoutez au thème central (via `theme-sync.json`) que des éléments **génériques et réutilisables**. Les contenus spécifiques au programme d'un niveau (comme des pages d'exercices ou des données propres à un projet) doivent rester exclus de la synchronisation.

## Workflow de Migration (Changement de Niveau)

Lors de la transition vers un autre niveau cible pour la semaine, suivez ces 4 étapes cruciales :

1. **Push depuis le niveau actuel** : Exécutez `.\push_theme.ps1` pour envoyer vos modifications vers le Core Theme.
2. **Contrôle visuel (Core Theme)** : Ouvrez le dossier `autoformations-core-theme` et vérifiez les changements (ex: `git diff`). Assurez-vous de ne pas écraser de code involontairement.
3. **Pull dans le niveau cible** : Ouvrez le dépôt du niveau cible et exécutez `.\pull_theme.ps1`.
4. **Contrôle visuel (Niveau Cible)** : Vérifiez à nouveau les modifications importées avec Git. C'est critique pour repérer d'éventuels conflits entre les deux niveaux.
