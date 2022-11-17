import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap";
import './signin.css';

export default function Signin(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div id='signbody'>
        <h1>SIGN IN</h1>

        <Container>
            <Form.Group id = 'username'>

                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="username" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group id= 'password'>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <br></br>

            <Button id='button' variant="primary" onClick={loginHandler}>Login</Button>

        </Container>
        
    </div>
  )
}

