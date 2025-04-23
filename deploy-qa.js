const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const source = 'dist';
const dest = 'Z:/Canchapp/deploy';

function log(msg) {
  console.log(`🟢 ${msg}`);
}

function error(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

// Validaciones iniciales
if (!fs.existsSync(source)) {
  error(`La carpeta "${source}" no existe. Compila el proyecto antes de desplegar.`);
}

if (!fs.existsSync('Z:/')) {
  error(`La unidad Z:/ no está disponible.`);
}

// Crear carpeta destino si no existe
if (!fs.existsSync(dest)) {
  log(`La carpeta destino no existe. Creándola en: ${dest}`);
  fs.mkdirSync(dest, { recursive: true });
}

// Copiar carpetas mf-* excepto mf-host
log(`Copiando micro-frontends (excepto mf-host)...`);
fs.readdirSync(source, { withFileTypes: true }).forEach((entry) => {
  if (entry.isDirectory() && entry.name.startsWith('mf-') && entry.name !== 'mf-host') {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(dest, entry.name);
    log(`➜ Copiando ${entry.name}...`);
    fse.copySync(srcPath, destPath, { overwrite: true });
  }
});

// Copiar archivos desde dist/mf-host al destino
const mfHostPath = path.join(source, 'mf-host');
if (!fs.existsSync(mfHostPath)) {
  console.warn('⚠️ ADVERTENCIA: La carpeta mf-host no fue encontrada.');
} else {
  log(`Copiando archivos desde mf-host...`);
  fse.copySync(mfHostPath, dest, { overwrite: true });
}

log('✅ ¡Deploy completado con éxito!');
