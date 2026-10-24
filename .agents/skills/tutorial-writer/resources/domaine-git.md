# Domaine Git & Gestion de Versions (`domaine-git`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Gestion de versions, ligne de commande Git, dépôts GitHub.

---

## 1. Pratique en Ligne de Commande
- Privilégier les commandes fondamentales du terminal plutôt que les interfaces graphiques :
  `git init`, `git status`, `git add`, `git commit -m "..."`, `git branch`, `git push`, `git pull`.
- Chaque commande doit être explicitée avec son rôle exact et le retour attendu du terminal.

---

## 2. Format du Livrable
- Le livrable est un fichier `.md` (ex: `commandes-git.md`) consignant la suite exacte de commandes exécutées et leur justification, commité sur le dépôt GitHub.
- **Interdiction formelle de captures d'écran** du terminal comme livrable.

---

## 3. Schémas Visuels des Zones Git
Utiliser un diagramme Mermaid pour modéliser le déplacement des fichiers entre les 3 zones locales et le dépôt distant :

```mermaid
flowchart LR
    A[Working Directory\n(Fichiers modifiés)] -- git add --> B[Staging Area\n(Index préparé)]
    B -- git commit --> C[Local Repository\n(Historique local)]
    C -- git push --> D[Remote Repository\n(GitHub)]
```
