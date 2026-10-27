# Gabarit Normé — Fiche de Domaine de Compétence

Ce gabarit définit la structure obligatoire pour tout fichier de Domaine Jekyll stocké dans `_domaines/D.XXX.Y.[mini-code].md`.

---

```markdown
---
title: "[Intitulé officiel de la compétence métier du domaine]"
layout: domaines
code: "D.[Code_Domaine]"
mini-code: "[slug-technique, ex: php, sql, architecture, git]"
competence: "C.[Code_Compétence_Parente]"
ordre: [Numéro d'ordre d'affichage]
capacite_finale: >
  [Description synthétique de la capacité opérationnelle finale développée par l'apprenant 
  à travers l'ensemble des UAs de ce domaine].
---
```

## Règles de Conception d'une Fiche de Domaine :
1. **Emplacement :** `_domaines/D.XXX.Y.[mini-code].md`.
2. **Encodage :** Strict UTF-8 sans BOM.
3. **Mini-code :** Doit correspondre au slug utilisé dans l'arborescence des dossiers d'UAs (`_uas/D.XXX.Y.[mini-code]/`) et dans les métadonnées.
4. **Capacité finale :** Énoncée sous forme de compétences professionnelles observables en situation de développement.
