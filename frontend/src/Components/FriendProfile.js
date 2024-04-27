import React, { Component } from 'react';
import img1 from '../Pages/profile-picture.png';
import "./FriendProfile.css";


export default function FriendProfile({info}) {

    return (
        <>
            <div class="container">
                <div id="top">
                    <div id="topleft">
                        <img class="profile-pic" src={img1} alt="Profile Picture"/>
                        <p>{info.username}</p>
                    </div>
                    <div id="topright">
                        <p>FIRST NAME: {info.fname}</p>
                        <p>LAST NAME: {info.lname}</p>
                        <p>EMAIL: {info.email}</p>
                    </div>
                </div>
                <div id="bottom">
                    <p>BIRTHDAY: <input type="text" value={info.birthday} /></p>
                    <p>BIO:</p>
                    <div id="bio">
                        <p>{info.bio}</p>
                    </div>
                </div>
            </div>
        </>
    )
}