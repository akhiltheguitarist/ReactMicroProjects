import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'
// const App = () => {
//     const [location,setLocation] = useState(null);
    
//     useEffect(() => {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 console.log(position)
//                 setLocation(position.coords.latitude);
//              }, //success callback
//             (err) => console.log(err) //error callback
//         );
//     },[])
    
//     return <div>Latitude: {location}</div>
// }

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = { location: null} 
    }
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({ location: position.coords.latitude});
             }, //success callback
            (err) => console.log(err) //error callback
        );
    }

    componentDidUpdate(){
        console.log('component was updated')
        
    }

    render(){
        //return <div>Latitude: {this.state.location}</div>
        if(this.state.location){
            return <SeasonDisplay lat={this.state.location}/>
        }
        return <Spinner message="Please grant location request"/>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)