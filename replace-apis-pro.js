const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'config-pro.ts');
const targetPath = path.join(__dirname, 'projects', 'libs', 'commons-lib', 'src', 'lib', 'enum', 'commons.enum.ts');

const enumName = 'ApiEnum';

// Leer el archivo fuente (config-qa.ts)
const sourceContent = fs.readFileSync(sourcePath, 'utf-8');
const newEnum = getEnumContent(sourceContent, enumName);

if (!newEnum) {
  console.error(`❌ No se encontró el enum "${enumName}" en el archivo fuente.`);
  process.exit(1);
}

// Leer el archivo destino y reemplazar el enum
let targetContent = fs.readFileSync(targetPath, 'utf-8');
const enumRegex = new RegExp(`export enum ${enumName} \\{[^}]*\\}`, 's');

if (!enumRegex.test(targetContent)) {
  console.error(`❌ No se encontró el enum "${enumName}" en el archivo destino.`);
  process.exit(1);
}

targetContent = targetContent.replace(enumRegex, newEnum);

// Guardar el archivo modificado
fs.writeFileSync(targetPath, targetContent, 'utf-8');
console.log(`✅ Enum "${enumName}" reemplazado con éxito.`);


// --- Función auxiliar ---
function getEnumContent(fileContent, enumName) {
  const match = fileContent.match(new RegExp(`export enum ${enumName} \\{[^}]*\\}`, 's'));
  return match ? match[0] : null;
}
