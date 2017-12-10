exports.config = {
    namespace: 'phplist-subscribe-form',
    generateDistribution: true,
    generateWWW: false,
    bundles: [
      { components: ['phplist-subscribe-form'] }
    ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
