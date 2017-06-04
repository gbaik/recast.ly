class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
    };

  }  

  handleVideoListEntryClick(event) {
    this.setState({
      video: event
    });
  }

  handleVideoTextEntry(event) {
    var callAPI = {
      key: window.YOUTUBE_API_KEY,
      query: event.target.value,
      max: 5
    };
    var video = searchYouTube(callAPI, (data) => {
      this.setState({
        videos: data,
        video: data[0]
      });
    });
  }

  render() {
    return (  
      <div>
        <Nav onVideoTextEntry={this.handleVideoTextEntry.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onVideoListEntryClick={this.handleVideoListEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }


} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
