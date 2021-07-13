import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    
    state = {
        videos: [],
        selectedVideo : null
    }
    
    componentDidMount(){
        this.onTermSubmit('kids')
    }

    onTermSubmit = async(term) => {
        const response = await youtube.get('/search',
        {params: {
                q: term
            }
        }   
        )

        this.setState( { 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }


    render(){
        
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                Found {this.state.videos.length} videos
                <div className="ui grid">
                    <div className="ui row">
                <div className="eleven wide column">
                    {this.state.selectedVideo != null &&
                    <VideoDetail video={this.state.selectedVideo} />
                    }
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
                
            </div>
            </div>
            </div>
        )
    }

}

export default App;