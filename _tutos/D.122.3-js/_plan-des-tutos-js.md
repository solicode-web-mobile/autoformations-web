# Plan des Tutoriels - Domaine JavaScript (Intégration Web N1)

Ce document centralise l'ensemble des tutoriels pour le domaine JavaScript appliqué au Web, répartis par Session et par Unité d'Apprentissage (UA).
*Note : Ce parcours suppose que les bases algorithmiques (variables, conditions, boucles, fonctions) sont déjà acquises via l'autoformation Algorithmique (Node.js).*

## Session 7 (S7)

### UA.122.31 - Écrire un script JavaScript simple
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.311 | Relier JS et HTML | Inclure un fichier JavaScript dans une page Web | Balise `<script>` fonctionnelle |
| T.122.312 | La console et le mode strict | Vérifier l'exécution et utiliser `console.log()` | Messages affichés dans l'outil de développement |
| T.122.313 | Cibler un ID simple | Cibler un élément unique par son ID | Sélection simple via `document.getElementById()` |
| T.122.314 | Modifier un texte simple | Modifier le texte d'un élément sélectionné | Modification via `textContent` ou `innerHTML` |
| T.122.315 | Tutoriel de Synthèse S7 | Créer un script autonome relié au Blog | Page HTML avec un texte mis à jour automatiquement par JS |

## Session 8 (S8)

### UA.122.32 - Sélectionner et manipuler le DOM
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.321 | Sélectionner avec `querySelector` | Cibler des éléments via des sélecteurs CSS (classes, balises) | Élément unique sélectionné |
| T.122.322 | Sélectionner plusieurs éléments | Utiliser `querySelectorAll` et itérer sur la NodeList | Modification en lot d'éléments (ex: liste) |
| T.122.323 | Modifier les classes CSS | Utiliser `classList` (`add`, `remove`, `toggle`) | Élément changeant d'aspect visuel via JS |
| T.122.324 | Lire et modifier les attributs | Récupérer et changer des valeurs (ex: `value`, `src`, `href`) | Valeur d'un champ d'entrée modifiée |
| T.122.325 | Tutoriel de Synthèse S8 | Modifier l'interface d'administration des catégories | Page d'admin modifiée dynamiquement (classes et valeurs) |

## Session 9 (S9)

### UA.122.33 - Gérer les événements utilisateur
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.331 | Écouter un événement simple | Ajouter un `addEventListener` (click) sur un bouton | Bouton réagissant au clic |
| T.122.332 | Séparer la logique des événements | Associer une fonction nommée à un événement | Code modulaire pour les actions |
| T.122.333 | Récupérer des informations sur l'événement | Utiliser l'objet `event` (ex: `event.target`) | Identification de l'élément cliqué |
| T.122.334 | Écouter d'autres événements | Utiliser `change`, `input` ou `mouseenter` | Champ texte réagissant à la saisie |
| T.122.335 | Tutoriel de Synthèse S9 | Gérer les interactions de la page articles | Boutons d'actions et filtres réactifs |

## Session 10 (S10)

### UA.122.34 - Contrôler les données saisies côté navigateur
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.341 | Intercepter la soumission | Utiliser `event.preventDefault()` sur un `<form>` | Formulaire dont l'envoi est bloqué par défaut |
| T.122.342 | Récupérer les données saisies | Lire les valeurs `.value` des champs lors de la soumission | Données extraites prêtes à être analysées |
| T.122.343 | Vérifier des conditions simples | Valider la présence de texte ou de format (longueur) | Logique de validation activée |
| T.122.344 | Afficher des messages d'erreur | Injecter des textes d'erreurs et des classes visuelles (rouge) | Interface indiquant clairement les erreurs |
| T.122.345 | Tutoriel de Synthèse S10 | Valider le formulaire de connexion (`admin-login.html`) | Formulaire de login sécurisé côté client |

## Session 11 (S11)

### UA.122.35 - Modifier dynamiquement l’interface
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.351 | Masquer / Afficher un élément | Changer dynamiquement le `display` ou ajouter une classe `.hidden` | Zone d'interface qui s'ouvre/se ferme |
| T.122.352 | Créer des éléments DOM | Utiliser `document.createElement()` | Nouvel élément HTML généré en mémoire |
| T.122.353 | Insérer des éléments | Utiliser `appendChild()` ou `insertAdjacentHTML()` | Nouvel élément ajouté visiblement dans la page |
| T.122.354 | Supprimer des éléments | Utiliser `remove()` | Suppression dynamique d'un message ou élément |

### UA.122.36 - Combiner les interactions JavaScript
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.361 | Lier saisie et filtrage | Filtrer dynamiquement un tableau HTML à la frappe | Tableau réagissant instantanément |
| T.122.362 | Combiner critères multiples | Utiliser une barre de recherche ET une liste déroulante | Recherche avancée purement front-end |
| T.122.363 | Gérer l'état "Aucun résultat" | Afficher un message de fallback si tout est masqué | Message conditionnel intégré |
| T.122.364 | Tutoriel de Synthèse S11 | Moteur de recherche d'articles de l'administration | Interface de recherche complète et interactive |
