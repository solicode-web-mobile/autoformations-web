---
name: tutorial-planer
description: Conçoit, audite et optimise les plans de réalisation et la progression pédagogique des tutoriels par session/sprint, garantissant le chaînage sans rupture cognitive, le titrage technique équilibré (un seul objectif concret), le sas 'Bien démarrer', la description technique complète transformant le dossier de départ vers le livrable final, le respect de la granularité (1 UA par domaine par session, 2 au démarrage), et la création automatique des entités pédagogiques manquantes (Unités d'Apprentissage _uas/, Sessions _sessions/, Domaines _domaines/).
version: 1.3.0
inspiration:
  source: "solicode-pedagogy"
  plugin: "pedagogy-referential"
  pattern: "curriculum-sequencing, zero-gap-learning & cognitive-load-control"
---

# 1. Mission
Ce skill est l'**architecte et ingénieur de la progression pédagogique** des tutoriels au sein du cursus Solicode (Niveau N1 Débutant).
Il intervient en amont de [tutorial-writer](../tutorial-writer/SKILL.md) pour concevoir, auditer et ordonnancer les plans de réalisation par session ou sprint (`_plan-réalisation-tutos/SX/plan-developpement.md`).

Sa vocation est de garantir un parcours d'apprentissage **sans rupture cognitive et sans saut de connaissance** :
chaque apprenant doit être capable de réaliser chaque tutoriel $N$ uniquement avec les connaissances acquises aux étapes $1 \dots N-1$ et des sessions antérieures, sans présupposer de savoirs implicites.

### Rôle Clé 1 : Du `dossier-depart/` vers le Livrable Complet de Session
Au début d'une session, l'apprenant reçoit un **dossier de départ (`dossier-depart/`)** hérité des sessions précédentes (pages statiques, CSS, images).  
À la fin de la session, l'apprenant doit produire **le livrable complet de la session**, constitué du **`dossier-depart/` enrichi et transformé avec le `code-a-apprendre/`** (projet fonctionnel complet prêt pour commit).  
`tutorial-planer` fournit le **plan et la description technique exhaustive** de cette transformation :
- Il découpe l'évolution du code en paliers élémentaires (les tutoriels).
- Pour chaque tutoriel, il spécifie précisément **ce que l'apprenant doit apprendre**, **comment le code évolue techniquement**, quels fichiers sont impactés, et les extraits de code d'entrée ($E_{n-1}$) et de sortie ($E_n$).

### Rôle Clé 2 : Création & Alignement Automatique des Entités Pédagogiques Manquantes
En plus de concevoir le plan de réalisation Markdown, `tutorial-planer` est le **garant de l'intégrité structurelle du référentiel pédagogique Jekyll**.  
Lors de la conception ou de l'audit d'une session :
- **Sessions manquantes :** Si le fichier `_sessions/S[X].md` n'existe pas, le skill le **crée automatiquement** selon [`gabarit-session.md`](resources/gabarit-session.md).
- **Domaines manquants :** Si un domaine `_domaines/D.XXX.Y.[mini-code].md` référencé dans le plan n'existe pas, le skill le **crée automatiquement** selon [`gabarit-domaine.md`](resources/gabarit-domaine.md).
- **Unités d'Apprentissage manquantes :** Si une UA `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md` n'existe pas, le skill la **crée automatiquement** selon [`gabarit-ua.md`](resources/gabarit-ua.md).
- **Synchronisation des entités existantes :** Si des entités existantes présentent des métadonnées obsolètes (titres non alignés, liste `uas:` dans la session incomplète ou non conforme aux 2 UAs de démarrage), le skill les met immédiatement à jour.

> **Contrat d'Interface avec `tutorial-writer` :**  
> `tutorial-planer` livre une spécification technique et pédagogique complète et fermée, ainsi que toutes les entités de structure (`_sessions/`, `_domaines/`, `_uas/`) créées et validées.  
> **Ce qu'il reste à `tutorial-writer` est exclusivement la rédaction du support d'apprentissage :** injecter les consignes dans le gabarit canonique (`layout: tuto`), insérer `window.pageData`, rédiger la théorie illustrée courte (3-4 H3), formuler les exercices pratiques pas-à-pas et définir le glossaire, **sans jamais devoir inventer le code, la trajectoire technique, ni les entités du référentiel.**

---

## 2. Principes Directeurs Inviolables

1. **Continuité Cognitive Déterministe ($E_{n-1} \rightarrow E_n$) :**
   Le code et les notions de départ du tutoriel $N$ correspondent rigoureusement au résultat final du tutoriel $N-1$. Aucune syntaxe, commande ou configuration non vue préalablement ne doit apparaître sans accompagnement.
2. **Juste Équilibre de Titrage : Orienté Notion Technique Pure (Sans Entités du Projet) :**
   Le titre d'un tutoriel doit expliquer **la notion de base que l'on va apprendre dans la technologie** (syntaxe, structure de contrôle, fonction, composant).
   - *Interdiction des entités du projet dans le titre :* Ne jamais mentionner les entités métier du cas d'exemple (ex: pas d'« Article », « Catégorie », « Badge », « Produit » dans le titre). Ce sont de simples données d'illustration utilisées dans le projet. L'apprenant doit mémoriser la compétence technique transférable, pas le cas particulier.
   - *À proscrire (Trop abstrait / académique) :* « Contrôler un traitement », « Répéter un traitement », « Manipuler les expressions ».
   - *À proscrire également (Trop technique / surchargé) :* « Installer PHP CLI, tester php -S et activer display_errors dans php.ini ».
   - **Règle retenue (Le juste équilibre) :** Le titre principal en H3 exprime **un seul objectif technique concret centré sur la notion à apprendre** (ex: `### T.123.12.1 — Déclarer et manipuler un tableau associatif`).  
     Le **sous-titre** explicite l'**objectif logique / pédagogique** (ex: `*Objectif logique : Modéliser et stocker une collection de données en mémoire*`).
