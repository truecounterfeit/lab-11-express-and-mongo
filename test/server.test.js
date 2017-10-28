const Note = require('../lib/note.js');
const app = require('../lib/routes.js');
const request = require('superagent');
const expect = require('expect');
const server = app.listen(3000);


describe('Testing for POST', () => {
  after((done) => {
    server.close();
    done();
  });
// POST /lib/note save new note w/ post body
  it('should create a note when body content is passed like body=content', (done) => {
    request.post('localhost:3000/api/notes', { body: 'hello' }, function(err, res) {
      expect(res.text).toEqual('Note created');
      done();
    });
  });

  it('should asked user to include body content if none was provided', (done) => {
    request.post('localhost:3000/api/notes', { body: '' }, function(err, res) {
      expect(res.text).toEqual("Please submit content alongside body=");
      done();
    });
  });

  it('should tell user to actuall post something if they do not', (done) => {
    request.post('localhost:3000/api/notes', {}, function(err, res) {
      expect(res.text).toEqual('You did not post a body in your request. Please submit as \"body=\"');
      done();
    });
  });

});