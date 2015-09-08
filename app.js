var VideoList = React.createClass({
    render: function() {
        console.log(this.props.url)
        return (
            <div className="videoList">
                Bruuuuuuuuuuuuuuh
            </div>
        );
    }
});
React.render(
    <VideoList url="http://localhost:5000/v1/videos/" />,
    document.getElementById('content')
);
