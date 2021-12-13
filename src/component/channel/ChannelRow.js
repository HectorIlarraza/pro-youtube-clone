import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./ChannelRow.css";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"

export default class ChannelRow extends Component {
    render() {
        const { image, channel, verified, subs, noOfVideos, description } = this.props
        return (
            <div className="channelRow">
                <Avatar 
                className="channelRow__logo" 
                alt={channel} 
                src={image}
                />
                <div className="channelRow__text">
                    <h4>
                        {channel} {verified && <VerifiedIcon />}
                    </h4>
                    <p>{subs} subscribers • {noOfVideos} videos</p>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
