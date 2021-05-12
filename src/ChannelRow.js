import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { CheckCircleOutlined } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import "./ChannelRow.css";
const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <div className="channelRow__avatarContainer">
        <Avatar alt={channel} src={image} className="channelRow__avatar" />
      </div>
      <div className="channelRow__info">
        <h4>
          {channel} {verified && <CheckCircleOutlined />}
        </h4>
        <p>
          {subs} - {noOfVideos} video
        </p>
        <p>{description}</p>
      </div>
      <div className="channelRow__btnContainer">
        <Button variant="contained" className="channelRow__btn">
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default ChannelRow;
