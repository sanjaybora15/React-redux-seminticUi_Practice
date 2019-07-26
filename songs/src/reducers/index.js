import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Tum hi ho', duration: '5:34'},
        {title: 'humdard', duration: '4:34'},
        {title: 'Tum ho pass mere', duration: '3:53'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
        if(action.type === 'SONG_SELECTED'){
            return action.payload;
        }
        return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})