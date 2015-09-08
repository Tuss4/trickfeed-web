function generateVideoFrame(vUrl) {
    return "http://www.youtube.com/embed/"+vUrl+"?enablejsapi=1";
}

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
                    var embedUrl = generateVideoFrame(video.video_id);
                    return (
                        <li key={video.id}>
                        <iframe type="text/html" width="640" height="390" src={embedUrl} frameborder="0"></iframe>
                            <br />
                            <a href={video.video_url} target="_blank">{video.title}</a>
                        </li>
                    );
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
