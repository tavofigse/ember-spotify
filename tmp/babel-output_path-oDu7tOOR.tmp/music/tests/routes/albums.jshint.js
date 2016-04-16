define('music/tests/routes/albums.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/albums.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/albums.js should pass jshint.');
  });
});