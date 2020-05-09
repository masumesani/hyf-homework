import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'center',
        height: '100%'
    }
    return (
        <div style={style}>
            {results.length === 0 ? (<p>No result</p>) :
                (results.map(result => (
                    <SearchResult
                        key={result.id}
                        id={result.id}
                        login={result.login}
                        avatar_url={result.avatar_url || result.owner.avatar_url}
                        html_url={result.html_url}
                    />
                ))

                )}
        </div>
    );
}

export default SearchResults;