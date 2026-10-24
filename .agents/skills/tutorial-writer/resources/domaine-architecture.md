# Domaine Architecture Applicative (`domaine-architecture`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Structuration de projet, séparation des préoccupations (SoC), arborescences.

---

## 1. Séparation des Préoccupations (SoC)
- Enseigner *pourquoi* on sépare les fichiers (responsabilité unique, maintenabilité, collaboration) et non pas seulement *comment*.
- Toujours illustrer par un comparatif concret « Avant / Après » :
  - *Avant :* Code monolithique plat (HTML, CSS, logique PHP et SQL dans un seul fichier).
  - *Après :* Code modulaire et structuré par dossiers et responsabilités (`assets/`, `includes/`, `config/`).

---

## 2. Visualisation Normée de l'Arborescence
Présenter systématiquement l'arborescence du projet sous forme de bloc textuel indenté clair :

```text
mon-projet/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── includes/
│   ├── header.php
│   └── footer.php
└── index.php
```

---

## 3. Règle Absolue sur les Livrables
L'apprenant ne crée jamais un nouveau dépôt par tutoriel. Il dépose son travail dans **un sous-dossier spécifique** au sein de son dépôt global de projets (ex: dossier `T.125.111/`).
