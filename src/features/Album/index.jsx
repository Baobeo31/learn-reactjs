import React from 'react';
import AlbumList from './components/AlbumList';
// import PropTypes from 'prop-types';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac 1',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg',

        },
        {
            id: 2,
            name: 'Nhac 2',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg',
        },
        {
            id: 3,
            name: 'Nhac 3',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/2/b/b/72bb3bb62a79cdfb1043cafe12f4c637.jpg',
        }

    ]

    return (
        <div>
            <h2>Am Nhac</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;