import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://wallpaperaccess.com/full/6351022.jpg"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Vishnu Kiran Dabbara </p>
        <p> vishnukiran52@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://wallpaperaccess.com/full/6351022.jpg"
            alt="profile"
          />
          <p className="detail-text"> Vishnu Kiran Dabbara </p>
          <p className="detail-text"> vishnukiran52@gmail.com </p>
          <a href="link"> View Another Website Design </a>
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail">
          <a href="https://github.com/kiranlucky3"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/kiranlucky3/Google_search_portfolio"> View code </a> <span> • </span>
          <Link to="/blog"> Blog & news </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
