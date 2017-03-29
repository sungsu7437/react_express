var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

function reducer(state) { return state; }


router.get('*', function(req, res) {
    var props = { title: 'Universal React'};


    ReactRouter.match({
        routes: require('./topic_routes.jsx'),
        location: req.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps}
                    creatElement={function(Component, renderProps) {
                        return <Component {...renderProps} custom={props} />;
                    }}
                />
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
