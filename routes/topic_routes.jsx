/**
 * Created by sss on 2017-03-26.
 */
var React = require('react');
var ReactRouter =require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} custom={window.PROPS} />;
    }
}


module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={require('../views_mongo/Layout.jsx')}>
            <Route path='topic' component={require('../views_mongo/Topics.jsx')} />
            <Route path='topic/:id' component={require('../views_mongo/Topic.jsx')} />
            <Route path='topic/add/:id' component={require('../views_mongo/Add.jsx')} />
            <Route path='topic/edit/:id' component={require('../views_mongo/Edit.jsx')} />
            <Route path='topic/delete/:id' component={require('../views_mongo/Delete.jsx')} />

        </Route>
    </Router>
);