import React from 'react';

const SearchInput = ({ handleChange }) => {

    return (
        <div>
            <input
                onChange={(event) => handleChange(encodeURI(event.target.value))}>
            </input>
        </div>
    );
}

export default SearchInput;