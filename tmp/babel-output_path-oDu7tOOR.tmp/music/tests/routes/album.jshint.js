define('music/tests/routes/album.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/album.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/album.js should pass jshint.');
  });
});