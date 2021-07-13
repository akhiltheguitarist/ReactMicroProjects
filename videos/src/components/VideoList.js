import React from 'react'
import VideoItem from './VideoItem';

const VideoList = (props) => {
    
   const VideoArray =  props.videos.map((video) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} key={video.id.videoId} video={video}/>
    })

    return <div className="ui relaxed divided list">{VideoArray}</div>;

}

export default VideoList;