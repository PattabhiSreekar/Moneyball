import React, { useState } from "react";


const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );
  
  const Facebook = props => (
    <a href="www.facebook.com" id="facebookIcon"></a>
  );
  
  const Twitter = props => (
    <a href="www.twitter.com" id="twitterIcon"></a>
  );
  
  const Google = props => (
    <a href="www.google.com" id="googleIcon"></a>
  );

  export default OtherMethods;