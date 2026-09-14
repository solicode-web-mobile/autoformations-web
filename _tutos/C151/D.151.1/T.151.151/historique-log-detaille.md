---
title: "Lire l'historique du projet avec git log"
layout: tuto
slug: "historique-log"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.151"
type: "classique"
version: "detaille"
ua: "UA.151.15"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Consulter l'historique d'un projet Git, comprendre l'utilité du "Hash", et maîtriser les différents affichages du journal.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir au moins un commit dans l'historique.

## Partie 1 — Théorie

### 1.1. Le journal indélébile

Git est conçu comme une blockchain : chaque commit est lié au précédent, formant une chaîne ininterrompue d'événements.

L'historique permet de voir exactement l'évolution du projet, étape par étape.

Pour chaque maillon de la chaîne (commit), Git enregistre quatre informations vitales :

* **Auteur** : son nom et son email.
* **Date** : la date exacte du commit.
* **Message** : l'intention du développeur.
* **Hash** : une signature cryptographique.

### 1.2. Le Hash, l'empreinte digitale

L'identifiant d'un commit ressemble à une série absurde de chiffres et de lettres (par exemple : `a1b2c3d4e5f6...`).

Ce n'est pas aléatoire. C'est un code mathématique (le Hash) généré à partir du contenu des fichiers.

Il garantit que le commit est unique au monde. Si une seule virgule d'un fichier changeait, ce code deviendrait complètement différent.

### 1.3. La gestion de l'affichage (Le Pager)

La commande pour afficher ce journal est `git log`.

Cependant, un projet de plusieurs années peut contenir des milliers de commits.

Pour ne pas faire "exploser" votre écran, Git utilise un petit programme appelé un "pager".

Il affiche l'historique page par page.

* Utilisez les flèches du clavier pour descendre.
* Appuyez sur la touche `q` (pour Quit) afin de forcer la fermeture du programme et retrouver le contrôle du terminal.

### 1.4. L'option pour aller à l'essentiel

Quand on cherche un commit, la vue détaillée est souvent trop lourde.

L'option `--oneline` est le meilleur ami du développeur.

Elle compresse l'historique en n'affichant que les 7 premiers caractères du Hash (c'est suffisant pour l'identifier) et le message du commit.

### 1.5. À retenir

* `git log` affiche la chaîne des événements.
* Le Hash est l'identifiant unique et infalsifiable d'un commit.
* Il ne faut pas paniquer si le terminal se bloque : appuyez sur `q`.
* `--oneline` permet de lire vite.

## Partie 2 — Pratique

### 2.1. Afficher l'historique détaillé

#### Étape 1 — L'exploration profonde

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git log
```

Observez le nom de l'auteur, la date et la longue chaîne de caractères jaunes : c'est le Hash complet.

#### Étape 2 — Quitter l'affichage

Si une double pointe (`:`) apparaît en bas de l'écran, cela signifie que la liste continue.

Appuyez sur la touche :

```text
q
```

Votre terminal classique réapparaît.

### 2.2. Afficher un historique résumé

#### Étape 3 — L'exploration rapide

Pour avoir une vue d'ensemble de l'évolution de votre projet, exécutez :

```bash
git log --oneline
```

Le Hash complet a été raccourci, et l'auteur et la date ont été masqués pour ne laisser que le message.

**Résultat attendu :**

Un résultat peut ressembler à :

```text
a1b2c3d Ajouter le titre de la page
e4f5g6h Ajouter le fichier .gitignore
i7j8k9l Configurer le projet
```

La page de démonstration suivante présente un exemple visuel du terminal :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-10-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel git log">
</iframe>

## Bilan

**Vous avez réalisé :**

L'exploration de la mémoire de votre projet.

**Vous savez maintenant :**

* afficher l'historique complet avec `git log` ;
* comprendre la nature unique du Hash ;
* utiliser le pager et le fermer avec `q` ;
* générer une vue compacte très utile avec `git log --oneline`.

## Glossaire

* **Hash** : code alphanumérique unique généré par Git pour identifier un commit de manière mathématique et infalsifiable.
* **`git log`** : commande qui affiche le journal de bord.
* **Pager** : programme de lecture utilisé dans le terminal pour afficher du texte long (il se ferme avec `q`).