3. **Sas Générique « Bien Démarrer » :**
   Avant d'engager le livrable d'un projet applicatif dans un nouveau langage, runtime, framework ou outil, passage obligatoire par deux paliers préalables :
   - *Installation & Environnement Local :* Vérification de l'installation de l'outil, validation du serveur local et premier script de vérification.
   - *Démarrage Rapide (Quickstart) :* Premier micro-exemple isolé sur fichier autonome (`demo.php`) pour assimiler la syntaxe de base sans bruit applicatif.
4. **Spécification Technique et Pédagogique Complète par Fiche de Tutoriel :**
   Chaque tutoriel dans le plan comporte obligatoirement :
   - Le titre technique équilibré en H3 et le sous-titre logique / pédagogique.
   - **L'Unité d'Apprentissage (UA) de rattachement** : code UA officiel, domaine et libellé.
   - **La description de la progression pédagogique :** expliciter clairement la brique de code spécifique ajoutée ou transformée à cette étape pour faire avancer le projet vers le livrable du Projet d'imitation de la session.
   - Ce que l'apprenant doit apprendre (notions, syntaxe, fonctions, bonnes pratiques).
   - La description technique de la réalisation (actions concrètes de développement sur le projet).
   - Les fichiers sources impactés issus de `dossier-depart/`.
   - L'état de départ ($E_{n-1}$) et l'état d'arrivée ($E_n$) avec extraits de code.
   - Le livrable physique tapé par l'apprenant (code source ou `commandes.md`) et le fichier cible.
5. **Livrables Strictement Physiques : Code Source et Fichier `commandes.md` :**
   Tous les livrables demandés doivent être le **code source effectivement tapé par l'apprenant** (fichiers `.php`, `.html`, etc.). Interdiction absolue de demander des justifications verbales, des constats visuels d'écrans ou des captures d'écran sans code. Pour les tutoriels d'installation ou d'exécution CLI, le livrable est obligatoirement un **fichier Markdown listant les commandes réelles exécutées (`commandes.md`)** accompagné du script de test associé.
6. **Front Matter Obligatoire du Plan de Réalisation :**
   Tout fichier `plan-developpement.md` comporte un Front Matter YAML indiquant :
   - Le numéro de version du plan (`version: "1.0.0"`).
   - Le statut d'audit (`audite: true` ou `false`).
   - La date d'audit (`date_audit: "YYYY-MM-DD"`).
   - Le statut de conformité (`statut: "audité et validé"` ou `"en cours"`).
