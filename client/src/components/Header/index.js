import React from 'react';
// import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header>
        <nav>
            <div id="navBar-div">
                <ul class="left" id="navBar-titleDiv">

                <li><img id="navBar-logo" src="../../public/img/hawkshot-logos/HawkshotLogo-FULL-NoBackground.png" alt="Hawkshot Logo"/></li>

                <li><h1 id="navBar-subtitle">Reveal Your Friendlist</h1></li>

                </ul>

                <ul class="right" id="navBar-linksDiv">

                <!-- <li><a class="nav-a" href="./home.html">Home</a></li> -->

                <!-- IF LOGGED IN -->
                <li> <a class="nav-a" href="./friendlistHome.html">My Friends</a></li>

                <li><a class="nav-a" href="./meet-devs.html">Meet the Devs</a></li>

                <li><a class="nav-a" href="./payment.html">Donate</a></li>

                <!-- IF NOT LOGGED IN -->
                <li><a class="nav-a modal-trigger" href="#account-creation-modal">Create Account</a></li>

                <!-- IF LOGGED IN -->
                <!-- <li><button class="btn navBtn" id="navBar-signOut">Sign Out</button></li> -->

                <!-- IF NOT LOGGED IN -->
                <li><button class="btn navBtn modal-trigger" id="navBar-signIn" href="#sign-in-modal">Sign In</button></li>

                </ul>
            </div>
        </nav>
    </header>

  );
};

export default Header;
