var should = require('should');
var transifex = require('../index.js');
var fs = require('fs');
var gutil = require('gulp-util');
var path = require('path')

var config = require('../config.json');
var env = config.env
var options = {
	host: config.transifex.host,
	base_path: config.transifex.base_path,
	local_path: config.transifex[env].local_path,
	user: config.transifex[env].user,
	password: config.transifex[env].password,
	project: config.transifex[env].project,
	custom_language_codes: config.transifex[env].custom_language_codes
};

describe('Transifex', function(){

	describe('#createClient()', function(){

		it('should return an object', function() {
			var client = transifex.createClient(options);
			client.should.be.type('object')
		});

	});

	describe('#_path', function() {
	  var client = transifex.createClient(options);

	  it('should return an object', function(){
		client._paths.should.be.type('object')
	  });

	  it('should return the resources path as string', function(){
		client._paths.get_or_create_resources().should.be.a.String;
		client._paths.get_or_create_resources().should.eql('/api/2/project/marcoslhc_personal/resources/');
	  });
	  it('should return the languages paths as string', function(){
		client._paths.get_languages().should.be.a.String;
		client._paths.get_languages().should.eql('/api/2/project/marcoslhc_personal/languages/');
	  })

	});

	describe('#listResources()', function(){
	  it('should return the data', function(done){
		var client = transifex.createClient(options);
		client.resources(function(data) {
		  data.should.be.an.Array
		  done()
		})
	  });
	});

	describe('#listLanguages()', function(){
		it('should return the languages with default options as an array of strings', function(done) {
			var client = transifex.createClient(options);
			client.languages(function(data){
				data.should.be.an.Array
				done()
			})
		});
		it('should return the data as an array of strings with the use_custom_language_codes set to true', function(done) {
			var client = transifex.createClient(options);
			client.languages({use_custom_language_codes:true}, function(data){
				data.should.be.an.Array
				done()
			})
		});
		it('should return the data as an array of objects with the use_custom_language_codes and language_codes_as_objects', function(done) {
			var client = transifex.createClient(options);
			client.languages({use_custom_language_codes:true, language_codes_as_objects:true}, function(data){
				data.should.be.an.Array
				done()
			})
		});
	})

	describe('#pushResources()', function() {

		it('should upload the resource', function(done){
			var client = transifex.createClient(options);
			file = new gutil.File({
				path: path.resolve(__dirname, '../fixture.po'),
				contents: fs.readFileSync(path.resolve(__dirname, '../fixture.po')),
				stat: fs.statSync(path.resolve(__dirname, '../fixture.po'))
			});
			client.pushResource(function(data) {
				done();
			}).write(file);
		});

	});

	describe('#pullResource()', function() {

		it('should download the translation', function(done){
			var client = transifex.createClient(options);
			file = new gutil.File({
				path: path.resolve(__dirname, '../fixture.po'),
				contents: fs.readFileSync(path.resolve(__dirname, '../fixture.po'))
			});
			client.pullResource(function(data) {
				done()
			}).write(file);
		});

	});
})
