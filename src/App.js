import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Recaptcha  from 'react-recaptcha'

// site key
const sitekey = '6LewumIUAAAAACvXZqjjTzVK5XsrLno71ZxlA9CY';

let recaptchaInstance;

// manually trigger reCAPTCHA execution
const executeCaptcha = function () {
  recaptchaInstance.execute();
};

// executed once the captcha has been verified
// can be used to post forms, redirect, etc.
const verifyCallback = function (response) {
  console.log(response);
  document.getElementById("someForm").submit();
};

class App extends Component {  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
           <form id="someForm" action="/search" method="get">
             <input type="text" name="query" />
           </form>
           <button
             onClick={executeCaptcha}
           >
            Submit
           </button>

           <Recaptcha
             ref={e => recaptchaInstance = e}
             sitekey="6LewumIUAAAAACvXZqjjTzVK5XsrLno71ZxlA9CY"
             size="invisible"
             verifyCallback={verifyCallback}
           />
         </div>        
      </div>
    );
  }
}

export default App;
