import React from 'react';
import "./Storycard.css";

const Storycard = ({user}) => {
  return (
    <div className="storyCard">
    <div className="overlay"></div>
    <img src={user.profilePicture} alt="" className="storyProfile" />
    <img src={user.profilePicture} alt="" className="storybackground" />
    <div className="text">{user.username}</div>
  </div>
);
};
export default Storycard;