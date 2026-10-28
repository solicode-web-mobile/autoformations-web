# Guide d'Utilisation du Skill : tutorial-writer

## 1. Présentation & Rôle
`tutorial-writer` est l'**artisan pédagogique universel** chargé de concevoir et rédiger les guides d'apprentissage techniques pas-à-pas (tutoriels) pour les apprenants débutants (Niveau N1 Solicode).

Tout tutoriel produit est **directement et nativement simplifié dès sa conception** : sans surcharge cognitive, visuel d'abord, théorie courte (3 à 4 H3 max), et pratique ultra-ciblée. Il applique en permanence le cycle de pédagogie active :
$$\text{Comprendre} \longrightarrow \text{Reproduire} \longrightarrow \text{Expérimenter} \longrightarrow \text{Réaliser} \longrightarrow \text{Réutiliser}$$

---

## 2. Cas d'Usage Principaux
- **Quand utiliser ce skill :**
  - Rédaction d'une **série progressive de tutoriels** à partir d'un plan de session validé (`plan-developpement.md`) et du code cible.
  - Rédaction d'un **tutoriel unitaire autonome** (apprentissage isolé d'une notion avec son micro-livrable).
  - Modernisation ou allègement d'un tutoriel existant trop verbeux ou dense pour le niveau N1 débutant.
  - Création ou mise à jour des démonstrateurs interactifs associés sous `/code/`.
- **Quand NE PAS utiliser ce skill :**
  - Cadrage technique, découpage incrémental ou création d'UAs ➔ Utiliser `tutorial-planer`.
  - Développement de layouts ou styles Jekyll ➔ Utiliser `dev-jekyll`.
  - Synchronisation du socle partagé ➔ Utiliser `sync-theme`.
  - Gouvernance globale des compétences ➔ Utiliser `plugin-dev`.

---

## 3. Prompts Types d'Invocation

```markdown
# Rédaction d'un tutoriel planifié
@[.agents/skills/tutorial-writer/SKILL.md] Rédige le tutoriel T.123.151 défini dans _plan-réalisation-tutos/S5/plan-developpement.md en suivant le gabarit canonique.
```

```markdown
# Rédaction d'un tutoriel unitaire autonome
@[.agents/skills/tutorial-writer/SKILL.md] Rédige un tutoriel unitaire simplifié pour apprendre à styliser un bouton animé en CSS Flexbox (Niveau N1 Débutant).
```

```markdown
# Simplification d'un tutoriel existant trop complexe
@[_tutos/D.122.2/T.122.22.md] @[.agents/skills/tutorial-writer/SKILL.md] Réduis la théorie à 3 H3 max, supprime les métaphores abstraites et formule les consignes à l'impératif direct.
```

---

## 4. Prérequis & Données d'Entrée
- **Fiches didactiques de domaine (Chargement OBLIGATOIRE avant toute rédaction) :**
  - `resources/domaines-pedagogiques.md` (index des 17 domaines).
  - Fiche modulaire du domaine concerné dans `resources/` (ex: `resources/domaine-php-sql.md`, `resources/domaine-css.md`, `resources/domaine-algo.md`).
- **Plan de cadrage :**
  - Fiche technique du tutoriel issue de `_plan-réalisation-tutos/S[X]/plan-developpement.md`.
- **Règles applicables :**
  - `.agents/rules/pedagogie-spartel.md` (Français A1-A2, impératif direct, glossaire obligatoire d'une ligne pour chaque terme technique introduit).
  - `.agents/rules/standards-techniques.md` (Strict UTF-8 sans BOM, insertion du script `window.pageData` sous le frontmatter si éditeur interactif, livrable physique de code).

---

## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
1. **Étape 1 — Cadrage & Chargement du Domaine :** Identifie le domaine technique et charge obligatoirement la fiche `resources/domaine-[code].md` associée.
2. **Étape 2 — Structuration du Front Matter & Layout :** Renseigne `layout: tuto`, l'UA, la compétence, le domaine, la session, et insère `window.pageData` si interactif.
3. **Étape 3 — Rédaction de la Théorie Simplifiée :** Développe une théorie illustrée très concise structurée en **3 à 4 H3 maximum**, avec schémas ou extraits courts.
4. **Étape 4 — Définition du Glossaire :** Insère un glossaire concis donnant une définition simple d'une ligne pour chaque nouveau terme technique.
5. **Étape 5 — Rédaction de la Pratique Guidée :** Formule des consignes séquentielles à l'impératif direct (*« Ouvrez »*, *« Ajoutez »*, *« Testez »*) guidant pas-à-pas l'apprenant.
6. **Étape 6 — Clôture & Livrable :** Précise l'emplacement exact du fichier produit dans le projet local et la commande de vérification.

---

## 6. Livrables Produits & Méthode de Vérification
- **Livrables attendus :**
  - Fichier Markdown normé : `_tutos/[Domaine]/[UA]/[Code-Tuto]/[slug-tuto].md`.
- **Comment vérifier le résultat :**
  - [x] La fiche didactique du domaine a bien été consultée.
  - [x] La théorie ne dépasse pas 4 H3.
  - [x] Toutes les consignes sont formulées à l'impératif direct.
  - [x] Chaque nouveau terme technique possède sa définition d'une ligne dans le glossaire.
  - [x] Le livrable est un fichier physique de code (aucune capture d'écran requise comme livrable).
  - [x] Le fichier est encodé en UTF-8 sans BOM.

---

## 7. Pièges Fréquents & Bonnes Pratiques
| Piège Fréquent | Risque | Bonne Pratique |
| :--- | :--- | :--- |
| Rédiger sans charger la fiche du domaine | Violations des contraintes didactiques propres au domaine | Charger obligatoirement `resources/domaine-[code].md` dès la première étape |
| Rédiger une théorie académique trop longue | Décrochage de l'apprenant N1 | Limiter strictement la théorie à 3 ou 4 H3 très visuels |
| Multiplier les exercices dans la pratique | Surcharge cognitive inutile | Un seul cas d'application direct suffit pour valider la compréhension |
| Demander une capture d'écran comme livrable | Violation de la règle des livrables | Le livrable doit toujours être le code source tapé ou un journal `commandes.md` |
