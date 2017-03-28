var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

function reducer(state) { return state; }

router.get('/topic*', function(req, res) {
    var initialState = { title: 'Universal React',
        id: '',
        topics: '',
        topic: '',
        author: ''
    };
    var store = Redux.createStore(reducer, initialState);

    function makeHtml(store, renderProps) {
        var html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <ReactRouter.RouterContext {...renderProps} />
            </Provider>
        );
        return html;
    }

    ReactRouter.match({
        routes: require('./topic_routes.jsx'),
        location: req.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            url = req.url;

            if (url == '/topic') {
                console.log("hi topic");
            }
            else if (url == '/add') {

            }




            initialState.topics = "test";
            store = Redux.createStore(reducer, initialState);
            res.send(makeHtml(store, renderProps));
        } else {
            res.status(404).send('Not Found');
        }
    });
});


router.post('/topic', function(req, res) {
    console.log("post!!!");
});

module.exports = router;
