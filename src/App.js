import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Sidebar from "./component/sidebar/Sidebar";
import RecommendedVideos from './component/recommended-videos/RecommendedVideos';
import { Switch, Route } from "react-router-dom";
import SearchPage from './component/search/SearchPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
        <Route exact path="/">
          <div className="app__page">
            <Sidebar />
            <RecommendedVideos />
          </div>
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
