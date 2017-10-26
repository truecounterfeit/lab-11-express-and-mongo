const Note = require('../lib/note.js');
const routes = require('..lib/routes.js');
const server = require('..lib/server.js');
const express = require('express');

// GET /lib/note?uuid= get note by uuid
  // 404 if note is not found
  // 400 if no id was sent
  // 200 if note found.
describe('Testing for GET'), () => {
  before((done) => {
    server.start(process.env.PORT || 3000);
    done();
  });

  after(done) => {
    server.stop();
    done();
  });

// GET /lib/note?uuid= get note by uuid
  it('GET /lib/note no note is found')
    request.get('localhost:3000/lib/note/?uuid=234').end(err, res) => {
      // 404 if note is not found
      if(res.status == 404)
        expect(res.text).toEqual('You do not have any notes');
      } else {
      expect(res.text).toEqual('Added note.');
      } done();

  it('GET /lib/note if no id was sent')
    request.get('localhost:3000/lib/note/?uuid=234').end(err, res) => {
      // 400 if no id was sent
      if(res.status == 400)
        expect(res.text).toEqual('Bad request: You do not have an id');
      } else {
      expect(res.text).toEqual('id found.');
      } done();

  it('GET /lib/note if note found')
    request.get('localhost:3000/lib/note/?uuid=234').end(err, res) => {
      // 200 if note found.
      if(res.status == 200)
        expect(res.text).toEqual('Note found.');
      } else {
      expect(res.text).toEqual('Bad request: Note not found');
      } done();
});

// POST /api/notes save new note w/ post body
  // 400 if no body was found or body was invalid
  // 200 if body was valid
describe('Testing for POST'), () => {
  before((done) => {
    server.start(process.env.PORT || 3000);
    done();
  });

  after(done) => {
    server.stop();
    done();
  });

// POST /lib/note save new note w/ post body
  it('POST /lib/note if no body was found or body was invalid')
    request.post('localhost:3000/lib/note/:id').end(err, res) => {
      // 400 if no body was found or body was invalid
      //test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
      if(res.status == 400)
        expect(res.text).toEqual('Bad request: No body found or body invalid');
      } else {
        expect(res.text).toEqual('Thanks for your post.');
      } done();

  it('POST /lib/note if body was valid')
    request.post('localhost:3000/lib/note/:id').end(err, res) => {
      // 200 if body was valid
      // test 200, it should respond with the body content for a post request with a valid body
      if(res.status == 200)
        expect(res.text).toEqual(`Post receieved. ${'req.body'}`);
      } else {
        expect(res.text).toEqual('Bad request: Body invalid');
      } done();
});
