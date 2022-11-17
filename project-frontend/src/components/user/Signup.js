import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap";
import './signup.css';


export default function Signup(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const regsiterHandler = () => {
        props.register(newUser)
    }

  return (
    <div>
        <h1>SIGN UP</h1>


        <Container id = 'signup'>
            <Form.Group id = 'username'>

                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="username" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group id = 'email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" type="email" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group id = 'password'>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <br></br>

            <Button id = 'button' variant="primary" onClick={regsiterHandler}>Register</Button>

        </Container>
        
    </div>
  )
}