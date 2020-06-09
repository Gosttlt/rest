import React from 'react';
import './App.css';
import Header from './component/Header/header';
import { Route } from 'react-router-dom';
import Main from './component/main/main';
import NavBar from './component/NavBar/NavBar';
import costContainer from './component/Cost/costContainer';


const App = () => {
  return (
    <div className="wrapper">
      <div className="header-wrapper">
      <Header  />
      </div>
      <div className="navBar-wrapper">
      <NavBar />
      </div>
      <div className="app-wrapper-content" >
        <Route exact path ="/" component={Main} />
        <Route path="/cost" component={costContainer} />
        
      </div>
    </div>
  );
}

export default App;
