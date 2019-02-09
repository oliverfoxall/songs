import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <section className='section'>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-half'>
                        <SongList/>
                    </div>
                    <div className='column is-half'>
                        <SongDetail/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default App;