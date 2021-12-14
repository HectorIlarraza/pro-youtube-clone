// React & React Routing-Dom
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// CSS
import "./Sidebar.css";

// Component
import SidebarRow from './SidebarRow';

// Material Icons
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import GroupsSharpIcon from '@material-ui/icons/GroupSharp';
import HdrOffSharpIcon from "@material-ui/icons/HdrOffSharp";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Link to="/">
                    <SidebarRow selected Icon={HomeIcon} title="Home" />
                </Link>
                <Link to="/about">
                    <SidebarRow Icon={GroupsSharpIcon} title="About Us" />
                </Link>
                <a href='https://youtube-clone-34abc4.netlify.app/'>
                    <SidebarRow Icon={HdrOffSharpIcon} title="MVP" />
                </a>
                <SidebarRow Icon={WhatshotIcon} title="Trending (Coming soon)" />
                <SidebarRow Icon={SubscriptionsIcon} title="Subscription (Coming soon)" />
                <hr />
                <SidebarRow Icon={VideoLibraryIcon} title="Library (Coming soon)" />
                <SidebarRow Icon={HistoryIcon} title="History (Coming soon)" />
                <SidebarRow Icon={OndemandVideoIcon} title="Your videos (Coming soon)" />
                <SidebarRow Icon={WatchLaterIcon} title="Watch Later (Coming soon)" />
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos (Coming soon)" />
                <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more (Coming soon)" />
                <hr />
            </div>
        )
    }
}
