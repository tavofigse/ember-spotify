define('music/tests/components/a-track.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/a-track.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/a-track.js should pass jshint.');
  });
});