import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src = {profile_pic_name}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Jessica Ike</div>
                <div className="brief_description">
                  Hello! My name is Jessica Ike, I am a Junior at the University of Houston studying Computer Science.
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}