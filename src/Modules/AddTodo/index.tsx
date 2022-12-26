import React, { useState } from "react";

import AddTodoComponent from "./components"

import { TODO_URL } from "../DisplayTodo/constant";

const AddTodoContainer=()=>{
    const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let tempObj = {};
    if (
      title?.trim() !== "" &&
      title !== undefined &&
      body?.trim() !== "" &&
      body !== undefined
    ) {
      let resData = await fetch(TODO_URL);
      let res = await resData.json();

      tempObj = {
        ...tempObj,
        id: res[res.length-1]["id"]+1,
        title: title,
        body: body,
        completed: false,
      };
      
      await fetch(TODO_URL, {
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

  return (
    <AddTodoComponent
    title={title}
    setTitle={setTitle}
    body={body}
    setBody={setBody}
     handleSubmit={handleSubmit}
    />
  );
}

export default React.memo(AddTodoContainer);