var VideoList = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.get(this.props.url, function(result) {
            console.log("The Results", result)
            var videos = result.results;
            if (this.isMounted()) {
                this.setState({
                    data: videos
                });
            }
        }.bind(this));

    },
    render: function() {
        return (
            <div className="videoList">
            <ul>
                {this.state.data.map(function(video) {
                    return <li><a href={video.video_url}>{video.title}</a></li>;
                })}
            </ul>
            </div>
        );
    }
});
React.render(
    <VideoList url="http://localhost:5000/v1/videos" />,
    document.getElementById('content')
);
