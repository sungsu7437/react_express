var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    displayName: 'Index',

    render: function () {
        var custom = this.props.custom;
        var topic = custom.topic;
        var id = this.props.params.id;

        return (
            <article>
                <h1>"정말 삭제하시겠습니까?"  {topic.title}</h1>

                <form action={"/topic/delete/" + id} method="post">

                    <input type="hidden" name="author" value={topic.author}/>

                    <input type="submit" value="YSE"/>

                    <Link href={"/topic/" + id}> NO </Link>
                </form>

            </article>
        )
    }
});