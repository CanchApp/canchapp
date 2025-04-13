const { execSync } = require('child_process');
const fs = require('fs-extra'); // usamos fs-extra en lugar de fs
const path = require('path');

const distFolder = 'dist';
const tempFolder = '.deploy-temp';

function run(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: 'inherit' });
}

(async () => {
  try {
    // 1. Limpiar y copiar dist/ a temporal
    await fs.remove(tempFolder);
    await fs.copy(distFolder, tempFolder);

    // 2. Cambiar a rama gh-pages
    run('git checkout gh-pages');

    // 3. Limpiar y reemplazar contenido
    await fs.emptyDir('.');
    await fs.copy(tempFolder, '.');

    // 4. Commit y push
    run('git add .');
    try {
      run('git commit -m "Deploy to GitHub Pages"');
    } catch {
      console.log('🔸 Sin cambios para commitear.');
    }
    run('git push origin gh-pages');

    // 5. Volver a rama main
    run('git checkout main');

    // 6. Eliminar temporal
    await fs.remove(tempFolder);

    console.log('✅ ¡Deploy completado con éxito en gh-pages!');
  } catch (error) {
    console.error('❌ Error durante el deploy:', error);
    process.exit(1);
  }
})();
