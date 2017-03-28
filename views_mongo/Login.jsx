var React = require('react');
var connect =require('react-redux').connect;


module.exports = React.createClass({
    displayName: 'Login',

    render: function () {
        return (
            <p>
                Current: <strong>Login</strong>
            </p>
        )
    }
});

var Login = React.createClass({
    displayName: 'Login',

    render: function () {
        var custom = this.props.custom;

    }
})

var wrapper = connect(
    function (state) {
        return { custom: state};
    }
);

module.exports = wrapper(Login);
