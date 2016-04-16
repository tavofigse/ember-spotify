define('music/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'music/tests/helpers/start-app', 'music/tests/helpers/destroy-app'], function (exports, _qunit, _musicTestsHelpersStartApp, _musicTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _musicTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _musicTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});