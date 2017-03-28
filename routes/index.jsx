var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

function reducer(state) { return state; }


router.get('*', function(req, res) {
    var initialState = { title: 'Universal React',
        id: '',
        topics: '',
        topic: '',
        author: ''
    };

    var store = Redux.createStore(reducer, initialState);

    ReactRouter.match({
        routes: require('./topic_routes.jsx'),
        location: req.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            initialState.topics = "test";
            store = Redux.createStore(reducer, initialState);
            var html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <ReactRouter.RouterContext {...renderProps} />
                </Provider>
            );
            res.send(html);
        } else {
            res.status(404).send('Not Found');
        }
    });
});

router.post('*', function (req, res) {
});

module.exports = router;
