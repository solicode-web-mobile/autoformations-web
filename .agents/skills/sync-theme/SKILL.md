---
name: sync-theme
description: Pilote la synchronisation du socle technique partage (Core Theme) avec autoformations-core-theme via theme-sync.json et les scripts PowerShell de push et pull.
version: 1.0.0
inspiration:
  source: "local-first-patterns"
  plugin: "theme-sync"
  pattern: "safe-manual-orchestration & core-theme-synchronization"
---

# 1. Mission
Ce skill assure la maintenance, la configuration et l'orchestration de la synchronisation du **Core Theme** (socle technique partagé entre plusieurs plateformes d'autoformation Solicode) entre le dépôt courant et le dépôt central `../autoformations-core-theme`.

# 2. Déclenchement & Limites
- **Quand l'activer :**
  - Ajout d'un nouveau fichier générique (layout, CSS, include) au thème partagé.
  - Configuration de l'inclusion ou de l'exclusion de fichiers dans `theme-sync.json`.
  - Accompagnement à la migration ou mise à jour du thème entre niveaux (N1, N2, N3).
  - Diagnostic ou audit de conformité des scripts `push_theme.ps1` et `pull_theme.ps1`.
- **Quand NE PAS l'activer :**
  - Modification de contenu éditorial ou pédagogique (tutoriels, UA) ➔ Utiliser `tutorial-writer`.
  - Développement de styles spécifiques à un layout local sans volonté de partage.
  - Exécution directe automatique de commandes Git distantes.

# 3. Entrées & Ressources à Charger
- Fichier de configuration local : `theme-sync.json`.
- Scripts d'échange : `push_theme.ps1` et `pull_theme.ps1`.
- Référence locale : `.agents/references/conventions/jekyll-and-theme-conventions.md`.

# 4. Contraintes & Règles Inviolables
- **Non-Exécution Automatique :** L'agent IA ne doit **JAMAIS exécuter** `push_theme.ps1` ni `pull_theme.ps1` de manière autonome via son terminal. Il présente le menu d'étapes et fournit la commande à lancer manuellement par le concepteur.
- **Contrôle Visuel `git diff` Obligatoire :** Rappeler systématiquement à l'utilisateur de vérifier les diffs Git avant et après un push/pull pour éviter tout écrasement accidentel.
- **Frontière Nette du Thème :** Seuls les composants génériques, réutilisables et agnostiques au contenu d'un cursus particulier peuvent être inscrits dans `theme-sync.json`. Tout contenu spécifique à un site doit rester exclu.
- **JSON Strict :** `theme-sync.json` doit conserver une syntaxe JSON strictement valide et sans commentaires.

# 5. Procédure Pas-à-Pas

### Parcours A : Ajouter un Fichier au Socle Partagé
1. **Étape 1 : Qualification du Fichier :** Vérifier si le fichier est générique (utile à d'autres plateformes de tutoriels) ou spécifique à `autoformations-web`.
2. **Étape 2 : Vérification du Dossier :**
   - Si le fichier est situé dans l'un des dossiers de `sync_directories` (ex: `_includes`, `assets/css`), aucune modification de configuration n'est requise.
   - S'il s'agit d'un fichier isolé hors des dossiers suivis (ex: un gabarit spécifique dans `_layouts/`), l'ajouter dans la liste `sync_files` de `theme-sync.json`.
3. **Étape 3 : Proposition de Push :** Inviter le développeur à exécuter `.\push_theme.ps1`.

### Parcours B : Orchestration de Synchronisation (Menu Guidé)
Présenter le menu standard à l'utilisateur :
```text
📋 Menu de Synchronisation Core Theme :
1. Push des nouveautés locales   -> Exécuter : .\push_theme.ps1
2. Vérification Core             -> Contrôle visuel dans ../autoformations-core-theme
3. Pull vers un autre dépôt      -> Exécuter : .\pull_theme.ps1
4. Contrôle visuel final (diff)  -> git status / git diff
```

# 6. Gestion des Ambiguïtés & Décisions
- En cas de conflit Git dans `autoformations-core-theme` : interrompre le processus, demander au développeur de résoudre les conflits manuellement avec `git merge` avant de poursuivre.

# 7. Format de Sortie & Livrables
- Le diff ou fichier `theme-sync.json` mis à jour.
- L'instruction de commande PowerShell claire et prête à copier pour l'utilisateur.
- La consigne de vérification post-exécution.

# 8. Contrôle Qualité (Checklist Binaire)
- [ ] Le fichier `theme-sync.json` est-il syntaxiquement valide ?
- [ ] Les scripts `push_theme.ps1` / `pull_theme.ps1` n'ont-ils PAS été exécutés automatiquement ?
- [ ] Le rappel du contrôle `git diff` a-t-il été formulé ?

# 9. Gestion des Erreurs Fréquentes
| Erreur Typique | Cause | Solution Immédiate |
| :--- | :--- | :--- |
| Exécuter le script dans le terminal IA | Mauvaise interprétation du rôle | Se limiter à fournir la commande au développeur |
| Ajouter un fichier de contenu à `theme-sync.json` | Confusion entre thème et contenu | Retirer le fichier de `theme-sync.json` |

# 10. Exemples Concrets
> **Prompt développeur :** *« J'ai créé un nouveau composant dans _includes/terminal-box.html, comment l'ajouter au thème partagé ? »*  
> **Comportement :** L'agent vérifie `theme-sync.json`, constate que `_includes` est déjà dans `sync_directories`, informe le développeur qu'aucune modification de configuration n'est nécessaire et lui suggère d'exécuter `.\push_theme.ps1`.
