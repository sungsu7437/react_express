var React = require('react');

module.exports = React.createClass({
    displayName: 'ADD',
    render: function() {
        return (
            <form action="/topic" method="post">
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea type="text" name="description" placeholder="description" />
                </p>
                <p>
                    by you
                </p>
                <p>
                    <input type="submit"/>
                </p>

            </form>
        );
    }
});