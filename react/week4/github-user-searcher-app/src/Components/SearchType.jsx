import React, { useContext } from 'react';
import Context from '../DefaultContext'

const SearchType = () => {
    const { setSearchType } = useContext(Context);
    return (
        <div style={{ marginBottom: '20px' }}>
            <select
                onChange={(event) => setSearchType(event.target.value)}>
                <option value="namesearch">search in github names</option>
                <option value="reposearch">search inside hyf repo</option>
            </select>
        </div>
    )
}
export default SearchType;