define('music/app', ['exports', 'ember', 'music/resolver', 'ember-load-initializers', 'music/config/environment'], function (exports, _ember, _musicResolver, _emberLoadInitializers, _musicConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _musicConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _musicConfigEnvironment['default'].podModulePrefix,
    Resolver: _musicResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _musicConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});