// Test for these things:
'use strict';

const Note = require('../lib/note.js');
const app = require('../lib/routes.js');
const request = require('superagent');
const expect = require ('expect');
const server = app.listen(3000);

describe('Testing for GET', () => {

  after((done) => {
    server.close();
    done();
  });

  it('should send an error if note is not found', (done) => {
    request.get('localhost:3000/api/notes/123').end(function(err, res) {
      expect(res.text).toEqual('Note not found');
      done();
    });
  });
  it('should send the note when correct id is presented', (done) => {
    request.get('localhost:3000/api/notes/David').end(function(err, res) {
      expect(res.text).toEqual('sucks');
      done();
    });
  });
  it('should send an error if you do not send an id', (done) => {
    request.get('localhost:3000/api/notes/').end(function(err, res) {
      expect(res.text).toEqual('You did not send an id');
      done();
    });
  });

});

// GET /api/notes?uuid= get note by uuid
        // 404 if note is not found
        // 400 if no id was sent
        // 200 if note found.

// POST /api/notes save new note w/ post body
        // 400 if no body was found or body was invalid
        // 200 if body was valid

// DELETE /api/notes?uuid= delete note by ID
        // 404 if note not found
        // 400 if no id sent
        // 200 if note deleted
