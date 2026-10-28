<#
.SYNOPSIS
    Wrapper PowerShell pour la synchronisation miroir des dossiers de départ N1.
.DESCRIPTION
    Synchronise les dossiers de départ depuis _plan-réalisation-tutos vers D:\solicode-web-mobile\dossiers-depart-n1.
.PARAMETER Session
    Cible une seule session (ex: -Session S7). Par défaut : toutes les sessions.
.PARAMETER DryRun
    Simule la synchronisation sans modification sur le disque.
.EXAMPLE
    .\sync-dossiers-depart.ps1 -DryRun
    .\sync-dossiers-depart.ps1 -Session S7
    .\sync-dossiers-depart.ps1
#>

[CmdletBinding()]
param (
    [Parameter(Mandatory = $false)]
    [string]$Session = "",

    [Parameter(Mandatory = $false)]
    [switch]$DryRun
)

$scriptPath = Join-Path $PSScriptRoot "sync-dossiers-depart.cjs"

$argsList = @()

if ($Session -ne "") {
    $argsList += "--session"
    $argsList += $Session
}

if ($DryRun) {
    $argsList += "--dry-run"
}

node $scriptPath @argsList
exit $LASTEXITCODE
