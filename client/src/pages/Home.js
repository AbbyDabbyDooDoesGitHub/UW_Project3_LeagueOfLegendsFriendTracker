import React from 'react'

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function home() {
  return (
    <React.Fragment>

        <div id="container-div">

            <div id="all-non-footer-content-div">

                <Header />

                <Banner />



                <!-- MODAL FOR SIGN IN -->
                <div id="sign-in-modal" class="modal">
                    <div class="modal-content">
                    <h4>Sign into Existing Account</h4>

                    <div class="linkToOtherModal-div">
                        <p>No account yet?</p> 
                        <a class="modal-trigger modal-close" href="#account-creation-modal">Click here to Create an Account</a>
                    </div>

                    <div class="row">
                        <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Username</label>
                            </div>

                            <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Password</label>
                            </div>

                        </div>
                        </form>
                    </div>
                    </div>

                    <div class="modal-footer">
                    <div class="modal-footer-linksDiv">
                        <a href="#!" class="modal-close waves-effect btn-flat modal-footer-cancel">CANCEL</a>
                        <a href="#!" class="modal-close waves-effect btn-flat">Sign In</a>
                    </div>
                    </div>
                </div>



                <!-- MODAL FOR ACCOUNT CREATION -->
                <div id="account-creation-modal" class="modal">
                    <div class="modal-content">
                    <h4>Create a New Account</h4>

                    <div class="linkToOtherModal-div">
                        <p>Already have an Account?</p> 
                        <a class="modal-trigger modal-close" href="#sign-in-modal">Click here to Sign In</a>
                    </div>

                    <div class="row">
                        <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Username</label>
                            </div>

                            <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-message-4869933--dkPurple.png" alt="email icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Email</label>
                            </div>

                            <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Password</label>
                            </div>
                            
                            <div class="input-field col s12">
                            <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Re-Enter Password</label>
                            </div>

                        </div>
                        </form>
                    </div>
                    </div>

                    <div class="modal-footer">
                    <div class="modal-footer-linksDiv">
                        <a href="#!" class="modal-close waves-effect btn-flat modal-footer-cancel">CANCEL</a>
                        <a href="#!" class="modal-close waves-effect btn-flat">Create Account & Sign In</a>
                    </div>
                    </div>
                </div>



                <!-- ABOUT US -->
                <div id="aboutUs-div">
                    <div id="aboutUs-div-content">

                    <div id="aboutUs-infoGraphics-heading">
                        <h3 id="aboutUs-infoGraphic-headingText">What is Hawkshot?</h3>

                    </div>

                    <div class="aboutUs-infoGraphics">
                        <img class="aboutUs-infoGraphicImgs" src="/client/public/img/backgrounds/about-icon-layouts_2.png" alt="Banner image" />

                        <div class="aboutUs-infoGraphicText-div">

                        <p class="aboutUs-infoGraphicText">Have you ever logged in to play a game and realized you have no idea who's in your friendslist?</p>

                        </div>
                    </div>

                    <div class="aboutUs-infoGraphics">
                        <img class="aboutUs-infoGraphicImgs" src="/client/public/img/backgrounds/about-icon-layouts_3.png" alt="Banner image" />

                        <div class="aboutUs-infoGraphicText-div">

                        <p class="aboutUs-infoGraphicText">Maybe you took a chance and accepted an invite from a random player you'd friended, just to realize that even in a low-stakes game mode they can't keep a level head?</p>

                        </div>
                    </div>

                    <div class="aboutUs-infoGraphics">
                        <img class="aboutUs-infoGraphicImgs" src="/client/public/img/backgrounds/about-icon-layouts_4.png" alt="Banner image" />

                        <div class="aboutUs-infoGraphicText-div">

                        <p class="aboutUs-infoGraphicText">This is where Hawkshot comes in! Add friends to your Hawkshot friendslist with notes, alternate names, and connected accounts.</p>

                        </div>
                    </div>

                    <div class="aboutUs-infoGraphics">
                        <img class="aboutUs-infoGraphicImgs" src="/client/public/img/backgrounds/about-icon-layouts_6.png" alt="Banner image" />

                        <div class="aboutUs-infoGraphicText-div">

                        <p class="aboutUs-infoGraphicText">Friended someone because of a joke they made? Note it! Someone carried a game and miraculously accepted your friend request? Note it! Never wonder why you friended someone again.</p>

                        </div>
                    </div>

                    <div class="aboutUs-infoGraphics">
                        <img class="aboutUs-infoGraphicImgs" src="/client/public/img/backgrounds/about-icon-layouts_5.png" alt="Banner image" />

                        <div class="aboutUs-infoGraphicText-div">

                        <p class="aboutUs-infoGraphicText">Make informed choices about who you'll enjoy playing with for your desired game mode, or search your friendslist for a needed position to fill for multiplayer modes. Use Hawkshot to reveal your friendlist.</p>

                        </div>
                    </div>

                    <div id="aboutUs-infoGraphics-bottomLinks">

                        <a href="./meet-devs.html">Meet the Devs</a>

                        <a href="./payment.html">Donate</a>

                        <!-- IF NOT LOGGED IN -->
                        <a class="modal-trigger" href="#account-creation-modal">Create Account</a>
                        <a class="modal-trigger" href="#sign-in-modal">Sign In</a>

                        <!-- IF LOGGED IN -->
                        <a class="nav-a" href="./friendlistHome.html">My Friends</a>

                    </div>

                    </div>
                </div>

            </div>



            <Footer />



        </div>



    </React.Fragment>
  )
}
