import React from 'react';
import { Typography, Link } from '@material-ui/core';

const About = () => {
    return (<div style={{ marginTop: "4em" }}>
        <Typography >This is a project for react course class 12 in
            <Link style={{ marginLeft: '0.5em' }}
                href="https://www.hackyourfuture.dk/">
                Hackyourfuture </Link>
        </Typography>

    </div>);
}

export default About;