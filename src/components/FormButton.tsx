import React, { useState } from "react";

const FormButton = (props:any) => (
    <div id="button" className="row">
      <button style={{width : props.width}} onClick={props.onclick}>{props.title}</button>
    </div>
  );


export default FormButton;