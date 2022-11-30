import React from 'react';
import Main from '../Components/Main';
import Row from '../Components/Row';
import requests from '../Requests'

const Home = () => {
    return (
        <> 
        <Main />
        <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='4' title='Now Playing' fetchURL={requests.requestNowPlaying} />
        </>
    );
}

export default Home;
