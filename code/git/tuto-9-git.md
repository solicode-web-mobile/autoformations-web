---
layout: console
title: "Résultat Tuto 9 Git"
nav_exclude: true
---

<span class="prompt">$</span> <span class="command">git status</span><br>
<span class="output" style="color:#d16969;">modified: config.php</span><br><br>

<span class="prompt">$</span> <span class="command">git diff</span><br>
<span class="output">diff --git a/config.php b/config.php</span><br>
<span class="output">index 34b6f12..a4d7g90 100644</span><br>
<span class="output">--- a/config.php</span><br>
<span class="output">+++ b/config.php</span><br>
<span class="output">@@ -2,5 +2,6 @@</span><br>
<span class="output"> // Fichier de configuration</span><br>
<span class="output" style="color:#d16969;">-$mot_de_passe = "";</span><br>
<span class="output" style="color:#4ec9b0;">+$mot_de_passe = "SuperSecret123!";</span><br>
<span class="output" style="color:#4ec9b0;">+echo "Connexion réussie";</span>
