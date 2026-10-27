# Gabarit Normé — Unité d'Apprentissage (UA)

Ce gabarit définit la structure obligatoire pour tout fichier d'Unité d'Apprentissage stocké dans `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md`.

---

```markdown
---
title: "[Titre Logique de l'UA : Verbe à l'infinitif + Notion]"
layout: ua
code: "UA.[Code_Domaine].[Numéro_UA]"
competence: "C.[Code_Compétence]"
domaine: "D.[Code_Domaine]"
ordre: [Numéro d'ordre dans le domaine, ex: 1, 2, 3]
duree: [Durée indicative en heures, ex: 1 ou 2]

objectif: >
  [Objectif d'apprentissage concret et vérifiable de l'UA].

description: >
  [Description concise du rôle didactique de l'UA, des compétences mobilisées, 
  et de la transformation opérée sur le projet].

notions:
  - "[Notion technique clé 1]"
  - "[Notion technique clé 2]"
  - "[Fonction, mot-clé ou directive 3]"
  - "[Règle ou bonne pratique 4]"

livrable: >
  [Description précise du code source ou du fichier physique tapé par l'apprenant. 
  Zéro justification verbale ou constat visuel sans code].

travail_a_faire: >
  [Consignes claires et directes des actions techniques à réaliser par l'apprenant].
---
```

## Règles de Rédaction d'une UA :
1. **Emplacement :** Obligatoirement dans le sous-dossier de son domaine `_uas/[D.XXX.Y.mini-code]/UA.XXX.YY.md`.
2. **Encodage :** Strict UTF-8 sans BOM.
3. **Format du Titre :** Verbe à l'infinitif décrivant l'action technique sans mentionner les entités métier du projet (ex: *Bien démarrer avec PHP*, *Construire une page Web dynamique avec PHP*).
4. **Livrable :** Toujours formulé comme un fichier de code source ou un journal `commandes.md`.
