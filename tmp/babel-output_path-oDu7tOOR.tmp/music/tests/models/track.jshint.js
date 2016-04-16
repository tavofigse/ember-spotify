define('music/tests/models/track.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/track.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/track.js should pass jshint.');
  });
});