import buble from 'rollup-plugin-buble';

var external = Object.keys(require('./package.json').dependencies).concat(['colors', ,'fs', 'path', 'replace']);

export default {
  entry: 'src/index.js',
  plugins: [ buble() ],
  external: external,
  targets: [
    { dest: 'dist/rollup-coeus-angular-modules.js', format: 'cjs' },
    { dest: 'dist/rollup-coeus-angular-modules.esm.js', format: 'es' }
  ]
};
