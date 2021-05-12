import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
const Header = () => {
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState(false);
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        setUserName(res.user);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Tìm kiếm"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {input ? (
          <Link to={`/search/${input}`}>
            <SearchIcon className="header__inputBtn" />
          </Link>
        ) : (
          <>
            <SearchIcon className="header__inputBtn" />
          </>
        )}
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        {userName ? (
          <>
            <Avatar
              alt="avatar"
              src="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            />
          </>
        ) : (
          <>
            <Button variant="contained" color="secondary" onClick={handleAuth}>
              LOG IN
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
