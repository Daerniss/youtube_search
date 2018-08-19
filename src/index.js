import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import './style/style.css';
// src\style\style.css

const API_KEY = 'AIzaSyDk3Tn5S1qlR9yBHkeVliV85oo3mjDQ3HU';
const opts = {
  maxResults: 15,
  // type: "video",
  key: API_KEY,
  part: 'snippet'
  // videoEmbeddable: 'true'
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('pewdiepie');
  }

  videoSearch(term) {
    YTSearch(term, opts, (err, videos) => {
      if(err) return console.log(err);

      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(this.state.videos);
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300 );

    return(
      <div className="container">
          <SearchBar handlerSearchTermChange={videoSearch}/>
          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              handlerVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
              />
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
