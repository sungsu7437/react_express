var React = require('react');

module.exports = React.createClass({
    displayName: 'About',
    render: function() {
        return (
            <p>
                Current: <strong>About</strong>
            </p>
        );
    }
});

// var React = require('react');
//
//
// module.exports = React.createClass({
//     displayName: 'About',
//
//     render: function () {
//         return (
//             <form action="/topic" method="post">
//                 <p>
//                     <input type="text" name="title" placeholder="title" />
//                 </p>
//                 <p>
//                     <textarea name="description" placeholder="description"></textarea>
//                 </p>
//                 <p>
//                     <div> test </div>
//                 </p>
//                 <p>
//                     <input type="submit" />
//                 </p>
//             </form>
//         )
//     }
// });