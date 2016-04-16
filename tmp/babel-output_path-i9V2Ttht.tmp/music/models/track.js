define('music/models/track', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({
    title: (0, _emberDataAttr['default'])(),
    duration: (0, _emberDataAttr['default'])(),
    sourceUrl: (0, _emberDataAttr['default'])()

  });
});