import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResultsContainer from './SearchResultsContainer';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = () => {

    const [searchToken, setSearchToken] = useState(() => '');

    return (
        <div style={{ marginTop: "3em   " }}>
            <SearchInput setSearchToken={setSearchToken} />
            <SearchResultsContainer
                searchToken={searchToken}
            />
            <Link
                style={{ textDecoration: 'none' }}
                to={'/about'} >
                <Button variant="outlined">
                    About
                </Button>
            </Link>
        </div>

    );
}

export default Home;

