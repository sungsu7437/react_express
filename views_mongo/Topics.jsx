var React = require('react');
var connect =require('react-redux').connect;

var Topic = React.createClass({
    displayName: 'Topic',
    render: function () {
        var custom = this.props.custom;
        // console.log(custom);
        custom.id = "fuck1";
        custom.topics = "fuck2";
        custom.topic = "fuck3";
        custom.author = "fuck4";
        // console.log(custom);
        // console.log(custom);
        custom.test=[ { _id: 1,
            class: 'topic',
            title: 'ㅅㅅㅅㅅㅅㅅㅅㅈㄷㄱㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅅㅅㅅㅅㅅㅅ',
            description: 'ㅅㅂㅂㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱ\r\n          ',
            author: 'aaa' },
            { _id: 2,
                class: 'topic',
                title: 'ㄻㄴㅇㄻㄴㅇㄹㅂㄱㅂㅈㄷㄱㅂㄷㅈㄱㅂㅈㄷㄱ',
                description: 'ㅋㅋㅋㅋ\r\n          ',
                author: 'aaa' },
            { _id: 3,
                class: 'topic',
                title: '222222222222222',
                description: '2435345345',
                author: 'bbb' } ];

        // console.log(custom);
        // console.log(custom.id);
        var topics = custom.test.map(function (topic, index) {
            _id = encodeURIComponent(topic._id);
            return <li key={ index }> <a href={"/topic/" + _id}>{topic.title} </a> </li>
        });
        return (
            <div>
                hello
                {topics}

                {/*<div>{custom.test ? <div>{custom.test} hi!!!</div>: <div>Never </div>}*/}
                {/*</div>*/}

                {/*<p>*/}
                {/*Title: <strong>{custom.title}</strong>*/}
                {/*</p>*/}
                {this.props.children}

            </div>

        )
    }
});

var wrapper = connect(
    function (state) {
        return { custom: state};
    }
);

module.exports = wrapper(Topic);
