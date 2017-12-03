import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2017-11-03')
    });
    record1.set('location', 'Paris, France')
    console.log("Record 1 location: " + record1.get('location'));

    let record2 = this.store.createRecord('sighting', {
      location: 'Calloway',
      sightedAt: new Date('2017-11-03')
    });

    let record3 = this.store.createRecord('sighting', {
      location: 'Asilomar',
      sightedAt: new Date('2017-11-03')
    });

    return [record1, record2, record3];
  }
});
