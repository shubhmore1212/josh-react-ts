import React, { useState, ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import DisplayTaskComponent from "./components";
import Modal from "../../Shared/components/Modal";
import Loader from "../../Shared/components/Loader";

import {
  removeTodo,
  updateTodo,
  fetchTodo,
} from "../../services/todos.services";

import { ROUTES } from "../../appContants";
import { SelectChangeEvent, TASK_STATE } from "../../constant";

const DisplayTaskContainer = (): ReactElement => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("todo", () => fetchTodo(id));

  const deleteTodo = (todoId?: number) => {
    removeTodo(todoId);
    navigate(ROUTES.HOME);
  };

  const { mutate } = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const markTodoCompleted = (e: SelectChangeEvent) => {
    let tempObj = {
      ...data,
      completed: e.target.value === TASK_STATE.COMPLETED,
    };
    mutate({ id: tempObj.id, body: tempObj });
  };

  const btn1Handler = () => {
    deleteTodo(data?.id);
  };

  const btn2Handler = () => {
    setOpenModal(!openModal);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error..</div>;
  }

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
        markTodoCompleted={markTodoCompleted}
        modalHandler={btn2Handler}
      />
    </>
  );
};

export default React.memo(DisplayTaskContainer);
