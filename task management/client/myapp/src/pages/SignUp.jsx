import React, { useState, useEffect } from 'react'
import { createUser, getAllUsers } from '../utillities/UsersUtil'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ name: "", password: "", email: "" })
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const [userExist, setUserExist] = useState(false);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const login = async (user) => {
    if (details.name != "" && details.email != "" && details.password != "") {
      const id = await createUser(user)
      getData()
      setDetails({ ...details, name: "" })
      console.log("id  : ", id);
      console.log("user : ", user);
      navigate(`/tasks/${id}`);

    }
    console.log("error created");
    console.log("users : ", users);
  }

  const getData = async () => {
    const getUsers = await getAllUsers()
    setUsers(getUsers)
  }

  const checkValidEmail = (e) => {
    console.log("email : ", e.target.value);
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value);
    console.log("validRegex : ",validRegex);
    // if (!e.target.value.match(validRegex)) {
    if (validRegex) {
      setValidEmail(false)
      setDetails({ ...details, email: e.target.value })
    } else {
      setValidEmail(true)
      setDetails({ ...details, email: "" })
      console.log("true");
    }
  }

  const checkValidPassword = (e) => {
    // console.log("eeeeeeeeeeeee : ",e.target.value);
    const inputRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).+$/.test(e.target.value)
    // console.log("includeNumber  : ",includeNumber);
    if (inputRegex) {
      setValidPassword(false);
      setDetails({ ...details, password: e.target.value });
    }
    else {
      setDetails({ ...details, password: "" });
      setValidPassword(true);

    }
  }
  //     navigate(`/UserPage/${newUser.data}`);
  //   } else{
  //     if (newUser.data == "user already exists")
  //       setUserExist(true);
  //     else
  //       setUserExist(false);
  //     if (newUser.data == "password already exists")
  //       setPasswordExist(true);
  //     else
  //       setPasswordExist(false);
  //   }
  // }

  const checkValidName = (e) => {
    if (users.length === 0) {
      setDetails({ ...details, name: e.target.value })
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === e.target.value) {
        console.log("this name exist");
        setUserExist(true)
        setDetails({ ...details, name: "" })
        break
      }
      else {
        console.log("after break");
        setUserExist(false)
        setDetails({ ...details, name: e.target.value })
      }
    }
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

        <TextField helperText={userExist ? "User already exists" : ""}
          id="outlined-basic" label="Name" variant="outlined" onChange={(e) => checkValidName(e)} />
        <br />
        <TextField helperText={validPassword ? "Must include a digit and a character" : ""} id="outlined-basic" label="Password" type='password' variant="outlined" onChange={(e) => checkValidPassword(e)} />
        <br />
        <TextField helperText={validEmail ? "reuired field" : ""} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => checkValidEmail(e)} />
        <br />
      </Box>
      <Button variant="Login" onClick={() => login(details)}>Login</Button>
      You have an account <Button href="/signIn">come in</Button>



    </div>
  )
}


export default SignUp
