# Domaine Conception de Données (`domaine-conception`)

> **Ressource Didactique & Norme Graphique — Solicode**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Modélisation conceptuelle des données (Merise / MCD).

---

## 1. Principes Didactiques Fondamentaux

- **Ancrage Concret Obligatoire :** Les entités et attributs doivent impérativement être extraits d'une maquette d'interface ou d'un formulaire réel (ex: maquette du Blog, page d'accueil, page détail).
- **Dictionnaire de Données Préalable :** Toute modélisation s'appuie sur le dictionnaire de données validé (`Donnée | Type | Description | Entité`).
- **Périmètre Strict (Zéro SQL) :** Aucun code SQL physique (`CREATE TABLE`, types SQL `VARCHAR`, etc.) n'est introduit dans les tutoriels de conception. Le SQL relève exclusivement du domaine base de données.
- **Règles de Gestion Claires :** Chaque relation métier est formulée par une phrase simple avec un **verbe d'action** à l'infinitif (ex: *« Un auteur rédige un article »*).
- **Méthode des Deux Questions pour les Cardinalités :**
  1. *Est-ce obligatoire ?* Non → `0` \| Oui → `1`
  2. *Peut-il y en avoir plusieurs ?* Une seule → `1` \| Plusieurs → `N`

---

## 2. Représentation Graphique d'un MCD Merise

### Pourquoi le SVG plutôt que Mermaid ?
Mermaid ne dispose que du module `erDiagram` (notation Crow's Foot anglo-saxonne), incompatible avec la norme pédagogique française **Merise MCD** :
- En Merise, une **entité** est un rectangle avec en-tête et attributs dont l'identifiant est **souligné**.
- Une **relation** (association) est représentée par un **ovale** portant un verbe d'action.
- Les **cardinalités** `(min, max)` sont textuelles (`0,1`, `1,1`, `0,N`, `1,N`) et placées directement sur le trait de liaison, côté entité.

Pour cette raison, tous les diagrammes MCD de la formation sont obligatoirement dessinés en **SVG natif inline**.

---

## 3. Spécifications Techniques du SVG Merise

| Composant | Balise SVG & Style | Rôle & Rendu visuel |
| :--- | :--- | :--- |
| **Conteneur SVG** | `<svg viewBox="0 0 W H" width="100%" height="auto">` | Responsive et adaptatif à tous les écrans |
| **Entité (cadre)** | `<rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>` | Rectangle blanc à bordure foncée |
| **En-tête entité** | `<path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>` | Bandeau grisé (`#e2e8f0`) avec nom en majuscules |
| **Séparateur** | `<line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>` | Sépare le nom de l'entité de ses attributs |
| **Identifiant (PK)** | `<text text-decoration="underline" font-weight="600" fill="#1e293b">` | Attribut clé primaire obligatoirement souligné |
| **Attributs simples** | `<text fill="#64748b">` | Attributs secondaires en gris ardoise |
| **Relation (ovale)** | `<ellipse cx="0" cy="0" rx="65" ry="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` | Ovale bleu clair (`#eff6ff`) à bordure bleue (`#2563eb`) |
| **Verbe d'action** | `<text text-anchor="middle" font-size="14" font-weight="600" fill="#1e40af">` | Verbe centré dans l'ovale |
| **Ligne de liaison** | `<line x1=".." y1=".." x2=".." y2=".." stroke="#334155" stroke-width="2"/>` | Trait continu reliant l'entité à l'ovale |
| **Cardinalité** | `<text font-size="13" font-weight="bold" fill="#dc2626">1,N</text>` | Texte rouge (`#dc2626`) posé sur le trait côté entité |

---

## 4. Modèle SVG N°1 : Relation Binaire Horizontale

Ce gabarit représente une relation entre deux entités (ex: `AUTEUR ── (1,N) ── [rédige] ── (1,1) ── ARTICLE`) :

```xml
<svg viewBox="0 0 600 110" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Ligne Entité Gauche -> Relation -->
  <line x1="160" y1="55" x2="235" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="175" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">1,N</text>

  <!-- Ligne Relation -> Entité Droite -->
  <line x1="365" y1="55" x2="440" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="405" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">1,1</text>

  <!-- Entité A (Gauche) -->
  <g transform="translate(20, 15)">
    <rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="70" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">AUTEUR</text>
    <text x="14" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_auteur</text>
    <text x="14" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b">nom_auteur</text>
  </g>

  <!-- Relation (Centre) -->
  <g transform="translate(300, 55)">
    <ellipse cx="0" cy="0" rx="65" ry="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="0" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#1e40af" text-anchor="middle">rédige</text>
  </g>

  <!-- Entité B (Droite) -->
  <g transform="translate(440, 15)">
    <rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="70" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">ARTICLE</text>
    <text x="14" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_article</text>
    <text x="14" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b">titre_article</text>
  </g>
</svg>
```

---

## 5. Modèle SVG N°2 : MCD Complet Vertical / Multi-Entités

Ce gabarit montre comment assembler plusieurs entités reliées verticalement ou en cascade :

```xml
<svg viewBox="0 0 320 400" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes verticales -->
  <line x1="160" y1="95" x2="160" y2="135" stroke="#334155" stroke-width="2"/>
  <text x="175" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">1,N</text>

  <line x1="160" y1="185" x2="160" y2="225" stroke="#334155" stroke-width="2"/>
  <text x="175" y="210" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">1,1</text>

  <!-- Entité VILLE (Haut) -->
  <g transform="translate(80, 15)">
    <rect width="160" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 154 0 C 158 0 160 2 160 6 L 160 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="160" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="80" y="19" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">VILLE</text>
    <text x="14" y="48" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_ville</text>
    <text x="14" y="68" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">nom_ville</text>
  </g>

  <!-- Relation habite (Milieu) -->
  <g transform="translate(160, 160)">
    <ellipse cx="0" cy="0" rx="60" ry="24" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#1e40af" text-anchor="middle">habite</text>
  </g>

  <!-- Entité AUTEUR (Bas) -->
  <g transform="translate(80, 225)">
    <rect width="160" height="100" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 154 0 C 158 0 160 2 160 6 L 160 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="160" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="80" y="19" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">AUTEUR</text>
    <text x="14" y="48" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_auteur</text>
    <text x="14" y="68" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">nom_auteur</text>
    <text x="14" y="88" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">email_auteur</text>
  </g>
</svg>
```

---

## 6. Checklist Qualité pour Tutoriels de Conception

- [ ] L'identifiant (clé primaire) est souligné visuellement dans le schéma SVG.
- [ ] Le verbe de la relation est un verbe d'action à l'infinitif dans un ovale bleu clair.
- [ ] Les cardinalités sont notées `(min, max)` en rouge vif (`#dc2626`) du côté de l'entité concernée.
- [ ] Le SVG possède `viewBox`, `width="100%"` et `height="auto"` pour être responsive.
- [ ] Aucune notion physique de base de données (clés étrangères, types VARCHAR/INT, requêtes SQL) n'apparaît dans le tutoriel.
