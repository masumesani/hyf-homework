import React, { useContext } from 'react';
import Context from '../DefaultContext';
import _ from 'lodash';

const SearchInput = () => {
    const { setSearchToken } = useContext(Context);
    const handleChange = _.debounce((str) => {
        setSearchToken(str)
    }, 300);
    return (
        <div>
            <input
                onChange={(event) => handleChange(encodeURI(event.target.value))}></input>
        </div>
    )
}
export default SearchInput;