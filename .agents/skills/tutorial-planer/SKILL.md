---
name: tutorial-planer
description: Conçoit, audite et optimise les plans de réalisation et la progression pédagogique des tutoriels par session/sprint, garantissant le chaînage sans rupture cognitive, le titrage technique prioritaire, le sas 'Bien démarrer', la description technique complète à partir du dossier de départ et le respect de la granularité (1 UA par domaine par session).
version: 1.1.0
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

### Rôle Clé : De `dossier-depart/` vers `code-a-apprendre/`
Au début d'une session, l'apprenant reçoit un **dossier de départ (`dossier-depart/`)** hérité des sessions précédentes. L'objectif technique du sprint est d'atteindre le **code cible (`code-a-apprendre/`)**.
`tutorial-planer` fournit le **plan et la description technique exhaustive** de cette transformation :
- Il découpe l'évolution du code en paliers élémentaires (les tutoriels).
- Pour chaque tutoriel, il spécifie précisément **ce que l'apprenant doit apprendre**, **comment le code évolue techniquement**, quels fichiers sont impactés, et les extraits de code d'entrée ($E_{n-1}$) et de sortie ($E_n$).

> **Contrat d'Interface avec `tutorial-writer` :**  
> `tutorial-planer` livre une spécification technique et pédagogique complète et fermée.  
> **Ce qu'il reste à `tutorial-writer` est exclusivement la rédaction du support d'apprentissage :** injecter les consignes dans le gabarit canonique (`layout: tuto`), insérer `window.pageData`, rédiger la théorie illustrée courte (3-4 H3), formuler les exercices pratiques pas-à-pas et définir le glossaire, **sans jamais devoir inventer le code ni la trajectoire technique.**

---

## 2. Principes Directeurs Inviolables

1. **Continuité Cognitive Déterministe ($E_{n-1} \rightarrow E_n$) :**
   Le code et les notions de départ du tutoriel $N$ correspondent rigoureusement au résultat final du tutoriel $N-1$. Aucune syntaxe, commande ou configuration non vue préalablement ne doit apparaître sans accompagnement.
2. **Priorité au Titrage Technique, Titre Logique en Sous-titre :**
   Les apprenants débutants (N1) se repèrent et mémorisent les notions par les éléments techniques concrets (commandes CLI, noms de fichiers, fonctions, mots-clés) plutôt que par les intitulés conceptuels abstraits.  
   - **Titre principal H3 :** Technique (ex: `### T.123.14.1 — Boucler sur $articles avec foreach et sécuriser avec htmlspecialchars`).
   - **Sous-titre :** Logique / Pédagogique (ex: `*Objectif logique : Répéter un affichage dynamique sécurisé*`).
3. **Sas Générique « Bien Démarrer » :**
   Avant d'engager le livrable d'un projet applicatif dans un nouveau langage, runtime, framework ou outil, passage obligatoire par deux paliers préalables :
   - *Hello World & Diagnostic :* Vérification de l'installation, exécution minimale et **activation explicite de l'affichage des erreurs** (débogage immédiat).
   - *Démarrage Rapide (Quickstart) :* Premier micro-exemple isolé sur fichier autonome (`demo.php`) pour assimiler la syntaxe de base sans bruit applicatif.
4. **Spécification Technique Complète par Fiche de Tutoriel :**
   Chaque tutoriel dans le plan comporte obligatoirement :
   - Ce que l'apprenant doit apprendre (notions, syntaxe, fonctions, bonnes pratiques).
   - La description technique de la réalisation (actions concrètes de développement sur le projet).
   - Les fichiers sources impactés issus de `dossier-depart/`.
   - L'état de départ ($E_{n-1}$) et l'état d'arrivée ($E_n$) avec extraits de code.
   - Le micro-livrable vérifiable et le fichier cible.
