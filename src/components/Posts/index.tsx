import React, { useState } from "react";

import { PostWrapper, PostHeader, PostContent } from "./styles";
import { Title, Icon, DeleteModal, EditModal } from "components";
import { PostType } from "pages/Timeline";

type Props = {
  data: PostType;
  handleEditPost: (state: { id: number, title: string; content: string }) => void;
  handleDeletePost: (id: number) => void
};

type PostModel = {
  title: string
  content: string
}



function timeSince(date: Date) {
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  console.log(seconds)
  const interval = intervals.find(i => i.seconds <= seconds);
  if(interval){
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
  }
}

export default function Posts({ data, handleEditPost, handleDeletePost }: Props) {
  const [isModalState, setIsModalState] = useState("");
  const { id, title, username, content, created_datetime } = data;

  function handleOpen(module: string) {
    setIsModalState(module);
  }

  function handleClose() {
    setIsModalState("");
  }

  function handleEdit(state:PostModel) {
    handleEditPost({ id: data.id, title: state.title, content: state.content });

    handleClose();
  }

  function handleDelete() {
    handleDeletePost(data.id)

    handleClose()
  }

  return (
    <>
      {isModalState === "deleteModal" && (
        <DeleteModal handleClose={handleClose} onClick={handleDelete}/>
      )}
      {isModalState === "editModal" && <EditModal data={data} onClick={handleEdit} />}
      <PostWrapper>
        <PostHeader>
          <Title white>{title}</Title>
          <div>
            <Icon
              iconSelect="DeleteIcon"
              onClick={() => handleOpen("deleteModal")}
            />
            <Icon
              iconSelect="EditIcon"
              onClick={() => handleOpen("editModal")}
            />
          </div>
        </PostHeader>

        <PostContent>
          <div>
            <strong>{username}</strong>
            <p>{timeSince(new Date(created_datetime))}</p>
          </div>
          <p>{content}</p>
        </PostContent>
      </PostWrapper>
    </>
  );
}
