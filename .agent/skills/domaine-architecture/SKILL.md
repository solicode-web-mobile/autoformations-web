---
name: domaine-architecture
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine Architecture (architecture web, séparation des préoccupations, MVC).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à la structuration d'un projet web.
---

# Règles de rédaction - Domaine Architecture

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de l'architecture logicielle et web (comme les tutoriels liés au domaine D.125.1).

## 1. Mettre en évidence la structure des dossiers

L'architecture d'un projet repose avant tout sur son arborescence de fichiers. **Chaque tutoriel d'architecture doit systématiquement illustrer la structure du projet** (avant et après modification) en utilisant des blocs de code au format `text` représentant un arbre de fichiers.

**Exemple de structure claire :**
```text
mon-projet/
├── index.php         # Contrôleur frontal
├── css/
│   └── style.css     # Fichier de style isolé
├── src/
│   └── Database.php  # Traitement logique
└── views/
    └── accueil.php   # Affichage pur (HTML)
```
Veillez à toujours ajouter de petits commentaires (`# ...`) à côté des fichiers pour expliquer leur rôle architectural.

## 2. Règle d'or : La Séparation des Préoccupations (SoC)

Le cœur de ce domaine est la **Séparation des Préoccupations** (Séparer HTML, CSS, JS, et PHP Traitement vs Affichage).
*   Ne montrez jamais un code final où le CSS est dans `<style>` ou le JS dans `<script>` sans expliquer explicitement que c'est une "mauvaise pratique" temporaire.
*   En PHP, insistez lourdement sur la séparation entre la logique (requêtes BDD, validation) et l'affichage (HTML). Le fichier de vue ne doit contenir que des `echo` ou des boucles d'affichage.

## 3. Livrables Attendus (Dépôts GitHub exclusifs)

Contrairement au domaine algorithmique où le livrable est un seul fichier `.js`, **les livrables en architecture doivent impérativement exiger un projet complet structuré hébergé sur GitHub**.
Ne demandez jamais un simple extrait de code ou un fichier `.zip` en livrable final. 

**Règle absolue sur les dépôts :** Ne demandez jamais à l'apprenant de créer un "nouveau" dépôt pour chaque tutoriel. L'apprenant possède un dépôt global pour ses livrables. Demandez-lui systématiquement de créer **un dossier spécifique au tutoriel** (par exemple `T.125.111/`) à l'intérieur de ce dépôt global et de fournir le lien vers ce dossier précis.

Le critère de réussite principal du livrable doit toujours être : *"Les fichiers sont-ils correctement séparés et placés dans le bon dossier sur le dépôt distant ?"*

## 4. Les exemples "Avant / Après"

L'architecture s'apprend souvent par le refactoring (amélioration d'un code existant).
Utilisez fréquemment le format comparatif :
1.  **Le code "Plat" (Problème)** : Un seul fichier monolithique (difficile à maintenir).
2.  **L'architecture (Solution)** : Le code découpé en plusieurs fichiers responsables chacun d'une tâche précise.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel d'architecture, vous devez toujours vous poser ces questions :
> "L'apprenant comprend-il *pourquoi* on sépare ces fichiers et pas seulement *comment* le faire ?"
> "L'arborescence du projet est-elle clairement visualisable ?"
> "Le livrable force-t-il l'apprenant à organiser lui-même un dossier complet ?"
