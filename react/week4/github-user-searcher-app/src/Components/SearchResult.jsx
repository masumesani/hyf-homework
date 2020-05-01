import React from 'react';

const SearchResult = ({ avatar_url, html_url }) => {
    return (
        <div style={{ width: '30%', marging: 0 }}>
            <a style={{ width: '100%' }} href={html_url}>
                {avatar_url ? <img style={{ width: '100%' }} src={avatar_url} alt={html_url} title={html_url} /> : html_url}
            </a>
        </div>
    );
}

export default SearchResult;