5. **Granularité Cognitive Minimale :**
   **Une seule Unité d'Apprentissage (1 UA)** d'un domaine donné par session au maximum (sauf exception motivée pour dissocier le sas d'installation/démarrage de la pratique applicative).
6. **Triade Active LMS :**
   $$\text{Tutoriel (Comprendre)} \longrightarrow \text{Projet d'Imitation (Reproduire)} \longrightarrow \text{Projet Prototype (Expérimenter)} \longrightarrow \text{Projet Fil Rouge (Réutiliser)}$$
7. **Gouvernance DRY (Don't Repeat Yourself) :**
   Aucune duplication des règles permanentes de l'agent (`.agents/rules/`). Séparation stricte : `tutorial-planer` conçoit la trajectoire technique, `tutorial-writer` rédige les guides.

---

## 3. Déclenchement & Limites

- **Quand l'activer :**
  - Cadrage et conception d'un nouveau plan de réalisation (`_plan-réalisation-tutos/SX/plan-developpement.md`).
  - Définition de la trajectoire technique transformant `dossier-depart/` en `code-a-apprendre/`.
  - Spécification détaillée des tutoriels pour fournir à `tutorial-writer` un contrat d'implémentation prêt à rédiger.
  - Audit d'un plan existant pour identifier les ruptures cognitives, prérequis oubliés ou saturations de charge.
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
- **Ressources internes encapsulées :**
  - [methode-bien-demarrer.md](resources/methode-bien-demarrer.md) : Protocole complet du sas d'atterrissage (Hello World, configuration erreurs, Quickstart isolé).
  - [gabarit-plan-session.md](resources/gabarit-plan-session.md) : Gabarit Markdown normé avec la fiche technique complète par tutoriel.
- **Ressources transversales du projet :**
  - `.agents/rules/pedagogie-spartel.md` (Directives didactiques N1 et cycle actif).
  - `.agents/rules/standards-techniques.md` (Encodage UTF-8 sans BOM, conventions de nommage et livrables).

---

## 5. Procédure Pas-à-Pas

### Parcours A : Cadrage & Conception d'un Nouveau Plan Technique
1. **Étape 1 : Analyse des Codes Source (`dossier-depart/` vs `code-a-apprendre/`) :**
   - Comparer les deux dossiers pour cartographier exactement les fichiers à créer, modifier ou supprimer.
   - Identifier si une nouvelle technologie, un nouveau runtime ou une nouvelle bibliothèque fait son apparition.
2. **Étape 2 : Planification du Sas « Bien Démarrer » (Si nouvelle technologie) :**
   - Consulter [methode-bien-demarrer.md](resources/methode-bien-demarrer.md).
   - Positionner le tutoriel d'installation/Hello World avec activation des erreurs (`display_errors`, console dev, mode debug).
   - Positionner le tutoriel de démarrage rapide (Quickstart) sur bac à sable isolé (`demo.php`).
3. **Étape 3 : Contrôle de Granularité des UAs :**
   - S'assurer que le plan ne mobilise qu'une seule UA du domaine principal (hors sas de démarrage).
   - Si plusieurs UAs se bousculent, arbitrer pour scinder la progression ou reporter sur la session suivante.
4. **Étape 4 : Découpage Incrémental en Chaîne Sans Rupture :**
   - Découper la transformation de `dossier-depart/` en étapes successives indépendantes.
   - Vérifier pour chaque étape que $E_{n-1}$ fournit rigoureusement 100% des prérequis de $E_n$.
5. **Étape 5 : Rédaction des Fiches Techniques Détaillées :**
   - Remplir le plan selon [gabarit-plan-session.md](resources/gabarit-plan-session.md).
   - Pour chaque tutoriel, rédiger obligatoirement :
     - Le titre technique H3 et le sous-titre logique.
     - Ce que l'apprenant doit apprendre (notions, syntaxe, fonctions).
     - La description technique de la manipulation sur le code du projet.
     - Les fichiers impactés.
     - Les extraits de code représentatifs de départ ($E_{n-1}$) et d'arrivée ($E_n$).
     - Le micro-livrable vérifiable.
6. **Étape 6 : Articulation des 3 Projets :**
   - Décrire comment le cumul des tutoriels forme le Projet d'imitation, et expliciter les passerelles vers le Prototype et le Fil Rouge.

---

### Parcours B : Audit & Refonte d'un Plan Existant
1. **Étape 1 : Diagnostic des Ruptures Cognitives :**
   - Parcourir les tutoriels planifiés dans l'ordre chronologique.
   - Identifier tout prérequis manquant (environnement, debug, notions syntaxiques non introduites).
2. **Étape 2 : Audit de Précision Technique :**
   - Vérifier si les tutoriels contiennent de vraies descriptions techniques actionnables ou de simples puces vagues.
   - Compléter les fiches avec les 6 rubriques techniques obligatoires.
3. **Étape 3 : Diagnostic de Surcharge Cognitive (Audit des UAs) :**
   - Compter les UAs d'un même domaine au sein de la session. Si > 1, isoler ce qui relève du démarrage et ce qui doit être reporté.
4. **Étape 4 : Audit du Titrage :**
   - Remplacer les titres académiques par des titres techniques concrets avec sous-titres logiques.
5. **Étape 5 : Restructuration Chirurgicale du Plan :**
   - Réécrire le fichier `plan-developpement.md` selon le gabarit normé enrichi.

---

## 6. Format de Sortie & Livrables

Tout plan produit est un fichier Markdown conforme à [gabarit-plan-session.md](resources/gabarit-plan-session.md) sous :  
`_plan-réalisation-tutos/S[X]/plan-developpement.md`

Chaque fiche de tutoriel comporte impérativement :
```text
### T.[Code] — [Titre Technique Concret]
*Objectif logique : [Titre Logique / Pédagogique]*

- 1. Ce que l'apprenant doit apprendre (Notions, syntaxe, fonctions)
- 2. Description technique de la réalisation (Actions concrètes sur le code)
- 3. Fichiers impactés (Issus de dossier-depart/)
- 4. État de départ (E_n-1 avec extrait de code)
- 5. État d'arrivée (E_n avec extrait de code)
- 6. Livrable vérifiable & Fichier cible dans code-a-apprendre/
```

---

## 7. Contrôle Qualité (Checklist Binaire)

- [ ] Le point de départ (`dossier-depart/`) et le point d'arrivée (`code-a-apprendre/`) sont-ils clairement identifiés ?
- [ ] Tout nouvel outil ou langage intègre-t-il obligatoirement son étape Hello World (installation/vérification) ?
- [ ] La configuration de l'affichage des erreurs fait-elle l'objet d'une manipulation explicite dès le premier tutoriel ?
- [ ] Une étape Démarrage Rapide (Quickstart) sur un fichier isolé précède-t-elle le livrable du projet d'imitation ?
- [ ] Chaque tutoriel porte-t-il obligatoirement un **titre technique concret** en H3 et un **sous-titre logique** ?
- [ ] Chaque fiche de tutoriel contient-elle la description technique complète et ce que l'on doit apprendre ?
- [ ] Chaque fiche indique-t-elle les fichiers impactés, ainsi que les extraits de code $E_{n-1}$ et $E_n$ ?
- [ ] La session respecte-t-elle la règle de **1 seule UA par domaine** (hors exception sas de démarrage) ?
- [ ] L'état de départ ($E_{n-1}$) correspond-il exactement à la sortie du tutoriel précédent (zéro trou) ?
- [ ] Le plan détaille-t-il l'articulation vers les 3 projets (Imitation, Prototype, Fil Rouge) ?
- [ ] Le fichier est-il encodé en **UTF-8 sans BOM** ?
- [ ] Le plan permet-il à `tutorial-writer` de rédiger directement le support sans avoir à concevoir la technique ?

---

## 8. Exemple Concret (Fiche Technique Type pour S4)

### T.123.14.1 — Boucler sur `$articles` avec `foreach` et sécuriser avec `htmlspecialchars`
*Objectif logique : Répéter un traitement d'affichage dynamique sécurisé*

- **1. Ce que l'apprenant doit apprendre :**
  - **Notions :** Répétition d'affichage dynamique, prévention des injections XSS.
  - **Syntaxe & Fonctions :** Boucle `foreach ($articles as $article) : ... endforeach;`, fonction de sécurisation `htmlspecialchars()`.
  - **Bonnes pratiques :** Ne jamais injecter directement une chaîne issue des données sans échappement HTML.

- **2. Description technique de la réalisation :**
  - Dans `index-template.php`, localiser les 3 cartes d'articles HTML statiques héritées de `dossier-depart/public-index.html`.
  - Conserver une seule carte comme gabarit et envelopper cette carte dans la boucle PHP alternative `foreach ($articles as $article) : ... endforeach;`.
  - Remplacer les valeurs figées (titre, résumé, date, image) par les variables dynamiques correspondantes échappées avec `htmlspecialchars($article['titre'])`.

- **3. Fichiers impactés :**
  - `index-template.php` (modification du template HTML).

- **4. État de départ ($E_{n-1}$) :**
  ```html
  <!-- 3 cartes HTML dupliquées et statiques -->
  <article class="carte-article">
      <h2>Titre figé 1</h2>
      <p>Contenu figé 1...</p>
  </article>
  <article class="carte-article">
      <h2>Titre figé 2</h2>
      <p>Contenu figé 2...</p>
  </article>
  ```

- **5. État d'arrivée ($E_n$) :**
  ```php
  <!-- Une seule carte enveloppée dans foreach -->
  <?php foreach ($articles as $article) : ?>
      <article class="carte-article">
          <h2><?= htmlspecialchars($article['titre']); ?></h2>
          <p><?= htmlspecialchars($article['contenu']); ?></p>
      </article>
  <?php endforeach; ?>
  ```

- **6. Livrable vérifiable :**
  - La page `index.php` exécutée sur le serveur local affiche dynamiquement l'intégralité des articles déclarés dans le tableau `$articles`.
  - **Fichier cible dans `code-a-apprendre/` :** `index-template.php`.
