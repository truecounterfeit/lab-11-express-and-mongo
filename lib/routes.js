// import the express app from server.js and add a bunch of express routes to it. then export to index.js
// need to import note.js so we can create notes
let notes = {};

// possibly can use the express wildcard to get id from URL, like so:
        // /api/notes/:id
        // can then do req.url.id without needing to parse anything.

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