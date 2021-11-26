import React from 'react';
import '../assets/style/Feeds.css';
import Feedsinputs from './Feedsinputs';
import FeedPost from './FeedPost';

const Feeds = () => {
    return (
        <div className="feeds_container">
            <Feedsinputs />
            <FeedPost />
        </div>
    );
};

export default Feeds;
