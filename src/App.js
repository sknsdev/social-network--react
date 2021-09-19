/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import React from "react";
import Header from "./components/HeaderFolder/Header";
import Navbar from "./components/NavbarFolder/Navbar";
import MainContent from "./components/Main__contentFolder/Main__content";
import Messages__content from "./components/Messages__contentFolder/Messages__content"
import { BrowserRouter, Route } from "react-router-dom";






const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="current-content">

      <Route path='/profile' render={ () => <MainContent Profile__Posts={props.state.Profile__Posts} addPost={props.addPost}/>  }/>
      <Route path='/messages' render = { () => <Messages__content messages__storage={props.state.messagePage.messages__storage} Message__author__storage={props.state.messagePage.Message__author__storage}/> }/>

      {/* <Route path="/music" component="music__content"/>
      <Route path="/settings" component="settings__content"/>
      <Route path="/groups" component="groups__content"/> */}
      </div>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
