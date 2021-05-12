import React from "react";
import "./VideosRow.css";
const VideosRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videosRow">
      <div className="videosRow__img">
        <img src={image} alt={channel} />
      </div>
      <div className="videoRow__info">
        <h3>{title}</h3>
        <p className="videoRow__infoDetail">
          {channel} - <span>{subs}</span> - {views} - {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideosRow;
