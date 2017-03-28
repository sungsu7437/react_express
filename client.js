/**
 * Created by sss on 2017-03-23.
 */
var ReactDOM = require('react-dom');
var React = require('react');
var routes = require('./routes/topic_routes.jsx');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

function reducer(state) { return state; }

var store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);