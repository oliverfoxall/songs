import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from "../actions";

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
              <div className='level' key={song.title}>
                  {/*left side*/}
                  <div className='level-left'>
                      <div className='level-item'>
                          <p className='subtitle is-5'>
                              {song.title}
                          </p>
                      </div>
                  </div>
                  {/*right side*/}
                  <div className='level-right'>
                      <div className='level-item'>
                          <button className='button' onClick={() => {
                              this.props.selectSong(song);
                          }}>
                              Select
                          </button>
                      </div>
                  </div>
              </div>
            );
        })
    }

    render() {
        // this.props === { songs: state.songs }
        console.log(this.props);
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);