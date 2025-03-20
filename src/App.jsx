import { useState } from 'react';
import NavMenu from './components/NavMenu.jsx';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div style={{ padding: '1em' }}>
        <h1>Book Search App</h1>
        <p>Content will go here</p>
      </div>
    </div>
  );
}

export default App;