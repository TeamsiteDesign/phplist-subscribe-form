exports.config = {
    namespace: 'phplist-subscribe-form',
    distribution: true,
    generateWWW: false,
    bundles: [
      { components: ['phplist-subscribe-form'] }
    ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
