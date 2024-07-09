import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import Tampilan1 from './Tampilan1';
import Tampilan2 from './Tampilan2';
import Tentangkami from './Tentangkami';
import Team from './Team';
import Upload from './Upload';
import Informasi2 from './Informasi2';
function App() {
  return (
    <div className="App">
      <NavMenu />
      <Tampilan1 />
      <Tampilan2 />
      <Tentangkami />
      <Team />
      <Upload />
      <Informasi2/>
    </div>
  );
}

export default App;
