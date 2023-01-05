import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DisplayTaskComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";
import Modal from "../../Shared/components/Modal";

import { ROUTES } from "../../appContants";
import { SelectChangeEvent, TASK_STATE } from "../../constant";
import { TODO_URL } from "../../utils/constant";
import { ReactElement } from "react";

const DisplayTaskContainer = (): ReactElement => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${id}`);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const deleteTodo = (todoId: number) => {
    fetch(`${TODO_URL}/${todoId}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => err);
    navigate(ROUTES.HOME);
  };

  const markTodoCompleted = (e: SelectChangeEvent) => {
    let tempObj = {
      ...data,
      completed: e.target.value === TASK_STATE.COMPLETED,
    };
    fetch(`${TODO_URL}/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempObj),
    })
      .then((res) => res.json())
      .catch((err) => err);
  };

  const btn1Handler = () => {
    deleteTodo(data.id);
  };

  const btn2Handler = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Modal
        isOpen={openModal}
        title="Delete"
        body="Are you sure?"
        btn1="Yes"
        btn2="No"
        btn1Handler={btn1Handler}
        btn2Handler={btn2Handler}
      />
      <DisplayTaskComponent
        data={data}
        loading={loading}
        error={error}
        markTodoCompleted={markTodoCompleted}
        modalHandler={btn2Handler}
      />
    </>
  );
};

export default React.memo(DisplayTaskContainer);
