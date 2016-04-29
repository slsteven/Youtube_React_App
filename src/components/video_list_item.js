import React from 'react';

  // instead of passing props and doing const video = props.video, shorthand "video"
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  console.log("video", video)
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-item">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
