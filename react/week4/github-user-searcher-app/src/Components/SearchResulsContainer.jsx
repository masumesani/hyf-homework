import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import Context from '../DefaultContext'
import { useContext } from 'react';

const SearchResultsContainer = () => {
    const [results, setResults] = useState([]);
    const { setStatus, searchToken, searchType } = useContext(Context);
    useEffect(() => {
        if (searchToken !== '') {
            setStatus('loading');
            const urlToFetch = searchType === 'namesearch' ?
                `https://api.github.com/search/users?q=${searchToken}` :
                `https://api.github.com/search/repositories?q=org%3AHackYourFuture-CPH+${searchToken}`;

            fetch(urlToFetch)
                .then(response => response.json())
                .then(result => {
                    setStatus('');
                    console.log(result.items)
                    setResults(result.items)

                })
                .catch(error => {
                    setStatus(error + '');
                    setResults([])
                })
        } else {
            setResults([])
        }
    }, [searchToken])

    return <SearchResults results={results} />


}

export default SearchResultsContainer;
