import React from "react";
import Online from "../online/Online";
import "./Rightbarhome.css";
import { Usersonline } from "../../data/data";

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src="/assets/birthdaygifts/gift.png"
          alt=""
          className="birthdayImg"
        />
        <div className="birthdayText">
          <b>Sarah Dane</b> and <b>other friends</b> have a birthday today
        </div>
      </div>
      <br></br>
      <div className="rightbarTitle">Online Friends</div>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};
export default Rightbarhome;
