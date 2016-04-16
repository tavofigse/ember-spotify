define('music/tests/helpers/resolver', ['exports', 'music/resolver', 'music/config/environment'], function (exports, _musicResolver, _musicConfigEnvironment) {

  var resolver = _musicResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _musicConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _musicConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});