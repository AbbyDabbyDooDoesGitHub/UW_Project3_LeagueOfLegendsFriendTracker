import React from 'react'

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SignInModal from '../../components/SignInModal';
import NewAccountModal from '../../components/NewAccountModal';
import Footer from '../../components/Footer';

export default function home() {
  return (

    <React.Fragment>

        <div id="container-div">



            <Header />

            

            <!-- ADD A FRIEND PAGE CONTENT DIV -->
            <div id="addFriend-contentDiv">

                <div id="addFriend-marginDiv-left">

                <img class="addFriend-marginImg" id="addFriend-marginImg-left" src="/client/public/img/icons/22.png" alt="Banner image" />

                </div>



                <div id="addFriend-centerDiv">

                <!-- ADD FRIEND HEADER -->
                <div id="addFriend-header">

                    <a id="addFriend-cancelLink" href="./friendlistHome.html">Return to My Friendslist</a>

                    <h3>Add a Friend</h3>

                </div>



                    <!-- ADD A FRIEND FORM -->
                    <div id="addFriend-form">

                        <div id="addFriend-form-contentDiv">

                            <div class="row">
                                <form class="col s12">
                                    <div class="row">

                                        <div class="input-field col s12">

                                            <img class="addFriend-prefixIcons" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />

                                            <!-- ~~~~~~~~~~~ NEEDS TO BE ADDED TO MODEL ~~~~~~~~~~~ -->
                                            <label class="addFriend-mainText">
                                                Do you know this person in real life? 
                                            </label>

                                            <!-- Switch -->
                                            <div class="switch" id="addFriend-switchDiv">

                                                <label id="friendIRL-switchLabel">
                                                    NO
                                                    <input type="checkbox">
                                                    <span class="lever"></span>
                                                    YES
                                                </label>

                                            </div>

                                        </div>



                                        <div class="input-field col s12">

                                            <img class="addFriend-prefixIcons" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />

                                            <!-- ~~~~~~~~~~~ NEEDS TO BE ADDED TO MODEL ~~~~~~~~~~~ -->
                                            <label class="addFriend-mainText">

                                                Select the Platform Name for this Friend:

                                                <!-- add selectedDropdown class to the below link after option selected -->

                                                <a class='dropdown-trigger selectedDropdown' href='#' data-target='addFriend-platformDropdown'>
                                                Select Platform Here
                                                </a>

                                            </label>
                                        </div>

                                        <!-- Dropdown Structure -->
                                        <ul id='addFriend-platformDropdown' class='dropdown-content'>

                                            <li><a href="#!">Supported Platform 1</a></li>

                                            <li class="divider" tabindex="-1"></li>

                                            <li><a href="#!">Supported Platform 2</a></li>

                                            <li class="divider" tabindex="-1"></li>

                                            <!-- <li><a href="#!">Supported Platform 3</a></li>

                                            <li class="divider" tabindex="-1"></li> -->

                                        </ul>

                                        <div class="input-field col s12 addFriend-textarea-div">
                                        
                                            <img class="addFriend-prefixIcons" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                                        
                                            <textarea class="materialize-textarea" id="addFriend-textarea-1"></textarea>
                                        
                                            <label for="icon_prefix2" class="addFriend-mainText">Friend's Username</label>

                                        </div>

                                        <div class="input-field col s12 addFriend-textarea-div">
                                        
                                            <img class="addFriend-prefixIcons" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                                        
                                            <textarea class="materialize-textarea" id="addFriend-textarea-2"></textarea>
                                        
                                            <label for="icon_prefix2" class="addFriend-mainText">Notes</label>
                                        
                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>



                    <div id="addFriend-footer">

                        <a id="addFriend-saveLink" href="./friendlistHome.html">SAVE</a>

                    </div>

                </div>



                <div id="addFriend-marginDiv-right">

                    <img class="addFriend-marginImg" id="addFriend-marginImg-right" src="/client/public/img/icons/12.png" alt="Banner image" />

                </div>



            </div>



            <Footer />



        </div>


    </React.Fragment>

  )

}
