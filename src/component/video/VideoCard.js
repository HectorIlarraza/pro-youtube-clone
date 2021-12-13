import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./VideoCard.css"

export default class VideoCard extends Component {
    render() {
        const { image, title, channel, views, timestamp, channelImage } = this.props;
        return (
            <div className="videoCard">
                <img className="videoCard__thumbnail" src={image} alt="" />
                <div className="videoCard__info">
                    <Avatar 
                    className="videoCard__avatar" 
                    alt={channel} 
                    src={channelImage} 
                    />
                    <div className="videoCard__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>
                            {views} * {timestamp}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
