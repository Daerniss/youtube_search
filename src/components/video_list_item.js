import React from 'react';

const VideoListItem = ({ video, handlerVideoSelect }) => {
  // const video = props.video;
  const imageUrl = video.thumbnails.default.url;

  return (
    <li onClick={() => handlerVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="video thumbnail" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
