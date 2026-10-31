# Guide d'Utilisation du Skill : dev-n1

## 1. Présentation & Rôle
`dev-n1` est le **développeur applicatif en chef** du projet d'imitation N1 (le Blog).

Il conçoit, audite, refactorise et teste l'ensemble du code source des applications d'apprentissage sous `_plan-réalisation-tutos/` à travers les technologies du niveau N1 :
- **HTML5 :** Squelettes sémantiques, accessibilité de base, formulaires.
- **CSS3 :** Progression de la mise en page (monolithique brut en S2-S6 vers modulaire avec variables `:root` en S7).
- **JavaScript client :** Interactivité non intrusive dans le navigateur, manipulation prudente du DOM.
- **PHP procédural & modulaire :** Contrôleurs, templates, superglobales `$_GET` / `$_POST`, connexion PDO et requêtes préparées.
- **SQL relationnel :** Scripts DDL (`database.sql`), jeux d'essai DML, requêtes `SELECT` avec jointures et clauses `WHERE`.

Son rôle primordial est de garantir la **stricte progression incrémentale sans aucun anachronisme** d'une session à l'autre.

---

## 2. Cas d'Usage Principaux
- **Quand utiliser ce skill :**
  - Préparation ou révision du code source dans `_plan-réalisation-tutos/S*/dossier-depart/`.
  - Développement et validation du code final d'arrivée dans `_plan-réalisation-tutos/S*/code-a-apprendre/`.
  - Élimination des anachronismes techniques (ex: styles ou scripts apparus prématurément).
  - Refactoring de synchronisation entre deux sessions consécutives ($S_n$ hérite fidèlement de $S_{n-1}$).
  - Vérification de l'exécutabilité locale des fichiers d'application (serveur PHP local, imports MySQL, console JS).
- **Quand NE PAS utiliser ce skill :**
  - Rédaction des guides tutoriels en Markdown ➔ Utiliser `tutorial-writer`.
  - Conception ou audit des fiches de progression pédagogique ➔ Utiliser `tutorial-planer`.
  - Développement des layouts ou styles du site documentaire Jekyll ➔ Utiliser `dev-jekyll`.
  - Synchronisation du socle de thème central ➔ Utiliser `sync-theme`.
  - Création ou gouvernance de compétences ➔ Utiliser `plugin-dev`.

---

## 3. Prompts Types d'Invocation

```markdown
# Assainissement d'un dossier de départ (Suppression d'anachronismes)
/dev-n1 Audite le dossier dossier-depart de la session S7 et élimine les variables CSS :root et les pseudo-classes :hover qui n'ont pas encore été enseignées.
```

```markdown
# Développement du code d'arrivée d'une session
/dev-n1 Développe le code cible de code-a-apprendre pour la session S7 en intégrant les pages article.php, categories.php et les feuilles CSS modulaires.
```

```markdown
# Synchronisation de continuité entre deux sessions
/dev-n1 Synchronise le dossier-depart de S6 avec le code-a-apprendre validé de S5, en vérifiant que le passage de JSON à MySQL est parfaitement préparé.
```

```markdown
# Synchronisation miroir vers les kits apprenants externes
/dev-n1 Synchronise les dossiers de départ de autoformations-web vers D:\solicode-web-mobile\dossiers-depart-n1 pour répercuter les assainissements CSS.
```

---

## 4. Prérequis & Données d'Entrée
- **Fichiers sources du projet d'imitation :**
  - `_plan-réalisation-tutos/S*/plan-developpement.md` (spécifications techniques des briques à produire).
  - `_plan-réalisation-tutos/S*/dossier-depart/` (code de départ).
  - `_plan-réalisation-tutos/S*/code-a-apprendre/` (code cible).
- **Fiches didactiques des domaines techniques :**
  - `.agents/resources/domaines/domaine-[nom].md` (HTML, CSS, JS, PHP, SQL, PHP-SQL).
- **Standards techniques :**
  - `.agents/rules/standards-techniques.md` (Encodage UTF-8 strict sans BOM, convention des livrables).

---

## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
1. **Étape 1 — Audit d'Incrémentation & Détection d'Anachronismes :**  
   L'agent compare le code existant dans `dossier-depart/` avec les acquis réels de l'apprenant à l'issue de la session précédente. Il supprime impitoyablement toute syntaxe, variable ou fichier prématuré.
2. **Étape 2 — Implémentation du Code Source :**  
   L'agent écrit le code propre dans `code-a-apprendre/` en respectant scrupuleusement la granularité de chaque tutoriel défini dans `plan-developpement.md`.
3. **Étape 3 — Alignement des Identifiants & Classes :**  
   L'agent veille à ce que les classes CSS (`.carte-article`, `.bouton-principal`), les identifiants DOM et les colonnes SQL soient rigoureusement identiques entre les templates, les scripts et les feuilles de style.
4. **Étape 4 — Test d'Exécution :**  
   L'agent teste les scripts localement pour garantir zéro erreur de syntaxe, zéro avertissement PHP et zéro exception JavaScript.
5. **Étape 5 — Synchronisation des Kits Apprenants :**  
   L'agent ou le développeur synchronise les dossiers de départ révisés vers le dépôt externe :
   ```bash
   # Simulation préalable
   node .agents/skills/dev-n1/scripts/sync-dossiers-depart.cjs --dry-run
   # Exécution réelle ciblée ou globale
   node .agents/skills/dev-n1/scripts/sync-dossiers-depart.cjs --session S7
   # Ou en PowerShell
   .\.agents\skills\dev-n1\scripts\sync-dossiers-depart.ps1 -Session S7
   ```

---

## 6. Méthode de Vérification des Livrables
- [ ] Le code de départ de la session $N$ est rigoureusement identique au code d'arrivée de la session $N-1$.
- [ ] Aucun concept technique d'une UA future n'est présent dans le code de départ.
- [ ] Tous les fichiers créés sont encodés en **UTF-8 sans BOM**.
- [ ] Les noms de classes et de variables correspondent exactement à ce qui est documenté dans les tutoriels.
- [ ] Le site d'application s'exécute correctement avec `php -S localhost:8000`.
