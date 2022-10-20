
import React from 'react';

import Nav from './components/Nav';
import About  from './components/About';
// Remove the starter JSX
// lets add our own component to the App component 
function App() {
return (
  <div>
    <Nav/>
    <main>
      <About/>
    </main>
  </div>
);
  
}

export default App;
