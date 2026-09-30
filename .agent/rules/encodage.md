# Encodage des fichiers

Tous les fichiers créés ou modifiés (notamment les fichiers Markdown `.md`, HTML, CSS, JS, etc.) doivent impérativement être enregistrés en **UTF-8 sans BOM (Byte Order Mark)**.

**Attention sous Windows (PowerShell) :**
L'utilisation de la commande PowerShell `Set-Content -Encoding UTF8` ajoute un BOM par défaut. 
Pour écrire ou réécrire un fichier en UTF-8 sans BOM via un script PowerShell, vous devez utiliser la classe `.NET` correspondante :

```powershell
$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText($cheminFichier, $contenu, $utf8NoBom)
```

Veillez à toujours respecter cette règle lors de l'utilisation de scripts pour éviter des erreurs de compilation ou d'affichage (caractères étranges au début des fichiers) dans Jekyll et le thème Just the Docs.
