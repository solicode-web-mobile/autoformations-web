# Bonnes pratiques de l'éditeur de code intégré (Capacité globale)

Ce document définit la règle d'or pour la préparation des "Données de départ" (les champs `data_html`, `data_css`, `data_js`, etc.) afin de garantir une expérience utilisateur sans faille dans l'éditeur de code interactif.

## Règle d'or : Isolation du code de préparation

Dans l'éditeur de code intégré, si l'apprenant copie-colle un exemple de code fourni dans la théorie pour l'expérimenter, ce code remplace intégralement le contenu de l'onglet correspondant. 

Pour éviter que l'apprenant ne détruise involontairement la mise en forme de base ou le contexte de l'exercice, **le code de préparation doit toujours être isolé dans un onglet différent de celui que l'apprenant doit éditer.**

### Application concrète

1. **Si l'exercice porte sur le CSS** (ex: Flexbox, Grid, etc.) :
   - Tout le CSS de "préparation" ou de "design" (couleurs, bordures, tailles, polices) **doit être inséré dans une balise `<style>` à l'intérieur du champ `data_html`**.
   - Le champ `data_css` doit être vide (ou ne contenir que le strict minimum lié à la consigne).
   - Ainsi, l'apprenant travaille dans un onglet CSS vierge. S'il colle un snippet d'exemple, il ne cassera pas le design des éléments.

2. **Si l'exercice porte sur le JavaScript** :
   - Le code HTML et CSS de préparation reste dans `data_html` et `data_css`.
   - Si des fonctions utilitaires JS sont nécessaires mais ne font pas partie de l'exercice, incluez-les dans une balise `<script>` directement dans le HTML (`data_html`), afin que l'onglet JS (`data_js`) reste propre pour le code de l'apprenant.

3. **Si l'exercice porte sur le HTML** :
   - Le CSS de préparation va dans `data_css`. 
   - L'onglet HTML ne contient que les balises concernées par l'exercice.

**Conséquence dans le corps du tutoriel :**
Dans la section "Données de départ" du texte du tutoriel, les blocs de code affichés (`### HTML`, `### CSS`, etc.) doivent refléter fidèlement cette structure (ex: le bloc HTML inclura la balise `<style>` avec le CSS de préparation).
