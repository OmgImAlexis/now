import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
  external: [
    'moment',
    'vue',
    'lodash',
  ],
};
