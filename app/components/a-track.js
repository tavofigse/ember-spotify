import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    alert(this.get('title'));
  }
});
