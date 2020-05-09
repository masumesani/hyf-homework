import React from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';


const SearchInput = ({ setSearchToken }) => {

    const handleChange = _.debounce((str) => {
        setSearchToken(str)
    }, 300)
    return (
        <div style={{ paddingBottom: '2em' }}>
            <TextField
                id="outlined-basic"
                label="Search through github"
                variant="outlined"
                onChange={(event) => handleChange(encodeURI(event.target.value))}
            />
        </div>
    );
}

export default SearchInput;