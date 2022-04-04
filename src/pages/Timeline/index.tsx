import React, { useEffect, useState } from "react";

import { Title, PostBox, Posts } from "components";
import { Container, Header, Content } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { StateProps } from "components/PostBox";


export type PostType = {
  id: number
  title: string
  username: string
  created_datetime: string
  content: string
}

export default function Timeline() {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.username);

  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData]);

  const fetchData = async () => {
      
    const data = await fetch("https://dev.codeleap.co.uk/careers/", {method: "GET"})
    
    const json = await data.json();
    
    setPosts(json.results);
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  function handleAddPost(state: StateProps) {
    fetch("https://dev.codeleap.co.uk/careers/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData,
        title: state.title,
        content: state.content,
      }),
    }).then((resp) => {
      if (resp.ok) fetchData();
    });
  }

  function handleEditPost(state: StateProps) {
    fetch(`https://dev.codeleap.co.uk/careers/${state.id}/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData,
        title: state.title,
        content: state.content,
      }),
    }).then((resp) => {
      if (resp.ok) fetchData();
    })
  }

  function handleDeletePost(id: number) {
    fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "DELETE"
    }).then((resp) => {
      if (resp.ok) fetchData();
    })
  }

  return (
    <Container>
      <Header>
        <Title white>CodeLeap Network</Title>
      </Header>
      <Content>
        <PostBox
          title="What's on your mind?"
          buttonName="Create"
          onClick={handleAddPost}
        />
        { 
          posts.map(function(el:PostType) {
            return <Posts data={el} handleEditPost={handleEditPost} handleDeletePost={handleDeletePost} />
          })
        }
      </Content>
    </Container>
  );
}
