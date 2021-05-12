import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
const Sidebar = () => {
  const [active, setActive] = useState("1");
  const [more, setMore] = useState(false);
  const handleClick = (id) => {
    setActive(id);
  };
  const moreClick = () => {
    setMore((more) => !more);
  };
  return (
    <div className="sidebar">
      <SidebarRow
        active={active}
        onClick={handleClick}
        id="1"
        title="Trang chủ">
        <HomeIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow active={active} onClick={handleClick} id="2" title="Khám phá">
        <ExploreIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow
        active={active}
        onClick={handleClick}
        id="3"
        title="Kênh đăng ký">
        <SubscriptionsIcon className="sidebar__icon" />
      </SidebarRow>
      <hr />
      <SidebarRow active={active} onClick={handleClick} id="4" title="Thư viện">
        <VideoLibraryIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow
        active={active}
        onClick={handleClick}
        id="5"
        title="Video đã xem">
        <HistoryIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow
        active={active}
        onClick={handleClick}
        id="6"
        title="Video của bạn">
        <OndemandVideoIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow active={active} onClick={handleClick} id="7" title="Xem sau">
        <WatchLaterIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow
        active={active}
        onClick={handleClick}
        id="8"
        title="Video đã thích">
        <ThumbUpAltIcon className="sidebar__icon" />
      </SidebarRow>
      <SidebarRow
        title="Xem thêm"
        id="9"
        active={active}
        onClick={handleClick}
        moreClick={moreClick}>
        <ExpandMoreOutlinedIcon className="sidebar__icon" />
      </SidebarRow>
      <hr />
      {more && (
        <>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="10"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="11"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="12"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="13"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="14"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="15"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="16"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <SidebarRow
            active={active}
            onClick={handleClick}
            id="17"
            title="Video đã thích">
            <ThumbUpAltIcon className="sidebar__icon" />
          </SidebarRow>
          <hr />
        </>
      )}
    </div>
  );
};

export default Sidebar;
