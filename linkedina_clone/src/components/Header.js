import React from "react";
import linkedinimage from "../assets/images/linkedin.png";
import "../assets/style/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ()=>{
    return(
        <div className="header">
            <div className="header_left">
                <img  src={linkedinimage} alt="linklogo"></img>
                <div className="header_search">
                <SearchIcon  />
                <input type="text" placeholder="search"></input>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleAltIcon} title="Networks" />
                <HeaderOption Icon={WorkIcon} title="jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption Icon={AccountCircleIcon} title="Me" />

            </div>
            
        </div>
    )
};

export default Header;