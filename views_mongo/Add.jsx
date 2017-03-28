var React = require('react');

module.exports = React.createClass({
    displayName: 'About',
    render: function() {
        return (
            <form action="/topic" method="post">
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <input type="description" placeholder="description" />
                </p>
                <p>
                    = "by me"
                </p>
                <p>
                    <input type="submit"/>
                </p>

            </form>
        );
    }
});