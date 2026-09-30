# Plan détaillé des tutoriels : Vérifier une solution (Test)

Ce document présente le découpage de la formation en tutoriels pratiques, basés sur les Unités d'Apprentissage (UA) des tests et vérifications fonctionnelles.

## Tableau récapitulatif

| Session | Identifiant | Titre | Objectif | Livrable |
| :--- | :--- | :--- | :--- | :--- |
| **S9** | **T.131.11.1** | Réaliser une vérification manuelle | Exécuter un scénario de test et vérifier le résultat. | Fiche de vérification remplie (OK/KO). |
| **S11** | **T.131.12.1** | Vérifier une régression | Refaire un ancien test pour s'assurer que les nouveautés n'ont rien cassé. | Fiche de régression (Avant/Après). |

---

## Détail des tutoriels

### UA.131.11 - Réaliser une vérification manuelle

#### T.131.11.1 - Réaliser une vérification manuelle
*   **Objectif :** Exécuter méthodiquement un scénario simple pour statuer si une fonctionnalité fonctionne ou non.
*   **Description :** L'apprenant reçoit une fiche de test vierge. Il réalise les actions demandées, observe le comportement, le compare avec le résultat attendu, et donne le statut final (OK/KO). Il apprend à ne pas tester au hasard.
*   **Notions abordées :** Vérification, scénario, action, donnée de test, résultat attendu, résultat obtenu, statut, anomalie.
*   **Livrable attendu :** Une fiche de vérification complétée pour le scénario.
*   **Application au projet (S9) :** Le tutoriel porte spécifiquement sur le test des **opérations de création, d’affichage, de modification et de suppression d’un article**. L'apprenant remplit sa fiche en testant concrètement son propre formulaire d'administration finalisé lors de la S9.

---

### UA.131.12 - Vérifier une régression

#### T.131.12.1 - Vérifier une régression
*   **Objectif :** Prendre conscience qu'ajouter du code peut introduire des bugs sur l'existant.
*   **Description :** L'apprenant reprend sa fiche de test validée en S9 et rejoue exactement les mêmes actions, sans rien changer au scénario, pour valider que le statut est toujours "OK". Si un "OK" passe à "KO", il aura détecté une régression.
*   **Notions abordées :** Modification, fonctionnalité existante, réexécution, régression, avant/après, comparaison.
*   **Livrable attendu :** Fiche de vérification de régression indiquant l'état "Avant" et l'état "Après", avec une conclusion claire.
*   **Application au projet (S11) :** L'apprenant vient d'ajouter **la recherche, le filtrage et les interactions JavaScript (livrables de la S11)**. Il re-teste son CRUD d'articles de la S9 pour prouver que ses nouveautés JS et recherche n'ont pas cassé l'affichage ou l'ajout classique des articles.
