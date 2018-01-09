import React from 'react';

class TrackListItem extends React.Component {


  render() {
    const tracks = this.props.tracks.map((track, index) => {
      return <div className="track-list">
        <img alt="" src={track["im:image"][0].label}></img>
        <div className="artist"><p>{track["im:artist"].label}</p></div>
        <div className="album"><p>{track["im:name"].label}</p></div>
    </div>
  });

  return(
    <div className="track-listing">
      {tracks}
    </div>
  )}
}

export default TrackListItem;
