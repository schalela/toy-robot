module.exports = {
  entry: 'index.js',
  minimize: !process.env.DEBUG,
  sourceMap: true,
  html: false,
  format: 'cjs'
};
