// import app here and start the server. Import from routes.js, not server.js (if we can make it work like that)

const PORT = process.env.PORT || 3000;

require("./lib/server").listen(PORT, function(){
  console.log('Server is running on 3000!');
});

// app.listen(PORT, function() {
//   console.log('Server is running on 3000!');
// });
