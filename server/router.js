const router = (app) => {
  app.get('*', (req, res) => {
    res.render('index');
  });
};

module.exports = router;
