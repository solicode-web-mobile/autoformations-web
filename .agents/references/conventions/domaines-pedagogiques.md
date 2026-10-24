# Guide Didactique Exhaustif des 17 Domaines de Compétence

> **Document de référence normatif — Connaissances Pédagogiques Transverses**  
> **Composant :** Recyclage exhaustif des 17 micro-skills `domaine-*` d'`old_agent` pour la plateforme *Autoformations Web Solicode*.

---

## 1. Domaine Pédagogie Active (`domaine-active`)
- **Posture :** L'apprenant est l'acteur principal de sa formation. L'agent guide sans faire à sa place.
- **Cycle d'Apprentissage :**
  $$\text{Comprendre} \longrightarrow \text{Reproduire} \longrightarrow \text{Expérimenter} \longrightarrow \text{Expliquer}$$
- **Typologie des Activités :**
  - *Tutoriels :* Découverte guidée et reproduction pas-à-pas.
  - *Labs :* Recherche autonome face à une problématique inédite.
  - *Prototypes :* Mini-projets d'application pour consolider une notion isolée.
  - *Projet Fil Rouge :* Application transverse développée par Sprints successifs.
- **Livrables :** Journal de bord, restitution par les pairs (Live Coding), plan d'autonomie.

---

## 2. Domaine Algorithmique (`domaine-algo`)
- **Règle d'or absolue (Code Exécutable) :** Chaque bloc d'exemple doit pouvoir être copié-collé et exécuté immédiatement dans l'éditeur interactif sans aucune modification.
  - Déclarer systématiquement toutes les variables (`let` ou `const`).
  - Inclure obligatoirement une instruction de sortie (`console.log(...)`).
  - Bloc strictement autonome (aucune dépendance cachée).
- **Format du Livrable :** Fichier **`.js` pur** (aucun rendu Markdown ou traitement de texte). Les explications de l'apprenant doivent être écrites en commentaires (`//` ou `/* */`).
- **Visualisation des Tableaux :** Ne jamais dessiner de tableaux en texte brut ou en Mermaid. Utiliser obligatoirement le composant Liquid natif :
  ```liquid
  {% include array-svg.html
     name="notes"
     title="Tableau de notes"
     values="12,15,8,17"
     highlight="1"
  %}
  ```

---

## 3. Domaine Analyse des Besoins (`domaine-analyse`)
- **Cas d'Étude Concret Obligatoire :** Tout tutoriel d'analyse s'ancre sur un cas d'étude narratif réaliste (ex: plateforme e-commerce, bibliothèque, covoiturage).
- **Supports Visuels :**
  - Tableaux Markdown pour catégoriser (ex: `Acteur | Rôle | Objectif`).
  - Diagrammes Mermaid pour les flux fonctionnels ou mindmaps.
- **Livrables :** Documents structurés (Markdown ou texte). Aucun code source n'est exigé dans ce domaine.

---

## 4. Domaine Architecture Applicative (`domaine-architecture`)
- **Séparation des Préoccupations (SoC) :** Enseigner *pourquoi* on sépare les fichiers (responsabilité unique) et non pas seulement *comment*.
- **Visualisation de l'Arborescence :** Présenter systématiquement l'arborescence du projet sous forme de bloc textuel indenté.
- **Exemples "Avant / Après" :** Illustrer le code monolithique "plat" (difficile à maintenir) face au code modulaire et structuré.
- **Règle Absolue sur les Livrables :** L'apprenant ne crée jamais un nouveau dépôt par tutoriel. Il dépose son travail dans **un dossier spécifique** au sein de son dépôt global (ex: dossier `T.125.111/`).

---

## 5. Domaine Conception de Données (`domaine-conception`)
- **Cas d'Étude & Données Réelles :** Les entités et attributs doivent provenir d'une maquette ou d'un formulaire concret.
- **Dictionnaire de Données :** Tableau Markdown normé (`Donnée | Type | Description | Entité`).
- **Diagrammes ER Mermaid :** Utiliser la syntaxe `erDiagram` avec les cardinalités exactes (ex: `||--o{`).
- **Périmètre Strict :** Aucun code SQL dans les tutoriels de conception (le SQL relève du domaine base de données).

---

## 6. Domaine CSS & Mise en Page (`domaine-css`)
- **Isolation de Préparation :** Le HTML de structure et le CSS décoratif (couleurs, bordures) sont placés dans une balise `<style>` à l'intérieur de `data_html`.
- **Espace de Travail Apprenant :** Le champ `data_css` reste vierge (ou minimal) pour que l'apprenant écrive son CSS sans polluer le contexte.
- **Progression N1 :** Sélecteurs $\rightarrow$ Modèle de boîte $\rightarrow$ Flexbox $\rightarrow$ Grid $\rightarrow$ Responsive design.

---

## 7. Domaine Débogage & Résolution d'Anomalies (`domaine-debug`)
- **Démarche Méthodique en 5 Étapes :**
  $$\text{1. Reproduire} \longrightarrow \text{2. Observer} \longrightarrow \text{3. Localiser} \longrightarrow \text{4. Corriger} \longrightarrow \text{5. Vérifier}$$
- **Pédagogie de l'Erreur :** Afficher le message d'erreur réel (capture ou bloc textuel avec stack trace). Expliquer l'anatomie du message (type d'erreur, fichier, ligne).
- **Outils :** Console et onglet Sources des DevTools (breakpoints, step-over), traces PHP (`var_dump`, Xdebug), et requêtes brutes sous phpMyAdmin.
- **Livrable :** Fiche d'incident / rapport d'enquête (contexte, cause racine, diff Avant/Après, résultat vérifié).

---

