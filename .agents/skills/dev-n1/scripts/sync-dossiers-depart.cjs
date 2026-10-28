#!/usr/bin/env node

/**
 * Script de synchronisation miroir des dossiers de départ N1
 * Source : _plan-réalisation-tutos/S[X]/dossier-depart/
 * Cible  : D:\solicode-web-mobile\dossiers-depart-n1\S[X]\dossier-depart\
 *
 * Utilisation :
 *   node sync-dossiers-depart.cjs [--dry-run] [--session S7]
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration par défaut
const DEFAULT_SOURCE = path.resolve(__dirname, '../../../../_plan-réalisation-tutos');
const DEFAULT_DEST = path.resolve('D:/solicode-web-mobile/dossiers-depart-n1');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    session: null,
    source: DEFAULT_SOURCE,
    dest: DEFAULT_DEST,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--dry-run' || arg === '-n') {
      options.dryRun = true;
    } else if (arg === '--session' || arg === '-s') {
      options.session = args[++i]?.toUpperCase();
    } else if (arg === '--source') {
      options.source = path.resolve(args[++i]);
    } else if (arg === '--dest') {
      options.dest = path.resolve(args[++i]);
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  }

  return options;
}

function showHelp() {
  console.log(`
Synchronisation des dossiers de départ N1
=========================================
Usage :
  node sync-dossiers-depart.cjs [options]

Options :
  -s, --session <S[X]>  Cibler une seule session (ex: S7). Par défaut : toutes les sessions.
  -n, --dry-run         Simuler la synchronisation sans écrire ni supprimer de fichiers.
      --source <chemin> Chemin vers _plan-réalisation-tutos (par défaut : auto-détecté).
      --dest <chemin>   Chemin vers dossiers-depart-n1 (par défaut : D:\\solicode-web-mobile\\dossiers-depart-n1).
  -h, --help            Afficher ce message d'aide.
`);
}

function fileHash(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(buffer).digest('hex');
  } catch (err) {
    return null;
  }
}

function getAllFiles(dir, base = '') {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, relPath));
    } else if (entry.isFile()) {
      results.push(relPath);
    }
  }
  return results;
}

function syncDirectory(srcDir, destDir, dryRun) {
  const stats = {
    copied: 0,
    updated: 0,
    deleted: 0,
    unchanged: 0,
    errors: 0
  };

  const srcFiles = new Set(getAllFiles(srcDir));
  const destFiles = new Set(getAllFiles(destDir));

  // 1. Copier les nouveaux fichiers et mettre à jour les fichiers modifiés
  for (const relFile of srcFiles) {
    const srcFilePath = path.join(srcDir, relFile);
    const destFilePath = path.join(destDir, relFile);

    if (!destFiles.has(relFile)) {
      // Nouveau fichier
      console.log(`  [+] NOUVEAU    : ${relFile}`);
      stats.copied++;
      if (!dryRun) {
        fs.mkdirSync(path.dirname(destFilePath), { recursive: true });
        fs.copyFileSync(srcFilePath, destFilePath);
      }
    } else {
      // Fichier existant -> comparaison hash
      const srcHash = fileHash(srcFilePath);
      const destHash = fileHash(destFilePath);

      if (srcHash !== destHash) {
        console.log(`  [~] MODIFIÉ    : ${relFile}`);
        stats.updated++;
        if (!dryRun) {
          fs.mkdirSync(path.dirname(destFilePath), { recursive: true });
          fs.copyFileSync(srcFilePath, destFilePath);
        }
      } else {
        stats.unchanged++;
      }
    }
  }

  // 2. Supprimer les fichiers orphelins côté destination (comportement miroir)
  for (const relFile of destFiles) {
    if (!srcFiles.has(relFile)) {
      console.log(`  [-] SUPPRIMÉ   : ${relFile} (orphelin supprimé de la source)`);
      stats.deleted++;
      if (!dryRun) {
        const destFilePath = path.join(destDir, relFile);
        try {
          fs.unlinkSync(destFilePath);
        } catch (err) {
          console.error(`      ERREUR suppression : ${err.message}`);
          stats.errors++;
        }
      }
    }
  }

  // 3. Nettoyer les sous-dossiers vides résiduels côté destination
  if (!dryRun && fs.existsSync(destDir)) {
    cleanEmptyDirs(destDir);
  }

  return stats;
}

function cleanEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = path.join(dir, entry.name);
      cleanEmptyDirs(subDir);
      try {
        if (fs.readdirSync(subDir).length === 0) {
          fs.rmdirSync(subDir);
        }
      } catch (err) {
        // Ignorer si le dossier est occupé ou non vide
      }
    }
  }
}

function main() {
  const options = parseArgs();

  if (options.help) {
    showHelp();
    process.exit(0);
  }

  console.log('\n============================================================');
  console.log('🔄 SYNCHRONISATION DES DOSSIERS DE DÉPART N1');
  console.log('============================================================');
  console.log(`📂 Source      : ${options.source}`);
  console.log(`🎯 Destination : ${options.dest}`);
  console.log(`🔍 Mode        : ${options.dryRun ? '⚠️  SIMULATION (--dry-run, aucune écriture)' : '⚡ EXÉCUTION RÉELLE'}`);
  if (options.session) {
    console.log(`🎯 Cible       : Session ${options.session}`);
  } else {
    console.log(`🎯 Cible       : Toutes les sessions`);
  }
  console.log('------------------------------------------------------------\n');

  if (!fs.existsSync(options.source)) {
    console.error(`❌ Erreur : Le répertoire source n'existe pas : ${options.source}`);
    process.exit(1);
  }

  if (!fs.existsSync(options.dest) && !options.dryRun) {
    fs.mkdirSync(options.dest, { recursive: true });
  }

  // Découverte des sessions
  const entries = fs.readdirSync(options.source, { withFileTypes: true });
  let sessions = entries
    .filter(e => e.isDirectory() && /^S\d+$/i.test(e.name))
    .map(e => e.name.toUpperCase())
    .sort((a, b) => parseInt(a.replace('S', ''), 10) - parseInt(b.replace('S', ''), 10));

  if (options.session) {
    sessions = sessions.filter(s => s === options.session);
    if (sessions.length === 0) {
      console.error(`❌ Erreur : Session non trouvée : ${options.session}`);
      process.exit(1);
    }
  }

  const globalStats = {
    sessions: 0,
    copied: 0,
    updated: 0,
    deleted: 0,
    unchanged: 0,
    errors: 0
  };

  for (const session of sessions) {
    const srcSessionDir = path.join(options.source, session, 'dossier-depart');
    const destSessionDir = path.join(options.dest, session, 'dossier-depart');

    if (!fs.existsSync(srcSessionDir)) {
      console.log(`ℹ️  [${session}] Aucun dossier-depart trouvé dans la source. Session ignorée.`);
      continue;
    }

    console.log(`\n📦 Session ${session} :`);
    console.log(`   Source : ${srcSessionDir}`);
    console.log(`   Cible  : ${destSessionDir}`);

    const stats = syncDirectory(srcSessionDir, destSessionDir, options.dryRun);

    globalStats.sessions++;
    globalStats.copied += stats.copied;
    globalStats.updated += stats.updated;
    globalStats.deleted += stats.deleted;
    globalStats.unchanged += stats.unchanged;
    globalStats.errors += stats.errors;

    const totalActions = stats.copied + stats.updated + stats.deleted;
    if (totalActions === 0) {
      console.log(`   ✨ Déjà parfaitement synchronisé (${stats.unchanged} fichiers identiques).`);
    } else {
      console.log(`   📊 Bilan : +${stats.copied} nouveaux, ~${stats.updated} modifiés, -${stats.deleted} supprimés, =${stats.unchanged} inchangés.`);
    }
  }

  console.log('\n============================================================');
  console.log('🏁 BILAN GLOBAL');
  console.log('============================================================');
  console.log(`Sessions traitées : ${globalStats.sessions}`);
  console.log(`Nouveaux fichiers : ${globalStats.copied}`);
  console.log(`Fichiers modifiés : ${globalStats.updated}`);
  console.log(`Fichiers orphelins supprimés : ${globalStats.deleted}`);
  console.log(`Fichiers inchangés : ${globalStats.unchanged}`);
  if (globalStats.errors > 0) {
    console.log(`❌ Erreurs : ${globalStats.errors}`);
  }
  console.log('============================================================\n');

  if (options.dryRun) {
    console.log('💡 Note : En mode simulation (--dry-run), aucun fichier n\'a été altéré sur le disque.');
    console.log('Pour appliquer ces modifications, relancez la commande sans --dry-run.\n');
  }

  process.exit(globalStats.errors > 0 ? 1 : 0);
}

main();
