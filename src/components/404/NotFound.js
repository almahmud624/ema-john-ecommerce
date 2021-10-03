import { Button } from '@mui/material';
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <main>
            <div id="error-404">
                <div class="fof">
                    <h1>Error 404</h1>
                    <br />
                    <Button variant="outlined" ><a href="/">Go Back Home</a></Button>
                </div>
            </div>
        </main>
    );
};

export default NotFound;