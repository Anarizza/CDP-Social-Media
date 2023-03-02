import React from "react";
import "./Rightbarhome.css";
import { Link } from "@mui/material";
const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayText">
        <b>SPONSORED</b>
        <br></br>
        <b>
          Seven Seven Global Services have been recognized as one of the top
          employers in the 🇵🇭🎉
        </b>
        <br></br>A workplace should be more than just a job. It should be an
        environment of support and innovation. 😎 So what are you waiting for?
        Come join us today!
        <br></br>
        <br></br>
        <b>Apply Now!! Click here to join:</b>
        <Link href={`https://bit.ly/3o3zsjl`}> https://bit.ly/3o3zsjl </Link> or
        send your CV at apply@77soft.com
      </div>
      <div className="birthdayContainer">
        <img src="../assets/sevenaward.jpg" alt="" className="birthdayImg" />
      </div>
      <br></br>
      <br></br>
      <div className="rightbarTitle">
        <b>TRENDS FOR YOU</b>
      </div>

      <ul className="rightbarFriendList">
        <b>REACTJS</b>
        <p>#11k shares</p>
        <b>CareerDevelopmentProgram</b>
        <p>#7k shares</p>
        <b>Java</b>
        <p>#2k shares</p>
        <b>Revalida</b>
        <p>#99k shares</p>
        <b>Batch4</b>
        <p>#4k shares</p>

        {/* {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))} */}
      </ul>
    </div>
  );
};
export default Rightbarhome;
