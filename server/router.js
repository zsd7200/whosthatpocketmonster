const controllers = require('./controllers');

const router = (app) => {
  app.get('/', controllers.indexPage);
  app.get('*', controllers.errPage);
};

module.exports = router;
