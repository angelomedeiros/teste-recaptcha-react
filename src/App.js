import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Recaptcha  from 'react-recaptcha'

// site key
const sitekey = '6Lfhd2IUAAAAAAhJs9NDeUKzUl7_eKJMRZ8YxmNV';

// specifying your onload callback function
const callback = () => {
  console.log('Done!!!!');
};

const verifyCallback = (response) => {
  console.log(response);
};

const expiredCallback = () => {
  console.log(`Recaptcha expired`);
};

// define a variable to store the recaptcha instance
let recaptchaInstance;

// handle reset
const resetRecaptcha = () => {
  recaptchaInstance.reset();
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
        <div style={{
          textAlign: '-webkit-center'
        }}>
          <h1>Google Recaptcha</h1>
          <Recaptcha
            ref={e => recaptchaInstance = e}
            sitekey={sitekey}
            size="compact"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={callback}
            expiredCallback={expiredCallback}
          />
          <br/>
          <button
            onClick={resetRecaptcha}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
