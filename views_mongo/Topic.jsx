var React = require('react');
var connect =require('react-redux').connect;


var Topic = React.createClass({
    displayName: 'Topic',
    render: function () {
        var custom = this.props.custom;

        return (
            <ul>
                <p>
                    Title: <strong>{custom.title.description}</strong>
                </p>
            </ul>


        )
    }
});

var wrapper = connect(
    function (state) {
        return { custom: state};
    }
);

module.exports = wrapper(Topic);
