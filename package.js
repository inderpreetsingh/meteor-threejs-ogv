Package.describe({
  summary: "the latest three.js packaged for use in Meteor and OGV"
});

Package.on_use(function (api) {
	api.add_files('lib/three.js', 'client');
});
