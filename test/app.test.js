var chai = require('chai');
var assert = chai.assert;
var request = require('superagent');

describe('My App', function() {
  var myApp = require('../app.js');
  var port = 3001;
  var baseUrl = 'http://localhost:' + port;

  before(function(done) {
    myApp.start(port, done);
  });

  after(function(done) {
    myApp.stop(done);
  });

  describe('When requested at /db', function() {
    it('should return 200 code', function(done) {
      request.get(baseUrl + '/db').end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
    });
  });
});
