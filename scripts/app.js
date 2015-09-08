var VideoList = React.createClass({
    loadVideosFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                console.log("THE DATA, BRUH")
                console.log(data)
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString())
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadVideosFromServer();
    },
    render: function() {
        console.log(this.state.data)
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
