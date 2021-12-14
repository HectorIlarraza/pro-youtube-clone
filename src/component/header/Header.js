import React, { Component } from 'react';
import "../header/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

export default class Header extends Component {

    handleData = (e) => {
        e.preventDefault();
        this.props.handleSubmit();
    }

    render() {
        const { userInput } = this.props;
        return (
            <div className="header">
                <div className="header__left">
                    <MenuIcon />
                    <Link to="/">
                        <img 
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        alt=""
                        onClick={this.props.handleReset}
                        />
                    </Link>
                </div>

                <form className="header__input" onSubmit={this.handleData}>
                    <input 
                    onChange={this.props.handleSearchValue} 
                    value={userInput} 
                    placeholder="Search" 
                    type="text" 
                    />
                    <Link to={`/search/${userInput}`}>
                        <button type="submit">
                            <SearchIcon className="header__inputButton" />
                        </button>
                    </Link>
                </form>

                <div className="header__icons">
                    <VideoIcon className="header__icon" />
                    <AppsIcon className="header__icon"/>
                    <NotificationsIcon />
                    <Avatar 
                    alt="Hector Ilarraza"
                    src="https://yt3.ggpht.com/yti/APfAmoFOpw32pS6zh1w-1O2n0BnICLLPN0Xr4WoSCVr_=s88-c-k-c0x00ffffff-no-rj-mo"
                    />
                </div>
            </div>
        )
    }
}
