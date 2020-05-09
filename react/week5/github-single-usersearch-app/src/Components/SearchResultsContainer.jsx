import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

const SearchResultsContainer = ({ searchToken }) => {
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (searchToken) {
            setStatus('loading');

            fetch(`https://api.github.com/search/users?q=${searchToken}`)
                .then(response => response.json())
                .then(result => {
                    setStatus('');
                    console.log(result.items)
                    setResults(result.items)
                }
                )
                .catch(error => {
                    setStatus(error)
                });
        } else {
            setResults([])
        }

    }, [searchToken])


    return (
        <div>
            <SearchResults results={results} />
        </div>
    );
}

export default SearchResultsContainer;