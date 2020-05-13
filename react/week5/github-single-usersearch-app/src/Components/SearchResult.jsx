import React from 'react';

const SearchResult = ({ avatar_url, html_url }) => {
    return (
        <div
            //className="col-4"
            style={{ width: '100%', marging: 0 }}>
            {avatar_url ? <img
                style={{ width: '100%' }} src={avatar_url}
                alt={html_url} title={html_url} /> : html_url}
        </div>
    );
}

export default SearchResult;