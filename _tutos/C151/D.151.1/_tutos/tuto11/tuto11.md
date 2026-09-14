# Tuto 11 : Réparer une erreur avant la sauvegarde avec `git restore`

## 1. Description du tutoriel
* **Objectif pédagogique :** Effacer complètement les modifications locales d'un fichier qui ne fonctionne plus, pour revenir à la version saine et sécurisée du dernier commit.
* **Unité d'Apprentissage :** UA.115.15 - Explorer l'historique et annuler des erreurs simples
* **Session :** Session 9

## 2. Résultat final attendu (Ce que l'apprenant fera)
L'apprenant tapera la commande suivante pour effacer ses changements :

```bash
git restore mon_fichier.php
```

## 3. Consigne spécifique de rédaction
* **Avertissement de destruction :** Utilisez une alerte rouge (ou équivalent) pour prévenir que `git restore` supprime définitivement le travail non sauvegardé. "Attention : Cette commande efface tout ce que vous avez écrit depuis votre dernier commit. C'est magique pour réparer une erreur, mais dangereux si vous vouliez garder votre code."
