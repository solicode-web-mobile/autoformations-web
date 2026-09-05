# Skill — Rédaction de tutoriel

## 1. Objectif

Produire un **tutoriel technique N1** simple, guidé et directement réalisable.

Le tutoriel existe en **3 versions** :

* **Compact** : essentiel.
* **Normal** : réalisation complète et version de référence.
* **Détaillé** : mêmes contenus et mêmes étapes, avec plus d’explications.

Les trois versions sont **strictement cohérentes** : mêmes données, notions, objectif, réalisation, livrable et étapes.

## 2. Données de référence

S’appuyer sur les données validées : **Session, Sprint, UA, prérequis, notions, réalisation, livrable, Projet** si nécessaire.

Ne jamais modifier, fusionner, supprimer ou renommer une donnée validée.

Respecter :

**Compétence → Domaine → UA → Sprint → Session → Projet**

## 3. Principe N1

Privilégier :

**Je vois → Je comprends → Je reproduis**

La pratique suit les besoins de l’activité : **comprendre, reproduire, tester**, puis réaliser l’action d’évaluation ou de restitution prévue par **Active LMS**.

Cette action peut être une **présentation, un live coding ou une autre modalité définie par l’application**.

Ne jamais imposer une modalité non prévue.

## 4. Template obligatoire

Utiliser exactement le template suivant pour les trois versions :

```markdown
---
title: "[Titre]"
layout: tuto
slug: "[slug]"
permalink: /tutos/:slug/[version]
tuto_id: "[Code tutoriel]"
version: "[compact|normal|detaille]"
ua: "[Code UA]"
nav_order: [ordre]
---

## 1. Objectif

[Objectif en 1–2 phrases.]

## 2. Prérequis

[Prérequis très courts.]

# Partie 1 — Théorie

## 1.1. [Notion]

[Définition + exemple.]

## 1.2. [Notion]

[Définition + exemple.]

## 1.3. À retenir

- [Idée essentielle]
- [Idée essentielle]

# Partie 2 — Pratique

## 2.1. [Action]

### Étape 1 — [Action]

[Consigne.]

### Étape 2 — [Action]

[Consigne.]

## 2.2. [Action]

### Étape 3 — [Action]

[Consigne + code si nécessaire.]

### Étape 4 — [Action]

[Consigne.]

**Résultat attendu :**

[Résultat observable.]

# 3. Bilan

**Vous avez réalisé :**

[Résumé.]

**Vous savez maintenant :**

- [Capacité]
- [Capacité]

# 4. Glossaire

- **Terme** : définition simple.
```

Le template doit être conservé. Ne pas ajouter de sections sans nécessité pédagogique.

## 5. Versions

### Compact

Contient uniquement l’essentiel :

**notion → exemple → action → résultat**

Texte court, consignes directes, explications minimales.

### Normal

Version de référence.

Contient tout ce qui est nécessaire pour réaliser l’activité :

**explication → exemple → étapes → code → résultat**

### Détaillé

Reprend **exactement la même structure et les mêmes étapes** que la version normale.

Elle développe seulement les explications utiles :

* pourquoi ;
* comment ;
* points importants ;
* erreurs fréquentes ;
* exemples complémentaires.

**Interdiction d’ajouter une étape, une activité, une réalisation, un livrable ou une notion avancée.**

## 6. Théorie

Pour chaque notion :

**Définition → Exemple → À retenir**

La théorie doit être courte et directement utile à la pratique.

**Compact** : essentiel.
**Normal** : nécessaire à la réalisation.
**Détaillé** : compréhension approfondie.

## 7. Pratique

La pratique est :

**progressive → guidée → exécutable → adaptée au N1**

Une étape = **une action principale**.

Utiliser des verbes d’action :

**Créer, Ajouter, Modifier, Ouvrir, Lancer, Tester, Vérifier, Partager…**

Pour le code :

**Fichier → Action → Code → Explication → Résultat**

La version détaillée peut expliquer davantage une étape, mais ne doit pas la découper.

## 8. Résultat et évaluation

Le résultat attendu doit être **observable, concret et vérifiable** lorsque nécessaire.

La modalité de restitution ou d’évaluation dépend de l’activité définie par **Active LMS** : présentation, live coding ou autre modalité prévue.

Ne jamais inventer cette modalité.

## 9. Cohérence

Contrôler :

**Prérequis → Notions → Étapes → Réalisation → Livrable**

Et entre les versions :

**Même données → mêmes notions → mêmes étapes → même réalisation → même livrable → même objectif**

Aucune version ne doit modifier le parcours.

## 10. N1 et français

N1 :

**Observation → Compréhension → Imitation → Reproduction**

Privilégier le simple, limiter la créativité et éviter les notions avancées inutiles.

Français **A1–A2**, préférence A1 :

**phrases courtes, mots simples, une idée par phrase, verbes d’action, consignes directes.**

La version détaillée peut être plus longue, mais reste simple.

## 11. Glossaire

Prévoir un glossaire lorsque plusieurs termes techniques nouveaux sont utilisés.

Format :

```text
- **Terme** : définition simple.
```

## 12. Exemples

Utiliser des exemples neutres.

Ne pas utiliser **« Spartel Dev Academy »** sauf demande explicite.

## 13. Contrôle final

Vérifier :

**UA, prérequis, notions, structure, étapes, réalisation, livrable, résultat, glossaire, français et cohérence des trois versions.**

Contrôle spécifique :

**Compact = essentiel**
**Normal = réalisation complète**
**Détaillé = mêmes étapes + plus d’explications**

## 14. Règle fondamentale

> **Les trois versions sont trois niveaux de lecture d’un même tutoriel. Le texte évolue, mais l’apprentissage, les étapes, la réalisation, le livrable et l’objectif restent identiques.**
