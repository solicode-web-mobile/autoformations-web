# Règles Didactiques par Domaine de Compétence

> **Document de référence local — Connaissances Pédagogiques Transverses**  
> **Composant :** Recyclage synthétique des micro-skills `domaine-*` (HTML, CSS, JS, PHP, SQL, Git, Test, Veille)

---

## 1. Domaine HTML (Structure & Sémantique Pures)
- **Apprentissage du HTML pur (Aucun CSS) :** Dans les tutoriels HTML, la propriété `data_css` doit rester vide (`data_css: ""`). L'apprenant doit assimiler la structure sémantique sans artifice visuel.
- **Exécutabilité :** Configurer obligatoirement le script `window.pageData` pour l'éditeur interactif.

## 2. Domaine CSS (Mise en Page & Design)
- **Isolation du CSS d'exercice :** Tout le code HTML de structure et le CSS de préparation (couleurs de conteneurs, polices) sont embarqués dans `data_html` (balise `<style>`). Le champ `data_css` reste vierge pour l'exercice de l'apprenant.
- **Progression N1 :** Sélecteurs de base $\rightarrow$ Modèle de boîte $\rightarrow$ Flexbox $\rightarrow$ Grid $\rightarrow$ Responsive simple.

## 3. Domaine JavaScript (Interactivité & Manipulation DOM)
- **Isolation :** HTML et CSS de départ dans `data_html` et `data_css`. Fonctions utilitaires dans une balise `<script>` dans `data_html`. `data_js` dédié aux manipulations de l'apprenant.
- **Pédagogie N1 :** Sélection d'éléments (`querySelector`), écouteurs d'événements (`addEventListener`), modification du contenu/classes, et affichage dans la console.

## 4. Domaine PHP & PHP/SQL (Logique Serveur & Persistance)
- **PHP Procédural Simple N1 :** Syntaxe claire, formulaires GET/POST, validation de données avec fonctions natives.
- **PDO Sécurisé :** Toujours enseigner l'utilisation de requêtes préparées avec PDO pour la persistance des données. Interdiction de concaténation de variables dans les requêtes SQL.

## 5. Domaine SQL (Bases de Données Relationnelles)
- **Mots-clés en Majuscules :** `SELECT`, `FROM`, `WHERE`, `JOIN`, `ORDER BY`, `GROUP BY`.
- **Jeu d'Essai Fourni :** Tout tutoriel SQL doit fournir les scripts `CREATE TABLE` et `INSERT INTO` afin que l'apprenant puisse exécuter immédiatement la requête.
- **Résultat Attendu :** Présenter sous chaque requête le tableau Markdown du résultat retourné par le SGBD.

## 6. Domaine Git & Collaboration
- **Pratique CLI :** Privilégier les commandes en ligne de commande (`git init`, `add`, `commit`, `branch`, `push`, `pull`).
- **Livrable :** Fichier Markdown récapitulatif des commandes tapées, commité dans le dépôt GitHub.
- **Schémas :** Utiliser des diagrammes Mermaid pour illustrer les 3 zones de Git (Working Directory, Staging Area, Repository).

## 7. Domaine Test & Vérification Fonctionnelle
- **Fiche de Test Tabulaire Obligatoire :**
  | N° Étape | Action utilisateur | Données saisies | Résultat attendu | Résultat obtenu | Statut (OK / KO) |
  | :---: | :--- | :--- | :--- | :--- | :---: |
- **Pédagogie :** Ne jamais se limiter au chemin heureux (*happy path*). Inclure les cas limites, erreurs de saisie, et tests de non-régression.

## 8. Domaine Veille Technologique & Culture Numérique
- **Vulgarisation & Analogies du Quotidien :** Définir chaque terme (DNS, IP, HTTP, Client/Serveur) par une métaphore concrète.
- **Schémas de Flux :** Intégrer systématiquement un diagramme Mermaid pour les flux réseau ou architectures.
- **Livrable :** Fiche de synthèse (1 page Markdown) ou support de présentation partagé, sans code lourd.
