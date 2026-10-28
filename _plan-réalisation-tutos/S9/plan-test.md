# Plan d'Apprentissage — Progression Vérifier une Solution (Tests Manuels & Recette)

**Compétence visée :** Vérifier une solution logicielle (D.131.1, test)  
**Niveau ciblé :** N1 (Débutant)  
**Outils :** Navigateur Web, DevTools, Cahier de recette manuel en Markdown / Tableur  

---

## 1. Présentation de la Compétence & Approche Pédagogique N1

Tester une application Web est une compétence fondamentale du développeur professionnel.  
Au niveau débutant (N1), l'objectif n'est pas d'écrire des tests unitaires automatisés complexes, mais d'acquérir la rigueur méthodique de la **vérification manuelle par scénarios d'usage** et le contrôle systématique de la **non-régression**.

* **Principe pédagogique :** Scénario d'usage → Données de test → Exécution pas-à-pas → Comparaison (Attendu vs Obtenu) → Rapport d'anomalie.
* **Vocabulaire technique clé :** Scénario de test, prérequis, résultat attendu, résultat obtenu, régression, anomalie (bug), cahier de recette.

---

## 2. Progression Globale des Unités d'Apprentissage du Domaine

Le tableau ci-dessous indique l'articulation de la compétence tout au long de la formation :

| Session | Unité Mobilisée | Intitulé de l'Unité | Activité Concrète d'Apprentissage |
| :--- | :--- | :--- | :--- |
| **S1 à S8** | *(Sensibilisation)* | Auto-vérification visuelle | Contrôle visuel simple dans le navigateur à chaque étape. |
| **S9** | **UA.131.11** | **Réaliser une vérification manuelle** | Écrire et dérouler un plan de test manuel complet pour le CRUD des articles (création, affichage, modification, suppression). |
| **S10** | **UA.131.11** *(réemploi)* | Test du contrôle d'accès | Tester les cas passants et non-passants de la page de connexion (`admin/auth/login.php`). |
| **S11** | **UA.131.12** | **Vérifier une régression** | Rejouer les scénarios passés après l'ajout de la recherche textuelle pour s'assurer que la création d'articles fonctionne toujours. |
| **S12** | **UA.131.11 & 12** | Recette finale et soutenance | Dérouler la grille de recette complète de l'application avant la présentation finale devant le jury. |

---

## 3. Fiches de Conception Détaillées des Unités du Domaine

### UA.131.11 — Réaliser une vérification manuelle (Mobilisée en Session S9 & S10)
* **Objectif d'apprentissage :** Exécuter un scénario de test pas-à-pas et déterminer avec objectivité si le comportement obtenu correspond exactement au comportement attendu.
* **Structure d'un cas de test manuel N1 :**
  1. **Titre du test :** Action testée (ex: *Création d'un article avec titre vide*).
  2. **Prérequis :** Être connecté à la base de données, être sur la page du formulaire.
  3. **Actions de l'utilisateur :** Laisser le champ titre vide, saisir un contenu, cliquer sur "Enregistrer".
  4. **Résultat attendu :** Le formulaire bloque l'enregistrement, un message rouge *"Veuillez remplir tous les champs obligatoires"* s'affiche, aucun enregistrement n'est créé dans la table MySQL.
  5. **Résultat obtenu :** Conforme / Non-conforme (avec capture d'écran ou description si échec).
* **Consigne pour l'apprenant :**
  - Remplir le tableau de test pour les 4 parcours CRUD du module articles (Création réussie, Création incomplète, Modification de titre, Suppression confirmée).
* **Critère de réussite :** Chaque cas de test a un verdict clair (Succès / Échec) documenté.

---

### UA.131.12 — Vérifier une régression (Mobilisée en Session S11)
* **Objectif d'apprentissage :** Réexécuter un scénario de test déjà validé après une modification de code et vérifier que les fonctionnalités existantes continuent de fonctionner sans anomalie.
* **Pourquoi tester la non-régression ?**  
  Lorsqu'un développeur modifie une requête SQL pour ajouter un filtre de recherche, il risque de casser l'affichage général ou le formulaire d'ajout. Tester la non-régression garantit la stabilité du projet.
* **Consigne pour l'apprenant :**
  1. Après avoir modifié `admin/articles/liste.php` pour ajouter la recherche par mot-clé, rejouer le scénario d'ajout d'article créé en S9.
  2. Vérifier que l'article nouvellement créé apparaît bien dans la liste générale.
  3. Noter le statut de non-régression dans le rapport de test.
* **Critère de réussite :** L'ajout d'une nouvelle fonctionnalité n'a provoqué aucun bug sur les fonctionnalités antérieures.

---

## 4. Grille d'Évaluation N1 (Vérifier une solution)

| Critère d'évaluation | Indicateur de réussite N1 |
| :--- | :--- |
| **Méthode** | Suit pas-à-pas les étapes d'un scénario de test sans improviser. |
| **Précision** | Compare rigoureusement le résultat obtenu avec le résultat attendu. |
| **Rigueur** | Identifie et documente une anomalie avec clarté (étapes pour reproduire l'erreur). |
| **Non-régression** | Rejoue les scénarios critiques après toute modification de code importante. |
