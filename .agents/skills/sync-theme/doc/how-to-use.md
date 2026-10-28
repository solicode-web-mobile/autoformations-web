# Guide d'Utilisation du Skill : sync-theme

## 1. Présentation & Rôle
`sync-theme` assure la gouvernance, la configuration et l'orchestration de la synchronisation du **Core Theme** (le socle technique partagé entre plusieurs plateformes d'autoformation Solicode) entre le dépôt local et le dépôt central `../autoformations-core-theme`.

Il gère la liste des fichiers et dossiers synchronisés via `theme-sync.json` et guide le concepteur dans l'exécution sécurisée des scripts PowerShell `push_theme.ps1` et `pull_theme.ps1`.

---

## 2. Cas d'Usage Principaux
- **Quand utiliser ce skill :**
  - Ajout d'un nouveau fichier générique (layout, composant include, feuille CSS partagée) au thème central partagé.
  - Configuration des règles d'inclusion ou d'exclusion dans `theme-sync.json`.
  - Orchestration guidée du push des modifications locales vers le Core Theme ou du pull des mises à jour.
  - Audit de conformité des scripts de synchronisation `push_theme.ps1` et `pull_theme.ps1`.
- **Quand NE PAS utiliser ce skill :**
  - Développement de styles spécifiques à un seul projet sans vocation à être partagé ➔ Utiliser `dev-jekyll`.
  - Modification de contenu éditorial ou de tutoriels ➔ Utiliser `tutorial-writer`.
  - Exécution aveugle et automatique de commandes Git sans contrôle humain.

---

## 3. Prompts Types d'Invocation

```markdown
# Ajout d'un composant au thème partagé
@[.agents/skills/sync-theme/SKILL.md] J'ai créé un composant partagé _includes/callout-box.html, vérifie si theme-sync.json est à jour et donne-moi la commande de push.
```

```markdown
# Récupération des mises à jour du thème central
@[.agents/skills/sync-theme/SKILL.md] Guide-moi pour synchroniser mon projet local avec les dernières évolutions de autoformations-core-theme.
```

```markdown
# Audit de configuration theme-sync.json
@[.agents/skills/sync-theme/SKILL.md] Audite theme-sync.json pour vérifier qu'aucun fichier spécifique de contenu n'y est accidentellement inclus.
```

---

## 4. Prérequis & Données d'Entrée
- **Fichier de configuration :** `theme-sync.json` à la racine du dépôt.
- **Scripts de synchronisation :** `push_theme.ps1` et `pull_theme.ps1`.
- **Dépôt voisin :** Le dossier central `../autoformations-core-theme` doit être cloné au même niveau que le dépôt local.

---

## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
1. **Étape 1 — Qualification de la Généricité :** Vérifie que le fichier à partager est strictement agnostique au contenu du cursus spécifique.
2. **Étape 2 — Mise à jour de `theme-sync.json` :** Vérifie si le fichier relève d'un dossier déjà suivi (`sync_directories`) ou s'il doit être ajouté dans `sync_files`.
3. **Étape 3 — Présentation du Menu Guidé :** Fournit les instructions étape par étape et la commande PowerShell exacte à exécuter manuellement par l'utilisateur.
4. **Étape 4 — Rappel du Contrôle `git diff` :** Rappelle à l'utilisateur de vérifier l'état des modifications (`git status`, `git diff`) avant tout commit distant.

---

## 6. Livrables Produits & Méthode de Vérification
- **Livrables attendus :**
  - Fichier `theme-sync.json` mis à jour et validé syntaxiquement.
  - Commandes PowerShell claires prêtes à être exécutées par l'utilisateur.
- **Règle Inviolable d'Exécution :**  
  > [!IMPORTANT]
  > L'agent IA **n'exécute JAMAIS automatiquement** `push_theme.ps1` ni `pull_theme.ps1` dans son terminal. L'exécution est obligatoirement déclenchée manuellement par l'opérateur humain.

---

## 7. Pièges Fréquents & Bonnes Pratiques
| Piège Fréquent | Risque | Bonne Pratique |
| :--- | :--- | :--- |
| Exécuter les scripts de push/pull automatiquement | Écrasement accidentel de code non validé | Toujours laisser l'utilisateur exécuter la commande PowerShell |
| Ajouter des fichiers de contenu (`_tutos/`, `_uas/`) dans `theme-sync.json` | Pollution du socle technique partagé | Restreindre le Core Theme exclusivement aux layouts, CSS partagés et scripts neutres |
| Oublier de faire `git diff` avant de pusher | Propagation de régressions au thème central | Toujours inspecter le diff dans `../autoformations-core-theme` avant commit |
