import React from 'react';
import SearchResultsContainer from './SearchResulsContainer';
import SearchInput from './SearchInput';
import Status from './Status';
import SearchType from './SearchType';

function Root() {
    return (
        <div>
            <h3>You can search through Github</h3>
            <SearchType />
            <SearchInput />
            <Status />
            <SearchResultsContainer />
        </div>
    );
}

export default Root;