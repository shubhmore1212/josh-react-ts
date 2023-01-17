import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import AddTodoComponent from "./components";
import Modal from "../../Shared/components/Modal";

import { addTodo } from "../../services/todos.services";

import { ROUTES } from "../../appContants";
import {
  FormSubmitEvent,
  InputChangeEvent,
  TextAreaChangeEvent,
} from "../../constant";

const AddTodoContainer = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation(addTodo, {
    onSuccess: () => {
      setTitle("");
      setBody("");
      setDate("");
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      console.log(error);
    },
  });

  const handleSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    if (title?.trim() !== "" && body?.trim() !== "") {
      let tempObj = {
        title,
        body,
        date,
        completed: false,
      };
      mutate({ body: tempObj });
      setOpenModal(true);
    }
  };

  const titleHandler = (e: InputChangeEvent) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e: TextAreaChangeEvent) => {
    setBody(e.target.value);
  };

  const dateHandler = (e: InputChangeEvent) => {
    setDate(e.target.value);
  };

  const btn1Handler = () => {
    queryClient.invalidateQueries("todos");
    navigate(ROUTES.HOME);
  };

  const btn2Handler = () => {
    setOpenModal(!openModal);
  };

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
