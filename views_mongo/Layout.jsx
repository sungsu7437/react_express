var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    displayName: 'Layout',
    _handleClick: function() {
        alert();
    },
    render: function() {
        var custom = this.props.custom;
        var id = this.props.params.id;
        console.log("author =" + custom.topic.author);
        console.log("user =" + custom.user);
        // console.log(custom);
        return (
            <html>
            <head>
                <title>{custom.title}</title>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
            <h1>{custom.title}</h1>
            {this.props.children}
            <ul>
                <li>
                    <Link to='/topic'>Home</Link>
                </li>
                <li>
                    <Link to={"/topic/add/"+id}>Add</Link>
                </li>
            </ul>
            <div>{id ?
                <div>{(custom.user == custom.topic.author) ?
                    <ul>
                        <li>
                            <Link to={"/topic/edit/"+id}>Edit</Link>
                        </li>
                        <li>
                            <Link to={"/topic/delete/"+id}>Delete</Link>
                        </li>
                    </ul>:
                    <div></div>
                }</div>:
                <div></div>}
            </div>

            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(custom)
            }} />
            <script src='/bundle.js' />
            </body>
            </html>
        );
    }
});

// var React = require('react');
// var Link = require('react-router').Link;
// var connect =require('react-redux').connect;
//
// var Layout = React.createClass({
//     _handleClick: function () {
//         alert();
//     },
//
//     render: function () {
//         var custom = this.props.custom;
//         custom.title = "HI!!!!!!!!";
//         custom.id = true;
//         return (
//             <html>
//             <head>
//                 <title>{custom.title}</title>
//                 <link rel="stylesheet" href="/stylesheets/style.css" />
//             </head>
//             <body>
//             <h1>{custom.title}</h1>
//             <p>Isn't server-side rendering remarkable?</p>
//             <button onClick={this._handleClick}>Click Me</button>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/topic">Topic</Link>
//                 </li>
//
//                 {this.props.children}
//                 <div>{custom.id ? <div>{custom.test} hi!!!</div>:
//                     <ul>
//                         <li>
//                             <Link to="/add" params={custom.title}>Add</Link>
//                         </li>
//                         <li>
//                             <Link to="/edit" params={custom.title}>Edit</Link>
//                         </li>
//                         <li>
//                             <Link to="/delete" params={custom.title}>Delete</Link>
//                         </li>
//                     </ul>}
//                 </div>
//             </ul>
//             <script dangerouslySetInnerHTML={{
//                 __html: 'window.PROPS=' + JSON.stringify(custom)
//             }} />
//             <script src="/bundle.js" />
//             </body>
//             </html>
//
//         )
//     }
// });
//
// var wrapper = connect(
//     function (state) {
//         return { custom: state};
//     }
// );
//
// module.exports = wrapper(Layout);
