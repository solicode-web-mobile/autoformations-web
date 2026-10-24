---
name: domaine-test
description: >-
  Expert en règles de rédaction pour les tutoriels de vérification fonctionnelle et tests manuels (test).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié aux scénarios de test, fiches de vérification, tests de non-régression ou contrôle qualité.
---

# Règles de rédaction - Domaine Test & Vérification

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de la vérification et de la validation fonctionnelle d'une solution web (domaine D.131.1).

## 1. La Fiche de Vérification Structurée (Règle d'or)

Les tests ne se font pas au hasard. Tout tutoriel de test doit obligatoirement structurer les vérifications sous forme de **Fiche de Test** rigoureuse, présentée sous la forme d'un tableau Markdown standardisé :

| N° Étape | Action utilisateur | Données saisies | Résultat attendu | Résultat obtenu | Statut (OK / KO) |
| :---: | :--- | :--- | :--- | :--- | :---: |
| 1 | Ouvrir la page de connexion | - | Le formulaire s'affiche avec 2 champs et un bouton | Conforme | OK |
| 2 | Cliquer sur "Connexion" sans saisir d'identifiants | Champs vides | Un message d'erreur rouge "Champs obligatoires" apparaît | Conforme | OK |
| 3 | Saisir un mot de passe incorrect | Email: `test@test.fr` / Mdp: `faux` | Message "Identifiants invalides" | Conforme | OK |

* **Consignes sans ambiguïté** : Chaque action doit être unitaire, concrète et vérifiable.
* **Données de test explicites** : Fournir les valeurs exactes à taper lors du test (adresses emails, identifiants, textes).

## 2. Démarche Pédagogique de Vérification N1

Au niveau débutant (N1), le domaine se concentre sur les **vérifications manuelles et méthodiques** :
* **Tests aux limites et cas d'erreur** : Ne jamais tester uniquement le "chemin heureux" (happy path). Montrer comment tester les erreurs de saisie, les champs trop longs, les caractères spéciaux et les cas limites.
* **Le Test de Non-Régression** :
  - Expliquer le danger d'introduire un bug en ajoutant une nouvelle fonctionnalité.
  - Procédure : rejouer une fiche de test validée lors d'une session antérieure (ex: tester le CRUD article de la S9 après avoir ajouté le moteur de recherche en S11).
  - Présenter les fiches comparatives "Avant / Après".
* **Signalement d'anomalie** : Apprendre à qualifier une anomalie constatée (KO) : comment reproduire, capture d'écran, écart entre attendu et obtenu.

## 3. Livrables Attendus

* **Fiche de vérification remplie** : Document au format Markdown ou tableau complété par l'apprenant suite à l'exécution réelle du scénario sur son propre projet web.
* **Rapport de non-régression** : Fiche attestant que les anciennes fonctionnalités continuent de fonctionner à 100% après ajout de code nouveau.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel de test, vérifiez systématiquement :
> "Le scénario de test comporte-t-il des étapes numérotées claires et séquentielles ?"
> "Les données de test exactes sont-elles fournies ?"
> "Le résultat attendu est-il formulé de manière vérifiable sans ambiguïté ?"
> "La fiche prévoit-elle des colonnes pour le résultat obtenu et le statut OK/KO ?"