## 8. Domaine Déploiement & Environnement Local (`domaine-deploy`)
- **Règle d'or :** Distinguer impérativement le fichier ouvert en double-clic (`file:///C:/...`) du fichier servi par un serveur HTTP.
  - Statique : `http://127.0.0.1:5500` (Live Server).
  - Dynamique : `http://localhost/mon-projet` (Laragon / Apache / phpMyAdmin).
- **Bannissement des Chemins Absolus :** Interdiction formelle de chemins locaux codés en dur (`C:\laragon\...`). Exiger des chemins relatifs (`./assets/...`, `../includes/...`).
- **Base de Données Locale :** Détailler pas-à-pas l'import d'un `dump.sql` via phpMyAdmin et la configuration des identifiants (`localhost`, `root`, mot de passe vide).

---

## 9. Domaine Gestion Personnelle du Travail (`domaine-gestion`)
- **Cadrage Systématique :** Toute tâche commence par définir : (1) Objectif, (2) Périmètre (inclus vs exclu), (3) Critères de réussite observables.
- **Découpage & Estimation :** Décomposer en sous-tâches de 30 min à 1h. Comparer durée estimée vs temps réel.
- **Tableau Kanban N1 :** Maintenir à jour les colonnes *À faire* | *En cours* | *Terminé*. Règle : une seule tâche technique "En cours" à la fois.
- **Protocole SOS en 4 Points :** Modèle imposé pour demander de l'aide sans blocage prolongé :
  1. *Ce que je souhaite accomplir.*
  2. *Ce qui se produit actuellement (comportement ou erreur).*
  3. *Ce que j'ai déjà essayé.*
  4. *Le point précis où je suis bloqué.*

---

## 10. Domaine Git & Gestion de Versions (`domaine-git`)
- **Pratique en Ligne de Commande :** Privilégier les commandes fondamentales du terminal (`init`, `add`, `commit`, `branch`, `push`, `pull`).
- **Livrable :** Fichier `.md` récapitulant les commandes saisies avec leurs arguments, commité dans le dépôt GitHub.
- **Schémas Visuels :** Utiliser des diagrammes Mermaid pour expliquer les 3 zones (Working Directory, Staging Area, Local Repository) et les branches distantes.

---

## 11. Domaine HTML & Sémantique (`domaine-html`)
- **HTML Pur Sans CSS :** La propriété `data_css` doit rester strictement vide (`data_css: ""`). L'apprenant doit observer le rendu brut du navigateur.
- **Script Éditeur Obligatoire :** Injection systématique de `window.pageData` sous le Front Matter pour assurer l'exécutabilité immédiate.

---

## 12. Domaine JavaScript & DOM (`domaine-js`)
- **Isolation :** HTML et CSS de départ dans `data_html` et `data_css`. Fonctions utilitaires dans une balise `<script>` dans `data_html`. `data_js` dédié aux manipulations de l'apprenant.
- **Pédagogie N1 :** Sélection d'éléments (`querySelector`), écouteurs d'événements (`addEventListener`), manipulation de classes (`classList.add/toggle`), et console.

---

## 13. Domaine PHP Procédural (`domaine-php`)
- **Syntaxe Simple N1 :** Variables, boucles, conditions, fonctions natives.
- **Traitement de Formulaires :** Formulaires HTML avec méthode GET ou POST, récupération via `$_GET` et `$_POST`, vérification avec `isset()` et `empty()`.
- **Validation & Nettoyage :** Enseigner la validation basique et la protection XSS via `htmlspecialchars()`.

---

## 14. Domaine PHP & Base de Données (`domaine-php-sql`)
- **PDO Sécurisé Obligatoire :** Connexion via PDO avec gestion des exceptions (`PDOException`).
- **Interdiction de Concaténation :** Les requêtes SQL contenant des variables utilisateur doivent obligatoirement utiliser des requêtes préparées (`$pdo->prepare()` puis `$stmt->execute()`). Zéro concaténation de variables dans les chaînes SQL.

---

## 15. Domaine SQL (`domaine-sql`)
- **Syntaxe Normée :** Tous les mots-clés SQL sont écrits en **MAJUSCULES** (`SELECT`, `FROM`, `WHERE`, `JOIN`, `ON`, `GROUP BY`, `ORDER BY`).
- **Jeu d'Essai Fourni :** Tout tutoriel SQL doit fournir les requêtes `CREATE TABLE` et `INSERT INTO` afin que l'apprenant teste sur des données concrètes.
- **Résultat Attendu Tabulaire :** Présenter sous chaque requête le tableau Markdown du résultat renvoyé par la base de données.

---

## 16. Domaine Test & Vérification (`domaine-test`)
- **Fiche de Test Tabulaire Obligatoire :**
  | N° Étape | Action utilisateur | Données saisies | Résultat attendu | Résultat obtenu | Statut (OK / KO) |
  | :---: | :--- | :--- | :--- | :--- | :---: |
- **Pédagogie N1 :** Tests aux limites, valeurs aberrantes, et tests de non-régression (rejouer une fiche de test antérieure après ajout de nouvelles fonctionnalités).

---

## 17. Domaine Veille Technologique & Culture Numérique (`domaine-veille-tech`)
- **Vulgarisation & Analogies :** Définir chaque terme technique avec une analogie issue de la vie courante (DNS = annuaire téléphonique, IP = adresse postale, Client/Serveur = client et serveur au restaurant).
- **Supports Visuels Systématiques :** Tout concept abstrait doit être accompagné d'un diagramme Mermaid de flux.
- **Livrables :** Synthèse d'une page Markdown, quiz d'auto-évaluation ou support de présentation partagé, sans implémentation de code lourd.
