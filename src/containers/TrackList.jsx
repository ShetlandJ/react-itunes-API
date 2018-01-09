import React from 'react';
import TrackListItem from './TrackListItem'

class TrackList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/us/rss/topalbums/limit=10/genre=1006/json';
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({ tracks: data.feed.entry });
      };
    });
    request.send();
  }



  render() {

    return(
      <div className="track-listing">

        <TrackListItem tracks={this.state.tracks} />

      </div>
    )
  }
}

export default TrackList;
