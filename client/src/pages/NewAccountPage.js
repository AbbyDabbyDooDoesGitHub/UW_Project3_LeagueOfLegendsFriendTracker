import React from 'react'
// import Auth from '../utils/auth';

// import Header from '../components/Header';
// import Banner from '../components/Banner';
// import SignInModal from '../components/SignInModal';
// import NewAccountModal from '../components/NewAccountModal';
import Footer from '../components/Footer';
import PlatformDropdown from '../components/PlatformDropdown';

export default function NewAccountPage() {
  return (

    <React.Fragment>

        <div id="container-div">


{/* 
            <Header /> */}

            

            {/* <!-- ADD A FRIEND PAGE CONTENT DIV --> */}
            <div id="addFriend-contentDiv">

                <div id="addFriend-marginDiv-left">

                <img class="addFriend-marginImg" id="addFriend-marginImg-left" src="../img/icons/22.png" alt="Banner image" />

                </div>



                <div id="addFriend-centerDiv">

                {/* <!-- ADD FRIEND HEADER --> */}
                <div id="addFriend-header">

                    <a id="addFriend-cancelLink" href="./friendlistHome.html">Return to My Friendslist</a>

                    <h3>Add a Friend</h3>

                </div>



                    <div id="addFriend-form">

                        <div id="addFriend-form-contentDiv">

                            <div class="row">
                                <form class="col s12">
                                    <div class="row">

                                        <div class="input-field col s12">

                                            <img class="addFriend-prefixIcons" src="../img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />

                                            <label class="addFriend-mainText">
                                                Do you know this person in real life? 
                                            </label>

                                            <div class="switch" id="addFriend-switchDiv">

                                                <label id="friendIRL-switchLabel">
                                                    NO
                                                    <input type="checkbox"/>
                                                    <span class="lever"></span>
                                                    YES
                                                </label>

                                            </div>

                                        </div>



                                        <div class="input-field col s12">

                                            <img class="addFriend-prefixIcons" src="../img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />

                                            <label class="addFriend-mainText">

                                                Select the Platform Name for this Friend:

                                                <a class='dropdown-trigger selectedDropdown' href='#' data-target='addFriend-platformDropdown'>
                                                Select Platform Here
                                                </a>

                                            </label>
                                        </div>

                                        <PlatformDropdown />

                                        <div class="input-field col s12 addFriend-textarea-div">
                                        
                                            <img class="addFriend-prefixIcons" src="../img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                                        
                                            <textarea class="materialize-textarea" id="addFriend-textarea-1"></textarea>
                                        
                                            <label for="icon_prefix2" class="addFriend-mainText">Friend's Username</label>

                                        </div>

                                        <div class="input-field col s12 addFriend-textarea-div">
                                        
                                            <img class="addFriend-prefixIcons" src="../img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
                                        
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

                    <img class="addFriend-marginImg" id="addFriend-marginImg-right" src="../img/icons/12.png" alt="Banner image" />

                </div>



            </div>



            <Footer />



        </div>


    </React.Fragment>

  )

}

// TO DO: 
// convert to modal













        // <div id="container-div">
            
        //     <div class="modal-content">
        //         <h4>Create a New Account</h4>

        //         <div class="linkToOtherModal-div">
        //             <p>Already have an Account?</p> 
        //             <a class="modal-trigger modal-close" href="#sign-in-modal">Click here to Sign In</a>
        //         </div>

        //         <div class="row">
        //             <form class="col s12">
        //                 <div class="row">
        //                     <div class="input-field col s12">
        //                         <img class="material-icons prefix" src="/client/public/img/icons/noun-user-4869878--dkPurple.png" alt="user icon" />
        //                         <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
        //                         <label for="icon_prefix2">Username</label>
        //                     </div>

        //                     <div class="input-field col s12">
        //                         <img class="material-icons prefix" src="/client/public/img/icons/noun-message-4869933--dkPurple.png" alt="email icon" />
        //                         <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
        //                         <label for="icon_prefix2">Email</label>
        //                     </div>

        //                     <div class="input-field col s12">
        //                         <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
        //                         <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
        //                         <label for="icon_prefix2">Password</label>
        //                     </div>
                            
        //                     <div class="input-field col s12">
        //                         <img class="material-icons prefix" src="/client/public/img/icons/noun-lock-4969686--dkPurple.png" alt="lock and key icon" />
        //                         <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
        //                         <label for="icon_prefix2">Re-Enter Password</label>
        //                     </div>

        //                 </div>
        //             </form>
        //         </div>
        //     </div>

        //     <div class="modal-footer">
        //         <div class="modal-footer-linksDiv">
        //             <a href="#!" class="modal-close waves-effect btn-flat modal-footer-cancel">CANCEL</a>
        //             <a href="#!" class="modal-close waves-effect btn-flat">Create Account & Sign In</a>
        //         </div>
        //     </div>

        // </div>

        // <Footer /> 
