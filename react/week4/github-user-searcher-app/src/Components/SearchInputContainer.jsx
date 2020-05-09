import React, { useEffect, useContext } from 'react';
import Context from '../DefaultContext';
import SearchInput from './SearchInput';
import { useState } from 'react';
import _ from 'lodash';

const SearchInputContainer = () => {
    const [searchToken, setSearchToken] = useState('');
    const {
        setStatus,
        searchType,
        setResults
    } = useContext(Context);

    const handleChange = _.debounce((str) => {
        setSearchToken(str)
    }, 300);

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

    return (
        <div>
            <SearchInput handleChange={() => handleChange()} />
        </div>
    )
}
export default SearchInputContainer;