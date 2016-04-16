define('music/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'music/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _musicConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_musicConfigEnvironment['default'].APP.name, _musicConfigEnvironment['default'].APP.version)
  };
});