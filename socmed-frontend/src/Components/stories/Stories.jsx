import React from 'react'
import "./Stories.css";
import { Users } from "../../data/data";
import Storycard from "../storycard/Storycard";

const Stories = () => {
  return (
    <div className="stories">
    <div className="storyCard">
      <div className="overlay"></div>
      <img src="./assets/person/user.jpg" alt="" className="storyProfile" />
      <img
        src="./assets/person/user.jpg"
        alt=""
        className="storybackground"
      />
      <img src="./assets/person/upload.png" alt="" className="storyadd" />
      <div className="text">Amber</div>
    </div>

    {Users.map((u) => (
      <Storycard key={u.id} user={u} />
    ))}
  </div>
);
};


export default Stories;