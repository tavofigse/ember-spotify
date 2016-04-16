define('music/models/album', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    artist: (0, _emberDataAttr['default'])(),
    name: (0, _emberDataAttr['default'])(),
    image: (0, _emberDataAttr['default'])(),
    tracks: (0, _emberDataRelationships.hasMany)('track')
  });
});