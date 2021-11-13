import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail]= useState('');
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmint= e =>{
        e.preventDefault()
    }
    return (
        <div>
            <h2>This is Admin</h2>
            <form onSubmit={handleAdminSubmint}>
            <TextField  label="Email"
            type="email"
            onBlur={handleOnBlur}
             variant="standard" />
            <Button type="submit" variant="contained"> Make Admin</Button>



            </form>
        </div>
    );
};

export default MakeAdmin;