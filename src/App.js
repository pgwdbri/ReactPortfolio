import React from 'react';
//components
import MyNavbar from "./components/mynavbar/mynavbar.component";
import './App.css';
import FooterPanel from './components/mynavbar/myfooter.component';

import MyBody from './components/mybody/mybody.component';

// PORTFOLIO - content

const App = () => {
  return (<div>
    <MyNavbar />

    <MyBody />
    

    <FooterPanel />
    </div>);
}

export default App;
