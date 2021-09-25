import React from 'react'

const FeedsOptions = ({title, Icon, color}) => {
    return (
        <div className="feed_btn">
            {Icon && (<Icon style={{color:color}}/>)}
            {title && <h5>{title}</h5>}
        </div>
    );
};

export default FeedsOptions;
