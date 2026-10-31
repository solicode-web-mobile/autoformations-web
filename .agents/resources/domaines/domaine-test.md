# Domaine Test & Vérification (`domaine-test`)

> **Ressource Didactique — Solicode**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Plans de test manuels, cas limites, non-régression, validation recette.

---

## 1. Fiche de Test Tabulaire Obligatoire
Tout exercice de test doit employer la structure tabulaire normée :

| N° Étape | Action utilisateur | Données saisies | Résultat attendu | Résultat obtenu | Statut (OK / KO) |
| :---: | :--- | :--- | :--- | :--- | :---: |
| 1 | Soumettre le formulaire vide | *(Aucune)* | Message « Champ obligatoire » | Message affiché | OK |
| 2 | Saisir un email invalide | `alice@` | Message « Format invalide » | Erreur 500 | KO |

---

## 2. Démarche Pédagogique N1
- **Cas nominaux :** Tester avec des données ordinaires et valides.
- **Cas aux limites :** Tester avec des chaînes très longues, des valeurs négatives, des champs vides.
- **Tests de non-régression :** Rejouer une fiche de test antérieure après chaque nouvelle fonctionnalité ajoutée.
