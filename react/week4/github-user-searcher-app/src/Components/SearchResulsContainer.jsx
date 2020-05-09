import React from 'react';
import SearchResults from './SearchResults';
import Context from '../DefaultContext'
import { useContext } from 'react';

const SearchResultsContainer = () => {
    const { results } = useContext(Context);
    return <SearchResults results={results} />
}

export default SearchResultsContainer;
