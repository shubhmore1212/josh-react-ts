import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddTodoComponent from "./components";
import Modal from "../../Shared/components/Modal";

import { ROUTES } from "../../appContants";
import { TODO_URL } from "../../utils/constant";

const AddTodoContainer = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title?.trim() !== "" && body?.trim() !== "") {
      let resData = await fetch(TODO_URL);
      let res = await resData.json();
      let newID = res.length ? res[res.length - 1]["id"] + 1 : 1;
      let tempObj = {
        id: newID,
        title,
        body,
        date,
        completed: false,
      };
      await fetch(TODO_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tempObj),
      })
        .then((res) => {
          setTitle("");
          setBody("");
          setDate("");
          setOpenModal(true);
          return res.json();
        })
        .catch((err) => console.log(err.message));
    }
  };

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const btn1Handler=()=>{
    navigate(ROUTES.HOME);
  }

  const btn2Handler=()=>{
    setOpenModal(!openModal);
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        title="Hello Planner!"
        body="Task Added Successfully"
        btn1="Show List"
        btn2="Add More..."
        btn1Handler={btn1Handler}
        btn2Handler={btn2Handler}
      />
      <AddTodoComponent
        title={title}
        titleHandler={titleHandler}
        body={body}
        bodyHandler={bodyHandler}
        date={date}
        dateHandler={dateHandler}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default React.memo(AddTodoContainer);
