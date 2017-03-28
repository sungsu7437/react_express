/**
 * Created by sss on 2017-03-26.
 */
var React = require('react');
var ReactRouter =require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={require('../views_mongo/Layout.jsx')}>
            <IndexRoute component={require('../views_mongo/Index.jsx')} />
            <Route path='topic' component={require('../views_mongo/Topics.jsx')} >
                <Route path=':id' component={require('../views_mongo/Topic.jsx')} />
                <Route path='add' component={require('../views_mongo/Add.jsx')} />
                <Route path='edit' component={require('../views_mongo/Edit.jsx')} />
                <Route path='delete' component={require('../views_mongo/Delete.jsx')} />
            </Route>
        </Route>
    </Router>
);