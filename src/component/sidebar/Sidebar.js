import React, { Component } from 'react';
import SidebarRow from './SidebarRow';
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
import AcUnitSharp from "@material-ui/icons/AcUnitSharp"

import "./Sidebar.css";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SidebarRow selected Icon={HomeIcon} title="Home" />
                <SidebarRow Icon={GroupsSharpIcon} title="Group" />
                <a href='https://youtube-clone-34abc4.netlify.app/'>
                <SidebarRow Icon={AcUnitSharp} title="MVP" />
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
