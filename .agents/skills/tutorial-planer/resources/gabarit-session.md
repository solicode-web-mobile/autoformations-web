# Gabarit Normé — Fiche de Session

Ce gabarit définit la structure obligatoire pour tout fichier de Session Jekyll stocké dans `_sessions/S[X].md`.

---

```markdown
---
title: "S[X] — [Titre Logique de la Session]"
tuto_title: "[Titre Pédagogique décrivant la transformation applicative majeure]"

layout: session
code: "S[X]"

date_debut: ""
date_fin: ""
titre_csv: "[Titre court pour export ou reporting]"

objectif: >
  [Objectif général de la session : décrire la compétence acquise et la transformation 
  du projet applicatif à partir du dossier de départ].

description: >
  [Description détaillée du périmètre technique de la session, des notions introduites, 
  de l'organisation du code et des limitations explicites (ex: pas de base de données à ce stade)].

uas:
  - "UA.[Code_UA_1]"
  - "UA.[Code_UA_2]"
  - "UA.[Code_UA_3]"

prototype:
  - "Prototype [X]"

projet_fil_rouge:
  - "Sprint [X]"

nav_order: [X]
---
```

## Règles de Conception d'une Fiche de Session :
1. **Emplacement :** `_sessions/S[X].md`.
2. **Encodage :** Strict UTF-8 sans BOM.
3. **Tableau `uas:` :** Doit contenir la liste **exacte** des UAs actives de la session.
   - Par défaut : 1 UA par domaine mobilisé.
   - Exception : 2 UAs pour un domaine dont la technologie démarre dans la session (ex: `UA.123.11` et `UA.123.12` en S4).
4. **Cohérence du Titre :** Le `code` ("S4") et le `nav_order` (4) doivent correspondre au numéro séquentiel de la session.
