import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/header';
import { Route } from 'react-router-dom';
import Main from './component/main/main';
import NavBar from './component/NavBar/NavBar';
import Cost from './component/Cost/Cost';


const App = () => {

  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper">
      <div className={scroll > 300 ? 'header-wrapper' + ' ' + 'headerScroll' : 'header-wrapper'}>
        <Header />
      </div>
      <div className={scroll > 300 ? 'navBar-wrapper' + ' ' + 'navBarScroll' : 'navBar-wrapper'} >
        <NavBar />
      </div>
      <div className={scroll > 300 ? 'app-wrapper-content' + ' ' + 'contentScroll' : 'app-wrapper-content'} >
        <Route exact path="/" component={Main} />
        <Route path="/cost" component={Cost} />

      </div>
    </div>
  );
}

export default App;