7. **Règle de Granularité des UAs (1 UA par Défaut, 2 UAs au Démarrage Technologique) :**
   - **Règle par défaut :** On attribue obligatoirement **une seule Unité d'Apprentissage (1 UA) par domaine de compétence par session**. Interdiction formelle d'éparpiller de multiples micro-UAs atomiques pour chaque structure ou mot-clé d'un même domaine.
   - **Exception Unique de Démarrage :** Lorsqu'un nouveau langage ou une nouvelle technologie est abordé pour la première fois (ex: PHP en S4), le domaine est structuré en **EXACTEMENT DEUX UNITÉS D'APPRENTISSAGE (2 UAs)** :
     1. **L'Unité « Bien démarrer avec [Technologie] » :** Sas d'installation locale, serveur de développement et premier script autonome.
     2. **L'Unité de formation du Projet d'imitation :** Regroupe l'ensemble des tutoriels d'apprentissage nécessaires pour développer la brique applicative de la session (tableaux, boucles, conditions).
8. **Triade Active LMS :**
   $$\text{Tutoriel (Comprendre)} \longrightarrow \text{Projet d'Imitation (Reproduire)} \longrightarrow \text{Projet Prototype (Expérimenter)} \longrightarrow \text{Projet Fil Rouge (Réutiliser)}$$
9. **Gouvernance DRY (Don't Repeat Yourself) :**
   Aucune duplication des règles permanentes de l'agent (`.agents/rules/`). Séparation stricte : `tutorial-planer` conçoit la trajectoire technique et les entités de structure, `tutorial-writer` rédige les guides.
10. **Intégrité Référentielle des Collections Jekyll (Zéro Entité Fantôme) :**
    Toute Session (`S[X]`), tout Domaine (`D.XXX.Y`) et toute Unité d'Apprentissage (`UA.XXX.YY`) cités dans le plan doivent obligatoirement exister physiquement sous `_sessions/`, `_domaines/` et `_uas/`. Le skill crée ou synchronise immédiatement toute entité manquante à partir de ses gabarits dédiés ([gabarit-session.md](resources/gabarit-session.md), [gabarit-domaine.md](resources/gabarit-domaine.md), [gabarit-ua.md](resources/gabarit-ua.md)).
11. **Périmètre Strict du Plan de Développement (Domaines de Code Pur) :**
    Le fichier `plan-developpement.md` traite **exclusivement des domaines de développement logiciel** :
    - `HTML` (`D.122.1`)
    - `CSS` (`D.122.2`)
    - `JS DOM` (`D.122.3`)
    - `PHP` (`D.123.1`)
    - `SQL` (`D.124.1` / `D.124.2`)
    Les domaines transverses ou méthodologiques (Analyse `D.111.1`, Conception `D.112.1`, Architecture `D.125.1`, Debug `D.125.2`, Test `D.131.1`, Déploiement `D.141.1`, Git `D.151.1`, Gestion de projet `D.152.2`, Veille `D.161.1`) ne doivent **en aucun cas** figurer dans le `plan-developpement.md`.
    *Inviolabilité des tutoriels existants :* Il est formellement interdit de réécrire ou de modifier les tutoriels existants et déjà validés appartenant aux autres domaines. Les autres domaines font l'objet de progressions à part et sont abordés lors de la première apparition du domaine concerné.

---

## 3. Déclenchement & Limites

- **Quand l'activer :**
  - Cadrage et conception d'un nouveau plan de réalisation (`_plan-réalisation-tutos/SX/plan-developpement.md`).
  - Définition de la trajectoire technique transformant `dossier-depart/` vers le livrable final enrichi.
  - Audit d'un plan existant (marquage `audite: true` ou détection des ruptures).
  - Détection, création et synchronisation des entités pédagogiques manquantes (`_sessions/`, `_domaines/`, `_uas/`).
  - Formulation des titres selon la règle du juste équilibre (un seul objectif technique concret).
  - Découpage pédagogique lors de l'introduction d'un nouveau langage ou framework (PHP, React, SQL, etc.).
- **Quand NE PAS l'activer :**
  - Rédaction détaillée pas-à-pas du corps d'un tutoriel ➔ Utiliser [tutorial-writer](../tutorial-writer/SKILL.md).
  - Développement de layouts Jekyll, styles CSS ou scripts du site ➔ Utiliser [dev-jekyll](../dev-jekyll/SKILL.md).
  - Synchronisation du socle technique partagé ➔ Utiliser [sync-theme](../sync-theme/SKILL.md).
  - Gouvernance globale des compétences et standards ➔ Utiliser [plugin-dev](../plugin-dev/SKILL.md).

---

## 4. Entrées & Ressources à Charger

- **Données d'entrée obligatoires :**
  1. Le fichier de plan de réalisation existant ou à concevoir (`_plan-réalisation-tutos/SX/plan-developpement.md`).
  2. Le dossier de code de départ (`dossier-depart/`) et le code cible d'arrivée (`code-a-apprendre/`).
  3. La fiche de cadrage de la session (`_sessions/SX.md` et `_plan-réalisation-tutos/SX/README.md`).
- **Collections du site Jekyll à auditer et enrichir :**
  - `_sessions/` : Fiches de session `S[X].md`.
  - `_domaines/` : Fiches de domaines de compétences `D.XXX.Y.[mini-code].md`.
  - `_uas/` : Fiches d'Unités d'Apprentissage classées par sous-dossier de domaine `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md`.
- **Ressources internes encapsulées :**
  - [methode-bien-demarrer.md](resources/methode-bien-demarrer.md) : Protocole complet du sas d'atterrissage (installation, environnement local, Quickstart isolé).
  - [gabarit-plan-session.md](resources/gabarit-plan-session.md) : Gabarit Markdown normé avec Front Matter et fiches techniques complètes.
  - [gabarit-session.md](resources/gabarit-session.md) : Gabarit normé pour créer ou synchroniser une fiche de session (`_sessions/S[X].md`).
  - [gabarit-domaine.md](resources/gabarit-domaine.md) : Gabarit normé pour créer un domaine de compétence (`_domaines/D.XXX.Y.[mini-code].md`).
  - [gabarit-ua.md](resources/gabarit-ua.md) : Gabarit normé pour créer une Unité d'Apprentissage (`_uas/[domaine]/UA.XXX.YY.md`).
- **Ressources transversales du projet :**
  - `.agents/rules/pedagogie-spartel.md` (Directives didactiques N1 et cycle actif).
  - `.agents/rules/standards-techniques.md` (Encodage UTF-8 sans BOM, conventions de nommage et livrables).

---

## 5. Procédure Pas-à-Pas

### Parcours A : Cadrage & Conception d'un Nouveau Plan Technique
1. **Étape 1 : Analyse des Codes Source (`dossier-depart/` vs `code-a-apprendre/`) :**
   - Comparer les deux dossiers pour cartographier exactement les fichiers à créer, modifier ou conserver.
   - Identifier si une nouvelle technologie, un nouveau runtime ou une nouvelle bibliothèque fait son apparition.
2. **Étape 2 : Planification du Sas « Bien Démarrer » (Si nouvelle technologie) :**
   - Consulter [methode-bien-demarrer.md](resources/methode-bien-demarrer.md).
   - Positionner le tutoriel d'installation et préparation de l'environnement local.
   - Positionner le tutoriel de démarrage rapide (Quickstart) sur bac à sable isolé (`hello.php`).
3. **Étape 3 : Contrôle de Granularité des UAs :**
   - S'assurer que le plan ne mobilise qu'une seule UA du domaine principal (ou exactement 2 UAs en cas de démarrage technologique).
   - Si plusieurs UAs se bousculent, arbitrer pour consolider ou reporter sur la session suivante.
4. **Étape 4 : Découpage Incrémental vers le Livrable Complet :**
   - Découper la transformation de `dossier-depart/` en étapes successives indépendantes.
   - Vérifier pour chaque étape que $E_{n-1}$ fournit rigoureusement 100% des prérequis de $E_n$.
5. **Étape 5 : Rédaction des Fiches Techniques Détaillées :**
   - Remplir le plan selon [gabarit-plan-session.md](resources/gabarit-plan-session.md).
   - Pour chaque tutoriel, rédiger obligatoirement :
     - Le titre équilibré : **un seul objectif technique concret** en H3 et le sous-titre logique.
     - L'UA de rattachement et la brique de code ajoutée vers le projet d'imitation.
     - Ce que l'apprenant doit apprendre (notions, syntaxe, fonctions).
     - La description technique de la manipulation sur le code du projet.
     - Les fichiers impactés.
     - Les extraits de code représentatifs de départ ($E_{n-1}$) et d'arrivée ($E_n$).
     - Le livrable physique tapé par l'apprenant (`commandes.md` ou code source).
6. **Étape 6 : Création et Synchronisation des Entités Pédagogiques Manquantes :**
   - **Vérifier la Session :** Vérifier que `_sessions/S[X].md` existe. Sinon, la créer avec [`gabarit-session.md`](resources/gabarit-session.md). Si elle existe, s'assurer que la liste `uas:` correspond exactement aux UAs actives du plan.
   - **Vérifier les Domaines :** Vérifier que chaque domaine cité existe sous `_domaines/D.XXX.Y.[mini-code].md`. Sinon, le créer avec [`gabarit-domaine.md`](resources/gabarit-domaine.md).
   - **Vérifier les UAs :** Pour chaque UA référencée, vérifier sa présence sous `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md`. Si manquante, la créer avec [`gabarit-ua.md`](resources/gabarit-ua.md). Si existante, synchroniser son titre, sa description et ses notions pour refléter la planification validée.
7. **Étape 7 : Validation du Front Matter & Audit :**
   - Renseigner `version:`, `audite: true`, `date_audit:` et `statut: "audité et validé"` dans `plan-developpement.md`.

---

### Parcours B : Audit & Refonte d'un Plan Existant
1. **Étape 1 : Diagnostic des Ruptures Cognitives :**
   - Parcourir les tutoriels planifiés dans l'ordre chronologique.
   - Identifier tout prérequis manquant (environnement, debug, notions syntaxiques non introduites).
2. **Étape 2 : Audit du Titrage (Le Juste Équilibre) :**
   - Éliminer les titres trop abstraits et simplifier les titres surchargés de détails techniques vers **un seul objectif technique concret**.
3. **Étape 3 : Audit de Granularité et des Entités Référencées :**
   - Réduire à 1 UA (ou 2 au démarrage technologique) par domaine.
   - Vérifier et créer ou aligner les fichiers correspondants sous `_sessions/`, `_domaines/` et `_uas/`.
4. **Étape 4 : Audit de Précision Technique :**
   - Compléter chaque fiche avec les 6 rubriques techniques obligatoires.
5. **Étape 5 : Restructuration Chirurgicale du Plan :**
   - Réécrire le fichier `plan-developpement.md` selon le gabarit normé enrichi.
   - Mettre à jour le Front Matter (`audite: true`, `statut: "audité et validé"`).

---

## 6. Format de Sortie & Livrables

Tout plan produit est un fichier Markdown conforme à [gabarit-plan-session.md](resources/gabarit-plan-session.md) sous :  
`_plan-réalisation-tutos/S[X]/plan-developpement.md`

Il s'accompagne obligatoirement de la **création ou mise à jour des entités Jekyll correspondantes** :
1. **Fiche de Session :** `_sessions/S[X].md` (avec la liste exacte des `uas:` actives).
2. **Fiche de Domaine :** `_domaines/D.XXX.Y.[mini-code].md` (créée si inexistante).
3. **Fiches d'Unités d'Apprentissage :** `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md` (créées si inexistantes, ou synchronisées).
4. **Fiche de cadrage :** `_plan-réalisation-tutos/S[X]/README.md`.

Le plan s'ouvre obligatoirement par son Front Matter d'audit :
```yaml
---
session: "S[X]"
version: "1.0.0"
audite: true
date_audit: "AAAA-MM-JJ"
statut: "audité et validé"
---
```

Chaque fiche de tutoriel comporte impérativement :
```text
### T.[Code] — [Titre Technique Équilibré : Un Seul Objectif Concret]
*Objectif logique : [Titre Logique / Pédagogique]*
*Unité d'Apprentissage (UA) :* UA.[Code] — [Libellé officiel de l'UA] ([Domaine])

- **Progression pédagogique (Brique de code vers le Projet d'imitation) :**
  [Explication claire de la brique de code spécifique ajoutée ou transformée à cette étape pour faire progresser le code hérité vers le livrable final du projet d'imitation].
- 1. Ce que l'apprenant doit apprendre (Notions, syntaxe, fonctions, bonnes pratiques)
- 2. Description technique de la réalisation (Actions concrètes sur le code du projet)
- 3. Fichiers impactés (Issus de dossier-depart/)
- 4. État de départ (E_n-1 avec extrait de code)
- 5. État d'arrivée (E_n avec extrait de code)
- 6. Livrable physique tapé par l'apprenant (Code source ou fichier commandes.md) & Fichier cible dans le projet
```

---

## 7. Contrôle Qualité (Checklist Binaire)

- [ ] Le Front Matter du plan contient-il `version:`, `audite:` (booléen), `date_audit:` et `statut:` ?
- [ ] Le point de départ (`dossier-depart/`) et l'aboutissement (livrable complet transformé) sont-ils clairement identifiés ?
- [ ] Tout nouvel outil intègre-t-il son étape Hello World (installation et préparation de l'environnement local) ?
- [ ] Une étape Démarrage Rapide (Quickstart) sur un fichier isolé précède-t-elle le projet applicatif ?
- [ ] Chaque tutoriel porte-t-il un **titre équilibré centré sur la notion technique à apprendre**, sans mentionner les entités du cas projet (pas d'Article, Catégorie, etc.) ?
- [ ] L'**Unité d'Apprentissage (UA)** de rattachement est-elle clairement affichée pour chaque tutoriel ?
- [ ] La **progression pédagogique et la brique de code ajoutée** vers le Projet d'imitation sont-elles explicitées pour chaque étape ?
- [ ] Chaque fiche de tutoriel contient-elle la description technique complète et ce que l'on doit apprendre ?
- [ ] Chaque fiche indique-t-elle les fichiers impactés, ainsi que les extraits de code $E_{n-1}$ et $E_n$ ?
- [ ] Tous les livrables spécifiés sont-ils obligatoirement du **code source tapé ou un fichier `commandes.md`** (zéro justification verbale ou constat visuel sans code) ?
- [ ] La session respecte-t-elle la règle de granularité : **1 seule UA par domaine par défaut**, et **exactement 2 UAs** (1. « Bien démarrer » + 2. Formation du Projet d'imitation) en cas de démarrage technologique ?
- [ ] La fiche de session `_sessions/S[X].md` existe-t-elle physiquement et sa liste `uas:` est-elle rigoureusement alignée ?
- [ ] Chaque domaine référencé existe-t-il physiquement sous `_domaines/` ?
- [ ] Chaque UA référencée dans le plan existe-t-elle physiquement sous `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md` avec toutes ses rubriques conformes ?
- [ ] L'état de départ ($E_{n-1}$) correspond-il exactement à la sortie du tutoriel précédent (zéro trou) ?
- [ ] Tous les fichiers créés ou modifiés sont-ils encodés en **UTF-8 sans BOM** ?
- [ ] Le plan permet-il à `tutorial-writer` de rédiger directement le support sans avoir à concevoir la technique ?

---

## 8. Exemples de Titrage Équilibré (Few-Shot)

| Titre Trop Abstrait (Banni) | Titre Trop Surchargé ou Lié au Projet (Banni) | Titre Équilibré Retenu (Normé) | Sous-Titre Logique Associé |
| :--- | :--- | :--- | :--- |
| Écrire et exécuter un script | Installer PHP CLI, tester php -S et créer des scripts de test | **Installer PHP et préparer l'environnement local** | *Valider l'installation de PHP et la préparation de l'environnement local* |
| Débuter en PHP | Créer hello.php avec balises <?php, déclarer variables et echo | **Créer son premier script avec echo** | *Démarrage rapide sur la syntaxe PHP élémentaire* |
| Structurer une page serveur | Renommer public-index.html et require index-template.php pour le blog | **Séparer les données et l'affichage avec require** | *Structurer la page en contrôleur et template HTML* |
| Manipuler les données | Déclarer les articles du blog en tableau associatif | **Déclarer et manipuler un tableau associatif** | *Modéliser et stocker une collection de données en mémoire* |
| Répéter un traitement | Boucler sur les articles avec foreach et htmlspecialchars | **Parcourir une collection avec la boucle foreach** | *Générer dynamiquement une liste d'éléments sécurisés* |
| Contrôler un traitement | Conditionner l'affichage du badge de l'article avec if/else | **Adapter l'affichage avec la condition if / else** | *Contrôler dynamiquement le rendu visuel selon une donnée* |
| Dynamiser une liste | Générer les filtres de catégories du blog avec foreach | **Générer des liens dynamiques avec la boucle foreach** | *Répéter un affichage de liens avec paramètres* |
