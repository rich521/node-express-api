 module.exports = (app) => {
   app.get('/', (request, response, next) => {
     response.send({ foo: 'bar'});
   });
 };
