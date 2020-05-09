import React, { useState } from 'react';
import Context from '../DefaultContext';

const GitHubSearchProvider = ({ children }) => {
    const [searchToken, setSearchToken] = useState('');
    const [status, setStatus] = useState('');
    const [searchType, setSearchType] = useState('namesearch');
    const [results, setResults] = useState([]);
    return (
        <div>
            <Context.Provider value={{
                searchToken,
                setSearchToken,
                status,
                setStatus,
                searchType,
                setSearchType,
                results,
                setResults
            }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default GitHubSearchProvider;

