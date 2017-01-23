import DS from 'ember-data';

export default DS.Model.extend({
	  Name: DS.attr(),
	  id: DS.attr(),
      dept: DS.attr(),
      dob:DS.attr()

});
