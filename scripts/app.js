// var VideoList = React.createClass({
//     getInitialState: function() {
//         return {data: []};
//     },
//     componentDidMount: function() {
//         $.get(this.props.url, function(result) {
//             console.log("The Results", result)
//             var videos = result.results;
//             if (this.isMounted()) {
//                 this.setState({
//                     data: videos
//                 });
//             }
//         }.bind(this));

//     },
//     render: function() {
//         return (
//             <div className="videoList">
//                 {this.state.data}
//             </div>
//         );
//     }
// });
// React.render(
//     <VideoList url="http://localhost:5000/v1/videos" />,
//     document.getElementById('content')
// );

var url = "http://localhost:5000/v1/videos";
$.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
        console.log(data);
    },
    error: function(xhr, status, err) {
        console.log("The url", url);
        console.log(xhr.statusCode, status, err);
    }
});
