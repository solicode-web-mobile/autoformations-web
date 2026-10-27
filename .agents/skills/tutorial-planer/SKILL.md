---
name: tutorial-planer
description: Conçoit, audite et optimise les plans de réalisation et la progression pédagogique des tutoriels par session/sprint, garantissant le chaînage sans rupture cognitive, le titrage technique prioritaire, le sas 'Bien démarrer' et le respect de la granularité (1 UA par domaine par session).
version: 1.0.0
inspiration:
  source: "solicode-pedagogy"
  plugin: "pedagogy-referential"
  pattern: "curriculum-sequencing, zero-gap-learning & cognitive-load-control"
---

# 1. Mission
Ce skill est l'**architecte et auditeur de la progression pédagogique** des tutoriels au sein du cursus Solicode (Niveau N1 Débutant).
Il intervient en amont de [tutorial-writer](../tutorial-writer/SKILL.md) pour concevoir, auditer et ordonnancer les plans de réalisation par session ou sprint (`_plan-réalisation-tutos/SX/plan-developpement.md`).

Sa vocation est de garantir un parcours d'apprentissage **sans rupture cognitive et sans saut de connaissance** :
chaque apprenant doit être capable de réaliser chaque tutoriel $N$ uniquement avec les connaissances acquises aux étapes $1 \dots N-1$ et des sessions antérieures, sans présupposer de savoirs implicites.

### Principes Directeurs
1. **Zéro Rupture Cognitive ($E_{n-1} \rightarrow E_n$) :**
   Le code et les notions de départ du tutoriel $N$ correspondent rigoureusement au résultat final du tutoriel $N-1$. Aucune syntaxe, commande ou configuration non vue préalablement ne doit apparaître sans accompagnement.
2. **Titrage Technique en Priorité, Titre Logique en Sous-titre :**
   Les apprenants débutants (N1) se repèrent et mémorisent les notions par les éléments techniques concrets (commandes CLI, noms de fichiers, fonctions, mots-clés) plutôt que par les intitulés conceptuels abstraits. Le titre principal est obligatoirement technique, et l'objectif logique/pédagogique forme le sous-titre.
3. **Sas Générique « Bien Démarrer » :**
   Avant d'engager le livrable d'un projet applicatif dans un nouveau langage, runtime, framework ou outil, passage obligatoire par deux paliers préalables :
   - *Hello World & Diagnostic :* Vérification de l'installation, exécution minimale et **activation explicite de l'affichage des erreurs** (débogage immédiat).
   - *Démarrage Rapide (Quickstart) :* Premier micro-exemple isolé pour assimiler la syntaxe de base sans bruit applicatif.
