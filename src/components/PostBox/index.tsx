import React, { useEffect, useState } from "react";

import { NewPost } from "./styles";
import { Title, TextField, Button } from "components";
import { PostType } from "pages/Timeline";

type Props = {
  title: string;
  buttonName: string;
  onClick: (state: StateProps) => void;
  data?: PostType;
};

export type StateProps = {
  id?: number
  title: string;
  content: string;
};

export default function PostBox({ title, buttonName, data, onClick }: Props) {
  const [state, setState] = useState({ title: "", content: "" });

  useEffect(() => {
    if (data) {
      setState({ title: data.title, content: data.content });
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleClick() {
    onClick(state)
    setState({title: "", content: ""})
  }

  return (
    <NewPost>
      <Title>{title}</Title>
      <TextField
        name="title"
        type="text"
        label="Title"
        placeholder="Hello World"
        value={state.title}
        onChange={handleChange}
      />
      <TextField
        name="content"
        label="Content"
        placeholder="Content here"
        value={state.content}
        rows={4}
        onChange={handleChange}
        multiline
      />
      <Button onClick={handleClick}>{buttonName}</Button>
    </NewPost>
  );
}
