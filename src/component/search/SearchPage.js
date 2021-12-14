import React, { Component } from 'react';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../channel/ChannelRow";
// import VideoRow from '../video/VideoRow';
import "./SearchPage.css";
import "../video/VideoRow.css";

export default class SearchPage extends Component {
    render() {
        const { videoElList } = this.props;
        return (
            <div className="searchPage">
                <div className="searchPage__filter">
                    <TuneOutlinedIcon />
                    <h2>FILTER</h2>
                </div>
                <hr />
                
                <ChannelRow 
                    image="https://yt3.ggpht.com/yti/APfAmoFOpw32pS6zh1w-1O2n0BnICLLPN0Xr4WoSCVr_=s88-c-k-c0x00ffffff-no-rj-mo"
                    channel="Hector Ilarraza" 
                    verified 
                    subs="660k" 
                    noOfVideos={382} 
                    description="YEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRR" 
                />
                <hr />

                {videoElList}

                {/* <VideoRow 
                views="1.4M" 
                subs="660k" 
                description="Have you ever heard the term THE SON OF THE SHEPARD"
                timestamp="59 seconds ago" 
                channel="Hector Ilarraza" 
                title="Youtube Clone Project Sports Mode" 
                image="https://i.ytimg.com/vi/mSDTVSeMZnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCWExpKh0UMNh6cFl9W7fL0SGHig"
                />

                <VideoRow 
                views="1.4M" 
                subs="660k" 
                description="Have you ever heard the term THE SON OF THE SHEPARD"
                timestamp="59 seconds ago" 
                channel="Hector Ilarraza" 
                title="Youtube Clone Project Sports Mode" 
                image="https://i.ytimg.com/vi/mSDTVSeMZnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCWExpKh0UMNh6cFl9W7fL0SGHig"
                /> */}

            </div>
        )
    }
}
