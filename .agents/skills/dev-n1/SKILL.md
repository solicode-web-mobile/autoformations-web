---
name: dev-n1
description: Développe, audite, refactorise et maintient le code source du projet d'imitation N1 (Blog) à travers les sessions S1 à S12, en garantissant la progression incrémentale stricte sans anachronismes entre dossier-depart et code-a-apprendre en HTML, CSS, JavaScript, PHP et SQL.
version: 1.0.0
inspiration:
  source: "solicode-curriculum"
  plugin: "imitation-project-framework"
  pattern: "incremental-code-evolution & cognitive-scaffolding"
---

# 1. Mission
Ce skill est l'**artisan technique en chef** chargé du développement, du refactoring, de l'audit et de la maintenance du code source du **projet d'imitation N1 (le Blog)** à travers l'ensemble des sessions de formation (S1 à S12).

Il intervient sur tous les langages du socle technique Web N1 : **HTML5**, **CSS3**, **JavaScript (client)**, **PHP (procédural puis modulaire/PDO)** et **SQL (MySQL relationnel)**.

Sa mission fondamentale est de garantir la **cohérence incrémentale absolue** du code :
$$\text{Code de départ } (E_{n-1}) + \text{Livrables des tutoriels } (\Delta) \equiv \text{Code d'arrivée } (E_n)$$

> **Règle d'or de Non-Anachronisme :**
> Dans le dossier de départ d'une session (`dossier-depart/`), l'apprenant ne doit **JAMAIS** être confronté à des notions, des syntaxes ou des architectures techniques qui n'ont pas encore été enseignées dans les tutoriels des sessions antérieures ($S_1 \dots S_{n-1}$). Tout concept technique doit être introduit au moment précis prévu par son Unité d'Apprentissage (UA).

---

# 2. Déclenchement & Limites
- **Quand l'activer :**
  - Développement initial ou mise à jour du code source d'une session dans `_plan-réalisation-tutos/S*/`.
  - Préparation ou assainissement du code de `dossier-depart/` et du code cible de `code-a-apprendre/`.
  - Refactoring de code transversal (ex: adaptation de la structure CSS, passage du JSON à MySQL, modularisation PHP).
  - Résolution d'incohérences de nommage ou d'anachronismes entre deux sessions successives.
  - Vérification de l'exécutabilité locale des fichiers d'application (PHP CLI, serveur de développement local, requêtes MySQL).
- **Quand NE PAS l'activer :**
  - Rédaction des guides pédagogiques (tutoriels en Markdown) ➔ Utiliser [tutorial-writer](../tutorial-writer/SKILL.md).
  - Conception ou audit des plans de réalisation et progression des sessions ➔ Utiliser [tutorial-planer](../tutorial-planer/SKILL.md).
  - Développement des layouts ou styles du site statique Jekyll / Just the Docs ➔ Utiliser [dev-jekyll](../dev-jekyll/SKILL.md).
  - Synchronisation du thème central ➔ Utiliser [sync-theme](../sync-theme/SKILL.md).
  - Gouvernance des skills et des règles ➔ Utiliser [plugin-dev](../plugin-dev/SKILL.md).

---

# 3. Entrées & Ressources à Charger
- **Dossiers de code du projet d'imitation :**
  - `_plan-réalisation-tutos/S*/dossier-depart/`
  - `_plan-réalisation-tutos/S*/code-a-apprendre/`
  - `_plan-réalisation-tutos/S*/plan-developpement.md`
- **Fiches didactiques par domaine (Chargement impératif selon la technologie modifiée) :**
  - HTML : `skills/tutorial-writer/resources/domaine-html.md`
  - CSS : `skills/tutorial-writer/resources/domaine-css.md`
  - JavaScript : `skills/tutorial-writer/resources/domaine-js.md`
  - PHP : `skills/tutorial-writer/resources/domaine-php.md`
  - SQL : `skills/tutorial-writer/resources/domaine-sql.md`
  - PHP & SQL : `skills/tutorial-writer/resources/domaine-php-sql.md`
- **Règles transversales :**
  - `.agents/rules/standards-techniques.md` (Encodage strict UTF-8 sans BOM, livrables, zéro capture).
  - `.agents/rules/pedagogie-spartel.md` (Pédagogie active, cycle de réalisation).

---

# 4. Contraintes & Règles Inviolables
1. **Principe de Non-Anachronisme :**  
   Interdiction formelle d'intégrer dans le code de départ d'une session une fonctionnalité, une balise, une fonction ou un pattern architectural qui n'a pas été abordé dans les sessions précédentes.
   - *Exemple CSS :* Pas de variables `:root` ni de pseudo-classes `:hover` complexes avant la session S7 (UA.122.24).
   - *Exemple PHP/SQL :* Pas de requêtes préparées PDO ni de `$_GET` avant la session S7 (UA.123.17 / UA.124.23).
   - *Exemple JS :* Pas de fichier `script.js` client avant la session S7 (UA.122.31).
2. **Continuité de Chaînage Déterministe :**  
   Le `dossier-depart/` de la session $N$ doit être l'héritier exact et vérifiable du `code-a-apprendre/` de la session $N-1$, éventuellement enrichi des maquettes statiques à dynamiser dans ce sprint.
3. **Zéro Magic Code :**  
   Tout code présent dans `code-a-apprendre/` doit être expliqué, justifié et produit par les tutoriels du sprint. Aucun fichier ne doit être ajouté "en douce" sans fiche de tutoriel associée.
4. **Encodage Strict UTF-8 Sans BOM :**  
   Tous les fichiers créés ou modifiés (`.php`, `.html`, `.css`, `.js`, `.sql`) doivent impérativement être enregistrés en UTF-8 sans BOM.
5. **Autonomie et Robustesse d'Exécution :**  
   Le code produit doit pouvoir être servi localement (`php -S localhost:8000`) sans générer d'erreurs d'interprétation, de `Notice`, de `Warning` PHP, ni d'erreurs JavaScript dans la console du navigateur.

---

# 5. Procédure Pas-à-Pas
1. **Étape 1 : Cadrage de l'Incrément ($\Delta E$) :**
   - Lire attentivement le `plan-developpement.md` de la session cible.
   - Identifier l'état de départ ($E_{n-1}$) et l'état d'arrivée cible ($E_n$).
   - Relever la liste exhaustive des fichiers à créer, modifier ou supprimer.
2. **Étape 2 : Audit de Non-Anachronisme sur `dossier-depart/` :**
   - Inspecter chaque fichier de `dossier-depart/`.
   - Traquer tout concept technique prématuré (styles modulaires, variables CSS, scripts clients, etc.).
   - Assainir le dossier de départ pour qu'il corresponde exactement aux acquis de la session précédente.
3. **Étape 3 : Implémentation du Code Source Incrémental :**
   - Rédiger les modifications dans `code-a-apprendre/` en respectant strictement les conventions de nommage du projet (classes BEM simples, noms explicites en français/anglais cohérent).
   - En PHP : isoler la connexion PDO dans `db.php`, sécuriser les requêtes préparées, protéger l'affichage avec `htmlspecialchars()`.
   - En CSS : appliquer la structure prescrite (monolithique en S2-S6, modulaire en S7).
   - En JS : utiliser le mode strict `'use strict';`, vérifier l'existence des éléments dans le DOM avant modification.
4. **Étape 4 : Validation Croisée avec les Tutoriels :**
   - Vérifier que chaque instruction écrite dans les tutoriels (`T.xxx`) manipule les sélecteurs, fonctions et tables réels présents dans le code source.
5. **Étape 5 : Test d'Exécution Local :**
   - Lancer le serveur local, vérifier le rendu graphique et les flux de requêtes sans régression.

---

# 6. Gestion des Ambiguïtés & Décisions
- **Besoin d'une maquette statique pour un sprint futur :** Placer la maquette dans `dossier-depart/` sous un nom explicite (ex: `public-article.html`) mais en veillant à ce que son CSS et son balisage n'utilisent aucune syntaxe non acquise.
- **Divergence entre le code source et un tutoriel rédigé :** C'est le plan de réalisation validé (`plan-developpement.md`) qui fait foi. Si le code source contient une erreur, corriger le code source. Si le tutoriel utilise de mauvais sélecteurs, réaligner le tutoriel sur le code source réel.

---

# 7. Format de Sortie & Livrables
Toute intervention de `dev-n1` produit :
1. Les fichiers sources applicatifs créés ou modifiés sous `_plan-réalisation-tutos/S[Num]/dossier-depart/` et `code-a-apprendre/`.
2. Une synthèse des deltas techniques détaillant exactement les modifications apportées et les éventuels anachronismes éliminés.
3. La confirmation de l'encodage UTF-8 sans BOM et du test d'exécution local.

---

# 8. Contrôle Qualité (Checklist Binaire)
- [ ] Le `dossier-depart` ne contient-il aucun anachronisme technique par rapport aux sessions précédentes ?
- [ ] Le `code-a-apprendre` correspond-il exactement au résultat des tutoriels du plan de réalisation ?
- [ ] Tous les fichiers sont-ils encodés en UTF-8 sans BOM ?
- [ ] Les classes CSS utilisées dans les templates HTML/PHP correspondent-elles exactement aux règles déclarées dans les feuilles de style ?
- [ ] Le code PHP s'exécute-t-il sans Notice, Warning ou Fatal Error ?
- [ ] Le code JavaScript s'exécute-t-il sans exception dans la console du navigateur ?
- [ ] Les requêtes SQL respectent-elles la casse majuscule et la base `blog_n1` ?

---

# 9. Gestion des Erreurs Fréquentes
| Erreur Typique | Cause | Solution Immédiate |
| :--- | :--- | :--- |
| Injecter un fichier fini dans `dossier-depart` | Copier-coller paresseux d'un prototype complet | Déconstruire le fichier pour ne conserver que les notions déjà acquises |
| Utiliser des classes fictives dans les tutoriels | Rédacteur déconnecté du code réel | Consulter le template réel et utiliser les classes effectives (`.carte-article`, `.bouton-principal`) |
| Variables `:root` présentes avant S7 | Oubli du jalon pédagogique de l'UA.122.24 | Remplacer les variables par des valeurs hexadécimales en dur dans S2-S6 |
| Inclusion de script client avant S7 | Oubli du jalon de l'UA.122.31 | Supprimer la balise `<script>` et le dossier `js/` des sessions S2 à S6 |

---

# 10. Exemples Concrets (Few-Shot)

### Exemple A : Évolution incrémentale d'un bouton de S2 à S7
- **En S2-S6 (Code brut hérité de S2/S3) :**
  ```css
  .bouton-principal {
      display: inline-block;
      padding: 10px 18px;
      color: #ffffff;
      background-color: #2673e8; /* Couleur brute hexadécimale */
      border-radius: 8px;
  }
  /* Pas de :hover complexe, pas de variables */
  ```
- **En S7 ($T_2$ et $T_3$ de l'UA.122.24) :**
  ```css
  .bouton-principal {
      display: inline-block;
      padding: 10px 18px;
      color: #ffffff;
      background-color: var(--couleur-primaire); /* Variable centralisée */
      border-radius: var(--rayon-bordure);
      cursor: pointer;
      transition: background-color 0.2s ease;
  }
  .bouton-principal:hover {
      background-color: var(--couleur-primaire-hover); /* Interaction ajoutée en S7 */
  }
  ```
