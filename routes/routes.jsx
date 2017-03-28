/**
 * Created by sss on 2017-03-26.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={require('../views_mongo/Layout.jsx')}>
            <IndexRoute component={require('../views_mongo/Index.jsx')} />
            <Route path='about' component={require('../views_mongo/About.jsx')} />
        </Route>
    </Router>
);