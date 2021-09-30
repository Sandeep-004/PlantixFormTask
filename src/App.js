import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CheckIcon from '@material-ui/icons/Check';

const App = () => {

  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [optional, setOptional] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [userEmail, setUserEmail] = useState(false);
  const [userAdd, setUserAdd] = useState(false);
  const [userZip, setUserZip] = useState(false);

  const handleFullName = (e) => {
    setFullName(e.target.value);

    // ***Validation for FullName***
    let userEmailVal = e.target.value;
    if(userEmailVal.length<7) {
          console.log("Not valid");
          setUserEmail(false);
    } else{
      setUserEmail(true);
    }

  }

  const handleAddress = (e) => {
    setAddress(e.target.value);

       // ***Validation for Address***
    let userAddressVal = e.target.value;
    if(userAddressVal.length<8) {
     setUserAdd(false);
    }else{
    setUserAdd(true);
  }

}

const handleOptional = (e) => {
  setOptional(e.target.value);
}
 
const handleZip = (e) => {
  setZip(e.target.value);

  //***Validation for Zip***
  let zip_Value = e.target.value;
  if(zip_Value.length===6){
    setUserZip(false);
  }else{
    setUserZip(true);
  }
}

const handlePhone = (e) => {
  setPhone(e.target.value);
}
const handleEmail = (e) => {
  setEmail(e.target.value);
}
  return (
    <>
      <form>
        <div className="form-row">
          <div className="form_heading">
             <h2>Bill To</h2> &nbsp;&nbsp;<sub><h4>/Billing Address</h4></sub>
        </div>

     <div className="form-group row">
     
      <label style={userEmail ? {color: "green"} : {color: "initial"}} className="col-md-4 col-form-label" for="inputFullName">FullName</label>
        <div className="col-md-8"> 
          <input style={userEmail ? {border: "4px solid green"} : {border: "initial"}} 
           name="fullname" value={fullname} 
          onChange={handleFullName} type="text" className="form-control"
           id="inputFullName" placeholder="Please Enter your Name" />
           {userEmail ? <span style={{color:"green"}}><CheckIcon  /></span>  : "" }
        </div> 
    </div><br />


    <div className="form-group row">

      <label style={userAdd ? {color: "green"} : {color: "initial"}} className="col-md-4 col-form-label" for="inputAddress">Street Address</label>
        <div className="col-md-8">
          <input style={userAdd ? {border: "4px solid green"} : {border: "initial"}} 
          name="address" value={address} onChange={handleAddress} type="text" 
          className="form-control" id="inputAddress" placeholder="Please Enter your Address" /><br />
          {userAdd ? <span style={{color:"green"}}><CheckIcon style={{marginTop:'-4rem'}}/></span>  : "" }
        </div>
    </div>

  <div className="form-group row">
    <label className="col-md-4 col-form-label" id="optional" for="inputOptional"></label>
      <div className="col-md-8"> 
        <input name="optional" value={optional} onChange={handleOptional} type="text" className="form-control" placeholder="Optional" />
      </div>
  </div><br />


  <div className="form-group row">
    <label id="zipLabel" style={userZip ? {color: "red"} : {color: "initial"}} className="col-md-4 col-form-label" for="inputAddress">Zip Code</label>
      <div className="col-md-8 zipInput">
          <input style={userZip ? {border: "4px solid red"} : {border: "initial"}} 
          name="zip" value={zip} onChange={handleZip} type="text" className="form-control" id="inputZip" placeholder="Please Enter Zip Code" /><br />
          {userZip ? <span style={{color:"red", marginTop:"1rem"}}>Enter Zip for city and state The specified zip is invalid!</span> : ""}
      </div>
  </div><br />


  <div className="form-group row">
      <label className="col-md-4 col-form-label" for="inputPhone">Phone</label>
        <div className="col-md-8">
          <input name="phone" value={phone} onChange={handlePhone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Please Enter Phone Number" className="form-control" id="inputPhone"  />
        </div>
  </div><br />

  <div className="form-group row">
    <label className="col-md-4 col-form-label" for="inputEmail">Email</label>
      <div className="col-md-8">
        <input name="email" value={email} onChange={handleEmail} type="email" placeholder="Please Enter Email" className="form-control" id="inputEmail" />
    </div>
  </div>

{/*     
    <div className="form-group col-md-6">
      <input type="submit" className="form-control" value="Submit" />
    </div> */}
  </div>
</form> 
    </>
  )
}                    

export default App;
