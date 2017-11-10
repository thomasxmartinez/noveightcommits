const recordsController = require('../controllers').records;

module.exports = app => {
  app.get('/api', (req, res) => {
    message: 'holla at this records api';
  });

  app.post('/api/records', recordsController.create);
  app.get('/api/records', recordsController.list);
  app.get('/api/records/:id', recordsController.retrieve);

  app.put('/api/records/:id', recordsController.update);
  app.delete('/api/records/:id', recordsController.destroy);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/records/:id/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed'
    })
  );
};
