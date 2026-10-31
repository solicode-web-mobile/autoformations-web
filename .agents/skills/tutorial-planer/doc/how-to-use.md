# Guide d'Utilisation du Skill : tutorial-planer

## 1. Présentation & Rôle
`tutorial-planer` est l'**architecte et ingénieur de la progression pédagogique** des tutoriels au sein du cursus Solicode (Niveaux N1, N2 ou N3 selon le dépôt courant).  
Il intervient en amont de `tutorial-writer` pour concevoir, auditer et ordonnancer les plans de réalisation technique par session ou sprint (`_plan-réalisation-tutos/S[X]/plan-developpement.md`).

7: Sa mission est de transformer méthodiquement le code hérité (`dossier-depart/`) vers le livrable complet de la session (`code-a-apprendre/`) sans aucune rupture cognitive ($E_{n-1} \rightarrow E_n$), de garantir l'intégrité référentielle des entités Jekyll (`_sessions/`, `_domaines/`, `_uas/`), et d'initialiser immédiatement les fichiers stubs de tutoriels sous `_tutos/` avec l'état `en_construction: true`.
8: 
9: ---
10: 
11: ## 2. Cas d'Usage Principaux
12: - **Quand utiliser ce skill :**
13:   - Cadrage et conception d'un nouveau plan de développement (`_plan-réalisation-tutos/S[X]/plan-developpement.md`).
14:   - Découpage incrémental de la transformation de `dossier-depart/` vers `code-a-apprendre/`.
15:   - Audit et restructuration d'un plan existant (marquage `audite: true`, détection des ruptures de prérequis).
16:   - Détection, création et synchronisation automatique des entités pédagogiques manquantes (`_sessions/S[X].md`, `_domaines/`, `_uas/`).
17:   - Initialisation des fichiers stubs de tutoriels sous `_tutos/` sans contenu avec `en_construction: true`.
18:   - Formulation des titres de tutoriels selon la règle du juste équilibre (un seul objectif technique concret sans nom d'entité métier).
19: - **Quand NE PAS utiliser ce skill :**
20:   - Rédaction détaillée pas-à-pas du corps d'un tutoriel ➔ Utiliser `tutorial-writer`.
21:   - Développement de layouts ou styles Jekyll ➔ Utiliser `dev-jekyll`.
22:   - Synchronisation du socle partagé (Core Theme) ➔ Utiliser `sync-theme`.
23:   - Gouvernance globale des règles et compétences ➔ Utiliser `plugin-dev`.
24: 
25: ---
26: 
27: ## 3. Prompts Types d'Invocation
28: 
29: ```markdown
30: # Cadrage d'une nouvelle session
31: @[.agents/skills/tutorial-planer/SKILL.md] Conçois le plan de réalisation de développement pour la session S5 à partir de dossier-depart/ et code-a-apprendre/.
32: ```
33: 
34: ```markdown
35: # Audit et mise en conformité d'un plan existant
36: @[_plan-réalisation-tutos/S5/plan-developpement.md] @[.agents/skills/tutorial-planer/SKILL.md] /plan
37: Audite ce plan selon les standards Solicode, vérifie la continuité cognitive et formule les titres équilibrés.
38: ```
39: 
40: ```markdown
41: # Alignement automatique des entités Jekyll et création des stubs
42: @[.agents/skills/tutorial-planer/SKILL.md] Aligne la liste uas de la fiche session _sessions/S5.md et crée les fichiers stubs de tutoriels avec en_construction: true.
43: ```
44: 
45: ---
46: 
47: ## 4. Prérequis & Données d'Entrée
48: - **Codes source de référence :**
49:   - `_plan-réalisation-tutos/S[X]/dossier-depart/` (code hérité de la session précédente).
50:   - `_plan-réalisation-tutos/S[X]/code-a-apprendre/` (code cible complet de la session).
51: - **Gabarits internes du skill :**
52:   - `resources/gabarit-plan-session.md` (structure canonique du plan).
53:   - `resources/gabarit-session.md`, `resources/gabarit-domaine.md`, `resources/gabarit-ua.md`.
54:   - `resources/gabarit-tuto-en-construction.md` (structure canonique des stubs `en_construction: true`).
55:   - `resources/methode-bien-demarrer.md` (sas d'installation si nouvelle technologie).
56: - **Règles applicables :**
57:   - Les règles pédagogiques locales dans `.agents/rules/` (cycle actif, niveau de langue adapté).
58:   - `.agents/rules/standards-techniques.md` (UTF-8 sans BOM, livrables de code source).
59: 
60: ---
61: 
62: ## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
63: 1. **Étape 1 — Analyse Différentielle :** Compare `dossier-depart/` et `code-a-apprendre/` pour cartographier exactement les fichiers à créer ou modifier.
64: 2. **Étape 2 — Contrôle de Granularité :** Vérifie le respect strict du nombre d'UAs (1 UA par domaine par défaut, 2 en cas de démarrage technologique).
65: 3. **Étape 3 — Découpage Incrémental Déterministe :** Découpe la transformation en étapes élémentaires où chaque tutoriel $N$ consomme rigoureusement le résultat de $N-1$.
66: 4. **Étape 4 — Titrage Équilibré :** Rédige les titres H3 en formulant un seul objectif technique concret sans jamais mentionner les entités métier (pas d'Article, Catégorie, etc.).
67: 5. **Étape 5 — Rédaction des Fiches Techniques :** Renseigne pour chaque tutoriel les 6 rubriques normées avec extraits de code $E_{n-1} \rightarrow E_n$ et livrables physiques.
68: 6. **Étape 6 — Synchronisation des Entités Jekyll :** Crée ou aligne immédiatement `_sessions/S[X].md`, `_domaines/` et `_uas/`.
69: 7. **Étape 7 — Création des Fichiers Stubs :** Crée les fichiers sous `_tutos/[Domaine]/[UA]/[Code-Tuto]/[slug].md` avec Front Matter complet, `en_construction: true` et corps vierge.
70: 
71: ---
72: 
73: ## 6. Livrables Produits & Méthode de Vérification
74: - **Livrables attendus :**
75:   - `_plan-réalisation-tutos/S[X]/plan-developpement.md` (validé avec `audite: true`).
76:   - Fiche de session `_sessions/S[X].md` synchronisée.
77:   - Fiches d'Unités d'Apprentissage `_uas/[domaine]/UA.XXX.YY.md` alignées.
78:   - Fichiers stubs de tutoriels `_tutos/[Domaine]/[UA]/[Code-Tuto]/[slug].md` avec `en_construction: true`.
79: - **Comment vérifier le résultat :**
80:   Vérifier la checklist binaire :
81:   - [x] Front Matter présent avec `audite: true` et `statut: "audité et validé"`.
82:   - [x] Règle de granularité respectée (1 UA par défaut, 2 au démarrage).
83:   - [x] Zéro mention d'entités métier dans les titres H3.
84:   - [x] Extraits de code $E_{n-1}$ et $E_n$ fournis pour chaque étape sans trou cognitif.
85:   - [x] Fichiers stubs créés dans `_tutos/` avec `en_construction: true` et corps vierge.
86:   - [x] Tous les livrables sont du code source tapé ou un journal `commandes.md`.

---

## 7. Pièges Fréquents & Bonnes Pratiques
| Piège Fréquent | Risque | Bonne Pratique |
| :--- | :--- | :--- |
| Mentionner l'entité du cas d'étude dans le titre H3 | L'apprenant mémorise le cas particulier au lieu de la compétence | Bannir « Article », « Catégorie » des titres H3 ; se focaliser sur la notion technique pure |
| Sauter une étape de configuration locale | Blocage complet de l'apprenant | Intégrer obligatoirement le sas « Bien Démarrer » lors de l'introduction d'un outil |
| Multiplier les micro-UAs pour chaque mot-clé | Éparpillement du référentiel | Respecter la règle d'une seule UA par domaine par session en régime de croisière |
| Livrable formulé comme un constat passif | Manque d'évaluation tangible | Exiger exclusivement du code source effectivement tapé ou un fichier `commandes.md` |
