import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';

class App extends React.Component {
    state = {videos: [] };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
        
        this.setState({ videos: response.data.items });
   }

    render(){
        return(
            <div className = "ui container" style={{padding:"10px",display:"flex"}}>
            <SearchBar onFormSubmit = {this.onTermSubmit} />
            
        </div>
        );
    }
}


export default App;
