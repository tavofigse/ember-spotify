define('music/router', ['exports', 'ember', 'music/config/environment'], function (exports, _ember, _musicConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _musicConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('albums');
    this.route('album', { path: 'albums/:album_id' });
  });

  exports['default'] = Router;
});