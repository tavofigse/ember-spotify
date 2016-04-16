import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  artist: attr(),
  name: attr(),
  image: attr(),
  tracks: hasMany('track')
});
