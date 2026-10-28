# Guide d'Utilisation du Skill : plugin-dev

## 1. Présentation & Rôle
`plugin-dev` est le **méta-skill de gouvernance technique** de l'écosystème IA. Il est responsable de concevoir, créer, auditer et raffiner :
- Les **Skills** partagés et locaux (`.agents/skills/`),
- Les **Règles d'or et directives permanentes** (`.agents/rules/`, `AGENTS.md`),
- Les **Standards normatifs** (`.agents/standards/critical-rules.md`).

Il garantit le respect rigoureux des motifs d'Anthropic, la séparation des préoccupations, la structure canonique en 10 rubriques, l'encapsulation des ressources dans `resources/`, la documentation obligatoire dans `doc/` et la conformité sémantique SemVer.

---

## 2. Cas d'Usage Principaux
- **Quand utiliser ce skill :**
  - Création d'un nouveau skill (`plugin-dev` applique le gabarit normé en 10 rubriques).
  - Raffinement ou correction d'un skill existant suite à une anomalie ou un feedback utilisateur.
  - Création ou modification d'une règle comportementale permanente dans `.agents/rules/` ou `AGENTS.md`.
  - Audit de conformité des compétences via le validateur déterministe.
- **Quand NE PAS utiliser ce skill :**
  - Rédaction ou simplification de tutoriels ➔ Utiliser `tutorial-writer`.
  - Cadrage et progression technique d'un sprint ➔ Utiliser `tutorial-planer`.
  - Développement de layouts ou styles Jekyll ➔ Utiliser `dev-jekyll`.
  - Déploiement ou amorce d'agent sur un projet ➔ Utiliser `project-setup`.

---

## 3. Prompts Types d'Invocation
Pour activer `plugin-dev`, formulez votre demande avec l'un des prompts suivants :

```markdown
# Création d'un nouveau skill
@[.agents/skills/plugin-dev/SKILL.md] Crée un nouveau skill nommé 'database-seeder' inspiré du pattern feature-dev d'Anthropic pour générer des données de test réalistes.
```

```markdown
# Raffinement d'un skill existant
@[.agents/skills/plugin-dev/SKILL.md] Ajoute une règle stricte dans tutorial-planer interdisant les titres de tutoriels mentionnant les entités métier du projet.
```

```markdown
# Création d'une règle transversale
@[.agents/skills/plugin-dev/SKILL.md] Crée une règle comportementale dans .agents/rules/ imposant que chaque réponse cite obligatoirement les compétences IA mobilisées.
```

---

## 4. Prérequis & Données d'Entrée
- **Fichiers de référence :**
  - `.agents/references/anthropic/anthropic-skill-patterns.md` (motifs Anthropic officiels).
  - `.agents/skills/plugin-dev/templates/generic-skill.md` (gabarit en 10 rubriques).
  - `.agents/skills/plugin-dev/templates/how-to-use.md` (modèle de documentation).
- **Règles applicables :**
  - `.agents/rules/standards-techniques.md` (encodage UTF-8 sans BOM, nommage).

---

## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
1. **Étape 1 — Analyse du Motif Anthropic :** Sélectionne le pattern adéquat (`feature-dev`, `setup`, `review`, etc.).
2. **Étape 2 — Rédaction du `SKILL.md` :** Remplit les 10 rubriques, formule la description à la 3ème personne, renseigne le bloc `inspiration:`, et isole les gabarits dans `resources/`.
3. **Étape 3 — Rédaction de `doc/how-to-use.md` :** Rédige systématiquement le guide d'utilisation opérationnel dans le sous-dossier `doc/`.
4. **Étape 4 — Validation Automatisée :** Exécute `node .agents/skills/plugin-dev/scripts/validate-skills.cjs`.
5. **Étape 5 — Enregistrement & Versionnement :** Met à jour la version SemVer et enregistre l'entrée dans le catalogue.

---

## 6. Livrables Produits & Méthode de Vérification
- **Livrables attendus :**
  - `.agents/skills/<nom-du-skill>/SKILL.md` (conforme aux 10 rubriques).
  - `.agents/skills/<nom-du-skill>/doc/how-to-use.md` (guide opérationnel).
- **Comment vérifier le résultat :**
  Exécuter la validation statique :
  ```powershell
  node .agents/skills/plugin-dev/scripts/validate-skills.cjs
  ```
  Le terminal doit afficher `0 erreur bloquante` et confirmer la présence de `doc/how-to-use.md`.

---

## 7. Pièges Fréquents & Bonnes Pratiques
| Piège Fréquent | Risque | Bonne Pratique |
| :--- | :--- | :--- |
| Déposer un gabarit au niveau Agent | Pollution cognitive globale | Toujours encapsuler dans `<skill>/resources/` |
| Oublier le dossier `doc/how-to-use.md` | Skill difficile à utiliser | Rédiger systématiquement la documentation avant validation |
| Créer un skill pour une simple interdiction | Surcharge inutile | Si c'est une interdiction passive, créer une Règle dans `.agents/rules/` |
| Oublier le bloc `inspiration:` dans le frontmatter | Rejet à la validation | Renseigner `source`, `plugin` et `pattern` dès l'amorce du skill |
