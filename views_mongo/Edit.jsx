var React = require('react');

module.exports = React.createClass({
    displayName: 'Edit',
    render: function() {
        var custom = this.props.custom;
        var topic = custom.topic;
        var author = custom.author;
        return (
            <form action="/topic" method="post">
                <p>
                    <input type="text" name="title" placeholder="title" value={topic.title}/>
                </p>
                <p>
                    <textarea type="text" name="description" placeholder="description" value={topic.description}/>
                </p>
                <p>
                    = "by me" + {author}
                </p>
                <p>
                    <input type="submit"/>
                </p>

            </form>
        );
    }
});