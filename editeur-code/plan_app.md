# Plan de Développement et Architecture de l'Application

Ce document détaille l'architecture et le plan de développement par sprints pour le module de Live Coding In-Browser, en respectant les principes de la pédagogie active et du "100% client-side".

## 1. Architecture de l'Application

L'architecture est pensée pour être modulaire, facile à maintenir et sans dépendance serveur, suivant la philosophie "Ligne Claire".

### Principes Architecturaux
- **100% Client-Side :** Aucune dépendance à un backend. Le code est exécuté localement dans le navigateur.
- **Séparation des Préoccupations :**
  - **Données :** Code initial injecté au chargement (via variables JS, objets JSON externes ou attributs HTML).
  - **Édition :** Gérée par `Monaco Editor`.
  - **Exécution :** Gérée par un `iframe` pour le Web (HTML/CSS/JS) et `@php-wasm/web` pour PHP.
  - **Interface et État :** Gérés par `Alpine.js` pour une réactivité simple et déclarative.
  - **Style :** Géré par `Tailwind CSS`.

### Structure des Fichiers (Déploiement Statique)
```text
/
├── index.html                  # Point d'entrée, contenant l'UI HTML
├── /assets/
│   ├── /css/
│   │   └── tailwind.css        # Styles compilés (Tailwind)
│   └── /js/
│       ├── /components/        # Logique des composants UI (Alpine.js x-data)
│       │   ├── tabs.js         # Logique du système d'onglets
│       │   └── editor-ui.js    # Logique des états de l'interface
│       ├── app.js              # Initialisation d'Alpine.js et import des modules
│       ├── editor-init.js      # Chargement et configuration de Monaco Editor
│       └── php-runner.js       # Chargement du WebAssembly PHP et logique d'exécution
└── /exercices/                 # Dossier contenant les données des exercices (fichiers JSON ou JS)
```

---

## 2. Plan de Développement par Sprints

Le développement est découpé en 5 sprints itératifs pour assurer une validation continue.

### Sprint 1 : Fondation et Interface Utilisateur (UI/UX)
**Objectif :** Mettre en place la structure de base, le style et la navigation par onglets.
- [ ] Initialiser le projet avec un fichier `index.html` basique.
- [ ] Intégrer Tailwind CSS via CDN (pour le dev) ou configuration de build locale.
- [ ] Construire le Layout principal (En-tête, Zone Éditeur 50%, Zone Rendu/Console 50%) selon le style "Ligne Claire" (thème sombre pour l'éditeur, couleurs accentuées).
- [ ] Intégrer Alpine.js.
- [ ] Créer le système d'onglets (HTML | CSS | JS | PHP) avec Alpine.js (`x-data`, `x-show`).

### Sprint 2 : Intégration du Moteur d'Édition (Monaco)
**Objectif :** Avoir un éditeur de code fonctionnel avec coloration syntaxique.
- [ ] Charger Monaco Editor via CDN (RequireJS).
- [ ] Créer le script `editor-init.js` pour instancier l'éditeur.
- [ ] Configurer l'éditeur : thème `vs-dark`, `automaticLayout: true` (pour le responsive).
- [ ] Mettre en place le changement de langage (HTML, CSS, JS, PHP) dynamique lors du changement d'onglet (via l'API Monaco).
- [ ] Ajouter la possibilité de charger du code initial dans l'éditeur.

### Sprint 3 : Flux Front-end (Live Preview Web)
**Objectif :** Permettre le rendu en temps réel du code HTML, CSS et JS.
- [ ] Ajouter un `iframe` sandboxé dans la zone de rendu (visible quand les onglets HTML/CSS/JS sont actifs).
- [ ] Écouter l'événement `onDidChangeModelContent` de Monaco.
- [ ] Récupérer et concaténer le contenu des "fichiers" virtuels HTML, CSS et JS.
- [ ] Injecter le résultat dans l'iframe via `document.write()` ou `srcdoc`.
- [ ] Vérifier la fluidité et les performances de la mise à jour en direct.

### Sprint 4 : Flux Back-end (Exécution PHP via WASM)
**Objectif :** Exécuter du code PHP dans le navigateur.
- [ ] Intégrer le module `@php-wasm/web`.
- [ ] Créer le script `php-runner.js` pour gérer l'instanciation asynchrone de `PhpWeb`.
- [ ] Gérer l'état de chargement dans l'UI avec Alpine.js (bouton "Exécuter" désactivé pendant le téléchargement du `.wasm`).
- [ ] Câbler le bouton "Exécuter" : récupérer le code PHP de l'éditeur et appeler `php.run()`.
- [ ] Intercepter la sortie standard (stdout) et les erreurs, et les afficher dans une balise `<pre>` simulant une console (visible quand l'onglet PHP est actif).

### Sprint 5 : Finalisation, Modularité et Tests
**Objectif :** Rendre le composant intégrable, robuste et finaliser l'UX.
- [ ] Refactoriser le code JS pour assurer une séparation stricte (données, édition, exécution, UI).
- [ ] Implémenter le bouton "Réinitialiser" pour remettre le code à son état initial.
- [ ] Gérer les erreurs explicites (ex: erreur de syntaxe PHP).
- [ ] Effectuer des tests de bout en bout (chargement, édition, exécution web, exécution PHP, responsive).
- [ ] Documenter les instructions d'intégration (comment l'embarquer dans un LMS ou Jekyll avec du code injecté).
