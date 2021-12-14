// React & React Routing-Dom
import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

// CSS
import './App.css';

// Component
import Header from './component/header/Header';
import AboutPage from './component/about/AboutPage';
import Sidebar from "./component/sidebar/Sidebar";
import RecommendedVideos from './component/recommended-videos/RecommendedVideos';
import SearchPage from './component/search/SearchPage';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        videoList: [],
        userInput: "",
    }
  }

  handleSearchValue = (e) => {
    this.setState({
      userInput: e.target.value,
    })
  }

  handleReset = () => {
    this.setState({
      userInput: ""
    });
  }
    
  handleSubmit = () => {
    const { userInput } = this.state;
    if(userInput !== ""){
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        console.log("data", data.items)
        this.setState({
          videoList: data.items,
        })
      });
    }
  }

  render(){
    const { userInput, videoList } = this.state;
    let videoElList = videoList.map((vid) => (
      <Link to={`/videos/${vid.id.videoId}`}>
          <div className='"videoRow'>
              <img
                  key={vid.id.videoId}
                  src={vid.snippet.thumbnails.high.url}
                  alt="video-pic"
              />
              <div className="videoRow__text">
                  <h3>{vid.snippet.title}</h3>
                  <p className="videoRow__headline">
                      {vid.snippet.channelTitle} • {" "}
                      <span className="videoRow__subs">
                          <span className="videoRow__subsNumber">{Math.floor((Math.random() * 1000000) + 1)}</span> Subscribers
                      </span>{" "}
                      {Math.floor((Math.random() * 1000000) + 1)} views • {vid.snippet.thumbnails.publishTime}
                  </p>
                  <p className="videoRow__description">{vid.snippet.description}</p>
              </div>
          </div>   
      </Link>
    ));
    console.log("mapped data",videoElList);
    return (
      <div className="app">
        <Header 
        userInput={userInput} 
        handleSearchValue={this.handleSearchValue}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        />
        <Switch>
          <Route exact path="/about">
            <div className="app__page">
              <Sidebar />
              <AboutPage />
            </div>
          </Route> 
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage 
              videoElList={videoElList} 
              />
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
}