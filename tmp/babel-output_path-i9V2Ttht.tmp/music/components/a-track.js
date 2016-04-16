define('music/components/a-track', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    click: function click() {
      alert(this.get('title'));
    }
  });
});