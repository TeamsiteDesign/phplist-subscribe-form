exports.config = {
    namespace: 'phplist-subscribe-form',
    generateDistribution: false,
    generateWWW: true,
    bundles: [
      { components: ['phplist-subscribe-form'] }
    ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
