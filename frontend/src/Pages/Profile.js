import React, { useState } from 'react';
import './Profile.css';
import img1 from './profile-picture.png';
import TopBar from '../Components/TopBar';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import Icon from './Icon';
import TxtField from './TxtField';


export default function Profile() {
    return (
        <>
            <TopBar></TopBar>
            <br></br> <br></br>
            <div class="logo">LOGO</div>
            <div class="container">
                <div id="top">
                    <div id="topleft">
                        <img class="profile-pic" src={img1} alt="Profile Picture"/>
                        <p>(put username here if we want)</p>
                    </div>
                    <div id="topright">
                        <div><Icon/></div>
                        <div><TxtField/></div> <br></br>
                        <p>EMAIL: ***oll@gmail.com</p>
                        <p>PASSWORD: ***********e*</p>
                    </div>
                </div>
                <div id="demo-container">
                    <StyledEngineProvider injectFirst> 
                        <p>BIRTHDAY:</p>
                        <div className="demo-wrapper">
                            <Demo />
                        </div>
                    </StyledEngineProvider>
                </div>
                <div id="bottom">
                    <p>BIO:</p>
                    <div id="bio">
                        <p>I was born on a cloud in the sky, I'm shy but I'm friendly and always willing to make new friends</p>
                    </div>
                </div>
            </div>
 
        </>
    )
}


