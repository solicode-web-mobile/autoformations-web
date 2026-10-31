# Plan de Réalisation — Gestion de Projet et Suivi du Travail (Session S2 & Vue Globale)

**Domaine de compétence :** Organiser et rendre visible son travail (`D.152.2`)  
**Session de première mobilisation :** S2 — Page de détail d’un article — V1 statique  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S2 (première session mobilisant la gestion de travail). Il formalise la méthodologie générale et l'ensemble des tutoriels de gestion pour **les 12 sessions de la formation**. Dans les sessions suivantes (S3, S5, S6, S7, S8, S9, S10), l'apprenant réalisera l'Unité d'Apprentissage prévue à son sprint à partir de ce document unique de référence.

---

## 1. Méthodologie Pédagogique de la Gestion en Niveau N1

Un développeur professionnel ne se contente pas d'écrire du code : il sait planifier ses actions, suivre son temps et communiquer avec clarté :
* **Démarche active en 4 réflexes essentiels :**
  1. *Comprendre avant de coder :* Quel est le résultat précis attendu ?
  2. *Découper l'effort :* Une grande tâche complexe se transforme en plusieurs petites étapes faciles.
  3. *Mesurer le temps :* Estimer à l'avance et comparer avec la réalité pour progresser.
  4. *Communiquer régulièrement :* Signaler immédiatement un blocage et résumer ce qui a été produit.

---

## 2. Articulation Temporelle par Session (S2 à S12)

### ⏮️ Acquis Passés (Session S1)
- Découverte du métier de développeur, de l'importance du travail méthodique et de la posture d'écoute active (Veille prospective `UA.161.11`).

### 🎯 Unité d'Apprentissage Mobilisée dans ce Sprint (Session S2)
- **UA.152.21 — Comprendre une tâche et son résultat attendu :**  
  Analyser une consigne technique, identifier les livrables concrets, repérer les contraintes et formaliser une fiche de tâche avant de commencer à coder.

### ⏭️ Perspectives Futures (Sessions S3 à S12)
- **S3 (UA.152.22) :** Estimer et organiser son temps en heures de travail.
- **S5 (UA.152.13) :** Découper et ordonner son travail en sous-tâches simples.
- **S6 (UA.152.14) :** Rendre l'état de son travail visible avec un tableau Kanban (*À faire / En cours / Terminé*).
- **S7 (UA.152.15) :** Suivre son avancement en comparant le temps estimé et le temps réel.
- **S8 (UA.152.16) :** Identifier et formuler un blocage technique avec une demande d'aide structurée.
- **S9 (UA.152.17) :** Rendre compte synthétiquement de sa contribution quotidienne.
- **S10 (UA.152.18) :** Maintenir un suivi exploitable et régulier sur la durée du projet.

---

## 3. Grille Complète des Tutoriels de Gestion (S2 à S10)

| Identifiant | Session | Titre du tutoriel | Unité ciblée | Livrable attendu |
| :--- | :---: | :--- | :---: | :--- |
| **T.152.211** | **S2** | Analyser une consigne et identifier les critères d'acceptation | UA.152.21 | Liste des critères de réussite validée. |
| **T.152.212** | **S2** | Rédiger une fiche de tâche synthétique | UA.152.21 | Fiche de tâche complétée pour la page article. |
| **T.152.221** | **S3** | Estimer le temps nécessaire pour une tâche d'intégration | UA.152.22 | Tableau prévisionnel d'heures par composant. |
| **T.152.131** | **S5** | Découper un sprint en sous-tâches indépendantes | UA.152.13 | Découpage séquentiel d'une page PHP en 4 étapes. |
| **T.152.141** | **S6** | Mettre en place et actualiser un tableau Kanban simple | UA.152.14 | Tableau Kanban physique ou numérique à jour. |
| **T.152.151** | **S7** | Mesurer l'écart entre temps estimé et temps réel | UA.152.15 | Bilan d'analyse des écarts de temps constatés. |
| **T.152.161** | **S8** | Structurer une demande d'aide face à un blocage | UA.152.16 | Message SOS rédigé selon la méthode 3 étapes. |
| **T.152.171** | **S9** | Préparer un compte-rendu d'avancement pour son tuteur | UA.152.17 | Message de reporting quotidien structuré. |
| **T.152.181** | **S10** | Réaliser la revue finale du suivi de projet | UA.152.18 | Synthèse globale de l'avancement du projet. |

---

## 4. Fiches Détaillées des Tutoriels Mobilisés en Session S2

### T.152.211 — Analyser une consigne et identifier les critères d'acceptation
- **Objectif :** Savoir lire une consigne technique et repérer exactement les conditions nécessaires pour considérer la tâche comme réussie.
- **Notions :** Périmètre technique, résultat observable, critères d'acceptation (*Acceptance Criteria*).
- **Consigne pas-à-pas :**
  1. Lire attentivement la consigne de réalisation de la page article (Session S2).
  2. Répondre par écrit aux 3 questions de cadrage :
     - *Que doit voir l'utilisateur quand il ouvre la page ?*
     - *Quels sont les fichiers obligatoires à produire ?*
     - *Quelles sont les contraintes techniques imposées (HTML5 pur, CSS séparé) ?*
  3. Établir une liste à puces de 5 critères de réussite mesurables.
- **Résultat attendu :** Une checklist claire qui servira à valider le travail à la fin du sprint.

---

### T.152.212 — Rédiger une fiche de tâche synthétique
- **Objectif :** Formaliser sur un support court (fiche markdown ou carnet de bord) les éléments clés de sa mission avant de coder.
- **Notions :** Fiche de tâche (*Task Sheet*), intitulé précis, livrables, temps alloué.
- **Consigne pas-à-pas :**
  1. Créer une note simple intitulée `tache-s2-detail-article.md`.
  2. Renseigner les 4 sections standard :
     - **Titre de la tâche :** Intégration statique de la page article.
     - **Livrables attendus :** `public-article.html`, `css/style.css`.
     - **Vérifications à faire :** Affichage correct de l'en-tête, de l'image et du texte dans le navigateur.
     - **Statut initial :** *À faire*.
  3. Partager la fiche avec son formateur ou son binôme.
- **Résultat attendu :** Un document court d'une page guidant l'action de l'apprenant tout au long du développement.
