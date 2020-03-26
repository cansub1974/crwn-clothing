import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'

const HatPages = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatPages}/>
     </switch>
    </div>
  );
}

export default App;
