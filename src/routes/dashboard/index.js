const MainDashboardRouter = require('express').Router();

MainDashboardRouter.route('/')
  .get(require('./dashboard.views.js'));

module.exports = MainDashboardRouter;