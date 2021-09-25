import { Avatar } from '@mui/material';
import React from 'react';
import '../assets/style/SideBar.css';
import Background from '../assets/images/Bgimage2.jpg';
import { color } from '@mui/system';

const SideBar = () => {
    const RecentItems = (title)=>{
        return(
            <div>
            <p > {title} </p>
        </div>
        )
    }
    return (
        <div className="SideBar_main">

        <div className="sidebar_left">
            <img src={Background}  />
            <div className="avatar"><Avatar  />  </div>
                
                <h4>Hamza Sheikh</h4>
                <p className="email">zafarhamza@gmail.com</p>

                <div className="sidebar_left_stats">
                <p className="display_stats">Who view your Profile</p>
                <p className="number_stats">52</p>
                </div>

                <div className="sidebar_left_stats">
                <p className="display_stats">View Your Post</p>
                <p className="number_stats">101</p>
                </div>                
            </div>

            <div className="sidebar_recent">
                <h5> <p>Recent</p> </h5>
                <p className="pakistan">#Pakistan</p>
                    {RecentItems("Carrer Join")}
                    {RecentItems("Dubia")}
                    {RecentItems("Pakistan")}
                    {RecentItems("Ios")}
                </div>

            </div>

        
    )
}

export default SideBar



                