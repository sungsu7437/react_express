var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;

var express = require('express');
var router = express.Router();

var host = 'localhost';
var port = 27017;
var dbName = 'test';
var collectionName = 'test_insert';

var MongoDB = require('../data/mongo').MongoDB;
var db_topic = new MongoDB(dbName, host, port, collectionName);

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

function reducer(state) { return state; }

router.get('*', loggedIn, function(req, res) {
    var props = { title: 'Universal React',
        id: '',
        topic: '',
        user:req.user
    };

    function makeHtml(renderProps) {
        var html = ReactDOMServer.renderToString(
            <ReactRouter.RouterContext {...renderProps}
                                       createElement={function(Component, renderProps) {
                                           return <Component {...renderProps} custom={props} />;
                                       }}
            />
        );
        return html;
    }

    ReactRouter.match({
        routes: require('./topic_routes.jsx'),
        location: req.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            url = req.url;

            db_topic.findAll(function (err, topics) {
                if (err || !topics) {
                    res.status(500);
                }
                else {
                    props.topics = topics;

                    var id = req.params[0].split('/').pop();
                    if(id && id != "topic") {
                        db_topic.findById(id, function (err, topic) {
                            if (err || !topic) {
                                res.status(500);
                            }
                            else {
                                props.topic = topic;
                                res.send(makeHtml(renderProps));
                            }
                        })
                    }
                    else {
                        res.send(makeHtml(renderProps));
                    }
                }
            })
        } else {
            res.status(404).send('Not Found');
        }
    });
});


router.post('/topic', loggedIn, function (req, res, next) {
    var text = {
        class:"topic",
        title:req.body.title,
        description:req.body.description,
        author:req.user
    };

    db_topic.save(text, function (err, result) {
            if (err || !result) {
                res.status(500);
            }
            else {
                res.redirect('/topic/' +result["_id"]);
            }
        }
    );
});


router.post('/topic/delete/:id', loggedIn, function (req, res, next) {
    var id = req.params.id;
    console.log("hi delete post");
    console.log(req.body);

    if (req.user != req.body.author) {
        res.redirect('/topic');
    } else {
        db_topic.delete(id, function (err, result) {
            if (err || !result) {
                res.status(500);
            }
            else {
                res.redirect('/topic');
            }
        });
    }
});

module.exports = router;
