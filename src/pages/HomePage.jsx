import React from 'react'
import { useNavigate } from 'react-router';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>my tasks</h1>
            <div style={{ textAlign: 'center' }}>

                <Button href="/signIn">i have account</Button>

                <Button href="/signUp"> new account</Button>
            </div>
            <br />
        </div>
    )
}
