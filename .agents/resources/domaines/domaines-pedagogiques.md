# Index Didactique des 17 Domaines de Compétence

> **Répertoire d'Orientation & Règles Didactiques — Solicode**  
> **Ressources Locales de l'Agent :** Cursus N1 (Autoformations Web)  
> Chaque domaine possède sa propre fiche didactique détaillée dans `.agents/resources/domaines/`.

---

## 📚 Répertoire Modulaire des Domaines

| N° | Domaine Technique | Fiche Dédiée | Synthèse des Règles Clés |
| :-: | :--- | :--- | :--- |
| 1 | **Pédagogie Active** | [domaine-active.md](domaine-active.md) | Cycle d'apprentissage actif, posture de guidage, interdiction de captures d'écran. |
| 2 | **Algorithmique** | [domaine-algo.md](domaine-algo.md) | Code autonome exécutable, `array-svg.html`, livrable `.js` pur. |
| 3 | **Analyse des Besoins** | [domaine-analyse.md](domaine-analyse.md) | Cas d'étude narratif obligatoire, tableaux acteurs/rôles, aucun code. |
| 4 | **Architecture Applicative** | [domaine-architecture.md](domaine-architecture.md) | Séparation des préoccupations (SoC), arborescences indentées, sous-dossiers. |
| 5 | **Conception de Données** | [domaine-conception.md](domaine-conception.md) | Merise / MCD, **Gabarits SVG normés**, cardinalités `(min, max)`, zéro SQL. |
| 6 | **CSS & Mise en Page** | [domaine-css.md](domaine-css.md) | `data_css` vierge, styles isolés dans `data_html`, schémas Flexbox. |
| 7 | **Débogage & Anomalies** | [domaine-debug.md](domaine-debug.md) | Méthode en 5 étapes, reproduction d'erreur, fiche d'incident avec diff. |
| 8 | **Déploiement & Serveurs** | [domaine-deploy.md](domaine-deploy.md) | Serveur HTTP vs fichier local, bannissement des chemins absolus. |
| 9 | **Gestion du Travail** | [domaine-gestion.md](domaine-gestion.md) | Cadrage d'objectif, découpage 30m-1h, règle Kanban 1 tâche en cours, SOS. |
| 10 | **Git & Versionnement** | [domaine-git.md](domaine-git.md) | CLI fondamental (`add`, `commit`, `push`), livrable `.md`, diagramme Mermaid 3 zones. |
| 11 | **HTML & Sémantique** | [domaine-html.md](domaine-html.md) | HTML pur sans CSS (`data_css: ""`), injection `window.pageData`. |
| 12 | **JavaScript & DOM** | [domaine-js.md](domaine-js.md) | `data_js` dédié aux manipulations, écouteurs, sélecteurs, console.log. |
| 13 | **PHP Procédural** | [domaine-php.md](domaine-php.md) | Formulaires `GET`/`POST`, validation `isset()`, protection XSS `htmlspecialchars()`. |
| 14 | **PHP & Base de Données** | [domaine-php-sql.md](domaine-php-sql.md) | Connexion PDO avec exceptions, requêtes préparées obligatoires (zéro concaténation). |
| 15 | **SQL** | [domaine-sql.md](domaine-sql.md) | Mots-clés en MAJUSCULES, jeu d'essai `CREATE`/`INSERT` fourni, résultat tabulaire. |
| 16 | **Test & Vérification** | [domaine-test.md](domaine-test.md) | Fiche de test tabulaire normée, tests aux limites, non-régression. |
| 17 | **Veille & Culture Web** | [domaine-veille-tech.md](domaine-veille-tech.md) | Analogies du quotidien (DNS, IP, HTTP), flux Mermaid, synthèse d'une page. |

---

## 🎨 Note Spécifique sur les Diagrammes de Données (MCD)

Pour tout schéma de conception de données (MCD Merise), consulter impérativement [domaine-conception.md](domaine-conception.md) qui contient les spécifications graphiques exactes et les modèles SVG responsive prêts à l'emploi (Entités avec identifiants soulignés, Relations ovales avec verbes d'action, et Cardinalités `1,N`, `1,1`, `0,N`).
