import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails'

const App = () => {
    return (
        <div className = "ui container grid" style={{margin:'50px'}}>
            <div className='ui row'>
                <div className='column eight wide'>
                <SongList/>
                <div style={{ backgroundColor:'#2475B0', textAlign:'center',color:'white'}}><SongDetails /></div>
                </div>  
            </div>   
        </div>
    )
}

export default App;
