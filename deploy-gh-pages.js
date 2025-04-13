const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const distFolder = path.join(__dirname, 'dist');
const tempFolder = path.join(__dirname, '.deploy-temp');

function run(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: 'inherit' });
}

(async () => {
  try {
    // 0. Verificar que dist existe
    if (!fs.existsSync(distFolder)) {
      console.error('❌ La carpeta dist/ no existe. Ejecutá primero el build (npm run build-all).');
      process.exit(1);
    }

    console.log('🛠 Preparando carpeta temporal...');
    await fs.remove(tempFolder);
    await fs.mkdir(tempFolder);
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
