import React, { ChangeEvent, FormEvent, useState } from "react";

import AddTodoComponent from "./components";

const AddTodoContainer = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title?.trim() !== "" && body?.trim() !== "") {
      let resData = await fetch(process.env.REACT_APP_TODO_URL as string);
      let res = await resData.json();
      let newID = res.length ? res[res.length - 1]["id"] + 1 : 1;
      let tempObj = {
        id: newID,
        title,
        body,
        completed: false,
      };
      await fetch(process.env.REACT_APP_TODO_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tempObj),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
    }
    setTitle("");
    setBody("");
  };

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <AddTodoComponent
      title={title}
      titleHandler={titleHandler}
      body={body}
      bodyHandler={bodyHandler}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(AddTodoContainer);
