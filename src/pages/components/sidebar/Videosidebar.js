import React, { useState} from 'react'
import "./Videosidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function Videosidebar({likes, messages, shares}) {

    const [liked, setliked] = useState(false)

    function handdleLike(){
        setliked(!liked)

    }
  return (
    <div className='Videosidebar'>
        <div 
           className='Videosidebar__options'
           onClick={handdleLike}
           >
            { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            
            <p>{ liked ? likes + 1 : likes } </p>
        </div>
        <div className='Videosidebar__options'>
            <ChatIcon fontSize='large'/>
            <p>{messages} </p> 
         </div>
         <div className='Videosidebar__options'>
            <ShareIcon fontSize='large'/>
            <p> {shares} </p> 
        </div>

         </div>
        
       
  )
}

export default Videosidebar