# Domaine Débogage & Résolution d'Anomalies (`domaine-debug`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Méthodologie d'investigation, analyse d'erreurs, DevTools, logs.

---

## 1. Démarche Méthodique en 5 Étapes

$$\text{1. Reproduire} \longrightarrow \text{2. Observer} \longrightarrow \text{3. Localiser} \longrightarrow \text{4. Corriger} \longrightarrow \text{5. Vérifier}$$

1. **Reproduire le bug :** Déterminer la séquence exacte d'actions qui déclenche l'anomalie.
2. **Observer le message :** Lire attentivement le message d'erreur, le code HTTP ou le comportement inattendu.
3. **Localiser l'origine :** Identifier le fichier précis et la ligne incriminée (stack trace, console DevTools).
4. **Corriger :** Modifier uniquement la portion de code défaillante sans effets de bord.
5. **Vérifier :** Rejouer le scénario initial pour s'assurer que le bug a disparu et qu'aucune régression n'est introduite.

---

## 2. Pédagogie de l'Erreur
- Afficher le message d'erreur réel dans le tutoriel (bloc textuel ou capture de console).
- Expliquer l'anatomie d'une erreur type :
  - *Type de l'erreur* (ex: `ReferenceError`, `Parse error`, `PDOException`).
  - *Fichier & Numéro de ligne*.
  - *Cause la plus fréquente*.

---

## 3. Livrable : Fiche d'Incident
Livrable Markdown structuré contenant :
- Contexte du bug.
- Message d'erreur observé.
- Cause racine identifiée.
- Diff Avant / Après de la correction.
