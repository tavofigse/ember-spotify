define('music/tests/test-helper', ['exports', 'music/tests/helpers/resolver', 'ember-qunit'], function (exports, _musicTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_musicTestsHelpersResolver['default']);
});