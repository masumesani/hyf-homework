import React from 'react';
import Context from '../DefaultContext'
import { useContext } from 'react';

const Status = () => {
    const { status } = useContext(Context);
    return (<div>
        <p>{status}</p>
    </div>);
}

export default Status;