var React = require('react');
var Link = require('react-router').Link;
module.exports = React.createClass({
    displayName: 'Topic',
    render: function () {
        var custom = this.props.custom;

        var topics = custom.topics.map(function (topic, index) {
            _id = encodeURIComponent(topic._id);
            return <li key={ index }> <Link href={"/topic/" + _id}>{topic.title} </Link> </li>
        });
        return (
            <div>
                {topics}

                {this.props.children}

            </div>

        )
    }
});