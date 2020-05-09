import React from 'react';
import SearchResultsContainer from './SearchResulsContainer';
import SearchInputContainer from './SearchInputContainer';
import Status from './Status';
import SearchType from './SearchType';

function Root() {
    return (
        <div>
            <h3>You can search through Github</h3>
            <SearchType />
            <SearchInputContainer />
            <Status />
            <SearchResultsContainer />
        </div>
    );
}

export default Root;