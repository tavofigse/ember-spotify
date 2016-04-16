define('music/tests/models/album.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/album.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/album.js should pass jshint.');
  });
});