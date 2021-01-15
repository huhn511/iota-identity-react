import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as identity from "iota-identity-wasm-test/web/";

(async () => {
  await identity.init()
  let keyPair = identity.Key.generateEd25519();
  console.log("keyPair", keyPair);
  let did = new identity.DID(keyPair);
  console.log("did", did);
})();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
