import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <Link className="link" to="/">
      <img className="topLogo" src={"logo.png"} alt="logo" />
      </Link>
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" id="listItemFirst">
            <Link className="link" to="/">
              {" "}
              HOME
            </Link>
          </li>
          <li className="topListItem" id="listItemThird">
            <Link className="link" to="/about">
              {" "}
              ABOUT US
            </Link>
          </li>
          <li className="topListItem" id="listItemSecond">
            <Link className="link" to="/inventory">
              {" "}
              INVENTORY
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          user.profilePic ? (
            <Link to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <Link to="/settings">
              <img
                className="topImg"
                src={require("../../assets/img/defaultProfilePic.jpg")}
                alt=""
              />
            </Link>
          )
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/signin">
                SIGN IN
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;