# Domaine Analyse des Besoins (`domaine-analyse`)

> **Ressource Didactique — Solicode**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Expression des besoins, cas d'utilisation, personas, scénarios utilisateurs.

---

## 1. Cas d'Étude Concret Obligatoire
Tout tutoriel d'analyse s'ancre obligatoirement sur un cas d'étude narratif et réaliste (ex: plateforme e-commerce, gestion de bibliothèque, application de covoiturage, blog de recettes).

---

## 2. Outils Visuels et Structuration
- **Tableaux Markdown :** Structurer systématiquement les acteurs, rôles et objectifs :
  ```markdown
  | Acteur | Rôle dans l'application | Objectif principal |
  | :--- | :--- | :--- |
  | Visiteur | Consulter des articles | Découvrir du contenu |
  | Auteur | Rédiger des publications | Partager son expertise |
  ```
- **Diagrammes Mermaid :** Pour les flux fonctionnels ou les arbres d'objectifs (User Journeys) :
  ```mermaid
  flowchart LR
    A[Visiteur] --> B[Parcourir le catalogue]
    B --> C[Ajouter au panier]
    C --> D[Valider la commande]
  ```

---

## 3. Livrables & Délimitation
- **Livrables :** Fichiers Markdown structurés (`user-stories.md`, `besoins.md`) commités dans GitHub.
- **Périmètre :** Aucun code source (HTML, CSS, JS, SQL) n'est exigé dans les tutoriels d'analyse.
