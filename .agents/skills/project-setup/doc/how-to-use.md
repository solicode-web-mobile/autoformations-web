# Guide d'Utilisation du Skill : project-setup

## 1. Présentation & Rôle
`project-setup` est l'**orchestrateur universel d'onboarding, d'audit architectural et de configuration d'agent IA**. Il permet :
1. D'amorcer et de configurer l'environnement IA sur **tout type de projet** (application de développement logiciel, projet de rédaction d'autoformations web, ou ingénierie pédagogique APC).
2. D'analyser le cahier des charges pour identifier les livrables cibles et qualifier le profil adéquat.
3. D'auditer, trier et recycler les anciens dossiers d'agents historiques (`old_agent`, `.agent/`) pour en archiver le superflu et conserver la mémoire technique.
4. De déployer et synchroniser les compétences requises du Hub Global sous forme de copies physiques déterministes (Solution B - Compatible Antigravity IDE) pilotées par `.agents/skills.json`.
5. De proposer la liste des Skills à créer et des Rules comportementales locales (`.agents/rules/`).

---

## 2. Cas d'Usage Principaux
- **Quand utiliser ce skill :**
  - Amorce d'un projet vierge (*« Initialise l'agent pour ce projet »*).
  - Cadrage et installation des compétences requises pour un nouveau cursus de tutoriels.
  - Modernisation et assainissement d'un ancien dossier `old_agent`.
  - Analyse d'un cahier des charges pour déterminer les compétences IA à installer.
  - Vérification de santé et réalignement de l'environnement IA via `manage-skills.cjs`.
- **Quand NE PAS utiliser ce skill :**
  - Rédaction ou simplification de tutoriels ➔ Utiliser `tutorial-writer`.
  - Cadrage technique ou planification de session ➔ Utiliser `tutorial-planer`.
  - Développement de layouts ou styles Jekyll ➔ Utiliser `dev-jekyll`.
  - Conception ou modification de compétences ➔ Utiliser `plugin-dev`.

---

## 3. Prompts Types d'Invocation

```markdown
# Initialisation complète sur un projet vierge
@[.agents/skills/project-setup/SKILL.md] Initialise l'agent IA sur ce projet, analyse les fichiers existants et installe les compétences requises.
```

```markdown
# Migration et recyclage d'un ancien dossier old_agent
@[.agents/skills/project-setup/SKILL.md] Audite notre dossier old_agent, extrait les règles et templates valides vers .agents/ et archive le reste.
```

```markdown
# Vérification de santé et synchronisation des compétences
@[.agents/skills/project-setup/SKILL.md] Vérifie la cohérence de .agents/skills.json et synchronise les compétences depuis le Hub.
```

---

## 4. Prérequis & Données d'Entrée
- **Scripts et outils internes :**
  - `.agents/skills/project-setup/scripts/manage-skills.cjs` (gestionnaire déterministe de compétences).
- **Ressources méthodologiques :**
  - `resources/project-typology-and-profiles.md` (matrice des profils de projet).
  - `resources/legacy-migration-playbook.md` (protocole de tri et recyclage legacy).
  - `resources/onboarding-workflow.md` (guide de bootstrapping pas-à-pas).
- **Fichiers de configuration :**
  - `.agents/skills.json` (manifeste local des compétences requises).
  - Catalogue global du Hub : `D:/solicode-lms/skills-workspace/catalog.yaml`.

---

## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
1. **Étape 1 — Diagnostic & Bootstrapping :** Vérifie la présence de `.agents/skills.json` et de `.agents/skills/`. Si le dossier est vierge, initialise la structure canonique.
2. **Étape 2 — Profilage du Projet :** Analyse le cahier des charges pour déterminer le profil (Dev Logiciel, Autoformations Web, Ingénierie APC ou Hybride).
3. **Étape 3 — Audit Legacy (Si `old_agent` existe) :** Trie le contenu ancien en compétences locales, règles (`.agents/rules/`), conventions documentaires (`.agents/references/`) et déplace l'ancien dossier dans `archive/old_agent/`.
4. **Étape 4 — Déploiement Physique des Compétences :** Rédige `.agents/skills.json` et exécute :
   ```powershell
   node .agents/skills/project-setup/scripts/manage-skills.cjs sync
   ```
5. **Étape 5 — Rapport d'Onboarding :** Génère un bilan clair détaillant le profil identifié, les compétences déployées et les règles comportementales activées.

---

## 6. Livrables Produits & Méthode de Vérification
- **Livrables attendus :**
  - Arborescence `.agents/` configurée et opérationnelle.
  - Fichier manifeste `.agents/skills.json` aligné.
  - Compétences synchronisées sous forme de copies physiques sous `.agents/skills/`.
  - Rapport d'onboarding structuré.
- **Comment vérifier le résultat :**
  Exécuter la commande de listage des compétences :
  ```powershell
  node .agents/skills/project-setup/scripts/manage-skills.cjs list
  ```
  Le terminal doit lister l'ensemble des compétences installées avec leur statut opérationnel.

---

## 7. Pièges Fréquents & Bonnes Pratiques
| Piège Fréquent | Risque | Bonne Pratique |
| :--- | :--- | :--- |
| Utiliser des liens symboliques sous Antigravity IDE | L'IDE ne suit pas les liens NTFS et les skills sont invisibles | Toujours utiliser des copies physiques via `manage-skills.cjs sync` |
| Modifier le code source applicatif lors de l'onboarding | Risque de régression sur le projet utilisateur | `project-setup` est strictement non-destructif sur le code |
| Laisser un dossier `old_agent` à la racine | Conflit et confusion cognitive de l'agent IA | Déplacer systématiquement l'ancien dossier dans `archive/old_agent/` |
