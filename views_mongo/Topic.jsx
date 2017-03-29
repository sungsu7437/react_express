var React = require('react');

module.exports = React.createClass({
    displayName: 'About',
    render: function() {
        var custom = this.props.custom;
        var topic = custom.topic;
        return (
            <div>
                <h2>{topic.title}</h2>
                <div>{topic.description}</div>
                by {topic.author}
            </div>

        );
    }
});