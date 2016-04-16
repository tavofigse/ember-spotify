define('music/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'music/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _musicConfigEnvironment) {

  var name = _musicConfigEnvironment['default'].APP.name;
  var version = _musicConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});