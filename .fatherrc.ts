import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: {
    type: 'rollup',
  },
  esm: {
    type: 'rollup',
  },
  doc: {
    typescript: true,
    title: '烽火工程组件',
    base: '/projectComponent/',
    htmlContext: {
      lang: '',
      head: {
        raw: '',
        links: [],
        meta: [],
        scripts: [],
      },
    },
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};

export default options;