4. **Granularité Cognitive Minimale :**
   **Une seule Unité d'Apprentissage (1 UA)** d'un domaine donné par session au maximum (sauf exception motivée pour dissocier le sas d'installation/démarrage de la pratique applicative).
5. **Articulation de la Triade Active LMS :**
   $$\text{Tutoriel (Comprendre)} \longrightarrow \text{Projet d'Imitation (Reproduire)} \longrightarrow \text{Projet Prototype (Expérimenter)} \longrightarrow \text{Projet Fil Rouge (Réutiliser)}$$
6. **Gouvernance DRY (Don't Repeat Yourself) :**
   Ce skill gouverne la planification et la continuité didactique sans dupliquer le contenu des règles permanentes (`.agents/rules/`) ni empiéter sur la rédaction détaillée du markdown des tutoriels dévolue à `tutorial-writer`.

---

## 2. Déclenchement & Limites

- **Quand l'activer :**
  - Cadrage et conception d'un nouveau plan de réalisation (`_plan-réalisation-tutos/SX/plan-developpement.md`).
  - Audit d'un plan existant pour identifier les ruptures cognitives, prérequis oubliés ou saturations de charge.
  - Découpage pédagogique lors de l'introduction d'un nouveau langage ou framework (PHP, React, SQL, etc.).
  - Reformulation des titres de tutoriels selon la convention technique prioritaire.
  - Rééquilibrage du nombre d'UA par domaine au sein des sessions.
- **Quand NE PAS l'activer :**
  - Rédaction détaillée pas-à-pas du corps d'un tutoriel ➔ Utiliser [tutorial-writer](../tutorial-writer/SKILL.md).
  - Développement de layouts Jekyll, styles CSS ou scripts du site ➔ Utiliser [dev-jekyll](../dev-jekyll/SKILL.md).
  - Synchronisation du socle technique partagé ➔ Utiliser [sync-theme](../sync-theme/SKILL.md).
  - Gouvernance globale des compétences et standards ➔ Utiliser [plugin-dev](../plugin-dev/SKILL.md).

---

## 3. Entrées & Ressources à Charger

- **Données d'entrée obligatoires :**
  1. Le fichier de plan de réalisation existant ou à concevoir (`_plan-réalisation-tutos/SX/plan-developpement.md`).
  2. Le dossier de code de départ (`dossier-depart/`) et le code cible d'arrivée (`code-a-apprendre/`).
  3. La fiche de cadrage de la session (`_sessions/SX.md` et `_plan-réalisation-tutos/SX/README.md`).
- **Ressources internes encapsulées (Chargement selon besoin) :**
  - [methode-bien-demarrer.md](resources/methode-bien-demarrer.md) : Protocole complet du sas d'atterrissage (Hello World, configuration erreurs, Quickstart isolé).
  - [gabarit-plan-session.md](resources/gabarit-plan-session.md) : Gabarit Markdown normé pour tout plan de réalisation sous `_plan-réalisation-tutos/`.
- **Ressources transversales du projet :**
  - `.agents/rules/pedagogie-spartel.md` (Directives didactiques N1 et cycle actif).
  - `.agents/rules/standards-techniques.md` (Encodage UTF-8 sans BOM, conventions de nommage et livrables).

---

## 4. Contraintes & Règles Inviolables

1. **Continuité Cognitive Déterministe ($E_{n-1} \rightarrow E_n$) :**
   Il est strictement interdit d'introduire dans un tutoriel $N$ une fonction, une commande CLI, un fichier ou une variable qui n'a pas été installée ou écrite dans les tutoriels précédents ou sessions antérieures. Tout prérequis implicite constitue un défaut bloquant.
2. **Priorité au Titrage Technique :**
   Tout tutoriel dans le plan DOIT porter un **titre technique concret** (fichiers cibles, commandes, mots-clés, fonctions : ex: `Boucler sur un tableau avec foreach`). Le **titre logique / conceptuel** doit obligatoirement figurer en sous-titre (ex: *Objectif logique : Répéter un traitement d'affichage*).
3. **Sas « Bien Démarrer » Systématique :**
   Dès qu'une session aborde une nouvelle technologie, un nouveau langage ou un nouvel outil :
   - Obligation d'inclure l'étape **Hello World & Diagnostic** (vérification de présence, premier script minimal, et **activation explicite de l'affichage des erreurs**).
   - Obligation d'inclure l'étape **Démarrage Rapide (Quickstart)** sur un fichier isolé avant d'attaquer la maquette applicative.
4. **Règle de Granularité Cognitive (1 UA par domaine par session) :**
   Une session ne doit comporter de préférence qu'**une seule Unité d'Apprentissage (1 UA)** d'un domaine technique donné. Interdiction d'empiler plusieurs UAs d'un même domaine dans une seule session (sauf exception motivée pour isoler le sas de démarrage).
5. **Triade Active des Projets :**
   Le plan doit formaliser clairement comment les micro-livrables des tutoriels s'assemblent pour produire le livrable du **Projet d'Imitation**, puis comment l'apprenant transfère ces acquis sur le **Projet Prototype** et le **Projet Fil Rouge**.
6. **Encodage & Formatage Strict :**
   Tous les fichiers de plans sont encodés en **UTF-8 sans BOM**. Zéro syntaxe LaTeX (`$...$`), privilégier l'Unicode pur (`→`, `≥`, `≤`).

---

## 5. Procédure Pas-à-Pas

### Parcours A : Cadrage & Conception d'un Nouveau Plan de Session
1. **Étape 1 : Analyse des Codes et Détection des Nouveautés :**
   - Comparer le `dossier-depart/` et le `code-a-apprendre/`.
   - Identifier si une nouvelle technologie, un nouveau runtime ou une nouvelle bibliothèque fait son apparition.
2. **Étape 2 : Planification du Sas « Bien Démarrer » (Si nouvelle technologie) :**
   - Consulter [methode-bien-demarrer.md](resources/methode-bien-demarrer.md).
   - Positionner le tutoriel d'installation/Hello World avec activation des erreurs (`display_errors`, console dev, mode debug).
   - Positionner le tutoriel de démarrage rapide (Quickstart) sur bac à sable isolé.
3. **Étape 3 : Contrôle de Granularité des UAs :**
   - S'assurer que le plan ne mobilise qu'une seule UA du domaine principal (hors sas de démarrage).
   - Si plusieurs UAs se bousculent, arbitrer pour scinder la progression ou reporter sur la session suivante.
4. **Étape 4 : Découpage Incrémental en Chaîne Sans Rupture :**
   - Découper la réalisation du code cible en paliers successifs élémentaires.
   - Vérifier pour chaque étape que $E_{n-1}$ fournit rigoureusement 100% des prérequis de $E_n$.
5. **Étape 5 : Rédaction du Plan selon le Gabarit Normé :**
   - Charger et appliquer [gabarit-plan-session.md](resources/gabarit-plan-session.md).
   - Attribuer à chaque tutoriel son **titre technique explicite** et son **sous-titre logique**.
   - Définir le livrable et le fichier cible exact pour chaque tutoriel.
6. **Étape 6 : Articulation des 3 Projets :**
   - Décrire comment le cumul des tutoriels forme le Projet d'imitation, et expliciter les passerelles vers le Prototype et le Fil Rouge.

---

### Parcours B : Audit & Refonte d'un Plan Existant
1. **Étape 1 : Diagnostic des Ruptures Cognitives :**
   - Parcourir les tutoriels planifiés dans l'ordre chronologique.
   - Identifier tout prérequis manquant (environnement, debug, notions syntaxiques non introduites).
2. **Étape 2 : Diagnostic de Surcharge Cognitive (Audit des UAs) :**
   - Compter les UAs d'un même domaine au sein de la session. Si > 1, isoler ce qui relève du démarrage et ce qui doit être reporté.
3. **Étape 3 : Audit du Titrage :**
   - Détecter les titres purement logiques ou académiques et les transformer en titres techniques concrets avec sous-titres logiques.
4. **Étape 4 : Restructuration Chirurgicale du Plan :**
   - Réécrire le fichier `plan-developpement.md` selon le gabarit normé.
   - Aligner le `README.md` de la session et la collection Jekyll `_sessions/SX.md`.

---

## 6. Gestion des Ambiguïtés & Décisions

- **Surcharge d'UA (Ex: 4 UAs d'un coup dans une session) :**
  Ne pas valider le plan tel quel. Proposer la dissociation : session S(N) dédiée aux bases et au rendu dynamique élémentaire, session S(N+1) dédiée aux structures modulaires ou requêtes avancées.
- **Titre Technique vs Titre Logique :**
  Si le titre initial est "Manipuler les variables et tableaux", le convertir en Titre Technique : `Déclarer des variables et un tableau associatif $articles` avec pour sous-titre logique : *Manipuler les variables et expressions en PHP*.
- **Absence d'affichage des erreurs :**
  Toute formation back-end ou script serveur sans étape explicite de configuration d'affichage d'erreurs est considérée comme **invalide et bloquante pour l'apprenant**.
- **Code de départ manquant :**
  Exiger la présence physique de `dossier-depart/` et `code-a-apprendre/` avant de figer le plan.

---

## 7. Format de Sortie & Livrables

Tout plan validé ou restructuré est produit sous la forme d'un fichier Markdown conforme à [gabarit-plan-session.md](resources/gabarit-plan-session.md) situé dans :
`_plan-réalisation-tutos/S[X]/plan-developpement.md`

Il comporte :
- Le contexte et l'objectif central avec schéma Mermaid de flux/architecture.
- L'articulation temporelle (acquis passés, UAs mobilisées avec 1 UA max par domaine, perspectives).
- Les fiches de tutoriels détaillées avec **titre technique en H3** et **objectif logique en sous-titre**.
- Les états $E_{n-1} \rightarrow E_n$ explicites pour chaque tutoriel.
- La déclinaison dans la triade des 3 projets (Imitation, Prototype, Fil Rouge).

---

## 8. Contrôle Qualité (Checklist Binaire)

- [ ] Tout nouvel outil, langage ou framework intègre-t-il obligatoirement son étape Hello World (installation/vérification) ?
- [ ] La configuration de l'affichage des erreurs / débogage fait-elle l'objet d'une manipulation explicite dès le premier tutoriel ?
- [ ] Une étape Démarrage Rapide (Quickstart) sur un fichier isolé précède-t-elle le livrable du projet d'imitation ?
- [ ] Chaque tutoriel porte-t-il obligatoirement un **titre technique concret** (outils, fichiers, fonctions) en titre principal ?
- [ ] L'objectif conceptuel/pédagogique est-il clairement indiqué en **sous-titre logique** ?
- [ ] La session respecte-t-elle la règle de **1 seule UA par domaine** (sauf exception motivée pour le sas de démarrage) ?
- [ ] L'état de départ ($E_{n-1}$) du tutoriel $N$ correspond-il exactement à la sortie du tutoriel $N-1$ (zéro saut de connaissance) ?
- [ ] Le code de départ (`dossier-depart/`) et le code cible (`code-a-apprendre/`) sont-ils référencés et cohérents ?
- [ ] Le plan détaille-t-il l'articulation vers les 3 projets (Imitation, Prototype, Fil Rouge) ?
- [ ] Le fichier est-il encodé en **UTF-8 sans BOM** ?
- [ ] Le texte est-il exempt de syntaxe LaTeX (`$...$`) au profit de symboles Unicode ?
- [ ] Les principes DRY sont-ils respectés vis-à-vis des règles de l'agent et de `tutorial-writer` ?

---

## 9. Gestion des Erreurs Fréquentes

| Erreur Typique | Cause Profonde | Solution Immédiate |
| :--- | :--- | :--- |
| Commencer directement par le template du Blog sans installer PHP | Focalisation exclusive sur le livrable final du projet | Insérer le sas "Bien Démarrer" : installation PHP, serveur local, Hello World et `display_errors` |
| Écran blanc lors d'une erreur de syntaxe PHP | `display_errors` désactivé par défaut dans la configuration | Insérer un tutoriel dédié pour activer `display_errors` et `error_reporting` |
| Intituler un tutoriel de façon abstraite (*« Contrôler un traitement »*) | Réflexe de rédaction académique | Remplacer par un titre technique : `Appliquer une condition if/else pour afficher le badge Nouveau` |
| Empiler 4 UAs du même domaine dans la même session (ex: S4) | Tentative de tout couvrir en un seul bloc | Isoler 1 seule UA métier par session et décaler les notions avancées sur les sessions suivantes |
| Rupture d'état : tutoriel N utilisant une variable jamais créée | Découpage théorique non testé sur le code | Vérifier physiquement que $E_{n-1}$ produit l'intégralité du contexte nécessaire à $E_n$ |
| Exercice pratique mélangé avec les dépendances du projet | Absence d'isolation pour l'apprentissage initial | Réaliser le Quickstart dans un fichier bac à sable autonome (`demo-bases.php`) avant le Blog |

---

## 10. Exemples Concrets (Few-Shot)

### Cas d'Étude Réel : Audit et Refonte Pédagogique de la Session S4

#### État Initial (Avec Ruptures et Surcharges) :
- **Surcharges constatées :** 4 UAs PHP empilées dans S4 (`UA.123.11`, `UA.123.12`, `UA.123.13`, `UA.123.14`) en plus de l'architecture (`UA.125.13`) et de la conception (`UA.112.14`).
- **Ruptures majeures :**
  - Aucune installation de PHP sur la machine ni vérification de binaire.
  - Aucune explication sur l'activation de `display_errors = On` (risque d'écran blanc bloquant).
  - Saut direct dans la création de `index.php` du Blog sans sas "Bien Démarrer" (Hello World & Quickstart).
- **Titres abstraits :** *« Écrire son premier script PHP »*, *« Répéter un traitement avec foreach »*.

#### État Corrigé par `tutorial-planer` :
1. **Introduction du Sas « Bien Démarrer » :**
   - **T.123.11.0 — Installer PHP CLI, lancer le serveur local et activer `display_errors`**  
     *Objectif logique : Valider l'environnement d'exécution et le débogage serveur*
   - **T.123.11.1 — Créer un script `hello.php` avec echo et variables scalaires**  
     *Objectif logique : Démarrage rapide (Quickstart) sur la syntaxe élémentaire*
2. **Transition vers le Projet d'Imitation (Blog Dynamique) :**
   - **T.123.12.1 — Déclarer un tableau associatif `$articles` en mémoire dans `index.php`**  
     *Objectif logique : Structurer une collection de données en mémoire*
   - **T.123.13.1 — Conditionner l'affichage du badge avec `if / else`**  
     *Objectif logique : Contrôler dynamiquement le rendu visuel selon une donnée*
   - **T.123.14.1 — Boucler sur `$articles` avec `foreach` et sécuriser avec `htmlspecialchars()`**  
     *Objectif logique : Répéter un affichage dynamique sécurisé*
   - **T.125.13.1 — Découper la logique et la vue avec `require 'index-template.php'`**  
     *Objectif logique : Séparer le traitement serveur de l'affichage HTML*
3. **Résultat :** Zéro rupture, affichage des erreurs garanti dès la minute 1, repérage technique immédiat pour l'apprenant, et conformité totale avec le standard N1.
