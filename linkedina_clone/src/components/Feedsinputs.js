import React,{useState} from 'react'
import FeedsOption from './FeedsOptions.js'
import { Avatar } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';


const Feedsinputs = () => {
    const [EnterPost, setEnterPost] = useState("")
    const inputchangehandler = (event) =>{
        setEnterPost(event.target.value);
    }
    const createposthandler = (e) =>{
        e.preventDefault();
        alert(EnterPost);
    }
    return (
        <div className="feed_input_container">
            <div className="feed_input_write">
                <Avatar />
                <div className="text_container">
                    <form>
                        <input type="text" className="text_area"
                        placeholder="Start Posting"></input>
                        <input type="submit" value={setEnterPost} onChange={inputchangehandler}
                        onClick={createposthandler} style={{display:"none"}} />
                        
                    </form>
                </div>
            </div>
            <div className="input_option_container">

            <FeedsOption title="Photo" Icon={PhotoIcon} color="#70b5f9" />
            <FeedsOption title="Videos" Icon={YouTubeIcon} color="#7fc15e" />
            <FeedsOption title="Events" Icon={EventAvailableIcon} color="#e7133a" />
            <FeedsOption title="Articles" Icon={ArticleIcon} color="#fc9295" />

            </div>
        </div>
    );
};

export default Feedsinputs;
