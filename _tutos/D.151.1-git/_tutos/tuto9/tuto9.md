# Tuto 9 : Les règles de sécurité avant de valider un commit

## 1. Description du tutoriel
* **Objectif pédagogique :** Adopter le réflexe de vérifier ce que l'on envoie (ne jamais envoyer de mot de passe) grâce à `git status` et `git diff` avant de valider.
* **Unité d'Apprentissage :** UA.115.14 - Sécuriser son projet et ignorer l'inutile
* **Session :** Session 7

## 2. Résultat final attendu (Ce que l'apprenant fera)
Avant chaque `git add`, l'apprenant fera la routine de contrôle :

```bash
git status
git diff
```

## 3. Consigne spécifique de rédaction
* **Montrer le danger :** Affichez une capture de `git diff` où un faux mot de passe est visible en vert (ajouté). Dites clairement à l'apprenant que si ce mot de passe est envoyé, le monde entier (ou les autres formateurs) le verra.
