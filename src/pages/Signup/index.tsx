import React, { useState } from "react";

import { Container, Content } from "./styles";
import { Title, TextField, Button } from "components";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { setUsername } from 'actions/userSlice'
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate()
  const userData = useSelector((state: RootState) => state.user.username)
  const dispatch = useDispatch()

  const [state, setState] = useState({username:''})

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setState((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  function handleSubmit(){
    dispatch(setUsername(state.username))
    navigate('/timeline')
  }

  return (
    <Container>
      <Content>

          <Title>Welcome to CodeLeap network!</Title>

          <TextField name="username" type="text" label="Please enter your username" placeholder="John doe" value={state.username} onChange={handleChange} />

          
          <Button disabled={state.username === ''} onClick={handleSubmit}>Create</Button>
      </Content>
    </Container>
  );
}
