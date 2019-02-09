import { combineReducers } from 'redux';


// Reducers
const songsReducer = () => {
    return [{
        title: 'Sweet But Psycho', duration: '4:05'
    }, {
        title: 'Dancing With A Stranger', duration: '2:30'
    }, {
        title: 'Giant', duration: '3:15'
        },{
        title: 'Don\'t Call Me Up', duration: '1:45'
        }]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

// combine the reducers together
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});