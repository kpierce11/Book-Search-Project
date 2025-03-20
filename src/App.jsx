import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div style={{ padding: '1em' }}>
        <Routes>
          <Route path="/" element={<h2>Home Page / Book List will go here</h2>} />
          <Route path="/books/:id" element={<h2>Book Detail will go here</h2>} />
          <Route path="/add" element={<h2>Add Book Form will go here</h2>} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;