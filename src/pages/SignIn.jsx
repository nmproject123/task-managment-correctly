import React, { useEffect, useState } from 'react'
import { getAllUsers, getById, createUser, chexUser } from '../utillities/UsersUtil'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


function SignIn() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])

    const login = async (user) => {
        const id_user = await chexUser(user)
        if (id_user === "user not exist" || id_user === "you have error in password") {
            alert(id_user)
        }
        else {
            console.log("id_user : ", id_user);
            navigate(`/tasks/${id_user}`);
        }
    }

    const getData = async () => {
        const getUsers = await getAllUsers()
        setUsers(getUsers);
        console.log("users : ", users);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" onBlur={(e => setUser({ ...user, name: e.target.value }))} />
                <br />
                <TextField id="outlined-basic" label="Password" type='password' variant="outlined" onBlur={(e => setUser({ ...user, password: e.target.value }))} />
                <br />
            </Box>
            <Button variant="Login" onClick={() => login(user)}>enter</Button>
            dont have count? <Button href="/signUp">create now</Button>
        </div>
    )
}
export default SignIn