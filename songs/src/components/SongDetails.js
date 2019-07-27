import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({songs}) => {
    if(!songs){
        return <div>plase select a song</div>
    }
    return ( 
        <div>
            <h1>Selected Song  </h1>
            <p>Song Title:<h3>{songs.title}</h3></p>
            <p>Song Duration:<h3>{songs.duration}</h3></p>
        </div>
    )
}

const mapStateToProps = state => {
   return { songs: state.selectedSong}
}
export default connect(mapStateToProps) (SongDetails)
