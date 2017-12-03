import DS from 'ember-data';

export default DS.Model.extend({
  fname: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'lName', function(){
    return this.get('email') + ' - ' + this.get('fName') + ' ' + this.get('lName');
  }),
});
