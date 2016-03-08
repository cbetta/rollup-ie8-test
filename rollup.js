import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  dest: 'build.js',
  format: 'umd',
  moduleName: 'demo',
  plugins: [
    babel()
  ]
};
