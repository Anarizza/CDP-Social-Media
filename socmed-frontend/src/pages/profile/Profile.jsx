import React from 'react'
import NavBar from "../../Components/navbar/NavBar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="home">
      <NavBar />
      <div class="top-2">
        <div class="cover-photo">
          <img src="data:image/jpeg;base64,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" alt="" width="100" height="100"/>
        </div>
        <div class="profile">
          <img src="/assets/person/user.jpg" alt=""/>
          <div class="name">
            Amber Logan
          </div>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="photos">Photos</a></li>
          <li><a href="videos">Videos</a></li>
          <li><a href="likes">Likes</a></li>
        </ul>
      </div>
      <div class="doublecol">
        <div class="main">
          <h2>Basic Info</h2>
          <div class="card">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>Amber Logan</td>
                </tr>
                <tr>
                  <td>Birthday</td>
                  <td>:</td>
                  <td>January 1, 1999</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>:</td>
                  <td>Female</td>
                </tr>
                <tr>
                  <td>Relationship</td>
                  <td>:</td>
                  <td>Single</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>amberlogan@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>+4 123 456 789</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Melwood Str. 72 Liverpool</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>:</td>
                  <td>United Kingdom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Friends</h2>
          <div class="card">
            <div class="friends"> 
            </div>
          </div>
        </div>
        <div class="main-2">
          <h2>Posts</h2>
          <div class="card-2">
            <table>
              <tbody>
              </tbody>
            </table>     
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
