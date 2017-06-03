class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    };

  }  

  handleVideoListEntryClick(event) {
    this.setState({
      video: event
    });
  }

  render() {
    return (  
      <div>
        <Nav />
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

//Initialize the state of App 
//to keep track of all the videos in the video list and the current video in the player.
//Pass this state down as props to its children components. 
//Continue to use the example data.

// Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. 
// Do not add state to any of the functional components.

//this.onVideoListEntryClick.bind(this)