import React from 'react';
import SearchResult from './SearchResult';
import { Link } from 'react-router-dom';

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
            {
                results.length === 0 ? (<p>No result</p>)
                    : results.map(result => (
                        <Link style={{ width: '30%' }} key={result.id} to={`/profile/${result.login}`}>
                            <SearchResult
                                id={result.id}
                                login={result.login}
                                avatar_url={result.avatar_url
                                    || result.owner.avatar_url}
                                html_url={result.html_url}
                            />
                        </Link>
                    )
                    )
            }
        </div>
    );
}

export default SearchResults;